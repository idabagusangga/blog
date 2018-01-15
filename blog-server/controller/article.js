const ArticleModel = require('../models/article');
const jwt = require('jsonwebtoken');

class ArticleController{
    static getAllPost(req,res){
        // res.status(200).json({msg:'aiueo'})
        ArticleModel.find()
        .then(resp=>{
            console.log(resp);
            res.status(200).json({
                data:resp
            });
        })
        .catch(err=>{
            res.status(500).json({
                err:err
            })
        })
    }
    static getUserArticle(req,res){
        console.log(req.headers);
        ArticleModel.find()
        .then(resp => {
            res.status(200).json({
                msg: 'list of articles',
                data:resp
            })
        })
        .catch(err=>{
            console.log(err);
        })
        
    }
    static createArticle(req,res){
        console.log('HA TOKEN NYA ', req.headers.token)
        jwt.verify(req.headers.token, process.env.SECRET, (err,decoded)=>{
            if(err){
                res.status(500).json({
                    msg:'invalid token'
                })
                return
            }
            console.log('ini decoded di createArticle',decoded);
            let newArticle = new ArticleModel({
                content     : req.body.content,
                userId      : decoded.id
            })
            
            newArticle.save()
            .then(resp=>{
                
                console.log(resp);
                res.status(200).json({
                    data:resp
                })
            })
            .catch(err=>{
                console.log(err);
                res.status(500).send(err)
            })
        })
    }
    
    static editArticle(req,res){
        console.log(req.params.id);
        ArticleModel.findById(req.params.id)
        .then(article=>{
            // console.log(article);
            article.content = req.body.content
            article.save()
            .then(resp=>{
                // console.log(resp);
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
        })
        .catch(err=>{
            console.log(err);
        })
    }
    
    static removeArticle(req,res){
        ArticleModel.findByIdAndRemove(req.params.id)
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
    
    static getArticleById(req,res){
        ArticleModel.findById(req.params.id).populate('userId')
        .then(resp=>{
            res.status(200).json({
                data:resp
            })
        })
        .catch(err=>{
            res.status(500).json({
                err:err
            })
        })
    }
    
}

module.exports = ArticleController;