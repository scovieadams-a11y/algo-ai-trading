// Adams AI Trading Profile


let user = 
JSON.parse(localStorage.getItem("user"));



if(user){


document.getElementById("userName")
.innerHTML =
user.name;



document.getElementById("userEmail")
.innerHTML =
user.email;


}
