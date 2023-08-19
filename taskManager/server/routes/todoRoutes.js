const express = require("express");
const router = express.Router();
// const mongoose = require("mongoose")
// const todoCollection = require("../models/todomodel.js");

const { createtask,getTask,updateTask,deleteTask } = require("../controllers/taskController.js");
const requireAuth = require("../middlewares/requireAuth.js");


router.use(requireAuth);
router.get("/",getTask);
router.post("/",createtask);
router.put("/:id",updateTask);
router.delete("/:id",deleteTask);

module.exports=router