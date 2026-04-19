// Get elements
const termsLink = document.getElementById("termsLink");
const termsDropdown = document.getElementById("termsDropdown");
const termsCheckbox = document.getElementById("termsCheckbox");
const submitBtn = document.getElementById("submitBtn");
const termsError = document.getElementById("termsError");
const driverForm = document.getElementById("driverForm");

// Toggle dropdown when Terms link is clicked
termsLink.addEventListener("click", function (e) {
  e.preventDefault();
  termsDropdown.classList.toggle("show");
});

// Enable/Disable submit button based on checkbox
termsCheckbox.addEventListener("change", function () {
  if (termsCheckbox.checked) {
    submitBtn.disabled = false;
    termsError.classList.remove("show");
  } else {
    submitBtn.disabled = true;
  }
});

// Form submission
driverForm.addEventListener("submit", function (e) {
  e.preventDefault();

  // Check if terms checkbox is checked
  if (!termsCheckbox.checked) {
    termsError.classList.add("show");
    termsDropdown.classList.add("show");
    return;
  }

  // Simple validation
  const fullName = document.getElementById("fullName").value.trim();
  const email = document.getElementById("email").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const truckType = document.getElementById("truckType").value;
  const truckYear = document.getElementById("truckYear").value;
  const licensePlate = document.getElementById("licensePlate").value.trim();
  const mcNumber = document.getElementById("mcNumber").value.trim();
  const experience = document.getElementById("experience").value;
  const homeTerminal = document.getElementById("homeTerminal").value.trim();

  const routesSelected =
    document.querySelectorAll('input[name="routes"]:checked').length > 0;

  if (
    !fullName ||
    !email ||
    !phone ||
    !truckType ||
    !truckYear ||
    !licensePlate ||
    !mcNumber ||
    !experience ||
    !homeTerminal
  ) {
    alert("⚠️ Please fill in all required fields.");
    return;
  }

  if (!routesSelected) {
    alert("⚠️ Please select at least one preferred route.");
    return;
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    alert("⚠️ Please enter a valid email address.");
    return;
  }

  // Success
  alert(
    "✅ Registration submitted successfully!\n\nThank you for registering with Loadify. Our team will contact you within 24 hours.",
  );
  driverForm.reset();
  termsCheckbox.checked = false;
  submitBtn.disabled = true;
  termsError.classList.remove("show");
});

// Close dropdown when clicking outside
document.addEventListener("click", function (e) {
  if (!termsLink.contains(e.target) && !termsDropdown.contains(e.target)) {
    termsDropdown.classList.remove("show");
  }
});
