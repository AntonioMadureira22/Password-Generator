// Assignment code here
var upperCase="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowerCase="abcdefghijklmnopqrstuvwxyz";
var numbers="0123456789";
var symbols="!@#$%^&*(/)_=+~/?|";
var length;
// variable for password choice selector
var choices;

alert("Welcome to the Password Generator. Where password security is our #1 priorty! Answer the prompts to have your private and exclusive password generated. Click the 'Generate Password' button to begin:)");

function generatePassword() {
  

  length = parseInt (prompt("How many characters would you your password to be? It can be NO LESS than 8 and NO MORE then 128."));
  //value asked for
  if (!length) {
    alert("Charecter Amount Needed!")
  } else if (length <8 || length > 128) {
    //needs validation
    length = parseInt(prompt("Password length needs to be between 8 and 128"));
  } else {
    upperCase = confirm("Do you want UPPERCASE letters?");
    lowerCase = confirm("Do You Want LOWERCASE letters?");
    numbers = confirm("Do You Want NUMBERS?");
    symbols = confirm("Do You Want SYMBOLS?");
  }
};
//If no criteria selected
if (!upperCase && !lowerCase && !numbers && !symbols){
  choices = alert("Values need to be selected!");
}
//When all of 4 variables are selected
else if ( upperCase && lowerCase && numbers && symbols){
  choices = upperCase.concat(lowerCase, numbers, symbols);
}
//When all of 3 variables are selected
else if (upperCase && lowerCase && numbers){
  choices = upperCase.concat(lowerCase, numbers);
}
else if (upperCase && lowerCase && symbols){
  choices = upperCase.concat(lowerCase, symbols);
}
else if (lowerCase && numbers && symbols){
  choices = lowerCase.concat(numbers, symbols);
}
//When all of 2 variables are selected
else if (upperCase && lowerCase){
  choices = upperCase.concat(lowerCase);
}
else if (upperCase && numbers){
  choices = upperCase.concat(numbers);
}
else if (upperCase && symbols){
  choices = upperCase.concat(symbols);
}
else if (lowerCase && numbers){
  choices = lowerCase.concat(numbers);
}
else if (lowerCase && symbols){
  choices = lowerCase.concat(symbols);
}
else if (numbers && symbols){
  choices = numbers.concat(symbols);
}
//when 1 variable is selcted
else if (upperCase){
  choices = (upperCase);
}
else if (lowerCase){
  choices = (lowerCase);
}
else if (numbers){
  choices = (numbers);
}
else if (symbols){
  choices = (symbols);
}


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
//randomization 
for (var i = 0; i < choices; i++){
  var selectChoices = choices [Math.floor(Math.random() * choices.length)];
  password.push(selectChoices);
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


