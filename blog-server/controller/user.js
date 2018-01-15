const UserModel = require('../models/user')
const jwt = require('jsonwebtoken');
require('dotenv').config()

class UserController{
    static createUser(req,res){
        let newUser = new UserModel({
            username    : req.body.username,
            password    : req.body.password
        })
        newUser.save()
        .then(resp=>{
            console.log(resp);
            res.status(200).json({
                data:resp
            })
        })
        .catch(err=>{
            console.log(err);
            res.status(500).json({
                err:err
            })
        })
    }
    static login(req,res){
        UserModel.find({
            username:req.body.username
        })
        .then(resp=>{
            console.log('-------->',resp);
            let payload = {
                id : resp[0]._id,
                username: resp[0].username
            }
            console.log(payload);;
            jwt.sign(payload,process.env.SECRET,(err,token)=>{
                console.log(resp);
                
                res.status(200).json({
                    token:token
                })
            })
            
        })
        .catch(err=>{
            console.log(err);
            res.status(500).json({
                err:err
            })
        })
    }
}

module.exports = UserController;