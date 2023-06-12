/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=DM+Sans:ital,wght@0,400;0,500;1,400&display=swap);\"]);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `:root {\r\n  --bg-gradient: linear-gradient(to right, #fff, #e9993d, #ec2c2c);\r\n  --white-dark: #dbe4c6;\r\n  --red: #ec2c2c;\r\n  --black: #000;\r\n}\r\n\r\nbody {\r\n  background-color: var(--bg-gradient);\r\n  font-family: 'DM Sans', sans-serif;\r\n  margin: 0;\r\n  padding: 0;\r\n  box-sizing: border-box;\r\n}\r\n\r\nmain {\r\n  display: flex;\r\n  justify-content: center;\r\n}\r\n\r\n.listCont {\r\n  background: var(--bg-gradient);\r\n  min-width: 90%;\r\n  box-shadow:\r\n    0 10px 15px -3px rgba(0, 0, 0, 0.1),\r\n    0 10px 15px -3px rgba(0, 0, 0, 0.1);\r\n  border-radius: 5px;\r\n  margin-top: 5rem;\r\n}\r\n\r\n.header {\r\n  font-size: 1.1rem;\r\n  padding: 15px;\r\n  display: flex;\r\n  justify-content: space-between;\r\n  border-bottom: 1px solid var(--sec);\r\n  color: var(--black);\r\n  font-weight: 600;\r\n}\r\n\r\n#add-task-btn i {\r\n  transform: rotate(90deg);\r\n  margin-right: 2px;\r\n}\r\n\r\n#reload-icon i {\r\n  color: var(--third);\r\n}\r\n\r\n#reload-icon i:not(.enter) {\r\n  cursor: pointer;\r\n}\r\n\r\n#reload-icon i:not(.enter):hover {\r\n  color: var(--black);\r\n}\r\n\r\nul {\r\n  list-style: none;\r\n  padding: 0;\r\n  width: 100%;\r\n  margin: 0;\r\n}\r\n\r\nli {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  padding: 15px;\r\n  border-bottom: 1px solid var(--white-dark);\r\n  font-size: 14px;\r\n}\r\n\r\n.checkList {\r\n  position: relative;\r\n  margin-right: 10px;\r\n}\r\n\r\nli .checkList {\r\n  display: flex;\r\n  align-items: center;\r\n}\r\n\r\ninput {\r\n  border: none;\r\n  background: transparent;\r\n  font-size: 14px;\r\n  font-style: italic;\r\n  outline: 0;\r\n}\r\n\r\n.checkList input {\r\n  margin-right: 10px;\r\n  font-style: normal;\r\n}\r\n\r\nfooter {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  padding: 15px;\r\n  background-color: var(--bg-gradient);\r\n}\r\n\r\nbutton {\r\n  cursor: pointer;\r\n}\r\n\r\n.clear-items {\r\n  outline: none;\r\n  border: none;\r\n  width: 100%;\r\n  padding: 0.9rem 3.3rem;\r\n  cursor: pointer;\r\n}\r\n\r\nfooter .clear-items {\r\n  outline: none;\r\n  color: var(--white-dark);\r\n  border: none;\r\n  background: inherit;\r\n  line-height: 1.5rem;\r\n  font-size: inherit;\r\n  cursor: pointer;\r\n}\r\n\r\n.completed {\r\n  transition: opacity 0.3s ease-in-out;\r\n  text-decoration: line-through var(--black);\r\n  color: gray;\r\n}\r\n\r\n.refresh:hover {\r\n  transform: rotateZ(90deg);\r\n}\r\n\r\n.task-item:hover {\r\n  background-color: #dbe4c6;\r\n}\r\n\r\n.checkedBtn {\r\n  width: 20px;\r\n  height: 20px;\r\n  border-radius: 4px;\r\n  border: 2px solid transparent;\r\n  position: relative;\r\n  cursor: pointer;\r\n  outline: none;\r\n}\r\n\r\n.checkedBtn:checked {\r\n  background-color: var(--black);\r\n}\r\n\r\n.inputDesc {\r\n  border: none;\r\n  outline: none;\r\n  background-color: transparent;\r\n  font-size: 16px;\r\n  color: var(--black);\r\n  padding: 2px;\r\n}\r\n\r\n@media screen and (min-width: 768px) {\r\n  .listCont {\r\n    background-color: var(--white-dark);\r\n    min-width: 50%;\r\n    box-shadow:\r\n      0 10px 15px -3px rgba(0, 0, 0, 0.1),\r\n      0 10px 15px -3px rgba(0, 0, 0, 0.1);\r\n    border-radius: 5px;\r\n    margin-top: 5rem;\r\n  }\r\n}\r\n`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://webpack-boilerplate/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://webpack-boilerplate/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://webpack-boilerplate/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://webpack-boilerplate/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://webpack-boilerplate/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://webpack-boilerplate/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://webpack-boilerplate/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://webpack-boilerplate/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://webpack-boilerplate/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://webpack-boilerplate/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _modules_updateLocalStorage_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/updateLocalStorage.js */ \"./src/modules/updateLocalStorage.js\");\n/* harmony import */ var _modules_renderTodoList_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/renderTodoList.js */ \"./src/modules/renderTodoList.js\");\n/* harmony import */ var _modules_addTasks_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/addTasks.js */ \"./src/modules/addTasks.js\");\n\n\n\n\n\nconst reloadPage = document.getElementById('reload-icon');\n\nreloadPage.addEventListener('click', () => {\n  // eslint-disable-next-line no-restricted-globals\n  location.reload();\n});\n\nwindow.addEventListener('DOMContentLoaded', () => {\n  const taskForm = document.getElementById('task-form');\n  taskForm.addEventListener('submit', _modules_addTasks_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"]);\n\n  const storedTasks = localStorage.getItem('tasks');\n  const parseTasks = storedTasks ? JSON.parse(storedTasks) : [];\n  _modules_renderTodoList_js__WEBPACK_IMPORTED_MODULE_2__.tasks.push(...parseTasks);\n\n  (0,_modules_updateLocalStorage_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n  (0,_modules_renderTodoList_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n});\n\n\n//# sourceURL=webpack://webpack-boilerplate/./src/index.js?");

