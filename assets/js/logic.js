// Toggle light/dark mode
document.querySelector('input[name=toggle-mode]').addEventListener('change', function () {
    if (this.checked) {
        document.body.classList.add('dark-mode');
        document.body.classList.remove('light-mode');
    } else {
        document.body.classList.remove('dark-mode');
        document.body.classList.add('light-mode');
    };
    console.log('wurd');
});

