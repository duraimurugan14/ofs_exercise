
"use strict";

var isUserValidated = false;


var generateUid = function () {
    /// Creates a unique id for identification purposes.
    /// <param name="separator" type="String" optional="true">
    /// The optional separator for grouping the generated segmants: default "-".    
    var delim = "-";
    function S4() {
        return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
    }
    return (S4() + S4() + delim + S4() + delim + S4());
};


function MyBook(){
		this.username = name;
		this.password = password;
		this.feeds = {};
		this.userId = generateUid();
}

var myBook = new MyBook();

function validateUserCredentials(userName, userPassword) {
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

function logOutUser(){
	isUserValidated = false;
}




function validateCredentials(userNameData, passwordData) { 
	var name = userNameData.value;
	var password = passwordData.value; 
	validateUserCredentials(name, password);
	if (isUserValidated === true) {

	}
}


