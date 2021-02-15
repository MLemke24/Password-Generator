// Get references to the #generate element
var generateBtn = document.querySelector("#generate");


// Global Variables 
var length, uppercase, lowercase, special, numbers

// Arrays 

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

// Generate Password Function

function generatePassword () {

  // Length 

  length = parseInt(window.prompt("How many characters would you like your password to be? Please choose between 8 and 128."));
  if (length < 7 || length > 128) {
    alert("Not a valid response, refresh the page and try again!")
    }
    else {

      // True False Questions 
  lowercase = confirm("Do you want to include lowercase letters? Please select OK for 'Yes' and CANCEL for 'No'");
  console.log(lowercase);

  uppercase = confirm("Do you want to include uppercase letters? Please select OK for 'Yes' and CANCEL for 'No'");
      console.log(uppercase);
  numbers = confirm("Do you want to include numbers? Please select OK for 'Yes' and CANCEL for 'No'");
      console.log(numbers);
  special = confirm("Do you want to include special characters? Please select OK for 'Yes' and CANCEL for 'No'");
      console.log(special);
  };
 
// Concat Formula
  var possiblePasswordArray = []
  var passwordArray = []

  if(lowercase) {
    possiblePasswordArray =  possiblePasswordArray.concat(lowercaseLettersArray);
  }

  if(uppercase) {
    possiblePasswordArray =  possiblePasswordArray.concat(uppercaseLettersArray);
  }

  if(numbers) {
    possiblePasswordArray =  possiblePasswordArray.concat(numbersArray);
  }

  if(special) {
    possiblePasswordArray =  possiblePasswordArray.concat(specialCharactersArray);
  }

  // For loop

var password = ""

for (var i = 0; i < length; i++) {
  password += (possiblePasswordArray[Math.floor(Math.random() *  possiblePasswordArray.length)]);

   console.log(passwordArray);
};

return password;
};


// Password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;

};

// Event listener to generate button
generateBtn.addEventListener("click", writePassword);

