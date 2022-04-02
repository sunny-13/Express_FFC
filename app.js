//we will test all the methods here.
//from postman
//so we will have evry method here.
//only do methods on the path /api/people and on..

const express = require('express');
const app = express();
const people = require('./routes/people');

app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use('/api/people',people);

app.get('/',(req,res) =>{
    res.send('<h1>Home Page</h1>')
})


app.listen(3001,()=> console.log('server up and running on 3001..'))