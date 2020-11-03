'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var PropTypes = require('prop-types');
var styled = require('styled-components');
var reactTransitionGroup = require('react-transition-group');
var reactDom = require('react-dom');
var io = require('react-icons/io');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var PropTypes__default = /*#__PURE__*/_interopDefaultLegacy(PropTypes);
var styled__default = /*#__PURE__*/_interopDefaultLegacy(styled);

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function _taggedTemplateLiteral(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }

  return Object.freeze(Object.defineProperties(strings, {
    raw: {
      value: Object.freeze(raw)
    }
  }));
}

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArrayLimit(arr, i) {
  if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

  return arr2;
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

/**
 *
 * @param {Number} size
 */
function generateGridWidth(size) {
  if (!size) return "max-width: 100%;";
  var width = Number(size) / 12 * 100;
  return "max-width: ".concat(width, "%;");
}
/**
 *
 * @param {Object} props
 * @param {Number} props.xs breakpoint width for mobile devices
 * @param {Number} props.sm breakpoint width for mobile devices
 * @param {Number} props.md breakpoint width for tablets
 * @param {Number} props.lg breakpoint width for desktop
 *
 * @returns {String} media queries
 */

function generateMediaQueries(_ref) {
  var xs = _ref.xs,
      sm = _ref.sm,
      md = _ref.md,
      lg = _ref.lg;
  return "\n    ".concat(xs ? "\n        ".concat(generateGridWidth(xs), "\n        flex-basis: ").concat(Number(xs) / 12 * 100, "%;\n        box-sizing: border-box;\n      ") : "", "\n    ").concat(sm ? "@media only screen and (min-width: 768px) {\n        ".concat(generateGridWidth(sm), "\n        flex-basis: ").concat(Number(sm) / 12 * 100, "%;\n        box-sizing: border-box;\n      }") : "", "\n    ").concat(md ? "@media only screen and (min-width: 992px) {\n        ".concat(generateGridWidth(md), "\n        flex-basis: ").concat(Number(md) / 12 * 100, "%;\n        box-sizing: border-box;\n      }") : "", "\n    ").concat(lg ? "@media only screen and (min-width: 1200px) {\n        ".concat(generateGridWidth(lg), "\n        flex-basis: ").concat(Number(lg) / 12 * 100, "%;\n        box-sizing: border-box;\n      }") : "", "\n  ");
}
/**
 *
 * @param {Object} flexProperties
 * @param {String} flexProperties.direction
 * @param {String} flexProperties.justify
 * @param {String} flexProperties.alignItems
 * @param {String} flexProperties.alignContent
 * @param {String} flexProperties.xs
 *
 * @returns {String} flex styles
 */

function generateFlexStyle(_ref2) {
  var direction = _ref2.direction,
      justify = _ref2.justify,
      alignItems = _ref2.alignItems,
      alignContent = _ref2.alignContent,
      flex = _ref2.flex;
  return "\n    ".concat(flex ? "display: flex;" : "", "\n    ").concat(direction ? "flex-direction: ".concat(direction, ";") : "", "\n    ").concat(justify ? "justify-content: ".concat(justify, ";") : "", "\n    ").concat(alignItems ? "align-items: ".concat(alignItems, ";") : "", "\n    ").concat(alignContent ? "align-content: ".concat(alignContent, ";") : "", "\n    flex-grow: 1;\n    flex-basis: auto;\n  ");
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  ", "\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  float: left;\n  padding: 10px;\n  box-sizing: border-box;\n  ", "\n  @media only screen and (min-width: 768px) {\n    ", "\n  }\n  @media only screen and (min-width: 992px) {\n    ", "\n  }\n  @media only screen and (min-width: 1200px) {\n    ", "\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  @media only screen and (max-width: 600px) {\n    flex-direction: column;\n    align-items: center;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}
var StyledRow = styled__default['default'].div.attrs(function (props) {
  return {
    className: props.className
  };
})(_templateObject());
StyledRow.propTypes = {
  className: PropTypes__default['default'].string
};
var StyledCol = styled__default['default'].div.attrs(function (props) {
  return {
    className: props.className,
    xs: props.xs,
    sm: props.sm,
    md: props.md,
    lg: props.lg
  };
})(_templateObject2(), function (_ref) {
  var xs = _ref.xs;
  return xs ? generateGridWidth(xs) : "width: 100%";
}, function (_ref2) {
  var sm = _ref2.sm;
  return generateGridWidth(sm);
}, function (_ref3) {
  var md = _ref3.md;
  return generateGridWidth(md);
}, function (_ref4) {
  var lg = _ref4.lg;
  return generateGridWidth(lg);
});
StyledRow.propTypes = {
  className: PropTypes__default['default'].string
};
var StyledGrid = styled__default['default'].div.attrs(function (props) {
  return {
    xs: props.xs,
    sm: props.sm,
    md: props.md,
    lg: props.lg,
    item: props.item,
    container: props.container,
    direction: props.direction,
    justify: props.justify,
    alignContent: props.alignContent,
    alignItems: props.alignItems,
    flex: props.flex,
    spacing: props.spacing,
    className: "".concat(props.className ? props.className : "", " ").concat(props.container ? "container" : "item")
  };
})(_templateObject3(), function (props) {
  if (props.container && !props.item) {
    return "\n        &.container {\n          flex-wrap: wrap;\n          display: flex;\n          justify-content: center;\n          width: 100%;\n          box-sizing: border-box;\n        }\n        ".concat(props.spacing ? "\n            &.container > &.item {\n              padding: ".concat(props.spacing * 4, "px\n            }\n            &.container {\n              width: calc(100% + ").concat(props.spacing * 8, "px);\n              margin: -").concat(props.spacing * 4, "px;\n            }\n            ") : "", "\n      ");
  }

  if (props.item && !props.container) {
    return "\n        &.item {\n          ".concat(generateMediaQueries(props), "\n          ").concat(generateFlexStyle(props), "\n        }\n      ");
  }
});

var Row = function Row(props) {
  var className = props.className,
      children = props.children;
  return /*#__PURE__*/React.createElement(StyledRow, {
    className: className
  }, children);
};

Row.defaultProps = {
  className: ""
};
Row.propTypes = {
  className: PropTypes__default['default'].string,
  children: PropTypes__default['default'].node
};

var Col = function Col(props) {
  var className = props.className,
      xs = props.xs,
      sm = props.sm,
      md = props.md,
      lg = props.lg;
  return /*#__PURE__*/React__default['default'].createElement(StyledCol, {
    className: className,
    xs: xs,
    sm: sm,
    md: md,
    lg: lg
  }, props.children);
};

Col.defaultProps = {
  className: ""
};
Col.propTypes = {
  className: PropTypes__default['default'].string,
  xs: PropTypes__default['default'].string,
  sm: PropTypes__default['default'].string,
  md: PropTypes__default['default'].string,
  lg: PropTypes__default['default'].string,
  children: PropTypes__default['default'].node
};

var Grid = function Grid(props) {
  return /*#__PURE__*/React__default['default'].createElement(StyledGrid, props, props.children);
};

Grid.defaultProps = {
  item: false,
  container: false
};
Grid.propTypes = {
  className: PropTypes__default['default'].string,
  xs: PropTypes__default['default'].oneOf([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]),
  sm: PropTypes__default['default'].oneOf([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]),
  md: PropTypes__default['default'].oneOf([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]),
  lg: PropTypes__default['default'].oneOf([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]),
  direction: PropTypes__default['default'].oneOf(["row", "row-reverse", "column", "column-reverse"]),
  justify: PropTypes__default['default'].oneOf(["flex-start", "center", "flex-end", "space-between", "space-around", "space-evenly"]),
  alignContent: PropTypes__default['default'].oneOf(["stretch", "center", "flex-start", "flex-end", "space-between", "space-around"]),
  alignItems: PropTypes__default['default'].oneOf(["flex-start", "center", "flex-end", "stretch", "baseline"]),
  item: PropTypes__default['default'].bool,
  container: PropTypes__default['default'].bool,
  children: PropTypes__default['default'].node,
  flex: PropTypes__default['default'].bool,
  spacing: PropTypes__default['default'].number
};

function _templateObject$1() {
  var data = _taggedTemplateLiteral(["\n  list-style-type: none;\n  margin: 0;\n  padding: 0;\n"]);

  _templateObject$1 = function _templateObject() {
    return data;
  };

  return data;
}
var StyledListGroup = styled__default['default'].ul.attrs(function (props) {
  return {
    className: props.className
  };
})(_templateObject$1());

var ListGroup = function ListGroup(props) {
  var className = props.className;
  return /*#__PURE__*/React__default['default'].createElement(StyledListGroup, {
    className: className
  }, props.children);
};

ListGroup.defaultProps = {
  className: ""
};
ListGroup.propTypes = {
  className: PropTypes__default['default'].string,
  children: PropTypes__default['default'].node
};

var listTheme = {
  listItem: {
    light: {
      color: "#4f5d73",
      backgroundColor: "#ffffff",
      "&:hover": {
        backgroundColor: "#ffffff"
      },
      "::before": {
        backgroundColor: "rgba(0,0,21,.125)"
      }
    },
    dark: {
      color: "#ced2d8",
      backgroundColor: "#2c2c34",
      "&:hover": {
        backgroundColor: "#2c2c34"
      },
      "::before": {
        backgroundColor: "#181924"
      }
    }
  }
};

function _templateObject$2() {
  var data = _taggedTemplateLiteral(["\n  position: relative;\n  padding: 8px;\n  color: ", ";\n  background-color: ", ";\n  &:hover {\n    background-color: ", ";\n  }\n  ", "\n\n  ", "\n"]);

  _templateObject$2 = function _templateObject() {
    return data;
  };

  return data;
}
var StyledListItem = styled__default['default'].li.attrs(function (props) {
  return {
    className: props.className,
    themeMode: props.themeMode,
    divider: props.divider,
    accent: props.accent
  };
})(_templateObject$2(), function (props) {
  return props.theme.listItem[props.themeMode].color;
}, function (props) {
  return props.theme.listItem[props.themeMode].backgroundColor;
}, function (props) {
  return props.theme.listItem[props.themeMode]["&:hover"].backgroundColor;
}, function (props) {
  if (props.divider) {
    return "\n      ::before {\n        box-sizing: border-box;\n        position: absolute;\n        bottom: 0;\n        left: 0;\n        right: 0;\n        width: 90%;\n        margin: auto;\n        height: 0.5px;\n        content: \"\";\n        background-color: ".concat(props.theme.listItem[props.themeMode]["::before"].backgroundColor, ";\n      }\n      ");
  }
}, function (props) {
  if (props.accent) {
    console.log("props accent", props.accent);
    return "\n        border-left: 4px solid ".concat(props.accent, ";\n      ");
  }
});
StyledListItem.propTypes = {
  themeMode: PropTypes__default['default'].string,
  className: PropTypes__default['default'].string,
  divider: PropTypes__default['default'].bool,
  accent: PropTypes__default['default'].string
};
StyledListItem.defaultProps = {
  themeMode: "dark",
  theme: listTheme,
  divider: false
};

var ListItem = function ListItem(props) {
  return /*#__PURE__*/React__default['default'].createElement(StyledListItem, props, props.children);
};

ListItem.propTypes = {
  className: PropTypes__default['default'].string,
  children: PropTypes__default['default'].node,
  divider: PropTypes__default['default'].bool,
  accent: PropTypes__default['default'].string,
  themeMode: PropTypes__default['default'].string
};

var footerTheme = {
  footer: {
    light: {
      color: "#ffffff",
      backgroundColor: "#06c3e1"
    }
  }
};

function _templateObject$3() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  flex: 0 0 50px;\n  flex-wrap: wrap;\n  align-items: center;\n  justify-content: center;\n  font-size: 12px;\n  padding: 15px;\n  color: ", ";\n  background-color: ", ";\n"]);

  _templateObject$3 = function _templateObject() {
    return data;
  };

  return data;
}
var StyledFooter = styled__default['default'].div.attrs(function (props) {
  return {
    className: props.className,
    themeMode: props.themeMode
  };
})(_templateObject$3(), function (props) {
  return props.theme.footer[props.themeMode].color;
}, function (props) {
  return props.theme.footer[props.themeMode].backgroundColor;
});
StyledFooter.propTypes = {
  themeMode: PropTypes__default['default'].string
};
StyledFooter.defaultProps = {
  themeMode: "light",
  theme: footerTheme
};

var Footer = function Footer(props) {
  var className = props.className;
  return /*#__PURE__*/React__default['default'].createElement(StyledFooter, {
    className: className
  }, props.children);
};

Footer.defaultProps = {
  className: ""
};
Footer.propTypes = {
  className: PropTypes__default['default'].string,
  children: PropTypes__default['default'].node
};

function _templateObject$4() {
  var data = _taggedTemplateLiteral(["\n  min-width: 64;\n  padding: 6px 16px;\n  color: ", ";\n  border: 1px solid\n    ", ";\n  background-color: ", ";\n  box-shadow: ", ";\n  ", "\n  height: 42px;\n  border-radius: 4px;\n  line-height: 1.75;\n  cursor: pointer;\n  text-decoration: none;\n  letter-spacing: 0.02857em;\n  text-transform: uppercase;\n  display: inline-flex;\n  outline: none;\n  position: relative;\n  align-items: center;\n  justify-content: center;\n\n  :focus {\n    outline: 0;\n  }\n"]);

  _templateObject$4 = function _templateObject() {
    return data;
  };

  return data;
}
var StyledButton = styled__default['default'].button.attrs(function (props) {
  return {
    className: props.className,
    variant: props.variant,
    color: props.color,
    fullWidth: props.fullWidth
  };
})(_templateObject$4(), function (props) {
  return props.theme.button[props.variant].color;
}, function (props) {
  return props.theme.button[props.variant].borderColor[props.color];
}, function (props) {
  return props.theme.button[props.variant].backgroundColor[props.color];
}, function (props) {
  return props.theme.button[props.variant].boxShadow;
}, function (props) {
  if (props.fullWidth) {
    return "width: 100%;";
  }
});

var buttonTheme = {
  button: {
    contained: _defineProperty({
      color: "#FFFFFF",
      borderColor: "#06c3e1",
      padding: "10px 0px 0px 40px",
      boxShadow: "0px 2px 4px rgba(91, 134, 245, 0.05)",
      backgroundColor: {
        primary: "#06c3e1",
        secondary: "#717A8A",
        danger: "#FB7F6B"
      }
    }, "borderColor", {
      primary: "#06c3e1",
      secondary: "#717A8A",
      danger: "#FB7F6B"
    }),
    outline: {
      color: "#06c3e1",
      borderColor: {
        primary: "#06c3e1"
      },
      backgroundColor: {
        primary: "#FFFFFF"
      },
      padding: "10px 0px 0px 40px"
    }
  }
};

var Button = function Button(props) {
  return /*#__PURE__*/React__default['default'].createElement(StyledButton, props, props.children);
};

Button.propTypes = {
  variant: PropTypes__default['default'].oneOf(["contained", "outline"]),
  color: PropTypes__default['default'].oneOf(["primary", "secondary", "danger"]),
  fullWidth: PropTypes__default['default'].bool,
  borderRadius: PropTypes__default['default'].number,
  onClick: PropTypes__default['default'].func,
  onDragLeave: PropTypes__default['default'].func,
  onFocus: PropTypes__default['default'].func,
  onFocusVisible: PropTypes__default['default'].func,
  onKeyDown: PropTypes__default['default'].func,
  onKeyUp: PropTypes__default['default'].func,
  onMouseDown: PropTypes__default['default'].func,
  onMouseLeave: PropTypes__default['default'].func,
  onMouseUp: PropTypes__default['default'].func,
  onTouchEnd: PropTypes__default['default'].func,
  onTouchMove: PropTypes__default['default'].func,
  onTouchStart: PropTypes__default['default'].func,
  disabled: PropTypes__default['default'].bool,
  children: PropTypes__default['default'].node
};
Button.defaultProps = {
  variant: "contained",
  color: "primary",
  theme: buttonTheme,
  fullWidth: false,
  disabled: false
};

var segmentControlTheme = {
  segmentControl: {
    container: {
      backgroundColor: "#EFEFF0"
    },
    label: {
      color: "#000000",
      activeColor: "#06c3e1"
    }
  }
};

function _templateObject$5() {
  var data = _taggedTemplateLiteral(["\n  position: relative;\n  background: #efeff0;\n  border-radius: 9px;\n  background-color: ", ";\n  margin: 0;\n  padding: 2px;\n  border: none;\n  outline: none;\n  display: flex;\n  height: 30px;\n  max-width: ", "px;\n  width: ", "px;\n  box-sizing: border-box;\n"]);

  _templateObject$5 = function _templateObject() {
    return data;
  };

  return data;
}
var Container = styled__default['default'].div.attrs(function (props) {
  return {
    width: props.width
  };
})(_templateObject$5(), function (props) {
  return props.theme.segmentControl.container.backgroundColor;
}, function (props) {
  return props.width;
}, function (props) {
  return props.width;
});
Container.propTypes = {
  width: PropTypes__default['default'].number,
  number: PropTypes__default['default'].number
};
Container.defaultProps = {
  width: 400,
  number: 3,
  theme: segmentControlTheme
};

var defaultStyle = {
  position: "absolute",
  background: "#ffffff",
  border: ".5px solid rgb(0 0 0 / 4%)",
  boxShadow: "0 3px 8px 0 rgba(0,0,0,0.12), 0 3px 1px 0 rgba(0,0,0,0.04)",
  borderRadius: "7px",
  zIndex: 2,
  height: "93%",
  left: "0px",
  top: "0px",
  transition: ".15s ease-out"
};

var Selection = function Selection(props) {
  var transitionStyles = {
    entering: {
      opacity: 1,
      transform: "translateX(".concat(props.selected * props.width / props.number, "px)")
    },
    entered: {
      opacity: 1,
      transform: "translateX(".concat(props.selected * props.width / props.number, "px)")
    },
    exiting: {
      opacity: 1
    },
    exited: {
      opacity: 1
    }
  };
  return /*#__PURE__*/React__default['default'].createElement(reactTransitionGroup.Transition, {
    in: Boolean(props.selected),
    timeout: props.duration
  }, function (state) {
    return /*#__PURE__*/React__default['default'].createElement("span", {
      style: _objectSpread2(_objectSpread2(_objectSpread2({}, defaultStyle), transitionStyles[state]), {}, {
        width: "".concat(props.width / props.number, "px")
      })
    }, props.children);
  });
};

Selection.propTypes = {
  in: PropTypes__default['default'].bool,
  timeout: PropTypes__default['default'].number,
  color: PropTypes__default['default'].string,
  width: PropTypes__default['default'].number,
  number: PropTypes__default['default'].number,
  selected: PropTypes__default['default'].number
};
Selection.defaultProps = {
  in: false,
  timeout: 150,
  color: "#c23d38",
  width: 400,
  number: 3
};

function _templateObject$6() {
  var data = _taggedTemplateLiteral(["\n  box-shadow: none;\n  position: relative;\n  cursor: pointer;\n  display: flex;\n  flex: 1;\n"]);

  _templateObject$6 = function _templateObject() {
    return data;
  };

  return data;
}
var Option = styled__default['default'].div(_templateObject$6());

function _templateObject$7() {
  var data = _taggedTemplateLiteral(["\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  width: 100%;\n  height: 100%;\n  padding: 0;\n  margin: 0;\n  appearance: none;\n  outline: none;\n  border: none;\n  opacity: 0;\n  z-index: 3;\n"]);

  _templateObject$7 = function _templateObject() {
    return data;
  };

  return data;
}
var StyledInput = styled__default['default'].input(_templateObject$7());

var Input = function Input(props) {
  return /*#__PURE__*/React__default['default'].createElement(StyledInput, {
    type: "radio",
    onChange: props.handleChange,
    checked: props.checked,
    name: props.name,
    value: props.name
  });
};

Input.propTypes = {
  children: PropTypes__default['default'].node,
  handleChange: PropTypes__default['default'].func,
  checked: PropTypes__default['default'].bool,
  name: PropTypes__default['default'].string,
  value: PropTypes__default['default'].string
};

function _templateObject3$1() {
  var data = _taggedTemplateLiteral(["\n  display: block;\n  position: relative;\n  transition: all 0.2s ease;\n"]);

  _templateObject3$1 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2$1() {
  var data = _taggedTemplateLiteral(["\n  content: \"\";\n  width: 1px;\n  background: rgba(142, 142, 147, 0.15);\n  position: absolute;\n  top: 14%;\n  bottom: 14%;\n  border-radius: 10px;\n"]);

  _templateObject2$1 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$8() {
  var data = _taggedTemplateLiteral(["\n  position: relative;\n  overflow: hidden;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  text-overflow: ellipsis;\n  cursor: pointer;\n  height: 100%;\n  width: 100%;\n  background: rgba(255, 255, 255, 0);\n  font-weight: 500;\n  color: ", ";\n  font-size: 13px;\n  z-index: 2;\n"]);

  _templateObject$8 = function _templateObject() {
    return data;
  };

  return data;
}
var Label = styled__default['default'].label.attrs(function (props) {
  return {
    name: props.name,
    selectedName: props.selectedName
  };
})(_templateObject$8(), function (props) {
  return props.name.toLowerCase() === props.selectedName.toLowerCase() ? "#00C3E1" : "#000000";
});
var VeriticalDivider = styled__default['default'].label(_templateObject2$1());
var Text = styled__default['default'].span(_templateObject3$1());

var SegmentControl = function SegmentControl(props) {
  var selected = props.names.map(function (name) {
    return name.toLowerCase();
  }).indexOf(props.selected);
  return /*#__PURE__*/React__default['default'].createElement(Container, null, /*#__PURE__*/React__default['default'].createElement(Selection, {
    in: props.checked,
    duration: 150,
    selected: selected,
    number: props.names.length
  }), props.names.map(function (name) {
    return /*#__PURE__*/React__default['default'].createElement(Option, {
      key: name
    }, /*#__PURE__*/React__default['default'].createElement(Input, {
      checked: props.checked,
      handleChange: props.handleChange,
      name: name.toLowerCase(),
      value: name.toLowerCase()
    }), /*#__PURE__*/React__default['default'].createElement(Label, {
      htmlFor: name,
      name: name,
      selectedName: props.selected
    }, /*#__PURE__*/React__default['default'].createElement(Text, null, name)), /*#__PURE__*/React__default['default'].createElement(VeriticalDivider, null));
  }));
};

SegmentControl.propTypes = {
  names: PropTypes__default['default'].arrayOf(PropTypes__default['default'].string),
  handleChange: PropTypes__default['default'].func,
  checked: PropTypes__default['default'].bool,
  color: PropTypes__default['default'].string,
  value: PropTypes__default['default'].string,
  selected: PropTypes__default['default'].string
};
SegmentControl.defaultProps = {
  color: "#c23d38",
  checked: false
};

var inputTheme = {
  input: {
    light: {
      normal: {
        color: "#ffffff",
        backgroundColor: "#EFEFF0"
      },
      textarea: {
        color: "#ffffff",
        backgroundColor: "#EFEFF0"
      },
      file: {
        color: "#ffffff",
        backgroundColor: "#EFEFF0"
      },
      checkbox: {
        color: "#200E32",
        backgroundColor: "#ffffff"
      },
      radio: {
        color: "#000000"
      }
    }
  }
};

function _templateObject$9() {
  var data = _taggedTemplateLiteral(["\n  height: 30px;\n  border-radius: 5px;\n  color: ", ";\n  background-color: ", ";\n  border: 1px solid\n    ", ";\n"]);

  _templateObject$9 = function _templateObject() {
    return data;
  };

  return data;
}
var StyledInput$1 = styled__default['default'].input.attrs(function (props) {
  return {
    className: props.className,
    themeMode: props.themeMode
  };
})(_templateObject$9(), function (props) {
  return props.theme.input[props.themeMode].normal.color;
}, function (props) {
  return props.theme.input[props.themeMode].normal.backgroundColor;
}, function (props) {
  return props.theme.input[props.themeMode].normal.backgroundColor;
});
StyledInput$1.propTypes = {
  themeMode: PropTypes__default['default'].string
};
StyledInput$1.defaultProps = {
  theme: inputTheme,
  themeMode: "light"
};

var Input$1 = function Input(props) {
  var className = props.className,
      type = props.type;
  return /*#__PURE__*/React__default['default'].createElement(StyledInput$1, {
    type: type,
    className: className
  }, props.children);
};

Input$1.defaultProps = {
  type: "text"
};
Input$1.propTypes = {
  className: PropTypes__default['default'].string,
  children: PropTypes__default['default'].node,
  type: PropTypes__default['default'].oneOf(["text", "password", "email"])
};

function _templateObject$a() {
  var data = _taggedTemplateLiteral(["\n  height: 71px;\n  border-radius: 5px;\n  color: ", ";\n  background-color: ", ";\n  border: 1px solid\n    ", ";\n"]);

  _templateObject$a = function _templateObject() {
    return data;
  };

  return data;
}
var StyledTextArea = styled__default['default'].textarea.attrs(function (props) {
  return {
    className: props.className,
    themeMode: props.themeMode
  };
})(_templateObject$a(), function (props) {
  return props.theme.input[props.themeMode].textarea.color;
}, function (props) {
  return props.theme.input[props.themeMode].textarea.backgroundColor;
}, function (props) {
  return props.theme.input[props.themeMode].textarea.backgroundColor;
});
StyledTextArea.propTypes = {
  themeMode: PropTypes__default['default'].string
};
StyledTextArea.defaultProps = {
  theme: inputTheme,
  themeMode: "light"
};

var TextArea = function TextArea(props) {
  var className = props.className;
  return /*#__PURE__*/React__default['default'].createElement(StyledTextArea, {
    className: className
  }, props.children);
};

TextArea.propTypes = {
  className: PropTypes__default['default'].string,
  children: PropTypes__default['default'].node
};

function _templateObject3$2() {
  var data = _taggedTemplateLiteral(["\n  width: 18.5px;\n  height: 17.73px;\n  border-radius: 5px;\n  color: ", ";\n  background-color: ", ";\n  border: 1.5px solid\n    ", ";\n"]);

  _templateObject3$2 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2$2() {
  var data = _taggedTemplateLiteral(["\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 18.5px;\n  height: 17.73px;\n\n  ::before {\n    position: absolute;\n    left: 0;\n    top: 50%;\n    height: 34%;\n    width: 2px;\n    background-color: #336699;\n    content: \"\";\n    transform: translateX(10px) rotate(-45deg);\n    transform-origin: left bottom;\n  }\n\n  ::after {\n    position: absolute;\n    left: 1px;\n    bottom: 3px;\n    height: 2px;\n    width: 55%;\n    background-color: #336699;\n    content: \"\";\n    transform: translateX(10px) rotate(-45deg);\n    transform-origin: left bottom;\n  }\n"]);

  _templateObject2$2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$b() {
  var data = _taggedTemplateLiteral(["\n  display: block;\n  position: relative;\n  cursor: pointer;\n  font-size: 12px;\n  user-select: none;\n"]);

  _templateObject$b = function _templateObject() {
    return data;
  };

  return data;
}
var CheckboxLabel = styled__default['default'].label(_templateObject$b());
var CheckboxMark = styled__default['default'].span(_templateObject2$2());
CheckboxMark.defaultProps = {
  theme: inputTheme
};
var StyledCheckbox = styled__default['default'].input.attrs(function (props) {
  return {
    className: props.className,
    themeMode: props.themeMode
  };
})(_templateObject3$2(), function (props) {
  return props.theme.input[props.themeMode].checkbox.color;
}, function (props) {
  return props.theme.input[props.themeMode].checkbox.backgroundColor;
}, function (props) {
  return props.theme.input[props.themeMode].checkbox.color;
});
StyledCheckbox.defaultProps = {
  theme: inputTheme,
  themeMode: "light"
};
StyledCheckbox.propTypes = {
  themeMode: PropTypes__default['default'].string
};

var Checkbox = function Checkbox(props) {
  var className = props.className,
      type = props.type;
  return /*#__PURE__*/React__default['default'].createElement(CheckboxLabel, null, /*#__PURE__*/React__default['default'].createElement(StyledCheckbox, {
    type: type,
    className: className
  }, props.children), /*#__PURE__*/React__default['default'].createElement(CheckboxMark, null));
};

Checkbox.defaultProps = {
  type: "checkbox"
};
Checkbox.propTypes = {
  className: PropTypes__default['default'].string,
  children: PropTypes__default['default'].node,
  type: PropTypes__default['default'].oneOf(["checkbox"])
};

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  position: absolute;\n  top: 20px;\n  right: 20px;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3$3() {
  var data = _taggedTemplateLiteral(["\n  border: none;\n  background-color: transparent;\n  fontsize: 16px;\n  margintop: 8px;\n  marginright: 8px;\n  cursor: pointer;\n  color: #fff;\n"]);

  _templateObject3$3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2$3() {
  var data = _taggedTemplateLiteral(["\n  padding: 10px 10px;\n  line-height: 1.4;\n"]);

  _templateObject2$3 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$c() {
  var data = _taggedTemplateLiteral(["\n  border: 2px solid transparent;\n  background-color: #000000de;\n  border-radius: 4px;\n  max-width: 480px;\n  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.2);\n  margin-top: 16px;\n  color: #fff;\n  display: flex;\n  position: relative;\n  cursor: pointer;\n"]);

  _templateObject$c = function _templateObject() {
    return data;
  };

  return data;
}
var ToastMessageContainer = styled__default['default'].div(_templateObject$c());
var ToastMessageTextContainer = styled__default['default'].div(_templateObject2$3());
var ToastMessageCloseButton = styled__default['default'].button(_templateObject3$3());
var ToastMainContainer = styled__default['default'].div(_templateObject4());

var ToastMessage = function ToastMessage(_ref) {
  var children = _ref.children,
      remove = _ref.remove;
  var removeRef = React.useRef(null);
  removeRef.current = remove;
  React.useEffect(function () {
    var duration = 5000;
    var id = setTimeout(function () {
      return removeRef.current();
    }, duration);
    return function () {
      return clearTimeout(id);
    };
  }, []);
  return /*#__PURE__*/React__default['default'].createElement(ToastMessageContainer, null, /*#__PURE__*/React__default['default'].createElement(ToastMessageTextContainer, null, children), /*#__PURE__*/React__default['default'].createElement(ToastMessageCloseButton, {
    onClick: remove
  }, /*#__PURE__*/React__default['default'].createElement(io.IoIosClose, {
    size: 24
  })));
};
ToastMessage.propTypes = {
  children: PropTypes__default['default'].node,
  remove: PropTypes__default['default'].func,
  duration: PropTypes__default['default'].number
};

var ToastContext = /*#__PURE__*/React.createContext(null);

var Toast = function Toast(props) {
  var toastNode = React.useContext(ToastContext);

  var _useState = React.useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      toastIsOpen = _useState2[0],
      setToastOpen = _useState2[1];

  React.useEffect(function () {
    if (toastIsOpen !== props.isOpen) {
      setToastOpen(props.isOpen);
    }
  }, [props.isOpen, toastIsOpen]);

  var _remove = function remove() {
    setToastOpen(false);
    props.onClose();
  };

  return /*#__PURE__*/React__default['default'].createElement(React__default['default'].Fragment, null, toastNode ? /*#__PURE__*/reactDom.createPortal( /*#__PURE__*/React__default['default'].createElement(ToastMainContainer, null, toastIsOpen && /*#__PURE__*/React__default['default'].createElement(ToastMessage, {
    remove: function remove() {
      return _remove();
    }
  }, props.message)), toastNode) : null);
};

Toast.propTypes = {
  isOpen: PropTypes__default['default'].bool,
  message: PropTypes__default['default'].string,
  onClose: PropTypes__default['default'].func,
  variant: PropTypes__default['default'].oneOf(["error", "success", "default"])
};
Toast.defaultProps = {
  variant: "default"
};

var sidebarTheme = {
  sidebar: {
    dark: {
      color: "#ffffff",
      backgroundColor: "#3c4b64"
    },
    light: {
      color: "#4f5d73",
      backgroundColor: "#ffffff"
    }
  }
};

function useClickOutside(ref, action) {
  React__default['default'].useEffect(function () {
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        action();
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return function () {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref]);
}

var Sidebar = function Sidebar(props) {
  var _React$useState = React__default['default'].useState(props.isClose),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      isClose = _React$useState2[0],
      setClose = _React$useState2[1];

  var defaultStyle = {
    position: "fixed",
    top: "0",
    left: "0",
    bottom: "0",
    zIndex: 1030,
    order: -1,
    display: "flex",
    flex: "0 0 ".concat(props.width, "px"),
    flexDirection: "column",
    width: "".concat(props.width, "px"),
    transition: ".15s ease-out",
    color: "".concat(props.theme.sidebar[props.themeMode].color),
    backgroundColor: "".concat(props.theme.sidebar[props.themeMode].backgroundColor)
  };
  var transitionStyles = {
    entering: {
      opacity: 1,
      transform: "translateX(-".concat(props.width, "px)")
    },
    entered: {
      opacity: 1,
      transform: "translateX(-".concat(props.width, "px)")
    },
    exiting: {
      opacity: 1
    },
    exited: {
      opacity: 1
    }
  };
  React__default['default'].useEffect(function () {
    if (props.isClose !== isClose) {
      setClose(props.isClose);
    }
  }, [props.isClose]);
  var sidebarRef = React__default['default'].useRef(null);
  useClickOutside(sidebarRef, props.handleClose);
  return /*#__PURE__*/React__default['default'].createElement(reactTransitionGroup.Transition, {
    in: isClose,
    timeout: props.timeout
  }, function (state) {
    return /*#__PURE__*/React__default['default'].createElement("div", {
      ref: sidebarRef,
      style: _objectSpread2(_objectSpread2({}, defaultStyle), transitionStyles[state]),
      className: props.className
    }, props.children);
  });
};

Sidebar.propTypes = {
  isClose: PropTypes__default['default'].bool,
  timeout: PropTypes__default['default'].number,
  theme: PropTypes__default['default'].object,
  themeMode: PropTypes__default['default'].string,
  width: PropTypes__default['default'].number,
  className: PropTypes__default['default'].string,
  handleClose: PropTypes__default['default'].func
};
Sidebar.defaultProps = {
  isClose: false,
  timeout: 150,
  theme: sidebarTheme,
  width: 256,
  themeMode: "dark"
};

function _templateObject2$4() {
  var data = _taggedTemplateLiteral(["\n  padding: 20px;\n"]);

  _templateObject2$4 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$d() {
  var data = _taggedTemplateLiteral(["\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  min-width: 0;\n  margin-bottom: 1.5rem;\n  word-wrap: break-word;\n  background-clip: border-box;\n  border-radius: 10px;\n  background-color: #efeff0;\n"]);

  _templateObject$d = function _templateObject() {
    return data;
  };

  return data;
}
var StyledCard = styled__default['default'].div.attrs(function (props) {
  return {
    className: props.className
  };
})(_templateObject$d());
StyledCard.propTypes = {
  className: PropTypes__default['default'].string
};
var StyledCardbody = styled__default['default'].div.attrs(function (props) {
  return {
    className: props.className
  };
})(_templateObject2$4());
StyledCardbody.propTypes = {
  className: PropTypes__default['default'].string
};

var Card = function Card(props) {
  return /*#__PURE__*/React__default['default'].createElement(StyledCard, {
    className: props.className
  }, props.children);
};

Card.propTypes = {
  className: PropTypes__default['default'].string
};

var Cardbody = function Cardbody(props) {
  return /*#__PURE__*/React__default['default'].createElement(StyledCardbody, {
    className: props.className
  }, props.children);
};

Cardbody.propTypes = {
  className: PropTypes__default['default'].string
};

function _templateObject$e() {
  var data = _taggedTemplateLiteral(["\n  display: none;\n  border-color: ", ";\n"]);

  _templateObject$e = function _templateObject() {
    return data;
  };

  return data;
}
var StyledInput$2 = styled__default['default'].input(_templateObject$e(), function (props) {
  return props.checked ? "#2819ae" : "";
});
var SwitchInput = function SwitchInput(props) {
  return /*#__PURE__*/React__default['default'].createElement(StyledInput$2, {
    type: "checkbox",
    onChange: props.handleChange,
    checked: props.checked,
    name: props.name
  });
};
SwitchInput.propTypes = {
  children: PropTypes__default['default'].node,
  handleChange: PropTypes__default['default'].func,
  checked: PropTypes__default['default'].bool,
  name: PropTypes__default['default'].string
};

function _templateObject$f() {
  var data = _taggedTemplateLiteral(["\n  display: inline-block;\n  width: 40px;\n  height: 26px;\n  position: relative;\n"]);

  _templateObject$f = function _templateObject() {
    return data;
  };

  return data;
}
var SwitchLabel = styled__default['default'].label(_templateObject$f());

var defaultStyle$1 = {
  position: "absolute",
  top: "3px",
  left: "2px",
  height: "20px",
  width: "20px",
  cursor: "pointer",
  borderRadius: ".25rem",
  transition: ".15s ease-out"
};
var transitionStyles = {
  entering: {
    opacity: 1,
    transform: "translateX(12px)"
  },
  entered: {
    opacity: 1,
    transform: "translateX(12px)"
  },
  exiting: {
    opacity: 1
  },
  exited: {
    opacity: 1
  }
};

var SwitchSlider = function SwitchSlider(props) {
  return /*#__PURE__*/React__default['default'].createElement(reactTransitionGroup.Transition, {
    in: props.in,
    timeout: props.duration
  }, function (state) {
    return /*#__PURE__*/React__default['default'].createElement("span", {
      style: _objectSpread2(_objectSpread2(_objectSpread2({}, defaultStyle$1), transitionStyles[state]), {}, {
        backgroundColor: props.in ? props.color : "#ffffff",
        border: "1px solid ".concat(props.color)
      })
    }, props.children);
  });
};

SwitchSlider.propTypes = {
  in: PropTypes__default['default'].bool,
  timeout: PropTypes__default['default'].number,
  color: PropTypes__default['default'].string
};
SwitchSlider.defaultProps = {
  in: false,
  timeout: 150,
  color: "#c23d38"
};

function _templateObject$g() {
  var data = _taggedTemplateLiteral(["\n  background-color: #fff;\n  border: 1px solid ", ";\n  position: relative;\n  display: block;\n  height: inherit;\n  cursor: pointer;\n  border-radius: 0.25rem;\n"]);

  _templateObject$g = function _templateObject() {
    return data;
  };

  return data;
}
var SwitchSliderWrapper = styled__default['default'].span.attrs(function (props) {
  return {
    color: props.color
  };
})(_templateObject$g(), function (props) {
  return props.color;
});
SwitchSliderWrapper.propTypes = {
  color: PropTypes__default['default'].string
};
SwitchSliderWrapper.defaultProps = {
  color: "#c23d38"
};

var Switch = function Switch(props) {
  var ref = React__default['default'].useRef(null);
  React__default['default'].useEffect(function () {
    console.log("width", ref.current ? ref.current.offsetWidth : 0);
  }, [ref.current]);
  return /*#__PURE__*/React__default['default'].createElement(React__default['default'].Fragment, null, /*#__PURE__*/React__default['default'].createElement(SwitchLabel, null, /*#__PURE__*/React__default['default'].createElement(SwitchInput, {
    checked: props.checked,
    handleChange: props.handleChange,
    name: props.name
  }), /*#__PURE__*/React__default['default'].createElement(SwitchSliderWrapper, {
    ref: ref,
    color: props.color
  }, /*#__PURE__*/React__default['default'].createElement(SwitchSlider, {
    in: props.checked,
    duration: 150
  }))));
};

Switch.propTypes = {
  name: PropTypes__default['default'].string,
  handleChange: PropTypes__default['default'].func,
  checked: PropTypes__default['default'].bool,
  color: PropTypes__default['default'].string
};
Switch.defaultProps = {
  color: "#c23d38",
  checked: false
};

var SvgIcon = function SvgIcon(props) {
  var className = props.className,
      color = props.color,
      fontSize = props.fontSize,
      viewBox = props.viewBox,
      children = props.children;
  return /*#__PURE__*/React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: viewBox,
    className: className,
    fill: "currentColor",
    style: {
      color: color,
      fontSize: fontSize
    }
  }, children);
};

SvgIcon.propTypes = {
  className: PropTypes__default['default'].string,
  color: PropTypes__default['default'].string,
  fontSize: PropTypes__default['default'].string,
  viewBox: PropTypes__default['default'].string,
  children: PropTypes__default['default'].children
};
SvgIcon.defaultProps = {
  color: "inherit",
  fontSize: "default",
  viewBox: "0 0 24 24"
};
var SvgIcon$1 = /*#__PURE__*/React.memo(SvgIcon);

var Alarm = function Alarm(props) {
  return /*#__PURE__*/React.createElement(SvgIcon$1, props, /*#__PURE__*/React.createElement("path", {
    "fill-rule": "evenodd",
    d: "M6.5 0a.5.5 0 0 0 0 1H7v1.07a7.001 7.001 0 0 0-3.273 12.474l-.602.602a.5.5 0 0 0 .707.708l.746-.746A6.97 6.97 0 0 0 8 16a6.97 6.97 0 0 0 3.422-.892l.746.746a.5.5 0 0 0 .707-.708l-.601-.602A7.001 7.001 0 0 0 9 2.07V1h.5a.5.5 0 0 0 0-1h-3zm1.038 3.018a6.093 6.093 0 0 1 .924 0 6 6 0 1 1-.924 0zM8.5 5.5a.5.5 0 0 0-1 0v3.362l-1.429 2.38a.5.5 0 1 0 .858.515l1.5-2.5A.5.5 0 0 0 8.5 9V5.5zM0 3.5c0 .753.333 1.429.86 1.887A8.035 8.035 0 0 1 4.387 1.86 2.5 2.5 0 0 0 0 3.5zM13.5 1c-.753 0-1.429.333-1.887.86a8.035 8.035 0 0 1 3.527 3.527A2.5 2.5 0 0 0 13.5 1z"
  }));
};
Alarm.propTypes = {
  className: PropTypes__default['default'].string,
  color: PropTypes__default['default'].string,
  fontSize: PropTypes__default['default'].string,
  viewBox: PropTypes__default['default'].string,
  children: PropTypes__default['default'].children
};
Alarm.defaultProps = {
  color: "inherit",
  fontSize: "default",
  viewBox: "0 0 24 24"
};

exports.Alarm = Alarm;
exports.Button = Button;
exports.Card = Card;
exports.Cardbody = Cardbody;
exports.Checkbox = Checkbox;
exports.Col = Col;
exports.Footer = Footer;
exports.Grid = Grid;
exports.Input = Input$1;
exports.ListGroup = ListGroup;
exports.ListItem = ListItem;
exports.Row = Row;
exports.SegmentControl = SegmentControl;
exports.Sidebar = Sidebar;
exports.Switch = Switch;
exports.TextArea = TextArea;
exports.Toast = Toast;
