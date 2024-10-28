"use strict";
exports.id = 685;
exports.ids = [685];
exports.modules = {

/***/ 40685:
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
;// CONCATENATED MODULE: ./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/@vuepress/bundler-webpack/lib/build/ssr/vuepressLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./docs/.vuepress/components/Alphabet.vue?vue&type=template&id=06b70521&scoped=true



function ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${(0,server_renderer.ssrRenderAttrs)((0,external_vue_.mergeProps)({ class: "container" }, _attrs))} data-v-06b70521><h1 data-v-06b70521>الپپە</h1><div class="card-grid" data-v-06b70521><!--[-->`)
  ;(0,server_renderer.ssrRenderList)($data.alphabet, (item) => {
    _push(`<div class="card" data-v-06b70521><div class="card-content" data-v-06b70521><div class="letter-container" data-v-06b70521><span class="letter" data-v-06b70521>${
      (0,server_renderer.ssrInterpolate)(item.letter)
    }</span></div><div class="card-footer" data-v-06b70521><div data-v-06b70521></div><div class="word-container" data-v-06b70521><span class="emoji"${
      (0,server_renderer.ssrRenderAttr)("aria-label", `Emoji for ${item.word}`)
    } data-v-06b70521>${
      (0,server_renderer.ssrInterpolate)(item.emoji)
    }</span><span class="word" data-v-06b70521>${
      (0,server_renderer.ssrInterpolate)(item.word)
    }</span></div></div></div></div>`)
  })
  _push(`<!--]--></div></div>`)
}
;// CONCATENATED MODULE: ./docs/.vuepress/components/Alphabet.vue?vue&type=template&id=06b70521&scoped=true

;// CONCATENATED MODULE: ./node_modules/@vuepress/bundler-webpack/lib/build/ssr/vuepressLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./docs/.vuepress/components/Alphabet.vue?vue&type=script&lang=js

/* harmony default export */ const Alphabetvue_type_script_lang_js = ({
  data() {
    return {
      alphabet: [
        { letter: "ا", word: "الما", emoji: "🍎", isPlaying: false },
        { letter: "ءا", word: "ءاتەش", emoji: "🐓", isPlaying: false },
        { letter: "ب", word: "بانان", emoji: "🍌", isPlaying: false },
        { letter: "ۆ", word: "ۆەلوسيپەد", emoji: "🚴🏻", isPlaying: false },
        { letter: "گ", word: "گۇل", emoji: "💐", isPlaying: false },
        { letter: "ع", word: "عالىم", emoji: "👨‍🔬", isPlaying: false },
        { letter: "د", word: "دوپ", emoji: "⚽", isPlaying: false },
        { letter: "ە", word: "ەسىك", emoji: "🚪", isPlaying: false },
        { letter: "ج", word: "جولبارىس", emoji: "🐅", isPlaying: false },
        { letter: "ز", word: "زەبرا", emoji: "🦓", isPlaying: false },
        { letter: "ي", word: "يت", emoji: "🐕", isPlaying: false },
        { letter: "ك", word: "كوبەلەك", emoji: "🦋", isPlaying: false },
        { letter: "ق", word: "قويان", emoji: "🐰", isPlaying: false },
        { letter: "ل", word: "ليمون", emoji: "🍋", isPlaying: false },
        { letter: "م", word: "مىسىق", emoji: "🐈", isPlaying: false },
        { letter: "ن", word: "نار", emoji: "🐪", isPlaying: false },
        { letter: "ڭ", word: "", emoji: "", isPlaying: false },
        { letter: "و", word: "ورىندىق", emoji: "🪑", isPlaying: false },
        { letter: "ءو", word: "ورمەكشى", emoji: "🕷️", isPlaying: false },
        { letter: "پ", word: "ءپىل", emoji: "🐘", isPlaying: false },
        { letter: "ر", word: "راديو", emoji: "📻", isPlaying: false },
        { letter: "س", word: "ساعات", emoji: "⏰", isPlaying: false },
        { letter: "ت", word: "تاس", emoji: "🪨", isPlaying: false },
        { letter: "ۋ", word: "ۋىق", emoji: "", isPlaying: false },
        { letter: "ۇ", word: "ۇلۋ", emoji: "🐌", isPlaying: false },
        { letter: "ءۇ", word: "ءۇي", emoji: "🏠", isPlaying: false },
        { letter: "ف", word: "فونتان", emoji: "⛲", isPlaying: false },
        { letter: "ح", word: "حات", emoji: "📨", isPlaying: false },
        { letter: "ھ", word: "ايداھار", emoji: "🐲", isPlaying: false },
        { letter: "چ", word: "چەك", emoji: "🎫", isPlaying: false },
        { letter: "ش", word: "شار", emoji: "🎈", isPlaying: false },
        { letter: "ى", word: "ىدىس", emoji: "🥣", isPlaying: false },
        { letter: "ءى", word: "ءىز", emoji: "👣", isPlaying: false },
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
 
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-34.use[0]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-34.use[1]!./node_modules/@vuepress/bundler-webpack/lib/build/ssr/vuepressLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./docs/.vuepress/components/Alphabet.vue?vue&type=style&index=0&id=06b70521&scoped=true&lang=css
var Alphabetvue_type_style_index_0_id_06b70521_scoped_true_lang_css = __webpack_require__(15673);
;// CONCATENATED MODULE: ./docs/.vuepress/components/Alphabet.vue?vue&type=style&index=0&id=06b70521&scoped=true&lang=css

// EXTERNAL MODULE: ./node_modules/vue-loader/dist/exportHelper.js
var exportHelper = __webpack_require__(83744);
;// CONCATENATED MODULE: ./docs/.vuepress/components/Alphabet.vue




;


const __exports__ = /*#__PURE__*/(0,exportHelper/* default */.Z)(Alphabetvue_type_script_lang_js, [['ssrRender',ssrRender],['__scopeId',"data-v-06b70521"]])

/* harmony default export */ const Alphabet = (__exports__);

/***/ }),

/***/ 15673:
/***/ ((module, __unused_webpack___webpack_exports__, __webpack_require__) => {

/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(87537);
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(23645);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "@keyframes pulse-06b70521{0%,to{opacity:1}50%{opacity:.5}}.container[data-v-06b70521]{max-width:1200px;margin:0 auto;padding:20px}h1[data-v-06b70521]{font-size:2rem;font-weight:700;text-align:center;margin-bottom:2rem}.card-grid[data-v-06b70521]{display:grid;grid-template-columns:repeat(auto-fill,minmax(150px,1fr));gap:1rem}.card[data-v-06b70521]{background-color:#fff;border-radius:8px;box-shadow:0 2px 4px rgba(0,0,0,.1);overflow:hidden}.card-content[data-v-06b70521]{padding:1rem;display:flex;flex-direction:column;height:100%}.letter-container[data-v-06b70521]{display:flex;align-items:center;justify-content:center;background-color:#f0f0f0;border-radius:4px;margin-bottom:1rem;padding:15px 0}.letter[data-v-06b70521]{font-size:4rem;font-weight:700;color:#333}.card-footer[data-v-06b70521]{justify-content:space-between}.card-footer[data-v-06b70521],.word-container[data-v-06b70521]{display:flex;align-items:center}.word[data-v-06b70521]{font-size:1rem;font-weight:600;margin-left:.5rem}.emoji[data-v-06b70521]{font-size:2rem}button[data-v-06b70521]{background:0 0;border:0;cursor:pointer;padding:.5rem;border-radius:50%;transition:background-color .3s}button[data-v-06b70521]:hover{background-color:#f0f0f0}button[data-v-06b70521]:focus{outline:0;box-shadow:0 0 0 2px #e0e0e0}.icon[data-v-06b70521]{width:24px;height:24px;stroke:currentColor;stroke-width:2;stroke-linecap:round;stroke-linejoin:round;fill:none}.icon-playing[data-v-06b70521]{color:#4a90e2;animation:pulse-06b70521 2s cubic-bezier(.4,0,.6,1) infinite}@media (max-width:640px){.card-grid[data-v-06b70521]{grid-template-columns:repeat(2,1fr)}}@media (min-width:641px) and (max-width:1024px){.card-grid[data-v-06b70521]{grid-template-columns:repeat(3,1fr)}}@media (min-width:1025px){.card-grid[data-v-06b70521]{grid-template-columns:repeat(3,1fr)}}", "",{"version":3,"sources":["webpack://./docs/.vuepress/components/Alphabet.vue"],"names":[],"mappings":"AAyGA,0BACE,MACE,SACF,CACA,IACE,UACF,CACF,CA/GA,4BACE,gBAAiB,CACjB,aAAc,CACd,YACF,CAEA,oBACE,cAAe,CACf,eAAiB,CACjB,iBAAkB,CAClB,kBACF,CAEA,4BACE,YAAa,CACb,yDAA4D,CAC5D,QACF,CAEA,uBACE,qBAAuB,CACvB,iBAAkB,CAClB,mCAAwC,CACxC,eACF,CAEA,+BACE,YAAa,CACb,YAAa,CACb,qBAAsB,CACtB,WACF,CAEA,mCAEE,YAAa,CACb,kBAAmB,CACnB,sBAAuB,CACvB,wBAAyB,CACzB,iBAAkB,CAClB,kBAAmB,CACnB,cACF,CAEA,yBACE,cAAe,CACf,eAAiB,CACjB,UACF,CAEA,8BAEE,6BAEF,CAEA,+DACE,YAAa,CACb,kBACF,CAEA,uBACE,cAAe,CACf,eAAgB,CAChB,iBACF,CAEA,wBACE,cACF,CAEA,wBACE,cAAgB,CAChB,QAAY,CACZ,cAAe,CACf,aAAe,CACf,iBAAkB,CAClB,+BACF,CAEA,8BACE,wBACF,CAEA,8BACE,SAAa,CACb,4BACF,CAEA,uBACE,UAAW,CACX,WAAY,CACZ,mBAAoB,CACpB,cAAe,CACf,oBAAqB,CACrB,qBAAsB,CACtB,SACF,CAEA,+BACE,aAAc,CACd,4DACF,CAWA,yBACE,4BACE,mCACF,CACF,CAEA,gDACE,4BACE,mCACF,CACF,CAEA,0BACE,4BACE,mCACF,CACF","sourcesContent":["\n.container {\n  max-width: 1200px;\n  margin: 0 auto;\n  padding: 20px;\n}\n\nh1 {\n  font-size: 2rem;\n  font-weight: bold;\n  text-align: center;\n  margin-bottom: 2rem;\n}\n\n.card-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));\n  gap: 1rem;\n}\n\n.card {\n  background-color: white;\n  border-radius: 8px;\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);\n  overflow: hidden;\n}\n\n.card-content {\n  padding: 1rem;\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n}\n\n.letter-container {\n  /* flex-grow: 1; */\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background-color: #f0f0f0;\n  border-radius: 4px;\n  margin-bottom: 1rem;\n  padding: 15px 0;\n}\n\n.letter {\n  font-size: 4rem;\n  font-weight: bold;\n  color: #333;\n}\n\n.card-footer {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.word-container {\n  display: flex;\n  align-items: center;\n}\n\n.word {\n  font-size: 1rem;\n  font-weight: 600;\n  margin-left: 0.5rem;\n}\n\n.emoji {\n  font-size: 2rem;\n}\n\nbutton {\n  background: none;\n  border: none;\n  cursor: pointer;\n  padding: 0.5rem;\n  border-radius: 50%;\n  transition: background-color 0.3s;\n}\n\nbutton:hover {\n  background-color: #f0f0f0;\n}\n\nbutton:focus {\n  outline: none;\n  box-shadow: 0 0 0 2px #e0e0e0;\n}\n\n.icon {\n  width: 24px;\n  height: 24px;\n  stroke: currentColor;\n  stroke-width: 2;\n  stroke-linecap: round;\n  stroke-linejoin: round;\n  fill: none;\n}\n\n.icon-playing {\n  color: #4a90e2;\n  animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;\n}\n\n@keyframes pulse {\n  0%, 100% {\n    opacity: 1;\n  }\n  50% {\n    opacity: .5;\n  }\n}\n\n@media (max-width: 640px) {\n  .card-grid {\n    grid-template-columns: repeat(2, 1fr);\n  }\n}\n\n@media (min-width: 641px) and (max-width: 1024px) {\n  .card-grid {\n    grid-template-columns: repeat(3, 1fr);\n  }\n}\n\n@media (min-width: 1025px) {\n  .card-grid {\n    grid-template-columns: repeat(3, 1fr);\n  }\n}\n"],"sourceRoot":""}]);
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
//# sourceMappingURL=685.app.js.map