"use strict";

// var React = require('react');
var PropTypes = React.PropTypes;
var assign = require('object-assign');

var pinActive =
  <svg width="19px" height="18px" viewBox="0 0 19 18" version="1.1" xmlns="http://www.w3.org/2000/svg">
      <g stroke="none" stroke-width="1" fill-rule="evenodd" >
          <g transform="translate(-325.000000, -95.000000)" >
              <g transform="translate(12.000000, 80.000000)">
                  <path d="M319.859843,15.045323 C323.642175,15.045323 326.719686,17.9163816 326.719686,21.4455254 C326.719686,22.8962943 326.1987,24.2351576 325.323873,25.3097188 L331.68562,31.2456129 C332.104793,31.6367265 332.104793,32.2703394 331.68562,32.6612306 C331.476272,32.8570098 331.201354,32.954677 330.926913,32.954677 C330.65271,32.954677 330.377553,32.8570098 330.168205,32.661453 L323.774984,26.6961921 C322.664105,27.4196855 321.314788,27.8459503 319.859604,27.8459503 C316.077511,27.8459503 313,24.9746693 313,21.445303 C313.000238,17.9163816 316.077511,15.045323 319.859843,15.045323 L319.859843,15.045323 Z M319.859843,26.0661388 C322.590427,26.0661388 324.812425,23.9933257 324.812425,21.445303 C324.811948,18.8977252 322.590427,16.8251346 319.859843,16.8251346 C317.129258,16.8251346 314.907737,18.8977252 314.907737,21.4455254 C314.907737,23.9933257 317.129258,26.0661388 319.859843,26.0661388 L319.859843,26.0661388 Z"></path>
              </g>
          </g>
      </g>
  </svg>;

var SvgLoader = React.createClass({
  propTypes: {
    state: PropTypes.string,
    fill: PropTypes.string,
    stroke: PropTypes.string,
    styles: PropTypes.object,
    source: PropTypes.string
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
    var svgEl = pinActive;
    var styles = assign({}, p.styles);
    var props = assign({}, svgEl.props, {style: styles}, this._cleanProps({stroke: p.stroke, fill: p.fill, height: p.height, width: p.width}));
    return React.createElement('svg', props);
  }
});

module.exports = SvgLoader;
