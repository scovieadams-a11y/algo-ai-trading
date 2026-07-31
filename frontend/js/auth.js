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


localStorage.setItem(
"user",
JSON.stringify({
name:name,
email:email,
password:password
})
);



alert(
"Account created successfully!"
);



window.location.href="login.html";


});


}
