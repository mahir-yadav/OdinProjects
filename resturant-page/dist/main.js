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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./images/restaurant-interior.jpg */ \"./src/images/restaurant-interior.jpg\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./images/menu-image.jpg */ \"./src/images/menu-image.jpg\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ./images/about-image.jpg */ \"./src/images/about-image.jpg\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\nvar ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);\nvar ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `* {\n    margin: 0;\n    padding: 0;\n    /* outline: 1px solid red; */\n}\n\n\n\nheader {\n    position: absolute;\n    width: 100%;\n    z-index: 10;\n\n\n}\n\nnav {\n    display: flex;\n    gap: 5rem;\n    padding: 20px 40px;\n    align-items: center;\n    justify-content: center;\n\n}\n\nnav button {\n    background: transparent;\n    border: none;\n    color: white;\n    font-weight: bold;\n    font-size: 2rem;\n    cursor: pointer;\n}\n\nnav button:hover {\n    color: #f9c74f;\n    text-decoration: underline;\n}\n\nnav button.active {\n    color: #f9c74f;\n    text-decoration: underline;\n}\n\n.home-page {\n    position: relative;\n    height: 100vh;\n    background-image: url(${___CSS_LOADER_URL_REPLACEMENT_0___});\n    background-size: cover;\n    background-position: center;\n    background-repeat: no-repeat;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    color: white;\n    text-align: center;\n}\n\n.home-page::before,\n.menu-hero::before,\n.about-hero::before {\n    content: \"\";\n    position: absolute;\n    top: 0;\n    left: 0;\n    height: 100%;\n    width: 100%;\n    background-color: rgba(0, 0, 0, 0.3);\n    z-index: 1;\n    pointer-events: none;\n}\n\n.home-content,\n.menu-hero>h1,\n.about-hero>h1 {\n    color: white;\n    z-index: 2;\n    position: relative;\n    max-width: 600px;\n    background: rgba(0, 0, 0, 0.5);\n    padding: 30px 40px;\n    border-radius: 10px;\n    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.4);\n    text-align: center;\n    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\n}\n\n.home-content:hover,\n.menu-hero>h1:hover,\n.about-hero>h1:hover {\n    background: rgba(0, 0, 0, 0.6);\n    box-shadow: 0 12px 30px rgba(0, 0, 0, 0.5);\n    transform: scale(1.05);\n    transition: background 0.3s ease, box-shadow 0.3s ease, transform 0.3s ease;\n}\n\n.home-heading {\n    font-size: 3rem;\n    margin-bottom: 0.5em;\n}\n\n.home-description {\n    font-size: 1.4rem;\n    margin-bottom: 1.5em;\n}\n\n.home-button {\n    font-size: 1.1rem;\n    padding: 12px 25px;\n    border: 2px solid #f9c74f;\n    border-radius: 5px;\n    background: transparent;\n    color: #f9c74f;\n    cursor: pointer;\n    transition: background-color 0.3s ease, color 0.3s ease;\n}\n\n.home-button:hover {\n    background-color: #f9c74f;\n    color: black;\n}\n\n.menu-page,\n.about-page {\n    display: flex;\n    flex-direction: column;\n    min-height: 100vh;\n    width: 100%;\n}\n\n.menu-hero,\n.about-hero {\n    background-image: url(${___CSS_LOADER_URL_REPLACEMENT_1___});\n    background-size: cover;\n    background-position: center;\n    height: 50vh;\n    width: 100%;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    position: relative;\n\n\n}\n\n.menu-hero>h1,\n.about-hero>h1 {\n    font-size: 3rem;\n}\n\n.menu-container {\n    padding: 3rem;\n    background-color: black;\n    display: grid;\n    grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));\n    gap: 3rem;\n    justify-content: center;\n\n}\n\n.menu-card {\n    background-color: rgb(54, 52, 52);\n    border-radius: 12px;\n    box-shadow: 0 6px 15px rgba(0, 0, 0, 0.1);\n    transition: all 0.3s ease;\n    display: flex;\n    flex-direction: column;\n    height: 100%;\n    gap: 1rem;\n    padding: 10px;\n    color: #f9c74f;\n    text-align: center;\n    width: 100%;\n}\n\n.menu-card:hover {\n    transform: translateY(-8px);\n    box-shadow: 0 12px 20px rgba(0, 0, 0, 0.15);\n}\n\n.menu-img {\n    height: 17rem;\n    width: 100%;\n    border-radius: 12px;\n}\n\n.about-hero {\n    background-image: url(${___CSS_LOADER_URL_REPLACEMENT_2___});\n}\n.about-content{\n    background-color: rgb(54, 52, 52);\n    border-radius: 12px;\n    box-shadow: 0 6px 15px rgba(0, 0, 0, 0.1);\n    transition: all 0.3s ease;\n    padding: 10px;\n    margin-top: 2rem;\n    width: 50%;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n}\n.about-container{\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    background-color: black;\n}\n\n.about-container h2 {\n    margin-top: 2em;\n    font-size: 2rem;\n    color: #f9c74f;\n    \n}\n\n.about-container p,\n.about-container ul {\n    font-size: 1.2rem;\n    margin-top: 0.5em;\n    color: white;\n}\n\n.about-container ul li {\n    margin-bottom: 0.4em;\n}\n\n.about-container a {\n    text-decoration: none;\n}\n\n.about-container a:hover {\n    text-decoration: underline;\n}\n\n.about-container iframe {\n    margin-top: 1.5em;\n    border-radius: 10px;\n    box-shadow: 0 6px 15px rgba(0, 0, 0, 0.3);\n}`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://resturant-page/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://resturant-page/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n  if (!url) {\n    return url;\n  }\n  url = String(url.__esModule ? url.default : url);\n\n  // If url is already wrapped in quotes, remove them\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n  if (options.hash) {\n    url += options.hash;\n  }\n\n  // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n  return url;\n};\n\n//# sourceURL=webpack://resturant-page/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://resturant-page/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://resturant-page/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://resturant-page/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://resturant-page/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://resturant-page/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://resturant-page/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://resturant-page/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/about.js":
/*!**********************!*\
  !*** ./src/about.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   load_about: () => (/* binding */ load_about)\n/* harmony export */ });\nfunction load_about(content) {\n    content.innerHTML = '';\n    content.className = 'about-page';\n    const heroSection = document.createElement(\"div\");\n    heroSection.classList.add(\"about-hero\");\n\n    const heroText = document.createElement(\"h1\");\n    heroText.textContent = \"About us\";\n    heroSection.appendChild(heroText);\n    content.appendChild(heroSection);\n    const aboutContainer = document.createElement(\"div\");\n    aboutContainer.classList.add(\"about-container\");\n\n    const aboutContent = document.createElement(\"div\");\n    aboutContent.classList.add(\"about-content\");\n    aboutContainer.appendChild(aboutContent);\n    const locationHeading = document.createElement('h2');\n    locationHeading.textContent = \"Our Location\";\n\n    const locationText = document.createElement('p');\n    locationText.textContent = \"123 Foodie Street, Flavor Town, Culinary City, 12345\";\n\n    const contactHeading = document.createElement('h2');\n    contactHeading.textContent = \"Contact Information\";\n\n    const contactInfo = document.createElement('p');\n    contactInfo.innerHTML = `\n        Phone: <a href=\"tel:+1234567890\" style=\"color:#f9c74f;\">+1 (234) 567-890</a><br>\n        Email: <a href=\"mailto:contact@mahirsrestaurant.com\" style=\"color:#f9c74f;\">contact@mahirsrestaurant.com</a>\n    `;\n\n    const hoursHeading = document.createElement('h2');\n    hoursHeading.textContent = \"Opening Hours\";\n\n    const hoursList = document.createElement('ul');\n    hoursList.style.listStyle = 'none';\n    hoursList.style.paddingLeft = '0';\n    const hours = [\n        { day: \"Monday - Friday\", time: \"10:00 AM - 10:00 PM\" },\n        { day: \"Saturday\", time: \"11:00 AM - 11:00 PM\" },\n        { day: \"Sunday\", time: \"Closed\" }\n    ];\n    hours.forEach(h => {\n        const li = document.createElement('li');\n        li.textContent = `${h.day}: ${h.time}`;\n        hoursList.appendChild(li);\n    });\n\n    const mapIframe = document.createElement('iframe');\n    mapIframe.src = \"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.019247888945!2d-122.41941548468251!3d37.77492977975964!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085809c19e3d1a1%3A0x8a1b3b7c8144f918!2s123%20Foodie%20St%2C%20San%20Francisco%2C%20CA!5e0!3m2!1sen!2sin!4v1692714890403!5m2!1sen!2sin\";\n    mapIframe.width = \"100%\";\n    mapIframe.height = \"300\";\n    mapIframe.style.border = \"0\";\n    mapIframe.loading = \"lazy\";\n    mapIframe.referrerPolicy = \"no-referrer-when-downgrade\";\n    mapIframe.allowFullscreen = true;\n\n\n    aboutContent.appendChild(contactHeading);\n    aboutContent.appendChild(contactInfo);\n    aboutContent.appendChild(hoursHeading);\n    aboutContent.appendChild(hoursList);\n    aboutContent.appendChild(locationHeading);\n    aboutContent.appendChild(locationText);\n    aboutContent.appendChild(mapIframe);\n    content.appendChild(aboutContainer);\n\n\n}\n\n//# sourceURL=webpack://resturant-page/./src/about.js?");

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   load_homepage: () => (/* binding */ load_homepage)\n/* harmony export */ });\nfunction load_homepage(content) {\n    content.innerHTML = '';\n    content.className = 'home-page';\n\n    const textWrapper = document.createElement('div');\n    textWrapper.className = 'home-content';\n    const heading = document.createElement('h1');\n    heading.className = 'home-heading';\n    heading.textContent = `Welcome to Mahir's Restaurant`;\n\n    const paragraph = document.createElement('p');\n    paragraph.className = 'home-description';\n    paragraph.textContent = 'Experience the best dining in town';\n\n    const button = document.createElement('button');\n    button.className = 'home-button';\n    button.textContent = 'Book a table';\n\n    textWrapper.appendChild(heading);\n    textWrapper.appendChild(paragraph);\n    textWrapper.appendChild(button);\n    content.appendChild(textWrapper);\n}\n\n//# sourceURL=webpack://resturant-page/./src/home.js?");

