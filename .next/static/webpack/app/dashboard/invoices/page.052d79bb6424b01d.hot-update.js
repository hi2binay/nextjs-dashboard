"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/dashboard/invoices/page",{

/***/ "(app-pages-browser)/./app/ui/invoices/pagination.tsx":
/*!****************************************!*\
  !*** ./app/ui/invoices/pagination.tsx ***!
  \****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Pagination; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _barrel_optimize_names_ArrowLeftIcon_ArrowRightIcon_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! __barrel_optimize__?names=ArrowLeftIcon,ArrowRightIcon!=!@heroicons/react/24/outline */ \"(app-pages-browser)/./node_modules/@heroicons/react/24/outline/esm/ArrowLeftIcon.js\");\n/* harmony import */ var _barrel_optimize_names_ArrowLeftIcon_ArrowRightIcon_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! __barrel_optimize__?names=ArrowLeftIcon,ArrowRightIcon!=!@heroicons/react/24/outline */ \"(app-pages-browser)/./node_modules/@heroicons/react/24/outline/esm/ArrowRightIcon.js\");\n/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! clsx */ \"(app-pages-browser)/./node_modules/clsx/dist/clsx.mjs\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/navigation.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_3__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nfunction Pagination(param) {\n    let { totalPages } = param;\n    _s();\n    // NOTE: comment in this code when you get to this point in the course\n    const pathname = (0,next_navigation__WEBPACK_IMPORTED_MODULE_3__.usePathname)();\n    const searchParams = (0,next_navigation__WEBPACK_IMPORTED_MODULE_3__.useSearchParams)();\n    const currentPage = Number(searchParams.get(\"page\")) || 1;\n    const createPageURL = (pageNumber)=>{\n        const params = new URLSearchParams(searchParams);\n        params.set(\"page\", pageNumber.toString());\n        return \"\".concat(pathname, \"?\").concat(params.toString());\n    };\n    // const allPages = generatePagination(currentPage, totalPages);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"inline-flex\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(PaginationArrow, {\n                    direction: \"left\",\n                    href: createPageURL(currentPage - 1),\n                    isDisabled: currentPage <= 1\n                }, void 0, false, {\n                    fileName: \"D:\\\\webapplications\\\\nextjs-dashboard\\\\app\\\\ui\\\\invoices\\\\pagination.tsx\",\n                    lineNumber: 27,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex -space-x-px\",\n                    children: allPages.map((page, index)=>{\n                        let position;\n                        if (index === 0) position = \"first\";\n                        if (index === allPages.length - 1) position = \"last\";\n                        if (allPages.length === 1) position = \"single\";\n                        if (page === \"...\") position = \"middle\";\n                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(PaginationNumber, {\n                            href: createPageURL(page),\n                            page: page,\n                            position: position,\n                            isActive: currentPage === page\n                        }, page, false, {\n                            fileName: \"D:\\\\webapplications\\\\nextjs-dashboard\\\\app\\\\ui\\\\invoices\\\\pagination.tsx\",\n                            lineNumber: 43,\n                            columnNumber: 15\n                        }, this);\n                    })\n                }, void 0, false, {\n                    fileName: \"D:\\\\webapplications\\\\nextjs-dashboard\\\\app\\\\ui\\\\invoices\\\\pagination.tsx\",\n                    lineNumber: 33,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(PaginationArrow, {\n                    direction: \"right\",\n                    href: createPageURL(currentPage + 1),\n                    isDisabled: currentPage >= totalPages\n                }, void 0, false, {\n                    fileName: \"D:\\\\webapplications\\\\nextjs-dashboard\\\\app\\\\ui\\\\invoices\\\\pagination.tsx\",\n                    lineNumber: 54,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"D:\\\\webapplications\\\\nextjs-dashboard\\\\app\\\\ui\\\\invoices\\\\pagination.tsx\",\n            lineNumber: 26,\n            columnNumber: 7\n        }, this)\n    }, void 0, false);\n}\n_s(Pagination, \"AxA9T5G2Po78UC4hL8ljCdvMciE=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_3__.usePathname,\n        next_navigation__WEBPACK_IMPORTED_MODULE_3__.useSearchParams\n    ];\n});\n_c = Pagination;\nfunction PaginationNumber(param) {\n    let { page, href, isActive, position } = param;\n    const className = (0,clsx__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\"flex h-10 w-10 items-center justify-center text-sm border\", {\n        \"rounded-l-md\": position === \"first\" || position === \"single\",\n        \"rounded-r-md\": position === \"last\" || position === \"single\",\n        \"z-10 bg-blue-600 border-blue-600 text-white\": isActive,\n        \"hover:bg-gray-100\": !isActive && position !== \"middle\",\n        \"text-gray-300\": position === \"middle\"\n    });\n    return isActive || position === \"middle\" ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: className,\n        children: page\n    }, void 0, false, {\n        fileName: \"D:\\\\webapplications\\\\nextjs-dashboard\\\\app\\\\ui\\\\invoices\\\\pagination.tsx\",\n        lineNumber: 87,\n        columnNumber: 5\n    }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n        href: href,\n        className: className,\n        children: page\n    }, void 0, false, {\n        fileName: \"D:\\\\webapplications\\\\nextjs-dashboard\\\\app\\\\ui\\\\invoices\\\\pagination.tsx\",\n        lineNumber: 89,\n        columnNumber: 5\n    }, this);\n}\n_c1 = PaginationNumber;\nfunction PaginationArrow(param) {\n    let { href, direction, isDisabled } = param;\n    const className = (0,clsx__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\"flex h-10 w-10 items-center justify-center rounded-md border\", {\n        \"pointer-events-none text-gray-300\": isDisabled,\n        \"hover:bg-gray-100\": !isDisabled,\n        \"mr-2 md:mr-4\": direction === \"left\",\n        \"ml-2 md:ml-4\": direction === \"right\"\n    });\n    const icon = direction === \"left\" ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_ArrowLeftIcon_ArrowRightIcon_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n        className: \"w-4\"\n    }, void 0, false, {\n        fileName: \"D:\\\\webapplications\\\\nextjs-dashboard\\\\app\\\\ui\\\\invoices\\\\pagination.tsx\",\n        lineNumber: 116,\n        columnNumber: 7\n    }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_ArrowLeftIcon_ArrowRightIcon_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n        className: \"w-4\"\n    }, void 0, false, {\n        fileName: \"D:\\\\webapplications\\\\nextjs-dashboard\\\\app\\\\ui\\\\invoices\\\\pagination.tsx\",\n        lineNumber: 118,\n        columnNumber: 7\n    }, this);\n    return isDisabled ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: className,\n        children: icon\n    }, void 0, false, {\n        fileName: \"D:\\\\webapplications\\\\nextjs-dashboard\\\\app\\\\ui\\\\invoices\\\\pagination.tsx\",\n        lineNumber: 122,\n        columnNumber: 5\n    }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n        className: className,\n        href: href,\n        children: icon\n    }, void 0, false, {\n        fileName: \"D:\\\\webapplications\\\\nextjs-dashboard\\\\app\\\\ui\\\\invoices\\\\pagination.tsx\",\n        lineNumber: 124,\n        columnNumber: 5\n    }, this);\n}\n_c2 = PaginationArrow;\nvar _c, _c1, _c2;\n$RefreshReg$(_c, \"Pagination\");\n$RefreshReg$(_c1, \"PaginationNumber\");\n$RefreshReg$(_c2, \"PaginationArrow\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC91aS9pbnZvaWNlcy9wYWdpbmF0aW9uLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUU0RTtBQUNwRDtBQUNLO0FBRWtDO0FBRWhELFNBQVNNLFdBQVcsS0FBc0M7UUFBdEMsRUFBRUMsVUFBVSxFQUEwQixHQUF0Qzs7SUFDakMsc0VBQXNFO0lBQ3RFLE1BQU1DLFdBQVdKLDREQUFXQTtJQUM1QixNQUFNSyxlQUFlSixnRUFBZUE7SUFDcEMsTUFBTUssY0FBY0MsT0FBT0YsYUFBYUcsR0FBRyxDQUFDLFlBQVk7SUFFeEQsTUFBTUMsZ0JBQWdCLENBQUNDO1FBQ3JCLE1BQU1DLFNBQVMsSUFBSUMsZ0JBQWdCUDtRQUNuQ00sT0FBT0UsR0FBRyxDQUFDLFFBQVFILFdBQVdJLFFBQVE7UUFDdEMsT0FBTyxHQUFlSCxPQUFaUCxVQUFTLEtBQXFCLE9BQWxCTyxPQUFPRyxRQUFRO0lBQ3ZDO0lBQ0EsZ0VBQWdFO0lBRWhFLHFCQUNFO2tCQUdFLDRFQUFDQztZQUFJQyxXQUFVOzs4QkFDYiw4REFBQ0M7b0JBQ0NDLFdBQVU7b0JBQ1ZDLE1BQU1WLGNBQWNILGNBQWM7b0JBQ2xDYyxZQUFZZCxlQUFlOzs7Ozs7OEJBRzdCLDhEQUFDUztvQkFBSUMsV0FBVTs4QkFDWkssU0FBU0MsR0FBRyxDQUFDLENBQUNDLE1BQU1DO3dCQUNuQixJQUFJQzt3QkFFSixJQUFJRCxVQUFVLEdBQUdDLFdBQVc7d0JBQzVCLElBQUlELFVBQVVILFNBQVNLLE1BQU0sR0FBRyxHQUFHRCxXQUFXO3dCQUM5QyxJQUFJSixTQUFTSyxNQUFNLEtBQUssR0FBR0QsV0FBVzt3QkFDdEMsSUFBSUYsU0FBUyxPQUFPRSxXQUFXO3dCQUUvQixxQkFDRSw4REFBQ0U7NEJBRUNSLE1BQU1WLGNBQWNjOzRCQUNwQkEsTUFBTUE7NEJBQ05FLFVBQVVBOzRCQUNWRyxVQUFVdEIsZ0JBQWdCaUI7MkJBSnJCQTs7Ozs7b0JBT1g7Ozs7Ozs4QkFHRiw4REFBQ047b0JBQ0NDLFdBQVU7b0JBQ1ZDLE1BQU1WLGNBQWNILGNBQWM7b0JBQ2xDYyxZQUFZZCxlQUFlSDs7Ozs7Ozs7Ozs7OztBQUtyQztHQXJEd0JEOztRQUVMRix3REFBV0E7UUFDUEMsNERBQWVBOzs7S0FIZEM7QUF1RHhCLFNBQVN5QixpQkFBaUIsS0FVekI7UUFWeUIsRUFDeEJKLElBQUksRUFDSkosSUFBSSxFQUNKUyxRQUFRLEVBQ1JILFFBQVEsRUFNVCxHQVZ5QjtJQVd4QixNQUFNVCxZQUFZbEIsZ0RBQUlBLENBQ3BCLDZEQUNBO1FBQ0UsZ0JBQWdCMkIsYUFBYSxXQUFXQSxhQUFhO1FBQ3JELGdCQUFnQkEsYUFBYSxVQUFVQSxhQUFhO1FBQ3BELCtDQUErQ0c7UUFDL0MscUJBQXFCLENBQUNBLFlBQVlILGFBQWE7UUFDL0MsaUJBQWlCQSxhQUFhO0lBQ2hDO0lBR0YsT0FBT0csWUFBWUgsYUFBYSx5QkFDOUIsOERBQUNWO1FBQUlDLFdBQVdBO2tCQUFZTzs7Ozs7NkJBRTVCLDhEQUFDeEIsa0RBQUlBO1FBQUNvQixNQUFNQTtRQUFNSCxXQUFXQTtrQkFDMUJPOzs7Ozs7QUFHUDtNQTdCU0k7QUErQlQsU0FBU1YsZ0JBQWdCLEtBUXhCO1FBUndCLEVBQ3ZCRSxJQUFJLEVBQ0pELFNBQVMsRUFDVEUsVUFBVSxFQUtYLEdBUndCO0lBU3ZCLE1BQU1KLFlBQVlsQixnREFBSUEsQ0FDcEIsZ0VBQ0E7UUFDRSxxQ0FBcUNzQjtRQUNyQyxxQkFBcUIsQ0FBQ0E7UUFDdEIsZ0JBQWdCRixjQUFjO1FBQzlCLGdCQUFnQkEsY0FBYztJQUNoQztJQUdGLE1BQU1XLE9BQ0pYLGNBQWMsdUJBQ1osOERBQUN0QixzSEFBYUE7UUFBQ29CLFdBQVU7Ozs7OzZCQUV6Qiw4REFBQ25CLHNIQUFjQTtRQUFDbUIsV0FBVTs7Ozs7O0lBRzlCLE9BQU9JLDJCQUNMLDhEQUFDTDtRQUFJQyxXQUFXQTtrQkFBWWE7Ozs7OzZCQUU1Qiw4REFBQzlCLGtEQUFJQTtRQUFDaUIsV0FBV0E7UUFBV0csTUFBTUE7a0JBQy9CVTs7Ozs7O0FBR1A7TUFqQ1NaIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC91aS9pbnZvaWNlcy9wYWdpbmF0aW9uLnRzeD84MDMwIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2UgY2xpZW50JztcclxuXHJcbmltcG9ydCB7IEFycm93TGVmdEljb24sIEFycm93UmlnaHRJY29uIH0gZnJvbSAnQGhlcm9pY29ucy9yZWFjdC8yNC9vdXRsaW5lJztcclxuaW1wb3J0IGNsc3ggZnJvbSAnY2xzeCc7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcbmltcG9ydCB7IGdlbmVyYXRlUGFnaW5hdGlvbiB9IGZyb20gJ0AvYXBwL2xpYi91dGlscyc7XHJcbmltcG9ydCB7IHVzZVBhdGhuYW1lLCB1c2VTZWFyY2hQYXJhbXMgfSBmcm9tICduZXh0L25hdmlnYXRpb24nO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUGFnaW5hdGlvbih7IHRvdGFsUGFnZXMgfTogeyB0b3RhbFBhZ2VzOiBudW1iZXIgfSkge1xyXG4gIC8vIE5PVEU6IGNvbW1lbnQgaW4gdGhpcyBjb2RlIHdoZW4geW91IGdldCB0byB0aGlzIHBvaW50IGluIHRoZSBjb3Vyc2VcclxuICBjb25zdCBwYXRobmFtZSA9IHVzZVBhdGhuYW1lKCk7XHJcbiAgY29uc3Qgc2VhcmNoUGFyYW1zID0gdXNlU2VhcmNoUGFyYW1zKCk7XHJcbiAgY29uc3QgY3VycmVudFBhZ2UgPSBOdW1iZXIoc2VhcmNoUGFyYW1zLmdldCgncGFnZScpKSB8fCAxO1xyXG4gXHJcbiAgY29uc3QgY3JlYXRlUGFnZVVSTCA9IChwYWdlTnVtYmVyOiBudW1iZXIgfCBzdHJpbmcpID0+IHtcclxuICAgIGNvbnN0IHBhcmFtcyA9IG5ldyBVUkxTZWFyY2hQYXJhbXMoc2VhcmNoUGFyYW1zKTtcclxuICAgIHBhcmFtcy5zZXQoJ3BhZ2UnLCBwYWdlTnVtYmVyLnRvU3RyaW5nKCkpO1xyXG4gICAgcmV0dXJuIGAke3BhdGhuYW1lfT8ke3BhcmFtcy50b1N0cmluZygpfWA7XHJcbiAgfTtcclxuICAvLyBjb25zdCBhbGxQYWdlcyA9IGdlbmVyYXRlUGFnaW5hdGlvbihjdXJyZW50UGFnZSwgdG90YWxQYWdlcyk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICB7LyogTk9URTogY29tbWVudCBpbiB0aGlzIGNvZGUgd2hlbiB5b3UgZ2V0IHRvIHRoaXMgcG9pbnQgaW4gdGhlIGNvdXJzZSAqL31cclxuXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5saW5lLWZsZXhcIj5cclxuICAgICAgICA8UGFnaW5hdGlvbkFycm93XHJcbiAgICAgICAgICBkaXJlY3Rpb249XCJsZWZ0XCJcclxuICAgICAgICAgIGhyZWY9e2NyZWF0ZVBhZ2VVUkwoY3VycmVudFBhZ2UgLSAxKX1cclxuICAgICAgICAgIGlzRGlzYWJsZWQ9e2N1cnJlbnRQYWdlIDw9IDF9XHJcbiAgICAgICAgLz5cclxuXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IC1zcGFjZS14LXB4XCI+XHJcbiAgICAgICAgICB7YWxsUGFnZXMubWFwKChwYWdlLCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICBsZXQgcG9zaXRpb246ICdmaXJzdCcgfCAnbGFzdCcgfCAnc2luZ2xlJyB8ICdtaWRkbGUnIHwgdW5kZWZpbmVkO1xyXG5cclxuICAgICAgICAgICAgaWYgKGluZGV4ID09PSAwKSBwb3NpdGlvbiA9ICdmaXJzdCc7XHJcbiAgICAgICAgICAgIGlmIChpbmRleCA9PT0gYWxsUGFnZXMubGVuZ3RoIC0gMSkgcG9zaXRpb24gPSAnbGFzdCc7XHJcbiAgICAgICAgICAgIGlmIChhbGxQYWdlcy5sZW5ndGggPT09IDEpIHBvc2l0aW9uID0gJ3NpbmdsZSc7XHJcbiAgICAgICAgICAgIGlmIChwYWdlID09PSAnLi4uJykgcG9zaXRpb24gPSAnbWlkZGxlJztcclxuXHJcbiAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgPFBhZ2luYXRpb25OdW1iZXJcclxuICAgICAgICAgICAgICAgIGtleT17cGFnZX1cclxuICAgICAgICAgICAgICAgIGhyZWY9e2NyZWF0ZVBhZ2VVUkwocGFnZSl9XHJcbiAgICAgICAgICAgICAgICBwYWdlPXtwYWdlfVxyXG4gICAgICAgICAgICAgICAgcG9zaXRpb249e3Bvc2l0aW9ufVxyXG4gICAgICAgICAgICAgICAgaXNBY3RpdmU9e2N1cnJlbnRQYWdlID09PSBwYWdlfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICB9KX1cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgPFBhZ2luYXRpb25BcnJvd1xyXG4gICAgICAgICAgZGlyZWN0aW9uPVwicmlnaHRcIlxyXG4gICAgICAgICAgaHJlZj17Y3JlYXRlUGFnZVVSTChjdXJyZW50UGFnZSArIDEpfVxyXG4gICAgICAgICAgaXNEaXNhYmxlZD17Y3VycmVudFBhZ2UgPj0gdG90YWxQYWdlc31cclxuICAgICAgICAvPlxyXG4gICAgICA8L2Rpdj4gXHJcbiAgICA8Lz5cclxuICApO1xyXG59XHJcblxyXG5mdW5jdGlvbiBQYWdpbmF0aW9uTnVtYmVyKHtcclxuICBwYWdlLFxyXG4gIGhyZWYsXHJcbiAgaXNBY3RpdmUsXHJcbiAgcG9zaXRpb24sXHJcbn06IHtcclxuICBwYWdlOiBudW1iZXIgfCBzdHJpbmc7XHJcbiAgaHJlZjogc3RyaW5nO1xyXG4gIHBvc2l0aW9uPzogJ2ZpcnN0JyB8ICdsYXN0JyB8ICdtaWRkbGUnIHwgJ3NpbmdsZSc7XHJcbiAgaXNBY3RpdmU6IGJvb2xlYW47XHJcbn0pIHtcclxuICBjb25zdCBjbGFzc05hbWUgPSBjbHN4KFxyXG4gICAgJ2ZsZXggaC0xMCB3LTEwIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciB0ZXh0LXNtIGJvcmRlcicsXHJcbiAgICB7XHJcbiAgICAgICdyb3VuZGVkLWwtbWQnOiBwb3NpdGlvbiA9PT0gJ2ZpcnN0JyB8fCBwb3NpdGlvbiA9PT0gJ3NpbmdsZScsXHJcbiAgICAgICdyb3VuZGVkLXItbWQnOiBwb3NpdGlvbiA9PT0gJ2xhc3QnIHx8IHBvc2l0aW9uID09PSAnc2luZ2xlJyxcclxuICAgICAgJ3otMTAgYmctYmx1ZS02MDAgYm9yZGVyLWJsdWUtNjAwIHRleHQtd2hpdGUnOiBpc0FjdGl2ZSxcclxuICAgICAgJ2hvdmVyOmJnLWdyYXktMTAwJzogIWlzQWN0aXZlICYmIHBvc2l0aW9uICE9PSAnbWlkZGxlJyxcclxuICAgICAgJ3RleHQtZ3JheS0zMDAnOiBwb3NpdGlvbiA9PT0gJ21pZGRsZScsXHJcbiAgICB9LFxyXG4gICk7XHJcblxyXG4gIHJldHVybiBpc0FjdGl2ZSB8fCBwb3NpdGlvbiA9PT0gJ21pZGRsZScgPyAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3NOYW1lfT57cGFnZX08L2Rpdj5cclxuICApIDogKFxyXG4gICAgPExpbmsgaHJlZj17aHJlZn0gY2xhc3NOYW1lPXtjbGFzc05hbWV9PlxyXG4gICAgICB7cGFnZX1cclxuICAgIDwvTGluaz5cclxuICApO1xyXG59XHJcblxyXG5mdW5jdGlvbiBQYWdpbmF0aW9uQXJyb3coe1xyXG4gIGhyZWYsXHJcbiAgZGlyZWN0aW9uLFxyXG4gIGlzRGlzYWJsZWQsXHJcbn06IHtcclxuICBocmVmOiBzdHJpbmc7XHJcbiAgZGlyZWN0aW9uOiAnbGVmdCcgfCAncmlnaHQnO1xyXG4gIGlzRGlzYWJsZWQ/OiBib29sZWFuO1xyXG59KSB7XHJcbiAgY29uc3QgY2xhc3NOYW1lID0gY2xzeChcclxuICAgICdmbGV4IGgtMTAgdy0xMCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgcm91bmRlZC1tZCBib3JkZXInLFxyXG4gICAge1xyXG4gICAgICAncG9pbnRlci1ldmVudHMtbm9uZSB0ZXh0LWdyYXktMzAwJzogaXNEaXNhYmxlZCxcclxuICAgICAgJ2hvdmVyOmJnLWdyYXktMTAwJzogIWlzRGlzYWJsZWQsXHJcbiAgICAgICdtci0yIG1kOm1yLTQnOiBkaXJlY3Rpb24gPT09ICdsZWZ0JyxcclxuICAgICAgJ21sLTIgbWQ6bWwtNCc6IGRpcmVjdGlvbiA9PT0gJ3JpZ2h0JyxcclxuICAgIH0sXHJcbiAgKTtcclxuXHJcbiAgY29uc3QgaWNvbiA9XHJcbiAgICBkaXJlY3Rpb24gPT09ICdsZWZ0JyA/IChcclxuICAgICAgPEFycm93TGVmdEljb24gY2xhc3NOYW1lPVwidy00XCIgLz5cclxuICAgICkgOiAoXHJcbiAgICAgIDxBcnJvd1JpZ2h0SWNvbiBjbGFzc05hbWU9XCJ3LTRcIiAvPlxyXG4gICAgKTtcclxuXHJcbiAgcmV0dXJuIGlzRGlzYWJsZWQgPyAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3NOYW1lfT57aWNvbn08L2Rpdj5cclxuICApIDogKFxyXG4gICAgPExpbmsgY2xhc3NOYW1lPXtjbGFzc05hbWV9IGhyZWY9e2hyZWZ9PlxyXG4gICAgICB7aWNvbn1cclxuICAgIDwvTGluaz5cclxuICApO1xyXG59XHJcbiJdLCJuYW1lcyI6WyJBcnJvd0xlZnRJY29uIiwiQXJyb3dSaWdodEljb24iLCJjbHN4IiwiTGluayIsInVzZVBhdGhuYW1lIiwidXNlU2VhcmNoUGFyYW1zIiwiUGFnaW5hdGlvbiIsInRvdGFsUGFnZXMiLCJwYXRobmFtZSIsInNlYXJjaFBhcmFtcyIsImN1cnJlbnRQYWdlIiwiTnVtYmVyIiwiZ2V0IiwiY3JlYXRlUGFnZVVSTCIsInBhZ2VOdW1iZXIiLCJwYXJhbXMiLCJVUkxTZWFyY2hQYXJhbXMiLCJzZXQiLCJ0b1N0cmluZyIsImRpdiIsImNsYXNzTmFtZSIsIlBhZ2luYXRpb25BcnJvdyIsImRpcmVjdGlvbiIsImhyZWYiLCJpc0Rpc2FibGVkIiwiYWxsUGFnZXMiLCJtYXAiLCJwYWdlIiwiaW5kZXgiLCJwb3NpdGlvbiIsImxlbmd0aCIsIlBhZ2luYXRpb25OdW1iZXIiLCJpc0FjdGl2ZSIsImljb24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/ui/invoices/pagination.tsx\n"));

/***/ })

});