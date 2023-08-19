const todoCollection = require("../models/todomodel");

// todoCollection
const getTask=async(req,res)=>{
    const user_id = req.user._id;
    try {
        const todoAllList= await todoCollection.find({user_id:user_id});
        if(!todoAllList){
            res.status(200).json({message:"nothign is there"})
        }
        res.status(200).json(todoAllList)
    } catch (error) {
        res.status(500).json(error.message)
    }
};
const createtask=async(req,res)=>{
    const user_id = req.user._id;
    try {
        // console.log(req.body)
        const addTask = await new todoCollection({
            item:req.body.item,
            user_id:user_id
        });
        const addedTask = await addTask.save();
        res.status(201).json(addedTask);
    } catch (error) {
        res.status(500).json(error)
    }
    
};
const updateTask=async(req,res)=>{
    try {
        const {id:taskID} = req.params;
        const updataData = await todoCollection.findByIdAndUpdate({_id:taskID},{$set:req.body},{new:true});
        res.status(200).json(updataData)
    } catch (error) {
        res.status(500).json(error.message)
    }
    

};
const deleteTask=async(req,res)=>{
    try {
        const {id:taskID} = req.params;
        const deletedData = await todoCollection.findByIdAndDelete({_id:taskID});
        res.status(200).json(deletedData)
    } catch (error) {
        res.status(500).json(error)
    }
};
module.exports = {getTask,createtask,updateTask,deleteTask};