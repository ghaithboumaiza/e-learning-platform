const Cmntr = require ("../model/cmntr-model");

exports.postCmntr = async (req,res)=>{
    try{
        const newCmntr = new Cmntr ({...req.body});
        const response = await newCmntr.save();
        res.send({response : response , message: "Cmntrlication is saved" });

    }catch(error){
      console.log(error)
        res.status(400)({message: "can not save it "})
    }
}

exports.getAllCmntr = async (req,res)=>{
    try{
      const result= await Cmntr.find();
      res.send({response: result, message: `getting Cmntrs successfully `})
    } catch(error){
      res.status(500).send({message: `can not get Cmntrs`})
    }
  }


  exports.getCmntrById = async (req,res)=>{
    try{
      const result= await Cmntr.findOne({_id:req.params.id});
      if (!result) {
        return res.status(404).send({message:"there is no Cmntr with this id"})
      }
      res.send({response: result, message: `getting Cmntr successfully `})
    } catch(error){
      res.status(500).send({message: `can not get Cmntr`})
    }
  }



  exports.deleteCmntr = async (req,res)=>{
    try {
        const result= await Cmntr.deleteOne({_id:req.params.id});
        console.log(result);
        result.deletedCount
        ? res.send({message:"Cmntr deleted"}) 
        : res.send({message:"there is no Cmntr with this id"});
        
    } catch (error) {
        res.status(404).send({message:"there is no id"});
    }
  }


  exports.updateCmntr = async (req,res)=>{
    try {
  
      const result= await Cmntr.updateOne(
        {_id:req.params.id},
        {$set:{...req.body}}
      );
       console.log(result.nModified) ;
      result.nModified
        ?res.send({message:"Cmntr already updated"})
        :res.send({message:"Cmntr updated"})
      
      console.log(result.nModified);  
    } catch (error) {
      res.status(404).send({message: `not updated : id ${req.params.id} not  found`})
    }
  }