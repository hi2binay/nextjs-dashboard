"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/dashboard/invoices/[id]/edit/page",{

/***/ "(app-pages-browser)/./app/ui/invoices/edit-form.tsx":
/*!***************************************!*\
  !*** ./app/ui/invoices/edit-form.tsx ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ EditInvoiceForm; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _barrel_optimize_names_CheckIcon_ClockIcon_CurrencyDollarIcon_UserCircleIcon_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! __barrel_optimize__?names=CheckIcon,ClockIcon,CurrencyDollarIcon,UserCircleIcon!=!@heroicons/react/24/outline */ \"(app-pages-browser)/./node_modules/@heroicons/react/24/outline/esm/UserCircleIcon.js\");\n/* harmony import */ var _barrel_optimize_names_CheckIcon_ClockIcon_CurrencyDollarIcon_UserCircleIcon_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! __barrel_optimize__?names=CheckIcon,ClockIcon,CurrencyDollarIcon,UserCircleIcon!=!@heroicons/react/24/outline */ \"(app-pages-browser)/./node_modules/@heroicons/react/24/outline/esm/CurrencyDollarIcon.js\");\n/* harmony import */ var _barrel_optimize_names_CheckIcon_ClockIcon_CurrencyDollarIcon_UserCircleIcon_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! __barrel_optimize__?names=CheckIcon,ClockIcon,CurrencyDollarIcon,UserCircleIcon!=!@heroicons/react/24/outline */ \"(app-pages-browser)/./node_modules/@heroicons/react/24/outline/esm/ClockIcon.js\");\n/* harmony import */ var _barrel_optimize_names_CheckIcon_ClockIcon_CurrencyDollarIcon_UserCircleIcon_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! __barrel_optimize__?names=CheckIcon,ClockIcon,CurrencyDollarIcon,UserCircleIcon!=!@heroicons/react/24/outline */ \"(app-pages-browser)/./node_modules/@heroicons/react/24/outline/esm/CheckIcon.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _app_ui_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/app/ui/button */ \"(app-pages-browser)/./app/ui/button.tsx\");\n/* harmony import */ var _app_lib_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/app/lib/actions */ \"(app-pages-browser)/./app/lib/actions.ts\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \n\n\n\n\nfunction EditInvoiceForm(param) {\n    let { invoice, customers } = param;\n    const updateInvoiceWithId = _app_lib_actions__WEBPACK_IMPORTED_MODULE_3__.updateInvoice.bind(null, invoice.id);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n        action: (0,_app_lib_actions__WEBPACK_IMPORTED_MODULE_3__.updateInvoice)(id),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"rounded-md bg-gray-50 p-4 md:p-6\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"mb-4\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                htmlFor: \"customer\",\n                                className: \"mb-2 block text-sm font-medium\",\n                                children: \"Choose customer\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\webapplications\\\\nextjs-dashboard\\\\app\\\\ui\\\\invoices\\\\edit-form.tsx\",\n                                lineNumber: 29,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"relative\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"select\", {\n                                        id: \"customer\",\n                                        name: \"customerId\",\n                                        className: \"peer block w-full cursor-pointer rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500\",\n                                        defaultValue: invoice.customer_id,\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                                value: \"\",\n                                                disabled: true,\n                                                children: \"Select a customer\"\n                                            }, void 0, false, {\n                                                fileName: \"D:\\\\webapplications\\\\nextjs-dashboard\\\\app\\\\ui\\\\invoices\\\\edit-form.tsx\",\n                                                lineNumber: 39,\n                                                columnNumber: 15\n                                            }, this),\n                                            customers.map((customer)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                                    value: customer.id,\n                                                    children: customer.name\n                                                }, customer.id, false, {\n                                                    fileName: \"D:\\\\webapplications\\\\nextjs-dashboard\\\\app\\\\ui\\\\invoices\\\\edit-form.tsx\",\n                                                    lineNumber: 43,\n                                                    columnNumber: 17\n                                                }, this))\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"D:\\\\webapplications\\\\nextjs-dashboard\\\\app\\\\ui\\\\invoices\\\\edit-form.tsx\",\n                                        lineNumber: 33,\n                                        columnNumber: 13\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_CheckIcon_ClockIcon_CurrencyDollarIcon_UserCircleIcon_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                                        className: \"pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500\"\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\webapplications\\\\nextjs-dashboard\\\\app\\\\ui\\\\invoices\\\\edit-form.tsx\",\n                                        lineNumber: 48,\n                                        columnNumber: 13\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"D:\\\\webapplications\\\\nextjs-dashboard\\\\app\\\\ui\\\\invoices\\\\edit-form.tsx\",\n                                lineNumber: 32,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"D:\\\\webapplications\\\\nextjs-dashboard\\\\app\\\\ui\\\\invoices\\\\edit-form.tsx\",\n                        lineNumber: 28,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"mb-4\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                htmlFor: \"amount\",\n                                className: \"mb-2 block text-sm font-medium\",\n                                children: \"Choose an amount\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\webapplications\\\\nextjs-dashboard\\\\app\\\\ui\\\\invoices\\\\edit-form.tsx\",\n                                lineNumber: 54,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"relative mt-2 rounded-md\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"relative\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                            id: \"amount\",\n                                            name: \"amount\",\n                                            type: \"number\",\n                                            step: \"0.01\",\n                                            defaultValue: invoice.amount,\n                                            placeholder: \"Enter USD amount\",\n                                            className: \"peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500\"\n                                        }, void 0, false, {\n                                            fileName: \"D:\\\\webapplications\\\\nextjs-dashboard\\\\app\\\\ui\\\\invoices\\\\edit-form.tsx\",\n                                            lineNumber: 59,\n                                            columnNumber: 15\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_CheckIcon_ClockIcon_CurrencyDollarIcon_UserCircleIcon_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                                            className: \"pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900\"\n                                        }, void 0, false, {\n                                            fileName: \"D:\\\\webapplications\\\\nextjs-dashboard\\\\app\\\\ui\\\\invoices\\\\edit-form.tsx\",\n                                            lineNumber: 68,\n                                            columnNumber: 15\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"D:\\\\webapplications\\\\nextjs-dashboard\\\\app\\\\ui\\\\invoices\\\\edit-form.tsx\",\n                                    lineNumber: 58,\n                                    columnNumber: 13\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"D:\\\\webapplications\\\\nextjs-dashboard\\\\app\\\\ui\\\\invoices\\\\edit-form.tsx\",\n                                lineNumber: 57,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"D:\\\\webapplications\\\\nextjs-dashboard\\\\app\\\\ui\\\\invoices\\\\edit-form.tsx\",\n                        lineNumber: 53,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"fieldset\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"legend\", {\n                                className: \"mb-2 block text-sm font-medium\",\n                                children: \"Set the invoice status\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\webapplications\\\\nextjs-dashboard\\\\app\\\\ui\\\\invoices\\\\edit-form.tsx\",\n                                lineNumber: 75,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"rounded-md border border-gray-200 bg-white px-[14px] py-3\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"flex gap-4\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"flex items-center\",\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                                    id: \"pending\",\n                                                    name: \"status\",\n                                                    type: \"radio\",\n                                                    value: \"pending\",\n                                                    defaultChecked: invoice.status === \"pending\",\n                                                    className: \"h-4 w-4 cursor-pointer border-gray-300 bg-gray-100 text-gray-600 focus:ring-2\"\n                                                }, void 0, false, {\n                                                    fileName: \"D:\\\\webapplications\\\\nextjs-dashboard\\\\app\\\\ui\\\\invoices\\\\edit-form.tsx\",\n                                                    lineNumber: 81,\n                                                    columnNumber: 17\n                                                }, this),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                                    htmlFor: \"pending\",\n                                                    className: \"ml-2 flex cursor-pointer items-center gap-1.5 rounded-full bg-gray-100 px-3 py-1.5 text-xs font-medium text-gray-600\",\n                                                    children: [\n                                                        \"Pending \",\n                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_CheckIcon_ClockIcon_CurrencyDollarIcon_UserCircleIcon_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                                                            className: \"h-4 w-4\"\n                                                        }, void 0, false, {\n                                                            fileName: \"D:\\\\webapplications\\\\nextjs-dashboard\\\\app\\\\ui\\\\invoices\\\\edit-form.tsx\",\n                                                            lineNumber: 93,\n                                                            columnNumber: 27\n                                                        }, this)\n                                                    ]\n                                                }, void 0, true, {\n                                                    fileName: \"D:\\\\webapplications\\\\nextjs-dashboard\\\\app\\\\ui\\\\invoices\\\\edit-form.tsx\",\n                                                    lineNumber: 89,\n                                                    columnNumber: 17\n                                                }, this)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"D:\\\\webapplications\\\\nextjs-dashboard\\\\app\\\\ui\\\\invoices\\\\edit-form.tsx\",\n                                            lineNumber: 80,\n                                            columnNumber: 15\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"flex items-center\",\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                                    id: \"paid\",\n                                                    name: \"status\",\n                                                    type: \"radio\",\n                                                    value: \"paid\",\n                                                    defaultChecked: invoice.status === \"paid\",\n                                                    className: \"h-4 w-4 cursor-pointer border-gray-300 bg-gray-100 text-gray-600 focus:ring-2\"\n                                                }, void 0, false, {\n                                                    fileName: \"D:\\\\webapplications\\\\nextjs-dashboard\\\\app\\\\ui\\\\invoices\\\\edit-form.tsx\",\n                                                    lineNumber: 97,\n                                                    columnNumber: 17\n                                                }, this),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                                    htmlFor: \"paid\",\n                                                    className: \"ml-2 flex cursor-pointer items-center gap-1.5 rounded-full bg-green-500 px-3 py-1.5 text-xs font-medium text-white\",\n                                                    children: [\n                                                        \"Paid \",\n                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_CheckIcon_ClockIcon_CurrencyDollarIcon_UserCircleIcon_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                                                            className: \"h-4 w-4\"\n                                                        }, void 0, false, {\n                                                            fileName: \"D:\\\\webapplications\\\\nextjs-dashboard\\\\app\\\\ui\\\\invoices\\\\edit-form.tsx\",\n                                                            lineNumber: 109,\n                                                            columnNumber: 24\n                                                        }, this)\n                                                    ]\n                                                }, void 0, true, {\n                                                    fileName: \"D:\\\\webapplications\\\\nextjs-dashboard\\\\app\\\\ui\\\\invoices\\\\edit-form.tsx\",\n                                                    lineNumber: 105,\n                                                    columnNumber: 17\n                                                }, this)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"D:\\\\webapplications\\\\nextjs-dashboard\\\\app\\\\ui\\\\invoices\\\\edit-form.tsx\",\n                                            lineNumber: 96,\n                                            columnNumber: 15\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"D:\\\\webapplications\\\\nextjs-dashboard\\\\app\\\\ui\\\\invoices\\\\edit-form.tsx\",\n                                    lineNumber: 79,\n                                    columnNumber: 13\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"D:\\\\webapplications\\\\nextjs-dashboard\\\\app\\\\ui\\\\invoices\\\\edit-form.tsx\",\n                                lineNumber: 78,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"D:\\\\webapplications\\\\nextjs-dashboard\\\\app\\\\ui\\\\invoices\\\\edit-form.tsx\",\n                        lineNumber: 74,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\webapplications\\\\nextjs-dashboard\\\\app\\\\ui\\\\invoices\\\\edit-form.tsx\",\n                lineNumber: 26,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"mt-6 flex justify-end gap-4\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                        href: \"/dashboard/invoices\",\n                        className: \"flex h-10 items-center rounded-lg bg-gray-100 px-4 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-200\",\n                        children: \"Cancel\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\webapplications\\\\nextjs-dashboard\\\\app\\\\ui\\\\invoices\\\\edit-form.tsx\",\n                        lineNumber: 117,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_app_ui_button__WEBPACK_IMPORTED_MODULE_2__.Button, {\n                        type: \"submit\",\n                        children: \"Edit Invoice\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\webapplications\\\\nextjs-dashboard\\\\app\\\\ui\\\\invoices\\\\edit-form.tsx\",\n                        lineNumber: 123,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\webapplications\\\\nextjs-dashboard\\\\app\\\\ui\\\\invoices\\\\edit-form.tsx\",\n                lineNumber: 116,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\webapplications\\\\nextjs-dashboard\\\\app\\\\ui\\\\invoices\\\\edit-form.tsx\",\n        lineNumber: 25,\n        columnNumber: 5\n    }, this);\n}\n_c = EditInvoiceForm;\nvar _c;\n$RefreshReg$(_c, \"EditInvoiceForm\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC91aS9pbnZvaWNlcy9lZGl0LWZvcm0udHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBUXFDO0FBQ1I7QUFDWTtBQUNTO0FBRW5DLFNBQVNPLGdCQUFnQixLQU12QztRQU51QyxFQUN0Q0MsT0FBTyxFQUNQQyxTQUFTLEVBSVYsR0FOdUM7SUFRdEMsTUFBTUMsc0JBQXNCSixnRUFBa0IsQ0FBQyxNQUFNRSxRQUFRSSxFQUFFO0lBRS9ELHFCQUNFLDhEQUFDQztRQUFLQyxRQUFRUiwrREFBYUEsQ0FBQ007OzBCQUMxQiw4REFBQ0c7Z0JBQUlDLFdBQVU7O2tDQUViLDhEQUFDRDt3QkFBSUMsV0FBVTs7MENBQ2IsOERBQUNDO2dDQUFNQyxTQUFRO2dDQUFXRixXQUFVOzBDQUFpQzs7Ozs7OzBDQUdyRSw4REFBQ0Q7Z0NBQUlDLFdBQVU7O2tEQUNiLDhEQUFDRzt3Q0FDQ1AsSUFBRzt3Q0FDSFEsTUFBSzt3Q0FDTEosV0FBVTt3Q0FDVkssY0FBY2IsUUFBUWMsV0FBVzs7MERBRWpDLDhEQUFDQztnREFBT0MsT0FBTTtnREFBR0MsUUFBUTswREFBQzs7Ozs7OzRDQUd6QmhCLFVBQVVpQixHQUFHLENBQUMsQ0FBQ0MseUJBQ2QsOERBQUNKO29EQUF5QkMsT0FBT0csU0FBU2YsRUFBRTs4REFDekNlLFNBQVNQLElBQUk7bURBREhPLFNBQVNmLEVBQUU7Ozs7Ozs7Ozs7O2tEQUs1Qiw4REFBQ1QsK0lBQWNBO3dDQUFDYSxXQUFVOzs7Ozs7Ozs7Ozs7Ozs7Ozs7a0NBSzlCLDhEQUFDRDt3QkFBSUMsV0FBVTs7MENBQ2IsOERBQUNDO2dDQUFNQyxTQUFRO2dDQUFTRixXQUFVOzBDQUFpQzs7Ozs7OzBDQUduRSw4REFBQ0Q7Z0NBQUlDLFdBQVU7MENBQ2IsNEVBQUNEO29DQUFJQyxXQUFVOztzREFDYiw4REFBQ1k7NENBQ0NoQixJQUFHOzRDQUNIUSxNQUFLOzRDQUNMUyxNQUFLOzRDQUNMQyxNQUFLOzRDQUNMVCxjQUFjYixRQUFRdUIsTUFBTTs0Q0FDNUJDLGFBQVk7NENBQ1poQixXQUFVOzs7Ozs7c0RBRVosOERBQUNkLCtJQUFrQkE7NENBQUNjLFdBQVU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2tDQU1wQyw4REFBQ2lCOzswQ0FDQyw4REFBQ0M7Z0NBQU9sQixXQUFVOzBDQUFpQzs7Ozs7OzBDQUduRCw4REFBQ0Q7Z0NBQUlDLFdBQVU7MENBQ2IsNEVBQUNEO29DQUFJQyxXQUFVOztzREFDYiw4REFBQ0Q7NENBQUlDLFdBQVU7OzhEQUNiLDhEQUFDWTtvREFDQ2hCLElBQUc7b0RBQ0hRLE1BQUs7b0RBQ0xTLE1BQUs7b0RBQ0xMLE9BQU07b0RBQ05XLGdCQUFnQjNCLFFBQVE0QixNQUFNLEtBQUs7b0RBQ25DcEIsV0FBVTs7Ozs7OzhEQUVaLDhEQUFDQztvREFDQ0MsU0FBUTtvREFDUkYsV0FBVTs7d0RBQ1g7c0VBQ1MsOERBQUNmLCtJQUFTQTs0REFBQ2UsV0FBVTs7Ozs7Ozs7Ozs7Ozs7Ozs7O3NEQUdqQyw4REFBQ0Q7NENBQUlDLFdBQVU7OzhEQUNiLDhEQUFDWTtvREFDQ2hCLElBQUc7b0RBQ0hRLE1BQUs7b0RBQ0xTLE1BQUs7b0RBQ0xMLE9BQU07b0RBQ05XLGdCQUFnQjNCLFFBQVE0QixNQUFNLEtBQUs7b0RBQ25DcEIsV0FBVTs7Ozs7OzhEQUVaLDhEQUFDQztvREFDQ0MsU0FBUTtvREFDUkYsV0FBVTs7d0RBQ1g7c0VBQ00sOERBQUNoQiwrSUFBU0E7NERBQUNnQixXQUFVOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzswQkFPdEMsOERBQUNEO2dCQUFJQyxXQUFVOztrQ0FDYiw4REFBQ1osa0RBQUlBO3dCQUNIaUMsTUFBSzt3QkFDTHJCLFdBQVU7a0NBQ1g7Ozs7OztrQ0FHRCw4REFBQ1gsa0RBQU1BO3dCQUFDd0IsTUFBSztrQ0FBUzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSTlCO0tBakh3QnRCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC91aS9pbnZvaWNlcy9lZGl0LWZvcm0udHN4Pzc2ZmYiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBjbGllbnQnO1xyXG5cclxuaW1wb3J0IHsgQ3VzdG9tZXJGaWVsZCwgSW52b2ljZUZvcm0gfSBmcm9tICdAL2FwcC9saWIvZGVmaW5pdGlvbnMnO1xyXG5pbXBvcnQge1xyXG4gIENoZWNrSWNvbixcclxuICBDbG9ja0ljb24sXHJcbiAgQ3VycmVuY3lEb2xsYXJJY29uLFxyXG4gIFVzZXJDaXJjbGVJY29uLFxyXG59IGZyb20gJ0BoZXJvaWNvbnMvcmVhY3QvMjQvb3V0bGluZSc7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gJ0AvYXBwL3VpL2J1dHRvbic7XHJcbmltcG9ydCB7IHVwZGF0ZUludm9pY2UgfSBmcm9tICdAL2FwcC9saWIvYWN0aW9ucyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBFZGl0SW52b2ljZUZvcm0oe1xyXG4gIGludm9pY2UsXHJcbiAgY3VzdG9tZXJzLFxyXG59OiB7XHJcbiAgaW52b2ljZTogSW52b2ljZUZvcm07XHJcbiAgY3VzdG9tZXJzOiBDdXN0b21lckZpZWxkW107XHJcbn0pIHtcclxuXHJcbiAgY29uc3QgdXBkYXRlSW52b2ljZVdpdGhJZCA9IHVwZGF0ZUludm9pY2UuYmluZChudWxsLCBpbnZvaWNlLmlkKTtcclxuICBcclxuICByZXR1cm4gKFxyXG4gICAgPGZvcm0gYWN0aW9uPXt1cGRhdGVJbnZvaWNlKGlkKX0+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm91bmRlZC1tZCBiZy1ncmF5LTUwIHAtNCBtZDpwLTZcIj5cclxuICAgICAgICB7LyogQ3VzdG9tZXIgTmFtZSAqL31cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1iLTRcIj5cclxuICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiY3VzdG9tZXJcIiBjbGFzc05hbWU9XCJtYi0yIGJsb2NrIHRleHQtc20gZm9udC1tZWRpdW1cIj5cclxuICAgICAgICAgICAgQ2hvb3NlIGN1c3RvbWVyXHJcbiAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZVwiPlxyXG4gICAgICAgICAgICA8c2VsZWN0XHJcbiAgICAgICAgICAgICAgaWQ9XCJjdXN0b21lclwiXHJcbiAgICAgICAgICAgICAgbmFtZT1cImN1c3RvbWVySWRcIlxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInBlZXIgYmxvY2sgdy1mdWxsIGN1cnNvci1wb2ludGVyIHJvdW5kZWQtbWQgYm9yZGVyIGJvcmRlci1ncmF5LTIwMCBweS0yIHBsLTEwIHRleHQtc20gb3V0bGluZS0yIHBsYWNlaG9sZGVyOnRleHQtZ3JheS01MDBcIlxyXG4gICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT17aW52b2ljZS5jdXN0b21lcl9pZH1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJcIiBkaXNhYmxlZD5cclxuICAgICAgICAgICAgICAgIFNlbGVjdCBhIGN1c3RvbWVyXHJcbiAgICAgICAgICAgICAgPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAge2N1c3RvbWVycy5tYXAoKGN1c3RvbWVyKSA9PiAoXHJcbiAgICAgICAgICAgICAgICA8b3B0aW9uIGtleT17Y3VzdG9tZXIuaWR9IHZhbHVlPXtjdXN0b21lci5pZH0+XHJcbiAgICAgICAgICAgICAgICAgIHtjdXN0b21lci5uYW1lfVxyXG4gICAgICAgICAgICAgICAgPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgIDwvc2VsZWN0PlxyXG4gICAgICAgICAgICA8VXNlckNpcmNsZUljb24gY2xhc3NOYW1lPVwicG9pbnRlci1ldmVudHMtbm9uZSBhYnNvbHV0ZSBsZWZ0LTMgdG9wLTEvMiBoLVsxOHB4XSB3LVsxOHB4XSAtdHJhbnNsYXRlLXktMS8yIHRleHQtZ3JheS01MDBcIiAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIHsvKiBJbnZvaWNlIEFtb3VudCAqL31cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1iLTRcIj5cclxuICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiYW1vdW50XCIgY2xhc3NOYW1lPVwibWItMiBibG9jayB0ZXh0LXNtIGZvbnQtbWVkaXVtXCI+XHJcbiAgICAgICAgICAgIENob29zZSBhbiBhbW91bnRcclxuICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlIG10LTIgcm91bmRlZC1tZFwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlXCI+XHJcbiAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICBpZD1cImFtb3VudFwiXHJcbiAgICAgICAgICAgICAgICBuYW1lPVwiYW1vdW50XCJcclxuICAgICAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxyXG4gICAgICAgICAgICAgICAgc3RlcD1cIjAuMDFcIlxyXG4gICAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlPXtpbnZvaWNlLmFtb3VudH1cclxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW50ZXIgVVNEIGFtb3VudFwiXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJwZWVyIGJsb2NrIHctZnVsbCByb3VuZGVkLW1kIGJvcmRlciBib3JkZXItZ3JheS0yMDAgcHktMiBwbC0xMCB0ZXh0LXNtIG91dGxpbmUtMiBwbGFjZWhvbGRlcjp0ZXh0LWdyYXktNTAwXCJcclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDxDdXJyZW5jeURvbGxhckljb24gY2xhc3NOYW1lPVwicG9pbnRlci1ldmVudHMtbm9uZSBhYnNvbHV0ZSBsZWZ0LTMgdG9wLTEvMiBoLVsxOHB4XSB3LVsxOHB4XSAtdHJhbnNsYXRlLXktMS8yIHRleHQtZ3JheS01MDAgcGVlci1mb2N1czp0ZXh0LWdyYXktOTAwXCIgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgey8qIEludm9pY2UgU3RhdHVzICovfVxyXG4gICAgICAgIDxmaWVsZHNldD5cclxuICAgICAgICAgIDxsZWdlbmQgY2xhc3NOYW1lPVwibWItMiBibG9jayB0ZXh0LXNtIGZvbnQtbWVkaXVtXCI+XHJcbiAgICAgICAgICAgIFNldCB0aGUgaW52b2ljZSBzdGF0dXNcclxuICAgICAgICAgIDwvbGVnZW5kPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3VuZGVkLW1kIGJvcmRlciBib3JkZXItZ3JheS0yMDAgYmctd2hpdGUgcHgtWzE0cHhdIHB5LTNcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGdhcC00XCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgIGlkPVwicGVuZGluZ1wiXHJcbiAgICAgICAgICAgICAgICAgIG5hbWU9XCJzdGF0dXNcIlxyXG4gICAgICAgICAgICAgICAgICB0eXBlPVwicmFkaW9cIlxyXG4gICAgICAgICAgICAgICAgICB2YWx1ZT1cInBlbmRpbmdcIlxyXG4gICAgICAgICAgICAgICAgICBkZWZhdWx0Q2hlY2tlZD17aW52b2ljZS5zdGF0dXMgPT09ICdwZW5kaW5nJ31cclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaC00IHctNCBjdXJzb3ItcG9pbnRlciBib3JkZXItZ3JheS0zMDAgYmctZ3JheS0xMDAgdGV4dC1ncmF5LTYwMCBmb2N1czpyaW5nLTJcIlxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDxsYWJlbFxyXG4gICAgICAgICAgICAgICAgICBodG1sRm9yPVwicGVuZGluZ1wiXHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm1sLTIgZmxleCBjdXJzb3ItcG9pbnRlciBpdGVtcy1jZW50ZXIgZ2FwLTEuNSByb3VuZGVkLWZ1bGwgYmctZ3JheS0xMDAgcHgtMyBweS0xLjUgdGV4dC14cyBmb250LW1lZGl1bSB0ZXh0LWdyYXktNjAwXCJcclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgUGVuZGluZyA8Q2xvY2tJY29uIGNsYXNzTmFtZT1cImgtNCB3LTRcIiAvPlxyXG4gICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgaWQ9XCJwYWlkXCJcclxuICAgICAgICAgICAgICAgICAgbmFtZT1cInN0YXR1c1wiXHJcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJyYWRpb1wiXHJcbiAgICAgICAgICAgICAgICAgIHZhbHVlPVwicGFpZFwiXHJcbiAgICAgICAgICAgICAgICAgIGRlZmF1bHRDaGVja2VkPXtpbnZvaWNlLnN0YXR1cyA9PT0gJ3BhaWQnfVxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJoLTQgdy00IGN1cnNvci1wb2ludGVyIGJvcmRlci1ncmF5LTMwMCBiZy1ncmF5LTEwMCB0ZXh0LWdyYXktNjAwIGZvY3VzOnJpbmctMlwiXHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPGxhYmVsXHJcbiAgICAgICAgICAgICAgICAgIGh0bWxGb3I9XCJwYWlkXCJcclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibWwtMiBmbGV4IGN1cnNvci1wb2ludGVyIGl0ZW1zLWNlbnRlciBnYXAtMS41IHJvdW5kZWQtZnVsbCBiZy1ncmVlbi01MDAgcHgtMyBweS0xLjUgdGV4dC14cyBmb250LW1lZGl1bSB0ZXh0LXdoaXRlXCJcclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgUGFpZCA8Q2hlY2tJY29uIGNsYXNzTmFtZT1cImgtNCB3LTRcIiAvPlxyXG4gICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2ZpZWxkc2V0PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdC02IGZsZXgganVzdGlmeS1lbmQgZ2FwLTRcIj5cclxuICAgICAgICA8TGlua1xyXG4gICAgICAgICAgaHJlZj1cIi9kYXNoYm9hcmQvaW52b2ljZXNcIlxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwiZmxleCBoLTEwIGl0ZW1zLWNlbnRlciByb3VuZGVkLWxnIGJnLWdyYXktMTAwIHB4LTQgdGV4dC1zbSBmb250LW1lZGl1bSB0ZXh0LWdyYXktNjAwIHRyYW5zaXRpb24tY29sb3JzIGhvdmVyOmJnLWdyYXktMjAwXCJcclxuICAgICAgICA+XHJcbiAgICAgICAgICBDYW5jZWxcclxuICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgPEJ1dHRvbiB0eXBlPVwic3VibWl0XCI+RWRpdCBJbnZvaWNlPC9CdXR0b24+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9mb3JtPlxyXG4gICk7XHJcbn1cclxuIl0sIm5hbWVzIjpbIkNoZWNrSWNvbiIsIkNsb2NrSWNvbiIsIkN1cnJlbmN5RG9sbGFySWNvbiIsIlVzZXJDaXJjbGVJY29uIiwiTGluayIsIkJ1dHRvbiIsInVwZGF0ZUludm9pY2UiLCJFZGl0SW52b2ljZUZvcm0iLCJpbnZvaWNlIiwiY3VzdG9tZXJzIiwidXBkYXRlSW52b2ljZVdpdGhJZCIsImJpbmQiLCJpZCIsImZvcm0iLCJhY3Rpb24iLCJkaXYiLCJjbGFzc05hbWUiLCJsYWJlbCIsImh0bWxGb3IiLCJzZWxlY3QiLCJuYW1lIiwiZGVmYXVsdFZhbHVlIiwiY3VzdG9tZXJfaWQiLCJvcHRpb24iLCJ2YWx1ZSIsImRpc2FibGVkIiwibWFwIiwiY3VzdG9tZXIiLCJpbnB1dCIsInR5cGUiLCJzdGVwIiwiYW1vdW50IiwicGxhY2Vob2xkZXIiLCJmaWVsZHNldCIsImxlZ2VuZCIsImRlZmF1bHRDaGVja2VkIiwic3RhdHVzIiwiaHJlZiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/ui/invoices/edit-form.tsx\n"));

/***/ })

});