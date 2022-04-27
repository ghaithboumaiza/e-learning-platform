const express = require('express');
const  cmntrCtrl= require("../controller/cmntr-controller");
const router=express.Router()
router.post("/",cmntrCtrl.postCmntr)
router.get("/",cmntrCtrl.getAllCmntr)
router.get("/:id",cmntrCtrl.getCmntrById)
router.delete("/:id",cmntrCtrl.deleteCmntr)
router.put("/:id",cmntrCtrl.updateCmntr)
module.exports=router