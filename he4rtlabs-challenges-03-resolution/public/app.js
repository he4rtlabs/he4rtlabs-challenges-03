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

/***/ "./src/Handlers/onLogin.js":
/*!*********************************!*\
  !*** ./src/Handlers/onLogin.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ onLogin)\n/* harmony export */ });\n/* harmony import */ var _onRegister__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./onRegister */ \"./src/Handlers/onRegister.js\");\n/* eslint-disable import/no-cycle */\r\n/* eslint-disable no-param-reassign */\r\n/* eslint-disable no-return-assign */\r\n\r\n\r\nfunction onLogin(e) {\r\n  e.preventDefault();\r\n  document.getElementById('App').innerHTML = '';\r\n  document.getElementById('App').innerHTML =\r\n    '<form class=\"LoginForm\" id=\"LoginForm\"><label for=\"username\">Usuário</label><input id=\"username\" type=\"text\" placeholder=\"Digite seu usuário\" /><label for=\"password\">Senha</label><input id=\"password\" type=\"password\" placeholder=\"Digite sua senha\" /><button type=\"submit\">Login</button></form>';\r\n  document.getElementById('Wrapper').style.backgroundColor = '#121212';\r\n  document.getElementById('Footer').style.backgroundColor = '#fff';\r\n  document.getElementById('BackgroundForm').style.backgroundColor = '#fff';\r\n  document.getElementById('BackgroundForm').style.borderColor = '#BB86FC';\r\n  // eslint-disable-next-line no-return-assign\r\n  document\r\n    .querySelectorAll('label')\r\n    .forEach((l) => (l.style.color = '#121212'));\r\n  document.getElementById('FooterButton').style.borderColor = '#BB86FC';\r\n  document.getElementById('FooterButton').innerText = 'Register';\r\n  document.getElementById('Logo').src = './images/he4rt-footer-white.png';\r\n  document.getElementById('FooterButton').onclick = (event) =>\r\n    (0,_onRegister__WEBPACK_IMPORTED_MODULE_0__.default)(event);\r\n}\r\n\n\n//# sourceURL=webpack://my-webpack-project/./src/Handlers/onLogin.js?");

/***/ }),

/***/ "./src/Handlers/onRegister.js":
/*!************************************!*\
  !*** ./src/Handlers/onRegister.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _onLogin__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./onLogin */ \"./src/Handlers/onLogin.js\");\n/* eslint-disable import/no-cycle */\r\n/* eslint-disable no-param-reassign */\r\n\r\n\r\n/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(e) {\r\n  e.preventDefault();\r\n  setTimeout(() => {\r\n    document.getElementById('Wrapper').style.backgroundColor = '#BB86FC';\r\n    document.getElementById('App').innerHTML = '';\r\n    document.getElementById('App').innerHTML =\r\n      '<form class=\"RegisterForm\" id=\"RegisterForm\"><label for=\"username\">Usuário</label><input id=\"username\" type=\"text\" placeholder=\"Digite seu usuário\" /><label for=\"username\">Email</label><input id=\"email\" type=\"text\" placeholder=\"Digite seu usuário\" /><label for=\"username\">Senha</label><input id=\"password\" type=\"password\" placeholder=\"Digite seu usuário\" /><label for=\"password\">Confirmação de Senha</label><input id=\"passwordConfirm\" type=\"password\" placeholder=\"Digite sua senha novamente\"/><button type=\"submit\">Registrar</button></form>';\r\n    document.getElementById('Footer').style.backgroundColor = '#121212';\r\n    document.getElementById('BackgroundForm').style.backgroundColor = '#121212';\r\n    document.getElementById('BackgroundForm').style.borderColor = '#fff';\r\n    // eslint-disable-next-line no-return-assign\r\n    document.querySelectorAll('label').forEach((l) => (l.style.color = '#fff'));\r\n    document.getElementById('FooterButton').style.borderColor = '#fff';\r\n    document.getElementById('FooterButton').innerText = 'Login';\r\n    document.getElementById('Logo').src = './images/he4rt-footer-black.png';\r\n    document.getElementById('FooterButton').onclick = (event) => (0,_onLogin__WEBPACK_IMPORTED_MODULE_0__.default)(event);\r\n  }, 300);\r\n}\r\n\n\n//# sourceURL=webpack://my-webpack-project/./src/Handlers/onRegister.js?");

