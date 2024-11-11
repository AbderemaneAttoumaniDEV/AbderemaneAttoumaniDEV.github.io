document.querySelector('#menu-toggle').addEventListener('change', function() {
    const overlay = document.querySelector('.overlay');
    overlay.classList.toggle('open'); // Bascule la classe 'open'
});
