const express = require('express');
const path = require('path');
const app = express();


//setup static and middleware
app.use(express.static('./public'));

// app.get('/',(req,res)=>{
//     res.sendFile(path.join(__dirname,'./navbar-app/index.html'));
// this was the first way
// })

//the second way to serve static files is to just dump evrything in public folder even the html file

//the third way is SSR

app.listen(5000, ()=> console.log('server up ans running on 5000...') )