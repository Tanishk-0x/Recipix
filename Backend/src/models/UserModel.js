const mongoose = require('mongoose') ; 

const UserRecipeSchema = new mongoose.Schema({

    dishName : {
        type : String , 
    }, 
    dishImgUrl : {
        type : String , 
    }, 
    dishCategory : {
        type : String , 
    }, 
    dishIngredients : {
        type : String , 
    }, 
    stepsToMake : {
        type : String ,
    }, 
    timeRequired : {
        type : String , 
    },
    createdAt : {
        type : Date , 
        default : Date.now() 
    }

}); 

const UserSchema = new mongoose.Schema({

    name : {
        type : String , 
        required : true , 
    }, 

    email : {
        type : String , 
        required : true ,
    }, 

    password : {
        type : String , 
        required : true , 
    }, 

    credits : {
        type : Number , 
    }, 

    // -----------------------

    user_Recipes : [ UserRecipeSchema ] 

});

module.exports = mongoose.model("User" , UserSchema) ; 