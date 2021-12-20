var generatePassword = function(){
  // Variable
  var passwordChars = "";
  var length = getLength();

  // First prompt
  window.alert("Please confirm whether or not you would like the following character types in your password.");

  // boolean variables for password criteria
  var passLow = window.confirm("Would you like Lowercase letters?");
  if (passLow){
    passwordChars += keyStrings.lower;
  };

  var passHigh = window.confirm("Would you like Uppercase letters?");
  if (passHigh){
    passwordChars += keyStrings.upper;
  };

  var passNumeric= window.confirm("Would you like Numeric characters?");
  if (passNumeric){
    passwordChars += keyStrings.numeric;
  };

  var passSpec = window.confirm("Would you like Special characters?");
  if (passSpec){
    passwordChars  += keyStrings.special;
  };

  // for loop that randomly add a variable to the string
  var password = "";
  for (var i = 0; i < length; i++){
    password += passwordChars[Math.floor(Math.random() * passwordChars.length)];
  };

  return password;
};

// get password length and check for other inputs
var getLength = function() {
  var passLength = window.prompt("How long would you like your password? Please choose between 8 to 128 characters.");

  // check passLength input
  if (passLength >= 8 && passLength <= 128){
    console.log(passLength);
    return passLength;
  }
  else{
    window.alert("Please input a number between 8 and 128!");
    return generatePassword();
  };
};

// Password variables object
var keyStrings = {
  lower: "abcdefghijklmnopqrstuvwxyz",
  upper: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  numeric: "0123456789",
  special: "!/#$%&'()*+,-,/;;<=>?"
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
