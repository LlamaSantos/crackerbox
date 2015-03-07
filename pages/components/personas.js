'use strict';

var React = require('react');

export default React.createClass({
  personas() {
    return [
      { id: 1, name : "Taco Amigo", username: "taco", active : true }
      , { id: 2, name : "Erin Houston", username: "taco", active : false }
      , { id: 3, name : "James White", username: "taco", active : true }
      , { id: 4, name : "Alex Marinenko", username: "taco", active : false }
    ];
  },

  createPersona(count, persona, index) {
    let className = () => {
      if (index == 0) return 'ui top attached segment';
      else if (index == count - 1) return 'ui bottom attached segment';
      else return 'ui attached segment';
    }();
    return (
      <div className={className}>
        <p>{persona.name}</p>
      </div>
    );
  },

  render() {
    let fn = this.createPersona.bind(this, this.personas().length);
    var list = this.personas().map(fn);

    return (
      <div className='column panel'>
        {list}
      </div>
    );
  }

});
