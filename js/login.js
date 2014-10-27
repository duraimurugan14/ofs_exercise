//login.js

"use strict";

var isUserValidated = false;

//validates the user credentials
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
			isUserValidated = true;
		}
		else{
			alert("The passowrd you entered is invalid. Please check and re-enter!");
			isUserValidated = false;
		}
	}
	else{
		alert("The username you entered is invalid. Please check and re-enter!");
		isUserValidated = false;
	}
	return isUserValidated;
}


//logs out the user and sets the default user view to login page
function logOutUser(){
	isUserValidated = false;
	defaultCurrentViewTo('loginView');
}


//sets user data to local variables and calls validateUserCredentials() for validation
function loginUser(userNameData, passwordData) { 
	var name = userNameData.value;
	var password = passwordData.value; 
	document.getElementById("feeduserName").innerHTML = name;		//sets username with welcome message at header
	document.getElementById("profileuserName").innerHTML = name;	
	validateUserCredentials(name, password);
	if (isUserValidated === true) {
		defaultCurrentViewTo("feedsView");
	}
}


//Sets the current view for the user 
function defaultCurrentViewTo(currentView){	
	document.getElementById("loginView").style.display = 'none';
	document.getElementById("feedsView").style.display = 'none';
	document.getElementById("profileView").style.display = 'none';
	switch(currentView){
		case "feedsView" : 
			document.getElementById("feedsView").style.display = 'block';
			loadFeedData();
			break;
		case "profileView" : 
			document.getElementById("profileView").style.display = 'block';
			loadProfileData();
			break;
		case "loginView" :
		default:
			document.getElementById("loginView").style.display = 'block';
			break;
	}
}	

