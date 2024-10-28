"use strict";
exports.id = 198;
exports.ids = [198];
exports.modules = {

/***/ 98198:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ EpidemicMap)
});

// EXTERNAL MODULE: ./node_modules/vue/server-renderer/index.mjs
var server_renderer = __webpack_require__(14498);
;// CONCATENATED MODULE: ./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/@vuepress/bundler-webpack/lib/build/ssr/vuepressLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./docs/.vuepress/components/EpidemicMap.vue?vue&type=template&id=47d8ab8a


function ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${
    (0,server_renderer.ssrRenderAttrs)(_attrs)
  }><div><div></div><span class="country">国内疫情</span><div>现有确诊：${
    (0,server_renderer.ssrInterpolate)($data.country && $data.country.currentConfirm)
  }</div><div>确诊总数：${
    (0,server_renderer.ssrInterpolate)($data.country && $data.country.totalConfirmed)
  }</div><div>累计治愈：${
    (0,server_renderer.ssrInterpolate)($data.country && $data.country.totalCured)
  }</div><span class="kz">哈萨克斯坦疫情</span><div>新增：${
    (0,server_renderer.ssrInterpolate)($data.obj && $data.obj.lastIncData.incrConfirm)
  }</div><div>现有确诊：${
    (0,server_renderer.ssrInterpolate)($data.obj && $data.obj.currentConfirm)
  }</div><div>确诊总数：${
    (0,server_renderer.ssrInterpolate)($data.obj && $data.obj.totalConfirmed)
  }</div><div>累计治愈：${
    (0,server_renderer.ssrInterpolate)($data.obj && $data.obj.totalCured)
  }</div></div></div>`)
}
;// CONCATENATED MODULE: ./docs/.vuepress/components/EpidemicMap.vue?vue&type=template&id=47d8ab8a

;// CONCATENATED MODULE: ./docs/.vuepress/utils/request.js
// jsonp 请求封装
// example: jsonp(url,data).then(data=>console.log(data))
const jsonp = function (url, data) {
    return new Promise((resolve, reject) => {
        // 初始化url
        let dataString = url.indexOf('?') === -1 ? '?' : '&'
        let callbackName = `callbackstaticdata`
        url += `${dataString}callback=${callbackName}`
        if (data) {
            // 有请求参数，依次添加到url
            for (let k in data) {
                url += `&${k}=${data[k]}`
            }
        }
        let jsNode = document.createElement('script')
        jsNode.src = url
        // 触发callback，触发后删除js标签和绑定在window上的callback
        window[callbackName] = result => {
            delete window[callbackName]
            document.body.removeChild(jsNode)
            if (result) {
                resolve(result)
            } else {
                reject('没有返回数据')
            }
        }
        // js加载异常的情况
        jsNode.addEventListener('error', () => {
            delete window[callbackName]
            document.body.removeChild(jsNode)
            reject('JavaScript资源加载失败')
        }, false)
        // 添加js节点到document上时，开始请求
        document.body.appendChild(jsNode)
    })
}
;// CONCATENATED MODULE: ./node_modules/@vuepress/bundler-webpack/lib/build/ssr/vuepressLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./docs/.vuepress/components/EpidemicMap.vue?vue&type=script&lang=js


/* harmony default export */ const EpidemicMapvue_type_script_lang_js = ({
  name: "EpidemicMap",
  data() {
    return {
      obj: null,
      news: "",
      country: null,
    };
  },
  created() {
    jsonp("https://cdn.mdeer.com/data/yqstaticdata.js?").then((data) => {
      // console.log(data.continentDataList);
      this.country = data.country
      this.news = data.nativeQuickNews;
       this.obj = data.continentDataList[2].countriesData[27];
       let arr = data.continentDataList[2] && data.continentDataList[2].countriesData
      //  console.log(data)
       for(let i = 0; i < arr.length; i++){
         if(arr[i].childStatistic == "哈萨克斯坦"){
           this.obj = arr[i]
         }
       }
    });
  },
});

;// CONCATENATED MODULE: ./docs/.vuepress/components/EpidemicMap.vue?vue&type=script&lang=js
 
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-34.use[0]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-34.use[1]!./node_modules/@vuepress/bundler-webpack/lib/build/ssr/vuepressLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./docs/.vuepress/components/EpidemicMap.vue?vue&type=style&index=0&id=47d8ab8a&lang=css
var EpidemicMapvue_type_style_index_0_id_47d8ab8a_lang_css = __webpack_require__(80128);
;// CONCATENATED MODULE: ./docs/.vuepress/components/EpidemicMap.vue?vue&type=style&index=0&id=47d8ab8a&lang=css

// EXTERNAL MODULE: ./node_modules/vue-loader/dist/exportHelper.js
var exportHelper = __webpack_require__(83744);
;// CONCATENATED MODULE: ./docs/.vuepress/components/EpidemicMap.vue




;


const __exports__ = /*#__PURE__*/(0,exportHelper/* default */.Z)(EpidemicMapvue_type_script_lang_js, [['ssrRender',ssrRender]])

/* harmony default export */ const EpidemicMap = (__exports__);

/***/ }),

/***/ 80128:
/***/ ((module, __unused_webpack___webpack_exports__, __webpack_require__) => {

/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(87537);
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(23645);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".all-country,.country,.kz{display:inline-block;background:red;color:#fff;padding:2px 5px 4px;margin:3px 0;border-radius:3px}.kz{background:#00b8ce}.all-country{background:#ab00f8}", "",{"version":3,"sources":["webpack://./docs/.vuepress/components/EpidemicMap.vue"],"names":[],"mappings":"AACA,0BACE,oBAAqB,CACrB,cAAe,CACf,UAAW,CACX,mBAAwB,CACxB,YAAa,CACb,iBACF,CAEA,IACE,kBACF,CACA,aACE,kBACF","sourcesContent":["\r\n.country, .all-country, .kz {\r\n  display: inline-block;\r\n  background: red;\r\n  color: #fff;\r\n  padding: 2px 5px 4px 5px;\r\n  margin: 3px 0;\r\n  border-radius: 3px;\r\n}\r\n\r\n.kz{\r\n  background: #00b8ce;\r\n}\r\n.all-country{\r\n  background: #ab00f8;\r\n}\r\n"],"sourceRoot":""}]);
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
//# sourceMappingURL=198.app.js.map