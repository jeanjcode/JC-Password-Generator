// Array of special characters to be included in password
var specialCharacters = [
  '@', '%','+','\\','/',"'",'!','#','$','^','?',':',',',')','(','}','{',']','[','~','-','_','.'];

// Array of numeric characters to be included in password
var numbersChars = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCase = [
  'a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

// Array of uppercase characters to be included in password
var upperCase = [
  'A','B','C','D','E','F','G','H','I', 'J', 'K', 'L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];




// User input to generate password
function generatePassword() {
  var passSize = 0
  var possChars = []


// While loop - user must select password length
while (parseInt(passSize) < 8 || parseInt(passSize) >128 || Number.isNaN(parseInt(passSize))){
    passSize = prompt("Please select a password length between 8 and 128 characters.")
  }

// Prompt user for password options - using conditional statements
//Include uppercase characters?
var usersUpperCase = confirm("In the next 4 questions, at least one character type should be selected to be included in your password.                                                            Do you want to include uppercase characters?")
    if(usersUpperCase == true){
     possChars = possChars.concat(upperCase)   
    }

//Include lowercase characters
var usersLowerCase = confirm("Do you want to include lowercase characters")
    if(usersLowerCase == true){
     possChars = possChars.concat(lowerCase)
    }


//Include special characters?
var usersCharacters = confirm("Do you want to include special characters?")
    if(usersCharacters == true){
     possChars = possChars.concat(specialCharacters)
    }
  
//Include numeric characters?
var usersNumbers = confirm("Do you want to include numeric characters?")
    if(usersNumbers == true){
     possChars = possChars.concat(numbersChars)
    }
    
    if (!usersUpperCase && !usersLowerCase && !usersCharacters && !usersNumbers) {
    alert("No character type was selected. Please try again.");
    return "";
  }

// For loop - to create a randomized selection 
var result = ""
for (var i = 0, n=possChars.length; i<parseInt(passSize); i++) {
  result += possChars[Math.floor(Math.random()*n)]
}

return result;
}



// Write password to the #password input - displays password
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}




// Get references to the #generate element
var generateBtn = document.querySelector('#generate');



// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);



