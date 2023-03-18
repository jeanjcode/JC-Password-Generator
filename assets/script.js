// Array of special characters to be included in password
var specialCharacters = [
  '@', '%','+','\\','/',"'",'!','#','$','^','?',':',',',')','(','}','{',']','[','~','-','_','.'];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A','B','C','D','E','F','G','H','I', 'J', 'K', 'L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];


// // Function to prompt user for password options
// function getPasswordOptions() {
// }

// User input to generate password
function generatePassword() {
  var passSize = 0
  var possCharacters = []
}



// While loop - user must select password length
  while (parseInt(passSize) < 8 || parseInt(passSize) >128 || Number.isNaN(parseInt(passSize))){
    passSize = prompt("Please enter a password with a length between 8 and 128.")
  }




// // Function for getting a random element from an array
// function getRandom(arr) {

// }






// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input - displays password
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);



