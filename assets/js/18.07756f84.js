(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{168:function(t,e,s){t.exports=s.p+"assets/img/vue-rax.bd610684.png"},318:function(t,e,s){"use strict";s.r(e);var a=[function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{attrs:{id:"weex-中的前端框架"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#weex-中的前端框架","aria-hidden":"true"}},[this._v("#")]),this._v(" Weex 中的前端框架")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("img",{attrs:{src:s(168),alt:"Vue and Rax"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("然而，"),e("strong",[this._v("Weex并不是一个前端框架")]),this._v("。实际上，前端框架仅仅是 Weex 的语法层或称之为 DSL (Domain-specific Language)，它们与原生渲染引擎是分离的。换句话说，Weex 并不依赖于特定的前端框架，随着前端技术的发展，Weex 也可以集成更多广泛使用的前端框架。")])},function(){var t=this.$createElement,e=this._self._c||t;return e("blockquote",[e("p",[e("strong",[this._v("学习一些 Vue 和 Rax 的基础知识，对使用 Weex 非常有帮助。")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"框架类型标记"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#框架类型标记","aria-hidden":"true"}},[this._v("#")]),this._v(" 框架类型标记")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"使用注释标记"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#使用注释标记","aria-hidden":"true"}},[this._v("#")]),this._v(" 使用注释标记")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("在 Weex v0.16 以及更早的版本中，使用特定格式的注释来标记框架类型，格式是 "),e("code",[this._v('// { "framework": "xxx" }')]),this._v("，其中的 "),e("code",[this._v("xxx")]),this._v(" 指的是前端框架的名字（首字母大写）。")])},function(){var t=this.$createElement,e=this._self._c||t;return e("blockquote",[e("p",[this._v("注意： "),e("strong",[this._v("注释类型标记必须放在代码最前面。")]),this._v(" 标记之前只能有空格或者空行，不能有其他类型的字符。")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[this._v('// { "framework": "Vue" }')]),this._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[this._v('// { "framework": "Rax" }')]),this._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("blockquote",[e("p",[this._v("注意： "),e("strong",[this._v("字符串类型标记必须放在所有可代码之前。")]),this._v(" 标记之前可以有空格、空行或者注释，但是不能有可执行的代码。")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token string"}},[this._v('"use weex:vue"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[this._v(";")]),this._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token string"}},[this._v('"use weex:rax"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[this._v(";")]),this._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"兼容所有版本的写法"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#兼容所有版本的写法","aria-hidden":"true"}},[this._v("#")]),this._v(" 兼容所有版本的写法")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("如果你集成 Weex SDK 都在 0.17 版本之上，建议使用 "),e("code",[this._v('"use weex:vue";')]),this._v(" 作为框架类型标记。如果考虑兼容更早的版本，可以同时使用两种类型标记。")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[this._v('// { "framework": "Vue" }')]),this._v("\n"),e("span",{pre:!0,attrs:{class:"token string"}},[this._v('"use weex:vue"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[this._v(";")]),this._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[this._v('// { "framework": "Rax" }')]),this._v("\n"),e("span",{pre:!0,attrs:{class:"token string"}},[this._v('"use weex:rax"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[this._v(";")]),this._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"vue-js"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#vue-js","aria-hidden":"true"}},[this._v("#")]),this._v(" Vue.js")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"rax"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#rax","aria-hidden":"true"}},[this._v("#")]),this._v(" Rax")])}],r=s(0),n=Object(r.a)({},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"content"},[t._m(0),t._v(" "),t._m(1),t._v(" "),s("p",[t._v("前端技术看起来很繁荣，测试、打包、调试等工具都比较丰富，开发效率比原生开发要高很多。在大型项目中使用前端框架也是一个管理应用好方法，这样更方便于长期维护。")]),t._v(" "),t._m(2),t._v(" "),s("p",[t._v("目前 Weex 主要支持 "),s("a",{attrs:{href:"https://vuejs.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Vue.js"),s("OutboundLink")],1),t._v(" 和 "),s("a",{attrs:{href:"https://alibaba.github.io/rax/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Rax"),s("OutboundLink")],1),t._v(" 作为其内置的前端框架。这些框架已经集成到了 Weex SDK，你不需要在额外引入。")]),t._v(" "),t._m(3),t._v(" "),t._m(4),t._v(" "),s("p",[t._v("Weex 仅在运行时（开始渲染页面之前）才会确定页面使用哪种 DSL，因此要在页面代码中标记使用的是哪种类型的前端框架。")]),t._v(" "),t._m(5),t._v(" "),t._m(6),t._v(" "),t._m(7),t._v(" "),s("p",[t._v("例如 Vue 框架的类型标记如下：")]),t._v(" "),t._m(8),s("p",[t._v("Rax 框架的类型标记如下：")]),t._v(" "),t._m(9),s("h3",{attrs:{id:"使用字符串标记"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#使用字符串标记","aria-hidden":"true"}},[t._v("#")]),t._v(" 使用字符串标记  "),s("badge",{attrs:{text:"0.17+",type:"warn",vertical:"middle"}})],1),t._v(" "),s("p",[t._v("使用注释作为框架标记不够稳妥，在打包过程中有可能会被移除掉，因此从 v0.17 版本开始 Weex 支持使用 ECMAScript 规范中的“指令序言”（"),s("a",{attrs:{href:"http://ecma-international.org/ecma-262/5.1/#sec-14.1",target:"_blank",rel:"noopener noreferrer"}},[t._v("Directive Prologue"),s("OutboundLink")],1),t._v("）来标记各种前端框架的类型，标记的格式是 "),s("code",[t._v('"use weex:xxx";')]),t._v("，其中的 "),s("code",[t._v("xxx")]),t._v(" 指的是前端框架的名字，兼容单引号和双引号，字符串内容保持小写。")]),t._v(" "),t._m(10),t._v(" "),s("p",[t._v("例如 Vue 框架的类型标记如下：")]),t._v(" "),t._m(11),s("p",[t._v("Rax 框架的类型标记如下：")]),t._v(" "),t._m(12),t._m(13),t._v(" "),t._m(14),t._v(" "),s("p",[t._v("例如 Vue 框架的类型标记如下：")]),t._v(" "),t._m(15),s("p",[t._v("Rax 框架的类型标记如下：")]),t._v(" "),t._m(16),t._m(17),t._v(" "),s("p",[t._v("Weex 从 "),s("a",{attrs:{href:"https://github.com/alibaba/weex/releases/tag/v0.10.0",target:"_blank",rel:"noopener noreferrer"}},[t._v("v0.10.0"),s("OutboundLink")],1),t._v("（发布于 2017/02/17）这个版本开始，就集成了 v2 版本的 Vue.js。Vue.js 是一套用于构建用户界面的渐进式框架，详情请参阅其"),s("a",{attrs:{href:"https://vuejs.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("官方网站"),s("OutboundLink")],1),t._v("。")]),t._v(" "),s("div",{staticClass:"tip custom-block"},[s("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),s("p",[t._v("关于在 Weex 中使用 Vue 的技巧请参阅："),s("router-link",{attrs:{to:"./use-vue-in-weex.html"}},[t._v("《在 Weex 中使用 Vue.js》")]),t._v("。")],1)]),t._v(" "),t._m(18),t._v(" "),s("p",[t._v("Rax 是一个兼容 React 接口的前端框架，请参考 "),s("a",{attrs:{href:"https://alibaba.github.io/rax/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Rax 的官方网站"),s("OutboundLink")],1),t._v(" 来获得更多信息。")])])},a,!1,null,null,null);e.default=n.exports}}]);