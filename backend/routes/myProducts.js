const express = require('express')
const router = express.Router()
const User = require('../models/user')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const mongoose = require('mongoose')
const {sendMail, sendMailFull} = require('../utils/sendMail')
const { v4: uuidv4 } = require('uuid');
const auth = require('../middleware/auth.js')
const Product = require('../models/Product')

router.get('/products', async (req, res) => {
    
    res.header("Access-Control-Allow-Origin", "*");

    try{
        
        const products = await Product.find();
        //const {name, quantity, ownerEmail, ownerName, isSold, soldDate, soldTo} = req.body
        res.status(200).json(products);

    }catch(err){
        res.send(err) 
        console.log(err)
    }
    
})

router.post('/products', )


module.exports = router 