const express = require('express');
const  SuppCtrl= require("../controller/support-controller");
const router=express.Router()
router.post("/",SuppCtrl.postSupp)
router.get("/",SuppCtrl.getAllSupp)
router.get("/:id",SuppCtrl.getSuppById)
router.delete("/:id",SuppCtrl.deleteSupp)
router.put("/:id",SuppCtrl.updateSupp)
module.exports=router