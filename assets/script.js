// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var charset = ""
  var length =  prompt('how long do you want the password')
  var letters = confirm("would you like to use letters?")
  var numbers = confirm("would you like to use numbers?")
  var characters = confirm("would you like to use special characters?")
  if(letters) {
    charset += "abcdefghijklmnopqrstuvwxyz"
  }
  if(numbers) {
    charset += "123456789"
  }
  if(characters) {
    charset += "!@#$%^&*()"
  }
  var password = generatePassword(length, charset);
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword(length, charset) {
  var retVal = "";
  for (var i = 0, n = charset.length; i < length; ++i) {
      retVal += charset.charAt(Math.floor(Math.random() * n));
  }
  return retVal;
}
