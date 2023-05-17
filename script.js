// All variables that may be selected for the password
var generateBtn = document.querySelector("#generate");
var lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
var uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numberChars = "0123456789";
var specialChars = "!#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";

// creates the password and what type characters the user wants within the password
function generatePassword() {
  // prompt user for password criteria
  var passwordLength = prompt("Enter a password length between 8 and 128)");
  var applyLowercase = confirm("Do you want lowercase characters?");
  var applyUppercase = confirm("Do you want uppercase characters?");
  var applyNumbers = confirm("Do you want numbers?");
  var applySpecialChars = confirm("Do you want special characters?");

  // takes in the user input of the selected values
  if (isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128) {
    alert("Pick a number from 8 to 128.");
    return "I need a number higher then that!";
  }

  if (!applyLowercase && !applyUppercase && !applyNumbers && !applySpecialChars) {
    alert("Select one character type.");
    return "Try again.";
  }

  var charsSet = "";
  if (applyLowercase) {
    charsSet += lowercaseChars;
  }
  if (applyUppercase) {
    charsSet += uppercaseChars;
  }
  if (applyNumbers) {
    charsSet += numberChars;
  }
  if (applySpecialChars) {
    charsSet += specialChars;
  }

  // creates the password
  var password = "";
  for (var i = 0; i < passwordLength; i++) {
    var randomIndex = Math.floor(Math.random() * charsSet.length);
    password += charsSet[randomIndex];
  }

  // returns the password
  return password;
}

// function to write password to the page
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// add event listener to generate button
generateBtn.addEventListener("click", writePassword);
