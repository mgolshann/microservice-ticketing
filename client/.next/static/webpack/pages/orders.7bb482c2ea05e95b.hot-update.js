"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/orders",{

/***/ "./pages/orders/index.js":
/*!*******************************!*\
  !*** ./pages/orders/index.js ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _home_mgbg_Videos_dev_ticketing_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _home_mgbg_Videos_dev_ticketing_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_home_mgbg_Videos_dev_ticketing_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\n\nvar _this = undefined;\n\nvar OrderList = function(param) {\n    var orders1 = param.orders;\n    var _this1 = _this;\n    console.log(orders1);\n    var showOrders = function(orders) {\n        var _this2 = _this1;\n        return orders.map(function(order, index) {\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"tr\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"th\", {\n                        scope: \"row\",\n                        children: index + 1\n                    }, void 0, false, {\n                        fileName: \"/home/mgbg/Videos/dev/ticketing/client/pages/orders/index.js\",\n                        lineNumber: 8,\n                        columnNumber: 21\n                    }, _this2),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"td\", {\n                        children: order.ticket.title\n                    }, void 0, false, {\n                        fileName: \"/home/mgbg/Videos/dev/ticketing/client/pages/orders/index.js\",\n                        lineNumber: 9,\n                        columnNumber: 21\n                    }, _this2),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"td\", {\n                        children: order.ticket.price\n                    }, void 0, false, {\n                        fileName: \"/home/mgbg/Videos/dev/ticketing/client/pages/orders/index.js\",\n                        lineNumber: 10,\n                        columnNumber: 21\n                    }, _this2),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"td\", {\n                        children: order.status\n                    }, void 0, false, {\n                        fileName: \"/home/mgbg/Videos/dev/ticketing/client/pages/orders/index.js\",\n                        lineNumber: 11,\n                        columnNumber: 21\n                    }, _this2),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"td\", {\n                        children: new Date(order.createdAt).toString().slice(0, 10)\n                    }, void 0, false, {\n                        fileName: \"/home/mgbg/Videos/dev/ticketing/client/pages/orders/index.js\",\n                        lineNumber: 12,\n                        columnNumber: 21\n                    }, _this2)\n                ]\n            }, order.id, true, {\n                fileName: \"/home/mgbg/Videos/dev/ticketing/client/pages/orders/index.js\",\n                lineNumber: 7,\n                columnNumber: 17\n            }, _this2);\n        });\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"table\", {\n            className: \"table\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"caption\", {\n                    children: \"list of orders\"\n                }, void 0, false, {\n                    fileName: \"/home/mgbg/Videos/dev/ticketing/client/pages/orders/index.js\",\n                    lineNumber: 22,\n                    columnNumber: 13\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"thead\", {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"tr\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"th\", {\n                                scope: \"col\",\n                                children: \"#\"\n                            }, void 0, false, {\n                                fileName: \"/home/mgbg/Videos/dev/ticketing/client/pages/orders/index.js\",\n                                lineNumber: 25,\n                                columnNumber: 25\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"th\", {\n                                scope: \"col\",\n                                children: \"title\"\n                            }, void 0, false, {\n                                fileName: \"/home/mgbg/Videos/dev/ticketing/client/pages/orders/index.js\",\n                                lineNumber: 26,\n                                columnNumber: 25\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"th\", {\n                                scope: \"col\",\n                                children: \"price\"\n                            }, void 0, false, {\n                                fileName: \"/home/mgbg/Videos/dev/ticketing/client/pages/orders/index.js\",\n                                lineNumber: 27,\n                                columnNumber: 25\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"th\", {\n                                scope: \"col\",\n                                children: \"status\"\n                            }, void 0, false, {\n                                fileName: \"/home/mgbg/Videos/dev/ticketing/client/pages/orders/index.js\",\n                                lineNumber: 28,\n                                columnNumber: 25\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"th\", {\n                                scope: \"col\",\n                                children: \"Date\"\n                            }, void 0, false, {\n                                fileName: \"/home/mgbg/Videos/dev/ticketing/client/pages/orders/index.js\",\n                                lineNumber: 29,\n                                columnNumber: 25\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/mgbg/Videos/dev/ticketing/client/pages/orders/index.js\",\n                        lineNumber: 24,\n                        columnNumber: 21\n                    }, _this)\n                }, void 0, false, {\n                    fileName: \"/home/mgbg/Videos/dev/ticketing/client/pages/orders/index.js\",\n                    lineNumber: 23,\n                    columnNumber: 17\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"tbody\", {\n                    children: showOrders(orders1)\n                }, void 0, false, {\n                    fileName: \"/home/mgbg/Videos/dev/ticketing/client/pages/orders/index.js\",\n                    lineNumber: 32,\n                    columnNumber: 17\n                }, _this)\n            ]\n        }, void 0, true, {\n            fileName: \"/home/mgbg/Videos/dev/ticketing/client/pages/orders/index.js\",\n            lineNumber: 21,\n            columnNumber: 9\n        }, _this)\n    }, void 0, false, {\n        fileName: \"/home/mgbg/Videos/dev/ticketing/client/pages/orders/index.js\",\n        lineNumber: 20,\n        columnNumber: 5\n    }, _this);\n};\n_c = OrderList;\nOrderList.getInitialProps = function() {\n    var _ref = _asyncToGenerator(_home_mgbg_Videos_dev_ticketing_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(context, client) {\n        var data;\n        return _home_mgbg_Videos_dev_ticketing_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n            while(1)switch(_ctx.prev = _ctx.next){\n                case 0:\n                    _ctx.next = 2;\n                    return client.get(\"/api/orders\");\n                case 2:\n                    data = _ctx.sent.data;\n                    return _ctx.abrupt(\"return\", {\n                        orders: data\n                    });\n                case 4:\n                case \"end\":\n                    return _ctx.stop();\n            }\n        }, _callee);\n    }));\n    return function(context, client) {\n        return _ref.apply(this, arguments);\n    };\n}();\n/* harmony default export */ __webpack_exports__[\"default\"] = (OrderList);\nvar _c;\n$RefreshReg$(_c, \"OrderList\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9vcmRlcnMvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFNQSxTQUFTLEdBQUcsZ0JBQWdCO1FBQWJDLE9BQU0sU0FBTkEsTUFBTTs7SUFDM0JDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDRixPQUFNLENBQUM7SUFDZixJQUFNRyxVQUFVLEdBQUcsU0FBQ0gsTUFBTSxFQUFLOztRQUMzQixPQUFPQSxNQUFNLENBQUNJLEdBQUcsQ0FBQyxTQUFDQyxLQUFLLEVBQUVDLEtBQUssRUFBSztZQUNoQyxxQkFDSSw4REFBQ0MsSUFBRTs7a0NBQ0MsOERBQUNDLElBQUU7d0JBQUNDLEtBQUssRUFBQyxLQUFLO2tDQUFFSCxLQUFLLEdBQUcsQ0FBQzs7Ozs7OEJBQU07a0NBQ2hDLDhEQUFDSSxJQUFFO2tDQUFFTCxLQUFLLENBQUNNLE1BQU0sQ0FBQ0MsS0FBSzs7Ozs7OEJBQU07a0NBQzdCLDhEQUFDRixJQUFFO2tDQUFFTCxLQUFLLENBQUNNLE1BQU0sQ0FBQ0UsS0FBSzs7Ozs7OEJBQU07a0NBQzdCLDhEQUFDSCxJQUFFO2tDQUFFTCxLQUFLLENBQUNTLE1BQU07Ozs7OzhCQUFNO2tDQUN2Qiw4REFBQ0osSUFBRTtrQ0FBRSxJQUFJSyxJQUFJLENBQUNWLEtBQUssQ0FBQ1csU0FBUyxDQUFDLENBQUNDLFFBQVEsRUFBRSxDQUFDQyxLQUFLLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQzs7Ozs7OEJBQU07O2VBTHZEYixLQUFLLENBQUNjLEVBQUU7Ozs7c0JBTVosQ0FDUjtTQUNKLENBQUM7S0FDTDtJQUdELHFCQUNBLDhEQUFDQyxLQUFHO2tCQUNBLDRFQUFDQyxPQUFLO1lBQUNDLFNBQVMsRUFBQyxPQUFPOzs4QkFDcEIsOERBQUNDLFNBQU87OEJBQUMsZ0JBQWM7Ozs7O3lCQUFVOzhCQUM3Qiw4REFBQ0MsT0FBSzs4QkFDRiw0RUFBQ2pCLElBQUU7OzBDQUNDLDhEQUFDQyxJQUFFO2dDQUFDQyxLQUFLLEVBQUMsS0FBSzswQ0FBQyxHQUFDOzs7OztxQ0FBSzswQ0FDdEIsOERBQUNELElBQUU7Z0NBQUNDLEtBQUssRUFBQyxLQUFLOzBDQUFDLE9BQUs7Ozs7O3FDQUFLOzBDQUMxQiw4REFBQ0QsSUFBRTtnQ0FBQ0MsS0FBSyxFQUFDLEtBQUs7MENBQUMsT0FBSzs7Ozs7cUNBQUs7MENBQzFCLDhEQUFDRCxJQUFFO2dDQUFDQyxLQUFLLEVBQUMsS0FBSzswQ0FBQyxRQUFNOzs7OztxQ0FBSzswQ0FDM0IsOERBQUNELElBQUU7Z0NBQUNDLEtBQUssRUFBQyxLQUFLOzBDQUFDLE1BQUk7Ozs7O3FDQUFLOzs7Ozs7NkJBQ3hCOzs7Ozt5QkFDRDs4QkFDUiw4REFBQ2dCLE9BQUs7OEJBQ0F0QixVQUFVLENBQUNILE9BQU0sQ0FBQzs7Ozs7eUJBQ2hCOzs7Ozs7aUJBQ1I7Ozs7O2FBQ04sQ0FDTDtDQUdKO0FBdENLRCxLQUFBQSxTQUFTO0FBd0NmQSxTQUFTLENBQUMyQixlQUFlO2VBQUcscUxBQU9DLE9BQU8sRUFBRUMsTUFBTSxFQUFLO1lBQzNDQyxJQUFJOzs7OzsyQkFBV0QsTUFBTSxDQUFDRSxHQUFHLENBQUMsYUFBYSxDQUFDOztvQkFBMUMsSUFBTSxhQUFKRCxJQUFJLENBQW9DO2lEQUV6Qzt3QkFBRTdCLE1BQU0sRUFBRTZCLElBQUk7cUJBQUU7Ozs7OztLQUMxQjtvQkFKa0NGLE9BQU8sRUFBRUMsTUFBTTs7O0dBSWpEO0FBRUQsK0RBQWU3QixTQUFTLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvb3JkZXJzL2luZGV4LmpzPzEyMmQiXSwic291cmNlc0NvbnRlbnQiOlsiXG5jb25zdCBPcmRlckxpc3QgPSAoeyBvcmRlcnMgfSkgPT4ge1xuY29uc29sZS5sb2cob3JkZXJzKVxuICAgIGNvbnN0IHNob3dPcmRlcnMgPSAob3JkZXJzKSA9PiB7XG4gICAgICAgIHJldHVybiBvcmRlcnMubWFwKChvcmRlciwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgPHRyIGtleT17b3JkZXIuaWR9PlxuICAgICAgICAgICAgICAgICAgICA8dGggc2NvcGU9XCJyb3dcIj57aW5kZXggKyAxfTwvdGg+XG4gICAgICAgICAgICAgICAgICAgIDx0ZD57b3JkZXIudGlja2V0LnRpdGxlfTwvdGQ+XG4gICAgICAgICAgICAgICAgICAgIDx0ZD57b3JkZXIudGlja2V0LnByaWNlfTwvdGQ+XG4gICAgICAgICAgICAgICAgICAgIDx0ZD57b3JkZXIuc3RhdHVzfTwvdGQ+XG4gICAgICAgICAgICAgICAgICAgIDx0ZD57bmV3IERhdGUob3JkZXIuY3JlYXRlZEF0KS50b1N0cmluZygpLnNsaWNlKDAsIDEwKX08L3RkPlxuICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICApXG4gICAgICAgIH0pXG4gICAgfVxuXG5cbiAgICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICAgIDx0YWJsZSBjbGFzc05hbWU9XCJ0YWJsZVwiPlxuICAgICAgICAgICAgPGNhcHRpb24+bGlzdCBvZiBvcmRlcnM8L2NhcHRpb24+XG4gICAgICAgICAgICAgICAgPHRoZWFkPlxuICAgICAgICAgICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dGggc2NvcGU9XCJjb2xcIj4jPC90aD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBzY29wZT1cImNvbFwiPnRpdGxlPC90aD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBzY29wZT1cImNvbFwiPnByaWNlPC90aD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBzY29wZT1cImNvbFwiPnN0YXR1czwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dGggc2NvcGU9XCJjb2xcIj5EYXRlPC90aD5cbiAgICAgICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgICA8L3RoZWFkPlxuICAgICAgICAgICAgICAgIDx0Ym9keT5cbiAgICAgICAgICAgICAgICAgICAgeyBzaG93T3JkZXJzKG9yZGVycykgfVxuICAgICAgICAgICAgICAgIDwvdGJvZHk+XG4gICAgICAgIDwvdGFibGU+XG4gICAgPC9kaXY+XG4gICAgKVxuXG5cbn07XG5cbk9yZGVyTGlzdC5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyAoY29udGV4dCwgY2xpZW50KSA9PiB7XG4gICAgY29uc3QgeyBkYXRhIH0gPSBhd2FpdCBjbGllbnQuZ2V0KCcvYXBpL29yZGVycycpO1xuXG4gICAgcmV0dXJuIHsgb3JkZXJzOiBkYXRhIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgT3JkZXJMaXN0OyJdLCJuYW1lcyI6WyJPcmRlckxpc3QiLCJvcmRlcnMiLCJjb25zb2xlIiwibG9nIiwic2hvd09yZGVycyIsIm1hcCIsIm9yZGVyIiwiaW5kZXgiLCJ0ciIsInRoIiwic2NvcGUiLCJ0ZCIsInRpY2tldCIsInRpdGxlIiwicHJpY2UiLCJzdGF0dXMiLCJEYXRlIiwiY3JlYXRlZEF0IiwidG9TdHJpbmciLCJzbGljZSIsImlkIiwiZGl2IiwidGFibGUiLCJjbGFzc05hbWUiLCJjYXB0aW9uIiwidGhlYWQiLCJ0Ym9keSIsImdldEluaXRpYWxQcm9wcyIsImNvbnRleHQiLCJjbGllbnQiLCJkYXRhIiwiZ2V0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/orders/index.js\n");

/***/ })

});