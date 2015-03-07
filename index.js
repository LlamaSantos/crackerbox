'use strict';

// -- Automatically transpile jsx files
require("babel/register");
require('ignore-css').install();

var React = require('react');
var koa = require('koa');
var send = require('koa-send');
var app = koa();
var router = require('./routes');

app.use(require('./middleware/report'));
app.use(require('./middleware/timer'));
app.use(router.routes());

app.use(function *(next){
  yield send(this, this.path, { root: __dirname + '/dist' });
});

app.use(router.allowedMethods());

app.listen(process.env.PORT);
