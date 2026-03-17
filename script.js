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
    const container = document.getElementById('doctoralia-widget');
    if (!container) return;

    // Limpa placeholder
    container.innerHTML = '';

    // Cria âncora oficial do Doctoralia
    const anchor = document.createElement('a');
    anchor.id = 'zl-url';
    anchor.className = 'zl-url';
    anchor.href = 'https://www.doctoralia.com.br/leticia-coelho-3/psiquiatra/sao-miguel-do-araguaia';
    anchor.rel = 'nofollow';
    anchor.setAttribute('data-zlw-doctor', 'leticia-coelho-3');
    anchor.setAttribute('data-zlw-type', 'certificate');
    anchor.setAttribute('data-zlw-opinion', 'false');
    anchor.setAttribute('data-zlw-hide-branding', 'true');
    anchor.setAttribute('data-zlw-saas-only', 'true');
    anchor.setAttribute('data-zlw-a11y-title', 'Widget de marcação de consultas médicas');
    anchor.textContent = 'Letícia Coelho - Doctoralia.com.br';

    container.appendChild(anchor);

    // Script oficial do Docplanner/Doctoralia
    const scriptId = 'zl-widget-s';
    if (document.getElementById(scriptId)) {
        // Script já presente; nada a fazer
        return;
    }

    const script = document.createElement('script');
    script.id = scriptId;
    script.src = '//platform.docplanner.com/js/widget.js';
    script.async = true;

    let loaded = false;
    const timeoutMs = 8000; // aguarda até 8s
    const timeout = setTimeout(() => {
        if (!loaded) {
            // Fallback para o carrossel
            container.innerHTML = '';
            renderFallbackCarousel(container);
        }
    }, timeoutMs);

    script.onload = () => {
        loaded = true;
        clearTimeout(timeout);
        // O script inicializa automaticamente o widget baseado no anchor
    };

    script.onerror = () => {
        clearTimeout(timeout);
        container.innerHTML = '';
        renderFallbackCarousel(container);
    };

    // Insere antes do primeiro script, seguindo o snippet oficial
    const firstScript = document.getElementsByTagName('script')[0];
    firstScript.parentNode.insertBefore(script, firstScript);
}

// Fallback: carrossel de imagens fixas
function renderFallbackCarousel(container) {
    const images = [
        'dra-leticia.jpg',
        'consultorio.jpg',
        'consultorio2.jpg'
    ];

    const wrapper = document.createElement('div');
    wrapper.className = 'testimonial-carousel';

    const slides = document.createElement('div');
    slides.className = 'slides';

    images.forEach((src, index) => {
        const slide = document.createElement('div');
        slide.className = 'slide';
        if (index === 0) slide.classList.add('active');
        const img = document.createElement('img');
        img.src = src;
        img.alt = 'Depoimentos';
        img.loading = 'lazy';
        slide.appendChild(img);
        slides.appendChild(slide);
    });

    const prevBtn = document.createElement('button');
    prevBtn.className = 'carousel-control prev';
    prevBtn.setAttribute('aria-label', 'Anterior');
    prevBtn.textContent = '‹';

    const nextBtn = document.createElement('button');
    nextBtn.className = 'carousel-control next';
    nextBtn.setAttribute('aria-label', 'Próximo');
    nextBtn.textContent = '›';

    const dots = document.createElement('div');
    dots.className = 'carousel-dots';

    images.forEach((_, index) => {
        const dot = document.createElement('button');
        dot.className = 'dot' + (index === 0 ? ' active' : '');
        dot.setAttribute('aria-label', `Ir para slide ${index + 1}`);
        dot.addEventListener('click', () => goTo(index));
        dots.appendChild(dot);
    });

    wrapper.appendChild(slides);
    wrapper.appendChild(prevBtn);
    wrapper.appendChild(nextBtn);
    wrapper.appendChild(dots);
    container.appendChild(wrapper);

    let current = 0;
    let autoTimer = null;

    function update() {
        const allSlides = slides.querySelectorAll('.slide');
        const allDots = dots.querySelectorAll('.dot');
        allSlides.forEach((s, i) => s.classList.toggle('active', i === current));
        allDots.forEach((d, i) => d.classList.toggle('active', i === current));
    }

    function goTo(index) {
        current = (index + images.length) % images.length;
        update();
        restartAuto();
    }

    function next() { goTo(current + 1); }
    function prev() { goTo(current - 1); }

    function startAuto() {
        stopAuto();
        autoTimer = setInterval(next, 5000);
    }
    function stopAuto() {
        if (autoTimer) clearInterval(autoTimer);
        autoTimer = null;
    }
    function restartAuto() { startAuto(); }

    nextBtn.addEventListener('click', next);
    prevBtn.addEventListener('click', prev);
    wrapper.addEventListener('mouseenter', stopAuto);
    wrapper.addEventListener('mouseleave', startAuto);

    update();
    startAuto();
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
