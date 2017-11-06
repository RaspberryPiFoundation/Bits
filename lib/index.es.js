function ___$insertStyle(css) {
  if (!css) {
    return;
  }
  if (typeof window === 'undefined') {
    return;
  }

  var style = document.createElement('style');

  style.setAttribute('type', 'text/css');
  style.innerHTML = css;
  document.head.appendChild(style);

  return css;
}

import classnames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';

___$insertStyle("/*                 tl             tr             br             bl           */\n/*\nscss-lint:disable SpaceAfterComma\nType name\n| Breakpoints\n| |      Font size - relative to 10px on <html> element\n| |      |                                 Line height\n| |      |                                 |\nv v      v                                 v */\n/**\n * Grid columns. This setting is shared between\n * iotaCSS grid objects and size, pull & push\n * utilities. You can change it also locally to\n * each module.\n *\n * Type: Unitless Number / List\n */\n/**\n * Global namespace for Objects, Components and\n * Utilities\n *\n * Type: String\n */\n/**\n * Default gutters. This setting is shared between\n * multiple objects and utilities as the default value\n * for gutters. You can change it also locally to each\n * module.\n *\n * Type: Number / List / Map\n */\n/**\n * Enables flexbox across the app. If you do not want\n * all modules to use flexbox you can keep this value\n * false and set it to true separately to each one of\n * them locally.\n *\n * Type: Boolean\n */\n/**\n * Enables rtl across the app. If you enable this setting\n * the final CSS will be converted to RTL.\n *\n * Type: Boolean\n */\n/**\n * Default global breakpoints map. These are the\n * default breakpoints map that will be shared across\n * all iotaCSS modules. You can change it also locally\n * to each module.\n *\n * Type: Map\n */\n/**\n * Global breakpoint suffix naming setting. All breakpoint\n * specific styles have a '@breakpointName' suffix by default.\n * The \\ character is used to escape the @ character.\n *\n * Type: String\n */\n/**\n * Global delimiter naming setting for Size, Push and Pull\n * utilities. By default it is '/' (.u-1/2) and you can change\n * it for example to 'of' so that the generated HTML class will be\n * 'u-1of2'.\n *\n * Type: String\n */\n/**\n * The base value the scale starts at.\n *\n * Number\n */\n/**\n * The ratio the scale is built on\n *\n * Unitless Number\n */\n/**\n * Length of scale (right part of the decimal\n * point) ms will be rounded to.\n *\n * Unitless Number\n */\n@import url(\"https://fonts.googleapis.com/css?family=Rubik:300,500,700\");\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  font-weight: 500; }\n\n.c-button,\n.c-button:visited {\n  font-size: 1.6rem;\n  line-height: 35px;\n  background-color: #fcf67f;\n  border-color: #fcf67f;\n  border-radius: 5px;\n  border-style: solid;\n  border-width: 0.3rem;\n  color: #222;\n  cursor: pointer;\n  display: inline-block;\n  font-weight: 500;\n  padding: 0 20px;\n  text-align: center;\n  text-decoration: none;\n  transition-duration: 100ms;\n  transition-property: background-color, border-color, color;\n  transition-timing-function: ease-in-out;\n  vertical-align: middle; }\n  @media screen and (min-width: 768px) {\n    .c-button,\n    .c-button:visited {\n      font-size: 1.8rem;\n      line-height: 40px; } }\n  .c-button:hover,\n  .c-button:visited:hover {\n    background-color: #444;\n    border-color: #444;\n    color: #fff; }\n\n.c-button--secondary,\n.c-button--secondary:visited {\n  background-color: transparent;\n  border-color: #999;\n  color: #999; }\n\n.c-button--block {\n  display: block;\n  width: 100%; }\n");

var asyncGenerator = function () {
  function AwaitValue(value) {
    this.value = value;
  }

  function AsyncGenerator(gen) {
    var front, back;

    function send(key, arg) {
      return new Promise(function (resolve, reject) {
        var request = {
          key: key,
          arg: arg,
          resolve: resolve,
          reject: reject,
          next: null
        };

        if (back) {
          back = back.next = request;
        } else {
          front = back = request;
          resume(key, arg);
        }
      });
    }

    function resume(key, arg) {
      try {
        var result = gen[key](arg);
        var value = result.value;

        if (value instanceof AwaitValue) {
          Promise.resolve(value.value).then(function (arg) {
            resume("next", arg);
          }, function (arg) {
            resume("throw", arg);
          });
        } else {
          settle(result.done ? "return" : "normal", result.value);
        }
      } catch (err) {
        settle("throw", err);
      }
    }

    function settle(type, value) {
      switch (type) {
        case "return":
          front.resolve({
            value: value,
            done: true
          });
          break;

        case "throw":
          front.reject(value);
          break;

        default:
          front.resolve({
            value: value,
            done: false
          });
          break;
      }

      front = front.next;

      if (front) {
        resume(front.key, front.arg);
      } else {
        back = null;
      }
    }

    this._invoke = send;

    if (typeof gen.return !== "function") {
      this.return = undefined;
    }
  }

  if (typeof Symbol === "function" && Symbol.asyncIterator) {
    AsyncGenerator.prototype[Symbol.asyncIterator] = function () {
      return this;
    };
  }

  AsyncGenerator.prototype.next = function (arg) {
    return this._invoke("next", arg);
  };

  AsyncGenerator.prototype.throw = function (arg) {
    return this._invoke("throw", arg);
  };

  AsyncGenerator.prototype.return = function (arg) {
    return this._invoke("return", arg);
  };

  return {
    wrap: function (fn) {
      return function () {
        return new AsyncGenerator(fn.apply(this, arguments));
      };
    },
    await: function (value) {
      return new AwaitValue(value);
    }
  };
}();















