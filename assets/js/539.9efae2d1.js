"use strict";(self.webpackChunkkz321=self.webpackChunkkz321||[]).push([[539],{1539:(t,n,e)=>{e.r(n),e.d(n,{default:()=>d});var o=e(6252),l=e(3577);const c=(0,o._)("div",null,null,-1),i=(0,o._)("span",{class:"country"},"国内疫情",-1),a=(0,o._)("span",{class:"kz"},"哈萨克斯坦疫情",-1),r={name:"EpidemicMap",data:()=>({obj:null,news:"",country:null}),created(){var t;(t="https://cdn.mdeer.com/data/yqstaticdata.js?",new Promise(((n,e)=>{let o=-1===t.indexOf("?")?"?":"&",l="callbackstaticdata";t+=`${o}callback=${l}`;let c=document.createElement("script");c.src=t,window[l]=t=>{delete window[l],document.body.removeChild(c),t?n(t):e("没有返回数据")},c.addEventListener("error",(()=>{delete window[l],document.body.removeChild(c),e("JavaScript资源加载失败")}),!1),document.body.appendChild(c)}))).then((t=>{this.country=t.country,this.news=t.nativeQuickNews,this.obj=t.continentDataList[2].countriesData[27];let n=t.continentDataList[2]&&t.continentDataList[2].countriesData;for(let t=0;t<n.length;t++)"哈萨克斯坦"==n[t].childStatistic&&(this.obj=n[t])}))}},d=(0,e(3744).Z)(r,[["render",function(t,n,e,r,d,u){return(0,o.wg)(),(0,o.iD)("div",null,[(0,o._)("div",null,[c,i,(0,o._)("div",null,"现有确诊："+(0,l.zw)(d.country&&d.country.currentConfirm),1),(0,o._)("div",null,"确诊总数："+(0,l.zw)(d.country&&d.country.totalConfirmed),1),(0,o._)("div",null,"累计治愈："+(0,l.zw)(d.country&&d.country.totalCured),1),a,(0,o._)("div",null,"新增："+(0,l.zw)(d.obj&&d.obj.lastIncData.incrConfirm),1),(0,o._)("div",null,"现有确诊："+(0,l.zw)(d.obj&&d.obj.currentConfirm),1),(0,o._)("div",null,"确诊总数："+(0,l.zw)(d.obj&&d.obj.totalConfirmed),1),(0,o._)("div",null,"累计治愈："+(0,l.zw)(d.obj&&d.obj.totalCured),1)])])}]])},3744:(t,n)=>{n.Z=(t,n)=>{const e=t.__vccOpts||t;for(const[t,o]of n)e[t]=o;return e}}}]);