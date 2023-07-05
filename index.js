const express = require("express")
const mongoose = require("mongoose")
const users = require("./routes/user")
const uri = process.env.DBURI
const port = process.env.PORT || 3000

const app = express()

app.use(express.json())

mongoose.connect('mongodb+srv://tharuni:tharuni1234@cluster0.g9dpsrf.mongodb.net/?retryWrites=true&w=majority').then(()=>{
    console.log("Mongodb connected successfully");
}).catch((err)=>{
    console.log("There is an error in connection with the db : ", err);
})

app.get('/',(req, res)=>{
    res.status(200).send("Welcome to user management portal ")
})

app.use('/api/users', users)

app.listen(port, (err)=>{
    if (err)
    console.log("Error in running application : ", err);
    else console.log(`Server started successfully at PORT ${port}`);
})