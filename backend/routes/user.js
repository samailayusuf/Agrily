const express = require('express')
const router = express.Router()
const User = require('../models/user')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const mongoose = require('mongoose')

router.post('/api/signup', async (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");
    const {firstName, lastName, email, password} = req.body

    const user = await User.findOne({email})

    if(user){
        res.sendStatus(409)
    }
    const passwordHash = await bcrypt.hash(password, 10)

    const userData = new User({
        firstName,
        lastName,
        email,
        passwordHash
    })

    const result = await userData.save()
    const {_id} = result 

    console.log (_id);
    jwt.sign({
        id: _id,
        firstName,
        lastName,
        email,
        isVerified: false
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
            isVerified: false
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

module.exports = router 