// Assignment code here
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

var length;

var lowercase 

var uppercase 

var numbers 

var special

function passwordLength () {

  length = window.prompt("How many characters would you like your password to be? Please choose between 8 and 128.");
  console.log(length);

  if (length > 7 && length < 129) {
    if (isNaN(length) || length === "" || length === null) {
      window.alert("Please enter a valid number.");
    }
  } 
};

function passwordOptions() {
  lowercase = confirm("Do you want to include lowercase letters? Please select OK for 'Yes' and CANCEL for 'No'");

  uppercase = confirm("Do you want to include uppercase letters? Please select OK for 'Yes' and CANCEL for 'No'");

  numbers = confirm("Do you want to include numbers? Please select OK for 'Yes' and CANCEL for 'No'");

  special = confirm("Do you want to include special characters? Please select OK for 'Yes' and CANCEL for 'No'")

}



function generatePassword () {
  var length = passwordLength();
  var options = passwordOptions();
  var uppercaseLettersArray = [
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
    'G',
    'H',
    'I',
    'J',
    'K',
    'L',
    'M',
    'N',
    'O',
    'P',
    'Q',
    'R',
    'S',
    'T',
    'U',
    'V',
    'W',
    'X',
    'Y',
    'Z',
  ];
  var lowercaseLettersArray = [
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'i',
    'j',
    'k',
    'l',
    'm',
    'n',
    'o',
    'p',
    'q',
    'r',
    's',
    't',
    'u',
    'v',
    'w',
    'x',
    'y',
    'z',
  ];
  var numbersArray = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  var specialCharactersArray = [
    '!',
    '#',
    '$',
    '%',
    '&',
    '(',
    ')',
    '*',
    '+',
    '-',
    '.',
    '/',
    ':',
    ';',
    '<',
    '=',
    '>',
    '?',
    '@',
  ];
  var passwordArray = []


}



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


// let i,
//  randomPassowrd ="";
//  for (i = 0; i < 16; i++) {
//    randomPassord = randomPassword 
//  }