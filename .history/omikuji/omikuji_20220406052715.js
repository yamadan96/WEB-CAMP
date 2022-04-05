let username;
let userresult;

username = prompt("お名前を教えてください。")
document.getElementById("name").innerHTML = username;
let rand = Math.floor( Math.random() * 5) ;