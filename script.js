document.addEventListener('DOMContentLoaded', () => {
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Navbar scroll effect
    const header = document.querySelector('header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.style.boxShadow = '0 2px 20px rgba(0,0,0,0.1)';
            header.style.padding = '0.5rem 0';
        } else {
            header.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
            header.style.padding = '1rem 0';
        }
    });

    // Simple animation on scroll (Intersection Observer)
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Apply animation to cards and sections
    const animatedElements = document.querySelectorAll('.destination-card, .founder-card, .about-text');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
        observer.observe(el);
    });

    // Tab Logic
    const tabBtns = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');

    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Remove active class from all buttons and contents
            tabBtns.forEach(b => b.classList.remove('active'));
            tabContents.forEach(c => {
                c.style.display = 'none';
                c.classList.remove('active');
            });

            // Add active class to clicked button
            btn.classList.add('active');

            // Show corresponding content
            const tabId = btn.getAttribute('data-tab');
            const content = document.getElementById(tabId);
            content.style.display = 'grid'; // Restore grid layout
            setTimeout(() => content.classList.add('active'), 10); // Small delay for fade-in if needed
        });
    });

    // Budget Recommender Logic
    const budgetBtn = document.getElementById('budgetBtn');
    const budgetInput = document.getElementById('budgetInput');
    const budgetResult = document.getElementById('budgetResult');

    budgetBtn.addEventListener('click', () => {
        const budget = parseInt(budgetInput.value);

        if (!budget || budget <= 0) {
            alert('Por favor ingresa un presupuesto válido.');
            return;
        }

        let recommendation = '';
        let destinations = [];

        // Simple logic for recommendation
        if (budget < 1000000) {
            destinations = ['Eje Cafetero', 'Medellín'];
            recommendation = 'Con ese presupuesto, te recomendamos explorar las maravillas de Colombia por tierra.';
        } else if (budget >= 1000000 && budget < 4000000) {
            destinations = ['Cartagena', 'San Andrés', 'Bolivia', 'Perú'];
            recommendation = '¡Tienes excelentes opciones! Desde playas caribeñas hasta la magia de los Andes.';
        } else {
            destinations = ['Brasil', 'Argentina', 'Corea del Sur'];
            recommendation = '¡El mundo es tuyo! Puedes aspirar a grandes viajes internacionales.';
        }

        budgetResult.innerHTML = `
            <h3>${recommendation}</h3>
            <p>Destinos sugeridos: <strong>${destinations.join(', ')}</strong></p>
            <a href="#destinos" class="btn btn-secondary" style="margin-top: 1rem; font-size: 0.9rem;">Ver Detalles</a>
        `;
        budgetResult.style.display = 'block';
    });
});
