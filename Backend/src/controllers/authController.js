const User = require('../models/UserModel') ; 
const bcrypt = require('bcrypt') ; 
const jwt = require('jsonwebtoken') ; 
require('dotenv').config() ; 

// --------------- SIGNUP -----------------------

const SignUp = async (req , res) => {

    try {

        const {name , email , password} = req.body ; 
        if( !name || !email || !password ){
            res.status(401).send({
                success : false , 
                message : "Field Can't be empty"
            }); 
        }

        const user = await User.findOne({email}) ; 
        if(user){
            res.status(400).send({
                success : false , 
                message : "User Already Exist"
            }); 
        }

        const hashedPassword = await bcrypt.hash( password , 10 ) ; 
        await User.create(
            { name , email , password : hashedPassword }
        ); 


        res.status(201).send({
            success : true , 
            message : "Signup SuccessFully"
        }); 

    }

    catch (error) {
        res.status(500).send({
            success : false , 
            message : "An error occured while signup" 
        })
        console.log(error) ;     
    }
}

// ---------------- LOGIN --------------------

const Login = async (req , res) => {

    try {
        
        const {email , password} = req.body ; 
        const user = await User.findOne({email}) ; 
        if(!user){
            res.status(404).send({
                success : false , 
                message : "User Not Exist"
            }); 
        }

        // ---- password verify ----
        const isMatch = await bcrypt.compare( password , user.password ) ; 
        if(!isMatch){
            res.status(401).send({
                success : false , 
                message : "Wrong Password"
            }); 
        } 

        // ---- Create JWT Token ----
        const JWT_SECRET = process.env.JWT_SECRET ; 
        const token = jwt.sign( {id : user._id} , JWT_SECRET )

        res.cookie("Token" , token , {
            httpOnly : true , 
            secure : true , 
            maxAge : 7 * 24 * 60 * 60 * 1000 , 
            sameSite: 'None',
        }); 

        res.status(200).send({
            success : true , 
            message : "Login SuccessFully"
        }); 
           
    }
    
    catch (error) {
        res.status(500).send({
            success : false , 
            message : "An error occured while login"
        })
        console.log(error) ; 
    }
}


module.exports = { SignUp , Login } ; 