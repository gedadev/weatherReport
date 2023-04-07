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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \":root {\\n    --color-1: #E7ECEF;\\n    --color-2: #274C77;\\n    --color-3: #6096BA;\\n    --color-4: #A3CEF1;\\n    --font-color: rgb(41, 41, 41);\\n}\\n\\n* {\\n    margin: 0;\\n    padding: 0;\\n}\\n\\nbody {\\n    font-family: 'Poppins', sans-serif;\\n}\\n\\nheader {\\n    width: 100%;\\n    height: 5vh;\\n    background-color: var(--color-2);\\n    display: flex;\\n    justify-content: flex-end;\\n    align-items: center;\\n}\\n\\n#search {\\n    height: 60%;\\n    margin: 0 50px;\\n    display: flex;\\n    gap: 10px;\\n}\\n\\n#city-input {\\n    height: 100%;\\n    outline: none;\\n    padding: 0 12px;\\n    border-radius: 8px;\\n    border: none;\\n    background-color: var(--color-1);\\n}\\n\\n#city-btn {\\n    font-size: 25px;\\n    align-self: center;\\n    cursor: pointer;\\n    color: var(--color-3);\\n    transition: all .3s;\\n}\\n\\n#city-btn:hover {\\n    color: var(--color-4);\\n}\\n\\nmain {\\n    background-color: var(--color-3);\\n    width: 100%;\\n    height: 95vh;\\n    display: flex;\\n    flex-direction: column;\\n    align-items: center;\\n    gap: 100px;\\n}\\n\\n/* current weather */\\n\\n#forecast-container {\\n    border-radius: 5px;\\n    margin: 100px 0 0;\\n    display: flex;\\n    flex-direction: column;\\n    align-items: center;\\n    color: var(--font-color);\\n}\\n\\n#forecast-container > p:nth-child(1) {\\n    font-size: 12px;\\n}\\n\\n#forecast-container > p:nth-child(2) {\\n    font-size: 45px;\\n    font-weight: 600;\\n    letter-spacing: 2px;\\n}\\n\\n#forecast-container > p:nth-child(3) {\\n    font-size: 60px;\\n    line-height: 1;\\n    letter-spacing: 2px;\\n    margin-bottom: 24px;\\n}\\n\\n#forecast-container > p:nth-child(n + 4) {\\n    font-size: 16px;\\n}\\n\\n/* header */\\n\\n#temp-toggle {\\n    height: 100%;\\n    display: flex;\\n    align-items: center;\\n    gap: 12px;\\n}\\n\\n#temp-toggle > input {\\n    opacity: 0;\\n    cursor: pointer;\\n    height: 3vh;\\n    width: 75px;\\n    position: absolute;\\n    z-index: 2;\\n}\\n\\n#temp-toggle > span {\\n    position: relative;\\n    z-index: 1;\\n    color: var(--color-1);\\n    font-size: 20px;\\n}\\n\\n#temp-toggle > span:first-of-type {\\n    color: var(--color-4);\\n}\\n\\n/* daily min max */\\n\\n#daily-container {\\n    width: clamp(700px, 60%, 900px);\\n    display: flex;\\n    gap: 20px;\\n}\\n\\n.daily-card {\\n    box-shadow: 5px 5px 12px var(--color-2);\\n    border-radius: 8px;\\n    width: 20%;\\n    display: flex;\\n    flex-direction: column;\\n    align-items: center;\\n    padding: 16px 10px;\\n    color: var(--font-color);\\n    background-color: var(--color-4);\\n    opacity: .7;\\n}\\n\\n.daily-date {\\n    font-size: 12px;\\n}\\n\\n.daily-icon {\\n    margin: 5px 0 0;\\n    width: auto;\\n    height: 84px;\\n}\\n\\n.daily-temp {\\n    display: flex;\\n    align-items: center;\\n    gap: 10px;\\n}\\n\\n.max {\\n    font-size: 44px;\\n}\\n\\n.min {\\n    font-size: 22px;\\n}\\n\\n.daily-forecast {\\n    margin: 10px 0 0;\\n    font-size: 14px;\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://weatherreport/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://weatherreport/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://weatherreport/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://weatherreport/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://weatherreport/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://weatherreport/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://weatherreport/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://weatherreport/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://weatherreport/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://weatherreport/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/app/dailyForecast.js":
/*!**********************************!*\
  !*** ./src/app/dailyForecast.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"DailyForecast\": () => (/* binding */ DailyForecast)\n/* harmony export */ });\n/* harmony import */ var _getForecast__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getForecast */ \"./src/app/getForecast.js\");\n\n\nclass DailyForecast extends _getForecast__WEBPACK_IMPORTED_MODULE_0__.Forecast {\n    constructor(city, container, units, lat, lon) {\n        super(city, container, units, lat, lon);\n    }\n\n    async getDailyForecast() {\n        if (this.city === \"\") {\n            const resp = await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${this.lat}&lon=${this.lon}&units=${this.units}&appid=5d0907efdadf22c907135983ee95c9d4`, {mode: 'cors'});\n            const data = resp.json();\n            return data;\n        } else {\n            await super.getCoordinates();\n            const resp = await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${this.lat}&lon=${this.lon}&units=${this.units}&appid=5d0907efdadf22c907135983ee95c9d4`, {mode: 'cors'});\n            const data = resp.json();\n            return data;\n        }\n    }\n\n    async run() {\n        const response = await this.getDailyForecast();\n        this.displayData(response.list, this.container);\n    }\n\n    displayData(data, container) {\n        super.clearContainer();\n        const dailyInfo = this.reduceData(data);\n        for (let i = 0; i < Object.entries(dailyInfo).length; i++) {\n            const card = document.createElement('div');\n            card.classList.add('daily-card');\n            \n            const date = document.createElement('div');\n            date.classList.add('daily-date');\n            date.textContent = dailyInfo.date[i];\n            card.appendChild(date);\n            \n            const icon = document.createElement('img');\n            icon.classList.add('daily-icon');\n            icon.src = `https://openweathermap.org/img/wn/${dailyInfo.icon[i]}@2x.png`;\n            card.appendChild(icon);\n            \n            const temp = document.createElement('div');\n            temp.classList.add('daily-temp');\n            const max = document.createElement('div');\n            max.classList.add('max');\n            max.textContent = `${Math.round(dailyInfo.maxTemp[i])}°`;\n            temp.appendChild(max);\n            const min = document.createElement('div');\n            min.classList.add('min');\n            min.textContent = `${Math.round(dailyInfo.minTemp[i])}°`;\n            temp.appendChild(min);\n            card.appendChild(temp);\n\n            const forecast = document.createElement('div');\n            forecast.classList.add('daily-forecast');\n            forecast.textContent = dailyInfo.forecast[i];\n            card.appendChild(forecast);\n\n            container.appendChild(card);\n        }\n    }\n    \n    reduceData(data) {\n        let fiveDays = [];\n        let date = [];\n        let icon = [];\n        let maxTemp = Array(5).fill(-100);\n        let minTemp = Array(5).fill(100);\n        let forecast = [];\n        \n        while (data[0]) {\n            fiveDays.push(data.splice(0,8));\n        }\n\n        fiveDays.forEach((day, i) => {\n            date.push(super.convertTimestamp(day[1].dt, true));\n            icon.push(day[1].weather[0].icon);\n            day.forEach((element) => {\n                if (element.main.temp > maxTemp[i]) {\n                    maxTemp[i] = element.main.temp;\n                }\n                if (element.main.temp < minTemp[i]) {\n                    minTemp[i] = element.main.temp;\n                }\n            });\n            forecast.push(day[1].weather[0].description);\n        });\n\n        return {date:date, icon: icon, maxTemp: maxTemp, minTemp: minTemp, forecast: forecast};\n    }\n}\n\n//# sourceURL=webpack://weatherreport/./src/app/dailyForecast.js?");

