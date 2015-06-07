var React = require('react');
var PropTypes = React.proptypes;

var SvgLoader = React.createClass({
  propTypes: {
    state: PropTypes.string,
    fill: PropTypes.string,
    stroke: PropTypes.string,
    styles: PropTypes.object,
    src: PropTypes.string.required
  },
  _cleanProps(item) {
    // Delete undefined props so as to not overwrite defaults
    // TODO make this cleaner
    for (let key in item) {
      if (item[key] === undefined) {
        delete item[key];
      }
    }
    return item;
  },
  render() {
    var p = this.props;
    var svgEl = icons[p.name];
    var styles = assign({}, p.styles);
    var props = assign({}, svgEl.props, {style: styles}, this._cleanProps({stroke: p.stroke, fill: p.fill, height: p.height, width: p.width}));
    return React.createElement('svg', props);
  }
});

module.exports = SvgLoader;