const chai = require('chai');
const chaiHttp = require('chai-http');
let app = require('../app.js')
chai.should();

chai.use(chaiHttp);

describe('articles', function(){
    it('should get all article',function(done){
        chai.request('http://localhost:3000')
        .get('/articles')
        .end(function(err,res){
            res.should.have.status(200)
            done()
        })
    })
    it('should add a SINGLE blog on /articles POST',function(done){
        chai.request('http://localhost:3000')
        .post('/articles')
        .send({
            'content' : 'pertamax gan'
        })
        .end(function(err,res){
            res.should.have.status(200);
            res.should.be.json;
            res.body.should.be.a('object')
            res.body.data.should.have.property('content')
            console.log(res.body);
            done()
        })
        
    });
    it('should update a SINGLE blob on /article/<id> PUT',function(done){
        chai.request('http://localhost:3000')
        .put('/articles/5a533314beb7e469f71ff234')
        .send({
            'content' : 'Keduax Gan'
        })
        .end(function(err,res){
            res.should.have.status(200);
            res.should.be.json;
            console.log(res);
            done()
        })
    });
    it('should DELETE a SINGLE blob on /article/<id> PUT',function(done){
        chai.request('http://localhost:3000')
        .delete('/articles/5a533314beb7e469f71ff234')
        .end(function(err,res){
            res.should.have.status(200);
            res.should.be.json;
            console.log(res);
            done()
        })
    });
})

describe('users',function(){
    it('should post new user info and return new doc',function(done){
        chai.request('http://localhost:3000')
        .post('/users')
        .send({
            'username'  : 'angga',
            'password'  : '12345'
        })
        .end(function(err,res){
            res.should.have.status(200)
            done()
        })
    })
    it('should check if someone is logged in', function(done){
        chai.request('http://localhost:3000')
        .post('/users/login')
        .send({
            'username'  : 'angga',
            'password'  : '12345'
        })
        .end(function(err,res){
            res.should.have.status(200)
            done()
        })
    })
})