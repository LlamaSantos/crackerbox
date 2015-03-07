'use strict';

import React from 'react';
import Page from './_page';
import Personas from './components/personas';

export default React.createClass({
  getPageResources() {
    return {
      metas : {
        author : "James R. White",
        keywords : "Blog BOOMPOOF",
        description : "Universal Amazement"
      },
      scripts : []
    };
  },

  render() {
    var resources = this.getPageResources();
    return (
      <Page>
        <div className='ui three column grid'>
          <div className='three wide column panel'>
            <Personas />
          </div>
        </div>
      </Page>
    );
  }
});
