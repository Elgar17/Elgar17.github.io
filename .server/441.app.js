"use strict";
exports.id = 441;
exports.ids = [441];
exports.modules = {

/***/ 14441:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ WordConversion)
});

// EXTERNAL MODULE: ./node_modules/vue/server-renderer/index.mjs
var server_renderer = __webpack_require__(14498);
;// CONCATENATED MODULE: ./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/@vuepress/bundler-webpack/lib/build/ssr/vuepressLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./docs/.vuepress/components/WordConversion.vue?vue&type=template&id=36097bdd&scoped=true


function ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${
    (0,server_renderer.ssrRenderAttrs)(_attrs)
  } data-v-36097bdd><h2 data-v-36097bdd>文字转换工具</h2><div class="tab" data-v-36097bdd><div class="${
    (0,server_renderer.ssrRenderClass)([{ active: $data.currentTab === 'tote' }, "tab-item"])
  }" data-v-36097bdd>传统文转西里尔文</div><div class="${
    (0,server_renderer.ssrRenderClass)([{ active: $data.currentTab === 'cyrillic' }, "tab-item"])
  }" data-v-36097bdd>西里尔文转传统文</div></div><textarea class="input"${
    (0,server_renderer.ssrRenderAttr)("dir", $data.currentTab == 'tote' ? 'rtl' : 'ltr')
  }${
    (0,server_renderer.ssrRenderAttr)("placeholder", $data.currentTab == 'tote' ? 'ءماتىندى وسى اراعا جاپسىرىڭىز نەمەسە جازىڭىز ' : 'мәтінді осы араға жапсырыңыз немесе жазыңыз ')
  } data-v-36097bdd>${
    (0,server_renderer.ssrInterpolate)($data.input)
  }</textarea><button class="main-button" data-v-36097bdd>${
    (0,server_renderer.ssrInterpolate)($data.buttonText)
  }</button><textarea class="input"${
    (0,server_renderer.ssrRenderAttr)("dir", $data.currentTab == 'tote' ? 'ltr' : 'rtl')
  } data-v-36097bdd>${
    (0,server_renderer.ssrInterpolate)($data.result)
  }</textarea></div>`)
}
;// CONCATENATED MODULE: ./docs/.vuepress/components/WordConversion.vue?vue&type=template&id=36097bdd&scoped=true

;// CONCATENATED MODULE: ./docs/.vuepress/components/utils/WordConversion.js
const toteChars = ["ا", "ءا", "ب", "ۆ", "گ", "ع", "د", "ە", "ج", "ز", "ي", "ك", "ق", "ل", "م", "ن", "ڭ", "و", "ءو", "پ", "ر", "س", "ت", "ۋ", "ۇ", "ءۇ", "ف", "ح", "ھ", "چ", "ش", "ى", "ءى", "،", "؟", "؛",  "ء"];

// 将 tote 单词转换为西里尔文
function ToteWordToCyrl(toteWord) {
    // 如果单词中有 "ك" 和 "گ" 和  "ە" 等字母或单词以 "ء" 开头，删除 "ء" 将单词内的 "ا" 替换为 "ءا" 将 "و" 替换为 "ءو" 将 "ى" 替换为 "ءى" 将 "ۇ" 替换为 "ءۇ"
    if(toteWord[0] === "ء"||  toteWord.includes("ك") || toteWord.includes("گ") || toteWord.includes("ە")) {
        toteWord = toteWord.replace(/ا/g, "ءا");
        toteWord = toteWord.replace(/و/g, "ءو");
        toteWord = toteWord.replace(/ى/g, "ءى");
        toteWord = toteWord.replace(/ۇ/g, "ءۇ");
    }

    const toteWordLength = toteWord.length;

    const cyrlCharsArr = [];
    let j = 0;
    while (j < toteWordLength) {
        if (j + 1 < toteWordLength) {
            const twoCharKey = toteWord[j] + toteWord[j + 1];
            switch (twoCharKey) {
                case  "ءا":
                    cyrlCharsArr.push("ә");
                    j += 2;
                    break;
                case "ءو":
                    cyrlCharsArr.push("ө");
                    j += 2;
                    break;
                case "ءى":
                    cyrlCharsArr.push("і");
                    j += 2;
                    break;
                case "ءۇ":
                    cyrlCharsArr.push("ү");
                    j += 2;
                    break;
                case "يا":
                    cyrlCharsArr.push("я");
                    j += 2;
                    continue;
                case "ييا":
                    cyrlCharsArr.push("йя");
                    j += 3;
                    continue;
                case "يۋ":
                    cyrlCharsArr.push("ю");
                    j += 2;
                    continue;
                case "شش":
                    cyrlCharsArr.push("щ");
                    j += 2;
                    continue;
            }
        }
        switch (toteWord[j]) {
            case "ء":
                cyrlCharsArr.push("");
                break;
            case "ا":
                cyrlCharsArr.push("а");
                break;
            case "ب":
                cyrlCharsArr.push("б");
                break;
            case "ۆ":
                cyrlCharsArr.push("в");
                break;
            case "گ":
                cyrlCharsArr.push("г");
                break;
            case "ع":
                cyrlCharsArr.push("ғ");
                break;
            case "د":
                cyrlCharsArr.push("д");
                break;
            case "ە":
                cyrlCharsArr.push("е");
                break;
            case "ج":
                cyrlCharsArr.push("ж");
                break;
            case "ز":
                cyrlCharsArr.push("з");
                break;
            case "ي":
                cyrlCharsArr.push("й");
                break;
            case "ك":
                cyrlCharsArr.push("к");
                break;
            case "ق":
                cyrlCharsArr.push("қ");
                break;
            case "ل":
                cyrlCharsArr.push("л");
                break;
            case "م":
                cyrlCharsArr.push("м");
                break;
            case "ن":
                cyrlCharsArr.push("н");
                break;
            case "ڭ":
                cyrlCharsArr.push("ң");
                break;
            case "و":
                cyrlCharsArr.push("о");
                break;
            case "پ":
                cyrlCharsArr.push("п");
                break;
            case "ر":
                cyrlCharsArr.push("р");
                break;
            case "س":
                cyrlCharsArr.push("с");
                break;
            case "ت":
                cyrlCharsArr.push("т");
                break;
            case "ۋ":
                cyrlCharsArr.push("у");
                break;
            case "ۇ":
                cyrlCharsArr.push("ұ");
                break;
            case "ف":
                cyrlCharsArr.push("ф");
                break;
            case "ح":
                cyrlCharsArr.push("х");
                break;
            case "ھ":
                cyrlCharsArr.push("Һ");
                break;
            case "چ":
                cyrlCharsArr.push("ч");
                break;
            case "ش":
                cyrlCharsArr.push("ш");
                break;
            case "ى":
                cyrlCharsArr.push("ы");
                break;
            case "،":
                cyrlCharsArr.push(",");
                break;
            case "؟":
                cyrlCharsArr.push("?");
                break;
            case "؛":
                cyrlCharsArr.push(";");
                break;
            default:
                cyrlCharsArr.push(toteWord[j]);
                break;
        }
        j++;
    }
    return cyrlCharsArr.join('');
}

// 将 tote 文字转换为西里尔文
function Tote2Cyrl(toteText) {
    toteText += ".";
    const inputToteChars = toteText.split('');
    const length = inputToteChars.length;
    const cyrlStrs = new Array(length);
    let toteWord = '';
    for (let i = 0; i < length; i++) {
        const currentChar = inputToteChars[i];
        if (!toteChars.includes(currentChar)) {
            if (toteWord.length > 0) {
                const cyrlWord = ToteWordToCyrl(toteWord);
                cyrlStrs[i - toteWord.length] = cyrlWord;
                toteWord = '';
            }
            if(currentChar) {
                cyrlStrs[i] = currentChar;
            }
            continue;
        }
        toteWord += currentChar;
    }
    cyrlStrs.pop();
    return cyrlStrs.join('');
}

// ========== 
// 定义 Sound 枚举
const Sound = {
  Vowel: 'Vowel', // Дауысты дыбыс
  Consonant: 'Consonant', // Дауыссыз дыбыс
  Unknown: 'Unknown' // Белгісіз
};

// 定义西里尔字符数组
const cyrlChars = ["А", "Ә", "Ə", "Б", "В", "Г", "Ғ", "Д", "Е", "Ё", "Ж", "З", "И", "Й", "К", "Қ", "Л", "М", "Н", "Ң", "О", "Ө", "Ɵ", "П", "Р", "С", "Т", "У", "Ұ", "Ү", "Ф", "Х", "Һ", "Ц", "Ч", "Ш", "Щ", "Ъ", "Ы", "І", "Ь", "Э", "Ю", "Я", "-"];

// 定义方言词字典
const dialectWordsDic = {
  "قر": "ق ر",
  "جحر": "ج ح ر",
  "جشس": "ج ش س",
  "شۇار": "ش ۇ ا ر",
  "باق": "ب ا ق",
  "ءباسپاسوز": "باسپا ءسوز",
  "قىتاي": "جۇڭگو"
};

// 将仿西里尔字符转换为原始西里尔字符
function CopycatCyrlToOriginalCyrl(cyrlText) {
  return cyrlText
      .replace(/Ə/g, "Ә")
      .replace(/ə/g, "ә")
      .replace(/Ɵ/g, "Ө")
      .replace(/ɵ/g, "ө");
}

// 替换方言词
function ReplaceDialectWords(word) {
  if (dialectWordsDic.hasOwnProperty(word)) {
      return dialectWordsDic[word];
  }
  word = word.replace(/\w(ۇلى)\s|\w(ۇلى$)/g, (match) => match.replace("ۇلى", " ۇلى"));
  word = word.replace(/\w(ۇلىنىڭ)\s|\w(ۇلىنىڭ$)/g, (match) => match.replace("ۇلىنىڭ", " ۇلىنىڭ"));
  word = word.replace(/\w(قىزى)\s|\w(قىزى$)/g, (match) => match.replace("قىزى", " قىزى"));
  word = word.replace(/\w(قىزىنىڭ)\s|\w(قىزىنىڭ$)/g, (match) => match.replace("قىزىنىڭ", " قىزىنىڭ"));
  word = word.replace(/\w(ەۆ)\s|\w(ەۆ)/g, (match) => match.replace("ەۆ", "يەۆ"));
  return word;
}
// HtmlDecode
function htmlDecode(input) {
const doc = new DOMParser().parseFromString(input, "text/html");
return doc.documentElement.textContent;
}

// 将西里尔文转换为 tote 文字
function Cyrl2Tote(cyrlText) {
  cyrlText = CopycatCyrlToOriginalCyrl(cyrlText);
  cyrlText += ".";
  cyrlText = htmlDecode(cyrlText);
  const chars = cyrlText.split('');
  const length = chars.length;
  const toteStrs = new Array(length);
  let prevSound = Sound.Unknown;
  let cyrlWord = '';

  for (let i = 0; i < length; i++) {
      if (!cyrlChars.includes(chars[i].toUpperCase())) {
          if (cyrlWord.length > 0) {
              const wordLength = cyrlWord.length;
              const toteChars = new Array(wordLength);
              let j = i - wordLength;
              let tIndex = 0;
              for (; j < i; j++, tIndex++) {
                  if (j + 1 < length) {
                      const key = chars[j] + chars[j + 1];
                      switch (key.toLowerCase()) {
                          case "ия":
                              toteChars[tIndex] = "يا";
                              j++;
                              continue;
                          case "йя":
                              toteChars[tIndex] = "ييا";
                              j++;
                              continue;
                          case "ию":
                              toteChars[tIndex] = "يۋ";
                              j++;
                              continue;
                          case "йю":
                              toteChars[tIndex] = "يۋ";
                              j++;
                              continue;
                          case "сц":
                              toteChars[tIndex] = "س";
                              j++;
                              continue;
                          case "тч":
                              toteChars[tIndex] = "چ";
                              j++;
                              continue;
                          case "ий":
                              toteChars[tIndex] = "ي";
                              j++;
                              continue;
                          case "ХХ":
                              toteChars[tIndex] = "ХХ";
                              j++;
                              continue;
                      }
                  }

                  switch (chars[j].toLowerCase()) {
                      case "я":
                          toteChars[tIndex] = prevSound === Sound.Consonant ? "ءا" : "يا";
                          break;
                      case "ю":
                          toteChars[tIndex] = prevSound === Sound.Consonant ? "ءۇ" : "يۋ";
                          break;
                      case "щ":
                          toteChars[tIndex] = "شش";
                          break;
                      case "э":
                          toteChars[tIndex] = "ە";
                          break;
                      case "а":
                          toteChars[tIndex] = "ا";
                          break;
                      case "б":
                          toteChars[tIndex] = "ب";
                          break;
                      case "ц":
                          toteChars[tIndex] = "س";
                          break;
                      case "д":
                          toteChars[tIndex] = "د";
                          break;
                      case "е":
                          toteChars[tIndex] = "ە";
                          break;
                      case "ф":
                          toteChars[tIndex] = "ف";
                          break;
                      case "г":
                          toteChars[tIndex] = "گ";
                          break;
                      case "х":
                          toteChars[tIndex] = "ح";
                          break;
                      case "Һ":
                      case "һ":
                          toteChars[tIndex] = "ھ";
                          break;
                      case "І":
                      case "і":
                          toteChars[tIndex] = "ءى";
                          break;
                      case "и":
                      case "й":
                          toteChars[tIndex] = "ي";
                          break;
                      case "к":
                          toteChars[tIndex] = "ك";
                          break;
                      case "л":
                          toteChars[tIndex] = "ل";
                          break;
                      case "м":
                          toteChars[tIndex] = "م";
                          break;
                      case "н":
                          toteChars[tIndex] = "ن";
                          break;
                      case "о":
                          toteChars[tIndex] = "و";
                          break;
                      case "п":
                          toteChars[tIndex] = "پ";
                          break;
                      case "қ":
                          toteChars[tIndex] = "ق";
                          break;
                      case "р":
                          toteChars[tIndex] = "ر";
                          break;
                      case "с":
                          toteChars[tIndex] = "س";
                          break;
                      case "т":
                          toteChars[tIndex] = "ت";
                          break;
                      case "ұ":
                          toteChars[tIndex] = "ۇ";
                          break;
                      case "в":
                          toteChars[tIndex] = "ۆ";
                          break;
                      case "у":
                          toteChars[tIndex] = "ۋ";
                          break;
                      case "ы":
                          toteChars[tIndex] = "ى";
                          break;
                      case "з":
                          toteChars[tIndex] = "ز";
                          break;
                      case "ә":
                          toteChars[tIndex] = "ءا";
                          break;
                      case "ё":
                      case "ө":
                          toteChars[tIndex] = "ءو";
                          break;
                      case "ү":
                          toteChars[tIndex] = "ءۇ";
                          break;
                      case "ч":
                          toteChars[tIndex] = "چ";
                          break;
                      case "ғ":
                          toteChars[tIndex] = "ع";
                          break;
                      case "ш":
                          toteChars[tIndex] = "ش";
                          break;
                      case "ж":
                          toteChars[tIndex] = "ج";
                          break;
                      case "ң":
                          toteChars[tIndex] = "ڭ";
                          break;
                      case "ь":
                      case "Ь":
                      case "ъ":
                      case "Ъ":
                      case "¬":
                          toteChars[tIndex] = "";
                          break;
                      default:
                          toteChars[tIndex] = chars[j] || "";
                          break;
                  }
              }
              let toteWord = toteChars.join('');
              if (toteWord.includes("ء")) {
                  toteWord = toteWord.replace(/ء/g, "");
                  if (!toteWord.includes("ك") && !toteWord.includes("گ") && !toteWord.includes("ە")) {
                      toteWord = "ء" + toteWord;
                  }
              }
              toteWord = ReplaceDialectWords(toteWord);
              toteStrs[i - wordLength] = toteWord;
              cyrlWord = '';
          }
          switch (chars[i]) {
              case ",":
                  toteStrs[i] = "،";
                  break;
              case "?":
                  toteStrs[i] = "؟";
                  break;
              case ";":
                  toteStrs[i] = "؛";
                  break;
              default:
                  toteStrs[i] = chars[i];
                  break;
          }
          prevSound = Sound.Unknown;
          continue;
      }
      cyrlWord += chars[i];
      prevSound = Sound.Unknown;
  }
  toteStrs[length - 1] = "";
  return toteStrs.join('');
}
;// CONCATENATED MODULE: ./node_modules/@vuepress/bundler-webpack/lib/build/ssr/vuepressLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./docs/.vuepress/components/WordConversion.vue?vue&type=script&lang=js




/* harmony default export */ const WordConversionvue_type_script_lang_js = ({
  name: "WordSplit",
  data() {
    return {
      input: "",
      Tote2cry: "传统文转西里尔文",
      currentTab: "", // 当前选中的tab
      buttonText: "转换",
      result: "",
    };
  },
  mounted() {
    const savedTab = localStorage.getItem("currentTab");
    this.currentTab = savedTab || "tote";
  },
  watch: {
    currentTab(newTab) {
      localStorage.setItem("currentTab", newTab);
      this.input = "";
      this.result = "";
    }
  },
  methods: {
    reshaper() {
      // 搜索功能
      if (this.input.trim() == "") return;

      if(this.currentTab == 'tote') {
        this.result = Tote2Cyrl(this.input);
      } else {
        this.result = Cyrl2Tote(this.input);
      }

      navigator.clipboard.writeText(this.result || '');

      this.buttonText = "已添加到剪切板";
      setTimeout(() => {
        this.buttonText = "转换";
      }, 2000);
     }
  }
});

;// CONCATENATED MODULE: ./docs/.vuepress/components/WordConversion.vue?vue&type=script&lang=js
 
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-34.use[0]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-34.use[1]!./node_modules/@vuepress/bundler-webpack/lib/build/ssr/vuepressLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./docs/.vuepress/components/WordConversion.vue?vue&type=style&index=0&id=36097bdd&scoped=true&lang=css
var WordConversionvue_type_style_index_0_id_36097bdd_scoped_true_lang_css = __webpack_require__(81785);
;// CONCATENATED MODULE: ./docs/.vuepress/components/WordConversion.vue?vue&type=style&index=0&id=36097bdd&scoped=true&lang=css

// EXTERNAL MODULE: ./node_modules/vue-loader/dist/exportHelper.js
var exportHelper = __webpack_require__(83744);
;// CONCATENATED MODULE: ./docs/.vuepress/components/WordConversion.vue




;


const __exports__ = /*#__PURE__*/(0,exportHelper/* default */.Z)(WordConversionvue_type_script_lang_js, [['ssrRender',ssrRender],['__scopeId',"data-v-36097bdd"]])

/* harmony default export */ const WordConversion = (__exports__);

/***/ }),

/***/ 81785:
/***/ ((module, __unused_webpack___webpack_exports__, __webpack_require__) => {

/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(87537);
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(23645);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "h2[data-v-36097bdd]{border:0}.input[data-v-36097bdd]{width:100%;height:200px;padding:10px;margin:10px 0;box-sizing:border-box;border:1px solid #ccc;border-radius:5px;font-size:16px;resize:none}.input[data-v-36097bdd]:focus{border-color:#409eff;outline:0}.tab[data-v-36097bdd]{display:flex}.tab-item[data-v-36097bdd]{padding:6px 10px;cursor:pointer;border-radius:5px;margin-right:5px;border:1px solid #f0f0f0;font-weight:600}.main-button[data-v-36097bdd],.tab-item.active[data-v-36097bdd]{background-color:#409eff;color:#fff}.main-button[data-v-36097bdd]{width:100%;padding:10px;border:0;border-radius:5px;cursor:pointer}", "",{"version":3,"sources":["webpack://./docs/.vuepress/components/WordConversion.vue"],"names":[],"mappings":"AAEA,oBACE,QACF,CAGA,wBACE,UAAW,CACX,YAAa,CACb,YAAa,CACb,aAAc,CACd,qBAAsB,CACtB,qBAAsB,CACtB,iBAAkB,CAClB,cAAe,CACf,WACF,CACA,8BACE,oBAAqB,CACrB,SACF,CAEA,sBACE,YAEF,CACA,2BACE,gBAAiB,CACjB,cAAe,CACf,iBAAkB,CAClB,gBAAiB,CACjB,wBAAyB,CACzB,eACF,CACA,gEACE,wBAAyB,CACzB,UACF,CAEA,8BACE,UAAW,CACX,YAAa,CAGb,QAAY,CACZ,iBAAkB,CAClB,cACF","sourcesContent":["\n\nh2 {\n  border: none;\n}\n\n/* 样式 */\n.input {\n  width: 100%;\n  height: 200px;\n  padding: 10px;\n  margin: 10px 0;\n  box-sizing: border-box;\n  border: 1px solid #ccc;\n  border-radius: 5px;\n  font-size: 16px;\n  resize: none;\n}\n.input:focus {\n  border-color: #409eff;\n  outline: none;\n}\n\n.tab {\n  display: flex;\n  /* margin-bottom: 20px; */\n}\n.tab-item {\n  padding: 6px 10px;\n  cursor: pointer;\n  border-radius: 5px;\n  margin-right: 5px;\n  border: 1px solid #f0f0f0;\n  font-weight: 600;\n}\n.tab-item.active {\n  background-color: #409eff;\n  color: #fff;\n}\n\n.main-button {\n  width: 100%;\n  padding: 10px;\n  background-color: #409eff;\n  color: #fff;\n  border: none;\n  border-radius: 5px;\n  cursor: pointer;\n}\n"],"sourceRoot":""}]);
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
//# sourceMappingURL=441.app.js.map