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
const multer = require('../middleware/multer-config')

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


    router.get('/product/:id', async (req, res) => {
        
        res.header("Access-Control-Allow-Origin", "*");

        try{
            const id = req.params.id;
            const product = await Product.findOne({id});
            //const {name, quantity, ownerEmail, ownerName, isSold, soldDate, soldTo} = req.body
            res.status(200).json(product);

        }catch(err){
            res.send(err) 
            console.log(err)
        }
        
    })


    router.post('/product', multer, (req, res) =>{

        console.log(req.body)

        const url = req.protocol + '://' + req.get('host');
    
        const product = new Product({
            id: uuidv4(),
            name: req.body.name,
            quantity: req.body.quantity,
            imageURL: req.body.imageURL ,//url + '/images/' + req.file.filename,
            ownerEmail: req.body.ownerEmail,
            ownerName: req.body.ownerName,
            description: req.body.description,
            price: req.body.price,
            isSold: false,
            soldDate: req.body.soldDate,
            soldTo: req.body.soldTo
            
        });

    product.save().then(
        () => {
        res.status(201).json({
            message: 'Product saved successfully!'
        });
        }
    ).catch(
        (error) => {
        res.status(400).json({
            error: error
        });
        }
    );

    })

    router.delete('/product/:id', async (req, res) => {
    
        res.header("Access-Control-Allow-Origin", "*");
    
        try{
            const id = req.params.id;
            const product = await Product.deleteOne({id});
            //const {name, quantity, ownerEmail, ownerName, isSold, soldDate, soldTo} = req.body
            res.status(200).json({Mesage:'Deleted Successfully!'});
    
        }catch(err){
            res.send(err) 
            console.log(err)
        }
        
    })


module.exports = router 