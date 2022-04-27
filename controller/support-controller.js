const Supp = require ("../model/support-model");

exports.postSupp = async (req,res)=>{
    try{
        const newSupp = new Supp ({...req.body});
        const response = await newSupp.save();
        res.send({response : response , message: "Support is saved" });

    }catch(error){
      console.log(error)
        res.status(400)({message: "can not save it "})
    }
}

exports.getAllSupp = async (req,res)=>{
    try{
      const result= await Supp.find();
      res.send({response: result, message: `getting Supports successfully `})
    } catch(error){
      res.status(500).send({message: `can not get Supports`})
    }
  }


  exports.getSuppById = async (req,res)=>{
    try{
      const result= await Supp.findOne({_id:req.params.id});
      if (!result) {
        return res.status(404).send({message:"there is no Support with this id"})
      }
      res.send({response: result, message: `getting Support successfully `})
    } catch(error){
      res.status(500).send({message: `can not get Support`})
    }
  }



  exports.deleteSupp = async (req,res)=>{
    try {
        const result= await Supp.deleteOne({_id:req.params.id});
        console.log(result);
        result.deletedCount
        ? res.send({message:"Support deleted"}) 
        : res.send({message:"there is no Support with this id"});
        
    } catch (error) {
        res.status(404).send({message:"there is no id"});
    }
  }


  exports.updateSupp = async (req,res)=>{
    try {
  
      const result= await Supp.updateOne(
        {_id:req.params.id},
        {$set:{...req.body}}
      );
       console.log(result.nModified) ;
      result.nModified
        ?res.send({message:"Support already updated"})
        :res.send({message:"Support updated"})
      
      console.log(result.nModified);  
    } catch (error) {
      res.status(404).send({message: `not updated : id ${req.params.id} not  found`})
    }
  }