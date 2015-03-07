'use strict';

import React from 'react';
import Router from 'koa-router';
import Page from './pages/_page';
import Index from './pages/index';

var router = Router();

router.get('/', function *(next){
  this.body = React.renderToString(
    <Page>
      <Index />
    </Page>
  );
});

export default router;
