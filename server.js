require('dotenv').config();
const express = require('express');
const path = require('path');
const { GoogleGenerativeAI } = require('@google/generative-ai');

const app = express();
const PORT = 3000;

// Initialize Gemini
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });

// Serve static files from the current directory
app.use(express.static(__dirname));

// Fallback destinations in case API fails
const fallbackDestinations = [
    { name: 'Eje Cafetero', minPrice: 800000, type: 'Nacional', description: 'Cultura, café y paisajes verdes infinitos.' },
    { name: 'Medellín', minPrice: 900000, type: 'Nacional', description: 'La ciudad de la eterna primavera.' },
    { name: 'Cartagena', minPrice: 1500000, type: 'Nacional', description: 'Historia, murallas y playas de ensueño.' }
];

// API Endpoint for recommendations
app.get('/api/recommend', async (req, res) => {
    const budget = parseInt(req.query.budget);

    if (!budget || isNaN(budget)) {
        return res.status(400).json({ error: 'Presupuesto inválido' });
    }

    // Minimum budget
    if (budget < 100000) {
        return res.json({
            success: false,
            message: 'Lastimosamente el presupuesto es bajo para nuestros paquetes actuales (Mínimo $300.000 COP). ¡Sigue ahorrando para tu próxima aventura!'
        });
    }

    try {
        console.log(`Asking Gemini for recommendations with budget: ${budget}`);
        const prompt = `
            Actúa como un experto agente de viajes en Colombia.
            El usuario tiene un presupuesto de $${budget} COP.
            Recomienda 3 destinos turísticos (ciudades o regiones) que sean accesibles con ese presupuesto aproximado (incluyendo transporte y estadía básica).
            Pueden ser destinos nacionales (Colombia) o internacionales si el presupuesto es alto (> 4.000.000 COP).
            Prioriza destinos interesantes y variados (ej: si es bajo presupuesto: pueblos cercanos, si es alto: países).
            
            IMPORTANTE: Responde ÚNICAMENTE con un arreglo JSON válido. No uses Markdown. No uses bloques de código.
            El formato debe ser estrictamente así:
            [
                { "name": "Nombre Destino", "type": "Nacional" o "Internacional", "minPrice": precio_estimado_numero, "description": "Breve descripción atractiva" }
            ]
        `;

        const result = await model.generateContent(prompt);
        const response = await result.response;
        let text = response.text();
        console.log('Gemini Raw Response:', text);

        // Clean up markdown code blocks if present
        text = text.replace(/```json/g, '').replace(/```/g, '').trim();

        const recommendations = JSON.parse(text);

        res.json({
            success: true,
            message: `Con tu presupuesto de $${budget.toLocaleString('es-CO')} COP, te recomendamos:`,
            data: recommendations
        });

    } catch (error) {
        console.error('Error calling Gemini:', error);
        if (error.response) {
            console.error('API Response Error:', JSON.stringify(error.response, null, 2));
        }

        // Fallback to local logic if AI fails
        const affordable = fallbackDestinations.filter(d => budget >= d.minPrice);
        res.json({
            success: true,
            message: `(Modo Offline - Error IA) Con tu presupuesto de $${budget.toLocaleString('es-CO')} COP, podrías viajar a:`,
            data: affordable.length > 0 ? affordable : fallbackDestinations.slice(0, 1)
        });
    }
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
