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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Login; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-hook-form */ \"./node_modules/react-hook-form/dist/index.esm.mjs\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);\nfunction _defineProperty(obj, key, value) {\n    if (key in obj) {\n        Object.defineProperty(obj, key, {\n            value: value,\n            enumerable: true,\n            configurable: true,\n            writable: true\n        });\n    } else {\n        obj[key] = value;\n    }\n    return obj;\n}\nfunction _objectSpread(target) {\n    for(var i = 1; i < arguments.length; i++){\n        var source = arguments[i] != null ? arguments[i] : {};\n        var ownKeys = Object.keys(source);\n        if (typeof Object.getOwnPropertySymbols === \"function\") {\n            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {\n                return Object.getOwnPropertyDescriptor(source, sym).enumerable;\n            }));\n        }\n        ownKeys.forEach(function(key) {\n            _defineProperty(target, key, source[key]);\n        });\n    }\n    return target;\n}\n\n\n\nvar _s = $RefreshSig$();\nfunction Login() {\n    var formdata1 = function formdata1(formdata) {\n        console.log(formdata);\n        //first goes the api end point url and then the data then geos the credential\n        axios__WEBPACK_IMPORTED_MODULE_1___default().get(\"http://localhost:2900/login\").then(function(result) {\n            console.log(result.data);\n        }).catch(function() {\n            console.log(\"error\");\n        });\n    };\n    _s();\n    var ref = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_2__.useForm)(), register = ref.register, handleSubmit = ref.handleSubmit, error = ref.formState.error;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"form\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"Authentication Form\"\n            }, void 0, false, {\n                fileName: \"E:\\\\My project\\\\Passportjs_Firebase auth\\\\passportjs\\\\pages\\\\index.js\",\n                lineNumber: 34,\n                columnNumber: 1\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                className: \"form\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", _objectSpread({\n                        type: \"text\",\n                        className: \"input\",\n                        placeholder: \"email\"\n                    }, register(\"email\", {\n                        required: true\n                    })), void 0, false, {\n                        fileName: \"E:\\\\My project\\\\Passportjs_Firebase auth\\\\passportjs\\\\pages\\\\index.js\",\n                        lineNumber: 38,\n                        columnNumber: 1\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", _objectSpread({\n                        type: \"text\",\n                        className: \"input\",\n                        placeholder: \"password\"\n                    }, register(\"password\", {\n                        required: true\n                    })), void 0, false, {\n                        fileName: \"E:\\\\My project\\\\Passportjs_Firebase auth\\\\passportjs\\\\pages\\\\index.js\",\n                        lineNumber: 39,\n                        columnNumber: 1\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"submit\",\n                        value: \"login\",\n                        onClick: handleSubmit(formdata1)\n                    }, void 0, false, {\n                        fileName: \"E:\\\\My project\\\\Passportjs_Firebase auth\\\\passportjs\\\\pages\\\\index.js\",\n                        lineNumber: 40,\n                        columnNumber: 1\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"E:\\\\My project\\\\Passportjs_Firebase auth\\\\passportjs\\\\pages\\\\index.js\",\n                lineNumber: 36,\n                columnNumber: 1\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                className: \"gogo\",\n                href: \"http://localhost:2900/login\",\n                onClick: function() {\n                    console.log(\"authenticated hudai\");\n                },\n                children: \" Sign in with gogole\"\n            }, void 0, false, {\n                fileName: \"E:\\\\My project\\\\Passportjs_Firebase auth\\\\passportjs\\\\pages\\\\index.js\",\n                lineNumber: 45,\n                columnNumber: 1\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                className: \"gogo\",\n                href: \"http://localhost:2900/login\",\n                onClick: function() {\n                    console.log(\"authenticated hudai\");\n                },\n                children: \" Sign in with facebook\"\n            }, void 0, false, {\n                fileName: \"E:\\\\My project\\\\Passportjs_Firebase auth\\\\passportjs\\\\pages\\\\index.js\",\n                lineNumber: 50,\n                columnNumber: 1\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                className: \"gogo\",\n                href: \"http://localhost:2900/login\",\n                onClick: function() {\n                    console.log(\"authenticated hudai\");\n                },\n                children: \" Sign in with github\"\n            }, void 0, false, {\n                fileName: \"E:\\\\My project\\\\Passportjs_Firebase auth\\\\passportjs\\\\pages\\\\index.js\",\n                lineNumber: 55,\n                columnNumber: 1\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"E:\\\\My project\\\\Passportjs_Firebase auth\\\\passportjs\\\\pages\\\\index.js\",\n        lineNumber: 32,\n        columnNumber: 5\n    }, this);\n};\n_s(Login, \"wGBVC47h0BgbxJoUyxrQEW9pryc=\", false, function() {\n    return [\n        react_hook_form__WEBPACK_IMPORTED_MODULE_2__.useForm\n    ];\n});\n_c = Login;\nvar _c;\n$RefreshReg$(_c, \"Login\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBd0M7QUFDZjs7QUFVVixTQUFTRSxLQUFLLEdBQUU7UUFJcEJDLFNBQVEsR0FBakIsU0FBU0EsU0FBUSxDQUFDQSxRQUFRLEVBQUM7UUFDekJDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDRixRQUFRLENBQUM7UUFDckIsNkVBQTZFO1FBQzdFRixnREFBUyxDQUFDLDZCQUE2QixDQUFDLENBQUNNLElBQUksQ0FBQyxTQUFDQyxNQUFNLEVBQUc7WUFDeERKLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDRyxNQUFNLENBQUNDLElBQUksQ0FBQztTQUV2QixDQUFDLENBQUNDLEtBQUssQ0FBQyxXQUFJO1lBQ1hOLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLE9BQU8sQ0FBQztTQUNyQixDQUFDO0tBSUg7O0lBZEQsSUFBZ0RMLEdBQVMsR0FBVEEsd0RBQU8sRUFBRSxFQUFsRFcsUUFBUSxHQUFpQ1gsR0FBUyxDQUFsRFcsUUFBUSxFQUFDQyxZQUFZLEdBQW9CWixHQUFTLENBQXpDWSxZQUFZLEVBQUNDLEtBQWdCLEdBQUdiLEdBQVMsQ0FBNUJhLFNBQVMsQ0FBRUMsS0FBSztJQWU3QyxxQkFFRSw4REFBQ0MsS0FBRztRQUFDQyxTQUFTLEVBQUMsTUFBTTs7MEJBRXpCLDhEQUFDQyxJQUFFOzBCQUFDLHFCQUFtQjs7Ozs7b0JBQUs7MEJBRTVCLDhEQUFDQyxNQUFJO2dCQUFDRixTQUFTLEVBQUMsTUFBTTs7a0NBRXRCLDhEQUFDRyxPQUFLO3dCQUFDQyxJQUFJLEVBQUMsTUFBTTt3QkFBQ0osU0FBUyxFQUFDLE9BQU87d0JBQUNLLFdBQVcsRUFBQyxPQUFPO3VCQUFNVixRQUFRLENBQUMsT0FBTyxFQUFDO3dCQUFDVyxRQUFRLEVBQUMsSUFBSTtxQkFBQyxDQUFDOzs7OzRCQUFJO2tDQUNuRyw4REFBQ0gsT0FBSzt3QkFBQ0MsSUFBSSxFQUFDLE1BQU07d0JBQUNKLFNBQVMsRUFBQyxPQUFPO3dCQUFDSyxXQUFXLEVBQUMsVUFBVTt1QkFBTVYsUUFBUSxDQUFDLFVBQVUsRUFBQzt3QkFBQ1csUUFBUSxFQUFDLElBQUk7cUJBQUMsQ0FBQzs7Ozs0QkFBSTtrQ0FDekcsOERBQUNILE9BQUs7d0JBQUNDLElBQUksRUFBQyxRQUFRO3dCQUFDRyxLQUFLLEVBQUMsT0FBTzt3QkFBQ0MsT0FBTyxFQUFFWixZQUFZLENBQUNULFNBQVEsQ0FBQzs7Ozs7NEJBQUk7Ozs7OztvQkFJL0Q7MEJBQ1AsOERBQUNzQixHQUFDO2dCQUFDVCxTQUFTLEVBQUMsTUFBTTtnQkFBQ1UsSUFBSSxFQUFDLDZCQUE2QjtnQkFBQ0YsT0FBTyxFQUFFLFdBQUk7b0JBQ2xFcEIsT0FBTyxDQUFDQyxHQUFHLENBQUMscUJBQXFCLENBQUM7aUJBRW5DOzBCQUFFLHNCQUFvQjs7Ozs7b0JBQUk7MEJBRTNCLDhEQUFDb0IsR0FBQztnQkFBQ1QsU0FBUyxFQUFDLE1BQU07Z0JBQUNVLElBQUksRUFBQyw2QkFBNkI7Z0JBQUNGLE9BQU8sRUFBRSxXQUFJO29CQUNsRXBCLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLHFCQUFxQixDQUFDO2lCQUVuQzswQkFBRSx3QkFBc0I7Ozs7O29CQUFJOzBCQUU3Qiw4REFBQ29CLEdBQUM7Z0JBQUNULFNBQVMsRUFBQyxNQUFNO2dCQUFDVSxJQUFJLEVBQUMsNkJBQTZCO2dCQUFDRixPQUFPLEVBQUUsV0FBSTtvQkFDbEVwQixPQUFPLENBQUNDLEdBQUcsQ0FBQyxxQkFBcUIsQ0FBQztpQkFFbkM7MEJBQUUsc0JBQW9COzs7OztvQkFBSTs7Ozs7O1lBU2pCLENBR0w7Q0FDSjtHQTFEdUJILEtBQUs7O1FBRXFCRixvREFBTzs7O0FBRmpDRSxLQUFBQSxLQUFLIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LmpzP2JlZTciXSwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQge3VzZUZvcm19IGZyb20gJ3JlYWN0LWhvb2stZm9ybSc7XG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCJcblxuXG5cblxuXG5cblxuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIExvZ2luKCl7XG5cbiAgY29uc3Qge3JlZ2lzdGVyLGhhbmRsZVN1Ym1pdCxmb3JtU3RhdGU6e2Vycm9yfX09dXNlRm9ybSgpO1xuXG4gIGZ1bmN0aW9uIGZvcm1kYXRhKGZvcm1kYXRhKXtcbiAgICBjb25zb2xlLmxvZyhmb3JtZGF0YSlcbiAgICAvL2ZpcnN0IGdvZXMgdGhlIGFwaSBlbmQgcG9pbnQgdXJsIGFuZCB0aGVuIHRoZSBkYXRhIHRoZW4gZ2VvcyB0aGUgY3JlZGVudGlhbFxuICAgIGF4aW9zLmdldChcImh0dHA6Ly9sb2NhbGhvc3Q6MjkwMC9sb2dpblwiKS50aGVuKChyZXN1bHQpPT57XG4gICAgY29uc29sZS5sb2cocmVzdWx0LmRhdGEpXG5cbiAgICB9KS5jYXRjaCgoKT0+e1xuICAgICAgY29uc29sZS5sb2coXCJlcnJvclwiKVxuICAgIH0pXG4gICAgXG4gICAgXG5cbiAgfVxuICByZXR1cm4oXG4gICAgXG4gICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtXCI+XG5cbjxoMT5BdXRoZW50aWNhdGlvbiBGb3JtPC9oMT5cblxuPGZvcm0gY2xhc3NOYW1lPVwiZm9ybVwiPlxuXG48aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzc05hbWU9XCJpbnB1dFwiIHBsYWNlaG9sZGVyPSdlbWFpbCcgIHsuLi5yZWdpc3RlcihcImVtYWlsXCIse3JlcXVpcmVkOnRydWV9KX0gLz4gXG48aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzc05hbWU9XCJpbnB1dFwiIHBsYWNlaG9sZGVyPSdwYXNzd29yZCcgIHsuLi5yZWdpc3RlcihcInBhc3N3b3JkXCIse3JlcXVpcmVkOnRydWV9KX0gLz4gXG48aW5wdXQgdHlwZT1cInN1Ym1pdFwiIHZhbHVlPVwibG9naW5cIiBvbkNsaWNrPXtoYW5kbGVTdWJtaXQoZm9ybWRhdGEpfSAvPlxuXG5cblxuPC9mb3JtPlxuPGEgY2xhc3NOYW1lPSdnb2dvJyBocmVmPSdodHRwOi8vbG9jYWxob3N0OjI5MDAvbG9naW4nIG9uQ2xpY2s9eygpPT57XG4gIGNvbnNvbGUubG9nKFwiYXV0aGVudGljYXRlZCBodWRhaVwiKVxuXG59fT4gU2lnbiBpbiB3aXRoIGdvZ29sZTwvYT5cblxuPGEgY2xhc3NOYW1lPSdnb2dvJyBocmVmPSdodHRwOi8vbG9jYWxob3N0OjI5MDAvbG9naW4nIG9uQ2xpY2s9eygpPT57XG4gIGNvbnNvbGUubG9nKFwiYXV0aGVudGljYXRlZCBodWRhaVwiKVxuXG59fT4gU2lnbiBpbiB3aXRoIGZhY2Vib29rPC9hPlxuXG48YSBjbGFzc05hbWU9J2dvZ28nIGhyZWY9J2h0dHA6Ly9sb2NhbGhvc3Q6MjkwMC9sb2dpbicgb25DbGljaz17KCk9PntcbiAgY29uc29sZS5sb2coXCJhdXRoZW50aWNhdGVkIGh1ZGFpXCIpXG5cbn19PiBTaWduIGluIHdpdGggZ2l0aHViPC9hPlxuXG5cblxuXG5cblxuXG5cbiAgICA8L2Rpdj5cbiAgICBcbiAgICBcbiAgICApXG59XG5cblxuIl0sIm5hbWVzIjpbInVzZUZvcm0iLCJheGlvcyIsIkxvZ2luIiwiZm9ybWRhdGEiLCJjb25zb2xlIiwibG9nIiwiZ2V0IiwidGhlbiIsInJlc3VsdCIsImRhdGEiLCJjYXRjaCIsInJlZ2lzdGVyIiwiaGFuZGxlU3VibWl0IiwiZm9ybVN0YXRlIiwiZXJyb3IiLCJkaXYiLCJjbGFzc05hbWUiLCJoMSIsImZvcm0iLCJpbnB1dCIsInR5cGUiLCJwbGFjZWhvbGRlciIsInJlcXVpcmVkIiwidmFsdWUiLCJvbkNsaWNrIiwiYSIsImhyZWYiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

});