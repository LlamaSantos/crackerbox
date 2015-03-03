'use strict';

// -- Automatically transpile jsx files
//require('node-jsx').install({harmony: true});
require("babel/register");
require('ignore-css').install();

var React = require('react');
var koa = require('koa');
var router = require('koa-router')();

var app = koa();

app.use(require('./middleware/report'));
app.use(require('./middleware/timer'));

router.get('/', function *(next){
  console.info(this.render);
  var Idx = React.createFactory(require('./pages/index'));
  this.body = React.renderToString(Idx());
});

app.use(router.routes());
app.use(router.allowedMethods());

app.listen(process.env.PORT);
