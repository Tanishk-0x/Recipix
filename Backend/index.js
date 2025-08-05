const express = require('express') ; 
const app = express() ; 
require('dotenv').config() ; 

const PORT = process.env.PORT ; 


app.get('/' , (req , res) => {
    res.send(`<h1> I am Default Route! </h1>`)
}); 



app.listen(PORT , () => {
    console.log(`Server Started At Port No : ${PORT} `); 
}); 

