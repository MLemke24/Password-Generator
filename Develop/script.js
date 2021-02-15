// Assignment code here
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

var length;

var lowercase 

var uppercase 

var numbers 

var special

var options

function passwordLength () {

  length = window.prompt("How many characters would you like your password to be? Please choose between 8 and 128.");
  console.log(length);
  //  return(length);
  if (length > 7 && length < 129) {
    alert("Great! Lets Get Started.")
    } else {
      if (isNaN(length) || length === "" || length === null) {
        window.alert("Please enter a valid number.");
    }
    parseInt(length);
  } 
};

function passwordOptions() {
  lowercase = confirm("Do you want to include lowercase letters? Please select OK for 'Yes' and CANCEL for 'No'");

  uppercase = confirm("Do you want to include uppercase letters? Please select OK for 'Yes' and CANCEL for 'No'");

  numbers = confirm("Do you want to include numbers? Please select OK for 'Yes' and CANCEL for 'No'");

  special = confirm("Do you want to include special characters? Please select OK for 'Yes' and CANCEL for 'No'");

  return options = {
    lowercase: lowercase,
    uppercase: uppercase,
    numbers: numbers,
    special: special,
  };

}



function generatePassword () {
  length = passwordLength();
  options = passwordOptions();
  console.log(options);
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


  var possiblePasswordArray = []
  var passwordArray = []

  if(options.lowercase) {
    possiblePasswordArray =  possiblePasswordArray.concat(lowercaseLettersArray);
  }

  if(options.uppercase) {
    possiblePasswordArray =  possiblePasswordArray.concat(uppercaseLettersArray);
  }

  if(options.numbers) {
    possiblePasswordArray =  possiblePasswordArray.concat(numbersArray);
  }

  if(options.special) {
    possiblePasswordArray =  possiblePasswordArray.concat(specialCharactersArray);
  }

console.log(possiblePasswordArray);



console.log(passwordArray);

debugger;

};

for (var i = 0; i < length; i++) {
  passwordArray = passwordArray.concat(possiblePasswordArray[Math.floor(Math.random() *  possiblePasswordArray.length)]);

}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

};



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

