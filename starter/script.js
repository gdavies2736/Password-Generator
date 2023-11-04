// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
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
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
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
  'Z'
];

// 1. Prompt user for password critera including:
// a. password length 8 < 128
// b. lowercase, uppercase, numbers, special characters

//2. Validate users' input
//length 
//whether user opted for special characters, numbers, upper & lowercase characters

//3. Generate password based on user selection

//4. Display output of generate password on the page.


// Function to generate password with user input
function generatePassword() {
  //create variable for length of password.
  //password length depends on the amount of characters user selects.
  //if password length is less than 8 character - "Your password needs to be between 8
  //and 128 characters".

  var passwordLength = prompt("How many characters would you like your password to contain?")
if (passwordLength < 8 || passwordLength > 128) {
  alert("Your password needs to be between 8 and 128 characters");
  return " "
}

//confirm for each character type. Display message.
//must choose at least 1 character type.
//If no special character type selected - inform user they must choose one.

var wantSpecialCharacters = confirm("Do you want special characters?");
var wantUpperCase = confirm("Do you want to use upper case characters?");
var wantLowerCase = confirm("Do you want to use lower case characters?");
var wantNumericChars = confirm("Do you want to use numeric characters?");

if (!wantSpecialCharacters && !wantUpperCase && !wantLowerCase && !wantNumericChars) {
  alert("You must choose one character type");
  return " "
}
//create new array based on user selection
//if user selects yes to prompts, characters should go into array. Use if 
//statements to determine whether characters should be included in the array.

var characterChoices = []
if (wantSpecialCharacters) {
  characterChoices = characterChoices.concat(specialCharacters);
}
if (wantUpperCase) {
  characterChoices = characterChoices.concat(upperCasedCharacters);
}
if (wantLowerCase) {
  characterChoices = characterChoices.concat(lowerCasedCharacters); 
}
if (wantNumericChars) {
  characterChoices = characterChoices.concat(numericCharacters); 
}

//create password variable password, on length selected by user.
//randomly selected characters from characterChoices to be added to password variable.

var password = ""
for (let i = 0; i < passwordLength; i++) {

  var randomChar = characterChoices[Math.floor(Math.random()*characterChoices.length)]
  password = password + randomChar
}

return password;
}


// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);