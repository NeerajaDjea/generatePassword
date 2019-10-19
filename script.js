// //generate random password
function generate(){
let values ='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!"#$%&(*+,-./:;<=>?@[\]^_{|}'
 passwordLength = prompt("Enter a password length between 8 and 120");
let password ="";
// create for loop to choose password characters
for(var i=0; i<=passwordLength;i++){
    password = password + values.charAt(Math.floor(Math.random()* Math.floor(values.length-1)));
}
// add password to display area
document.getElementById("display").value =password;
}
// function to copy password to clipboard
function copyPassword(){
    document.getElementById("display").select();
    document.execCommand("Copy");
    alert("Password copied to clipboard")
}

