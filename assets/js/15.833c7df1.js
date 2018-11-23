(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{296:function(t,s,a){"use strict";a.r(s);var n=a(1),e=Object(n.a)({},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"content"},[t._m(0),a("p",[t._v("使用 vue-router 在写路由的时候大部分都会使用路由懒加载的方式，优化首屏加载速度等好处不言而喻。")]),a("p",[a("a",{attrs:{href:"https://router.vuejs.org/zh-cn/advanced/lazy-loading.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("路由懒加载-详细介绍"),a("OutboundLink")],1)]),t._m(1),t._m(2),t._m(3),t._m(4),t._m(5),a("p",[t._v("关于原因和解决方案是看到"),a("a",{attrs:{href:"https://segmentfault.com/a/1190000010043013",target:"_blank",rel:"noopener noreferrer"}},[t._v("PanJiaChen 的手摸手系列文章"),a("OutboundLink")],1),t._v("得已解惑，里面有详细说明，推荐其"),a("a",{attrs:{href:"https://segmentfault.com/blog/hand-to-hand",target:"_blank",rel:"noopener noreferrer"}},[t._v("专栏文章"),a("OutboundLink")],1),t._v(",里面很多干货")])])},[function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"根据环境路由使用不同加载方式"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#根据环境路由使用不同加载方式","aria-hidden":"true"}},[this._v("#")]),this._v(" 根据环境路由使用不同加载方式")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("在生成环境使用自然美滋滋，但是开发环境稍微改动代码就会触发热更新，然后因为路由懒加载 【导致 webpack 每次的 cache 失效】"),s("br"),this._v("\n当项目页面数量几十页的时候重新生成是严重影响开发效率的")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"解决方案"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#解决方案","aria-hidden":"true"}},[this._v("#")]),this._v(" 解决方案")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ul",[a("li",[t._v("不需要懒加载的环境配置("),a("code",[t._v("_import_development.js")]),t._v(")"),a("br"),a("code",[t._v("module.exports = file => require('@/views/' + file + '.vue').default")])]),a("li",[t._v("需要懒加载的环境配置("),a("code",[t._v("_import_production.js")]),t._v(")"),a("br"),a("code",[t._v("module.exports = file => () => import('@/views/' + file + '.vue')")])]),a("li",[t._v("在路由中引用")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" _import "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("require")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v("'./_import_'")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("+")]),t._v(" process"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("env"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token constant"}},[t._v("NODE_ENV")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{attrs:{class:"token comment"}},[t._v("//...")]),t._v("\n  "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" path"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'/404'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" name"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'404'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" component"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("_import")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v("'public/404'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),a("span",{attrs:{class:"token comment"}},[t._v("//...")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"说明"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#说明","aria-hidden":"true"}},[this._v("#")]),this._v(" 说明")])}],!1,null,null,null);e.options.__file="根据环境路由使用不同加载方式.md";s.default=e.exports}}]);