/***/ }),

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_global_sass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/global.sass */ \"./src/styles/global.sass\");\n/* harmony import */ var _styles_body_sass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles/body.sass */ \"./src/styles/body.sass\");\n/* harmony import */ var _assets_he4rt_footer_white_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/he4rt-footer-white.png */ \"./assets/he4rt-footer-white.png\");\n/* harmony import */ var _styles_logo_sass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles/logo.sass */ \"./src/styles/logo.sass\");\n/* harmony import */ var _styles_footer_sass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./styles/footer.sass */ \"./src/styles/footer.sass\");\n/* harmony import */ var _styles_backgroundForm_sass__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./styles/backgroundForm.sass */ \"./src/styles/backgroundForm.sass\");\n/* harmony import */ var _styles_loginForm_sass__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./styles/loginForm.sass */ \"./src/styles/loginForm.sass\");\n/* harmony import */ var _styles_registerForm_sass__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./styles/registerForm.sass */ \"./src/styles/registerForm.sass\");\n/* harmony import */ var _assets_he4rt_footer_black_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../assets/he4rt-footer-black.png */ \"./assets/he4rt-footer-black.png\");\n/* harmony import */ var _Handlers_onRegister__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Handlers/onRegister */ \"./src/Handlers/onRegister.js\");\n/* eslint-disable no-multi-assign */\r\n/* eslint-disable no-unused-vars */\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n// JS\r\n\r\n\r\n\r\n// const App = (document.createElement('div').innerHTML =\r\n//   '<form class=\"LoginForm\"><label for=\"username\">Usuário</label><input id=\"username\" type=\"text\" placeholder=\"Digite seu usuário\" /><label for=\"password\">Senha</label><input id=\"password\" type=\"password\" placeholder=\"Digite sua senha\" /><button>Login</button></form>');\r\n\r\ndocument.getElementById('App').innerHTML =\r\n  '<form class=\"LoginForm\" id=\"LoginForm\"><label for=\"username\">Usuário</label><input id=\"username\" type=\"text\" placeholder=\"Digite seu usuário\" /><label for=\"password\">Senha</label><input id=\"password\" type=\"password\" placeholder=\"Digite sua senha\" /><button type=\"submit\">Login</button></form>';\r\ndocument.getElementById('FooterButton').onclick = (e) => (0,_Handlers_onRegister__WEBPACK_IMPORTED_MODULE_9__.default)(e);\r\n\n\n//# sourceURL=webpack://my-webpack-project/./src/app.js?");

/***/ }),

/***/ "./assets/he4rt-footer-black.png":
/*!***************************************!*\
  !*** ./assets/he4rt-footer-black.png ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"images/he4rt-footer-black.png\");\n\n//# sourceURL=webpack://my-webpack-project/./assets/he4rt-footer-black.png?");

/***/ }),

/***/ "./assets/he4rt-footer-white.png":
/*!***************************************!*\
  !*** ./assets/he4rt-footer-white.png ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"images/he4rt-footer-white.png\");\n\n//# sourceURL=webpack://my-webpack-project/./assets/he4rt-footer-white.png?");

/***/ }),

/***/ "./src/styles/backgroundForm.sass":
/*!****************************************!*\
  !*** ./src/styles/backgroundForm.sass ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://my-webpack-project/./src/styles/backgroundForm.sass?");

/***/ }),

/***/ "./src/styles/body.sass":
/*!******************************!*\
  !*** ./src/styles/body.sass ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://my-webpack-project/./src/styles/body.sass?");

/***/ }),

/***/ "./src/styles/footer.sass":
/*!********************************!*\
  !*** ./src/styles/footer.sass ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://my-webpack-project/./src/styles/footer.sass?");

/***/ }),

/***/ "./src/styles/global.sass":
/*!********************************!*\
  !*** ./src/styles/global.sass ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://my-webpack-project/./src/styles/global.sass?");

/***/ }),

/***/ "./src/styles/loginForm.sass":
/*!***********************************!*\
  !*** ./src/styles/loginForm.sass ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://my-webpack-project/./src/styles/loginForm.sass?");

/***/ }),

/***/ "./src/styles/logo.sass":
/*!******************************!*\
  !*** ./src/styles/logo.sass ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://my-webpack-project/./src/styles/logo.sass?");

/***/ }),

/***/ "./src/styles/registerForm.sass":
/*!**************************************!*\
  !*** ./src/styles/registerForm.sass ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://my-webpack-project/./src/styles/registerForm.sass?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
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
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./src/app.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;