
const form = document.getElementById("contact-form");
const status = document.getElementById("form-status");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  const name = form.name.value;
  if (name) {
    status.textContent = `Thank you, ${name}. We'll be in touch soon!`;
    status.style.color = "green";
    form.reset();
  } else {
    status.textContent = "Please complete the form.";
    status.style.color = "red";
  }
});
