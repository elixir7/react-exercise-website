var React = require('react');
var MainContentItem = require('./MainContentItem.jsx');

var information = [
  {
    "id": 1,
    "value": "15080",
    "text": "Shots Views"
  },
  {
    "id": 2,
    "value": "12000",
    "text": "Likes"
  },
  {
    "id": 3,
    "value": "5100",
    "text": "Comments"
  }
];

var panelHeadingStyle = {
  height: 100
}

var panelBodyStyle = {
  textAlign: "center",
  background: "#666",
  color: "white"

};

var MainContent = React.createClass({
  render: function(){
    var mainContentItems = information.map(function(item){
      return(
        <MainContentItem key={item.id} value={item.value} text={item.text} />
      );
    });

    return(
      <div className="panel panel-primary">
        <div style={panelHeadingStyle} className="panel-heading"></div>
        <div style={panelBodyStyle} className="panel-body">{mainContentItems}</div>
      </div>
    );
  }
});

module.exports = MainContent;