/***/ }),

/***/ "./src/images/about-image.jpg":
/*!************************************!*\
  !*** ./src/images/about-image.jpg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"7c4285ee3973109e0722.jpg\";\n\n//# sourceURL=webpack://resturant-page/./src/images/about-image.jpg?");

/***/ }),

/***/ "./src/images/burger.jpg":
/*!*******************************!*\
  !*** ./src/images/burger.jpg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"321ff82876f9e143943b.jpg\";\n\n//# sourceURL=webpack://resturant-page/./src/images/burger.jpg?");

/***/ }),

/***/ "./src/images/hakka.jpg":
/*!******************************!*\
  !*** ./src/images/hakka.jpg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"9812eb7b875c7a07ac54.jpg\";\n\n//# sourceURL=webpack://resturant-page/./src/images/hakka.jpg?");

/***/ }),

/***/ "./src/images/lavacake.jpg":
/*!*********************************!*\
  !*** ./src/images/lavacake.jpg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"047a8b57a44a3fba9afd.jpg\";\n\n//# sourceURL=webpack://resturant-page/./src/images/lavacake.jpg?");

/***/ }),

/***/ "./src/images/menu-image.jpg":
/*!***********************************!*\
  !*** ./src/images/menu-image.jpg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"f29857c07bd49dfccb05.jpg\";\n\n//# sourceURL=webpack://resturant-page/./src/images/menu-image.jpg?");

/***/ }),

