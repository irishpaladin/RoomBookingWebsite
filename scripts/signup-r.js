
// Event Listeners for signup.html

document.getElementById("username-signup").addEventListener("blur", ValidateUsername, false);
document.getElementById("email-signup").addEventListener("blur", ValidateEmail, false);
document.getElementById("password-signup").addEventListener("blur", ValidatePassword, false);
document.getElementById("password2-signup").addEventListener("blur", ConfirmPassword, false);
document.getElementById("submit-signup").addEventListener("click", ValidateSubmit, false);
