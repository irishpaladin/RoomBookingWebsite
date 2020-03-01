function ValidateEmail(event){
	var email = event.currentTarget;
	WarningRemove(email);

	//RegEx
	var emailRegEx = /^[A-Za-z0-9._-]+@[A-Za-z]+\.[A-Za-z]{2,3}$/;

	// Validations
	if (email.value.length == 0){
		var warning_text = document.createTextNode('This field should not be empty');
		email.nextElementSibling.appendChild(warning_text);
		email.classList.add("has-error");
		return;
	}
	if (!emailRegEx.test(email.value)){
		var warning_text = document.createTextNode('Please enter email in this format: username@somewhere.sth');
		email.nextElementSibling.appendChild(warning_text);
		email.classList.add("has-error");
	}
}

function ValidatePassword(event){
	var password = event.currentTarget;
	WarningRemove(password);
	
	// RegEx
	var passwordRegEx = /^.*[ ]+.*$/;
	var error="";

	// Validations
	var error = "";

	// If input is empty
	if (password.value.length == 0){
		var warning_text = document.createTextNode('This field should not be empty');
		password.nextElementSibling.appendChild(warning_text);
		password.classList.add("has-error");
		return;
	}

	// Other validations
	if (passwordRegEx.test(password.value)){
		error+='Password should have no spaces.<br/>';
	}
	if (password.value.length<7){
		error+='Password should be at least 7 characters long.<br/>';
	}
	if(password.id == "password-signup"){
		var passwordRegEx2 = /^[a-zA-Z]+$/; 
		if(passwordRegEx2.test(password.value)){
			error+="Password should contain at least one non letter character.";
		}
	}

	// Adds error message if there is
	AddErrorMessage(password,error);
}

function ConfirmPassword(event){
	var password = document.getElementById("password-signup").value;
	var password2 = event.currentTarget;
	WarningRemove(password2);

	if (password2.value.length == 0){
		var warning_text = document.createTextNode('This field should not be empty');
		password2.nextElementSibling.appendChild(warning_text);
		password2.classList.add("has-error");
		return;
	}
	if(password!=password2.value){
		var warning_text = document.createTextNode('Password does not match.');
		password2.nextElementSibling.appendChild(warning_text);
		password2.classList.add("has-error");
	}
}

function ValidateUsername(event){
	var username = event.currentTarget;
	WarningRemove(username);

	// Regex
	var usernameRegEx1=/^.*[ ].*$/;
	var usernameRegEx2=/^.*[\W].*$/;

	//Validations
	var error="";

	// Checks if input is empty
	if (username.value.length == 0){
		var warning_text = document.createTextNode('This field should not be empty');
		username.nextElementSibling.appendChild(warning_text);
		username.classList.add("has-error");
		return;
	}

	// Other Validations
	if (usernameRegEx1.test(username.value)){
		error+="Username should contain no spaces.<br/>";
	}
	if (usernameRegEx2.test(username.value)){
		error+="Username should contain only alphanumeric and \'_\' characters.";
	}

	// Adds error message if there is
	AddErrorMessage(username,error);
}

// Modifies the error message field of any form
// adds class to the element if there's error
function AddErrorMessage(element, message){
	if(message!=""){
		element.parentElement.getElementsByClassName("error-message")[0].innerHTML = message;
		element.classList.add("has-error");
	}
}

// Removes the Warning message in the fields
// Should be called every event listener
function WarningRemove(element){
	element.classList.remove("has-error");
	//element.nextElementSibling.innerHTML="";
	element.parentElement.getElementsByClassName("error-message")[0].innerHTML="";
}

// Event handler for submit in signup and signin
function ValidateSubmit(event){
	var parent = event.currentTarget.parentElement.parentElement;
	var inputs = parent.getElementsByTagName("input");

	for(var i =0; i<inputs.length;i++){
		if(inputs[i].value==""){
			if(inputs[i].id =="date-booking"){
				AddErrorMessage(inputs[i], "Invalid date format");
			}
			else AddErrorMessage(inputs[i], "This field should not be empty");
		}
	}

	var textareas = parent.getElementsByTagName("textarea");
	for(var i =0; i<textareas.length;i++){
		if(textareas[i].value==""){
			//AddErrorMessage(textareas[i], "This field should not be empty");
			var counter = textareas[i].nextElementSibling;
			counter.classList.add("red-text");	
			textareas[i].classList.add("has-error");
			var limit = 0;
			if(textareas[i].id == "description-booking"){
				limit = 50;
			}
			if(textareas[i].id == "edit-note"){
				limit = 500;
			}
			counter.innerHTML= "0/" + limit + " This field should not be empty";
		}
	}

	var hasError = parent.getElementsByClassName("has-error").length;

	
	// If all fields are valid
	if(hasError==0){
		GetValues(parent);
		window.location.href = 'room-booking-management.html';
	}
}


function GetValues(parent){
	var inputchild = parent.getElementsByTagName("input");
	for(var i=0;i<inputchild.length-1;i++){//last child is the button
		console.log("id: " + inputchild[i].id + " || value: " + inputchild[i].value);
	}
	var selectchild = parent.getElementsByTagName("select");
	for(var i=0;i<selectchild.length;i++){
		console.log("id: " + selectchild[i].id + " || value: " + selectchild[i].value);
	}
	var textareachild = parent.getElementsByTagName("textarea");
	for(var i=0;i<textareachild.length;i++){
		console.log("id: " + textareachild[i].id + " || value: " + textareachild[i].value);
	}
}


function DynamicCharacterCounter(event){
	var element = event.currentTarget;
	WarningRemove(element);

	var counter = document.getElementsByClassName("character-counter-message")[0];
	var charLength = element.value.length;
	var limit = 0;

	if(element.id == "description-booking"){
		limit = 50;
	}
	if(element.id == "edit-note"){
		limit = 500;
	}
	
	var error="";
	if(charLength>limit){
		error = " You have exceeded the maximum number of characters";
		counter.classList.add("red-text");	
		element.classList.add("has-error");
	}
	else if(charLength == 0){
		error = " This field should not be empty";
		counter.classList.add("red-text");	
		element.classList.add("has-error");
	}
	else{
		counter.classList.remove("red-text");
		element.classList.remove("has-error");
	}

	counter.innerHTML=charLength + "/" + limit + error;
}

function ValidateDate(event){
	var element = event.currentTarget;
	WarningRemove(element);
	if(element.value==""){
		AddErrorMessage(element, "Invalid date format");
	}
}

function ValidateTime(event){
	var end_time = document.getElementById("end-time-booking");
	var start_time = document.getElementById("start-time-booking"); 
	WarningRemove(end_time);

	if(parseInt(start_time.value,10)>=parseInt(end_time.value,10)){
		AddErrorMessage(end_time,"End time should be later that start time");
		end_time.style.borderColor = "red";
		start_time.style.borderColor = "red";
	}else{
		end_time.style.borderColor = "#388087";
		start_time.style.borderColor = "#388087";
	}
}