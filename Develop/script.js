//Global variables
var genLength = 0; 

var generatePassword = function(){
  var passLength = window.prompt("How long would you like your password? Please choose between 8 to 128 characters.")

  // check passLength input
  if (passLength >= 8 && passLength <= 128){
    genLength = passLength;
  }
  else{
    window.alert("Please input a number between 8 and 128!");
    return generatePassword();
  };

  console.log(genLength);

  window.alert("Please confirm whether or not you would like the following character types in your password.");

  // boolean variables for password criteria
  var passLow = window.confirm("Would you like Lowercase letters?");
  //var passHigh = window.confirm("Would you like Uppercase letters?");
  //var passNumeric= window.confirm("Would you like Numeric characters?");
  // var passSpec = window.confirm("Would you like Special characters?");

  if (passLow) {
    passLow = genLower();
  };
};

// Random generator functions

var genLower = function(){
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
};

var genUpper = function(){
  return String.fromCharCode(Math.floor(Math.random() *26) + 65);
};

var genNumber = function() {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
};

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
