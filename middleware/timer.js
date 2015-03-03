'use strict';

module.exports = function *(next){
  let start = Date.now();
  yield next;

  let ms = new Date - start;
  this.set('X-Response-Time', ms + 'ms');
};
