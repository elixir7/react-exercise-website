var React = require('react');

var SideBarItem = React.createClass({
  render: function(){
    return(
      <div className="boxContent">
        <p>{this.props.title}</p>
        <h3>{this.props.value}</h3>
      </div>
    );
  }
});

module.exports = SideBarItem;
