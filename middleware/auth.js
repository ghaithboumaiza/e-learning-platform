const jwt = require('jsonwebtoken')
const User = require("../model/user-model");
require('dotenv').config()

const auth = (req, res, next) =>{
    try {
        const valid= req.header('Authorization')
        if(!valid) return res.status(400).json({msg: "Invalid Authentication"})
        const token = req.header("Authorization").split(' ')[1]
        
        jwt.verify(token, process.env.JWT_SECRET, (err, user1) =>{
            console.log('token',token);
            console.log('user=',user1);
            if(err) return res.status(400).json({msg: "Invalid Authentication1"})
            
            req.user = user1.user
            next()
        })
    } catch (err) {
        return res.status(500).json({msg: err.message})
    }
}

const isAdmin = async (req, res, next) =>{
    try {
        // Get user information by id
        const user = await Users.findOne({
            _id: req.user.id
        })
        if(user.role === 0)
            return res.status(400).json({msg: "Admin resources access denied"})

        next()
        
    } catch (err) {
        return res.status(500).json({msg: err.message})
    }
}



module.exports = {auth }