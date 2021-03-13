// Generate password buttom

var passwordButton = document.getElementById('generate'); // selecting the HTML document's button element.

passwordButton.onclick = generatePassword; // add a listener event when user click's the button.

function generatePassword() {
    window.prompt("Hello");
}

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

