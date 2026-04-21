const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const subject = document.getElementById("subject").value;
  const message = document.getElementById("message").value.trim();

  if (!name) {
    alert("⚠️ Please enter your full name.");
    return;
  }

  if (!email) {
    alert("⚠️ Please enter your email address.");
    return;
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    alert("⚠️ Please enter a valid email address.");
    return;
  }

  if (!subject) {
    alert("⚠️ Please select a subject.");
    return;
  }

  if (!message) {
    alert("⚠️ Please enter your message.");
    return;
  }

  alert(
    "✅ Message sent successfully!\n\nThank you for contacting Loadify. Our team will get back to you within 24 hours.",
  );

  contactForm.reset();
});
