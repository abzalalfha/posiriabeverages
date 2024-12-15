// Example JavaScript for form validation or interactions

// Function to validate the contact form
document.getElementById("contactForm").addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent the default form submission

  let name = document.querySelector('input[name="name"]').value;
  let email = document.querySelector('input[name="email"]').value;
  let message = document.querySelector('textarea[name="message"]').value;

  if (name === "" || email === "" || message === "") {
    alert("Please fill out all fields.");
    return;
  }

  // Example of form data submission
  alert("Thank you for your message, " + name + ". We will get back to you soon!");

  // Optionally, you can reset the form
  document.getElementById("contactForm").reset();
});
