"use strict";

import React from 'react';
import Personas from './personas';

export default React.createClass({

  render() {
    return (
      <div className='ui vertical sidebar menu left uncover visible'>
        <div className='ui segment'>Users</div>
        <div className='item'>
          <Personas />
        </div>
      </div>
    );
  }
})
