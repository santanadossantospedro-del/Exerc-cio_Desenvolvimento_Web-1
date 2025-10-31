const menuToggle = document.querySelector('.menu-toggle');


const navMenu = document.querySelector('.menu');

const darkModeToggle = document.getElementById('dark-mode-toggle');

const body = document.body;

menuToggle.addEventListener('click', function() {
    
   navMenu.classList.toggle('active');
});

darkModeToggle.addEventListener('click', function() {
    
    body.classList.toggle('dark-mode');
    
    if (body.classList.contains('dark-mode')) {
        darkModeToggle.innerHTML = '🌙';
        darkModeToggle.setAttribute('aria-label', 'Alternar para Modo Claro');

        localStorage.setItem('theme', 'dark');
    } else {
        darkModeToggle.innerHTML = '☀️';
        darkModeToggle.setAttribute('aria-label', 'Alternar para Modo Escuro');
        localStorage.setItem('theme', 'light');
    }
});

function loadTheme() {
    const savedTheme = localStorage.getItem('theme');
    
    if (savedTheme === 'dark') {
        body.classList.add('dark-mode');
        
        if (darkModeToggle) { 
             darkModeToggle.innerHTML = '🌙';
             darkModeToggle.setAttribute('aria-label', 'Alternar para Modo Claro');
        }
    }
}
loadTheme;