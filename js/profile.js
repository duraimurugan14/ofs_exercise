//profile.js

"use strict";

var profileDataValid = false;

//creates user object and its properties
var user = { name:undefined, age:undefined, phoneno:undefined, email:undefined, address:undefined, imagefile:undefined};
function User(name, age, phoneno, email, address, imagefile) {
	this.name = name;
	this.age = age;
	this.phoneno = phoneno;
	this.email = email;
	this.address = address;
	this.imagefile = imagefile;
}


//user input validation
function validateUserProfile(name, age, phoneNumber, mailId, address, profileImg){
	var mailPattern = /^\s*[\w\-\+_]+(\.[\w\-\+_]+)*\@[\w\-\+_]+\.[\w\-\+_]+(\.[\w\-\+_]+)*\s*$/;
	var atpos = mailId.indexOf("@");
    var dotpos = mailId.lastIndexOf(".");
	if (name.length === 0) {
		alert("Please enter valid name");
		profileDataValid = false;
	}
	else if (name.length > 50) {
		alert("Profile Name cannot exceed 50 characters. Please enter valid name");
		profileDataValid = false;
	}
	else if ((parseInt(age) < 1 && parseInt(age) > 100) || parseInt(age) === NaN || age == "") {
		alert("Please enter a valid Age!");
		profileDataValid = false;
	}
	else if(phoneNumber.length < 3) { 
	   alert("Please enter a valid phone number!");
	   profileDataValid = false;
	}
   	else if (atpos< 1 || dotpos<atpos+2 || dotpos+2>=mailId.length) {
		alert("Please provide a valid email address!");
		profileDataValid = false;
	}
	else{
		profileDataValid = true;
	}
}


//save user data to local memory
function saveProfileInformation(){
	var name = document.getElementById("profileName").value;
	var age = document.getElementById("userAge").value;
	var phoneNumber = document.getElementById("userPhone").value;
	var mailId = document.getElementById("userMail").value;
	var address = document.getElementById("userAddress").value;
	var profileImg = document.getElementById("userImg").value;
	validateUserProfile(name, age, phoneNumber, mailId, address, profileImg);
	if (profileDataValid) {
		var user = new User(name, age, phoneNumber, mailId, address, profileImg);
		localStorage.setItem("profileData", JSON.stringify(user));
	}
	else{
		alert("Error saving Data");
	}
}


//display profile image
function showProfileImage(fileInput) {
	var files = fileInput.files;
	for (var i = 0; i < files.length; i++) {
	var file = files[i];
	var imageType = /image.*/;
	if (!file.type.match(imageType)) {
	continue;
	}
	var img=document.getElementById("preview");
	img.file = file;
	var reader = new FileReader();
	reader.onload = (function(aImg) {
	return function(e) {
	aImg.src = e.target.result;
	};
	})(img);
	reader.readAsDataURL(file);
	}
}


//load profile data when user logs out and logs in back and navigates to profile page
function loadProfileData() {
	try {
		var userData = localStorage.getItem("profile");
		var user = JSON.parse(userData);
		if(user != undefined || user != null) {
			document.getElementById("profileName").value = user.name;
			document.getElementById("userAge").value = user.age;
			document.getElementById("userPhone").value = user.phoneno;
			document.getElementById("userMail").value = user.email;
			document.getElementById("userAddress").value = user.address;
			document.getElementById("userImg").value = user.imagefile;
			}
	} catch (e) {
		console.log(e);
	}	
}
