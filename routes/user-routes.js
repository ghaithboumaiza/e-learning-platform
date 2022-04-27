const express = require('express');
const userCtrl=require("../controller/user-controller")
const router=express.Router()
router.post("/",userCtrl.postUser)
router.get("/",userCtrl.getAllUser)
router.get("/:id",userCtrl.getUserById)
router.delete("/:id",userCtrl.deleteUser)
router.put("/:id",userCtrl.updateUser)
router.post("/login",userCtrl.login)
module.exports=router