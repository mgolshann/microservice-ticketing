"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./components/header.js":
/*!******************************!*\
  !*** ./components/header.js ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* export default binding */ __WEBPACK_DEFAULT_EXPORT__; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\nvar _this = undefined;\n\n\n/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(param1) {\n    var currentuser = param1.currentuser;\n    var _this1 = _this;\n    var links = [\n        !currentuser && {\n            label: \"Sign Up\",\n            href: \"/auth/signup\"\n        },\n        !currentuser && {\n            label: \"Sign In\",\n            href: \"/auth/signin\"\n        },\n        currentuser && {\n            label: \"Sign In\",\n            href: \"/orders\"\n        },\n        currentuser && {\n            label: \"Sell Ticket\",\n            href: \"/tickets/new\"\n        },\n        currentuser && {\n            label: \"Sign Out\",\n            href: \"/auth/signout\"\n        }, \n    ].filter(function(trueCondition) {\n        return trueCondition;\n    }).map(function(param) {\n        var label = param.label, href = param.href;\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                href: href,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                    className: \"nav-link\",\n                    children: label\n                }, void 0, false, {\n                    fileName: \"/home/mgbg/Videos/dev/ticketing/client/components/header.js\",\n                    lineNumber: 17,\n                    columnNumber: 13\n                }, _this1)\n            }, void 0, false, {\n                fileName: \"/home/mgbg/Videos/dev/ticketing/client/components/header.js\",\n                lineNumber: 16,\n                columnNumber: 11\n            }, _this1)\n        }, href, false, {\n            fileName: \"/home/mgbg/Videos/dev/ticketing/client/components/header.js\",\n            lineNumber: 15,\n            columnNumber: 9\n        }, _this1);\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n        className: \"navbar navbar-light bg-light\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                href: \"/\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                    className: \"navbar-brand\",\n                    children: \"Ticketing\"\n                }, void 0, false, {\n                    fileName: \"/home/mgbg/Videos/dev/ticketing/client/components/header.js\",\n                    lineNumber: 28,\n                    columnNumber: 9\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/home/mgbg/Videos/dev/ticketing/client/components/header.js\",\n                lineNumber: 27,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"d-flex justify-content-end\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                    className: \"nav d-flex align-items-center\",\n                    children: links\n                }, void 0, false, {\n                    fileName: \"/home/mgbg/Videos/dev/ticketing/client/components/header.js\",\n                    lineNumber: 32,\n                    columnNumber: 9\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/home/mgbg/Videos/dev/ticketing/client/components/header.js\",\n                lineNumber: 31,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/mgbg/Videos/dev/ticketing/client/components/header.js\",\n        lineNumber: 25,\n        columnNumber: 5\n    }, _this);\n};\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2hlYWRlci5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOztBQUE2QjtBQUU3Qiw2QkFBZSw0Q0FBcUI7UUFBbEJDLFdBQVcsVUFBWEEsV0FBVzs7SUFFM0IsSUFBTUMsS0FBSyxHQUFHO1FBQ1osQ0FBQ0QsV0FBVyxJQUFJO1lBQUVFLEtBQUssRUFBRSxTQUFTO1lBQUVDLElBQUksRUFBRSxjQUFjO1NBQUU7UUFDMUQsQ0FBQ0gsV0FBVyxJQUFJO1lBQUVFLEtBQUssRUFBRSxTQUFTO1lBQUVDLElBQUksRUFBRSxjQUFjO1NBQUU7UUFDMURILFdBQVcsSUFBSTtZQUFFRSxLQUFLLEVBQUUsU0FBUztZQUFFQyxJQUFJLEVBQUUsU0FBUztTQUFFO1FBQ3BESCxXQUFXLElBQUk7WUFBRUUsS0FBSyxFQUFFLGFBQWE7WUFBRUMsSUFBSSxFQUFFLGNBQWM7U0FBRTtRQUM3REgsV0FBVyxJQUFJO1lBQUVFLEtBQUssRUFBRSxVQUFVO1lBQUVDLElBQUksRUFBRSxlQUFlO1NBQUU7S0FDNUQsQ0FDRUMsTUFBTSxDQUFDQyxTQUFBQSxhQUFhO2VBQUlBLGFBQWE7S0FBQSxDQUFDLENBQ3RDQyxHQUFHLENBQUMsZ0JBQXFCO1lBQWxCSixLQUFLLFNBQUxBLEtBQUssRUFBRUMsSUFBSSxTQUFKQSxJQUFJO1FBQ2pCLHFCQUNFLDhEQUFDSSxJQUFFO3NCQUNELDRFQUFDUixrREFBSTtnQkFBQ0ksSUFBSSxFQUFFQSxJQUFJOzBCQUNkLDRFQUFDSyxHQUFDO29CQUFDQyxTQUFTLEVBQUMsVUFBVTs4QkFBRVAsS0FBSzs7Ozs7MEJBQUs7Ozs7O3NCQUM5QjtXQUhBQyxJQUFJOzs7O2tCQUlSLENBQ047S0FDRixDQUFDO0lBRUoscUJBRUUsOERBQUNPLEtBQUc7UUFBQ0QsU0FBUyxFQUFDLDhCQUE4Qjs7MEJBRTNDLDhEQUFDVixrREFBSTtnQkFBQ0ksSUFBSSxFQUFDLEdBQUc7MEJBQ1osNEVBQUNLLEdBQUM7b0JBQUNDLFNBQVMsRUFBQyxjQUFjOzhCQUFDLFdBQVM7Ozs7O3lCQUFJOzs7OztxQkFDcEM7MEJBRVAsOERBQUNFLEtBQUc7Z0JBQUNGLFNBQVMsRUFBQyw0QkFBNEI7MEJBQ3pDLDRFQUFDRyxJQUFFO29CQUFDSCxTQUFTLEVBQUMsK0JBQStCOzhCQUMxQ1IsS0FBSzs7Ozs7eUJBQ0g7Ozs7O3FCQUNEOzs7Ozs7YUFFRixDQUNQO0NBQ0YiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9oZWFkZXIuanM/YzA5OCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuXG5leHBvcnQgZGVmYXVsdCAoeyBjdXJyZW50dXNlciB9KSA9PiB7XG5cbiAgY29uc3QgbGlua3MgPSBbXG4gICAgIWN1cnJlbnR1c2VyICYmIHsgbGFiZWw6ICdTaWduIFVwJywgaHJlZjogJy9hdXRoL3NpZ251cCcgfSxcbiAgICAhY3VycmVudHVzZXIgJiYgeyBsYWJlbDogJ1NpZ24gSW4nLCBocmVmOiAnL2F1dGgvc2lnbmluJyB9LFxuICAgIGN1cnJlbnR1c2VyICYmIHsgbGFiZWw6ICdTaWduIEluJywgaHJlZjogJy9vcmRlcnMnIH0sXG4gICAgY3VycmVudHVzZXIgJiYgeyBsYWJlbDogJ1NlbGwgVGlja2V0JywgaHJlZjogJy90aWNrZXRzL25ldycgfSxcbiAgICBjdXJyZW50dXNlciAmJiB7IGxhYmVsOiAnU2lnbiBPdXQnLCBocmVmOiAnL2F1dGgvc2lnbm91dCcgfSxcbiAgXVxuICAgIC5maWx0ZXIodHJ1ZUNvbmRpdGlvbiA9PiB0cnVlQ29uZGl0aW9uKVxuICAgIC5tYXAoKHsgbGFiZWwsIGhyZWYgfSkgPT4ge1xuICAgICAgcmV0dXJuICggXG4gICAgICAgIDxsaSBrZXk9e2hyZWZ9PlxuICAgICAgICAgIDxMaW5rIGhyZWY9e2hyZWZ9PlxuICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwibmF2LWxpbmtcIj57bGFiZWx9PC9hPlxuICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgPC9saT5cbiAgICAgIClcbiAgICB9KTtcblxuICByZXR1cm4gKFxuXG4gICAgPG5hdiBjbGFzc05hbWU9XCJuYXZiYXIgbmF2YmFyLWxpZ2h0IGJnLWxpZ2h0XCI+XG4gICAgICBcbiAgICAgIDxMaW5rIGhyZWY9XCIvXCI+XG4gICAgICAgIDxhIGNsYXNzTmFtZT1cIm5hdmJhci1icmFuZFwiPlRpY2tldGluZzwvYT5cbiAgICAgIDwvTGluaz5cblxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJkLWZsZXgganVzdGlmeS1jb250ZW50LWVuZFwiPlxuICAgICAgICA8dWwgY2xhc3NOYW1lPVwibmF2IGQtZmxleCBhbGlnbi1pdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgICB7bGlua3N9XG4gICAgICAgIDwvdWw+XG4gICAgICA8L2Rpdj5cblxuICAgIDwvbmF2PlxuICApXG59Il0sIm5hbWVzIjpbIkxpbmsiLCJjdXJyZW50dXNlciIsImxpbmtzIiwibGFiZWwiLCJocmVmIiwiZmlsdGVyIiwidHJ1ZUNvbmRpdGlvbiIsIm1hcCIsImxpIiwiYSIsImNsYXNzTmFtZSIsIm5hdiIsImRpdiIsInVsIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/header.js\n");

/***/ })

});