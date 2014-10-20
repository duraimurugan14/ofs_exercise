function pageRedirect(){
	alert("Into other function");
	// window.location = "http://www.google.com/";
    //var url = "http://www.google.com/";
   // window.open("http://www.google.com/", "_self");
    window.location.href = 'http://www.google.com/';
    alert("test");
}

function validateCredentials(user, pass) { 
	var userName1 = user.value;
	var passwordCheck1 = pass.value; 
	pageRedirect();
}


