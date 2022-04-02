const express = require('express');
const res = require('express/lib/response');
const {products,func} = require('./data.js')
const app = express();

app.get('/',(req,res)=>{
    res.json(products);
})


app.listen(3001,()=> console.log('server up and running on 3001...'));