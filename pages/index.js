'use strict';

var React = require('react');
var Page = require('./_page');

module.exports = React.createClass({
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
      <Page metas={resources.metas} scripts={resources.scripts}>
        <div>
          My content here!
        </div>
      </Page>
    );
  }

});
