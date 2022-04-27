const express = require('express');
const seanceCtrl=require("../controller/seance-controller")
const router=express.Router()
router.post("/",seanceCtrl.postSeance)
router.get("/",seanceCtrl.getAllSeance)
router.get("/:id",seanceCtrl.getSeanceById)
router.delete("/:id",seanceCtrl.deleteSeance)
router.put("/:id",seanceCtrl.updateSeance)
module.exports=router