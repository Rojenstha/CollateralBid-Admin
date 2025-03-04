const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const AdminModel = require('./models/admin')
const BankModel = require("./models/bank")
const ManagerModel = require("./models/manager")
const bcrypt = require("bcryptjs")

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

app.post('/registerbank', (req, res)=>{
    BankModel.create(req.body)
    .then(bank=> res.json(bank))
    .catch(error=>res.json(error))
})

app.post("/registermanager", async (req, res) => {
    const { name, email, password, phone, bank } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
  
    try {
      const existingUser = await ManagerModel.findOne({ email });
      if (existingUser) {
        return res.status(400).json({ error: "Email already registered" });
      }
  
      const user = new ManagerModel({ name, email, bank, phone, password: hashedPassword });
      await user.save();
      res.json({ message: "User registered successfully!" });
    } catch (error) {
      res.status(500).json({ error: "Error registering user" });
    }
  });


app.listen(3001, () => {
    console.log("Server is running...")
})