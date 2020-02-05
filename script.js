let newPassword = document.querySelector("#displayPassword");
let generateButton = document.querySelector("#generate");
let copyButton = document.querySelector("#copy");


const lowerCase = `abcdefghijklmnopqrstuvwxyz`;
const upperCase = `ABCDEFGHIJKLMNOPQRSTUZWXYZ`;
const specialCharacters = "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
const numbers = ` "0123456789"`;

generateButton.addEventListener("click", generatePassword);


function generatePassword() {

    let newPassword = " ";
    let passwordCharacters = "";
    let passwordLength = prompt("Enter a password length between 8 and 128!");


    if (Number(passwordLength < 8) || (passwordLength > 128) || isNaN(passwordLength)) {
        alert("Please enter valid password length")

    } else {
        let lowerCaseInput = confirm(" Would you like lowercase letters?")
        if (lowerCaseInput) {
            passwordCharacters += lowerCase;
        }

        let upperCaseInput = confirm(" Would you like upperCase letters?")
        if (upperCaseInput) {
            passwordCharacters += upperCase;
        }

        let numericalInput = confirm(" Would you like numbers?")
        if (numericalInput) {
            passwordCharacters += numbers;
        }
        let specialCharacterInput = confirm(" Would you like special characters?")
        if (specialCharacterInput) {
            passwordCharacters += specialCharacters;
        }

        if (passwordCharacters === " ") {
            alert("Please choose type of characters for the password")
        }
        for (var i = 0; i < passwordLength; i++) {
            newPassword += passwordCharacters.charAt(Math.floor(Math.random() * passwordCharacters.length));
        };

        document.getElementById("displayPassword").value = newPassword;
    }

    // function to copy password to clipboard\
    copyButton.addEventListener("click", copyPassword);

    function copyPassword() {
        document.getElementById("displayPassword").select();
        document.execCommand("Copy");
        document.getElementById("displayPassword").innerHTML = " "
        alert("Password copied to clipboard")
    }
}