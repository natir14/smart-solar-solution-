
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
// Popup modal for consultation
const modal = document.getElementById("contactModal");
const btn = document.querySelector(".cta-button");
const span = document.querySelector(".close");

btn.addEventListener("click", function (e) {
  e.preventDefault();
  modal.style.display = "block";
});

span.addEventListener("click", function () {
  modal.style.display = "none";
});

window.addEventListener("click", function (e) {
  if (e.target == modal) {
    modal.style.display = "none";
  }
});
