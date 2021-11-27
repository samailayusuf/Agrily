const express = require('express');
const app = express();
const mongoose = require ('mongoose');
const path = require('path');
require('dotenv/config')
const userRoute = require('./routes/user')
const cors = require('cors')

const corsOptions ={
  origin:'http://localhost:3000', 
  credentials:true,            //access-control-allow-credentials:true
  optionSuccessStatus:200
}

app.use(cors(corsOptions));
const userRouter = require('./routes/user');



app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));



mongoose.connect(process.env.MONGO_URI) //Conecting to mongo DB
  .then(() => {
    console.log('Successfully connected to MongoDB!');
  })
  .catch((error) => {
    console.log('Unable to connect to MongoDB Atlas!');
    console.error(error);
  });

app.use((req, res, next) => { //allowing request from any source
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});


  app.use('/', userRouter); // using userRouter



  module.exports = app;