const mongoose = require('mongoose') ; 
require('dotenv').config() ; 

exports.dbconnect = async () => {

    const MongoDB_URL = process.env.MONGODB_URL ; 
    
    mongoose.connect(MongoDB_URL)
        .then( () => {
            console.log("DataBase Connected SuccessFully") ; 
        })
        .catch( (err) => {
            console.log("Error in DataBase Connection : ") ; 
            console.log(err) ; 
            process.exit(1) ; 
        })

}