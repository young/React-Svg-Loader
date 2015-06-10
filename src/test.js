var SvgLoader = window.SvgLoader;

var superagent = require('superagent');
var Foo = React.createClass({
	render: function() {
		return (<SvgLoader fill='#11E11E'/>);
	}
});

React.render(<Foo />, document.getElementById('test'));