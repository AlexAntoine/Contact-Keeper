const jwt = require('jsonwebtoken');

module.exports = function(req, res, next){

    const token = req.header('x-auth-token');

    if(!token){
        // console.log(`Token doesn't exist`);
        return res.status(401).json({msg:'No token, authorization denied!'})
    }

    try{
        const decoded = jwt.verify(token, 'abcd');
        
        req.user = decoded.user;

        next();
    }catch(err){{

        res.status(401).json({msg:'Token is not valid'});
    }}
}