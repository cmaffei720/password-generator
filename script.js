// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}


var passwordLength = prompt("How long do you want your password to be? Must be between 8 and 128 characters", "number")


if (passwordLength > 128 || passwordLength < 8) {
 alert("Please choose a password length of at least 8 characters and at most 128 characters. Try again")
  var passwordLength = prompt("How long do you want your password to be? Must be over 8 characters and less than 128 characters")
  if (passwordLength > 128 || passwordLength < 8) {
   alert("Please choose a password length of at least 8 characters and at most 128 characters. Try again")
  var passwordLength = prompt("How long do you want your password to be? Must be at least 8 characters and at most 128 characters")
  }
  }


//function testLength (passwordLength) {
 // if (passwordLength < 8 || passwordLength > 128)
  //{alert("password is below 8 characters or over 128 characters. Please try again")
 // var passwordLength = prompt("How long do you want your password to be? Must be between 8 and 128 characters", "number2")
 // testLength(passwordLength)}
 // return passwordLength
//}


//testLength (passwordLength)
console.log (passwordLength)

//console.log(passwordLength)

var passwordLowCharacters = confirm("Would you like your password to include lowercase characters?")
var passwordUpCharacters = confirm("Would you like your password to include uppercase characters?")
var passwordNumericCharacters = confirm("Would you like your password to include numbers?")
var passwordSpecialCharacters = confirm("Would you like your password to include special characters?")

if (passwordLowCharacters === false && passwordUpCharacters === false && passwordNumericCharacters === false && passwordSpecialCharacters === false) {
alert("You must choose one type of character in your password. Please refresh the page and try again.")}

if (passwordLength > 128 || passwordLength < 8) {
  alert("Your password must be between 8 and 128 characters. Please try again.")
}

console.log(passwordLowCharacters)
console.log(passwordUpCharacters)
console.log(passwordNumericCharacters)
console.log(passwordSpecialCharacters)

var alphabetUpper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
var alphabetLower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var numericCharacters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
var Loweruppernumber = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
//length 62
var Lowerupper = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
//length 52
var lowerNumber = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
//length 36
var upperNumber = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]

//var specCharacters = ["@","#","%","<","^","<","\"]
//this does not work, workaround for special characters is the makeid functions below
//

