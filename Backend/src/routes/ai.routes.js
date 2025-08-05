const express = require('express') ; 
const router = express.Router() ; 
const getResult = require('../controllers/ai.controller') ; 

router.post('/get-result' , getResult ) ; 

module.exports = router ; 