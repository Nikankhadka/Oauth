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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Login; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-hook-form */ \"./node_modules/react-hook-form/dist/index.esm.mjs\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);\nfunction _defineProperty(obj, key, value) {\n    if (key in obj) {\n        Object.defineProperty(obj, key, {\n            value: value,\n            enumerable: true,\n            configurable: true,\n            writable: true\n        });\n    } else {\n        obj[key] = value;\n    }\n    return obj;\n}\nfunction _objectSpread(target) {\n    for(var i = 1; i < arguments.length; i++){\n        var source = arguments[i] != null ? arguments[i] : {};\n        var ownKeys = Object.keys(source);\n        if (typeof Object.getOwnPropertySymbols === \"function\") {\n            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {\n                return Object.getOwnPropertyDescriptor(source, sym).enumerable;\n            }));\n        }\n        ownKeys.forEach(function(key) {\n            _defineProperty(target, key, source[key]);\n        });\n    }\n    return target;\n}\n\n\n\nvar _s = $RefreshSig$();\nfunction Login() {\n    var formdata1 = function formdata1(formdata) {\n        console.log(formdata);\n        //first goes the api end point url and then the data then geos the credential\n        axios__WEBPACK_IMPORTED_MODULE_1___default().get(\"http://localhost:2900/login\").then(function(result) {\n            console.log(result.data);\n        }).catch(function() {\n            console.log(\"error\");\n        });\n    };\n    _s();\n    var ref = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_2__.useForm)(), register = ref.register, handleSubmit = ref.handleSubmit, error = ref.formState.error;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"form\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"Authentication Form\"\n            }, void 0, false, {\n                fileName: \"E:\\\\My project\\\\Passportjs_Firebase auth\\\\passportjs\\\\pages\\\\index.js\",\n                lineNumber: 34,\n                columnNumber: 1\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                className: \"form\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", _objectSpread({\n                        type: \"text\",\n                        className: \"input\",\n                        placeholder: \"email\"\n                    }, register(\"email\", {\n                        required: true\n                    })), void 0, false, {\n                        fileName: \"E:\\\\My project\\\\Passportjs_Firebase auth\\\\passportjs\\\\pages\\\\index.js\",\n                        lineNumber: 38,\n                        columnNumber: 1\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", _objectSpread({\n                        type: \"text\",\n                        className: \"input\",\n                        placeholder: \"password\"\n                    }, register(\"password\", {\n                        required: true\n                    })), void 0, false, {\n                        fileName: \"E:\\\\My project\\\\Passportjs_Firebase auth\\\\passportjs\\\\pages\\\\index.js\",\n                        lineNumber: 39,\n                        columnNumber: 1\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"submit\",\n                        value: \"login\",\n                        onClick: handleSubmit(formdata1)\n                    }, void 0, false, {\n                        fileName: \"E:\\\\My project\\\\Passportjs_Firebase auth\\\\passportjs\\\\pages\\\\index.js\",\n                        lineNumber: 40,\n                        columnNumber: 1\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"E:\\\\My project\\\\Passportjs_Firebase auth\\\\passportjs\\\\pages\\\\index.js\",\n                lineNumber: 36,\n                columnNumber: 1\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                className: \"gogo\",\n                href: \"http://localhost:2900/login\",\n                onClick: function() {\n                    console.log(\"authenticated hudai\");\n                },\n                children: \" Sign in with gogole\"\n            }, void 0, false, {\n                fileName: \"E:\\\\My project\\\\Passportjs_Firebase auth\\\\passportjs\\\\pages\\\\index.js\",\n                lineNumber: 45,\n                columnNumber: 1\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"E:\\\\My project\\\\Passportjs_Firebase auth\\\\passportjs\\\\pages\\\\index.js\",\n        lineNumber: 32,\n        columnNumber: 5\n    }, this);\n};\n_s(Login, \"wGBVC47h0BgbxJoUyxrQEW9pryc=\", false, function() {\n    return [\n        react_hook_form__WEBPACK_IMPORTED_MODULE_2__.useForm\n    ];\n});\n_c = Login;\nvar _c;\n$RefreshReg$(_c, \"Login\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBd0M7QUFDZjs7QUFVVixTQUFTRSxLQUFLLEdBQUU7UUFJcEJDLFNBQVEsR0FBakIsU0FBU0EsU0FBUSxDQUFDQSxRQUFRLEVBQUM7UUFDekJDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDRixRQUFRLENBQUM7UUFDckIsNkVBQTZFO1FBQzdFRixnREFBUyxDQUFDLDZCQUE2QixDQUFDLENBQUNNLElBQUksQ0FBQyxTQUFDQyxNQUFNLEVBQUc7WUFDeERKLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDRyxNQUFNLENBQUNDLElBQUksQ0FBQztTQUV2QixDQUFDLENBQUNDLEtBQUssQ0FBQyxXQUFJO1lBQ1hOLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLE9BQU8sQ0FBQztTQUNyQixDQUFDO0tBSUg7O0lBZEQsSUFBZ0RMLEdBQVMsR0FBVEEsd0RBQU8sRUFBRSxFQUFsRFcsUUFBUSxHQUFpQ1gsR0FBUyxDQUFsRFcsUUFBUSxFQUFDQyxZQUFZLEdBQW9CWixHQUFTLENBQXpDWSxZQUFZLEVBQUNDLEtBQWdCLEdBQUdiLEdBQVMsQ0FBNUJhLFNBQVMsQ0FBRUMsS0FBSztJQWU3QyxxQkFFRSw4REFBQ0MsS0FBRztRQUFDQyxTQUFTLEVBQUMsTUFBTTs7MEJBRXpCLDhEQUFDQyxJQUFFOzBCQUFDLHFCQUFtQjs7Ozs7b0JBQUs7MEJBRTVCLDhEQUFDQyxNQUFJO2dCQUFDRixTQUFTLEVBQUMsTUFBTTs7a0NBRXRCLDhEQUFDRyxPQUFLO3dCQUFDQyxJQUFJLEVBQUMsTUFBTTt3QkFBQ0osU0FBUyxFQUFDLE9BQU87d0JBQUNLLFdBQVcsRUFBQyxPQUFPO3VCQUFNVixRQUFRLENBQUMsT0FBTyxFQUFDO3dCQUFDVyxRQUFRLEVBQUMsSUFBSTtxQkFBQyxDQUFDOzs7OzRCQUFJO2tDQUNuRyw4REFBQ0gsT0FBSzt3QkFBQ0MsSUFBSSxFQUFDLE1BQU07d0JBQUNKLFNBQVMsRUFBQyxPQUFPO3dCQUFDSyxXQUFXLEVBQUMsVUFBVTt1QkFBTVYsUUFBUSxDQUFDLFVBQVUsRUFBQzt3QkFBQ1csUUFBUSxFQUFDLElBQUk7cUJBQUMsQ0FBQzs7Ozs0QkFBSTtrQ0FDekcsOERBQUNILE9BQUs7d0JBQUNDLElBQUksRUFBQyxRQUFRO3dCQUFDRyxLQUFLLEVBQUMsT0FBTzt3QkFBQ0MsT0FBTyxFQUFFWixZQUFZLENBQUNULFNBQVEsQ0FBQzs7Ozs7NEJBQUk7Ozs7OztvQkFJL0Q7MEJBQ1AsOERBQUNzQixHQUFDO2dCQUFDVCxTQUFTLEVBQUMsTUFBTTtnQkFBQ1UsSUFBSSxFQUFDLDZCQUE2QjtnQkFBQ0YsT0FBTyxFQUFFLFdBQUk7b0JBQ2xFcEIsT0FBTyxDQUFDQyxHQUFHLENBQUMscUJBQXFCLENBQUM7aUJBRW5DOzBCQUFFLHNCQUFvQjs7Ozs7b0JBQUk7Ozs7OztZQVlqQixDQUdMO0NBQ0o7R0FuRHVCSCxLQUFLOztRQUVxQkYsb0RBQU87OztBQUZqQ0UsS0FBQUEsS0FBSyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC5qcz9iZWU3Il0sInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHt1c2VGb3JtfSBmcm9tICdyZWFjdC1ob29rLWZvcm0nO1xuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiXG5cblxuXG5cblxuXG5cblxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBMb2dpbigpe1xuXG4gIGNvbnN0IHtyZWdpc3RlcixoYW5kbGVTdWJtaXQsZm9ybVN0YXRlOntlcnJvcn19PXVzZUZvcm0oKTtcblxuICBmdW5jdGlvbiBmb3JtZGF0YShmb3JtZGF0YSl7XG4gICAgY29uc29sZS5sb2coZm9ybWRhdGEpXG4gICAgLy9maXJzdCBnb2VzIHRoZSBhcGkgZW5kIHBvaW50IHVybCBhbmQgdGhlbiB0aGUgZGF0YSB0aGVuIGdlb3MgdGhlIGNyZWRlbnRpYWxcbiAgICBheGlvcy5nZXQoXCJodHRwOi8vbG9jYWxob3N0OjI5MDAvbG9naW5cIikudGhlbigocmVzdWx0KT0+e1xuICAgIGNvbnNvbGUubG9nKHJlc3VsdC5kYXRhKVxuXG4gICAgfSkuY2F0Y2goKCk9PntcbiAgICAgIGNvbnNvbGUubG9nKFwiZXJyb3JcIilcbiAgICB9KVxuICAgIFxuICAgIFxuXG4gIH1cbiAgcmV0dXJuKFxuICAgIFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybVwiPlxuXG48aDE+QXV0aGVudGljYXRpb24gRm9ybTwvaDE+XG5cbjxmb3JtIGNsYXNzTmFtZT1cImZvcm1cIj5cblxuPGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3NOYW1lPVwiaW5wdXRcIiBwbGFjZWhvbGRlcj0nZW1haWwnICB7Li4ucmVnaXN0ZXIoXCJlbWFpbFwiLHtyZXF1aXJlZDp0cnVlfSl9IC8+IFxuPGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3NOYW1lPVwiaW5wdXRcIiBwbGFjZWhvbGRlcj0ncGFzc3dvcmQnICB7Li4ucmVnaXN0ZXIoXCJwYXNzd29yZFwiLHtyZXF1aXJlZDp0cnVlfSl9IC8+IFxuPGlucHV0IHR5cGU9XCJzdWJtaXRcIiB2YWx1ZT1cImxvZ2luXCIgb25DbGljaz17aGFuZGxlU3VibWl0KGZvcm1kYXRhKX0gLz5cblxuXG5cbjwvZm9ybT5cbjxhIGNsYXNzTmFtZT0nZ29nbycgaHJlZj0naHR0cDovL2xvY2FsaG9zdDoyOTAwL2xvZ2luJyBvbkNsaWNrPXsoKT0+e1xuICBjb25zb2xlLmxvZyhcImF1dGhlbnRpY2F0ZWQgaHVkYWlcIilcblxufX0+IFNpZ24gaW4gd2l0aCBnb2dvbGU8L2E+XG5cblxuXG5cblxuXG5cblxuXG5cblxuICAgIDwvZGl2PlxuICAgIFxuICAgIFxuICAgIClcbn1cblxuXG4iXSwibmFtZXMiOlsidXNlRm9ybSIsImF4aW9zIiwiTG9naW4iLCJmb3JtZGF0YSIsImNvbnNvbGUiLCJsb2ciLCJnZXQiLCJ0aGVuIiwicmVzdWx0IiwiZGF0YSIsImNhdGNoIiwicmVnaXN0ZXIiLCJoYW5kbGVTdWJtaXQiLCJmb3JtU3RhdGUiLCJlcnJvciIsImRpdiIsImNsYXNzTmFtZSIsImgxIiwiZm9ybSIsImlucHV0IiwidHlwZSIsInBsYWNlaG9sZGVyIiwicmVxdWlyZWQiLCJ2YWx1ZSIsIm9uQ2xpY2siLCJhIiwiaHJlZiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

});