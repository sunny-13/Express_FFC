const express = require('express');
const {products} = require('./data')
const app = express();

app.get('/api/v1/query',(req,res)=>{
    console.log(req.query);
    const {search, limit} = req.query;
    let sortProducts = [...products]; //same thing as just equating
    if(search){
        sortProducts = sortProducts.filter((product)=>{
            return product.name.startsWith(search);
        })

    }

    if(limit){

        sortProducts = sortProducts.slice(0,Number(limit));
    }

    if(sortProducts.length ===  0){
        return res.send('No products found for your search')
    }

    res.json(sortProducts);

})

app.listen(3001,() => console.log('server up and running on 3001..'))