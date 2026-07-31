// Adams AI Trading Backend


const express = require("express");

const cors = require("cors");

require("dotenv").config();



const app = express();



app.use(cors());

app.use(express.json());




// Test Route

app.get("/", (req,res)=>{


res.json({

message:
"Adams AI Trading API is running"

});


});




// User Registration Route


app.post("/register",(req,res)=>{


const {
name,
email,
password
}=req.body;



console.log("New User:", {
name,
email
});



res.json({

success:true,

message:"User registered successfully",

user:{
name,
email
}

});


});




// Login Route


app.post("/login",(req,res)=>{


const {

email,

password

}=req.body;



console.log("Login Attempt:", email);



res.json({

success:true,

message:"Login successful",

user:{
email:email
}

});



});





const PORT = 5000;



app.listen(PORT,()=>{


console.log(

`Server running on port ${PORT}`

);


});
