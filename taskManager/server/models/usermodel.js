const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const validator = require("validator");
const Schema = mongoose.Schema;

const userSchema = new Schema({
    username:{
        type:String,
        required:true,
        unique:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true,
    },
  
})

userSchema.statics.signup = async function(username,email,password){

    if(!email||!password||!username){
        throw new Error("empty fields")
    }

    if(!validator.isEmail(email)){
        throw new Error("email is not valid")
    }
    if(!validator.isStrongPassword(password)){
        throw new Error("Password1 is not strong enough")
    }



    const exist = await this.findOne({email:email});
    if(exist){
        throw new Error("userEmail already exist");
    }
    
    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(password,salt);



    const user = await this.create({username,email,password:hashPassword})

    return user;
}

userSchema.statics.login= async function(email,password){
    if(!email || !password ){
        throw Error("empty fields")
    }

    const user = await this.findOne({email:email});

    if(!user){
        throw Error("invalid email")
    }

    const match  = await bcrypt.compare(password,user.password);


    if(!match){
        throw Error("invalid password1")
    }
    return user;
}


const userCollection = mongoose.model("userCollection",userSchema)
module.exports=userCollection