/***/ }),

/***/ "./src/app/getForecast.js":
/*!********************************!*\
  !*** ./src/app/getForecast.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Forecast\": () => (/* binding */ Forecast)\n/* harmony export */ });\nclass Forecast {\n\n    constructor(city, container, units='metric', lat, lon) {\n        this.city = city;\n        this.container = container;\n        this.units = units;\n        this.lat = lat;\n        this.lon = lon;\n    }\n\n    async run() {\n        const response = await this.currentWeather();\n        this.displayData(response, this.container)\n    }\n\n    async currentWeather() {\n        if (this.city === \"\") {\n            const resp = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${this.lat}&lon=${this.lon}&appid=5d0907efdadf22c907135983ee95c9d4&units=${this.units}`, {mode: 'cors'});\n            const data = await resp.json();\n            return data;    \n        } else {\n            await this.getCoordinates();\n            const resp = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${this.lat}&lon=${this.lon}&appid=5d0907efdadf22c907135983ee95c9d4&units=${this.units}`, {mode: 'cors'});\n            const data = await resp.json();\n            return data;\n        }\n    }\n    \n    async getCoordinates() {\n        const resp = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${this.city}&appid=5d0907efdadf22c907135983ee95c9d4`, {mode: 'cors'});\n        const data = await resp.json();\n        this.lat = data[0].lat;\n        this.lon = data[0].lon;\n    }\n\n    convertTimestamp(timestamp, short = false) {\n        const date = new Date(timestamp * 1000);\n        if (short) {\n            return date.toLocaleDateString('en-US', { timeZone: 'America/Mexico_City' });\n        } else {\n            return date.toLocaleString('en-US', { timeZone: 'America/Mexico_City' });\n        }\n    }\n\n    displayData(data, div) {\n        this.clearContainer();\n        let p;\n        for (let i = 0; i < 7; i++) {\n            switch (i) {\n                case 0:\n                    p = document.createElement('p');\n                    p.innerHTML = `Updated at ${this.convertTimestamp(data.dt)}`;\n                    div.appendChild(p);\n                    break;\n                case 1:\n                    p = document.createElement('p');\n                    p.innerHTML = `${data.name}, ${data.sys.country}`;\n                    div.appendChild(p);\n                    break;\n                case 2:\n                    p = document.createElement('p');\n                    p.innerHTML = `${Math.round(data.main.temp)}°${this.units === 'metric' ? 'c' : 'F'} `;\n                    div.appendChild(p);\n                    break;\n                case 3:\n                    p = document.createElement('p');\n                    p.innerHTML = `Feels like: ${Math.round(data.main.feels_like)}°${this.units === 'metric' ? 'c' : 'F'} `;\n                    div.appendChild(p);\n                    break;\n                case 4:\n                    p = document.createElement('p');\n                    p.innerHTML = this.getForecast(data.clouds.all);\n                    div.appendChild(p);\n                    break;\n                case 5:\n                    p = document.createElement('p');\n                    p.innerHTML = `Humidity: ${data.main.humidity}%`;\n                    div.appendChild(p);\n                    break;\n                case 6:\n                    p = document.createElement('p');\n                    p.innerHTML = `Wind speed: ${data.wind.speed}${this.units === 'metric' ? 'm/s' : 'mph'} `;\n                    div.appendChild(p);\n                    break;\n                default:\n                    break;\n            }\n        }\n    }\n\n    getForecast(clouds) {\n        if (clouds < 1) {\n            return `Clear sky`;\n        } else if (clouds >= 1 && clouds < 30) {\n            return `Mostly clear`;\n        } else if (clouds >= 31 && clouds < 50) {\n            return `Partly cloudy`;\n        } else if (clouds >= 51 && clouds < 80) {\n            return `Mostly cloudy`;\n        } else if (clouds >= 81) {\n            return `Overcast`;\n        }\n    }\n\n    clearContainer() {\n        try {\n            while(this.container.children[0]){\n                this.container.children[0].remove();\n            }\n        } catch (e) {}\n    }\n}\n\n//# sourceURL=webpack://weatherreport/./src/app/getForecast.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _app_getForecast__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app/getForecast */ \"./src/app/getForecast.js\");\n/* harmony import */ var _app_dailyForecast__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/dailyForecast */ \"./src/app/dailyForecast.js\");\n\n\n\n\nconst searchInput = document.querySelector('#city-input');\nconst searchBtn = document.querySelector('#city-btn');\nconst container = document.querySelector('#forecast-container');\nconst units = document.querySelector('#units-selector');\nconst dailyContainer = document.querySelector('#daily-container');\n\nsearchBtn.addEventListener('click', genForecast);\n\ncurrentPosition();\n\nunits.addEventListener('click', () => {\n    if (units.checked) {\n        units.parentNode.children[1].style.color = 'var(--color-1)';\n        units.parentNode.children[3].style.color = 'var(--color-4)';\n    } else {\n        units.parentNode.children[1].style.color = 'var(--color-4)';\n        units.parentNode.children[3].style.color = 'var(--color-1)';\n    }\n\n    searchInput.value === \"\" ? currentPosition() : genForecast();\n});\n\nfunction genForecast() {\n    let forecast = new _app_getForecast__WEBPACK_IMPORTED_MODULE_1__.Forecast(searchInput.value, container, (units.checked ? 'imperial' : 'metric'));\n    forecast.run();\n    let daily = new _app_dailyForecast__WEBPACK_IMPORTED_MODULE_2__.DailyForecast(searchInput.value, dailyContainer, (units.checked ? 'imperial' : 'metric'));\n    daily.run();\n}\n\nfunction currentPosition() {\n    navigator.geolocation.getCurrentPosition(success, error, {timeout: 5000});\n}\n\nfunction success(pos) {\n    const crd = pos.coords;\n    let forecast = new _app_getForecast__WEBPACK_IMPORTED_MODULE_1__.Forecast(searchInput.value, container, (units.checked ? 'imperial' : 'metric'), crd.latitude, crd.longitude);\n    forecast.run();\n    let daily = new _app_dailyForecast__WEBPACK_IMPORTED_MODULE_2__.DailyForecast(searchInput.value, dailyContainer, (units.checked ? 'imperial' : 'metric'), crd.latitude, crd.longitude);\n    daily.run();\n}\n\nfunction error(err) {\n    console.warn(`ERROR(${err.code}): ${err.message}`);\n    // Add a msg to indicate the user to turn on the browser location or to enter a value in the search box\n}\n\n//# sourceURL=webpack://weatherreport/./src/index.js?");

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