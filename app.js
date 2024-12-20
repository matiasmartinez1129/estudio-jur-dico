// Escuchar clic en todos los enlaces que apuntan a un id
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (event) {
        event.preventDefault(); // Evitar comportamiento por defecto del enlace

        // Obtener el elemento al que apunta el enlace
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);

        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth', // Desplazamiento suave
                block: 'start'     // Alineación al inicio del elemento
            });
        }
    });
});

//Menu hamburguesa
document.addEventListener('DOMContentLoaded', () => {
    const menuButton = document.getElementById('menu-button');
    const closeButton = document.getElementById('close-button');
    const mobileMenu = document.getElementById('mobile-menu');
    const menuLinks = document.querySelectorAll('.menu-link');

    // Función para mostrar el menú
    const showMenu = () => {
        mobileMenu.classList.remove('-translate-y-full', 'opacity-0');
        mobileMenu.classList.add('translate-y-0', 'opacity-100');
    };

    // Función para ocultar el menú
    const hideMenu = () => {
        mobileMenu.classList.remove('translate-y-0', 'opacity-100');
        mobileMenu.classList.add('-translate-y-full', 'opacity-0');
    };

    // Mostrar menú al hacer clic en el botón de hamburguesa
    menuButton.addEventListener('click', showMenu);

    // Ocultar menú al hacer clic en el botón "X"
    closeButton.addEventListener('click', hideMenu);

    // Ocultar menú al hacer clic en cualquier enlace del menú
    menuLinks.forEach(link => {
        link.addEventListener('click', hideMenu);
    });
});
