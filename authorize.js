const authorize = (req,res,next) => {
    //console.log('autho')
    const {name} = req.query;
    if(name==='john'){
        req.user = name;
    }
    else{
        res.status(401).send('not authorized!');
    }
    next()
}

module.exports = authorize;