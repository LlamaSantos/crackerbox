'use strict';

import React from 'react';
import SiteHeader from './components/site-header';
import SiteMenu from './components/site-menu';

export default React.createClass({
  createMetas(tags) {
    return Object.keys(tags || {}).map((name) => {
      return (
        <meta name={name} content={tags[name]} />
      );
    });
  },

  createScripts(scripts) {
    return (scripts || []).map((script) => {
      return (
        <script type="text/javascript" async="" src={script} />
      );
    });
  },

  render() {
    var _scripts = this.props.scripts || [];
    _scripts.push('client.js');
    _scripts.push('semantic/semantic.js');
    var metas = this.createMetas(this.props.metas);
    var scripts = this.createScripts(_scripts);

    return (
      <html>
        <head>
          <meta charSet='utf-8' />
          <meta httpEquiv='Content-Type' content='text/html; charset=utf-8' />
          <link href='semantic/semantic.css' rel='stylesheet' title='semantic' />
          {metas}
        </head>
        <body className=''>
          <div className='pusher'>
            <SiteHeader />
            {this.props.children}
          </div>
          {scripts}
        </body>
      </html>
    );
  }
});
