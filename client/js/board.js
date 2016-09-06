var React = require('react');
var ReactDOM = require('react-dom');

var Tool = require('../js/tool.js');

var Board = function(props) {
    var allTools = [];
    for (var i=0; i<props.tools.length; i++) {
        allTools.push(<Tool title={props.tools[i].title} url={props.tools[i].url} blurb={props.tools[i].blurb} />);
    }

    return (
        <div className="board">
          {allTools}
        </div>

    );
};


module.exports = Board;
