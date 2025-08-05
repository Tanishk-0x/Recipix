const aiService = require('../services/ai.service') ; 

const getResult = async (req , res) => {

    const input = req.body.input ; 

    if( !input ){
        res.status(400).send("Input is Required!") ; 
    }

    const response = await aiService(input) ; 
    
    res.send(response) ; 

}

module.exports = getResult ; 