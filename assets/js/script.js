// HTML document objects
var elResult = document.getElementById('password');
var elPasswordButton = document.getElementById('generate');

// Define global variables
var lengthPromt; 
var lowercase; 
var upperCase; 
var number; 
var special;

// Generate password button prompt
elPasswordButton.addEventListener('click', () => {
    lengthPromt = window.prompt("Set password length: 8 - 128 characters");
    lowercase = window.confirm("Do you want lowercase characters?");
    upperCase = window.confirm("Do you want uppercase characters?");
    number = window.confirm("Do you want to include numbers?");
    special = window.confirm("Do you want special characters?");
})



// Password generator functions
function randomLower () {
    return String.fromCharCode(Math.floor(Math.random() * 26 ) + 97);  // Returns a random lowercase letter.
}

function randomUpper () {
    return String.fromCharCode(Math.floor(Math.random() * 26 ) + 65);  // Returns a random uppercase letter.
}

function randomNumber () {
    return String.fromCharCode(Math.floor(Math.random() * 10 ) + 48);  // Returns a random number.
}

function randomSymbol () {
    var symbols = '!@#$%^&*?/~<>';
    return symbols [Math.floor(Math.random() * symbols.length)]; // Returns a random symbol from symbols variable.
}

