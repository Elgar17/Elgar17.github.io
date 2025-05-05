"use strict";
exports.id = 701;
exports.ids = [701];
exports.modules = {

/***/ 83701:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ WordSplit)
});

// EXTERNAL MODULE: ./node_modules/vue/server-renderer/index.mjs
var server_renderer = __webpack_require__(14498);
;// CONCATENATED MODULE: ./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/@vuepress/bundler-webpack/lib/build/ssr/vuepressLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./docs/.vuepress/components/WordSplit.vue?vue&type=template&id=6b2cdf4a&scoped=true


function ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${
    (0,server_renderer.ssrRenderAttrs)(_attrs)
  } data-v-6b2cdf4a><h2 data-v-6b2cdf4a>Tote 文字剪影助手</h2><textarea class="input" dir="rtl" placeholder="ءماتىندى وسى اراعا جاپسىرىڭىز نەمەسە جازىڭىز " data-v-6b2cdf4a>${
    (0,server_renderer.ssrInterpolate)($data.input)
  }</textarea><button class="main-button" data-v-6b2cdf4a>${
    (0,server_renderer.ssrInterpolate)($data.buttonText)
  }</button></div>`)
}
;// CONCATENATED MODULE: ./docs/.vuepress/components/WordSplit.vue?vue&type=template&id=6b2cdf4a&scoped=true

;// CONCATENATED MODULE: ./docs/.vuepress/components/utils/KazakhCharsReshaper.js.js
var arb_kz_json = {
    '\u0627': { "3": "\uFE8E", "4": "\uFE8D" }, '\u0628': { "1": "\uFE91", "2": "\uFE92", "3": "\uFE90", "4": "\uFE8F" }, '\u06C6': { "3": "\uFBDA", "4": "\uFBD9" },
    '\u06AF': { "1": "\uFB94", "2": "\uFB95", "3": "\uFB93", "4": "\uFB92" }, '\u0639': { "1": "\uFECB", "2": "\uFECC", "3": "\uFECA", "4": "\uFEC9" },
    '\u062F': { "3": "\uFEAA", "4": "\uFEA9" }, '\u06D5': { "3": "\uFEEA", "4": "\uFEE9" }, '\u062C': { "1": "\uFE9F", "2": "\uFEA0", "3": "\uFE9E", "4": "\uFE9D" },
    '\u0632': { "3": "\uFEB0", "4": "\uFEAF" }, '\u064A': { "1": "\uFEF3", "2": "\uFEF4", "3": "\uFEF2", "4": "\uFEF1" }, '\u0643': { "1": "\uFEDB", "2": "\uFEDC", "3": "\uFEDA", "4": "\uFED9" },
    '\u0642': { "1": "\uFED7", "2": "\uFED8", "3": "\uFED6", "4": "\uFED5" }, '\u0644': { "1": "\uFEDF", "2": "\uFEE0", "3": "\uFEDE", "4": "\uFEDD" },
    '\u0645': { "1": "\uFEE3", "2": "\uFEE4", "3": "\uFEE2", "4": "\uFEE1" }, '\u0646': { "1": "\uFEE7", "2": "\uFEE8", "3": "\uFEE6", "4": "\uFEE5" },
    '\u06AD': { "1": "\uFBD5", "2": "\uFBD6", "3": "\uFBD4", "4": "\uFBD3" }, '\u0648': { "3": "\uFEEE", "4": "\uFEED" }, '\u067E': { "1": "\uFB58", "2": "\uFB59", "3": "\uFB57", "4": "\uFB56" },
    '\u0631': { "3": "\uFEAE", "4": "\uFEAD" }, '\u0633': { "1": "\uFEB3", "2": "\uFEB4", "3": "\uFEB2", "4": "\uFEB1" }, '\u062A': { "1": "\uFE97", "2": "\uFE98", "3": "\uFE96", "4": "\uFE95" },
    '\u06CB': { "3": "\uFBDF", "4": "\uFBDE" }, '\u06C7': { "3": "\uFBD8", "4": "\uFBD7" }, '\u0641': { "1": "\uFED3", "2": "\uFED4", "3": "\uFED2", "4": "\uFED1" },
    '\u062D': { "1": "\uFEA3", "2": "\uFEA4", "3": "\uFEA2", "4": "\uFEA1" }, '\u0686': { "1": "\uFB7C", "2": "\uFB7D", "3": "\uFB7B", "4": "\uFB7A" }, '\u0634': { "1": "\uFEB7", "2": "\uFEB8", "3": "\uFEB6", "4": "\uFEB5" },
    '\u0649': { "1": "\uFBE8", "2": "\uFBE9", "3": "\uFEF0", "4": "\uFEEF" }, '\u0621': { "4": "\uFE80" }, '\u06BE': { "1": "\uFBAC" },
}
var jointCharArray = new Array("\uFEFB", "\uFEFC");

function traversalElementAttr(element, attr) {
    if (attr instanceof Array) {
        for (var i = 0; i < attr.length; i++) {
            traversalElementAttr(element, attr[i]);
        }
    } else {
        var attrValue = element.getAttribute(attr);

        if (attrValue !== "" && attrValue !== null) {
            element.setAttribute(attr, reshaperKzChars(attrValue));
        }
    }
}

function traversalElement(element) {
    if (element.nodeType !== 1) {
        return;
    }
    var childNodes = element.childNodes;
    for (var i = 0; i < childNodes.length; i++) {
        var childNode = childNodes.item(i);
        // HTML Element
        if (childNode.nodeType === 1) {
            // continue element
            if ("|BR|HR|TEXTAREA|SCRIPT|OBJECT|EMBED|".indexOf("|" + childNode.tagName + "|") !== -1) {
                continue;
            }
            traversalElementAttr(childNode, ['title', 'data-original-title', 'alt', 'placeholder']);
            // input 
            if (childNode.tagName === "INPUT" &&
                childNode.value !== "" &&
                childNode.type !== "text" &&
                childNode.type !== "hidden") {
                childNode.value = reshaperKzChars(childNode.value);
            }
            traversalElement(childNode);
        } else if (childNode.nodeType === 3) {  // text node
            childNode.data = reshaperKzChars(childNode.data);
        }
    }
}

function reshaperWebKzChars() {
    if (/AppleWebKit.*Mobile/i.test(navigator.userAgent) || (/MIDP|SymbianOS|NOKIA|SAMSUNG|LG|NEC|TCL|Alcatel|BIRD|DBTEL|Dopod|PHILIPS|HAIER|LENOVO|MOT-|Nokia|SonyEricsson|SIE-|Amoi|ZTE/.test(navigator.userAgent))) {
        if (window.location.href.indexOf("?mobile") < 0) {
            try {
                if (/Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)) {
                    $.each($("body"), function () {
                        traversalElement(this);
                    });
                }
            } catch (e) { }
        }
    }
}

function getArbKzJsonIndex(prevEnd, prev, current) {
    if (!prev || !arb_kz_json.hasOwnProperty(prev)) {
        return 0; //prev not kz char
    }
    if (!current || !arb_kz_json.hasOwnProperty(current)) { //current not kz char
        if (arb_kz_json[prev].hasOwnProperty("3") && !prevEnd) {
            return 3;
        } else {
            return 4;
        }
    }
    if (prevEnd) { // if end
        if (arb_kz_json[prev].hasOwnProperty("1") && (arb_kz_json[current].hasOwnProperty("2") || arb_kz_json[current].hasOwnProperty("3"))) {
            return 1;
        } else {
            return 4;
        }
    } else {
        if (arb_kz_json[prev].hasOwnProperty("2") && (arb_kz_json[current].hasOwnProperty("2") || arb_kz_json[current].hasOwnProperty("3"))) {
            return 2;
        } else if (arb_kz_json[prev].hasOwnProperty("3")) {
            return 3;
        }
    }
}
function getJointCharIndex(prevEnd, prev, current) {
    if (!prev || !current) return -1;
    if (prev == "\u0644" && current == "\u0627") {
        if (prevEnd) {
            return 0;
        } else {
            return 1;
        }
    }
    return -1;
}
function disReshaperKzChars(string) {
    var result = "";
    for (var i = 0; i < string.length; i++) {
        if (string.charAt(i) == "\u2E2E") { result += "\u061F"; continue; }
        if (string.charAt(i) == "\u2E32") { result += "\u060C"; continue; }
        if (string.charAt(i) == "\u2E35") { result += "\u061B"; continue; }
        if (string.charAt(i) == "\u002D") { result += "\u0640"; continue; }
        if (string.charAt(i) == "\uFBAC") { result += "\u06BE"; continue; }
        if (string.charAt(i) == "\uFEFB" || string.charAt(i) == "\uFEFC")
        {
            result += "\u0644" + "\u0627";
            continue;
        }
        var isKz = false;
        for (var item in arb_kz_json) {
            for (var o in arb_kz_json[item]) {
                if (arb_kz_json[item][o] == string.charAt(i)) {
                    result += item;
                    isKz = true;
                    break;
                }
            }
            if (isKz) break;
        }
        if (!isKz) result += string.charAt(i);
    }
    return result;
}
function reshaperKzChars(string) {
    var index = 0,
     length = string.length,
     prev = string.charAt(index++),//prev char
     prevEnd = true, // prev is end (default is end)
     result = "";
    let charIndex;
    for (; index <= length; index++) {
        var current = index != length ? string.charAt(index) : undefined; // current char
        if (prev == "\u061F") { result += "\u2E2E"; prev = current; prevEnd = true; continue; }
        if (prev == "\u060C") { result += "\u2E32"; prev = current; prevEnd = true; continue; }
        if (prev == "\u061B") { result += "\u2E35"; prev = current; prevEnd = true; continue; }
        if (prev == "\u0640") { result += "\u002D"; prev = current; prevEnd = true; continue; }
        if (prev == "\u066A") { result += "\u0025"; prev = current; prevEnd = true; continue;}
        if (prev == "\u06BE") { result += "\uFBAC"; prev = current; prevEnd = false; continue; }
        var jointCharIndex = getJointCharIndex(prevEnd, prev, current)
        if (jointCharIndex != -1) {
            result += jointCharArray[jointCharIndex];
            if (index == length - 1) {
                break;
            } else {
                prevEnd = true;
                prev = string.charAt(++index);
                continue;
            }
        }
        charIndex = getArbKzJsonIndex(prevEnd, prev, current);
        result += (charIndex == 0 ? prev : arb_kz_json[prev][charIndex]);
        prevEnd = ((charIndex === 1 || charIndex === 2) ? false : true);
        prev = current;
    }
    return result;
}

/* harmony default export */ const KazakhCharsReshaper_js = ({ reshaperKzChars, reshaperWebKzChars, disReshaperKzChars });
;// CONCATENATED MODULE: ./node_modules/@vuepress/bundler-webpack/lib/build/ssr/vuepressLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./docs/.vuepress/components/WordSplit.vue?vue&type=script&lang=js




/* harmony default export */ const WordSplitvue_type_script_lang_js = ({
  name: "WordSplit",
  data() {
    return {
      input: "",
      buttonText: "转换",
    };
  },
  methods: {
    reshaper() {
      // 搜索功能
      if (this.input.trim() == "") return;
      navigator.clipboard.writeText((reshaperKzChars(this.input) || '').split('').reverse().join(''));
      this.buttonText = "已添加到剪切板";
      console.log(this.buttonText);
      setTimeout(() => {
        this.buttonText = "转换";
      }, 2000);
     }
  }
});

;// CONCATENATED MODULE: ./docs/.vuepress/components/WordSplit.vue?vue&type=script&lang=js
 
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-34.use[0]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-34.use[1]!./node_modules/@vuepress/bundler-webpack/lib/build/ssr/vuepressLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./docs/.vuepress/components/WordSplit.vue?vue&type=style&index=0&id=6b2cdf4a&scoped=true&lang=css
var WordSplitvue_type_style_index_0_id_6b2cdf4a_scoped_true_lang_css = __webpack_require__(41234);
;// CONCATENATED MODULE: ./docs/.vuepress/components/WordSplit.vue?vue&type=style&index=0&id=6b2cdf4a&scoped=true&lang=css

// EXTERNAL MODULE: ./node_modules/vue-loader/dist/exportHelper.js
var exportHelper = __webpack_require__(83744);
;// CONCATENATED MODULE: ./docs/.vuepress/components/WordSplit.vue




;


const __exports__ = /*#__PURE__*/(0,exportHelper/* default */.Z)(WordSplitvue_type_script_lang_js, [['ssrRender',ssrRender],['__scopeId',"data-v-6b2cdf4a"]])

/* harmony default export */ const WordSplit = (__exports__);

/***/ }),

/***/ 41234:
/***/ ((module, __unused_webpack___webpack_exports__, __webpack_require__) => {

/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(87537);
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(23645);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "h2[data-v-6b2cdf4a]{border:0}.input[data-v-6b2cdf4a],.main-button[data-v-6b2cdf4a]{width:100%;padding:10px;border-radius:5px}.input[data-v-6b2cdf4a]{height:200px;margin:20px 0;box-sizing:border-box;border:1px solid #ccc;font-size:16px;resize:none}.main-button[data-v-6b2cdf4a]{background-color:#409eff;color:#fff;border:0;cursor:pointer}", "",{"version":3,"sources":["webpack://./docs/.vuepress/components/WordSplit.vue","<no source>"],"names":[],"mappings":"AAEA,oBACE,QACF,CCJA,sDDoBE,UAAW,CACX,YAAa,CAIb,iBAAkB,CAlBpB,wBAEE,YAAa,CAEb,aAAc,CACd,qBAAsB,CACtB,qBAAsB,CAEtB,cAAe,CACf,WACF,CAEA,8BAGE,wBAAyB,CACzB,UAAW,CACX,QAAY,CAEZ,cACF","sourcesContent":["\n\nh2 {\n  border: none;\n}\n\n/* 样式 */\n.input {\n  width: 100%;\n  height: 200px;\n  padding: 10px;\n  margin: 20px 0;\n  box-sizing: border-box;\n  border: 1px solid #ccc;\n  border-radius: 5px;\n  font-size: 16px;\n  resize: none;\n}\n\n.main-button {\n  width: 100%;\n  padding: 10px;\n  background-color: #409eff;\n  color: #fff;\n  border: none;\n  border-radius: 5px;\n  cursor: pointer;\n}\n",null],"sourceRoot":""}]);
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
//# sourceMappingURL=701.app.js.map