/***/ }),

/***/ "./src/modules/addTasks.js":
/*!*********************************!*\
  !*** ./src/modules/addTasks.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _updateLocalStorage_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./updateLocalStorage.js */ \"./src/modules/updateLocalStorage.js\");\n/* harmony import */ var _renderTodoList_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./renderTodoList.js */ \"./src/modules/renderTodoList.js\");\n\n\n\nconst addTask = (e) => {\n  e.preventDefault();\n  const taskInput = document.getElementById('task-input');\n  const taskDescription = taskInput.value.trim();\n\n  if (taskDescription !== '') {\n    const newTask = {\n      description: taskDescription,\n      completed: false,\n      index: _renderTodoList_js__WEBPACK_IMPORTED_MODULE_1__.tasks.length + 1,\n    };\n\n    _renderTodoList_js__WEBPACK_IMPORTED_MODULE_1__.tasks.push(newTask);\n    (0,_updateLocalStorage_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n    taskInput.value = '';\n    (0,_renderTodoList_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n  }\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (addTask);\n\n\n//# sourceURL=webpack://webpack-boilerplate/./src/modules/addTasks.js?");

/***/ }),

/***/ "./src/modules/dragAndDrop.js":
/*!************************************!*\
  !*** ./src/modules/dragAndDrop.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   handleDragEnd: () => (/* binding */ handleDragEnd),\n/* harmony export */   handleDragEnter: () => (/* binding */ handleDragEnter),\n/* harmony export */   handleDragLeave: () => (/* binding */ handleDragLeave),\n/* harmony export */   handleDragOver: () => (/* binding */ handleDragOver),\n/* harmony export */   handleDragStart: () => (/* binding */ handleDragStart),\n/* harmony export */   handleDrop: () => (/* binding */ handleDrop),\n/* harmony export */   swapTasks: () => (/* binding */ swapTasks)\n/* harmony export */ });\n/* harmony import */ var _renderTodoList_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./renderTodoList.js */ \"./src/modules/renderTodoList.js\");\n/* harmony import */ var _updateLocalStorage_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./updateLocalStorage.js */ \"./src/modules/updateLocalStorage.js\");\n// eslint-disable-next-line import/no-cycle\n\n\n\nlet dragSource = null;\n\nconst handleDragStart = (e) => {\n  dragSource = e.target;\n  e.dataTransfer.effectAllowed = 'move';\n  e.dataTransfer.setData('text/html', e.target.outerHTML);\n  e.target.classList.add('dragging');\n};\n\nconst handleDragOver = (e) => {\n  if (e.preventDefault) {\n    e.preventDefault();\n  }\n\n  e.dataTransfer.dropEffect = 'move';\n  return false;\n};\n\nconst handleDragEnter = (e) => {\n  e.target.classList.add('dragover');\n};\nconst handleDragLeave = (e) => {\n  e.target.classList.remove('dragover');\n};\n\nconst swapTasks = (oldIndex, newIndex) => {\n  const temp = _renderTodoList_js__WEBPACK_IMPORTED_MODULE_0__.tasks[oldIndex];\n  _renderTodoList_js__WEBPACK_IMPORTED_MODULE_0__.tasks[oldIndex] = _renderTodoList_js__WEBPACK_IMPORTED_MODULE_0__.tasks[newIndex];\n  _renderTodoList_js__WEBPACK_IMPORTED_MODULE_0__.tasks[newIndex] = temp;\n//   renderTodoList()\n};\n\nconst handleDrop = (e) => {\n  if (e.stopPropagation) {\n    e.stopPropagation();\n  }\n\n  if (dragSource !== e.target) {\n    const dropIndex = parseInt(e.target.getAttribute('data-index'), 10);\n    const dragIndex = parseInt(dragSource.getAttribute('data-index'), 10);\n    swapTasks(dragIndex, dropIndex);\n    (0,_updateLocalStorage_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n    (0,_renderTodoList_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n  }\n\n  return false;\n};\n\nconst handleDragEnd = (e) => {\n  e.target.classList.remove('dragging');\n  const listItems = document.querySelectorAll('#todo-list li');\n  listItems.forEach((listItem) => {\n    listItem.classList.remove('dragover');\n  });\n};\n\n\n//# sourceURL=webpack://webpack-boilerplate/./src/modules/dragAndDrop.js?");

