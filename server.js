const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

// Serve static files from the current directory
app.use(express.static(__dirname));

// Database of destinations
const destinations = [
    { name: 'Eje Cafetero', minPrice: 800000, type: 'Nacional', description: 'Cultura, café y paisajes verdes infinitos.' },
    { name: 'Medellín', minPrice: 900000, type: 'Nacional', description: 'La ciudad de la eterna primavera.' },
    { name: 'Cartagena', minPrice: 1500000, type: 'Nacional', description: 'Historia, murallas y playas de ensueño.' },
    { name: 'Santa Marta', minPrice: 1300000, type: 'Nacional', description: 'Sierra Nevada y playas cristalinas.' },
    { name: 'San Andrés', minPrice: 1800000, type: 'Nacional', description: 'El mar de los siete colores.' },
    { name: 'Amazonas', minPrice: 2000000, type: 'Nacional', description: 'Conexión total con la naturaleza.' },
    { name: 'Bolivia', minPrice: 3500000, type: 'Internacional', description: 'El espejo del mundo en el Salar de Uyuni.' },
    { name: 'Perú', minPrice: 3800000, type: 'Internacional', description: 'Gastronomía mundial y la magia de los Incas.' },
    { name: 'México', minPrice: 4200000, type: 'Internacional', description: 'Cultura vibrante, tacos y playas.' },
    { name: 'Brasil', minPrice: 4500000, type: 'Internacional', description: 'Samba, playas y la majestuosa Amazonía.' },
    { name: 'Argentina', minPrice: 5000000, type: 'Internacional', description: 'Tango, asados y la belleza de la Patagonia.' },
    { name: 'Chile', minPrice: 5500000, type: 'Internacional', description: 'Vinos, desiertos y glaciares.' },
    { name: 'España', minPrice: 8000000, type: 'Internacional', description: 'Puerta de entrada a Europa.' },
    { name: 'Corea del Sur', minPrice: 12000000, type: 'Internacional', description: 'Tradición milenaria y modernidad vibrante.' },
    { name: 'Japón', minPrice: 15000000, type: 'Internacional', description: 'Tecnología, templos y sushi.' }
];

// API Endpoint for recommendations
app.get('/api/recommend', (req, res) => {
    const budget = parseInt(req.query.budget);

    // Simulate network delay for "searching" effect
    setTimeout(() => {
        if (!budget || isNaN(budget)) {
            return res.status(400).json({ error: 'Presupuesto inválido' });
        }

        if (budget < 200000) {
            return res.json({
                success: false,
                message: 'Lastimosamente el presupuesto es bajo para nuestros paquetes actuales. ¡Sigue ahorrando para tu próxima aventura!'
            });
        }

        // Filter destinations within budget
        // We show destinations where budget >= minPrice
        // We sort by price descending to show the "best" options first (closest to budget)
        const affordableDestinations = destinations
            .filter(d => budget >= d.minPrice)
            .sort((a, b) => b.minPrice - a.minPrice);

        if (affordableDestinations.length === 0) {
            return res.json({
                success: false,
                message: 'Tu presupuesto es un buen inicio, pero nuestros paquetes comienzan desde $800,000 COP. ¡Estás cerca!'
            });
        }

        // Pick top 3 recommendations
        const topRecommendations = affordableDestinations.slice(0, 3);

        res.json({
            success: true,
            message: `Con tu presupuesto de $${budget.toLocaleString('es-CO')} COP, podrías viajar a:`,
            data: topRecommendations
        });

    }, 1500); // 1.5 second delay
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
