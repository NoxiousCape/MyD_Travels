# M&D Travels ✈️

Sitio web moderno y atractivo para la agencia de viajes **M&D Travels**, fundada por Daniel Steven Páez Zamudio y Dora Marcela Rincón Acevedo.

![M&D Travels](https://img.shields.io/badge/Version-2.0.0-blue)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)
![Node.js](https://img.shields.io/badge/Node.js-339933?logo=nodedotjs&logoColor=white)
![Express](https://img.shields.io/badge/Express.js-000000?logo=express&logoColor=white)
![Gemini AI](https://img.shields.io/badge/Gemini_AI-8E75B2?logo=google&logoColor=white)

## 📋 Descripción

M&D Travels es una agencia de viajes que ofrece experiencias inolvidables tanto en destinos nacionales como internacionales. Este sitio web presenta una interfaz moderna, intuitiva y completamente responsiva.

**Novedad v2.0.0**: Ahora integra **Inteligencia Artificial de Google Gemini** para generar recomendaciones de viaje personalizadas y dinámicas basadas en el presupuesto del usuario.

## ✨ Características

### 🎨 Diseño Moderno
- **Paleta de colores vibrante**: Azul, morado, amarillo y blanco
- **Animaciones suaves**: Transiciones y efectos hover
- **Diseño responsivo**: Adaptable a dispositivos móviles, tablets y desktop
- **Tipografía moderna**: Google Fonts (Outfit)

### 🌍 Funcionalidades

#### Destinos
- **Categorización por tabs**: Destinos nacionales e internacionales
- **Tarjetas interactivas**: Con imágenes de alta calidad de Unsplash
- **Iconos de transporte**: Indicadores visuales (avión, bus, crucero)
- **Información de precios**: Precios desde para cada destino

#### 🤖 Recomendador Inteligente con IA (Gemini 2.5 Flash)
- **Inteligencia Artificial**: Powered by Google Gemini
- **Recomendaciones Dinámicas**: No limitado a una lista fija, la IA sugiere destinos reales según el presupuesto
- **Presupuesto Mínimo**: $300.000 COP
- **Búsqueda en Tiempo Real**: Efecto de "Buscando las mejores opciones..."
- **Fallback Automático**: Si la IA falla, usa una base de datos local
- **Destinos Variados**: Desde pueblos cercanos (Villa de Leyva, Tunja) hasta destinos internacionales

#### Sección "Por qué viajar con nosotros"
- Atención personalizada
- Soporte 24/7
- Mejores precios del mercado

#### Formulario de Contacto
- Campos para nombre, email y mensaje
- Diseño limpio y accesible

## 🚀 Tecnologías Utilizadas

- **Frontend**:
    - HTML5, CSS3, JavaScript (Vanilla)
    - Font Awesome 6.0, Google Fonts
- **Backend**:
    - **Node.js**: Entorno de ejecución
    - **Express**: Framework web para la API
    - **Google Gemini AI**: Modelo `gemini-2.5-flash` para recomendaciones inteligentes
    - **dotenv**: Gestión segura de variables de entorno

## 📁 Estructura del Proyecto

```
M&D Travels/
│
├── server.js           # Servidor Backend (API + Gemini AI)
├── package.json        # Dependencias (Express, @google/generative-ai, dotenv)
├── .env                # Variables de entorno (API Key)
├── index.html          # Página principal
├── style.css           # Estilos globales
├── script.js           # Lógica de interacción (Fetch API)
└── README.md           # Este archivo
```

## 🛠️ Instalación y Uso

### Requisitos Previos
- **Node.js** instalado (v14 o superior)
- **API Key de Google Gemini** ([Obtener aquí](https://aistudio.google.com/app/apikey))
- Navegador web moderno

### Pasos para Ejecutar

1. **Clonar el repositorio**
   ```bash
   git clone <url-del-repositorio>
   cd "M&D Travels"
   ```

2. **Instalar dependencias**
   ```bash
   npm install
   ```

3. **Configurar API Key**
   - Crea un archivo `.env` en la raíz del proyecto
   - Agrega tu API Key de Gemini:
     ```
     GEMINI_API_KEY=TU_API_KEY_AQUI
     ```

4. **Iniciar el servidor**
   ```bash
   node server.js
   # O también:
   npm start
   ```
   Verás el mensaje: `Server running at http://localhost:3000`

5. **Abrir la aplicación**
   - Abre tu navegador y ve a: **[http://localhost:3000](http://localhost:3000)**

## 🎯 API Endpoints

### `GET /api/recommend`
Obtiene recomendaciones de viaje generadas por IA basadas en un presupuesto.

- **Parámetros**: `budget` (número en COP)
- **Ejemplo**: `/api/recommend?budget=500000`
- **Respuesta Exitosa**:
  ```json
  {
    "success": true,
    "message": "Con tu presupuesto de $500.000 COP, te recomendamos:",
    "data": [
      {
        "name": "Villa de Leyva",
        "type": "Nacional",
        "minPrice": 400000,
        "description": "Pueblo colonial con arquitectura histórica"
      }
    ]
  }
  ```
- **Presupuesto Bajo** (< $300.000):
  ```json
  {
    "success": false,
    "message": "Lastimosamente el presupuesto es bajo para nuestros paquetes actuales (Mínimo $300.000 COP)..."
  }
  ```

## 🧠 Cómo Funciona la IA

1. El usuario ingresa su presupuesto
2. El frontend envía una petición al backend
3. El backend consulta a **Gemini AI** con un prompt especializado
4. Gemini analiza el presupuesto y genera 3 recomendaciones personalizadas
5. Las recomendaciones se muestran en la interfaz

**Ventaja**: No está limitado a destinos predefinidos. La IA puede sugerir cualquier destino turístico real según el contexto colombiano.

## 👥 Autores

**M&D Travels**
- **Daniel Steven Páez Zamudio** - Co-Fundador & Guía
- **Dora Marcela Rincón Acevedo** - Co-Fundadora & Planner

## 📄 Licencia

Este proyecto es propiedad de M&D Travels. Todos los derechos reservados © 2024

---

**Hecho con ❤️ y 🤖 por M&D Travels**
