var express = require('express');
var path = require('path');
// var favicon = require('serve-favicon');
var logger = require('morgan');
// var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
const mongoose = require('mongoose');
    mongoose.connect(`mongodb://angga:angga@ds135926.mlab.com:35926/library`);
    
    //db connection status
    
    var db = mongoose.connection;
    db.on('error', console.error.bind(console, 'connection error:'));
    db.once('open', function() {
      console.log('MLABS Connected');
    });

// var index = require('./routes/index');
var users = require('./routes/users');

const articles = require('./routes/articles')
require('dotenv').config()
const cors = require('cors');

var app = express();

// view engine setup
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
// app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors())

// app.use('/', index);
// app.use('/users', users);    

app.use('/articles',articles)
app.use('/users', users)
// 
// app.get('/articles',(req,res)=>{
//     res.status(200).send('lol')
// })




// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.send(err);
});

module.exports = app;