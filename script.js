const email = document.querySelector("#email");
const password = document.querySelector("#password");
const confirmPassword = document.querySelector("#confirmPassword");
const terms = document.querySelector("#terms");
const registerBtn = document.querySelector("#register-btn");

const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

registerBtn.addEventListener("click", (event) => {
  event.preventDefault();

  // Email validation
  if (!emailRegex.test(email.value)) {
    email.classList.add("is-invalid");
  } else {
    email.classList.remove("is-invalid");
  }

  // Password validation
  if (!passwordRegex.test(password.value)) {
    password.classList.add("is-invalid");
  } else {
    password.classList.remove("is-invalid");
  }

  // Confirm password validation
  if (password.value !== confirmPassword.value || confirmPassword.value === "") {
    confirmPassword.classList.add("is-invalid");
  } else {
    confirmPassword.classList.remove("is-invalid");
  }

  // Terms validation
  if (!terms.checked) {
    terms.classList.add("is-invalid");
  } else {
    terms.classList.remove("is-invalid");
  }

  // Final check
  if (
    !email.classList.contains("is-invalid") &&
    !password.classList.contains("is-invalid") &&
    !confirmPassword.classList.contains("is-invalid") &&
    !terms.classList.contains("is-invalid")
  ) {
    alert("✅ Form is valid!");
    email.value = "";
    password.value = "";
    confirmPassword.value = "";
    terms.checked = false;
  } else {
    alert("❌ Form is invalid. Please check again.");
  }
});
