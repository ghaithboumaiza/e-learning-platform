const Class = require ("../model/class-model");

exports.postClass = async (req,res)=>{
    try{
        const newClass = new Class ({...req.body});
        const response = await newClass.save();
        res.send({response : response , message: "Class is saved" });

    }catch(error){
      console.log(error)
        res.status(400)({message: "can not save it "})
    }
}

exports.getAllClass = async (req,res)=>{
    try{
      const result= await Class.find();
      res.send({response: result, message: `getting Classs successfully `})
    } catch(error){
      res.status(500).send({message: `can not get Classs`})
    }
  }


  exports.getClassById = async (req,res)=>{
    try{
      const result= await Class.findOne({_id:req.params.id});
      if (!result) {
        return res.status(404).send({message:"there is no Class with this id"})
      }
      res.send({response: result, message: `getting Class successfully `})
    } catch(error){
      res.status(500).send({message: `can not get Class`})
    }
  }



  exports.deleteClass = async (req,res)=>{
    try {
        const result= await Class.deleteOne({_id:req.params.id});
        console.log(result);
        result.deletedCount
        ? res.send({message:"Class deleted"}) 
        : res.send({message:"there is no Class with this id"});
        
    } catch (error) {
        res.status(404).send({message:"there is no id"});
    }
  }


  exports.updateClass = async (req,res)=>{
    try {
  
      const result= await Class.updateOne(
        {_id:req.params.id},
        {$set:{...req.body}}
      );
       console.log(result.nModified) ;
      result.nModified
        ?res.send({message:"Class already updated"})
        :res.send({message:"Class updated"})
      
      console.log(result.nModified);  
    } catch (error) {
      res.status(404).send({message: `not updated : id ${req.params.id} not  found`})
    }
  }