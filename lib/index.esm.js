import React, { createElement, useRef, useEffect, createContext, useContext, useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Transition } from 'react-transition-group';
import { createPortal } from 'react-dom';
import { IoIosClose } from 'react-icons/io';

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
  var _ref$xs = _ref.xs,
      xs = _ref$xs === void 0 ? 12 : _ref$xs,
      sm = _ref.sm,
      md = _ref.md,
      _ref$lg = _ref.lg,
      lg = _ref$lg === void 0 ? 12 : _ref$lg;
  return "\n    ".concat(xs ? generateGridWidth(xs) : "max-width: 100%", ";\n    flex-basis: ").concat(Number(xs) / 12 * 100 - 1, "%;\n    @media only screen and (min-width: 768px) {\n      ").concat(generateGridWidth(sm), "\n      flex-basis: ").concat(Number(sm) / 12 * 100 - 1, "%;\n    }\n    @media only screen and (min-width: 992px) {\n      ").concat(generateGridWidth(md), "\n      flex-basis: ").concat(Number(md) / 12 * 100 - 1, "%;\n    }\n    @media only screen and (min-width: 1200px) {\n      ").concat(generateGridWidth(lg), "\n      flex-basis: ").concat(Number(lg) / 12 * 100 - 1, "%;\n  ");
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
  return "\n    ".concat(flex ? "display: flex;" : "", "\n    ").concat(direction ? "flex-direction: ".concat(direction, ";") : "", "\n    ").concat(justify ? "justify-content: ".concat(justify, ";") : "", "\n    ").concat(alignItems ? "align-items: ".concat(alignItems, ";") : "", "\n    ").concat(alignContent ? "align-content: ".concat(alignContent, ";") : "", "\n    flex-shrink: 1;\n    flex-grow: 1;\n  ");
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
var StyledRow = styled.div.attrs(function (props) {
  return {
    className: props.className
  };
})(_templateObject());
StyledRow.propTypes = {
  className: PropTypes.string
};
var StyledCol = styled.div.attrs(function (props) {
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
  className: PropTypes.string
};
var StyledGrid = styled.div.attrs(function (props) {
  return {
    className: props.className,
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
    gutter: props.gutter
  };
})(_templateObject3(), function (props) {
  if (props.container && !props.item) {
    return "\n        flex-wrap: wrap;\n        display: flex;\n        justify-content: center;\n        width: 100%;\n        box-sizing: border-box;\n      ";
  }

  if (props.item && !props.container) {
    return "\n        ".concat(generateMediaQueries(props), "\n        ").concat(generateFlexStyle(props), "\n        ").concat(props.gutter ? "margin: ".concat(props.gutter, "px") : "", ";\n      ");
  }
});

var Row = function Row(props) {
  var className = props.className,
      children = props.children;
  return /*#__PURE__*/createElement(StyledRow, {
    className: className
  }, children);
};

Row.defaultProps = {
  className: ""
};
Row.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node
};

