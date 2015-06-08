var SvgLoader = window.SvgLoader;
var Foo = React.createClass({
	render: function() {
		return (<SvgLoader>adjkjdajdjda</SvgLoader>);
	}
});

React.render(<Foo />, document.getElementById('test'));