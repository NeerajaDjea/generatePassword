// //generate random password
function generate(){
let values ='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!"#$%&(*+,-./:;<=>?@[\]^_{|}'
 passwordLength = prompt("Enter password length");
let password ="";
for(var i=0; i<=passwordLength;i++){
    password = password + values.charAt(Math.floor(Math.random()* Math.floor(values.length-1)));
}
document.getElementById("display").value =password;
}