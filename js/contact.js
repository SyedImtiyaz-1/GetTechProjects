function validateForm() {
  const form = {
      name: document.getElementById("name").value.trim(),
      number: document.getElementById("number").value,
      mail: document.getElementById("mail").value.trim(),
      message: document.getElementById("message").value.trim(),
  };

  // Regular expressions for validation
  const phonePattern = /^[0-9]{10}$/;
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const errors = {};

  if (form.name === "") {
      errors.name = "Name can't be blank.";
  }

  if (!phonePattern.test(form.number)) {
      errors.number = "Invalid Contact Number";
  }

  if (!emailPattern.test(form.mail)) {
      errors.mail = "Invalid Email";
  }

  if (form.message === "") {
      errors.message = "Message to be filled out.";
  }

  // Clearing previous error messages
  clearErrors();

  // Displaying validation errors if any
  displayErrors(errors);

  return errors; // Returning the errors (empty if no errors)
}

function displayErrors(errors) {
  for (const field in errors) {
      if (errors.hasOwnProperty(field)) {
          const errorElement = document.getElementById(`${field}-error`);
          if (errorElement) {
              errorElement.textContent = errors[field];
          }
      }
  }
}

function clearErrors() {
  // Clearing all error messages
  const errorElements = document.querySelectorAll(".error");
  errorElements.forEach((element) => {
      element.textContent = "";
  });
}

function sendMail() {
  const form = {
      name: document.getElementById("name").value,
      number: document.getElementById("number").value,
      mail: document.getElementById("mail").value,
      message: document.getElementById("message").value,
  };

  const s_id = "service_b1d1aw8";
  const t_id = "template_rfvuell";

  emailjs.send(s_id, t_id, form).then((res) => {
    alert("Your submission was successful! Our team will get in touch with you shortly.");
  });
  }

function validateAndSend() {
  const validationErrors = validateForm(); // Validate the form and get any errors
  if (Object.keys(validationErrors).length === 0) {
      sendMail(); // If there are no validation errors, send mail.
  }
}

let subscribe = document.getElementById("subs");
let tval = document.getElementById("tval");
subscribe.addEventListener("click", () => {
  if (tval.value === "") {
    tval.value = "Please enter your valid email!";
  } else {
    alert("Thank you! We'll share you updates on time.");
    tval.value = "";
  }
});