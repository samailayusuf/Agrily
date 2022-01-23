const express = require('express')
const router = express.Router()
const User = require('../models/user')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const mongoose = require('mongoose')
const {sendMail, sendMailFull} = require('../utils/sendMail')
const { v4: uuidv4 } = require('uuid');
const auth = require('../middleware/auth.js')


router.post('/products', auth, async (req, res) => {
    
    res.header("Access-Control-Allow-Origin", "*");

    try{
        
    const {name, quantity, ownerEmail, ownerName, isSold, soldDate, soldTo} = req.body

    }catch(err){
        //res.send(err) 
    }
    
})