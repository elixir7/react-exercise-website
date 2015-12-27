var React = require('react');
var SideBarItem = require('./SideBarItem.jsx');

var value = [
  {
    "id": 1,
    "title": "New visitors",
    "value": "1.5k"
  },
  {
    "id": 2,
    "title": "Bounce Rate",
    "value": "50%"
   },
   {
     "id": 3,
     "title": "Searchs",
     "value": "28%"
   },
   {
     "id": 4,
     "title": "Traffic",
     "value": "140.5kb"
   }
];

var SideBar = React.createClass({
  render: function(){
    var sideBarItems = value.map(function(item){
      return (
        <div className="col-sm-12">
          <div className="panel panel-default">
            <div className="panel-heading">
              <SideBarItem key={item.id} value={item.value} title={item.title} />
            </div>
            <div className="panel-body"></div>
          </div>
        </div>
      );
    });

    return(
      <div className="row">{sideBarItems}</div>
    );
  }
});

module.exports = SideBar;
