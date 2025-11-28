# M&D Travels ✈️

Sitio web moderno y atractivo para la agencia de viajes **M&D Travels**, fundada por Daniel Steven Páez Zamudio y Dora Marcela Rincón Acevedo.

![M&D Travels](https://img.shields.io/badge/Version-1.1.0-blue)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)
![Node.js](https://img.shields.io/badge/Node.js-339933?logo=nodedotjs&logoColor=white)
![Express](https://img.shields.io/badge/Express.js-000000?logo=express&logoColor=white)

## 📋 Descripción

M&D Travels es una agencia de viajes que ofrece experiencias inolvidables tanto en destinos nacionales como internacionales. Este sitio web presenta una interfaz moderna, intuitiva y completamente responsiva.

**Novedad v1.1.0**: Ahora cuenta con un **backend en Node.js** que potencia el sistema de recomendaciones de viaje, ofreciendo una experiencia más dinámica y realista.

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

#### Recomendador de Presupuesto (Backend Powered)
- **API REST**: Conexión a un servidor Node.js/Express
- **Búsqueda Inteligente**: Filtra destinos basándose en el presupuesto real
- **Validación**: Manejo de presupuestos bajos con mensajes amigables
- **Simulación**: Efecto de "búsqueda en tiempo real"

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

## 📁 Estructura del Proyecto

```
M&D Travels/
│
├── server.js           # Servidor Backend (API)
├── package.json        # Dependencias (Express)
├── index.html          # Página principal
├── style.css           # Estilos globales
├── script.js           # Lógica de interacción (Fetch API)
└── README.md           # Este archivo
```

## 🛠️ Instalación y Uso

### Requisitos Previos
- **Node.js** instalado (v14 o superior)
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

3. **Iniciar el servidor**
   ```bash
   node server.js
   # O también:
   npm start
   ```
   Verás el mensaje: `Server running at http://localhost:3000`

4. **Abrir la aplicación**
   - Abre tu navegador y ve a: **[http://localhost:3000](http://localhost:3000)**

## � API Endpoints

### `GET /api/recommend`
Obtiene recomendaciones de viaje basadas en un presupuesto.

- **Parámetros**: `budget` (número)
- **Ejemplo**: `/api/recommend?budget=2000000`
- **Respuesta**:
  ```json
  {
    "success": true,
    "message": "Con tu presupuesto...",
    "data": [ ... ]
  }
  ```

## 👥 Autores

**M&D Travels**
- **Daniel Steven Páez Zamudio** - Co-Fundador & Guía
- **Dora Marcela Rincón Acevedo** - Co-Fundadora & Planner

## 📄 Licencia

Este proyecto es propiedad de M&D Travels. Todos los derechos reservados © 2024

---

**Hecho con ❤️ por M&D Travels**
