// script.js
document.getElementById('passwordForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const password = document.getElementById('password').value;
    const message = document.getElementById('message');

    const strength = checkPasswordStrength(password);

    switch (strength) {
        case 0:
        case 1:
            message.textContent = 'Very Weak';
            message.style.color = 'red';
            break;
        case 2:
            message.textContent = 'Weak';
            message.style.color = 'orange';
            break;
        case 3:
            message.textContent = 'Moderate';
            message.style.color = 'yellow';
            break;
        case 4:
            message.textContent = 'Strong';
            message.style.color = 'blue';
            break;
        case 5:
            message.textContent = 'Very Strong';
            message.style.color = 'green';
            break;
    }
});

function checkPasswordStrength(password) {
    let strength = 0;

    if (password.length >= 8) strength++;
    if (/[A-Z]/.test(password)) strength++;
    if (/[a-z]/.test(password)) strength++;
    if (/[0-9]/.test(password)) strength++;
    if (/[^A-Za-z0-9]/.test(password)) strength++;

    return strength;
}
