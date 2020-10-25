// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword () {
  
  // confirm("Please select password criteria");
  var pwConfirm = confirm("Please confirm password criteria");
  if(pwConfirm === true){
    alert("Use ok or cancel to update your password characteristics...");
  } else alert("Undefined");

  //variables
  // var finalPassword = ;
  options = [];
  upperChars = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  lowerChars = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  numChars = Math.floor(Math.random() * 10);
  specChar = ["/", ".", ";", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", ":", "<", ">", "?", "-", "_","`", "~", "+", "{", "}"];
  
  
  // prompts
  var upInput = confirm("would you like your password to contain a an uppercase character?");
  var lowInput = confirm("Would you like your password to contain a lowercase character?");
  var numInput = confirm("Would you like your password to contain a number?");
  var specInput = confirm("Would you like your password to contain a special character?");
  
  // length
  var lengthOfPassword = parseInt(prompt("Please select your password length"));
  
  // upperCharacters
    if(upInput === true){
      function random () {
        index = Math.floor(Math.random()*upperChars[0].length);
        options = (upperChars[0][index]);
    } } 
   
  // lowerCharacters
    if(lowInput === true){
      function random () {
        index = Math.floor(Math.random()*lowerChars[0].length);
        options = (lowerChars[0][index]);
   } }
  
  // numbers
    if(numInput === true){
      function random () {
        options = Math.floor(Math.random() * 10);  
   } }
  
  // specials chaacters
  if(specInput === true){
    function random () {
      index = Math.floor(Math.random()*specChars[0].length);
      options = (specChars[0][index]);
   } }
  
  //length for loop
  for(var i = 8; i < lengthOfPassword; i++){
    finalPassword = options
  }

  return finalPassword;
}

