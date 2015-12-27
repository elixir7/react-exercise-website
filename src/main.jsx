var React = require('react');
var ReactDOM = require('react-dom');
var GeneralBox = require('./components/GeneralBox.jsx');
var SideBar = require('./components/SideBar.jsx');
var MainContent = require('./components/MainContent.jsx');

ReactDOM.render(<GeneralBox />, document.getElementById('general-box-container'));
ReactDOM.render(<SideBar />, document.getElementById('side-bar'));
ReactDOM.render(<MainContent />, document.getElementById('main-content1'));
ReactDOM.render(<MainContent />, document.getElementById('main-content2'));
