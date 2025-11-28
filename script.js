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

        // Show loading state
        budgetResult.style.display = 'block';
        budgetResult.innerHTML = `
            <div style="text-align: center; padding: 2rem;">
                <i class="fas fa-spinner fa-spin" style="font-size: 2rem; color: var(--primary-blue);"></i>
                <p style="margin-top: 1rem;">Buscando las mejores opciones para ti...</p>
            </div>
        `;

        // Fetch recommendations from backend
        fetch(`/api/recommend?budget=${budget}`)
            .then(response => response.json())
            .then(data => {
                if (data.success) {
                    const destinationsList = data.data.map(d =>
                        `<li style="margin-bottom: 0.5rem;">
                            <strong>${d.name}</strong> (${d.type}) - Desde $${d.minPrice.toLocaleString('es-CO')}
                         </li>`
                    ).join('');

                    budgetResult.innerHTML = `
                        <h3>${data.message}</h3>
                        <ul style="list-style: none; padding: 0; margin: 1rem 0;">
                            ${destinationsList}
                        </ul>
                        <a href="#destinos" class="btn btn-secondary" style="margin-top: 1rem; font-size: 0.9rem;">Ver Detalles</a>
                    `;
                } else {
                    // Handle "Low Budget" or other specific messages from server
                    budgetResult.innerHTML = `
                        <div style="text-align: center;">
                            <i class="fas fa-info-circle" style="font-size: 2rem; color: #e74c3c; margin-bottom: 1rem;"></i>
                            <h3>${data.message}</h3>
                        </div>
                    `;
                }
            })
            .catch(error => {
                console.error('Error:', error);
                budgetResult.innerHTML = `
                    <p style="color: red;">Hubo un error al conectar con el servidor. Por favor intenta más tarde.</p>
                `;
            });
    });
});
