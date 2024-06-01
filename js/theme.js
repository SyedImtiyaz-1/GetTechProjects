
const content = document.getElementsByTagName('body')[0];
const darkMode = document.getElementById('toggle')

toggle.addEventListener('click', function(){
    toggle.classList.toggle('active');
    content.classList.toggle("night")
})