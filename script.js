// Smooth scrolling para links internos
document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling para links âncora
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                const headerHeight = document.querySelector('.header').offsetHeight;
                const targetPosition = targetElement.offsetTop - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Header transparente que fica sólido no scroll
    const header = document.querySelector('.header');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) {
            header.style.background = 'rgba(255, 255, 255, 0.95)';
            header.style.backdropFilter = 'blur(10px)';
        } else {
            header.style.background = 'var(--white)';
            header.style.backdropFilter = 'none';
        }
    });

    // Animação de entrada para elementos
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Elementos para animar
    const animateElements = document.querySelectorAll('.pain-card, .service-card, .testimonial-card, .condition-category');
    
    animateElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });

    // Contador de cliques nos CTAs para analytics
    const ctaButtons = document.querySelectorAll('.btn-primary');
    
    ctaButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Google Analytics tracking
            if (typeof gtag !== 'undefined') {
                gtag('event', 'click', {
                    'event_category': 'CTA',
                    'event_label': this.textContent,
                    'value': 1
                });
            }
            
            // Hotjar tracking
            if (typeof hj !== 'undefined') {
                hj('event', 'cta_click', {
                    'cta_text': this.textContent,
                    'cta_position': this.closest('section')?.className || 'unknown'
                });
            }
            
            console.log('CTA clicado:', this.textContent);
        });
    });

    // Lazy loading para imagens
    const images = document.querySelectorAll('img');
    
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src || img.src;
                    img.classList.remove('lazy');
                    imageObserver.unobserve(img);
                }
            });
        });

        images.forEach(img => {
            if (img.classList.contains('lazy')) {
                imageObserver.observe(img);
            }
        });
    }
});

// Carregar widget do Doctoralia (substitua pelos IDs reais quando disponíveis)
function addDoctoraliaCode() {
    // Insira aqui o script oficial do Doctoralia quando tiver o código.
    // Fallback: exibe link já presente na seção.
    const container = document.getElementById('doctoralia-widget');
    if (!container) return;

    // Exemplo de injeção de script (comente removendo quando usar o real)
    // const script = document.createElement('script');
    // script.src = 'https://www.doctoralia.com.br/widget.js';
    // script.async = true;
    // script.onload = () => { /* inicializar widget aqui */ };
    // container.innerHTML = '';
    // container.appendChild(script);
}

// Função para preload de imagens importantes
function preloadImages() {
    const imageUrls = [
        'dra-leticia.jpg',
        'consultorio.jpg'
    ];
    
    imageUrls.forEach(url => {
        const img = new Image();
        img.src = url;
    });
}

// Executar preload quando a página carregar
window.addEventListener('load', preloadImages);
// Tentar carregar avaliações do Doctoralia
window.addEventListener('load', addDoctoraliaCode);
