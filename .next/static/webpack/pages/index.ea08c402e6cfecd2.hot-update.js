"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/Header.jsx":
/*!*******************************!*\
  !*** ./components/Header.jsx ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_social_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-social-icons */ \"./node_modules/react-social-icons/build/react-social-icons.js\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.mjs\");\nvar _this = undefined;\n\n\n\n\n\nvar _s = $RefreshSig$();\nvar Header = function() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), isHovered = ref[0], setIsHovered = ref[1];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"header\", {\n        className: \"sticky top-0 p-5 hover:bg-[#23272A] \".concat(isHovered ? \"text-white\" : \"text-gray-500\", \" w-screen flex items-start justify-between z-10 hover:shadow-md xl:items-center\"),\n        onMouseEnter: function() {\n            return setIsHovered(true);\n        },\n        onMouseLeave: function() {\n            return setIsHovered(false);\n        },\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_4__.motion.div, {\n                className: \"flex flex-row items-center space-x-4\",\n                initial: {\n                    x: -500,\n                    opacity: 0,\n                    scale: 0.5\n                },\n                animate: {\n                    x: 0,\n                    opacity: 1,\n                    scale: 1\n                },\n                transition: {\n                    duration: 1.5\n                },\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                        href: \"#about\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            className: \"heroButton\",\n                            children: \"About\"\n                        }, void 0, false, {\n                            fileName: \"D:\\\\portfolio\\\\updated-portfolio\\\\components\\\\Header.jsx\",\n                            lineNumber: 34,\n                            columnNumber: 11\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"D:\\\\portfolio\\\\updated-portfolio\\\\components\\\\Header.jsx\",\n                        lineNumber: 33,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                        href: \"#projects\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            className: \"heroButton\",\n                            children: \"Projects\"\n                        }, void 0, false, {\n                            fileName: \"D:\\\\portfolio\\\\updated-portfolio\\\\components\\\\Header.jsx\",\n                            lineNumber: 37,\n                            columnNumber: 11\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"D:\\\\portfolio\\\\updated-portfolio\\\\components\\\\Header.jsx\",\n                        lineNumber: 36,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\portfolio\\\\updated-portfolio\\\\components\\\\Header.jsx\",\n                lineNumber: 17,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                href: \"#contact\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_4__.motion.div, {\n                    className: \"flex flex-row items-center cursor-pointer space-x-2 mr-6\",\n                    initial: {\n                        x: 500,\n                        opacity: 0,\n                        scale: 0.5\n                    },\n                    animate: {\n                        x: 0,\n                        opacity: 1,\n                        scale: 1\n                    },\n                    transition: {\n                        duration: 1.5\n                    },\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_social_icons__WEBPACK_IMPORTED_MODULE_3__.SocialIcon, {\n                            className: \"cursor-pointer\",\n                            target: \"_blank\",\n                            network: \"email\",\n                            fgColor: isHovered ? \"white\" : \"gray\",\n                            bgColor: \"transparent\"\n                        }, void 0, false, {\n                            fileName: \"D:\\\\portfolio\\\\updated-portfolio\\\\components\\\\Header.jsx\",\n                            lineNumber: 58,\n                            columnNumber: 11\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: \"uppercase font-semibold hidden md:inline-flex text-sm\",\n                            children: \"Contact me\"\n                        }, void 0, false, {\n                            fileName: \"D:\\\\portfolio\\\\updated-portfolio\\\\components\\\\Header.jsx\",\n                            lineNumber: 65,\n                            columnNumber: 11\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"D:\\\\portfolio\\\\updated-portfolio\\\\components\\\\Header.jsx\",\n                    lineNumber: 42,\n                    columnNumber: 9\n                }, _this)\n            }, void 0, false, {\n                fileName: \"D:\\\\portfolio\\\\updated-portfolio\\\\components\\\\Header.jsx\",\n                lineNumber: 41,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\portfolio\\\\updated-portfolio\\\\components\\\\Header.jsx\",\n        lineNumber: 10,\n        columnNumber: 5\n    }, _this);\n};\n_s(Header, \"Hdw5EO+DplCNBEJcNuH8tsP7WZ4=\");\n_c = Header;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Header);\nvar _c;\n$RefreshReg$(_c, \"Header\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0hlYWRlci5qc3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7O0FBQXdDO0FBQ1g7QUFDbUI7QUFDVDs7QUFFdkMsSUFBTUssTUFBTSxHQUFHLFdBQU07O0lBQ25CLElBQWtDSixHQUFlLEdBQWZBLCtDQUFRLENBQUMsS0FBSyxDQUFDLEVBQTFDSyxTQUFTLEdBQWtCTCxHQUFlLEdBQWpDLEVBQUVNLFlBQVksR0FBSU4sR0FBZSxHQUFuQjtJQUU5QixxQkFDRSw4REFBQ08sUUFBTTtRQUNMQyxTQUFTLEVBQUUsc0NBQXFDLENBRS9DLE1BQStFLENBRDlFSCxTQUFTLEdBQUcsWUFBWSxHQUFHLGVBQWUsRUFDM0MsaUZBQStFLENBQUM7UUFDakZJLFlBQVksRUFBRTttQkFBTUgsWUFBWSxDQUFDLElBQUksQ0FBQztTQUFBO1FBQ3RDSSxZQUFZLEVBQUU7bUJBQU1KLFlBQVksQ0FBQyxLQUFLLENBQUM7U0FBQTs7MEJBRXZDLDhEQUFDSCxxREFBVTtnQkFDVEssU0FBUyxFQUFDLHNDQUFzQztnQkFDaERJLE9BQU8sRUFBRTtvQkFDUEMsQ0FBQyxFQUFFLENBQUMsR0FBRztvQkFDUEMsT0FBTyxFQUFFLENBQUM7b0JBQ1ZDLEtBQUssRUFBRSxHQUFHO2lCQUNYO2dCQUNEQyxPQUFPLEVBQUU7b0JBQ1BILENBQUMsRUFBRSxDQUFDO29CQUNKQyxPQUFPLEVBQUUsQ0FBQztvQkFDVkMsS0FBSyxFQUFFLENBQUM7aUJBQ1Q7Z0JBQ0RFLFVBQVUsRUFBRTtvQkFDVkMsUUFBUSxFQUFFLEdBQUc7aUJBQ2Q7O2tDQUVELDhEQUFDakIsa0RBQUk7d0JBQUNrQixJQUFJLEVBQUMsUUFBUTtrQ0FDakIsNEVBQUNDLFFBQU07NEJBQUNaLFNBQVMsRUFBQyxZQUFZO3NDQUFDLE9BQUs7Ozs7O2lDQUFTOzs7Ozs2QkFDeEM7a0NBQ1AsOERBQUNQLGtEQUFJO3dCQUFDa0IsSUFBSSxFQUFDLFdBQVc7a0NBQ3BCLDRFQUFDQyxRQUFNOzRCQUFDWixTQUFTLEVBQUMsWUFBWTtzQ0FBQyxVQUFROzs7OztpQ0FBUzs7Ozs7NkJBQzNDOzs7Ozs7cUJBQ0k7MEJBRWIsOERBQUNQLGtEQUFJO2dCQUFDa0IsSUFBSSxFQUFDLFVBQVU7MEJBQ25CLDRFQUFDaEIscURBQVU7b0JBQ1RLLFNBQVMsRUFBQywwREFBMEQ7b0JBQ3BFSSxPQUFPLEVBQUU7d0JBQ1BDLENBQUMsRUFBRSxHQUFHO3dCQUNOQyxPQUFPLEVBQUUsQ0FBQzt3QkFDVkMsS0FBSyxFQUFFLEdBQUc7cUJBQ1g7b0JBQ0RDLE9BQU8sRUFBRTt3QkFDUEgsQ0FBQyxFQUFFLENBQUM7d0JBQ0pDLE9BQU8sRUFBRSxDQUFDO3dCQUNWQyxLQUFLLEVBQUUsQ0FBQztxQkFDVDtvQkFDREUsVUFBVSxFQUFFO3dCQUNWQyxRQUFRLEVBQUUsR0FBRztxQkFDZDs7c0NBRUQsOERBQUNoQiwwREFBVTs0QkFDVE0sU0FBUyxFQUFDLGdCQUFnQjs0QkFDMUJhLE1BQU0sRUFBQyxRQUFROzRCQUNmQyxPQUFPLEVBQUMsT0FBTzs0QkFDZkMsT0FBTyxFQUFFbEIsU0FBUyxHQUFHLE9BQU8sR0FBRyxNQUFNOzRCQUNyQ21CLE9BQU8sRUFBQyxhQUFhOzs7OztpQ0FDckI7c0NBQ0YsOERBQUNDLEdBQUM7NEJBQUNqQixTQUFTLEVBQUMsdURBQXVEO3NDQUFDLFlBRXJFOzs7OztpQ0FBSTs7Ozs7O3lCQUNPOzs7OztxQkFDUjs7Ozs7O2FBQ0EsQ0FDVDtDQUNIO0dBbEVLSixNQUFNO0FBQU5BLEtBQUFBLE1BQU07QUFvRVosK0RBQWVBLE1BQU0sRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0hlYWRlci5qc3g/NTY3ZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcbmltcG9ydCB7IFNvY2lhbEljb24gfSBmcm9tICdyZWFjdC1zb2NpYWwtaWNvbnMnO1xyXG5pbXBvcnQgeyBtb3Rpb24gfSBmcm9tICdmcmFtZXItbW90aW9uJztcclxuXHJcbmNvbnN0IEhlYWRlciA9ICgpID0+IHtcclxuICBjb25zdCBbaXNIb3ZlcmVkLCBzZXRJc0hvdmVyZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGhlYWRlclxyXG4gICAgICBjbGFzc05hbWU9e2BzdGlja3kgdG9wLTAgcC01IGhvdmVyOmJnLVsjMjMyNzJBXSAke1xyXG4gICAgICAgIGlzSG92ZXJlZCA/ICd0ZXh0LXdoaXRlJyA6ICd0ZXh0LWdyYXktNTAwJ1xyXG4gICAgICB9IHctc2NyZWVuIGZsZXggaXRlbXMtc3RhcnQganVzdGlmeS1iZXR3ZWVuIHotMTAgaG92ZXI6c2hhZG93LW1kIHhsOml0ZW1zLWNlbnRlcmB9XHJcbiAgICAgIG9uTW91c2VFbnRlcj17KCkgPT4gc2V0SXNIb3ZlcmVkKHRydWUpfVxyXG4gICAgICBvbk1vdXNlTGVhdmU9eygpID0+IHNldElzSG92ZXJlZChmYWxzZSl9XHJcbiAgICA+XHJcbiAgICAgIDxtb3Rpb24uZGl2XHJcbiAgICAgICAgY2xhc3NOYW1lPSdmbGV4IGZsZXgtcm93IGl0ZW1zLWNlbnRlciBzcGFjZS14LTQnXHJcbiAgICAgICAgaW5pdGlhbD17e1xyXG4gICAgICAgICAgeDogLTUwMCxcclxuICAgICAgICAgIG9wYWNpdHk6IDAsXHJcbiAgICAgICAgICBzY2FsZTogMC41LFxyXG4gICAgICAgIH19XHJcbiAgICAgICAgYW5pbWF0ZT17e1xyXG4gICAgICAgICAgeDogMCxcclxuICAgICAgICAgIG9wYWNpdHk6IDEsXHJcbiAgICAgICAgICBzY2FsZTogMSxcclxuICAgICAgICB9fVxyXG4gICAgICAgIHRyYW5zaXRpb249e3tcclxuICAgICAgICAgIGR1cmF0aW9uOiAxLjUsXHJcbiAgICAgICAgfX1cclxuICAgICAgPlxyXG4gICAgICAgIDxMaW5rIGhyZWY9JyNhYm91dCc+XHJcbiAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT0naGVyb0J1dHRvbic+QWJvdXQ8L2J1dHRvbj5cclxuICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgPExpbmsgaHJlZj0nI3Byb2plY3RzJz5cclxuICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPSdoZXJvQnV0dG9uJz5Qcm9qZWN0czwvYnV0dG9uPlxyXG4gICAgICAgIDwvTGluaz5cclxuICAgICAgPC9tb3Rpb24uZGl2PlxyXG5cclxuICAgICAgPExpbmsgaHJlZj0nI2NvbnRhY3QnPlxyXG4gICAgICAgIDxtb3Rpb24uZGl2XHJcbiAgICAgICAgICBjbGFzc05hbWU9J2ZsZXggZmxleC1yb3cgaXRlbXMtY2VudGVyIGN1cnNvci1wb2ludGVyIHNwYWNlLXgtMiBtci02J1xyXG4gICAgICAgICAgaW5pdGlhbD17e1xyXG4gICAgICAgICAgICB4OiA1MDAsXHJcbiAgICAgICAgICAgIG9wYWNpdHk6IDAsXHJcbiAgICAgICAgICAgIHNjYWxlOiAwLjUsXHJcbiAgICAgICAgICB9fVxyXG4gICAgICAgICAgYW5pbWF0ZT17e1xyXG4gICAgICAgICAgICB4OiAwLFxyXG4gICAgICAgICAgICBvcGFjaXR5OiAxLFxyXG4gICAgICAgICAgICBzY2FsZTogMSxcclxuICAgICAgICAgIH19XHJcbiAgICAgICAgICB0cmFuc2l0aW9uPXt7XHJcbiAgICAgICAgICAgIGR1cmF0aW9uOiAxLjUsXHJcbiAgICAgICAgICB9fVxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxTb2NpYWxJY29uXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT0nY3Vyc29yLXBvaW50ZXInXHJcbiAgICAgICAgICAgIHRhcmdldD0nX2JsYW5rJ1xyXG4gICAgICAgICAgICBuZXR3b3JrPSdlbWFpbCdcclxuICAgICAgICAgICAgZmdDb2xvcj17aXNIb3ZlcmVkID8gJ3doaXRlJyA6ICdncmF5J31cclxuICAgICAgICAgICAgYmdDb2xvcj0ndHJhbnNwYXJlbnQnXHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICAgPHAgY2xhc3NOYW1lPSd1cHBlcmNhc2UgZm9udC1zZW1pYm9sZCBoaWRkZW4gbWQ6aW5saW5lLWZsZXggdGV4dC1zbSc+XHJcbiAgICAgICAgICAgIENvbnRhY3QgbWVcclxuICAgICAgICAgIDwvcD5cclxuICAgICAgICA8L21vdGlvbi5kaXY+XHJcbiAgICAgIDwvTGluaz5cclxuICAgIDwvaGVhZGVyPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIZWFkZXI7XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwiTGluayIsIlNvY2lhbEljb24iLCJtb3Rpb24iLCJIZWFkZXIiLCJpc0hvdmVyZWQiLCJzZXRJc0hvdmVyZWQiLCJoZWFkZXIiLCJjbGFzc05hbWUiLCJvbk1vdXNlRW50ZXIiLCJvbk1vdXNlTGVhdmUiLCJkaXYiLCJpbml0aWFsIiwieCIsIm9wYWNpdHkiLCJzY2FsZSIsImFuaW1hdGUiLCJ0cmFuc2l0aW9uIiwiZHVyYXRpb24iLCJocmVmIiwiYnV0dG9uIiwidGFyZ2V0IiwibmV0d29yayIsImZnQ29sb3IiLCJiZ0NvbG9yIiwicCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Header.jsx\n"));

/***/ })

});