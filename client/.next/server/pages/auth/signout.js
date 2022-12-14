"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/auth/signout";
exports.ids = ["pages/auth/signout"];
exports.modules = {

/***/ "./hooks/use-request.js":
/*!******************************!*\
  !*** ./hooks/use-request.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (({ url , method , body , onSuccess  })=>{\n    const { 0: errors , 1: setErrors  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null);\n    const doRequest = async (props = {})=>{\n        try {\n            setErrors(null);\n            const response = await (axios__WEBPACK_IMPORTED_MODULE_1___default())[method](url, {\n                ...body,\n                ...props\n            }, {\n                withCredentials: true,\n                headers: {\n                    \"Access-Control-Allow-Origin\": \"*\",\n                    \"Content-Type\": \"application/json\"\n                }\n            });\n            if (onSuccess) {\n                onSuccess(response.data);\n            }\n            return response.data;\n        } catch (err) {\n            setErrors(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"alert alert-danger\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                        children: \"Ooops ....\"\n                    }, void 0, false, {\n                        fileName: \"/home/mgbg/Videos/dev/ticketing/client/hooks/use-request.js\",\n                        lineNumber: 29,\n                        columnNumber: 21\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                        children: err.response.data.errors.map((error)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                children: error.message\n                            }, error.message, false, {\n                                fileName: \"/home/mgbg/Videos/dev/ticketing/client/hooks/use-request.js\",\n                                lineNumber: 32,\n                                columnNumber: 29\n                            }, undefined)\n                        )\n                    }, void 0, false, {\n                        fileName: \"/home/mgbg/Videos/dev/ticketing/client/hooks/use-request.js\",\n                        lineNumber: 30,\n                        columnNumber: 21\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/mgbg/Videos/dev/ticketing/client/hooks/use-request.js\",\n                lineNumber: 28,\n                columnNumber: 17\n            }, undefined));\n        }\n    };\n    return {\n        doRequest,\n        errors\n    };\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ob29rcy91c2UtcmVxdWVzdC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBMEI7QUFDTztBQUVqQyxpRUFBZSxDQUFDLEVBQUVFLEdBQUcsR0FBRUMsTUFBTSxHQUFFQyxJQUFJLEdBQUVDLFNBQVMsR0FBRSxHQUFLO0lBRWpELE1BQU0sRUFMVixHQUtXQyxNQUFNLEdBTGpCLEdBS21CQyxTQUFTLE1BQUlOLCtDQUFRLENBQUMsSUFBSSxDQUFDO0lBRTFDLE1BQU1PLFNBQVMsR0FBRyxPQUFPQyxLQUFLLEdBQUcsRUFBRSxHQUFLO1FBRXBDLElBQUk7WUFFQUYsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ2hCLE1BQU1HLFFBQVEsR0FBRyxNQUFNViw4Q0FBSyxDQUFDRyxNQUFNLENBQUMsQ0FBQ0QsR0FBRyxFQUFFO2dCQUFFLEdBQUdFLElBQUk7Z0JBQUUsR0FBR0ssS0FBSzthQUFFLEVBQzNEO2dCQUNJRSxlQUFlLEVBQUUsSUFBSTtnQkFDckJDLE9BQU8sRUFBRTtvQkFBRSw2QkFBNkIsRUFBRSxHQUFHO29CQUFFLGNBQWMsRUFBRSxrQkFBa0I7aUJBQUU7YUFDdEYsQ0FDSjtZQUNELElBQUlQLFNBQVMsRUFBRTtnQkFDWEEsU0FBUyxDQUFDSyxRQUFRLENBQUNHLElBQUksQ0FBQyxDQUFDO2FBQzVCO1lBRUQsT0FBT0gsUUFBUSxDQUFDRyxJQUFJLENBQUM7U0FFeEIsQ0FBQyxPQUFPQyxHQUFHLEVBQUU7WUFFVlAsU0FBUyxlQUNMLDhEQUFDUSxLQUFHO2dCQUFDQyxTQUFTLEVBQUMsb0JBQW9COztrQ0FDL0IsOERBQUNDLE9BQUs7a0NBQUMsWUFBVTs7Ozs7aUNBQVE7a0NBQ3pCLDhEQUFDQyxJQUFFO2tDQUNFSixHQUFHLENBQUNKLFFBQVEsQ0FBQ0csSUFBSSxDQUFDUCxNQUFNLENBQUNhLEdBQUcsQ0FBQ0MsQ0FBQUEsS0FBSyxpQkFDL0IsOERBQUNDLElBQUU7MENBQXNCRCxLQUFLLENBQUNFLE9BQU87K0JBQTdCRixLQUFLLENBQUNFLE9BQU87Ozs7eUNBQXNCO3dCQUFBLENBQy9DOzs7OztpQ0FDQTs7Ozs7O3lCQUNILENBQ1QsQ0FBQztTQUVMO0tBQ0o7SUFFRCxPQUFPO1FBQUVkLFNBQVM7UUFBRUYsTUFBTTtLQUFFO0NBQy9CIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY2xpZW50Ly4vaG9va3MvdXNlLXJlcXVlc3QuanM/YTQ2YiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5cbmV4cG9ydCBkZWZhdWx0ICh7IHVybCwgbWV0aG9kLCBib2R5LCBvblN1Y2Nlc3MgfSkgPT4ge1xuXG4gICAgY29uc3QgW2Vycm9ycywgc2V0RXJyb3JzXSA9IHVzZVN0YXRlKG51bGwpO1xuICAgIFxuICAgIGNvbnN0IGRvUmVxdWVzdCA9IGFzeW5jIChwcm9wcyA9IHt9KSA9PiB7XG5cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgc2V0RXJyb3JzKG51bGwpO1xuICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvc1ttZXRob2RdKHVybCwgeyAuLi5ib2R5LCAuLi5wcm9wcyB9LCBcbiAgICAgICAgICAgICAgICB7IFxuICAgICAgICAgICAgICAgICAgICB3aXRoQ3JlZGVudGlhbHM6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIGhlYWRlcnM6IHsgJ0FjY2Vzcy1Db250cm9sLUFsbG93LU9yaWdpbic6ICcqJywgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIGlmIChvblN1Y2Nlc3MpIHtcbiAgICAgICAgICAgICAgICBvblN1Y2Nlc3MocmVzcG9uc2UuZGF0YSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHJldHVybiByZXNwb25zZS5kYXRhOyBcblxuICAgICAgICB9IGNhdGNoIChlcnIpIHtcblxuICAgICAgICAgICAgc2V0RXJyb3JzKFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWxlcnQgYWxlcnQtZGFuZ2VyXCI+XG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbD5Pb29wcyAuLi4uPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICAgICAgICAgICAge2Vyci5yZXNwb25zZS5kYXRhLmVycm9ycy5tYXAoZXJyb3IgPT4gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGtleT17ZXJyb3IubWVzc2FnZX0+e2Vycm9yLm1lc3NhZ2V9PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApO1xuXG4gICAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgcmV0dXJuIHsgZG9SZXF1ZXN0LCBlcnJvcnMgfVxufVxuIl0sIm5hbWVzIjpbImF4aW9zIiwidXNlU3RhdGUiLCJ1cmwiLCJtZXRob2QiLCJib2R5Iiwib25TdWNjZXNzIiwiZXJyb3JzIiwic2V0RXJyb3JzIiwiZG9SZXF1ZXN0IiwicHJvcHMiLCJyZXNwb25zZSIsIndpdGhDcmVkZW50aWFscyIsImhlYWRlcnMiLCJkYXRhIiwiZXJyIiwiZGl2IiwiY2xhc3NOYW1lIiwibGFiZWwiLCJ1bCIsIm1hcCIsImVycm9yIiwibGkiLCJtZXNzYWdlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./hooks/use-request.js\n");

/***/ }),

