'use strict';

var React = require('react');

module.exports = React.createClass({
  createMetas(tags) {
    return Object.keys(tags || {}).map((name) => {
      return (
        <meta name={name} content={tags[name]} />
      );
    });
  },

  createScripts(scripts) {
    return scripts.map((script || []) => {
      return (
        <script type="text/javascript" async="" src={script}></script>
      );
    });
  },

  render() {
    var metas = this.createMetas(this.props.metas);
    var scripts = this.createScripts(this.props.scripts);

    return (
      <html>
        <head>
          <meta charset='utf-8' />
          <meta http-equiv='Content-Type' content='text/html; charset=utf-8' />
          {metas}
        </head>
        <body>
          {this.props.children}
          {scripts}
        </body>
      </html>
    );
  }
});
