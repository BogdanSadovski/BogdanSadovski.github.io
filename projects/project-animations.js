document.addEventListener('DOMContentLoaded', () => {

    // Выбираем все основные блоки контента, которые хотим анимировать.
    // Мы обращаемся к ним по существующим в HTML тегам и классам.
    const elementsToAnimate = document.querySelectorAll(
        'header.project-hero, section.project-section, .project-links'
    );

    // Настраиваем "наблюдателя", который будет следить за появлением элементов на экране
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                // Если элемент видим, добавляем ему класс, который запускает CSS-анимацию
                entry.target.classList.add('is-visible');

                // Добавляем каскадную задержку для более плавного эффекта
                entry.target.style.transitionDelay = `${index * 100}ms`;

                // Отключаем наблюдение за этим элементом, чтобы анимация сработала один раз
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1 // Анимация начнется, когда элемент виден хотя бы на 10%
    });

    // Запускаем наблюдение для каждого найденного элемента
    elementsToAnimate.forEach(element => {
        observer.observe(element);
    });

});