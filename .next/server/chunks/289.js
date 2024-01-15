exports.id = 289;
exports.ids = [289];
exports.modules = {

/***/ 8340:
/***/ ((module) => {

// Exports
module.exports = {
	"blogPage": "Slug_blogPage__935fV",
	"headerDate": "Slug_headerDate__OxvAl",
	"selectNone": "Slug_selectNone__efcQ6"
};


/***/ }),

/***/ 6289:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4146);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(date_fns__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styles_Slug_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8340);
/* harmony import */ var _styles_Slug_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_Slug_module_scss__WEBPACK_IMPORTED_MODULE_3__);




const BlogDate = ({ date , isList  })=>{
    const { 0: newDate , 1: setNewDate  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const { 0: formatted , 1: setFormatted  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        setNewDate(new Date(date).toISOString());
        setFormatted((0,date_fns__WEBPACK_IMPORTED_MODULE_2__.format)(new Date(date), "dd.MM.yyyy"));
    }, []);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
        className: _styles_Slug_module_scss__WEBPACK_IMPORTED_MODULE_3__.headerDate,
        children: [
            !isList && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                children: "Published "
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("time", {
                dateTime: newDate,
                itemProp: "dateModified",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: _styles_Slug_module_scss__WEBPACK_IMPORTED_MODULE_3__.selectNone,
                    children: formatted
                })
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BlogDate);


/***/ })

};
;