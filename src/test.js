var SvgLoader = require('./svg-loader');

var Test = React.createClass({
	render: function() {
		return (<SvgLoader fill='#11E11E' url='http://127.0.0.1:8080/foo.svg'/>);
	}
});


React.render(<Test />, document.getElementById('bar'));
