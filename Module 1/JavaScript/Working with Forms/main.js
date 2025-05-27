const form = document.getElementById("registrationForm");
const result = document.getElementById("result");

form.addEventListener("submit", function(e) {
  e.preventDefault();

  const { name, email, event } = form.elements;

  let valid = true;

  document.getElementById("nameError").textContent = "";
  document.getElementById("emailError").textContent = "";
  document.getElementById("eventError").textContent = "";
  result.textContent = "";

  if (name.value.trim() === "") {
    document.getElementById("nameError").textContent = "Name is required";
    valid = false;
  }

  if (email.value.trim() === "") {
    document.getElementById("emailError").textContent = "Email is required";
    valid = false;
  } else if (!email.value.includes("@")) {
    document.getElementById("emailError").textContent = "Email is invalid";
    valid = false;
  }

  if (event.value === "") {
    document.getElementById("eventError").textContent = "Please select an event";
    valid = false;
  }

  if (valid) {
    result.textContent = `Thanks, ${name.value}! You are registered for ${event.value}.`;
    form.reset();
  }
});
