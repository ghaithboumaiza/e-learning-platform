const express = require('express');
const  pubCtrl= require("../controller/pub-controller");
const {auth } = require('../middleware/auth')
const {isAdmin } = require('../middleware/admin')

const router=express.Router()
router.post("/",pubCtrl.postPub)
router.get("/",pubCtrl.getAllpub)
router.get("/:id",pubCtrl.getPubById)
router.delete("/:id",pubCtrl.deletePub)
router.put("/:id",pubCtrl.updatePub)
module.exports=router