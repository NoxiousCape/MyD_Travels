# M&D Travels ✈️

Sitio web moderno y atractivo para la agencia de viajes **M&D Travels**, fundada por Daniel Steven Páez Zamudio y Dora Marcela Rincón Acevedo.

![M&D Travels](https://img.shields.io/badge/Version-1.0.0-blue)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)

## 📋 Descripción

M&D Travels es una agencia de viajes que ofrece experiencias inolvidables tanto en destinos nacionales como internacionales. Este sitio web presenta una interfaz moderna, intuitiva y completamente responsiva para que los usuarios puedan explorar destinos, calcular presupuestos y contactar con la agencia.

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

#### Destinos Nacionales
- Cartagena
- San Andrés
- Eje Cafetero (Valle del Cocora)
- Medellín

#### Destinos Internacionales
- Brasil
- Argentina
- Corea del Sur
- Bolivia (Salar de Uyuni)
- Perú

#### Recomendador de Presupuesto
- **Calculadora inteligente**: Ingresa tu presupuesto y obtén recomendaciones personalizadas
- **Filtrado automático**: Sugiere destinos según el rango de precio
- **Interfaz intuitiva**: Resultados visuales con tarjetas de destinos

#### Sección "Por qué viajar con nosotros"
- Atención personalizada
- Soporte 24/7
- Mejores precios del mercado

#### Formulario de Contacto
- Campos para nombre, email y mensaje
- Diseño limpio y accesible
- Validación de formulario

## 🚀 Tecnologías Utilizadas

- **HTML5**: Estructura semántica
- **CSS3**: Estilos modernos con variables CSS, Flexbox y Grid
- **JavaScript (Vanilla)**: Funcionalidad interactiva sin dependencias
- **Font Awesome 6.0**: Iconografía
- **Google Fonts**: Tipografía Outfit
- **Unsplash**: Imágenes de alta calidad

## 📁 Estructura del Proyecto

```
M&D Travels/
│
├── index.html          # Página principal
├── style.css           # Estilos globales
├── script.js           # Lógica de interacción
└── README.md           # Este archivo
```

## 🛠️ Instalación y Uso

### Requisitos Previos
- Navegador web moderno (Chrome, Firefox, Safari, Edge)
- Conexión a internet (para cargar fuentes e iconos externos)

### Pasos para Ejecutar

1. **Clonar el repositorio**
   ```bash
   git clone <url-del-repositorio>
   cd "M&D Travels"
   ```

2. **Abrir el proyecto**
   - Simplemente abre el archivo `index.html` en tu navegador preferido
   - O usa un servidor local como Live Server en VS Code

3. **¡Listo!**
   - El sitio debería cargarse completamente funcional

## 🎯 Funcionalidades JavaScript

### Tabs de Destinos
```javascript
// Cambio entre destinos nacionales e internacionales
document.querySelectorAll('.tab-btn').forEach(button => {
    button.addEventListener('click', () => {
        // Lógica de cambio de tabs
    });
});
```

### Recomendador de Presupuesto
```javascript
// Filtra destinos según el presupuesto ingresado
budgetBtn.addEventListener('click', () => {
    const budget = parseInt(budgetInput.value);
    // Encuentra destinos dentro del rango
});
```

### Formulario de Contacto
```javascript
// Previene envío por defecto y muestra confirmación
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    // Lógica de envío
});
```

## 🎨 Paleta de Colores

```css
--primary-blue: #4A90E2;
--secondary-purple: #9B59B6;
--accent-yellow: #F39C12;
--text-dark: #2C3E50;
--text-light: #ECF0F1;
--bg-light: #F8F9FA;
```

## 📱 Responsividad

El sitio está optimizado para:
- **Desktop**: > 1024px
- **Tablet**: 768px - 1024px
- **Mobile**: < 768px

## 🔮 Futuras Mejoras

- [ ] Integración con API de reservas
- [ ] Sistema de autenticación de usuarios
- [ ] Blog de viajes
- [ ] Galería de fotos de clientes
- [ ] Integración con redes sociales
- [ ] Sistema de reviews y calificaciones
- [ ] Mapa interactivo de destinos
- [ ] Chatbot de atención al cliente

## 👥 Autores

**M&D Travels**
- **Daniel Steven Páez Zamudio** - Co-Fundador & Guía
- **Dora Marcela Rincón Acevedo** - Co-Fundadora & Planner

## 📄 Licencia

Este proyecto es propiedad de M&D Travels. Todos los derechos reservados © 2024

## 📞 Contacto

Para más información sobre nuestros servicios, visita nuestro sitio web o contáctanos a través del formulario de contacto.

---

**Hecho con ❤️ por M&D Travels**
