const Pub = require ("../model/pub-model");

exports.postPub = async (req,res)=>{
    try{
        const newPub = new Pub ({...req.body});
        const response = await newPub.save();
        res.send({response : response , message: "Publication is saved" });

    }catch(error){
      console.log(error)
        res.status(400).send({message: "can not save it "})
    }
}

exports.getAllpub = async (req,res)=>{
    try{
      const result= await Pub.find().populate('user');
      res.send({response: result, message: `getting Pubs successfully `})
    } catch(error){
      res.status(500).send({message: `can not get Pubs`})
    }
  }


  exports.getPubById = async (req,res)=>{
    try{
      const result= await Pub.findOne({_id:req.params.id});
      if (!result) {
        return res.status(404).send({message:"there is no Pub with this id"})
      }
      res.send({response: result, message: `getting Pub successfully `})
    } catch(error){
      res.status(500).send({message: `can not get Pub`})
    }
  }



  exports.deletePub = async (req,res)=>{
    try {
        const result= await Pub.deleteOne({_id:req.params.id});
        console.log(result);
        result.deletedCount
        ? res.send({message:"Pub deleted"}) 
        : res.send({message:"there is no Pub with this id"});
        
    } catch (error) {
        res.status(404).send({message:"there is no id"});
    }
  }


  exports.updatePub = async (req,res)=>{
    try {
  
      const result= await Pub.updateOne(
        {_id:req.params.id},
        {$set:{...req.body}}
      );
       console.log(result.nModified) ;
      result.nModified
        ?res.send({message:"Pub already updated"})
        :res.send({message:"Pub updated"})
      
      console.log(result.nModified);  
    } catch (error) {
      res.status(404).send({message: `not updated : id ${req.params.id} not  found`})
    }
  }