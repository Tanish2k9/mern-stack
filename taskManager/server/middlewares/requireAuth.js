const jwt = require("jsonwebtoken");
const userCollection = require("../models/usermodel");

const requireAuth = async (req,res,next)=>{

    const {authorization} = req.headers;
    if(!authorization){
        return res.status(401).json({error : "Authorization token required"});
    }

    const token = authorization.split(' ')[1];
    try {
        const {_id} = jwt.verify(token,process.env.JWT_KEY);

        req.user = await userCollection.findOne({_id:_id}).select("_id");
    
        next();
    } catch (error) {
        console.log(error);
        res.status(401).json({error:"request is not authorized"})
    }


}
module.exports = requireAuth;