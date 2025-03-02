const mongoose = require('mongoose')

const BankSchema = new mongoose.Schema({
    name: String,
    id_number: Number 
})

const BankModel = mongoose.model("bank", BankSchema)
module.exports = BankModel