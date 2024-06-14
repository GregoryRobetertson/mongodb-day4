'use strict';

const express = require('express');
const app = express();
require('dotenv').config();
const PORT = process.env.PORT || 3002


const mongoose = require('mongoose');
app.use(express.json());

main().catch ((err)=> {
console.log(err);

} )

async function main() {
    await mongoose.connect(process.env.DB);
    console.log('Connected to mongoose');
  


  
    // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
  }
  
  
  
  
  app.get('/', (req, res, next) => {
    res.status(200).json({message: 'Server is online'})
  })

  app.get('/', (req, res, next) => {
res.status({message: 'Server is online'});
  })

  app.listen(PORT, () => {
    console.log('Connected to server on' + PORT);
})