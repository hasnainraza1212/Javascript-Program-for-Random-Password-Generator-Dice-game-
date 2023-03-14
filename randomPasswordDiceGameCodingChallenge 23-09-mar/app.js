function dice() {
    var num = Math.random() * 6
    num = Math.floor(num);
    console.log(num);


    if (num === 0) {
        var img = document.getElementById("myImage");
        img.src = "./images/dice1.jpg";
    }

    else if (num === 1) {
        var img = document.getElementById("myImage");
        img.src = "./images/dice2.jpg";
    }
    else if (num === 2) {
        var img = document.getElementById("myImage");
        img.src = "./images/dice3.jpg";
    }

    else if (num === 3) {
        var img = document.getElementById("myImage");
        img.src = "./images/dice4.jpg";
    }

    else if (num === 4) {
        var img = document.getElementById("myImage");
        img.src = "./images/dice5.jpg";
    }

    else if (num === 5) {
        var img = document.getElementById("myImage");
        img.src = "./images/dice6.jpg";
    }
}









function generatePassword() {

var str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789#$%&'()*+-/";
var password = [];
var hasLowerString = false;
var hasUpperString = false;
var hasNumber = false;
var hasSpecialCharacter = false;
for (var i = 0; i < 10; i++) {
var index = Math.floor(Math.random()*str.length);
    password.push(str[index]);
    if (password[i].charCodeAt() >= 48 && password[i] <= 57) {
        hasNumber = true;
    }

    if (password[i].charCodeAt() >= 65 && password[i].charCodeAt() <= 90) {
        hasUpperString = true;
    }

    if (password[i].charCodeAt() >= 97 && password[i].charCodeAt() <= 122) {
        hasLowerString = true;
    }
    if (password[i].charCodeAt() >= 33 && password[i].charCodeAt() <= 47) {
        hasSpecialCharacter = true;
    }
}
if (hasNumber === true && hasLowerString === true && hasUpperString && hasSpecialCharacter && hasNumber !== undefined && hasLowerString !== undefined && hasUpperString !== undefined && hasSpecialCharacter !== undefined){
    console.log("Password is : "+password.join("") + " and length of password is : " + password.length);
}
else {
    password = ["g", "h", "3", "*", "b", "V", "2", "H", "$", "Y"];
    console.log("Password is : " + password.join(""));
}
    var generatedPassword = document.getElementById("my-heading");
    generatedPassword.innerHTML = password;
}

