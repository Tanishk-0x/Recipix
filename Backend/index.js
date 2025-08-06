const express = require('express') ; 
const app = express() ; 
require('dotenv').config() ; 
const airoute = require('./src/routes/ai.routes'); 
const {dbconnect} = require('./src/config/database') ; 

const PORT = process.env.PORT ; 

app.use(express.json()) ; 

// Mounting .. 
app.use('/ai' , airoute) ; 

// calling .. 
dbconnect() ;


app.get('/' , (req , res) => {
    res.send(`<h1> I am Default Route! </h1>`)
}); 



app.listen(PORT , () => {
    console.log(`Server Started At Port No : ${PORT} `); 
}); 

