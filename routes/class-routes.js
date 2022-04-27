const express = require('express');
const  classCtrl= require("../controller/class-controller");
const router=express.Router()
router.post("/",classCtrl.postClass)
router.get("/",classCtrl.getAllClass)
router.get("/:id",classCtrl.getClassById)
router.delete("/:id",classCtrl.deleteClass)
router.put("/:id",classCtrl.updateClass)
module.exports=router