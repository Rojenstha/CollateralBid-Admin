const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const AdminModel = require('./models/admin')

const app = express()
app.use(express.json())
app.use(cors())

mongoose.connect("mongodb://localhost:27017/collateralbid_db");

app.post("/login", (req, res)=> {
    const {email, password} = req.body;
    AdminModel.findOne({email: email})
    .then(user=>{
        if(user){
            if(user.password === password){
                res.json("Success")
            } else {
                res.json("Incorrect Password.")
            }
        } else {
            res.json("User not found.")
        }
    })
})

app.post('/register', (req, res)=>{
    AdminModel.create(req.body)
    .then(admin => res.json(admin))
    .catch(error => res.json(error))
})

app.listen(3001, () => {
    console.log("Server is running...")
})