// define variables
var generateBtn = document.querySelector("#generate");
var lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
var uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numberChars = "0123456789";
var specialChars = "!#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";

// function to generate password
function generatePassword() {
  // prompt user for password criteria
  var passwordLength = prompt("Enter a password length between 8 and 128)");
  var applyLowercase = confirm("Do you want lowercase characters?");
  var applyUppercase = confirm("Do you want uppercase characters?");
  var applyNumbers = confirm("Do you want numbers?");
  var applySpecialChars = confirm("Do you want special characters?");

  // validate user input
  if (isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128) {
    alert("Pick a number from 8 to 128.");
    return "I need a number higher then that!";
  }

  if (!applyLowercase && !applyUppercase && !applyNumbers && !applySpecialChars) {
    alert("Please select at least one character type.");
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

  // generate password
  var password = "";
  for (var i = 0; i < passwordLength; i++) {
    var randomIndex = Math.floor(Math.random() * charsSet.length);
    password += charsSet[randomIndex];
  }

  // return password
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
