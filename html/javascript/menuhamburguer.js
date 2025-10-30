const menuToggle = document.querySelector('.menu-toggle');


const navMenu = document.querySelector('.menu');


menuToggle.addEventListener('click', function() {
    
   navMenu.classList.toggle('active');
});