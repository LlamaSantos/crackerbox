'use strict';

module.exports = function *(next){
  yield next;

  console.info(this.response.header);
};
