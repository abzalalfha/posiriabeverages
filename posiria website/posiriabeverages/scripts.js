// Function to validate the contact form
document.getElementById("contactForm").addEventListener("submit", function (event) {
  event.preventDefault();

  let name = document.querySelector('input[name="name"]').value;
  let email = document.querySelector('input[name="email"]').value;
  let message = document.querySelector('textarea[name="message"]').value;

  if (name === "" || email === "" || message === "") {
    alert("Please fill out all fields.");
    return;
  }

  // Simple email format validation
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  if (!emailRegex.test(email)) {
    alert("Please enter a valid email address.");
    return;
  }

  alert(`Thank you for your message, ${name}! We will get back to you soon.`);

  document.getElementById("contactForm").reset();
});

// Add scroll animation for the "About Us" and "Festive Features" sections
let debounceTimer;
window.addEventListener("scroll", () => {
  clearTimeout(debounceTimer);
  debounceTimer = setTimeout(() => {
    const aboutSection = document.querySelector(".about-us");
    const festiveSection = document.querySelector(".festive");

    if (aboutSection.getBoundingClientRect().top < window.innerHeight) {
      aboutSection.style.opacity = 1;
      aboutSection.style.transform = "translateY(0)";
    }

    if (festiveSection && festiveSection.getBoundingClientRect().top < window.innerHeight) {
      festiveSection.style.opacity = 1;
      festiveSection.style.transform = "translateY(0)";
    }
  }, 100); // 100ms delay for scroll event
});

// Set initial styles for animations
document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll(".about-us, .festive");
  sections.forEach((section) => {
    section.style.opacity = 0;
    section.style.transform = "translateY(50px)";
    section.style.transition = "all 0.6s ease-out";
    section.style.willChange = "opacity, transform"; // Optimizing animations
  });
});
