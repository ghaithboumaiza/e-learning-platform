const User = require("../model/user-model");
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')



exports.postUser = async (req,res)=>{
  try{ 
    const user = await User.findOne({email:req.body.email})
    if (user) {
      return res.status(400).send({message:"email should be unique"})
    }
    const password=req.body.password
    const passwordHash = await bcrypt.hash(password, 10)
    const newUser = new User({...req.body,password:passwordHash});

    const response = await newUser.save();
    res.send({response: response, message: 'User is saved' });
  }catch(error){
    console.log(error)
    res.status(400).send({message: "can not save it"})
  }
}

exports.getAllUser = async (req,res)=>{
  try{
    const result= await User.find().populate('publications');
    res.send({response: result, message: `getting Users successfully `})
  } catch(error){
    res.status(500).send({message: `can not get users`})
  }
}


exports.getUserById = async (req,res)=>{
  try{
    const result= await User.findOne({_id:req.params.id}).populate('publications');
    if (!result) {
      return res.status(404).send({message:"there is no user with this id"})
    }
    res.send({response: result, message: `getting Users successfully `})
  } catch(error){
    res.status(500).send({message: `can not get users`})
  }
}



exports.deleteUser = async (req,res)=>{
  try {
      const result= await User.deleteOne({_id:req.params.id});
      console.log(result);
      result.deletedCount
      ? res.send({message:"User deleted"}) 
      : res.send({message:"there is no User with this id"});
      
  } catch (error) {
      res.status(404).send({message:"there is no id"});
  }
}


exports.updateUser = async (req,res)=>{
  try {

    const result= await User.updateOne(
      {_id:req.params.id},
      {$set:{...req.body}}
    );
     console.log(result.nModified) ;
    result.nModified
      ?res.send({message:"User already updated"})
      :res.send({message:"User updated"})
    
    console.log(result.nModified);  
  } catch (error) {
    res.status(400).send({message: `not updated : id ${req.params.id} not  found`})
  }
}


exports.login = async(req,res)=>{

try {
  const email= req.body.email
const password=req.body.password
const user = await User.findOne({email:req.body.email})
if (!user) {
  return res.status(404).send({message:'email does not exist '})
}
const isMatch = await bcrypt.compare(password, user.password)
if (!isMatch) return res.status(400).json({ msg: "Incorrect password." })
const token = jwt.sign({ user }, process.env.JWT_SECRET, {
  expiresIn: "7d",
});
res.cookie("jwt", token, {
  httpOnly: true,
  maxAge: 2 * 60 * 60 * 1000, // 3hrs in ms
});
res.status(200).send({message:'you are logged in ',response:token})

} catch (error) {
  res.status(400).send({message: `cannot login`})
}

}