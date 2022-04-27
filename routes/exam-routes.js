const express = require('express');
const examCtrl=require("../controller/exam-controller")
const router=express.Router()
router.post("/",examCtrl.postExam)
router.get("/",examCtrl.getAllExam)
router.get("/:id",examCtrl.getExamById)
router.delete("/:id",examCtrl.deleteExam)
router.put("/:id",examCtrl.updateExam)
module.exports=router