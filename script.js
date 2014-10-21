
"use strict";

var isUserValidated = false;

function validateUserName(userName, userPassword) {
	if(userName.length > 8){
		alert("User Name cannot exceed 8 characters");
		isUserValidated = false;
	}
	else if(userName === "admin12"){
		if (userPassword < 6) {
			alert("Password you entered is too short!");
			isUserValidated = false;
		}
		else if (userPassword === "admin22") {
			alert("You are logged in!");	
			isUserValidated = true;
		}
	}
	else{
		alert("The user credentials you entered is invalid. Please check and re-enter");
		isUserValidated = false;
	}
	return isUserValidated;
}


function validateCredentials(userNameData, passwordData) { 
	var name = userNameData.value;
	var password = passwordData.value; 
	validateUserName(name, password);
	alert(isUserValidated);
}



