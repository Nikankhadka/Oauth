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

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Login; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-hook-form */ \"./node_modules/react-hook-form/dist/index.esm.mjs\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);\nfunction _defineProperty(obj, key, value) {\n    if (key in obj) {\n        Object.defineProperty(obj, key, {\n            value: value,\n            enumerable: true,\n            configurable: true,\n            writable: true\n        });\n    } else {\n        obj[key] = value;\n    }\n    return obj;\n}\nfunction _objectSpread(target) {\n    for(var i = 1; i < arguments.length; i++){\n        var source = arguments[i] != null ? arguments[i] : {};\n        var ownKeys = Object.keys(source);\n        if (typeof Object.getOwnPropertySymbols === \"function\") {\n            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {\n                return Object.getOwnPropertyDescriptor(source, sym).enumerable;\n            }));\n        }\n        ownKeys.forEach(function(key) {\n            _defineProperty(target, key, source[key]);\n        });\n    }\n    return target;\n}\n\n\n\nvar _s = $RefreshSig$();\nfunction Login() {\n    var formdata1 = function formdata1(formdata) {\n        console.log(formdata);\n        //first goes the api end point url and then the data then geos the credential\n        axios__WEBPACK_IMPORTED_MODULE_1___default().get(\"http://localhost:2900/login\").then(function(result) {\n            console.log(result.data);\n        }).catch(function() {\n            console.log(\"error\");\n        });\n    };\n    _s();\n    var ref = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_2__.useForm)(), register = ref.register, handleSubmit = ref.handleSubmit, error = ref.formState.error;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"form\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"Authentication Form\"\n            }, void 0, false, {\n                fileName: \"E:\\\\My project\\\\Passportjs_Firebase auth\\\\passportjs\\\\pages\\\\index.js\",\n                lineNumber: 34,\n                columnNumber: 1\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                className: \"form\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", _objectSpread({\n                        type: \"text\",\n                        className: \"input\",\n                        placeholder: \"email\"\n                    }, register(\"email\", {\n                        required: true\n                    })), void 0, false, {\n                        fileName: \"E:\\\\My project\\\\Passportjs_Firebase auth\\\\passportjs\\\\pages\\\\index.js\",\n                        lineNumber: 38,\n                        columnNumber: 1\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", _objectSpread({\n                        type: \"text\",\n                        className: \"input\",\n                        placeholder: \"password\"\n                    }, register(\"password\", {\n                        required: true\n                    })), void 0, false, {\n                        fileName: \"E:\\\\My project\\\\Passportjs_Firebase auth\\\\passportjs\\\\pages\\\\index.js\",\n                        lineNumber: 39,\n                        columnNumber: 1\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"submit\",\n                        value: \"login\",\n                        onClick: handleSubmit(formdata1)\n                    }, void 0, false, {\n                        fileName: \"E:\\\\My project\\\\Passportjs_Firebase auth\\\\passportjs\\\\pages\\\\index.js\",\n                        lineNumber: 40,\n                        columnNumber: 1\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"E:\\\\My project\\\\Passportjs_Firebase auth\\\\passportjs\\\\pages\\\\index.js\",\n                lineNumber: 36,\n                columnNumber: 1\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                className: \"gogo\",\n                href: \"http://localhost:2900/login\",\n                onClick: function() {\n                    console.log(\"authenticated hudai\");\n                },\n                children: \" Sign in with gogole\"\n            }, void 0, false, {\n                fileName: \"E:\\\\My project\\\\Passportjs_Firebase auth\\\\passportjs\\\\pages\\\\index.js\",\n                lineNumber: 45,\n                columnNumber: 1\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                className: \"gogo\",\n                href: \"http://localhost:2900/login\",\n                onClick: function() {\n                    console.log(\"authenticated hudai\");\n                },\n                children: \" Sign in with facebook\"\n            }, void 0, false, {\n                fileName: \"E:\\\\My project\\\\Passportjs_Firebase auth\\\\passportjs\\\\pages\\\\index.js\",\n                lineNumber: 50,\n                columnNumber: 1\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"E:\\\\My project\\\\Passportjs_Firebase auth\\\\passportjs\\\\pages\\\\index.js\",\n        lineNumber: 32,\n        columnNumber: 5\n    }, this);\n};\n_s(Login, \"wGBVC47h0BgbxJoUyxrQEW9pryc=\", false, function() {\n    return [\n        react_hook_form__WEBPACK_IMPORTED_MODULE_2__.useForm\n    ];\n});\n_c = Login;\nvar _c;\n$RefreshReg$(_c, \"Login\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBd0M7QUFDZjs7QUFVVixTQUFTRSxLQUFLLEdBQUU7UUFJcEJDLFNBQVEsR0FBakIsU0FBU0EsU0FBUSxDQUFDQSxRQUFRLEVBQUM7UUFDekJDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDRixRQUFRLENBQUM7UUFDckIsNkVBQTZFO1FBQzdFRixnREFBUyxDQUFDLDZCQUE2QixDQUFDLENBQUNNLElBQUksQ0FBQyxTQUFDQyxNQUFNLEVBQUc7WUFDeERKLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDRyxNQUFNLENBQUNDLElBQUksQ0FBQztTQUV2QixDQUFDLENBQUNDLEtBQUssQ0FBQyxXQUFJO1lBQ1hOLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLE9BQU8sQ0FBQztTQUNyQixDQUFDO0tBSUg7O0lBZEQsSUFBZ0RMLEdBQVMsR0FBVEEsd0RBQU8sRUFBRSxFQUFsRFcsUUFBUSxHQUFpQ1gsR0FBUyxDQUFsRFcsUUFBUSxFQUFDQyxZQUFZLEdBQW9CWixHQUFTLENBQXpDWSxZQUFZLEVBQUNDLEtBQWdCLEdBQUdiLEdBQVMsQ0FBNUJhLFNBQVMsQ0FBRUMsS0FBSztJQWU3QyxxQkFFRSw4REFBQ0MsS0FBRztRQUFDQyxTQUFTLEVBQUMsTUFBTTs7MEJBRXpCLDhEQUFDQyxJQUFFOzBCQUFDLHFCQUFtQjs7Ozs7b0JBQUs7MEJBRTVCLDhEQUFDQyxNQUFJO2dCQUFDRixTQUFTLEVBQUMsTUFBTTs7a0NBRXRCLDhEQUFDRyxPQUFLO3dCQUFDQyxJQUFJLEVBQUMsTUFBTTt3QkFBQ0osU0FBUyxFQUFDLE9BQU87d0JBQUNLLFdBQVcsRUFBQyxPQUFPO3VCQUFNVixRQUFRLENBQUMsT0FBTyxFQUFDO3dCQUFDVyxRQUFRLEVBQUMsSUFBSTtxQkFBQyxDQUFDOzs7OzRCQUFJO2tDQUNuRyw4REFBQ0gsT0FBSzt3QkFBQ0MsSUFBSSxFQUFDLE1BQU07d0JBQUNKLFNBQVMsRUFBQyxPQUFPO3dCQUFDSyxXQUFXLEVBQUMsVUFBVTt1QkFBTVYsUUFBUSxDQUFDLFVBQVUsRUFBQzt3QkFBQ1csUUFBUSxFQUFDLElBQUk7cUJBQUMsQ0FBQzs7Ozs0QkFBSTtrQ0FDekcsOERBQUNILE9BQUs7d0JBQUNDLElBQUksRUFBQyxRQUFRO3dCQUFDRyxLQUFLLEVBQUMsT0FBTzt3QkFBQ0MsT0FBTyxFQUFFWixZQUFZLENBQUNULFNBQVEsQ0FBQzs7Ozs7NEJBQUk7Ozs7OztvQkFJL0Q7MEJBQ1AsOERBQUNzQixHQUFDO2dCQUFDVCxTQUFTLEVBQUMsTUFBTTtnQkFBQ1UsSUFBSSxFQUFDLDZCQUE2QjtnQkFBQ0YsT0FBTyxFQUFFLFdBQUk7b0JBQ2xFcEIsT0FBTyxDQUFDQyxHQUFHLENBQUMscUJBQXFCLENBQUM7aUJBRW5DOzBCQUFFLHNCQUFvQjs7Ozs7b0JBQUk7MEJBRTNCLDhEQUFDb0IsR0FBQztnQkFBQ1QsU0FBUyxFQUFDLE1BQU07Z0JBQUNVLElBQUksRUFBQyw2QkFBNkI7Z0JBQUNGLE9BQU8sRUFBRSxXQUFJO29CQUNsRXBCLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLHFCQUFxQixDQUFDO2lCQUVuQzswQkFBRSx3QkFBc0I7Ozs7O29CQUFJOzs7Ozs7WUFVbkIsQ0FHTDtDQUNKO0dBdER1QkgsS0FBSzs7UUFFcUJGLG9EQUFPOzs7QUFGakNFLEtBQUFBLEtBQUsiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/YmVlNyJdLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7dXNlRm9ybX0gZnJvbSAncmVhY3QtaG9vay1mb3JtJztcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIlxuXG5cblxuXG5cblxuXG5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTG9naW4oKXtcblxuICBjb25zdCB7cmVnaXN0ZXIsaGFuZGxlU3VibWl0LGZvcm1TdGF0ZTp7ZXJyb3J9fT11c2VGb3JtKCk7XG5cbiAgZnVuY3Rpb24gZm9ybWRhdGEoZm9ybWRhdGEpe1xuICAgIGNvbnNvbGUubG9nKGZvcm1kYXRhKVxuICAgIC8vZmlyc3QgZ29lcyB0aGUgYXBpIGVuZCBwb2ludCB1cmwgYW5kIHRoZW4gdGhlIGRhdGEgdGhlbiBnZW9zIHRoZSBjcmVkZW50aWFsXG4gICAgYXhpb3MuZ2V0KFwiaHR0cDovL2xvY2FsaG9zdDoyOTAwL2xvZ2luXCIpLnRoZW4oKHJlc3VsdCk9PntcbiAgICBjb25zb2xlLmxvZyhyZXN1bHQuZGF0YSlcblxuICAgIH0pLmNhdGNoKCgpPT57XG4gICAgICBjb25zb2xlLmxvZyhcImVycm9yXCIpXG4gICAgfSlcbiAgICBcbiAgICBcblxuICB9XG4gIHJldHVybihcbiAgICBcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm1cIj5cblxuPGgxPkF1dGhlbnRpY2F0aW9uIEZvcm08L2gxPlxuXG48Zm9ybSBjbGFzc05hbWU9XCJmb3JtXCI+XG5cbjxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzTmFtZT1cImlucHV0XCIgcGxhY2Vob2xkZXI9J2VtYWlsJyAgey4uLnJlZ2lzdGVyKFwiZW1haWxcIix7cmVxdWlyZWQ6dHJ1ZX0pfSAvPiBcbjxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzTmFtZT1cImlucHV0XCIgcGxhY2Vob2xkZXI9J3Bhc3N3b3JkJyAgey4uLnJlZ2lzdGVyKFwicGFzc3dvcmRcIix7cmVxdWlyZWQ6dHJ1ZX0pfSAvPiBcbjxpbnB1dCB0eXBlPVwic3VibWl0XCIgdmFsdWU9XCJsb2dpblwiIG9uQ2xpY2s9e2hhbmRsZVN1Ym1pdChmb3JtZGF0YSl9IC8+XG5cblxuXG48L2Zvcm0+XG48YSBjbGFzc05hbWU9J2dvZ28nIGhyZWY9J2h0dHA6Ly9sb2NhbGhvc3Q6MjkwMC9sb2dpbicgb25DbGljaz17KCk9PntcbiAgY29uc29sZS5sb2coXCJhdXRoZW50aWNhdGVkIGh1ZGFpXCIpXG5cbn19PiBTaWduIGluIHdpdGggZ29nb2xlPC9hPlxuXG48YSBjbGFzc05hbWU9J2dvZ28nIGhyZWY9J2h0dHA6Ly9sb2NhbGhvc3Q6MjkwMC9sb2dpbicgb25DbGljaz17KCk9PntcbiAgY29uc29sZS5sb2coXCJhdXRoZW50aWNhdGVkIGh1ZGFpXCIpXG5cbn19PiBTaWduIGluIHdpdGggZmFjZWJvb2s8L2E+XG5cblxuXG5cblxuXG5cblxuXG4gICAgPC9kaXY+XG4gICAgXG4gICAgXG4gICAgKVxufVxuXG5cbiJdLCJuYW1lcyI6WyJ1c2VGb3JtIiwiYXhpb3MiLCJMb2dpbiIsImZvcm1kYXRhIiwiY29uc29sZSIsImxvZyIsImdldCIsInRoZW4iLCJyZXN1bHQiLCJkYXRhIiwiY2F0Y2giLCJyZWdpc3RlciIsImhhbmRsZVN1Ym1pdCIsImZvcm1TdGF0ZSIsImVycm9yIiwiZGl2IiwiY2xhc3NOYW1lIiwiaDEiLCJmb3JtIiwiaW5wdXQiLCJ0eXBlIiwicGxhY2Vob2xkZXIiLCJyZXF1aXJlZCIsInZhbHVlIiwib25DbGljayIsImEiLCJocmVmIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

});