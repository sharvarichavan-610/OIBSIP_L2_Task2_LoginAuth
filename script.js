function showLogin(){

document.getElementById("registerPage").classList.add("hidden");
document.getElementById("loginPage").classList.remove("hidden");

}

function showRegister(){

document.getElementById("loginPage").classList.add("hidden");
document.getElementById("registerPage").classList.remove("hidden");

}

function registerUser(){

let username=document.getElementById("regUser").value;
let password=document.getElementById("regPass").value;

localStorage.setItem("username",username);
localStorage.setItem("password",password);

alert("Registration Successful!");

showLogin();

}

function loginUser(){

let username=document.getElementById("loginUser").value;
let password=document.getElementById("loginPass").value;

let storedUser=localStorage.getItem("username");
let storedPass=localStorage.getItem("password");

if(username===storedUser && password===storedPass){

alert("Login Successful!");

document.getElementById("loginPage").classList.add("hidden");
document.getElementById("dashboard").classList.remove("hidden");

}
else{

alert("Invalid Login Details");

}

}

function logout(){

alert("Logged out");

document.getElementById("dashboard").classList.add("hidden");
document.getElementById("loginPage").classList.remove("hidden");

}