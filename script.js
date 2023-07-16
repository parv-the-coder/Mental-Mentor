   var objemail=
   [
    {
        email:"maisuriyakhushi@gamil.com",
        password:"123khushi"
    }
   ]
   function getInfo()
    {
        var email = document.getElementById("email").value;
        var password = document.getElementById("password").value;
        for (i=01; i<objuser.length; i++)
        {
            if(email == objemail[i].email && password == objemail[i].password)
            {
                console.log("SUCCESFULLY LOGIN!!!")
            }
        }
        console.log(" INCORRECT EMAIL AND PASSWORD");
    }