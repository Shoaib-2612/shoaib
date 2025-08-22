document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("signup-form");

  form.addEventListener("submit", (event) => {
    const dobInput = document.getElementById("dob").value;
    if (!isValidAge(dobInput)) {
      alert("You must be at least 18 years old to sign up.");
      event.preventDefault(); // Stop form submission
    }
  });
});

function isValidAge(dobString) {
  const dob = new Date(dobString);
  const today = new Date();

  let age = today.getFullYear() - dob.getFullYear();
  const monthDiff = today.getMonth() - dob.getMonth();
  const dayDiff = today.getDate() - dob.getDate();

  if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
    age--;
  }

  return age >= 18;
}
