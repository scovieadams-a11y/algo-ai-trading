// Adams AI Trading Dashboard


const logoutButton =
document.getElementById("logout");



if(logoutButton){


logoutButton.addEventListener(
"click",
function(){


localStorage.removeItem("loggedIn");


alert("Logged out successfully");


window.location.href="login.html";


});


}