/***/ }),

/***/ "./src/modules/renderTodoList.js":
/*!***************************************!*\
  !*** ./src/modules/renderTodoList.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   tasks: () => (/* binding */ tasks)\n/* harmony export */ });\n/* harmony import */ var _updateLocalStorage_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./updateLocalStorage.js */ \"./src/modules/updateLocalStorage.js\");\n/* harmony import */ var _dragAndDrop_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dragAndDrop.js */ \"./src/modules/dragAndDrop.js\");\n\r\n\r\n\r\nconst tasks = [];\r\n  \r\nconst renderTodoList = () => {\r\n  const todoListElement = document.getElementById('todo-list');\r\n  todoListElement.innerHTML = '';\r\n\r\n  tasks.forEach((task, index) => {\r\n    const listItem = document.createElement('li');\r\n    listItem.setAttribute('data-index', index);\r\n\r\n    listItem.setAttribute('draggable', true);\r\n\r\n    const checkbox = document.createElement('input');\r\n    checkbox.type = 'checkbox';\r\n    checkbox.classList.add('checkedBtn')\r\n    checkbox.checked = task.completed;\r\n    checkbox.addEventListener('change', () => {\r\n      task.completed = checkbox.checked;\r\n      (0,_updateLocalStorage_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\n      renderTodoList();\r\n    });\r\n\r\n    const input = document.createElement('input');\r\n    input.classList.add('items');\r\n    input.type = 'text';\r\n    input.value = task.description;\r\n    input.addEventListener('keydown', (event) => {\r\n      if (event.key === 'Enter') {\r\n        const newDescription = input.value.trim();\r\n        if (newDescription !== '') {\r\n          task.description = newDescription;\r\n          (0,_updateLocalStorage_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\n          renderTodoList();\r\n        }\r\n      }\r\n    });\r\n\r\n    \r\n\r\n    const deleteButton = document.createElement('button');\r\n    deleteButton.classList.add('delete-btn');\r\n    deleteButton.innerHTML = '<i class=\"ri-delete-bin-line\"></i>';\r\n\r\n    deleteButton.addEventListener('click', () => {\r\n      tasks.splice(index, 1);\r\n\r\n      //update the index of the remaining tasks\r\n      tasks.forEach((task, newIndex) => {\r\n        task.index = newIndex + 1;\r\n      })\r\n      ;(0,_updateLocalStorage_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\n      renderTodoList();\r\n    });\r\n\r\n    listItem.appendChild(checkbox);\r\n    listItem.appendChild(input);\r\n    listItem.appendChild(deleteButton);\r\n\r\n    if (task.completed) {\r\n      listItem.classList.add('completed');\r\n    }\r\n\r\n    todoListElement.appendChild(listItem);\r\n  });\r\n  const clearCompletedTasks = (e) => {\r\n    e.preventDefault();\r\n    const filteredTasks = tasks.filter((task) => !task.completed);\r\n    tasks.splice(0, tasks.length, ...filteredTasks);\r\n    tasks.forEach((task, newIndex) => {\r\n      task.index = newIndex + 1;\r\n    })\r\n    ;(0,_updateLocalStorage_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\n    renderTodoList();\r\n  };\r\n\r\n  const clearCompleted = document.createElement('button');\r\n  clearCompleted.classList.add('clear-items');\r\n  clearCompleted.textContent = 'Clear All Completed';\r\n  clearCompleted.addEventListener('click', clearCompletedTasks);\r\n  todoListElement.appendChild(clearCompleted);\r\n\r\n  // if (tasks.length === 0) {\r\n  //   clearCompleted.style.display = 'none;'\r\n  // } else {\r\n  //   clearCompleted.style.display = 'block'\r\n  // }\r\n\r\n  const listItems = document.querySelectorAll('#todo-list li');\r\n    listItems.forEach((listItem) => {\r\n        listItem.addEventListener('dragstart', _dragAndDrop_js__WEBPACK_IMPORTED_MODULE_1__.handleDragStart);\r\n        listItem.addEventListener('dragover', _dragAndDrop_js__WEBPACK_IMPORTED_MODULE_1__.handleDragOver);\r\n        listItem.addEventListener('dragenter', _dragAndDrop_js__WEBPACK_IMPORTED_MODULE_1__.handleDragEnter);\r\n        listItem.addEventListener('dragleave', _dragAndDrop_js__WEBPACK_IMPORTED_MODULE_1__.handleDragLeave);\r\n        listItem.addEventListener('drop', _dragAndDrop_js__WEBPACK_IMPORTED_MODULE_1__.handleDrop);\r\n        listItem.addEventListener('dragend', _dragAndDrop_js__WEBPACK_IMPORTED_MODULE_1__.handleDragEnd);\r\n    })\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (renderTodoList);\r\n\n\n//# sourceURL=webpack://webpack-boilerplate/./src/modules/renderTodoList.js?");

/***/ }),

/***/ "./src/modules/updateLocalStorage.js":
/*!*******************************************!*\
  !*** ./src/modules/updateLocalStorage.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _renderTodoList_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./renderTodoList.js */ \"./src/modules/renderTodoList.js\");\n// eslint-disable-next-line import/no-cycle\n\n\nconst updateLocalStorage = () => {\n  localStorage.setItem('tasks', JSON.stringify(_renderTodoList_js__WEBPACK_IMPORTED_MODULE_0__.tasks));\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (updateLocalStorage);\n\n//# sourceURL=webpack://webpack-boilerplate/./src/modules/updateLocalStorage.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;