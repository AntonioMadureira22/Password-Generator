// Assignment code here
const upperCase="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase="abcdefghijklmnopqrstuvwxyz";
const numbers="0123456789";
const symbols="!@#$%^&*()_=+~/?|";

alert("Welcome to the Password Generator. Where password security is our #1 priorty! Answer the prompts to have your private and exclusive password generated:)");
var length = prompt("How many characters would you your password to be? It can be NO LESS than 8 and NO MORE then 128.");
if (!length) {
  alert("Choose a Vaule!");
}

else if ( length < 8 || length > 128) {
  length = prompt("You must choose between 8 and 128 characters.");
}

confirm("Do You Want UPPERCASE letters?");
if (true) { 

} else {

}
confirm("Do You Want LOWERCASE letters?");
confirm("Do You Want NUMBERS?");
confirm("Do You Want SYMBOLS?");

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