var Col = function Col(props) {
  var className = props.className,
      xs = props.xs,
      sm = props.sm,
      md = props.md,
      lg = props.lg;
  return /*#__PURE__*/React.createElement(StyledCol, {
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
  className: PropTypes.string,
  xs: PropTypes.string,
  sm: PropTypes.string,
  md: PropTypes.string,
  lg: PropTypes.string,
  children: PropTypes.node
};

var Grid = function Grid(props) {
  return /*#__PURE__*/React.createElement(StyledGrid, props, props.children);
};

Grid.defaultProps = {
  item: false,
  container: false
};
Grid.propTypes = {
  className: PropTypes.string,
  xs: PropTypes.oneOf([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]),
  sm: PropTypes.oneOf([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]),
  md: PropTypes.oneOf([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]),
  lg: PropTypes.oneOf([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]),
  direction: PropTypes.oneOf(["row", "row-reverse", "column", "column-reverse"]),
  justify: PropTypes.oneOf(["flex-start", "center", "flex-end", "space-between", "space-around", "space-evenly"]),
  alignContent: PropTypes.oneOf(["stretch", "center", "flex-start", "flex-end", "space-between", "space-around"]),
  alignItems: PropTypes.oneOf(["flex-start", "center", "flex-end", "stretch", "baseline"]),
  item: PropTypes.bool,
  container: PropTypes.bool,
  children: PropTypes.node,
  flex: PropTypes.bool,
  gutter: PropTypes.number
};

function _templateObject$1() {
  var data = _taggedTemplateLiteral(["\n  list-style-type: none;\n  margin: 0;\n  padding: 0;\n"]);

  _templateObject$1 = function _templateObject() {
    return data;
  };

  return data;
}
var StyledListGroup = styled.ul.attrs(function (props) {
  return {
    className: props.className
  };
})(_templateObject$1());

var ListGroup = function ListGroup(props) {
  var className = props.className;
  return /*#__PURE__*/React.createElement(StyledListGroup, {
    className: className
  }, props.children);
};

ListGroup.defaultProps = {
  className: ""
};
ListGroup.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node
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
var StyledListItem = styled.li.attrs(function (props) {
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
  themeMode: PropTypes.string,
  className: PropTypes.string,
  divider: PropTypes.bool,
  accent: PropTypes.string
};
StyledListItem.defaultProps = {
  themeMode: "dark",
  theme: listTheme,
  divider: false
};

var ListItem = function ListItem(props) {
  return /*#__PURE__*/React.createElement(StyledListItem, props, props.children);
};

ListItem.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  divider: PropTypes.bool,
  accent: PropTypes.string,
  themeMode: PropTypes.string
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
var StyledFooter = styled.div.attrs(function (props) {
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
  themeMode: PropTypes.string
};
StyledFooter.defaultProps = {
  themeMode: "light",
  theme: footerTheme
};

var Footer = function Footer(props) {
  var className = props.className;
  return /*#__PURE__*/React.createElement(StyledFooter, {
    className: className
  }, props.children);
};

Footer.defaultProps = {
  className: ""
};
Footer.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node
};

function _templateObject$4() {
  var data = _taggedTemplateLiteral(["\n  min-width: 64;\n  padding: 6px 16px;\n  color: ", ";\n  border: 1px solid\n    ", ";\n  background-color: ", ";\n  box-shadow: ", ";\n  ", "\n  height: 42px;\n  border-radius: 4px;\n  line-height: 1.75;\n  cursor: pointer;\n  text-decoration: none;\n  letter-spacing: 0.02857em;\n  text-transform: uppercase;\n  display: inline-flex;\n  outline: none;\n  position: relative;\n  align-items: center;\n  justify-content: center;\n\n  :focus {\n    outline: 0;\n  }\n"]);

  _templateObject$4 = function _templateObject() {
    return data;
  };

  return data;
}
var StyledButton = styled.button.attrs(function (props) {
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
  return /*#__PURE__*/React.createElement(StyledButton, props, props.children);
};

Button.propTypes = {
  variant: PropTypes.oneOf(["contained", "outline"]),
  color: PropTypes.oneOf(["primary", "secondary", "danger"]),
  fullWidth: PropTypes.bool,
  borderRadius: PropTypes.number,
  onClick: PropTypes.func,
  onDragLeave: PropTypes.func,
  onFocus: PropTypes.func,
  onFocusVisible: PropTypes.func,
  onKeyDown: PropTypes.func,
  onKeyUp: PropTypes.func,
  onMouseDown: PropTypes.func,
  onMouseLeave: PropTypes.func,
  onMouseUp: PropTypes.func,
  onTouchEnd: PropTypes.func,
  onTouchMove: PropTypes.func,
  onTouchStart: PropTypes.func,
  disabled: PropTypes.bool,
  children: PropTypes.node
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
var Container = styled.div.attrs(function (props) {
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
  width: PropTypes.number,
  number: PropTypes.number
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
  return /*#__PURE__*/React.createElement(Transition, {
    in: Boolean(props.selected),
    timeout: props.duration
  }, function (state) {
    return /*#__PURE__*/React.createElement("span", {
      style: _objectSpread2(_objectSpread2(_objectSpread2({}, defaultStyle), transitionStyles[state]), {}, {
        width: "".concat(props.width / props.number, "px")
      })
    }, props.children);
  });
};

Selection.propTypes = {
  in: PropTypes.bool,
  timeout: PropTypes.number,
  color: PropTypes.string,
  width: PropTypes.number,
  number: PropTypes.number,
  selected: PropTypes.number
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
var Option = styled.div(_templateObject$6());

function _templateObject$7() {
  var data = _taggedTemplateLiteral(["\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  width: 100%;\n  height: 100%;\n  padding: 0;\n  margin: 0;\n  appearance: none;\n  outline: none;\n  border: none;\n  opacity: 0;\n  z-index: 3;\n"]);

  _templateObject$7 = function _templateObject() {
    return data;
  };

  return data;
}
var StyledInput = styled.input(_templateObject$7());

var Input = function Input(props) {
  return /*#__PURE__*/React.createElement(StyledInput, {
    type: "radio",
    onChange: props.handleChange,
    checked: props.checked,
    name: props.name,
    value: props.name
  });
};

Input.propTypes = {
  children: PropTypes.node,
  handleChange: PropTypes.func,
  checked: PropTypes.bool,
  name: PropTypes.string,
  value: PropTypes.string
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
var Label = styled.label.attrs(function (props) {
  return {
    name: props.name,
    selectedName: props.selectedName
  };
})(_templateObject$8(), function (props) {
  return props.name.toLowerCase() === props.selectedName.toLowerCase() ? "#00C3E1" : "#000000";
});
var VeriticalDivider = styled.label(_templateObject2$1());
var Text = styled.span(_templateObject3$1());

var SegmentControl = function SegmentControl(props) {
  var selected = props.names.map(function (name) {
    return name.toLowerCase();
  }).indexOf(props.selected);
  return /*#__PURE__*/React.createElement(Container, null, /*#__PURE__*/React.createElement(Selection, {
    in: props.checked,
    duration: 150,
    selected: selected,
    number: props.names.length
  }), props.names.map(function (name) {
    return /*#__PURE__*/React.createElement(Option, {
      key: name
    }, /*#__PURE__*/React.createElement(Input, {
      checked: props.checked,
      handleChange: props.handleChange,
      name: name.toLowerCase(),
      value: name.toLowerCase()
    }), /*#__PURE__*/React.createElement(Label, {
      htmlFor: name,
      name: name,
      selectedName: props.selected
    }, /*#__PURE__*/React.createElement(Text, null, name)), /*#__PURE__*/React.createElement(VeriticalDivider, null));
  }));
};

SegmentControl.propTypes = {
  names: PropTypes.arrayOf(PropTypes.string),
  handleChange: PropTypes.func,
  checked: PropTypes.bool,
  color: PropTypes.string,
  value: PropTypes.string,
  selected: PropTypes.string
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
var StyledInput$1 = styled.input.attrs(function (props) {
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
  themeMode: PropTypes.string
};
StyledInput$1.defaultProps = {
  theme: inputTheme,
  themeMode: "light"
};

var Input$1 = function Input(props) {
  var className = props.className,
      type = props.type;
  return /*#__PURE__*/React.createElement(StyledInput$1, {
    type: type,
    className: className
  }, props.children);
};

Input$1.defaultProps = {
  type: "text"
};
Input$1.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  type: PropTypes.oneOf(["text", "password", "email"])
};

function _templateObject$a() {
  var data = _taggedTemplateLiteral(["\n  height: 71px;\n  border-radius: 5px;\n  color: ", ";\n  background-color: ", ";\n  border: 1px solid\n    ", ";\n"]);

  _templateObject$a = function _templateObject() {
    return data;
  };

  return data;
}
var StyledTextArea = styled.textarea.attrs(function (props) {
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
  themeMode: PropTypes.string
};
StyledTextArea.defaultProps = {
  theme: inputTheme,
  themeMode: "light"
};

var TextArea = function TextArea(props) {
  var className = props.className;
  return /*#__PURE__*/React.createElement(StyledTextArea, {
    className: className
  }, props.children);
};

TextArea.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node
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
var CheckboxLabel = styled.label(_templateObject$b());
var CheckboxMark = styled.span(_templateObject2$2());
CheckboxMark.defaultProps = {
  theme: inputTheme
};
var StyledCheckbox = styled.input.attrs(function (props) {
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
  themeMode: PropTypes.string
};

var Checkbox = function Checkbox(props) {
  var className = props.className,
      type = props.type;
  return /*#__PURE__*/React.createElement(CheckboxLabel, null, /*#__PURE__*/React.createElement(StyledCheckbox, {
    type: type,
    className: className
  }, props.children), /*#__PURE__*/React.createElement(CheckboxMark, null));
};

Checkbox.defaultProps = {
  type: "checkbox"
};
Checkbox.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  type: PropTypes.oneOf(["checkbox"])
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
var ToastMessageContainer = styled.div(_templateObject$c());
var ToastMessageTextContainer = styled.div(_templateObject2$3());
var ToastMessageCloseButton = styled.button(_templateObject3$3());
var ToastMainContainer = styled.div(_templateObject4());

var ToastMessage = function ToastMessage(_ref) {
  var children = _ref.children,
      remove = _ref.remove;
  var removeRef = useRef(null);
  removeRef.current = remove;
  useEffect(function () {
    var duration = 5000;
    var id = setTimeout(function () {
      return removeRef.current();
    }, duration);
    return function () {
      return clearTimeout(id);
    };
  }, []);
  return /*#__PURE__*/React.createElement(ToastMessageContainer, null, /*#__PURE__*/React.createElement(ToastMessageTextContainer, null, children), /*#__PURE__*/React.createElement(ToastMessageCloseButton, {
    onClick: remove
  }, /*#__PURE__*/React.createElement(IoIosClose, {
    size: 24
  })));
};
ToastMessage.propTypes = {
  children: PropTypes.node,
  remove: PropTypes.func,
  duration: PropTypes.number
};

var ToastContext = /*#__PURE__*/createContext(null);

var Toast = function Toast(props) {
  var toastNode = useContext(ToastContext);

  var _useState = useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      toastIsOpen = _useState2[0],
      setToastOpen = _useState2[1];

  useEffect(function () {
    if (toastIsOpen !== props.isOpen) {
      setToastOpen(props.isOpen);
    }
  }, [props.isOpen, toastIsOpen]);

  var _remove = function remove() {
    setToastOpen(false);
    props.onClose();
  };

  return /*#__PURE__*/React.createElement(React.Fragment, null, toastNode ? /*#__PURE__*/createPortal( /*#__PURE__*/React.createElement(ToastMainContainer, null, toastIsOpen && /*#__PURE__*/React.createElement(ToastMessage, {
    remove: function remove() {
      return _remove();
    }
  }, props.message)), toastNode) : null);
};

Toast.propTypes = {
  isOpen: PropTypes.bool,
  message: PropTypes.string,
  onClose: PropTypes.func,
  variant: PropTypes.oneOf(["error", "success", "default"])
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
  React.useEffect(function () {
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
  var _React$useState = React.useState(props.isClose),
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
  React.useEffect(function () {
    if (props.isClose !== isClose) {
      setClose(props.isClose);
    }
  }, [props.isClose]);
  var sidebarRef = React.useRef(null);
  useClickOutside(sidebarRef, props.handleClose);
  return /*#__PURE__*/React.createElement(Transition, {
    in: isClose,
    timeout: props.timeout
  }, function (state) {
    return /*#__PURE__*/React.createElement("div", {
      ref: sidebarRef,
      style: _objectSpread2(_objectSpread2({}, defaultStyle), transitionStyles[state]),
      className: props.className
    }, props.children);
  });
};

Sidebar.propTypes = {
  isClose: PropTypes.bool,
  timeout: PropTypes.number,
  theme: PropTypes.object,
  themeMode: PropTypes.string,
  width: PropTypes.number,
  className: PropTypes.string,
  handleClose: PropTypes.func
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
var StyledCard = styled.div.attrs(function (props) {
  return {
    className: props.className
  };
})(_templateObject$d());
StyledCard.propTypes = {
  className: PropTypes.string
};
var StyledCardbody = styled.div.attrs(function (props) {
  return {
    className: props.className
  };
})(_templateObject2$4());
StyledCardbody.propTypes = {
  className: PropTypes.string
};

var Card = function Card(props) {
  return /*#__PURE__*/React.createElement(StyledCard, {
    className: props.className
  }, props.children);
};

Card.propTypes = {
  className: PropTypes.string
};

var Cardbody = function Cardbody(props) {
  return /*#__PURE__*/React.createElement(StyledCardbody, {
    className: props.className
  }, props.children);
};

Cardbody.propTypes = {
  className: PropTypes.string
};

function _templateObject$e() {
  var data = _taggedTemplateLiteral(["\n  display: none;\n  border-color: ", ";\n"]);

  _templateObject$e = function _templateObject() {
    return data;
  };

  return data;
}
var StyledInput$2 = styled.input(_templateObject$e(), function (props) {
  return props.checked ? "#2819ae" : "";
});
var SwitchInput = function SwitchInput(props) {
  return /*#__PURE__*/React.createElement(StyledInput$2, {
    type: "checkbox",
    onChange: props.handleChange,
    checked: props.checked,
    name: props.name
  });
};
SwitchInput.propTypes = {
  children: PropTypes.node,
  handleChange: PropTypes.func,
  checked: PropTypes.bool,
  name: PropTypes.string
};

function _templateObject$f() {
  var data = _taggedTemplateLiteral(["\n  display: inline-block;\n  width: 40px;\n  height: 26px;\n  position: relative;\n"]);

  _templateObject$f = function _templateObject() {
    return data;
  };

  return data;
}
var SwitchLabel = styled.label(_templateObject$f());

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
  return /*#__PURE__*/React.createElement(Transition, {
    in: props.in,
    timeout: props.duration
  }, function (state) {
    return /*#__PURE__*/React.createElement("span", {
      style: _objectSpread2(_objectSpread2(_objectSpread2({}, defaultStyle$1), transitionStyles[state]), {}, {
        backgroundColor: props.in ? props.color : "#ffffff",
        border: "1px solid ".concat(props.color)
      })
    }, props.children);
  });
};

SwitchSlider.propTypes = {
  in: PropTypes.bool,
  timeout: PropTypes.number,
  color: PropTypes.string
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
var SwitchSliderWrapper = styled.span.attrs(function (props) {
  return {
    color: props.color
  };
})(_templateObject$g(), function (props) {
  return props.color;
});
SwitchSliderWrapper.propTypes = {
  color: PropTypes.string
};
SwitchSliderWrapper.defaultProps = {
  color: "#c23d38"
};

var Switch = function Switch(props) {
  var ref = React.useRef(null);
  React.useEffect(function () {
    console.log("width", ref.current ? ref.current.offsetWidth : 0);
  }, [ref.current]);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(SwitchLabel, null, /*#__PURE__*/React.createElement(SwitchInput, {
    checked: props.checked,
    handleChange: props.handleChange,
    name: props.name
  }), /*#__PURE__*/React.createElement(SwitchSliderWrapper, {
    ref: ref,
    color: props.color
  }, /*#__PURE__*/React.createElement(SwitchSlider, {
    in: props.checked,
    duration: 150
  }))));
};

Switch.propTypes = {
  name: PropTypes.string,
  handleChange: PropTypes.func,
  checked: PropTypes.bool,
  color: PropTypes.string
};
Switch.defaultProps = {
  color: "#c23d38",
  checked: false
};

export { Button, Card, Cardbody, Checkbox, Col, Footer, Grid, Input$1 as Input, ListGroup, ListItem, Row, SegmentControl, Sidebar, Switch, TextArea, Toast };
