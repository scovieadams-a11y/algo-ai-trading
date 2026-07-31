// Algo AI Trading Authentication


const registerForm = document.getElementById("registerForm");


if(registerForm){


registerForm.addEventListener(
"submit",
function(event){


event.preventDefault();


let name =
document.getElementById("name").value;


let email =
document.getElementById("email").value;


let password =
document.getElementById("password").value;



// Temporary storage
// Later we replace this with a real database


fetch("http://localhost:5000/register",{

method:"POST",

headers:{
"Content-Type":"application/json"
},

body:JSON.stringify({

name:name,

email:email,

password:password

})

})

.then(response=>response.json())

.then(data=>{


alert(data.message);



localStorage.setItem(
"user",
JSON.stringify(data.user)
);



window.location.href="login.html";


});



alert(
"Account created successfully!"
);



window.location.href="login.html";


});


}
// Login System


const loginForm =
document.getElementById("loginForm");



if(loginForm){


loginForm.addEventListener(
"submit",
function(event){


event.preventDefault();



let savedUser =
JSON.parse(localStorage.getItem("user"));



let email =
document.getElementById("loginEmail").value;



let password =
document.getElementById("loginPassword").value;



if(
savedUser &&
savedUser.email === email &&
savedUser.password === password
){


alert("Login successful!");


localStorage.setItem(
"loggedIn",
"true"
);



window.location.href =
"dashboard.html";


}

else{


alert(
"Invalid email or password"
);


}



});


}
