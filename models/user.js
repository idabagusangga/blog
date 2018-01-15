const mongoose = require('mongoose')
const Schema = mongoose.Schema;

let userSchema = new Schema ({
    username    : String,
    password    : String
})

// userSchema.pre() <-----------bcrypt here

const User = mongoose.model('UserTest',userSchema)

module.exports = User;