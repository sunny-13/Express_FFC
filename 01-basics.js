const express = require('express');
const res = require('express/lib/response');
const app = express();

//you can also send inHtml tags.
app.get('/',(req,res)=>{
    res.status(200).send('Home page');
});

app.get('/about',(req,res)=>{
    res.send('About page').status(200)
})

app.all('*',(req,res)=>{
    res.status(404).send('Cannot find what youre looking for!')
})

app.listen(5000, ()=> console.log('server up and running on 5000..'));