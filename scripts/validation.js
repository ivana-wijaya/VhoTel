document
  .getElementById("reservationForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    let firstName = document.getElementById("firstName").value.trim();
    let lastName = document.getElementById("lastName").value.trim();
    let email = document.getElementById("email").value.trim();
    let phone = document.getElementById("phone").value.trim();
    let address = document.getElementById("address").value.trim();
    let term = document.getElementById("term").checked;

    if (
      firstName === "" ||
      lastName === "" ||
      email === "" ||
      phone === "" ||
      address === ""
    ) {
      alert("Please fill in all the required fields.");
      return;
    }
    if (firstName === "") {
      alert("Please enter your First Name.");
      return;
    }

    if (lastName === "") {
      alert("Please enter your Last Name.");
      return;
    }

    if (email === "") {
      alert("Please enter your Email Address.");
      return;
    }

    if (!isValidEmail(email)) {
      alert("Please enter a valid email address.");
      return;
    }

    if (phone === "") {
      alert("Please enter your Phone Number.");
      return;
    }

    if (!isValidPhoneNumber(phone)) {
      alert("Please enter a valid phone number.");
      return;
    }

    if (address === "") {
      alert("Please enter your Address.");
      return;
    }

    if (!term) {
      alert("Please agree to the Terms and Conditions.");
      return;
    }

    // Reset the form by setting the values of form elements to their initial state
    document.getElementById("firstName").value = "";
    document.getElementById("lastName").value = "";
    document.getElementById("email").value = "";
    document.getElementById("phone").value = "";
    document.getElementById("address").value = "";
    document.getElementById("term").checked = false;

    alert("Form submitted successfully!");
  });

function isValidEmail(email) {
  return email.includes("@") && email.includes(".");
}

function isValidPhoneNumber(phone) {
  return /^\d{10,}$/.test(phone);
}
