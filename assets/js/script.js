// Assignment Code
var generateBtn = document.querySelector("#generate");
// Assign 4 variables that cover the types of characters in a password
var number = "1234567890";
var lowerCase = "qwertyuiopasdfghjklzxcvbnm";
var upperCase = lowerCase.toUpperCase();
var special = "~!@#$%^&*()_+-=`{[}]|:;<,>.?/";

// This function returns a random value from an array
function chooseRandom(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

// This function returns a password length after a validation check
function generatePasswordLength() {
  var passwordLength = prompt(
    "How many characters? Please input a number between 8 and 128"
  );
  passwordLength = Number(passwordLength);
  if (
    isNaN(passwordLength) ||
    passwordLength === null ||
    passwordLength === ""
  ) {
    alert("Please input a number for the password length");
    return null;
  }

  if (passwordLength < 8 || passwordLength > 128) {
    alert("Please input a number between 8 and 128 for the password length");
    return null;
  }

  return passwordLength;
}
// This function returns a string that contains the character possibilities that can occur in the password
function generateCharacterOptions() {
  var numberConfirm = confirm("Would you like to include numbers?");
  var lowerConfirm = confirm("Would you like to include lowercase letters?");
  var upperConfirm = confirm("Would you like to include uppercase letters?");
  var specialConfirm = confirm("Would you like to include special characters?");

  var combinedOptions = "";
  if (numberConfirm) {
    combinedOptions += number; // combinedOptions = combinedOptions + number
  }
  if (lowerConfirm) {
    combinedOptions += lowerCase;
  }
  if (upperConfirm) {
    combinedOptions += upperCase;
  }
  if (specialConfirm) {
    combinedOptions += special;
  }

  if (combinedOptions === "") {
    alert(
      "Please select at least one of numbers, lowercase, uppercase, or special characters"
    );
    return null;
  }

  return combinedOptions;
}

// This function generate passwords based on the length and character criteria supplied by the user
function generatePassword() {
  var passwordLength = generatePasswordLength();
  if (passwordLength === null) {
    return null;
  }

  var combinedOptions = generateCharacterOptions();
  if (combinedOptions === null) {
    return null;
  }

  combinedOptions = combinedOptions.split("");

  var password = "";
  for (var i = 0; i < passwordLength; i++) {
    password += chooseRandom(combinedOptions);
  }

  return password;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  if (password != null) {
    var passwordText = document.querySelector("#password");
    passwordText.value = password;
  }
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
