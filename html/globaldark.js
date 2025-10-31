const darkModeToggle = document.getElementById('dark-mode-toggle');
const body = document.body;

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
loadTheme();

if (darkModeToggle) {
    darkModeToggle.addEventListener('click', function() {
        
        body.classList.toggle('dark-mode');
        
        if (body.classList.contains('dark-mode')) {
            localStorage.setItem('theme', 'dark');
            darkModeToggle.innerHTML = '🌙';
            darkModeToggle.setAttribute('aria-label', 'Alternar para Modo Claro');
        } else {
            localStorage.setItem('theme', 'light');
            darkModeToggle.innerHTML = '☀️';
            darkModeToggle.setAttribute('aria-label', 'Alternar para Modo Escuro');
        }
    });
}