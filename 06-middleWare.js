const express = require('express');
const logger = require('./logger');
const authorize = require('./authorize')
const app = express();

app.use([logger,authorize]);
app.get('/',(req,res) =>{
    
    res.send('...')
})

app.get('/user',authorize,(req,res)=>{
    console.log(req.user)
    res.status(400).send('User approved');
})

app.listen(3001,()=> console.log('server up and running on 3001...'))

//use {morgon}: third-party middleware