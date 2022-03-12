function validateForm(){
    var user = document.getElementById('username').value; 
    var password = document.getElementById('password').value; 
    var email = document.getElementById('email').value; 
    var contact = document.getElementById('contact').value; 

     
    if (user.trim() == "") { 
        alert("Username must be filled out"); 
        return false; 
    } 
    else if (!user.trim().match(/nsu/g)) { 
        alert("Username must be filled out with nsu"); 
        return false; 
    } 
     
    else if (password.trim() == "") { 
        alert("Password must be filled out"); 
        return false; 
    } 
    else if (!password.trim().match(/^[0-9a-zA-Z]{7,20}$/)){ 
        alert("Password Must Contain Neumeric Value And Should 7 to 20 Character"); 
        return false; 
    } 
    var string = password.toString();
    var numeric = 0;
    var upper = 0;
    var lower = 0;
    var character = '';
    for(var i=0; i<string.length;i++){
        character = string.charAt(i);
        if(!isNaN(character)){
            numeric=1;
        }
        else if(character == character.toUpperCase()){
            upper=1;
        }
        else if(character == character.toLowerCase()){
            lower=1;
        }
    }
    if(numeric==0 || upper==0 || lower==0){
        alert("Password Must Contain One Neumeric One UpperCase And One LowerCase Value.")
    }
    else if (email == "") { 
        alert("Email must be filled out"); 
        return false; 
    } 
    else if (contact.trim()== "") { 
        alert("Contact must be filled out"); 
        return false; 
    } 
    else if (!contact.trim().match(/^[0-9]{11}$/) || contact.charAt(0)!=0 || contact.charAt(1)!=1){ 
        alert("Contact Must Contain Number And Length Must 11 And First Two Digit Must 01"); 
        return false; 
    } 
    else{
        return true;
    }
};