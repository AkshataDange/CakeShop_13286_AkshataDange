
var InvalidBorder="2px solid red";
var validBorder="2px solid green";
var nameNode=$("#name")
var emailNode=$("#email")
var messageNode=$("#messsage")

nameNode.on("keyup",()=>namevalidation())
emailNode.on("keyup",()=>emailvalidation())
messageNode.on("keyup",()=>messagevalidation())

contactForm.on("submit",()=>allvalidation())

function namevalidation() {
    var nameNode = $("#name"); 
    var name = nameNode.val().trim(); 

    if (name === "" || !/^[a-zA-Z\s]+$/.test(name)) {
        nameNode.css("border", "2px solid red");
        return false;
    } else {
        nameNode.css("border", "2px solid green");
        return true;
    }
}

function emailvalidation() {
    var emailNode = $("#email"); 
    var email = emailNode.val().trim(); 
  
    var emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailRegex.test(email)) {
        $("#emailError").text('Please enter a valid email.');
        emailNode.css("border", "2px solid red");
        return false;
    } else {
        $("#emailError").text('');
        emailNode.css("border", "2px solid green");
        return true;
    }
}


function allvalidation(){
    const state1 =emailvalidation();
    const state2 =namevalidation();

    if(state1 && state2 ){
        window.alert("form submited")
        return true 
    }
    else{
        return false
    }
}
