const userCollection = require("../models/usermodel")
// require("dotenv").config();
const jwt = require("jsonwebtoken");

const createToken = (_id)=>{
    const token = jwt.sign({_id},process.env.JWT_KEY,{expiresIn:"3d"})
    return token
}

const signupUser = async(req,res)=>{
    const {email,username,password} = req.body;
    try {
        const user = await userCollection.signup(username,email,password);
        const token = createToken(user._id);

        res.status(200).json({email,token})
    } catch (error) {
        if(error.code ===Number(11000)){
            error.message = "choose another username";
        }
        res.status(400).json({error:error.message})
    }
    
}

const loginUser = async (req,res)=>{
    const {email,password} = req.body;
    try {
        const user = await userCollection.login(email,password);
        const token = createToken(user._id);

        res.status(200).json({email,token})
    } catch (error) {
        res.status(400).json({error:error.message})
    }
    

}


module.exports = {signupUser,loginUser};