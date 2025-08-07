function showMessage() {
  alert("Welcome to Danot Tourism Agency! Let's plan your next adventure.");
}

function submitForm(event) {
  event.preventDefault();
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  if (name && email && message) {
    document.getElementById("formResponse").textContent =
      `Thank you, ${name}. Your message has been received!`;
  } else {
    document.getElementById("formResponse").textContent =
      "Please fill in all fields.";
  }
}
