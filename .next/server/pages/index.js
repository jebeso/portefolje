(() => {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 5595:
/***/ ((module) => {

// Exports
module.exports = {
	"blogPostContainer": "BlogList_blogPostContainer__v51Or"
};


/***/ }),

/***/ 4342:
/***/ ((module) => {

// Exports
module.exports = {
	"indexContainer": "Index_indexContainer__E1p9C"
};


/***/ }),

/***/ 322:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ pages),
  "getStaticProps": () => (/* binding */ getStaticProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "gray-matter"
var external_gray_matter_ = __webpack_require__(8076);
var external_gray_matter_default = /*#__PURE__*/__webpack_require__.n(external_gray_matter_);
// EXTERNAL MODULE: ./components/Layout.js + 3 modules
var Layout = __webpack_require__(4183);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ./node_modules/next/future/image.js
var future_image = __webpack_require__(1608);
var image_default = /*#__PURE__*/__webpack_require__.n(future_image);
// EXTERNAL MODULE: ./components/BlogDate.js
var BlogDate = __webpack_require__(6289);
// EXTERNAL MODULE: ./styles/BlogList.module.scss
var BlogList_module = __webpack_require__(5595);
var BlogList_module_default = /*#__PURE__*/__webpack_require__.n(BlogList_module);
;// CONCATENATED MODULE: ./components/BlogList.js






const BannerImage = /*#__PURE__*/ external_react_default().forwardRef(({ onClick , href , blog  }, ref)=>/*#__PURE__*/ jsx_runtime_.jsx("a", {
        href: href,
        onClick: onClick,
        ref: ref,
        className: "bannerImage",
        children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
            width: 800,
            height: 300,
            style: {
                height: "auto"
            },
            alt: `${blog.frontmatter.title} banner`,
            src: `${blog.frontmatter.banner}`,
            priority: true
        })
    }));
BannerImage.displayName = "BannerImage";
const BlogList = ({ allBlogs  })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: !allBlogs ? /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: (BlogList_module_default()).blogListContainer,
            children: /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                children: "Apparently there's nothing to see here..."
            })
        }) : /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
            children: allBlogs.map((blog)=>!blog.frontmatter.ref && !/\.draft/.test(blog.slug) && /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: (BlogList_module_default()).blogPostContainer,
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(BlogDate/* default */.Z, {
                            isList: true,
                            date: blog.frontmatter.date
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                href: {
                                    pathname: `/blog/${blog.slug}`
                                },
                                passHref: true,
                                children: blog.frontmatter.title
                            })
                        })
                    ]
                }, blog.slug))
        })
    });
};
/* harmony default export */ const components_BlogList = (BlogList);

// EXTERNAL MODULE: ./styles/Index.module.scss
var Index_module = __webpack_require__(4342);
;// CONCATENATED MODULE: ./pages/index.js





const Index = (props)=>/*#__PURE__*/ jsx_runtime_.jsx(Layout/* default */.Z, {
        pathname: "/",
        siteTitle: props.title,
        siteDescription: props.siteDescription,
        social: props?.social,
        children: /*#__PURE__*/ jsx_runtime_.jsx("section", {
            className: Index_module.indexContainer,
            children: /*#__PURE__*/ jsx_runtime_.jsx(components_BlogList, {
                allBlogs: props.allBlogs,
                siteTitle: props.title
            })
        })
    });
/* harmony default export */ const pages = (Index);
async function getStaticProps() {
    const siteConfig = await __webpack_require__.e(/* import() */ 513).then(__webpack_require__.t.bind(__webpack_require__, 6513, 19));
    const posts = ((context)=>{
        const keys = context.keys();
        const values = keys.map(context);
        const data = keys.map((key, index)=>{
            const slug = key.replace(/^.*[\\\/]/, "").split(".").slice(0, -1).join(".");
            const value = values[index];
            const document = external_gray_matter_default()(value.default);
            return {
                frontmatter: document.data,
                markdownBody: document.content,
                slug
            };
        });
        return data;
    })(__webpack_require__(7149));
    return {
        props: {
            allBlogs: posts.sort((a, b)=>a.frontmatter.date < b.frontmatter.date ? 1 : -1),
            title: siteConfig.default.title,
            siteDescription: siteConfig.default.siteDescription,
            social: siteConfig.default.social
        }
    };
}


/***/ }),

/***/ 4146:
/***/ ((module) => {

"use strict";
module.exports = require("date-fns");

/***/ }),

/***/ 8076:
/***/ ((module) => {

"use strict";
module.exports = require("gray-matter");

/***/ }),

/***/ 3280:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4957:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 4486:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-blur-svg.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 6220:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/compare-states.js");

/***/ }),

/***/ 299:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/format-next-pathname-info.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 5789:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-next-pathname-info.js");

/***/ }),

/***/ 1897:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-bot.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 4567:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/path-has-prefix.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [676,664,608,743,289], () => (__webpack_exec__(322)));
module.exports = __webpack_exports__;

})();