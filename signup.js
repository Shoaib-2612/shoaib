document.getElementById("signup-form").addEventListener("submit", function (e) {
  const dob = new Date(document.getElementById("dob").value);
  const today = new Date();
  const age = today.getFullYear() - dob.getFullYear();
  const month = today.getMonth() - dob.getMonth();
  if (month < 0 || (month === 0 && today.getDate() < dob.getDate())) {
    age--;
  }

  if (age < 18) {
    alert("You must be at least 18 years old to sign up.");
    e.preventDefault();
    return;
  }

  const password = document.getElementById("password").value;
  const confirm = document.getElementById("confirm-password").value;

  if (password !== confirm) {
    alert("Passwords do not match.");
    e.preventDefault();
  }
});
