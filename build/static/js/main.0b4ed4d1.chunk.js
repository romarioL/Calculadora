(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,function(_,e,a){"use strict";var t=a(0),l=a.n(t);a(24);e.a=function(_){return l.a.createElement("button",{onClick:function(e){return _.click&&_.click(_.label)},className:"button ".concat(_.operation?"operation":""," ").concat(_.double?"double":""," ").concat(_.triple?"triple":"")},_.label)}},,,,,,function(module,__webpack_exports__,__webpack_require__){"use strict";var _home_romis_react_calculadora_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(3),_home_romis_react_calculadora_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(4),_home_romis_react_calculadora_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(8),_home_romis_react_calculadora_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(9),_home_romis_react_calculadora_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(12),_home_romis_react_calculadora_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(10),_home_romis_react_calculadora_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(13),_home_romis_react_calculadora_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(2),react__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_8___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__),_Calculator_css__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__(22),_Calculator_css__WEBPACK_IMPORTED_MODULE_9___default=__webpack_require__.n(_Calculator_css__WEBPACK_IMPORTED_MODULE_9__),_components_Button__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__(1),_components_Display__WEBPACK_IMPORTED_MODULE_11__=__webpack_require__(11),initialState={displayValue:"0",clearDisplay:!1,operation:null,values:[0,0],current:0},Calculator=function(_Component){function Calculator(_){var e;return Object(_home_romis_react_calculadora_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__.a)(this,Calculator),(e=Object(_home_romis_react_calculadora_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__.a)(this,Object(_home_romis_react_calculadora_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__.a)(Calculator).call(this,_))).state=Object(_home_romis_react_calculadora_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__.a)({},initialState),e.clearMemory=e.clearMemory.bind(Object(_home_romis_react_calculadora_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__.a)(Object(_home_romis_react_calculadora_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__.a)(e))),e.setOperation=e.setOperation.bind(Object(_home_romis_react_calculadora_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__.a)(Object(_home_romis_react_calculadora_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__.a)(e))),e.addDigit=e.addDigit.bind(Object(_home_romis_react_calculadora_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__.a)(Object(_home_romis_react_calculadora_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__.a)(e))),e}return Object(_home_romis_react_calculadora_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__.a)(Calculator,_Component),Object(_home_romis_react_calculadora_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__.a)(Calculator,[{key:"clearMemory",value:function(){this.setState(Object(_home_romis_react_calculadora_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__.a)({},initialState))}},{key:"setOperation",value:function setOperation(operation){if(0===this.state.current)this.setState({operation:operation,current:1,clearDisplay:!0});else{var equals="="===operation,currentOperation=this.state.operation,values=Object(_home_romis_react_calculadora_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__.a)(this.state.values);try{values[0]=eval("".concat(values[0]," ").concat(currentOperation," ").concat(values[1])),values[1]=0}catch(e){values[0]=this.state.values[0]}this.setState({displayValue:values[0],operation:equals?null:operation,current:equals?0:1,clearDisplay:!equals,values:values})}}},{key:"addDigit",value:function(_){if("."!==_||!this.state.displayValue.includes(".")){var e=("0"===this.state.displayValue||this.state.clearDisplay?"":this.state.displayValue)+_;if(this.setState({displayValue:e,clearDisplay:!1}),"."!==_){var a=this.state.current,t=parseFloat(e),l=Object(_home_romis_react_calculadora_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__.a)(this.state.values);l[a]=t,this.setState({values:l}),console.log(l)}}}},{key:"render",value:function(){var _=this;return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div",{className:"calculator"},react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_components_Display__WEBPACK_IMPORTED_MODULE_11__.a,{value:this.state.displayValue}),react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_components_Button__WEBPACK_IMPORTED_MODULE_10__.a,{label:"AC",click:function(){return _.clearMemory()},triple:!0}),react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_components_Button__WEBPACK_IMPORTED_MODULE_10__.a,{label:"/",click:this.setOperation,operation:!0}),react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_components_Button__WEBPACK_IMPORTED_MODULE_10__.a,{label:"7",click:this.addDigit}),react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_components_Button__WEBPACK_IMPORTED_MODULE_10__.a,{label:"8",click:this.addDigit}),react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_components_Button__WEBPACK_IMPORTED_MODULE_10__.a,{label:"9",click:this.addDigit}),react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_components_Button__WEBPACK_IMPORTED_MODULE_10__.a,{label:"*",click:this.setOperation,operation:!0}),react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_components_Button__WEBPACK_IMPORTED_MODULE_10__.a,{label:"4",click:this.addDigit}),react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_components_Button__WEBPACK_IMPORTED_MODULE_10__.a,{label:"5",click:this.addDigit}),react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_components_Button__WEBPACK_IMPORTED_MODULE_10__.a,{label:"6",click:this.addDigit}),react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_components_Button__WEBPACK_IMPORTED_MODULE_10__.a,{label:"-",click:this.setOperation,operation:!0}),react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_components_Button__WEBPACK_IMPORTED_MODULE_10__.a,{label:"1",click:this.addDigit}),react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_components_Button__WEBPACK_IMPORTED_MODULE_10__.a,{label:"2",click:this.addDigit}),react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_components_Button__WEBPACK_IMPORTED_MODULE_10__.a,{label:"3",click:this.addDigit}),react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_components_Button__WEBPACK_IMPORTED_MODULE_10__.a,{label:"+",click:this.setOperation,operation:!0}),react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_components_Button__WEBPACK_IMPORTED_MODULE_10__.a,{label:"0",click:this.addDigit,double:!0}),react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_components_Button__WEBPACK_IMPORTED_MODULE_10__.a,{label:".",click:this.addDigit}),react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_components_Button__WEBPACK_IMPORTED_MODULE_10__.a,{label:"=",click:this.setOperation,operation:!0}))}}]),Calculator}(react__WEBPACK_IMPORTED_MODULE_8__.Component);__webpack_exports__.a=Calculator},,,,function(_,e,a){"use strict";var t=a(0),l=a.n(t);a(26);e.a=function(_){return l.a.createElement("div",{className:"display"},_.value)}},,,function(_,e,a){_.exports=a(28)},,,,,,function(_,e,a){},,function(_,e,a){},,function(_,e,a){},,function(_,e,a){},,function(_,e,a){"use strict";a.r(e);var t=a(0),l=a.n(t),r=a(6),o=a.n(r),c=(a(20),a(7));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(l.a.createElement("div",null,l.a.createElement("h1",null,"Calculadora"),l.a.createElement(c.a,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(_){_.unregister()})}],[[14,2,1]]]);
//# sourceMappingURL=main.0b4ed4d1.chunk.js.map