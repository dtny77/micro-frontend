"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdateproduct"]("__federation_expose_ProductApp",{

/***/ "./components/ProductListing.js":
/*!**************************************!*\
  !*** ./components/ProductListing.js ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ ProductListing; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"webpack/sharing/consume/default/react/jsx-dev-runtime/react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"webpack/sharing/consume/default/react/react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-router-dom */ \"./node_modules/react-router-dom/esm/react-router-dom.js\");\n/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mui/material/Box */ \"./node_modules/@mui/material/Box/index.js\");\n/* harmony import */ var _mui_material_Grid2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/material/Grid2 */ \"./node_modules/@mui/material/Grid2/index.js\");\n/* harmony import */ var _mui_material_Card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/material/Card */ \"./node_modules/@mui/material/Card/index.js\");\n/* harmony import */ var _mui_material_CardActions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @mui/material/CardActions */ \"./node_modules/@mui/material/CardActions/index.js\");\n/* harmony import */ var _mui_material_CardContent__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/material/CardContent */ \"./node_modules/@mui/material/CardContent/index.js\");\n/* harmony import */ var _mui_material_Button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @mui/material/Button */ \"./node_modules/@mui/material/Button/index.js\");\n/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/material/Typography */ \"./node_modules/@mui/material/Typography/index.js\");\n/* harmony import */ var _mui_material_CircularProgress__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/material/CircularProgress */ \"./node_modules/@mui/material/CircularProgress/index.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\nfunction ProductListing() {\n    _s();\n    const [products, setProducts] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const fetchProducts = async ()=>{\n            try {\n                const response = await fetch(\"http://localhost:9999/products\");\n                const data = await response.json();\n                setProducts(data);\n                setLoading(false);\n            } catch (err) {\n                console.log(\"Error loading products \", err);\n                setLoading(false);\n            }\n        };\n        fetchProducts();\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Box__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n            component: \"section\",\n            children: [\n                loading && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_CircularProgress__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                    fileName: \"/Users/quangnguyen/projects/micro-frontend/mfp/packages/product-nextjs-react-18/product/components/ProductListing.js\",\n                    lineNumber: 36,\n                    columnNumber: 21\n                }, this),\n                !loading && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Grid2__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                    container: true,\n                    spacing: 2,\n                    children: products.map((p)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Grid2__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                            size: 12,\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Card__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                                variant: \"outlined\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_CardContent__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                                                gutterBottom: true,\n                                                variant: \"h6\",\n                                                children: p.productName\n                                            }, void 0, false, {\n                                                fileName: \"/Users/quangnguyen/projects/micro-frontend/mfp/packages/product-nextjs-react-18/product/components/ProductListing.js\",\n                                                lineNumber: 42,\n                                                columnNumber: 17\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                                                variant: \"subtitle1\",\n                                                gutterBottom: true,\n                                                children: p.apir || p.exchange + \":\" + p.ticker\n                                            }, void 0, false, {\n                                                fileName: \"/Users/quangnguyen/projects/micro-frontend/mfp/packages/product-nextjs-react-18/product/components/ProductListing.js\",\n                                                lineNumber: 45,\n                                                columnNumber: 17\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                                                variant: \"subtitle2\",\n                                                gutterBottom: true,\n                                                children: [\n                                                    \"Fee: \",\n                                                    p.fee.value,\n                                                    \"%\"\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"/Users/quangnguyen/projects/micro-frontend/mfp/packages/product-nextjs-react-18/product/components/ProductListing.js\",\n                                                lineNumber: 48,\n                                                columnNumber: 17\n                                            }, this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/quangnguyen/projects/micro-frontend/mfp/packages/product-nextjs-react-18/product/components/ProductListing.js\",\n                                        lineNumber: 41,\n                                        columnNumber: 15\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_CardActions__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_router_dom__WEBPACK_IMPORTED_MODULE_9__.Link, {\n                                            to: \"/\" + p.portId,\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Button__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {\n                                                size: \"small\",\n                                                children: \"Learn More\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/quangnguyen/projects/micro-frontend/mfp/packages/product-nextjs-react-18/product/components/ProductListing.js\",\n                                                lineNumber: 54,\n                                                columnNumber: 19\n                                            }, this)\n                                        }, void 0, false, {\n                                            fileName: \"/Users/quangnguyen/projects/micro-frontend/mfp/packages/product-nextjs-react-18/product/components/ProductListing.js\",\n                                            lineNumber: 53,\n                                            columnNumber: 17\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/quangnguyen/projects/micro-frontend/mfp/packages/product-nextjs-react-18/product/components/ProductListing.js\",\n                                        lineNumber: 52,\n                                        columnNumber: 15\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/quangnguyen/projects/micro-frontend/mfp/packages/product-nextjs-react-18/product/components/ProductListing.js\",\n                                lineNumber: 40,\n                                columnNumber: 13\n                            }, this)\n                        }, p.ticker, false, {\n                            fileName: \"/Users/quangnguyen/projects/micro-frontend/mfp/packages/product-nextjs-react-18/product/components/ProductListing.js\",\n                            lineNumber: 39,\n                            columnNumber: 11\n                        }, this))\n                }, void 0, false, {\n                    fileName: \"/Users/quangnguyen/projects/micro-frontend/mfp/packages/product-nextjs-react-18/product/components/ProductListing.js\",\n                    lineNumber: 37,\n                    columnNumber: 22\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/quangnguyen/projects/micro-frontend/mfp/packages/product-nextjs-react-18/product/components/ProductListing.js\",\n            lineNumber: 35,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/quangnguyen/projects/micro-frontend/mfp/packages/product-nextjs-react-18/product/components/ProductListing.js\",\n        lineNumber: 34,\n        columnNumber: 5\n    }, this);\n}\n_s(ProductListing, \"KWid68LpBxbFhyja5dauhUIHvyY=\");\n_c = ProductListing;\nvar _c;\n$RefreshReg$(_c, \"ProductListing\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1Byb2R1Y3RMaXN0aW5nLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBbUQ7QUFDWDtBQUNKO0FBQ0c7QUFDRDtBQUNjO0FBQ0E7QUFDVjtBQUNRO0FBQ1k7QUFHL0MsU0FBU1k7O0lBRXRCLE1BQU0sQ0FBQ0MsVUFBVUMsWUFBWSxHQUFHYiwrQ0FBUUEsQ0FBQyxFQUFFO0lBQzNDLE1BQU0sQ0FBQ2MsU0FBU0MsV0FBVyxHQUFHZiwrQ0FBUUEsQ0FBQztJQUV2Q0MsZ0RBQVNBLENBQUM7UUFDUixNQUFNZSxnQkFBZ0I7WUFDcEIsSUFBSTtnQkFDRixNQUFNQyxXQUFXLE1BQU1DLE1BQU07Z0JBQzdCLE1BQU1DLE9BQU8sTUFBTUYsU0FBU0csSUFBSTtnQkFDaENQLFlBQVlNO2dCQUNaSixXQUFXO1lBQ2IsRUFBRSxPQUFPTSxLQUFLO2dCQUNaQyxRQUFRQyxHQUFHLENBQUMsMkJBQTJCRjtnQkFDdkNOLFdBQVc7WUFDYjtRQUNGO1FBQ0FDO0lBQ0YsR0FBRyxFQUFFO0lBRUwscUJBQ0UsOERBQUNqQix1REFBYztrQkFDYiw0RUFBQ0kseURBQUdBO1lBQUNzQixXQUFVOztnQkFDWlgseUJBQVcsOERBQUNKLHNFQUFnQkE7Ozs7O2dCQUM1QixDQUFDSSx5QkFBVyw4REFBQ1YsMkRBQUlBO29CQUFDc0IsU0FBUztvQkFBQ0MsU0FBUzs4QkFDckNmLFNBQVNnQixHQUFHLENBQUNDLENBQUFBLGtCQUNaLDhEQUFDekIsMkRBQUlBOzRCQUFDMEIsTUFBTTtzQ0FDViw0RUFBQ3pCLDBEQUFJQTtnQ0FBQzBCLFNBQVE7O2tEQUNaLDhEQUFDeEIsaUVBQVdBOzswREFDViw4REFBQ0UsZ0VBQVVBO2dEQUFDdUIsWUFBWTtnREFBQ0QsU0FBUTswREFDOUJGLEVBQUVJLFdBQVc7Ozs7OzswREFFaEIsOERBQUN4QixnRUFBVUE7Z0RBQUNzQixTQUFRO2dEQUFZQyxZQUFZOzBEQUN6Q0gsRUFBRUssSUFBSSxJQUFLTCxFQUFFTSxRQUFRLEdBQUcsTUFBTU4sRUFBRU8sTUFBTTs7Ozs7OzBEQUV6Qyw4REFBQzNCLGdFQUFVQTtnREFBQ3NCLFNBQVE7Z0RBQVlDLFlBQVk7O29EQUFDO29EQUNyQ0gsRUFBRVEsR0FBRyxDQUFDQyxLQUFLO29EQUFDOzs7Ozs7Ozs7Ozs7O2tEQUd0Qiw4REFBQ2hDLGlFQUFXQTtrREFDViw0RUFBQ0osa0RBQUlBOzRDQUFDcUMsSUFBSSxNQUFNVixFQUFFVyxNQUFNO3NEQUN0Qiw0RUFBQ2hDLDZEQUFNQTtnREFBQ3NCLE1BQUs7MERBQVE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7MkJBZlJELEVBQUVPLE1BQU07Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQTZCdkM7R0F2RHdCekI7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wcm9kdWN0Ly4vY29tcG9uZW50cy9Qcm9kdWN0TGlzdGluZy5qcz80NzUzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgTGluayB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xuaW1wb3J0IEJveCBmcm9tICdAbXVpL21hdGVyaWFsL0JveCc7XG5pbXBvcnQgR3JpZCBmcm9tICdAbXVpL21hdGVyaWFsL0dyaWQyJztcbmltcG9ydCBDYXJkIGZyb20gJ0BtdWkvbWF0ZXJpYWwvQ2FyZCc7XG5pbXBvcnQgQ2FyZEFjdGlvbnMgZnJvbSAnQG11aS9tYXRlcmlhbC9DYXJkQWN0aW9ucyc7XG5pbXBvcnQgQ2FyZENvbnRlbnQgZnJvbSAnQG11aS9tYXRlcmlhbC9DYXJkQ29udGVudCc7XG5pbXBvcnQgQnV0dG9uIGZyb20gJ0BtdWkvbWF0ZXJpYWwvQnV0dG9uJztcbmltcG9ydCBUeXBvZ3JhcGh5IGZyb20gJ0BtdWkvbWF0ZXJpYWwvVHlwb2dyYXBoeSc7XG5pbXBvcnQgQ2lyY3VsYXJQcm9ncmVzcyBmcm9tICdAbXVpL21hdGVyaWFsL0NpcmN1bGFyUHJvZ3Jlc3MnO1xuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFByb2R1Y3RMaXN0aW5nKCkge1xuXG4gIGNvbnN0IFtwcm9kdWN0cywgc2V0UHJvZHVjdHNdID0gdXNlU3RhdGUoW10pO1xuICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZSh0cnVlKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGZldGNoUHJvZHVjdHMgPSBhc3luYyAoKSA9PiB7XG4gICAgICB0cnkge1xuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFwiaHR0cDovL2xvY2FsaG9zdDo5OTk5L3Byb2R1Y3RzXCIpO1xuICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgICAgICBzZXRQcm9kdWN0cyhkYXRhKTtcbiAgICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XG4gICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ0Vycm9yIGxvYWRpbmcgcHJvZHVjdHMgJywgZXJyKTtcbiAgICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XG4gICAgICB9XG4gICAgfVxuICAgIGZldGNoUHJvZHVjdHMoKTtcbiAgfSwgW10pXG5cbiAgcmV0dXJuIChcbiAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICA8Qm94IGNvbXBvbmVudD1cInNlY3Rpb25cIj5cbiAgICAgICAge2xvYWRpbmcgJiYgPENpcmN1bGFyUHJvZ3Jlc3MvPn1cbiAgICAgICAgeyFsb2FkaW5nICYmIDxHcmlkIGNvbnRhaW5lciBzcGFjaW5nPXsyfT5cbiAgICAgICAge3Byb2R1Y3RzLm1hcChwID0+IChcbiAgICAgICAgICA8R3JpZCBzaXplPXsxMn0ga2V5PXtwLnRpY2tlcn0+XG4gICAgICAgICAgICA8Q2FyZCB2YXJpYW50PVwib3V0bGluZWRcIj5cbiAgICAgICAgICAgICAgPENhcmRDb250ZW50PlxuICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IGd1dHRlckJvdHRvbSB2YXJpYW50PVwiaDZcIj5cbiAgICAgICAgICAgICAgICAgIHtwLnByb2R1Y3ROYW1lfVxuICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwic3VidGl0bGUxXCIgZ3V0dGVyQm90dG9tPlxuICAgICAgICAgICAgICAgICAge3AuYXBpciB8fCAocC5leGNoYW5nZSArICc6JyArIHAudGlja2VyKX1cbiAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cInN1YnRpdGxlMlwiIGd1dHRlckJvdHRvbT5cbiAgICAgICAgICAgICAgICAgIEZlZToge3AuZmVlLnZhbHVlfSVcbiAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgIDwvQ2FyZENvbnRlbnQ+XG4gICAgICAgICAgICAgIDxDYXJkQWN0aW9ucz5cbiAgICAgICAgICAgICAgICA8TGluayB0bz17Jy8nICsgcC5wb3J0SWR9PlxuICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBzaXplPVwic21hbGxcIj5MZWFybiBNb3JlPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICA8L0NhcmRBY3Rpb25zPlxuICAgICAgICAgICAgPC9DYXJkPlxuICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgKSl9XG4gICAgICAgIDwvR3JpZD5cbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgIDwvQm94PlxuICAgICAgXG4gICAgICBcbiAgICA8L1JlYWN0LkZyYWdtZW50PlxuICApO1xufVxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJMaW5rIiwiQm94IiwiR3JpZCIsIkNhcmQiLCJDYXJkQWN0aW9ucyIsIkNhcmRDb250ZW50IiwiQnV0dG9uIiwiVHlwb2dyYXBoeSIsIkNpcmN1bGFyUHJvZ3Jlc3MiLCJQcm9kdWN0TGlzdGluZyIsInByb2R1Y3RzIiwic2V0UHJvZHVjdHMiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsImZldGNoUHJvZHVjdHMiLCJyZXNwb25zZSIsImZldGNoIiwiZGF0YSIsImpzb24iLCJlcnIiLCJjb25zb2xlIiwibG9nIiwiRnJhZ21lbnQiLCJjb21wb25lbnQiLCJjb250YWluZXIiLCJzcGFjaW5nIiwibWFwIiwicCIsInNpemUiLCJ2YXJpYW50IiwiZ3V0dGVyQm90dG9tIiwicHJvZHVjdE5hbWUiLCJhcGlyIiwiZXhjaGFuZ2UiLCJ0aWNrZXIiLCJmZWUiLCJ2YWx1ZSIsInRvIiwicG9ydElkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/ProductListing.js\n"));

/***/ })

});