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
  console.log(generatePassword);
  var lowercase = prompt("Would you like lowercase charecters in your password? Type yes or no as your response.");
  if (person == "Yes" || person == "yes") {
    text = "User cancelled the prompt.";
  } else {
    text = "Hello " + person + "! How are you today?";
  }
  document.getElementById("generate").innerHTML = text;


  var parameters = getParameters ();

  for (i=0, i<parameters.length; i++)

}}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

