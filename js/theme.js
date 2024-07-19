
const content = document.getElementsByTagName('body')[0];
const toggle = document.getElementById('toggle');
const slider = document.getElementById('checkbox');

if (localStorage.getItem('darkMode') === 'enabled') {
    toggle.classList.add('active');
    content.classList.add('night');
    slider.checked= true;
}

toggle.addEventListener('click', function(){
    toggle.classList.toggle('active');
    content.classList.toggle("night");
    if (content.classList.contains('night')) {
        localStorage.setItem('darkMode', 'enabled');
    } else {
        localStorage.setItem('darkMode', 'disabled');
    }
})