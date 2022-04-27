const Seance = require ("../model/seance-model");

exports.postSeance = async (req,res)=>{
    try{
        const newSeance = new Seance ({...req.body});
        const response = await newSeance.save();
        res.send({response : response , message: "Seance is saved" });

    }catch(error){
      console.log(error)
        res.status(400)({message: "can not save it "})
    }
}

exports.getAllSeance = async (req,res)=>{
    try{
      const result= await Seance.find();
      res.send({response: result, message: `getting Seances successfully `})
    } catch(error){
      res.status(500).send({message: `can not get Seances`})
    }
  }


  exports.getSeanceById = async (req,res)=>{
    try{
      const result= await Seance.findOne({_id:req.params.id});
      if (!result) {
        return res.status(404).send({message:"there is no Seance with this id"})
      }
      res.send({response: result, message: `getting Seance successfully `})
    } catch(error){
      res.status(500).send({message: `can not get Seance`})
    }
  }



  exports.deleteSeance = async (req,res)=>{
    try {
        const result= await Seance.deleteOne({_id:req.params.id});
        console.log(result);
        result.deletedCount
        ? res.send({message:"Seance deleted"}) 
        : res.send({message:"there is no Seance with this id"});
        
    } catch (error) {
        res.status(404).send({message:"there is no id"});
    }
  }


  exports.updateSeance = async (req,res)=>{
    try {
  
      const result= await Seance.updateOne(
        {_id:req.params.id},
        {$set:{...req.body}}
      );
       console.log(result.nModified) ;
      result.nModified
        ?res.send({message:"Seance already updated"})
        :res.send({message:"Seance updated"})
      
      console.log(result.nModified);  
    } catch (error) {
      res.status(404).send({message: `not updated : id ${req.params.id} not  found`})
    }
  }