function makeid(length) {
  var result           = '';
  var characters       = '!@#$%^&*()?><|';
  var charactersLength = characters.length;
  for ( var i = 0; i < length; i++ ) {
     result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

makeid(1)
var specCharacter = makeid(1)
console.log(makeid(1))

function makeid2(length) {
  var result           = '';
  var characters       = '!@#$%^&*()?><|';
  var charactersLength = characters.length;
  for ( var i = 0; i < length; i++ ) {
     result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}
makeid2(1)
 var specCharacter2 = makeid2(1)
console.log(makeid2(1))

function makeid3(length) {
  var result           = '';
  var characters       = '!@#$%^&*()?><|';
  var charactersLength = characters.length;
  for ( var i = 0; i < length; i++ ) {
     result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}
makeid3(1)
 var specCharacter3 = makeid3(1)
console.log(makeid3(1))

function makeid4(length) {
  var result           = '';
  var characters       = '!@#$%^&*()?><|';
  var charactersLength = characters.length;
  for ( var i = 0; i < length; i++ ) {
     result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}
makeid4(1)
 var specCharacter4 = makeid4(1)
console.log(makeid4(1))

function makeid5(length) {
  var result           = '';
  var characters       = '!@#$%^&*()?><|';
  var charactersLength = characters.length;
  for ( var i = 0; i < length; i++ ) {
     result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}
makeid5(1)
 var specCharacter5 = makeid5(1)
console.log(makeid5(1))

var allRandomSpec = [specCharacter, specCharacter2, specCharacter3, specCharacter4, specCharacter5]


function generatePassword (passwordLength, passwordLowCharacters, passwordUpCharacters, passwordNumericCharacters, passwordSpecialCharacters) {
  var passwordContent = ["a","b","c"]
  passwordContent.length = passwordLength
  for (i = 0; i < passwordLength - 4; i++) {
    if (passwordLowCharacters === true && passwordUpCharacters === true && passwordNumericCharacters === true && passwordSpecialCharacters === true){
      passwordContent[i] = Loweruppernumber[Math.floor(Math.random() * (62))]
      passwordContent[i+1] = alphabetLower[Math.floor(Math.random() * (26))]
      passwordContent[i+2] = alphabetUpper[Math.floor(Math.random() * (26))]
      passwordContent[i+3] = numericCharacters[Math.floor(Math.random() * (10))]
      passwordContent[i+4] = specCharacter
    }
    else if (passwordLowCharacters === true && passwordUpCharacters === true && passwordNumericCharacters === true && passwordSpecialCharacters === false){
      passwordContent[i] = Loweruppernumber[Math.floor(Math.random() * (62))]
      passwordContent[i+1] = alphabetLower[Math.floor(Math.random() * (26))]
      passwordContent[i+2] = alphabetUpper[Math.floor(Math.random() * (26))]
      passwordContent[i+3] = numericCharacters[Math.floor(Math.random() * (10))]
      passwordContent[i+4] = alphabetLower[Math.floor(Math.random() * (26))]
    }
    else if (passwordLowCharacters === true && passwordUpCharacters === true && passwordNumericCharacters === false && passwordSpecialCharacters === true){
      passwordContent[i] = Lowerupper[Math.floor(Math.random() * (52))]
      passwordContent[i+1] = alphabetLower[Math.floor(Math.random() * (26))]
      passwordContent[i+2] = alphabetUpper[Math.floor(Math.random() * (26))]
      passwordContent[i+3] = alphabetLower[Math.floor(Math.random() * (26))]
      passwordContent[i+4] = specCharacter
    }
    else if (passwordLowCharacters === true && passwordUpCharacters === true && passwordNumericCharacters === false && passwordSpecialCharacters === false){
      passwordContent[i] = Lowerupper[Math.floor(Math.random() * (52))]
      passwordContent[i+1] = alphabetLower[Math.floor(Math.random() * (26))]
      passwordContent[i+2] = alphabetUpper[Math.floor(Math.random() * (26))]
      passwordContent[i+3] = alphabetLower[Math.floor(Math.random() * (26))]
      passwordContent[i+4] = alphabetLower[Math.floor(Math.random() * (26))]
    }
    else if (passwordLowCharacters === true && passwordUpCharacters === false && passwordNumericCharacters === true && passwordSpecialCharacters === true){
      passwordContent[i] = lowerNumber[Math.floor(Math.random() * (36))]
      passwordContent[i+1] = numericCharacters[Math.floor(Math.random() * (10))]
      passwordContent[i+2] = alphabetLower[Math.floor(Math.random() * (26))]
      passwordContent[i+3] = numericCharacters[Math.floor(Math.random() * (10))]
      passwordContent[i+4] = specCharacter
    }
    else if (passwordLowCharacters === true && passwordUpCharacters === false && passwordNumericCharacters === true && passwordSpecialCharacters === false){
      passwordContent[i] = lowerNumber[Math.floor(Math.random() * (36))]
      passwordContent[i+1] = numericCharacters[Math.floor(Math.random() * (10))]
      passwordContent[i+2] = alphabetLower[Math.floor(Math.random() * (26))]
      passwordContent[i+3] = numericCharacters[Math.floor(Math.random() * (10))]
      passwordContent[i+4] = alphabetLower[Math.floor(Math.random() * (26))]
    }
    else if (passwordLowCharacters === true && passwordUpCharacters === false && passwordNumericCharacters === false && passwordSpecialCharacters === true){
      passwordContent[i] = alphabetLower[Math.floor(Math.random() * (26))]
      passwordContent[i+1] = alphabetLower[Math.floor(Math.random() * (26))]
      passwordContent[i+2] = alphabetLower[Math.floor(Math.random() * (26))]
      passwordContent[i+3] = alphabetLower[Math.floor(Math.random() * (26))]
      passwordContent[i+4] = specCharacter
    }
    else if (passwordLowCharacters === true && passwordUpCharacters === false && passwordNumericCharacters === false && passwordSpecialCharacters === false){
      passwordContent[i] = alphabetLower[Math.floor(Math.random() * (26))]
      passwordContent[i+1] = alphabetLower[Math.floor(Math.random() * (26))]
      passwordContent[i+2] = alphabetLower[Math.floor(Math.random() * (26))]
      passwordContent[i+3] = alphabetLower[Math.floor(Math.random() * (26))]
      passwordContent[i+4] = alphabetLower[Math.floor(Math.random() * (26))]
    }
    else if (passwordLowCharacters === false && passwordUpCharacters === true && passwordNumericCharacters === true && passwordSpecialCharacters === true){
      passwordContent[i] = upperNumber[Math.floor(Math.random() * (36))]
      passwordContent[i+1] = numericCharacters[Math.floor(Math.random() * (10))]
      passwordContent[i+2] = alphabetUpper[Math.floor(Math.random() * (26))]
      passwordContent[i+3] = numericCharacters[Math.floor(Math.random() * (10))]
      passwordContent[i+4] = specCharacter
    }
    else if (passwordLowCharacters === false && passwordUpCharacters === true && passwordNumericCharacters === true && passwordSpecialCharacters === false){
      passwordContent[i] = upperNumber[Math.floor(Math.random() * (36))]
      passwordContent[i+1] = numericCharacters[Math.floor(Math.random() * (10))]
      passwordContent[i+2] = alphabetUpper[Math.floor(Math.random() * (26))]
      passwordContent[i+3] = numericCharacters[Math.floor(Math.random() * (10))]
      passwordContent[i+4] = alphabetUpper[Math.floor(Math.random() * (26))]
    }
    else if (passwordLowCharacters === false && passwordUpCharacters === true && passwordNumericCharacters === false && passwordSpecialCharacters === true){
      passwordContent[i] = alphabetUpper[Math.floor(Math.random() * (26))]
      passwordContent[i+1] = alphabetUpper[Math.floor(Math.random() * (26))]
      passwordContent[i+2] = alphabetUpper[Math.floor(Math.random() * (26))]
      passwordContent[i+3] = alphabetUpper[Math.floor(Math.random() * (26))]
      passwordContent[i+4] = specCharacter
  }
    else if (passwordLowCharacters === false && passwordUpCharacters === true && passwordNumericCharacters === false && passwordSpecialCharacters === false){
    passwordContent[i] = alphabetUpper[Math.floor(Math.random() * (26))]
    passwordContent[i+1] = alphabetUpper[Math.floor(Math.random() * (26))]
    passwordContent[i+2] = alphabetUpper[Math.floor(Math.random() * (26))]
    passwordContent[i+3] = alphabetUpper[Math.floor(Math.random() * (26))]
    passwordContent[i+4] = alphabetUpper[Math.floor(Math.random() * (26))]
  }
  else if (passwordLowCharacters === false && passwordUpCharacters === false && passwordNumericCharacters === true && passwordSpecialCharacters === true){
    passwordContent[i] = numericCharacters[Math.floor(Math.random() * (10))]
    passwordContent[i+1] = numericCharacters[Math.floor(Math.random() * (10))]
    passwordContent[i+2] = numericCharacters[Math.floor(Math.random() * (10))]
    passwordContent[i+3] = numericCharacters[Math.floor(Math.random() * (10))]
    passwordContent[i+4] = specCharacter
  }
  else if (passwordLowCharacters === false && passwordUpCharacters === false && passwordNumericCharacters === true && passwordSpecialCharacters === false){
    passwordContent[i] = numericCharacters[Math.floor(Math.random() * (10))]
    passwordContent[i+1] = numericCharacters[Math.floor(Math.random() * (10))]
    passwordContent[i+2] = numericCharacters[Math.floor(Math.random() * (10))]
    passwordContent[i+3] = numericCharacters[Math.floor(Math.random() * (10))]
    passwordContent[i+4] = numericCharacters[Math.floor(Math.random() * (10))]
  }
    else if (passwordLowCharacters === false && passwordUpCharacters === false && passwordNumericCharacters === false && passwordSpecialCharacters === true){
      passwordContent[i] = allRandomSpec[Math.floor(Math.random() * (5))]
      passwordContent[i+1] = allRandomSpec[Math.floor(Math.random() * (5))]
      passwordContent[i+2] = allRandomSpec[Math.floor(Math.random() * (5))]
      passwordContent[i+3] = allRandomSpec[Math.floor(Math.random() * (5))]
      passwordContent[i+4] = allRandomSpec[Math.floor(Math.random() * (5))]
    }
  }
  alert("your password is " + (passwordContent.join('')));
  console.log(passwordContent)
}

generatePassword(passwordLength, passwordLowCharacters, passwordUpCharacters, passwordNumericCharacters, passwordSpecialCharacters)

//generatePassword(passwordLength, passwordLowCharacters, passwordUpCharacters, passwordNumericCharacters, passwordSpecialCharacters)

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
