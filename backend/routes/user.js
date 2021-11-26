const express = require('express')
const router = express.Router()
const User = require('../models/user')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const mongoose = require('mongoose')

router.post('/api/signup', async (req, res) => {
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
        password
    })

    const result = await userData.save()
    const {insertedId} = result

    jwt.sign({
        id: insertedId,
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

router.get('/', (req, res)=>{
    res.send("Home page oooooooooooo!")
})

module.exports = router