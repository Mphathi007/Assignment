document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault(); // Prevent actual form submission

  // Show the response message
  document.getElementById("responseMessage").classList.remove("hidden");

  // Optionally, clear the form
  this.reset();
});
