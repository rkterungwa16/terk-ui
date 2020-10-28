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

function getWidthString(span) {
  if (!span) return;
  var width = Number(span) / 12 * 100;
  return "width: ".concat(width, "%;");
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  float: left;\n  padding: 10px;\n\n  ", "\n  @media only screen and (min-width: 768px) {\n    ", "\n  }\n  @media only screen and (min-width: 992px) {\n    ", "\n  }\n  @media only screen and (min-width: 1200px) {\n    ", "\n  }\n"]);

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
  return xs ? getWidthString(xs) : "width: 100%";
}, function (_ref2) {
  var sm = _ref2.sm;
  return getWidthString(sm);
}, function (_ref3) {
  var md = _ref3.md;
  return getWidthString(md);
}, function (_ref4) {
  var lg = _ref4.lg;
  return getWidthString(lg);
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

var buttonTheme = {
  button: {
    normal: _defineProperty({
      color: "#FFFFFF",
      borderColor: "#00C3E1",
      padding: "10px 0px 0px 40px",
      boxShadow: "0px 2px 4px rgba(91, 134, 245, 0.05)",
      backgroundColor: {
        primary: "#00C3E1",
        secondary: "#717A8A",
        danger: "#FB7F6B"
      }
    }, "borderColor", {
      primary: "#00C3E1",
      secondary: "#717A8A",
      danger: "#FB7F6B"
    }),
    outline: {
      color: "#00C3E1",
      borderColor: {
        primary: "#00C3E1"
      },
      backgroundColor: {
        primary: "#FFFFFF"
      },
      padding: "10px 0px 0px 40px"
    }
  }
};

function _templateObject$4() {
  var data = _taggedTemplateLiteral(["\n  padding: 8px;\n  color: ", ";\n  border: 1px solid\n    ", ";\n  background-color: ", ";\n  box-shadow: ", ";\n  width: ", "px;\n  height: ", "px;\n  border-radius: ", "px;\n"]);

  _templateObject$4 = function _templateObject() {
    return data;
  };

  return data;
}
var StyledButton = styled__default['default'].button.attrs(function (props) {
  return {
    className: props.className,
    variant: props.variant,
    width: props.width,
    height: props.height,
    color: props.color
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
  return props.width;
}, function (props) {
  return props.height;
}, function (props) {
  return props.borderRadius;
});
StyledButton.propTypes = {
  variant: PropTypes__default['default'].oneOf(["normal", "outline"]),
  width: PropTypes__default['default'].number,
  height: PropTypes__default['default'].number,
  borderRadius: PropTypes__default['default'].number,
  color: PropTypes__default['default'].oneOf(["primary", "secondary", "danger"])
};
StyledButton.defaultProps = {
  variant: "normal",
  color: "primary",
  width: 141,
  height: 40,
  borderRadius: 4,
  theme: buttonTheme
};

var Button = function Button(props) {
  return /*#__PURE__*/React__default['default'].createElement(StyledButton, props, props.text);
};

Button.propTypes = {
  variant: PropTypes__default['default'].oneOf(["normal", "outline"]),
  width: PropTypes__default['default'].number,
  height: PropTypes__default['default'].number,
  text: PropTypes__default['default'].string,
  borderRadius: PropTypes__default['default'].number
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

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  display: block;\n  position: relative;\n  transition: all 0.2s ease;\n"]);

  _templateObject3 = function _templateObject3() {
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
var Text = styled__default['default'].span(_templateObject3());

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

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  position: absolute;\n  top: 20px;\n  right: 20px;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3$1() {
  var data = _taggedTemplateLiteral(["\n  border: none;\n  background-color: transparent;\n  fontsize: 16px;\n  margintop: 8px;\n  marginright: 8px;\n  cursor: pointer;\n  color: #fff;\n"]);

  _templateObject3$1 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2$2() {
  var data = _taggedTemplateLiteral(["\n  padding: 10px 10px;\n  line-height: 1.4;\n"]);

  _templateObject2$2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$b() {
  var data = _taggedTemplateLiteral(["\n  border: 2px solid transparent;\n  background-color: #000000de;\n  border-radius: 4px;\n  max-width: 480px;\n  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.2);\n  margin-top: 16px;\n  color: #fff;\n  display: flex;\n  position: relative;\n  cursor: pointer;\n"]);

  _templateObject$b = function _templateObject() {
    return data;
  };

  return data;
}
var ToastMessageContainer = styled__default['default'].div(_templateObject$b());
var ToastMessageTextContainer = styled__default['default'].div(_templateObject2$2());
var ToastMessageCloseButton = styled__default['default'].button(_templateObject3$1());
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

function _templateObject2$3() {
  var data = _taggedTemplateLiteral(["\n  padding: 20px;\n"]);

  _templateObject2$3 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$c() {
  var data = _taggedTemplateLiteral(["\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  min-width: 0;\n  margin-bottom: 1.5rem;\n  word-wrap: break-word;\n  background-clip: border-box;\n  border-radius: 10px;\n  background-color: #efeff0;\n"]);

  _templateObject$c = function _templateObject() {
    return data;
  };

  return data;
}
var StyledCard = styled__default['default'].div.attrs(function (props) {
  return {
    className: props.className
  };
})(_templateObject$c());
StyledCard.propTypes = {
  className: PropTypes__default['default'].string
};
var StyledCardbody = styled__default['default'].div.attrs(function (props) {
  return {
    className: props.className
  };
})(_templateObject2$3());
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

exports.Button = Button;
exports.Card = Card;
exports.Cardbody = Cardbody;
exports.Col = Col;
exports.Footer = Footer;
exports.Input = Input$1;
exports.ListGroup = ListGroup;
exports.ListItem = ListItem;
exports.Row = Row;
exports.SegmentControl = SegmentControl;
exports.Sidebar = Sidebar;
exports.TextArea = TextArea;
exports.Toast = Toast;
