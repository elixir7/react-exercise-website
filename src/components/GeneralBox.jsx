var React = require('react');
var GeneralBoxItem = require('./GeneralBoxItem.jsx');

var value = [
  {
    "id": 1,
    "value": "20",
    "text": "New followers added this month"
  },
  {
    "id": 2,
    "value": "$ 1250",
    "text": "Average Monthly Income"
  },
  {
   "id": 3,
   "value": "$ 13865",
   "text": "Yearly Income Goal"
  }
];

var GeneralBox = React.createClass({
  render: function(){
    var generalBoxItems = value.map(function(item){
      return (
        <div className="col-sm-4">
          <div className="panel panel-default">
            <div className="panel-body">
              <GeneralBoxItem key={item.id} value={item.value} text={item.text} />
            </div>
          </div>
        </div>
      );
    });

    return(
      <div className="row">{generalBoxItems}</div>
    );
  }
});

module.exports = GeneralBox;