/***/ "./src/images/paneer.jpg":
/*!*******************************!*\
  !*** ./src/images/paneer.jpg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"0252ece68eb44ca8d39c.jpg\";\n\n//# sourceURL=webpack://resturant-page/./src/images/paneer.jpg?");

/***/ }),

/***/ "./src/images/pasta.jpg":
/*!******************************!*\
  !*** ./src/images/pasta.jpg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"7d1650b60d55b23e4e52.jpg\";\n\n//# sourceURL=webpack://resturant-page/./src/images/pasta.jpg?");

/***/ }),

/***/ "./src/images/pizza.jpg":
/*!******************************!*\
  !*** ./src/images/pizza.jpg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"8075ceb51cf71ec70db4.jpg\";\n\n//# sourceURL=webpack://resturant-page/./src/images/pizza.jpg?");

/***/ }),

/***/ "./src/images/restaurant-interior.jpg":
/*!********************************************!*\
  !*** ./src/images/restaurant-interior.jpg ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"1947604eed0fcddda788.jpg\";\n\n//# sourceURL=webpack://resturant-page/./src/images/restaurant-interior.jpg?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _home_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.js */ \"./src/home.js\");\n/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu.js */ \"./src/menu.js\");\n/* harmony import */ var _about_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./about.js */ \"./src/about.js\");\n\n\n\n\n\nconst buttons = document.querySelectorAll(\"nav > button\");\nconst content = document.getElementById(\"content\");\n\nbuttons[0].classList.add(\"active\");\nbuttons.forEach(button => {\n    button.addEventListener(\"click\", () => {\n        buttons.forEach(btn => btn.classList.remove(\"active\"));\n        button.classList.add(\"active\");\n\n        content.innerHTML = '';\n        content.className = '';\n        content.id = 'content';\n\n        if (button.textContent === \"Home\") {\n            (0,_home_js__WEBPACK_IMPORTED_MODULE_1__.load_homepage)(content);\n        } else if (button.textContent === \"Menu\") {\n            (0,_menu_js__WEBPACK_IMPORTED_MODULE_2__.load_menu)(content);\n        } else if (button.textContent === \"About\") {\n            (0,_about_js__WEBPACK_IMPORTED_MODULE_3__.load_about)(content);\n        }\n    });\n});\n\n(0,_home_js__WEBPACK_IMPORTED_MODULE_1__.load_homepage)(content);\n\n\n//# sourceURL=webpack://resturant-page/./src/index.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   load_menu: () => (/* binding */ load_menu)\n/* harmony export */ });\n/* harmony import */ var _images_pizza_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./images/pizza.jpg */ \"./src/images/pizza.jpg\");\n/* harmony import */ var _images_pasta_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images/pasta.jpg */ \"./src/images/pasta.jpg\");\n/* harmony import */ var _images_burger_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./images/burger.jpg */ \"./src/images/burger.jpg\");\n/* harmony import */ var _images_lavacake_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./images/lavacake.jpg */ \"./src/images/lavacake.jpg\");\n/* harmony import */ var _images_paneer_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./images/paneer.jpg */ \"./src/images/paneer.jpg\");\n/* harmony import */ var _images_hakka_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./images/hakka.jpg */ \"./src/images/hakka.jpg\");\n\n\n\n\n\n\n\n\nfunction load_menu(content) {\n    content.innerHTML = '';\n    content.className = 'menu-page';\n\n    const heroSection = document.createElement(\"div\");\n    heroSection.classList.add(\"menu-hero\");\n\n    const heroText = document.createElement(\"h1\");\n    heroText.textContent = \"Our Menu\";\n    heroSection.appendChild(heroText);\n    content.appendChild(heroSection);\n    const menuContainer = document.createElement(\"div\");\n    menuContainer.classList.add(\"menu-container\");\n    const menuItems = [\n        {\n            name: \"Margherita Pizza\",\n            description: \"Classic delight with mozzarella & tomato.\",\n            price: \"₹299\",\n            image: `${_images_pizza_jpg__WEBPACK_IMPORTED_MODULE_0__}`\n        },\n        {\n            name: \"Pasta Alfredo\",\n            description: \"Creamy white sauce pasta with herbs.\",\n            price: \"₹349\",\n            image: `${_images_pasta_jpg__WEBPACK_IMPORTED_MODULE_1__}`\n        },\n        {\n            name: \"Veg Burger\",\n            description: \"Loaded veggie patty with fresh lettuce.\",\n            price: \"₹199\",\n            image: `${_images_burger_jpg__WEBPACK_IMPORTED_MODULE_2__}`\n        },\n        {\n            name: \"Chocolate Lava Cake\",\n            description: \"Molten chocolate cake with gooey center.\",\n            price: \"₹149\",\n            image: `${_images_lavacake_jpg__WEBPACK_IMPORTED_MODULE_3__}`\n        }\n        ,\n        {\n            name: \"Paneer Tikka\",\n            description: \"Chunks of paneer marinated in spices and grilled to perfection.\",\n            price: \"₹249\",\n            image: `${_images_paneer_jpg__WEBPACK_IMPORTED_MODULE_4__}`\n\n        },\n        {\n            name: \"Hakka Noodles\",\n            description: \"Stir-fried noodles tossed with veggies and flavorful sauces.\",\n            price: \"₹199\",\n            image: `${_images_hakka_jpg__WEBPACK_IMPORTED_MODULE_5__}`\n\n        },\n\n    ];\n\n    menuItems.forEach(item => {\n        const card = document.createElement(\"div\");\n        card.classList.add(\"menu-card\");\n        const img = document.createElement(\"img\");\n        img.src = item.image;\n        img.alt = item.name;\n        img.className = \"menu-img\";\n        const name = document.createElement(\"h3\");\n        name.textContent = item.name;\n\n        const desc = document.createElement(\"p\");\n        desc.textContent = item.description;\n\n        const price = document.createElement(\"span\");\n        price.textContent = item.price;\n\n        card.appendChild(img);\n        card.appendChild(name);\n        card.appendChild(desc);\n        card.appendChild(price);\n\n        menuContainer.appendChild(card);\n    });\n\n\n    content.appendChild(menuContainer);\n}\n\n//# sourceURL=webpack://resturant-page/./src/menu.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\noptions.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://resturant-page/./src/style.css?");

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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript && document.currentScript.tagName.toUpperCase() === 'SCRIPT')
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/^blob:/, "").replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
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