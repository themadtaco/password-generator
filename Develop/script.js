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
