let founder = document.getElementById("founder");
let co_founder = document.getElementById('co-founder');


$(document).ready(function(){

  $('.fa-bars').click(function(){
     $(this).toggleClass('fa-times');
     $('.navbar').toggleClass('nav-toggle');
 });
});


founder.addEventListener('click', ()=>{
  window.open('https://linkedin.com/in/imtiyaz-sde/')
})

co_founder.addEventListener('click', ()=>{
  window.open('https://www.linkedin.com/in/nayan-hore-a6391823b/')
})
