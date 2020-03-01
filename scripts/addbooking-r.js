
// Event Listeners for book-room.html
document.getElementById("description-booking").addEventListener("keyup", DynamicCharacterCounter, false);
//document.getElementById("description-booking").addEventListener("blur", ConfirmTextArea, false);
document.getElementById("submit-booking").addEventListener("click", ValidateSubmit, false);
document.getElementById("date-booking").addEventListener("change", ValidateDate, false);
document.getElementById("end-time-booking").addEventListener("change", ValidateTime, false);
document.getElementById("start-time-booking").addEventListener("change", ValidateTime, false);
