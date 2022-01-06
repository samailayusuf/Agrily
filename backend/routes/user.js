const express = require('express')
const router = express.Router()
const User = require('../models/user')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const mongoose = require('mongoose')
const sendMail = require('../utils/sendMail')
const { v4: uuidv4 } = require('uuid');
const {ObjectID} = require('mongodb')

router.post('/api/signup', async (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");
    const {firstName, lastName, email, password} = req.body

    const user = await User.findOne({email})

    if(user){
        res.sendStatus(409)
    }
    const passwordHash = await bcrypt.hash(password, 10)

    const verificationString = uuidv4()

    const userData = new User({
        firstName,
        lastName,
        email,
        passwordHash,
        isVerified:false,
        verificationString
    })

    const result = await userData.save()
    const {_id} = result 

    console.log (_id);

    try{
        await sendMail(email, verificationString)
    }catch(e){
        console.log(e)
        res.sendStatus(500)
    }

    jwt.sign({
        id: _id,
        firstName,
        lastName,
        email,
        isVerified: false,
        verificationString
    }, process.env.JWT_SECRET,
    {expiresIn:'2d'},
    (err, token)=>{
        if(err){
            res.status(500).send()
        }
        res.status(200).json({token}) 
    })
})

router.post('/api/login', async(req, res)=>{
    res.header("Access-Control-Allow-Origin", "*");
    const {email, password} = req.body

    const user = await User.findOne({email})

    if (!user) return res.sendStatus(401)

    const {_id, isVerified, passwordHash} = user;

    //console.log(password, passwordHash);

    const isCorrect = await bcrypt.compare(password, passwordHash)

    if(isCorrect){
        jwt.sign({
            id: _id,
            email,
            isVerified,
        }, process.env.JWT_SECRET,
        {expiresIn:'2d'},
        (err, token)=>{
            if(err){
                res.status(500).json(err)
            }
            res.status(200).json({token}) 
        })
    }else{
        res.sendStatus(401)
    }

})

router.put('/verify', async (req, res) =>{
    res.header("Access-Control-Allow-Origin", "*");
    const {verificationString} = req.body
      
    if(!verificationString) return res.status(401).json({message:'verification string is empty'})

    const result = await User.findOne({verificationString})
    console.log(result)

    if(!result) return res.status(401).json({message:'The email verification code is incorrect!'})
    
    const { _id: id, email, isVerified} = result
  
    await User.updateOne({ _id: id }, {
        isVerified: true
      });  
 
    jwt.sign({id, email, isVerified:true}, process.env.JWT_SECRET, {expiresIn:'2d'}, (err, token) =>{
        if(err) return res.sendStatus(500)
        res.status(200).json({token})       
    })

    

})

// router.post('/api/mail', (req, res)=>{
//     const mail = sendMail()
//     res.send('OK')
// })

module.exports = router 