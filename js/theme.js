document.addEventListener("DOMContentLoaded", function() {
    const content = document.getElementsByTagName('body')[0];
    const toggle = document.getElementById('toggle');

    // Check for saved dark mode preference in localStorage
    const darkModeEnabled = localStorage.getItem('darkMode') === 'true';

    if (darkModeEnabled) {
        toggle.classList.add('active');
        content.classList.add('night');
    } else {
        toggle.classList.remove('active');
        content.classList.remove('night');
    }

    // Toggle dark mode on button click
    toggle.addEventListener('click', function() {
        const darkModeEnabled = content.classList.toggle('night');
        toggle.classList.toggle('active');

        // Save dark mode state in localStorage
        localStorage.setItem('darkMode', darkModeEnabled);
    });
});
