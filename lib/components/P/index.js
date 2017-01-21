var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['\n  ', '\n'], ['\n  ', '\n']);

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React, { PropTypes } from 'react';
import styled from 'styled-components';
import theme from '../../config';
import { typography } from '../../styled/utilities/typography';

var defaultProps = { theme: theme };

var P = function (_React$Component) {
  _inherits(P, _React$Component);

  function P() {
    _classCallCheck(this, P);

    return _possibleConstructorReturn(this, (P.__proto__ || Object.getPrototypeOf(P)).apply(this, arguments));
  }

  _createClass(P, [{
    key: 'render',
    value: function render() {
      return _jsx('p', {
        className: this.props.className
      }, void 0, this.props.children);
    } // eslint-disable-line react/prefer-stateless-function

  }]);

  return P;
}(React.Component);

// eslint-disable-next-line no-class-assign


P = styled(P)(_templateObject, function (props) {
  return '\n    /* Type Scss */\n\n    &.lead {\n      font-size: ' + props.theme['$lead-font-size'] + ';\n      font-weight: ' + props.theme['$lead-font-weight'] + ';\n    }\n    \n    &.h1{\n      font-size: ' + props.theme['$font-size-h1'] + ';\n      ' + typography() + '\n    }\n    \n    &.h2{\n      font-size: ' + props.theme['$font-size-h2'] + ';\n      ' + typography() + '\n    }\n    \n    &.h3{\n      font-size: ' + props.theme['$font-size-h3'] + ';\n      ' + typography() + '\n\n    }\n    \n    &.h4{\n      font-size: ' + props.theme['$font-size-h4'] + ';\n      ' + typography() + '\n\n    }\n    \n    &.h5{\n      font-size: ' + props.theme['$font-size-h5'] + ';\n      ' + typography() + '\n\n    }\n    \n    &.h6{\n      font-size: ' + props.theme['$font-size-h6'] + ';\n      ' + typography() + '\n\n    }\n    \n    /* Reboot Scss */\n    margin-top: 0;   \n    margin-bottom: 1rem;\n  ';
});

P.defaultProps = defaultProps;

export default P;