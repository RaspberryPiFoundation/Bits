var _jsxFileName = 'src/components/Link/index.js',
    _this = this;

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

import classnames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
// import './Link.scss'

var Link = function Link(_ref) {
  var className = _ref.className,
      to = _ref.to,
      props = _objectWithoutProperties(_ref, ['className', 'to']);

  var classes = classnames('c-link', className);

  return React.createElement(
    RouterLink,
    Object.assign({ className: classes, to: to }, props, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11
      },
      __self: _this
    }),
    children
  );
};

Link.propTypes = {
  className: PropTypes.string,
  to: PropTypes.string.isRequired
};

export default Link;