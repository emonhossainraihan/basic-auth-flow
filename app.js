var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

const mongoose = require('mongoose');
require('dotenv').config();

//! bring routes
var indexRouter = require('./routes/index');
const authRoutes = require('./routes/auth');

var app = express();

//! database connection
mongoose
  .connect(process.env.DATABASE_LOCAL, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  })
  .then(() => console.log('DB connected'))
  .catch((err) => {
    console.log(err);
  });

//! view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

//! middlewares

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//! routes middleware
app.use('/', indexRouter);
app.use('/api', authRoutes);

//! catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

//! error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
