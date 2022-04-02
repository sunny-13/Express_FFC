const express = require('express');
const {people} = require('./data')
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('./methods-public'));


app.get('/api/people',(req,res)=>{
    console.log('people requested');
    res.json({success: true , data:people});
    //console.log(res);
})

app.post('/api/people', (req,res)=>{
    const {name} = req.body;
    if(!name) res.status(401).json({success:false,msg:'Provide name'});
    res.status(200).json({success:true,person:name});
})

app.post('/login',(req,res)=>{
    const {name} = req.body;

    if(name){
        res.status(200).send(`Welcome ${name}`);
    }
    else{
        res.status(401).send('Please provide credentials')
    }
})


app.listen(3001,()=>console.log('server up and running on 3001 port..'))