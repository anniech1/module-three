// Assignment code here
var lowercase = "abcdefghijklmnopqrstuvwxyz"
var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var numeric = "0123456789"
var special = "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~"

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

 function generatePassword() {
    var element = document.getElementById("generate");
    element.onclick = function(generatePassword) {
    console.log(generatePassword);}

    parseInt(prompt("How long would you like your password length to be? Select a number from 8 to 128"))
      if (enter < 8 || enter >128) {
        alert("Please select a number from 8-128!")
      else (enter = var length) {
        alert("Thank you!")
      console.log(length)
      }}
      var length = parseInt
      document.getElementById("generate").innerHTML = text;

    var lowercase = prompt("Would you like lowercase characters in your password? Type yes or no as your response.");
      if (person == "Yes" || person == "yes") {
        alert("Thank you!");
      } else {
        alert("Thank you!");
      }
    var uppercase = prompt("Would you like uppercase characters in your password? Type yes or no as your response.");
    if (person == "Yes" || person == "yes") {
      alert("Thank you!");
    } else {
      alert("Thank you!");
    }
    var numeric = prompt("Would you like numbers in your password? Type yes or no as your response.");
    if (person == "Yes" || person == "yes") {
      alert("Thank you!");
    } else {
      alert("Thank you!");
    }
    var special = prompt("Would you like special characters in your password? Type yes or no as your response.");
    if (person == "Yes" || person == "yes") {
      alert("Thank you!");
    } else {
      alert("Thank you!");
    }
  document.getElementById("generate").innerHTML = text;
  }




//   var parameters = getParameters ();

//   for (i=0, i<parameters.length; i++)

// }}
// // Write password to the #password input
// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;
// }

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

