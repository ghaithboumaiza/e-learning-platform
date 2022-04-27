const Exam = require ("../model/exam-model");

exports.postExam = async (req,res)=>{
    try{
        const newExam = new Exam ({...req.body});
        const response = await newExam.save();
        res.send({response : response , message: "Exam is saved" });

    }catch(error){
      console.log(error)
        res.status(400)({message: "can not save it "})
    }
}

exports.getAllExam = async (req,res)=>{
    try{
      const result= await Exam.find();
      res.send({response: result, message: `getting Exams successfully `})
    } catch(error){
      res.status(500).send({message: `can not get Exams`})
    }
  }


  exports.getExamById = async (req,res)=>{
    try{
      const result= await Exam.findOne({_id:req.params.id});
      if (!result) {
        return res.status(404).send({message:"there is no Exam with this id"})
      }
      res.send({response: result, message: `getting Exam successfully `})
    } catch(error){
      res.status(500).send({message: `can not get Exam`})
    }
  }



  exports.deleteExam = async (req,res)=>{
    try {
        const result= await Exam.deleteOne({_id:req.params.id});
        console.log(result);
        result.deletedCount
        ? res.send({message:"Exam deleted"}) 
        : res.send({message:"there is no Exam with this id"});
        
    } catch (error) {
        res.status(404).send({message:"there is no id"});
    }
  }


  exports.updateExam = async (req,res)=>{
    try {
  
      const result= await Exam.updateOne(
        {_id:req.params.id},
        {$set:{...req.body}}
      );
       console.log(result.nModified) ;
      result.nModified
        ?res.send({message:"Exam already updated"})
        :res.send({message:"Exam updated"})
      
      console.log(result.nModified);  
    } catch (error) {
      res.status(404).send({message: `not updated : id ${req.params.id} not  found`})
    }
  }