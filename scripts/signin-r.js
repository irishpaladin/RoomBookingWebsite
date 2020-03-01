
// Event Listeners for index.html

document.getElementById("email-login").addEventListener("blur", ValidateEmail, false);
document.getElementById("password-login").addEventListener("blur", ValidatePassword, false);
document.getElementById("submit-login").addEventListener("click", ValidateSubmit, false);