/***/ "./pages/auth/signout.js":
/*!*******************************!*\
  !*** ./pages/auth/signout.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _hooks_use_request__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../hooks/use-request */ \"./hooks/use-request.js\");\n\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (()=>{\n    const { doRequest  } = (0,_hooks_use_request__WEBPACK_IMPORTED_MODULE_3__[\"default\"])({\n        method: \"post\",\n        url: \"/api/users/signout\",\n        body: {},\n        onSuccess: ()=>next_router__WEBPACK_IMPORTED_MODULE_2___default().push(\"/\")\n    });\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        doRequest();\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: \"Signing out ...\"\n    }, void 0, false, {\n        fileName: \"/home/mgbg/Videos/dev/ticketing/client/pages/auth/signout.js\",\n        lineNumber: 19,\n        columnNumber: 9\n    }, undefined);\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9hdXRoL3NpZ25vdXQuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTtBQUFrQztBQUNEO0FBQ2dCO0FBRWpELGlFQUFlLElBQU07SUFFakIsTUFBTSxFQUFFRyxTQUFTLEdBQUUsR0FBR0QsOERBQVUsQ0FBQztRQUM3QkUsTUFBTSxFQUFFLE1BQU07UUFDZEMsR0FBRyxFQUFFLG9CQUFvQjtRQUN6QkMsSUFBSSxFQUFFLEVBQUU7UUFDUkMsU0FBUyxFQUFFLElBQU1OLHVEQUFXLENBQUMsR0FBRyxDQUFDO0tBQ3BDLENBQUM7SUFFRkQsZ0RBQVMsQ0FBQyxJQUFNO1FBQ1pHLFNBQVMsRUFBRTtLQUNkLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFFUCxxQkFDSSw4REFBQ00sS0FBRztrQkFBQyxpQkFBZTs7Ozs7aUJBQU0sQ0FDN0I7Q0FDSiIsInNvdXJjZXMiOlsid2VicGFjazovL2NsaWVudC8uL3BhZ2VzL2F1dGgvc2lnbm91dC5qcz8xNGU1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCByb3V0ZXIgZnJvbSAnbmV4dC9yb3V0ZXInO1xuaW1wb3J0IHVzZVJlcXVlc3QgZnJvbSAnLi4vLi4vaG9va3MvdXNlLXJlcXVlc3QnO1xuXG5leHBvcnQgZGVmYXVsdCAoKSA9PiB7XG5cbiAgICBjb25zdCB7IGRvUmVxdWVzdCB9ID0gdXNlUmVxdWVzdCh7XG4gICAgICAgIG1ldGhvZDogJ3Bvc3QnLFxuICAgICAgICB1cmw6ICcvYXBpL3VzZXJzL3NpZ25vdXQnLFxuICAgICAgICBib2R5OiB7fSxcbiAgICAgICAgb25TdWNjZXNzOiAoKSA9PiByb3V0ZXIucHVzaCgnLycpXG4gICAgfSk7XG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBkb1JlcXVlc3QoKVxuICAgIH0sIFtdKTtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXY+U2lnbmluZyBvdXQgLi4uPC9kaXY+XG4gICAgKVxufSJdLCJuYW1lcyI6WyJ1c2VFZmZlY3QiLCJyb3V0ZXIiLCJ1c2VSZXF1ZXN0IiwiZG9SZXF1ZXN0IiwibWV0aG9kIiwidXJsIiwiYm9keSIsIm9uU3VjY2VzcyIsInB1c2giLCJkaXYiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/auth/signout.js\n");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/auth/signout.js"));
module.exports = __webpack_exports__;

})();