var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};













var objectWithoutProperties = function (obj, keys) {
  var target = {};

  for (var i in obj) {
    if (keys.indexOf(i) >= 0) continue;
    if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
    target[i] = obj[i];
  }

  return target;
};

var Button = function Button(_ref) {
  var children = _ref.children,
      className = _ref.className,
      props = objectWithoutProperties(_ref, ['children', 'className']);

  var classNames = classnames('c-button', className);

  return React.createElement(
    'button',
    _extends({}, props, { className: classNames }),
    children
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired
};

___$insertStyle("/*                 tl             tr             br             bl           */\n/*\nscss-lint:disable SpaceAfterComma\nType name\n| Breakpoints\n| |      Font size - relative to 10px on <html> element\n| |      |                                 Line height\n| |      |                                 |\nv v      v                                 v */\n/**\n * Grid columns. This setting is shared between\n * iotaCSS grid objects and size, pull & push\n * utilities. You can change it also locally to\n * each module.\n *\n * Type: Unitless Number / List\n */\n/**\n * Global namespace for Objects, Components and\n * Utilities\n *\n * Type: String\n */\n/**\n * Default gutters. This setting is shared between\n * multiple objects and utilities as the default value\n * for gutters. You can change it also locally to each\n * module.\n *\n * Type: Number / List / Map\n */\n/**\n * Enables flexbox across the app. If you do not want\n * all modules to use flexbox you can keep this value\n * false and set it to true separately to each one of\n * them locally.\n *\n * Type: Boolean\n */\n/**\n * Enables rtl across the app. If you enable this setting\n * the final CSS will be converted to RTL.\n *\n * Type: Boolean\n */\n/**\n * Default global breakpoints map. These are the\n * default breakpoints map that will be shared across\n * all iotaCSS modules. You can change it also locally\n * to each module.\n *\n * Type: Map\n */\n/**\n * Global breakpoint suffix naming setting. All breakpoint\n * specific styles have a '@breakpointName' suffix by default.\n * The \\ character is used to escape the @ character.\n *\n * Type: String\n */\n/**\n * Global delimiter naming setting for Size, Push and Pull\n * utilities. By default it is '/' (.u-1/2) and you can change\n * it for example to 'of' so that the generated HTML class will be\n * 'u-1of2'.\n *\n * Type: String\n */\n/**\n * The base value the scale starts at.\n *\n * Number\n */\n/**\n * The ratio the scale is built on\n *\n * Unitless Number\n */\n/**\n * Length of scale (right part of the decimal\n * point) ms will be rounded to.\n *\n * Unitless Number\n */\n@import url(\"https://fonts.googleapis.com/css?family=Rubik:300,500,700\");\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  font-weight: 500; }\n\n.c-link {\n  color: #004881;\n  cursor: pointer;\n  font-weight: 500;\n  text-decoration: underline;\n  text-decoration-skip: ink;\n  transition-duration: 100ms;\n  transition-property: color;\n  transition-timing-function: ease-in-out; }\n  .c-link:hover, .c-link:hover:visited {\n    color: #222; }\n  .c-link:visited {\n    color: #a76fba; }\n\n.c-link--light-on-dark {\n  color: #eee; }\n  .c-link--light-on-dark:hover, .c-link--light-on-dark:hover:visited {\n    color: #fff; }\n  .c-link--light-on-dark:visited {\n    color: #eee; }\n");

var Link$1 = function Link$$1(_ref) {
  var children = _ref.children,
      className = _ref.className,
      to = _ref.to,
      props = objectWithoutProperties(_ref, ['children', 'className', 'to']);

  var classNames = classnames('c-link', className);

  var anchorLink = React.createElement(
    'a',
    _extends({}, props, { className: classNames, href: to }),
    children
  );

  var isExternal = function isExternal() {
    return !/^https?:\/\//i.test(to);
  };

  var routerLink = React.createElement(
    Link,
    _extends({}, props, { className: classNames, to: to }),
    children
  );

  if (isExternal()) {
    return anchorLink;
  }

  return routerLink;
};

Link$1.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
  to: PropTypes.string.isRequired
};

export { Button, Link$1 as Link };
