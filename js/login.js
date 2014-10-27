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


// function MyBook(){
// 	this.userArray = [];
// 	this.userArray.push(new )
// }

// var myBook = new MyBook();
function loginUser(userNameData, passwordData) { 
	var name = userNameData.value;
	var password = passwordData.value; 
	validateUserCredentials(name, password);
	// createUserObject();
	if (isUserValidated === true) {
		defaultCurrentViewTo("feedsView");
	}
}


function defaultCurrentViewTo(currentPage){	

//Change this as a switch block	
	var view1 = document.getElementById("loginView");
	var view2 = document.getElementById("feedsView");         	
	var view3 = document.getElementById("profileView");	
	view1.style.display = 'none';
	view2.style.display = 'none';
	view3.style.display = 'none';	
	if(currentPage === "loginView"){	
		view1.style.display = 'block';	
	}
	else if(currentPage === "feedsView"){
		view2.style.display = 'block';
	} else{	
		view3.style.display = 'block';	
		loadProfile();
	}
}



function defaultCurrentViewTo (currentPage){	

//Change this as a switch block	
	var view1 = document.getElementById("loginView");
	var view2 = document.getElementById("feedsView");         	
	var view3 = document.getElementById("profileView");	
	view1.style.display = 'none';
	view2.style.display = 'none';
	view3.style.display = 'none';	
	if(currentPage === "loginView")
	{	
		view1.style.display = 'block';	
	}
	else if(currentPage === "feedsView")
	{
		view2.style.display = 'block';
	} else 
	{	
		view3.style.display = 'block';	
		loadProfile();
	}
}

