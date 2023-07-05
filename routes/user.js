const express = require("express")
const mongoose = require("mongoose")
const { newUser, getUser, getUserById, patchUpdateUser, deleteUser, deleteMultipleUsers } = require("../controllers/userControllers")
const router = express.Router()

const userSchema = require('../schemas/userSchema')

const User = mongoose.model('users', userSchema)

router.get("/", (req, res)=>{
    res.send("List of all the users")
})

router.get("/:id", (req, res)=>{
    getUserById(req, res)
})

router.post('/newUser', (req, res)=>{
    newUser(req, res);
})

router.post("/getUser", (req, res)=>{
    getUser(req, res)
})

router.patch('/update/:id',(req, res)=>{
    patchUpdateUser(req, res)
})

router.delete('/delete/:id', (req, res)=>{
    deleteUser(req, res)
})

router.delete("/delete",(req, res)=>{
    deleteMultipleUsers(req, res)
})

module.exports = router