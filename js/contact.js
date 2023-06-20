function sendMail(){
    const form = {
        first : document.getElementById('first').value,    
        last : document.getElementById('last').value,    
        number : document.getElementById('number').value,    
        mail : document.getElementById('mail').value,    
        message : document.getElementById('message').value  
    };

const s_id = "service_b1d1aw8";
const t_id = "template_rfvuell";

emailjs.send(s_id, t_id, form)
.then(
    res=>{
        first : document.getElementById('first').value = ""; 
        last : document.getElementById('last').value = "";
        number : document.getElementById('number').value = "";
        mail : document.getElementById('mail').value = "";
        message : document.getElementById('message').value = "";
        alert("Submit Successfully");
})

}