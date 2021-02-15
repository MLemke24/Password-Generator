// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Assignment code here


var length, uppercase, lowercase, special, numbers

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



  length = parseInt(window.prompt("How many characters would you like your password to be? Please choose between 8 and 128."));
  console.log(length);
  //  return(length);
  if (length < 7 && length > 128) {
    alert("Not a valid response")
    } else {

  lowercase = confirm("Do you want to include lowercase letters? Please select OK for 'Yes' and CANCEL for 'No'");
  console.log(lowercase);

  uppercase = confirm("Do you want to include uppercase letters? Please select OK for 'Yes' and CANCEL for 'No'");
      console.log(uppercase);
  numbers = confirm("Do you want to include numbers? Please select OK for 'Yes' and CANCEL for 'No'");
      console.log(numbers);
  special = confirm("Do you want to include special characters? Please select OK for 'Yes' and CANCEL for 'No'");
      console.log(special);
  generatePassword(length, uppercase, lowercase, numbers, special);
  };
 
function generatePassword () {
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


for (var i = 0; i < length; i++) {
  passwordArray = passwordArray.concat(possiblePasswordArray[Math.floor(Math.random() *  possiblePasswordArray.length)]);

   console.log(passwordArray);
};

};


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;

};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

