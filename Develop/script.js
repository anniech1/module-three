// Assignment code here
var lowercase = "abcdefghijklmnopqrstuvwxyz"
var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var numeric = "0123456789"
var special = "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~"

var password = document.getElementById("password");

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

function generatePassword() {
    var password = "";
    var passwordGenerated = "";
    var element = document.getElementById("generate");
    element.onclick = function(generatePassword) {
    console.log(generatePassword);}
    document.getElementById("generate").innerHTML = text;}

var lengthInput = prompt("How long will your password be? Select a number from 8 to 128")
  lengthInput = parseInt(lengthInput)
    if (lengthInput < 8 || lengthInput >128) {
      alert("Please select a number from 8-128!")
    else (lengthInput)
        alert("Thank you!")
    }

var lowercaseInput = prompt("Would you like lowercase characters in your password? Type yes or no as your response.");
    if (lowercaseInput == "Yes" || lowercaseInput == "yes") {
      alert("Thank you!")
      passwordGenerated +=lowercaseInput;

    else (lowercaseInput != "yes")
        alert("Thank you!")
    }

var uppercaseInput = prompt("Would you like uppercase characters in your password? Type yes or no as your response.");
    if (uppercaseInput == "Yes" || uppercaseInput == "yes") {
      alert("Thank you!")
      passwordGenerated += uppercaseInput;

    else (uppercaseInput != "yes")
        alert("Thank you!")
    }

var numericInput = prompt("Would you like numbers in your password? Type yes or no as your response.");
    if (numericInput == "Yes" || numericInput == "yes") {
      alert("Thank you!")
      passwordGenerated += numericInput;

    else (lowercaseInput != "yes")
        alert("Thank you!")
    }

var specialInput = prompt("Would you like special characters in your password? Type yes or no as your response.");
    if (numericInput == "Yes" || numericInput == "yes") {
      alert("Thank you!")
      passwordGenerated += specialInput;

    else (numericInput != "yes")
        alert("Thank you!")
    }



for (var i = 0; i <= length; i++) {
  var randomNumber = Math.floor(Math.random() * chars.length);
  password += passwordGenerated.substring(randomNumber, randomNumber +1);
 }


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

//Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

