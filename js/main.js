document.addEventListener('DOMContentLoaded', function() {



    
    // --- 1. ЭФФЕКТ: Параллакс для фона ---
    const blobsContainer = document.querySelector('.background-blobs');
    if (blobsContainer) {
        window.addEventListener('scroll', () => {
            const scrollY = window.scrollY;
            blobsContainer.style.transform = `translateY(${scrollY * 0.3}px)`;
        });
    }

    // --- 2. ЭФФЕКТ: Прожектор, следующий за мышью ---
    const spotlight = document.querySelector('.spotlight');
    if (spotlight) {
        document.body.addEventListener('mousemove', e => {
            window.requestAnimationFrame(() => {
                spotlight.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
            });
        });
    }

    // --- 3. ЭФФЕКТ: Печатающаяся машинка ---
    const heroTitle = document.getElementById('hero-title');
    if (heroTitle) {
        const textToType = "Привет, я [Богдан]";
        let i = 0;
        function typewriter() {
            if (i < textToType.length) {
                heroTitle.textContent += textToType.charAt(i);
                i++;
                setTimeout(typewriter, 70);
            }
        }
        setTimeout(typewriter, 500); // Начать печатать с задержкой
    }

    // --- 4. Полоса прогресса прокрутки ---
    const progressBar = document.querySelector('.scroll-progress-bar');
    if (progressBar) {
        window.addEventListener('scroll', () => {
            const scrollTop = document.documentElement.scrollTop;
            const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            const scrollPercentage = (scrollTop / scrollHeight) * 100;
            progressBar.style.width = `${scrollPercentage}%`;
        });
    }

    // --- 5. Инициализация Vanilla-Tilt.js для 3D-эффекта на карточках ---
    const tiltElements = document.querySelectorAll("[data-tilt]");
    if (tiltElements.length > 0) {
        VanillaTilt.init(tiltElements, {
            max: 15,
            speed: 400,
            glare: true,
            "max-glare": 0.5
        });
    }

    // --- 6. Анимация появления элементов при скролле ---
    const fadeInElements = document.querySelectorAll('.fade-in');
    if (fadeInElements.length > 0) {
        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1 });
        fadeInElements.forEach(el => observer.observe(el));
    }

});