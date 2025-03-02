const mongoose = require('mongoose')

const ManagerSchema = new mongoose.Schema({
    name: String,
    bank: String,
    email: String,
    password: String
})

const ManagerModel = mongoose.model("manager", ManagerSchema)
module.exports = ManagerModel