// HTML document objects
var elResult = document.getElementById('password');
var elPasswordButton = document.getElementById('generate');


var symbols = '!@#$%^&*?/~<>';

// Define global variables
var lengthPrompt; 
var lowercase; 
var upperCase; 
var number; 
var special;


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

function randomSpecial () {
    return symbols [Math.floor(Math.random() * symbols.length)]; // Returns a random symbol from symbols variable.
}

function generatePassword(selections){
    var passwordArray = []
    var yourPassword = []
    if (selections.lowerCase) {
        yourPassword.push(randomLower())
        passwordArray.push(randomLower)
    }
    if (selections.upperCase) {
        yourPassword.push(randomLower())
        passwordArray.push(randomUpper)
    }
    if (selections.number) {
        yourPassword.push(randomLower())
        passwordArray.push(randomNumber)
    }  
    if (selections.special) {
        yourPassword.push(randomLower())
        passwordArray.push(randomSpecial)
    }
    

    for (var i = 0; i < selections.lengthPrompt - passwordArray.length; i++){
        var funcIndex = Math.floor(Math.random() * passwordArray.length ) 
        var character = passwordArray[funcIndex]()
        yourPassword.push(character)
        console.log('funcIndex',funcIndex)
        console.log(character)
    }
    console.log('password', yourPassword)
    console.log(selections)
    var finalPassword = yourPassword;
    document.getElementById('password').innerHTML = finalPassword;
}

// Display result of password in secure password container


function getinfo (){
    lengthPrompt = parseInt(window.prompt("Set password length: 8 - 128 characters"));
    lowerCase = window.confirm("Do you want lowercase characters?");
    upperCase = window.confirm("Do you want uppercase characters?");
    number = window.confirm("Do you want to include numbers?");
    special = window.confirm("Do you want special characters?");
    var userInput = {
        lengthPrompt: lengthPrompt,
        lowerCase: lowerCase,
        upperCase: upperCase,
        number: number,
        special: special,
    }
console.log('getinfo', userInput)
    
    generatePassword (userInput)
       
    
}

//console.log(getinfo())

// Generate password button prompt
elPasswordButton.addEventListener('click', getinfo)
