var React = require('react');

var MainContentItem = React.createClass({
  render: function(){
    return(
      <div className="content col-xs-4">
        <h4>{this.props.value}</h4>
        <p>{this.props.text}</p>
      </div>
    );
  }
});

module.exports = MainContentItem;
