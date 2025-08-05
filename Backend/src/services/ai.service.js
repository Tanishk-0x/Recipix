const { GoogleGenerativeAI } = require('@google/generative-ai'); 
require('dotenv').config() ; 

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY) ; 

const generateContent = async ( input ) => {

    const systemInstruction = `
        Now you act as a proffesional intelligent chef I gave you some ingredients comma seprated 
        like (tomato , potato , chilli , bread ) and your task is to give a recipe that can be 
        prepared with this ingredients make sure give the response in this JSON Format : 
        {
            recipeImageURL : " Working URL for the recipe" , 
            ingredients : "Ingredients Mentioned here" , 
            dishName : "A Relatable Name for the recipe or dish" , 
            category : "Category of the recipe" , 
            stepsToMake : "detailed modular free to read step by step procedure" , 
            timeNeeded : "Time required to make this recipe in minutes only like 5 Minutes" 
        }
        Give response in this format
        Also give simple image but make sure the imageurl you are giving must be workable
        Also If the given input is not ingredients like a question or anything just display a message 
        message if "Heyy! I am Chef Not..."
    ` ; 

    const model = genAI.getGenerativeModel({
        model : "gemini-2.0-flash" , 
        systemInstruction , 
    }); 

    const result = await model.generateContent( input ) ; 
    
    return result.response.text() ; 

}

module.exports = generateContent ; 