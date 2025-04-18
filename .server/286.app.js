"use strict";
exports.id = 286;
exports.ids = [286];
exports.modules = {

/***/ 62286:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Alphabet)
});

// EXTERNAL MODULE: external "vue"
var external_vue_ = __webpack_require__(21666);
// EXTERNAL MODULE: ./node_modules/vue/server-renderer/index.mjs
var server_renderer = __webpack_require__(14498);
;// CONCATENATED MODULE: ./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/@vuepress/bundler-webpack/lib/build/ssr/vuepressLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./docs/.vuepress/components/Alphabet.vue?vue&type=template&id=6f855687&scoped=true



function ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${(0,server_renderer.ssrRenderAttrs)((0,external_vue_.mergeProps)({ class: "container" }, _attrs))} data-v-6f855687><h1 data-v-6f855687>الپپە</h1><div class="card-grid" data-v-6f855687><!--[-->`)
  ;(0,server_renderer.ssrRenderList)($data.alphabet, (item) => {
    _push(`<div class="card" data-v-6f855687><div class="card-content" data-v-6f855687><div class="letter-container" data-v-6f855687><span class="${
      (0,server_renderer.ssrRenderClass)([{'vowel': item.vowel}, "letter"])
    }" data-v-6f855687>${
      (0,server_renderer.ssrInterpolate)(item.letter)
    }</span></div><div class="word-shape-container" data-v-6f855687>`)
    if (item.shape && item.shape[4]) {
      _push(`<div class="word-shape" data-v-6f855687>${(0,server_renderer.ssrInterpolate)(item.shape && item.shape[4])}</div>`)
    } else {
      _push(`<!---->`)
    }
    if (item.shape && item.shape[1]) {
      _push(`<div class="word-shape" data-v-6f855687>${(0,server_renderer.ssrInterpolate)(item.shape && item.shape[1])}</div>`)
    } else {
      _push(`<!---->`)
    }
    if (item.shape && item.shape[2]) {
      _push(`<div class="word-shape" data-v-6f855687>${(0,server_renderer.ssrInterpolate)(item.shape && item.shape[2])}</div>`)
    } else {
      _push(`<!---->`)
    }
    if (item.shape && item.shape[3]) {
      _push(`<div class="word-shape" data-v-6f855687>${(0,server_renderer.ssrInterpolate)(item.shape && item.shape[3])}</div>`)
    } else {
      _push(`<!---->`)
    }
    _push(`</div><div class="card-footer" data-v-6f855687><div data-v-6f855687></div><div class="word-container" data-v-6f855687><span class="emoji"${
      (0,server_renderer.ssrRenderAttr)("aria-label", `Emoji for ${item.word}`)
    } data-v-6f855687>${
      (0,server_renderer.ssrInterpolate)(item.emoji)
    }</span><span class="word" data-v-6f855687>${
      (0,server_renderer.ssrInterpolate)(item.word)
    }</span></div></div></div></div>`)
  })
  _push(`<!--]--></div></div>`)
}
;// CONCATENATED MODULE: ./docs/.vuepress/components/Alphabet.vue?vue&type=template&id=6f855687&scoped=true

;// CONCATENATED MODULE: ./node_modules/@vuepress/bundler-webpack/lib/build/ssr/vuepressLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./docs/.vuepress/components/Alphabet.vue?vue&type=script&lang=js

/* harmony default export */ const Alphabetvue_type_script_lang_js = ({
  data() {
    return {
      alphabet: [
        { letter: "ا", vowel: true, shape: { "3": "\uFE8E", "4": "\uFE8D" }, word: "الما", emoji: "🍎", isPlaying: false },
        { letter: "ءا", vowel: true, shape: {"3": "\uFE8E", "4": "\uFE80\uFE8D"}, word: "اتەش", emoji: "🐓", isPlaying: false },
        { letter: "ب", shape: { "1": "\uFE91", "2": "\uFE92", "3": "\uFE90", "4": "\uFE8F" }, word: "بانان", emoji: "🍌", isPlaying: false },
        { letter: "ۆ", shape: { "3": "\uFBDA", "4": "\uFBD9" }, word: "ۆەلوسيپەد", emoji: "🚴🏻", isPlaying: false },
        { letter: "گ", shape: { "1": "\uFB94", "2": "\uFB95", "3": "\uFB93", "4": "\uFB92" }, word: "گۇل", emoji: "💐", isPlaying: false },
        { letter: "ع", shape: { "1": "\uFECB", "2": "\uFECC", "3": "\uFECA", "4": "\uFEC9" }, word: "عالىم", emoji: "👨‍🔬", isPlaying: false },
        { letter: "د", shape: { "3": "\uFEAA", "4": "\uFEA9" }, word: "دوپ", emoji: "⚽", isPlaying: false },
        { letter: "ە", vowel: true, shape: { "3": "\uFEEA", "4": "\uFEE9" }, word: "ەسىك", emoji: "🚪", isPlaying: false },
        { letter: "ج", shape: { "1": "\uFE9F", "2": "\uFEA0", "3": "\uFE9E", "4": "\uFE9D" }, word: "جولبارىس", emoji: "🐅", isPlaying: false },
        { letter: "ز", shape: { "3": "\uFEB0", "4": "\uFEAF" }, word: "زەبرا", emoji: "🦓", isPlaying: false },
        { letter: "ي", shape: { "1": "\uFEF3", "2": "\uFEF4", "3": "\uFEF2", "4": "\uFEF1" }, word: "يت", emoji: "🐕", isPlaying: false },
        { letter: "ك", shape: { "1": "\uFEDB", "2": "\uFEDC", "3": "\uFEDA", "4": "\uFED9" }, word: "كوبەلەك", emoji: "🦋", isPlaying: false },
        { letter: "ق", shape: { "1": "\uFED7", "2": "\uFED8", "3": "\uFED6", "4": "\uFED5" }, word: "قويان", emoji: "🐰", isPlaying: false },
        { letter: "ل", shape: { "1": "\uFEDF", "2": "\uFEE0", "3": "\uFEDE", "4": "\uFEDD" }, word: "ليمون", emoji: "🍋", isPlaying: false },
        { letter: "م", shape: { "1": "\uFEE3", "2": "\uFEE4", "3": "\uFEE2", "4": "\uFEE1" },word: "مىسىق", emoji: "🐈", isPlaying: false },
        { letter: "ن", shape: { "1": "\uFEE7", "2": "\uFEE8", "3": "\uFEE6", "4": "\uFEE5" }, word: "نار", emoji: "🐪", isPlaying: false },
        { letter: "ڭ", shape: { "1": "\uFBD5", "2": "\uFBD6", "3": "\uFBD4", "4": "\uFBD3" }, word: "قوڭىراۋ", emoji: "🔔", isPlaying: false },
        { letter: "و", vowel: true, shape: { "3": "\uFEEE", "4": "\uFEED" }, word: "ورىندىق", emoji: "🪑", isPlaying: false },
        { letter: "ءو", vowel: true, shape: { "3": "\uFEEE", "4": "\uFE80\uFEED" }, word: "ورمەكشى", emoji: "🕷️", isPlaying: false },
        { letter: "پ", shape: { "1": "\uFB58", "2": "\uFB59", "3": "\uFB57", "4": "\uFB56" }, word: "ءپىل", emoji: "🐘", isPlaying: false },
        { letter: "ر", shape: { "3": "\uFEAE", "4": "\uFEAD" }, word: "راديو", emoji: "📻", isPlaying: false },
        { letter: "س",  shape: { "1": "\uFEB3", "2": "\uFEB4", "3": "\uFEB2", "4": "\uFEB1" }, word: "ساعات", emoji: "⏰", isPlaying: false },
        { letter: "ت", shape:{ "1": "\uFE97", "2": "\uFE98", "3": "\uFE96", "4": "\uFE95" }, word: "تاس", emoji: "🪨", isPlaying: false },
        { letter: "ۋ",  shape: { "3": "\uFBDF", "4": "\uFBDE" },word: "ۋىق", emoji: "", isPlaying: false },
        { letter: "ۇ", shape: { "3": "\uFBD8", "4": "\uFE80\uFBD7" }, word: "ۇلۋ", emoji: "🐌", isPlaying: false },
        { letter: "ءۇ", vowel: true, shape: { "3": "\uFBD8", "4": "\uFE80\uFBD7" }, word: "ءۇي", emoji: "🏠", isPlaying: false },
        { letter: "ف", shape: { "1": "\uFED3", "2": "\uFED4", "3": "\uFED2", "4": "\uFED1" }, word: "فونتان", emoji: "⛲", isPlaying: false },
        { letter: "ح", shape: { "1": "\uFEA3", "2": "\uFEA4", "3": "\uFEA2", "4": "\uFEA1" }, word: "حات", emoji: "📨", isPlaying: false },
        { letter: "ھ", shape: { "1": "\uFBAC", "2":" ـھ" }, word: "ايداھار", emoji: "🐲", isPlaying: false },
        { letter: "چ", shape: { "1": "\uFB7C", "2": "\uFB7D", "3": "\uFB7B", "4": "\uFB7A" }, word: "چەك", emoji: "🎫", isPlaying: false },
        { letter: "ش", shape: { "1": "\uFEB7", "2": "\uFEB8", "3": "\uFEB6", "4": "\uFEB5" }, word: "شار", emoji: "🎈", isPlaying: false },
        { letter: "ى", vowel: true, shape: { "1": "\uFBE8", "2": "\uFBE9", "3": "\uFEF0", "4": "\uFEEF" }, word: "ىدىس", emoji: "🥣", isPlaying: false },
        { letter: "ءى", vowel: true, shape: { "1": "\uFE80\uFBE8", "2": "\uFBE9", "3": "\uFEF0", "4": "\uFEEF" }, word: "ءىز", emoji: "👣", isPlaying: false },
      ]
    }
  },
  methods: {
    playPronunciation(item) {
      item.isPlaying = true;
      // In a real implementation, you would trigger audio playback here
      // For this example, we'll just simulate it with a timeout
      setTimeout(() => {
        item.isPlaying = false;
      }, 1000);
    }
  }
});

;// CONCATENATED MODULE: ./docs/.vuepress/components/Alphabet.vue?vue&type=script&lang=js
 
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-34.use[0]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-34.use[1]!./node_modules/@vuepress/bundler-webpack/lib/build/ssr/vuepressLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./docs/.vuepress/components/Alphabet.vue?vue&type=style&index=0&id=6f855687&scoped=true&lang=css
var Alphabetvue_type_style_index_0_id_6f855687_scoped_true_lang_css = __webpack_require__(52649);
;// CONCATENATED MODULE: ./docs/.vuepress/components/Alphabet.vue?vue&type=style&index=0&id=6f855687&scoped=true&lang=css

// EXTERNAL MODULE: ./node_modules/vue-loader/dist/exportHelper.js
var exportHelper = __webpack_require__(83744);
;// CONCATENATED MODULE: ./docs/.vuepress/components/Alphabet.vue




;


const __exports__ = /*#__PURE__*/(0,exportHelper/* default */.Z)(Alphabetvue_type_script_lang_js, [['ssrRender',ssrRender],['__scopeId',"data-v-6f855687"]])

/* harmony default export */ const Alphabet = (__exports__);

/***/ }),

/***/ 52649:
/***/ ((module, __unused_webpack___webpack_exports__, __webpack_require__) => {

/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(87537);
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(23645);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "@keyframes pulse-6f855687{0%,to{opacity:1}50%{opacity:.5}}.container[data-v-6f855687]{max-width:1200px;margin:0 auto;padding:20px}h1[data-v-6f855687]{font-size:2rem;font-weight:700;text-align:center;margin-bottom:2rem}.card-grid[data-v-6f855687]{display:grid;grid-template-columns:repeat(auto-fill,minmax(150px,1fr));gap:1rem}.card[data-v-6f855687]{background-color:#fff;border-radius:8px;box-shadow:0 2px 4px rgba(0,0,0,.1);overflow:hidden}.card-content[data-v-6f855687]{padding:1rem;display:flex;flex-direction:column;height:100%}.letter-container[data-v-6f855687]{display:flex;align-items:center;justify-content:center;background-color:#f0f0f0;border-radius:4px;margin-bottom:.5rem;padding:15px 0}.letter[data-v-6f855687]{font-size:4rem;font-weight:700;color:#333}.card-footer[data-v-6f855687]{justify-content:space-between}.card-footer[data-v-6f855687],.word-container[data-v-6f855687]{display:flex;align-items:center}.word[data-v-6f855687]{font-size:1rem;font-weight:600;margin-left:.5rem}.emoji[data-v-6f855687]{font-size:2rem}button[data-v-6f855687]{background:0 0;border:0;cursor:pointer;padding:.5rem;border-radius:50%;transition:background-color .3s}button[data-v-6f855687]:hover{background-color:#f0f0f0}button[data-v-6f855687]:focus{outline:0;box-shadow:0 0 0 2px #e0e0e0}.icon[data-v-6f855687]{width:24px;height:24px;stroke:currentColor;stroke-width:2;stroke-linecap:round;stroke-linejoin:round;fill:none}.word-shape-container[data-v-6f855687]{direction:rtl;display:flex;align-items:center;margin-left:.5rem;margin-bottom:.5rem}.word-shape[data-v-6f855687]{width:20px;height:16px}.icon-playing[data-v-6f855687]{color:#4a90e2;animation:pulse-6f855687 2s cubic-bezier(.4,0,.6,1) infinite}@media (max-width:640px){.card-grid[data-v-6f855687]{grid-template-columns:repeat(2,1fr)}}@media (min-width:641px) and (max-width:1024px){.card-grid[data-v-6f855687]{grid-template-columns:repeat(3,1fr)}}@media (min-width:1025px){.card-grid[data-v-6f855687]{grid-template-columns:repeat(3,1fr)}}", "",{"version":3,"sources":["webpack://./docs/.vuepress/components/Alphabet.vue"],"names":[],"mappings":"AAwHA,0BACE,MACE,SACF,CACA,IACE,UACF,CACF,CA9HA,4BACE,gBAAiB,CACjB,aAAc,CACd,YACF,CAEA,oBACE,cAAe,CACf,eAAiB,CACjB,iBAAkB,CAClB,kBACF,CAEA,4BACE,YAAa,CACb,yDAA4D,CAC5D,QACF,CAEA,uBACE,qBAAuB,CACvB,iBAAkB,CAClB,mCAAwC,CACxC,eACF,CAEA,+BACE,YAAa,CACb,YAAa,CACb,qBAAsB,CACtB,WACF,CAEA,mCACE,YAAa,CACb,kBAAmB,CACnB,sBAAuB,CACvB,wBAAyB,CACzB,iBAAkB,CAClB,mBAAqB,CACrB,cACF,CAEA,yBACE,cAAe,CACf,eAAiB,CACjB,UACF,CAKA,8BAEE,6BAEF,CAEA,+DACE,YAAa,CACb,kBACF,CAEA,uBACE,cAAe,CACf,eAAgB,CAChB,iBACF,CAEA,wBACE,cACF,CAEA,wBACE,cAAgB,CAChB,QAAY,CACZ,cAAe,CACf,aAAe,CACf,iBAAkB,CAClB,+BACF,CAEA,8BACE,wBACF,CAEA,8BACE,SAAa,CACb,4BACF,CAEA,uBACE,UAAW,CACX,WAAY,CACZ,mBAAoB,CACpB,cAAe,CACf,oBAAqB,CACrB,qBAAsB,CACtB,SACF,CAEA,uCACE,aAAc,CACd,YAAa,CACb,kBAAmB,CACnB,iBAAmB,CACnB,mBACF,CAEA,6BACE,UAAW,CACX,WACF,CAEA,+BACE,aAAc,CACd,4DACF,CAWA,yBACE,4BACE,mCACF,CACF,CAEA,gDACE,4BACE,mCACF,CACF,CAEA,0BACE,4BACE,mCACF,CACF","sourcesContent":["\n.container {\n  max-width: 1200px;\n  margin: 0 auto;\n  padding: 20px;\n}\n\nh1 {\n  font-size: 2rem;\n  font-weight: bold;\n  text-align: center;\n  margin-bottom: 2rem;\n}\n\n.card-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));\n  gap: 1rem;\n}\n\n.card {\n  background-color: white;\n  border-radius: 8px;\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);\n  overflow: hidden;\n}\n\n.card-content {\n  padding: 1rem;\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n}\n\n.letter-container {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background-color: #f0f0f0;\n  border-radius: 4px;\n  margin-bottom: 0.5rem;\n  padding: 15px 0;\n}\n\n.letter {\n  font-size: 4rem;\n  font-weight: bold;\n  color: #333;\n}\n.vowel {\n  \n}\n\n.card-footer {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.word-container {\n  display: flex;\n  align-items: center;\n}\n\n.word {\n  font-size: 1rem;\n  font-weight: 600;\n  margin-left: 0.5rem;\n}\n\n.emoji {\n  font-size: 2rem;\n}\n\nbutton {\n  background: none;\n  border: none;\n  cursor: pointer;\n  padding: 0.5rem;\n  border-radius: 50%;\n  transition: background-color 0.3s;\n}\n\nbutton:hover {\n  background-color: #f0f0f0;\n}\n\nbutton:focus {\n  outline: none;\n  box-shadow: 0 0 0 2px #e0e0e0;\n}\n\n.icon {\n  width: 24px;\n  height: 24px;\n  stroke: currentColor;\n  stroke-width: 2;\n  stroke-linecap: round;\n  stroke-linejoin: round;\n  fill: none;\n}\n\n.word-shape-container {\n  direction: rtl;\n  display: flex;\n  align-items: center;\n  margin-left: 0.5rem;\n  margin-bottom: 0.5rem;\n}\n\n.word-shape {\n  width: 20px;\n  height: 16px;\n}\n\n.icon-playing {\n  color: #4a90e2;\n  animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;\n}\n\n@keyframes pulse {\n  0%, 100% {\n    opacity: 1;\n  }\n  50% {\n    opacity: .5;\n  }\n}\n\n@media (max-width: 640px) {\n  .card-grid {\n    grid-template-columns: repeat(2, 1fr);\n  }\n}\n\n@media (min-width: 641px) and (max-width: 1024px) {\n  .card-grid {\n    grid-template-columns: repeat(3, 1fr);\n  }\n}\n\n@media (min-width: 1025px) {\n  .card-grid {\n    grid-template-columns: repeat(3, 1fr);\n  }\n}\n"],"sourceRoot":""}]);
// Exports
/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = ((/* unused pure expression or super */ null && (___CSS_LOADER_EXPORT___)));


/***/ }),

/***/ 83744:
/***/ ((__unused_webpack_module, exports) => {

var __webpack_unused_export__;

__webpack_unused_export__ = ({ value: true });
// runtime helper for setting properties on components
// in a tree-shakable way
exports.Z = (sfc, props) => {
    const target = sfc.__vccOpts || sfc;
    for (const [key, val] of props) {
        target[key] = val;
    }
    return target;
};


/***/ })

};
;
//# sourceMappingURL=286.app.js.map