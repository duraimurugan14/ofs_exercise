//profile.js


function saveProfileInformation(){
	var name = document.getElementById("userName").value;
	var age = document.getElementById("userAge").value;
	var phone = document.getElementById("userPhone").value;
	var address = document.getElementById("userAddress").value;
	var profileImg = document.getElementById("userImg").value;
	alert(name  + "-" + age + "-" + phone + "-" + address + "-" + profileImg);
}
