const express = require('express');
const app = express();
//import {products} from './data' It doesn;t support ES6 syntax
const {products} = require('./data');


app.get('/',(req,res)=>{
    res.send('<h1> Home Page </h1><a href="/api/products">Go to products</a>')
})

app.get('/api/products',(req,res)=>{
    const newProducts = products.map((product)=>{
        const {id,name,price} =  product;
        return {id,name,price}
    })
    res.json(newProducts)
    //res.send('Can this be sent?') => NO it can't be.
})

app.get('/api/products/:productID',(req,res)=>{
    console.log(req.params);
    //since req.params is an object;
    // we can also destructure it and get the required params separately;
    // for eg : const {productID} = req.params; but remember this is a string (productID)

    //this find method only returns the first matching instance.
    const singleProduct = products.find((product)=> product.id === Number(req.params.productID) );
    //console.log(singleProduct)
    if(singleProduct===undefined){ //or we can do !singleProduct
       return res.status(400).send('<h2>Product not found !</h2>')
    }
    
    return res.json(singleProduct);

    
})

app.listen(3001,()=> console.log('server up and running on 3001'));

//Now few important points:
// -> params are the only variables in the url
// -> anything other than params are hard-coded so need to be exactly same as the path in the app.get();