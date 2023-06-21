function sendMail() {
  const form = {
    first: document.getElementById("first").value,
    number: document.getElementById("number").value,
    mail: document.getElementById("mail").value,
    message: document.getElementById("message").value,
  };

  const s_id = "service_b1d1aw8";
  const t_id = "template_rfvuell";

  emailjs.send(s_id, t_id, form).then((res) => {
    first: document.getElementById("first").value = "";
    number: document.getElementById("number").value = "";
    mail: document.getElementById("mail").value = "";
    message: document.getElementById("message").value = "";
    alert("Submit Successfully ! Our Team will Contact you Shortly !");
  });
}

let subscribe = document.getElementById("subs");
subscribe.addEventListener("click", () => {
  if (subscribe) {
    alert("Thank You, We'll give you updates on time");
  }
});
