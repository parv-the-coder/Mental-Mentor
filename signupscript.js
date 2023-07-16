/*const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

//email validation
function isValidEmail(email){
    const re =/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}




form.addEventListener('SIGNIN', function(e){
    e.preventDefault();

    if (username.value === ''){
        showError(username,"username is required");
    }
    else
    {

    }
});*/
/*function fun()
{
    pat=/^[a-zA-Z]+$/;
    n=document.getElementById("n1").value;
    if(n1.length>10)
    {
        alert("username should be less than 10");
    }
    
    pat=/^W+([\.-]?\W+)*@\W+([\.-]?\W+)*(\.\W{2,3})+$/;
    if(emailId.value.match(pat))
    {
        return true;
    }
    else
    {
        alert("Invalid email address.");
        return false;
    }

    
}
function phoneNumberCheck(phoneNumber)
{
   var regEx = /^\+{0,2}([\-\. ])?(\(?\d{0,3}\))?([\-\. ])?\(?\d{0,3}\)?([\-\. ])?\d{3}([\-\. ])?\d{4}/;
   if(phoneNumber.value.match(regEx))
     {
      return true;
     }
   else
     {
     alert("Please enter a valid phone number.");
     return false;
     }
}  

function validateEmail(emailId)
{
    var mailformat = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    if(emailId.value.match(mailformat))
    {
        return true;
    }
    else
    {
        alert("Invalid email address.");
        return false;   
    }
}    

function validatePsaaword(password)
{
    var a = document.getElementById()
}*/ 

function check()
{
    uname = document.getElementById("u1").value;
    email = document.getElementById("e1").value;
    pass = document.getElementById("p1").value;
    phone = document.getElementById("t1").value;
    cpass = document.getElementById("c1").value;

    pat=/^[a-zA-Z]+$/;
    if(!(pat.test(uname))){
        alert("name is invalid");
    }
    
    mail=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(!(mail.test(email))){
        alert("enter valid email");
    }
    
    password=/(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/;
    if(pass.length<8){
        alert("enter atleast 8 characters");
    }
    else if(!(password.test(pass))){
        alert("enter valid password");
    }

    regEx = /^\+{0,2}([\-\. ])?(\(?\d{0,3}\))?([\-\. ])?\(?\d{0,3}\)?([\-\. ])?\d{3}([\-\. ])?\d{4}/;
    if(!(regEx.test(phone)))
    {
     alert("Please enter a valid phone number.");
    }

    if(pass!=cpass){
        alert("password is not match");
    }
}