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



// For loop to execute functions based on prompts
// for (i = 0; i < lengthPrompt; i++){
    //lowercase = ("true");
//}




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
    for (var i = 0; i < selections.lengthPrompt - passwordArray.length; i++){
        var funcIndex = Math.floor(Math.random() * passwordArray.length ) 
        var character = passwordArray[funcIndex]()
        yourPassword.push(character)
        console.log('funcIndex',funcIndex)
        console.log(character)
    }
    console.log('password', yourPassword)
    console.log(selections)
}


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