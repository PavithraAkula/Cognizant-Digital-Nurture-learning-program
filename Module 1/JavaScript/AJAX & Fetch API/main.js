const form = document.getElementById("registrationForm");
const result = document.getElementById("result");
const loading = document.getElementById("loading");

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

  if (!valid) return;

  loading.style.display = "block";

  const userData = {
    name: name.value,
    email: email.value,
    event: event.value,
  };

  // Simulate delayed response with setTimeout inside fetch
  fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    body: JSON.stringify(userData),
    headers: { "Content-Type": "application/json" },
  })
    .then((response) => {
      return new Promise((resolve) => {
        setTimeout(() => resolve(response), 2000);
      });
    })
    .then((response) => {
      loading.style.display = "none";
      if (response.ok) {
        result.style.color = "green";
        result.textContent = "Registration successful!";
        form.reset();
      } else {
        throw new Error("Failed to register");
      }
    })
    .catch((error) => {
      loading.style.display = "none";
      result.style.color = "red";
      result.textContent = `Error: ${error.message}`;
    });
});
