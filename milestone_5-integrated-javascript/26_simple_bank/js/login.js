document.getElementById("login-submit").addEventListener('click', function () {
  console.log("button clicked");
  // get user email
  const emailField = document.getElementById("user-email");
  const userEmail = emailField.value;
  console.log(userEmail);
  // get user password
  const passwordField = document.getElementById("user-password");
  const userPassword = passwordField.value;

  // check email and password
  if (userEmail == "nozibuddowla@gmail.com" && userPassword == "secret") {
    console.log("valid user");
    window.location.href = "banking.html";
  }
});