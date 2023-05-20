exports.id = 586;
exports.ids = [586];
exports.modules = {

/***/ 47254:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Valine)
});

// EXTERNAL MODULE: external "vue"
var external_vue_ = __webpack_require__(21666);
// EXTERNAL MODULE: ./node_modules/vue/server-renderer/index.mjs
var server_renderer = __webpack_require__(14498);
;// CONCATENATED MODULE: ./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/@vuepress/bundler-webpack/lib/build/ssr/vuepressLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./docs/.vuepress/components/Valine.vue?vue&type=template&id=6849c24a



function ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<section${(0,server_renderer.ssrRenderAttrs)((0,external_vue_.mergeProps)({ style: {"border-top":"2px solid #eaecef","padding-top":"1rem","margin-top":"2rem","direction":"ltr"} }, _attrs))}><div><span class="leancloud-visitors" data-flag-title="Your Article Title"><em class="post-meta-item-text">阅读量： </em><i class="leancloud-visitors-count"></i></span></div><h3><a href="javascript:;"></a> 评 论： </h3><div id="vcomments"></div></section>`)
}
;// CONCATENATED MODULE: ./docs/.vuepress/components/Valine.vue?vue&type=template&id=6849c24a

;// CONCATENATED MODULE: ./node_modules/@vuepress/bundler-webpack/lib/build/ssr/vuepressLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./docs/.vuepress/components/Valine.vue?vue&type=script&lang=js

  /* harmony default export */ const Valinevue_type_script_lang_js = ({
    name: 'Valine',
    mounted: function () {
      // require window
      const Valine = __webpack_require__(18388);
      if (typeof window !== 'undefined') {
        document.getElementsByClassName('leancloud-visitors')[0].id
          = window.location.pathname
        this.window = window
        window.AV = __webpack_require__(98342)
      }
  
      new Valine({
        el: '#vcomments',
        appId: 'YP2boJg5nCtTczLFGroERUHb-gzGzoHsz',// your appId
        appKey: 'UFA9pw4P1fki9NJNzwZfkL4i', // your appKey
        notify: false,
        verify: false,
        path: window.location.pathname,
        visitor: true,
        avatar: 'robohash',
        placeholder: 'write here'
      });
    },
  });
  
;// CONCATENATED MODULE: ./docs/.vuepress/components/Valine.vue?vue&type=script&lang=js
 
// EXTERNAL MODULE: ./node_modules/vue-loader/dist/exportHelper.js
var exportHelper = __webpack_require__(83744);
;// CONCATENATED MODULE: ./docs/.vuepress/components/Valine.vue




;
const __exports__ = /*#__PURE__*/(0,exportHelper/* default */.Z)(Valinevue_type_script_lang_js, [['ssrRender',ssrRender]])

/* harmony default export */ const Valine = (__exports__);

/***/ }),

/***/ 94120:
/***/ ((module) => {

function webpackEmptyContext(req) {
	var e = new Error("Cannot find module '" + req + "'");
	e.code = 'MODULE_NOT_FOUND';
	throw e;
}
webpackEmptyContext.keys = () => ([]);
webpackEmptyContext.resolve = webpackEmptyContext;
webpackEmptyContext.id = 94120;
module.exports = webpackEmptyContext;

/***/ })

};
;
//# sourceMappingURL=586.app.js.map