var React = require('react');

var boxItemStyle = {
  color: "#666666",
  padding: 20
};

var GeneralBoxItem = React.createClass({
  render: function(){
    return(
      <div style={boxItemStyle} className="boxContent">
        <h3>{this.props.value}</h3>
        <p>{this.props.text}</p>
      </div>
    );
  }
});

module.exports = GeneralBoxItem;
