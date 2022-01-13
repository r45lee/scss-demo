const toggle = document.querySelector('.toggle-icon');

toggle.addEventListener('click', () => {
    document.querySelector('body').classList.toggle('is-active');
});
