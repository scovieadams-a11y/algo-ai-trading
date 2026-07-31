// Adams AI Admin Panel


const generate =
document.getElementById("generate");



if(generate){


generate.onclick=function(){


let signals=[

"BUY XAUUSD",

"SELL EURUSD",

"BUY BTCUSD",

"WAIT FOR CONFIRMATION"

];



let random =
signals[
Math.floor(
Math.random()*signals.length
)
];



document.getElementById("adminResult")
.innerHTML =
"New Signal: " + random;



};


}



const logout =
document.getElementById("logout");



if(logout){


logout.onclick=function(){


localStorage.removeItem("loggedIn");


window.location.href="login.html";


};


}
