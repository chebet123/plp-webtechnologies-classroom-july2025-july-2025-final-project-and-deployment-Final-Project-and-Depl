// Toggle Chat Widget
function toggleChat() {
  alert("Hello 👋! Thanks for visiting SparkleClean. How can we assist you?");
}

// Contact Form Validation
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contactForm");
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();

      const name = document.getElementById("name").value.trim();
      const email = document.getElementById("email").value.trim();
      const message = document.getElementById("message").value.trim();

      if (name === "" || email === "" || message === "") {
        alert("⚠️ Please fill in all fields.");
        return;
      }

      const emailRegex = /^[^@]+@[^@]+\.[^@]+$/;
      if (!emailRegex.test(email)) {
        alert("⚠️ Please enter a valid email address.");
        return;
      }

      alert("✅ Thank you for reaching out! Your message has been sent.");
      form.reset();
    });
  }
});
