(window.webpackJsonp=window.webpackJsonp||[]).push([[94],{316:function(e,t,r){"use strict";r.r(t);var i=r(0),_=Object(i.a)({},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"content"},[e._m(0),e._v(" "),r("p",[e._v("Weex 是一个跨平台解决方案，Web 平台只是其一种运行环境，除此之外还可以在 Android 和 iOS 客户端中运行。原生开发平台和 Web 平台之间的差异，在功能和开发体验上都有一些差异。")]),e._v(" "),e._m(1),e._v(" "),r("p",[e._v("DOM（Document Object Model），即文档对象模型，是 HTML 和 XML 文档的编程接口，是 Web 中的概念。Weex 的运行环境以原生应用为主，在 Android 和 iOS 环境中渲染出来的是原生的组件，不是 DOM Element。")]),e._v(" "),e._m(2),e._v(" "),r("p",[e._v("原生环境中不支持 Web API，没有 "),r("code",[e._v("Element")]),e._v(" 、"),r("code",[e._v("Event")]),e._v(" 、"),r("code",[e._v("File")]),e._v(" 等对象，详细列表可以参考 "),r("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/API",target:"_blank",rel:"noopener noreferrer"}},[e._v("Web APIs on MDN"),r("OutboundLink")],1),e._v("。不支持选中元素，如 "),r("code",[e._v("document.getElementById")]),e._v(" 、 "),r("code",[e._v("document.querySelector")]),e._v(" 等；当然也不支持基于 DOM API 的程序库（如 jQuery）。")]),e._v(" "),e._m(3),e._v(" "),r("p",[e._v("Weex 支持在标签上绑定事件，和在浏览器中的写法一样，但是 Weex 中的事件是由原生组件捕获并触发的，行为和浏览器中有所不同，事件中的属性也和 Web 中有差异。")]),e._v(" "),r("ul",[r("li",[e._v("支持 Web 中的事件类型，详情请参考"),r("router-link",{attrs:{to:"./../dev/events/common-events.html"}},[e._v("《通用事件》")]),e._v("。")],1),e._v(" "),r("li",[e._v("不区分事件的捕获阶段和冒泡阶段，相当于 DOM 0 级事件。")])]),e._v(" "),e._m(4),e._v(" "),r("p",[e._v("BOM（Browser Object Model），即浏览器对象模型，是浏览器环境为 javascript 提供的接口。Weex 在原生端并不基于浏览器运行，不支持浏览器提供的 BOM 接口。")]),e._v(" "),e._m(5),e._v(" "),e._m(6),e._v(" "),e._m(7),e._v(" "),e._m(8),e._v(" "),e._m(9),e._v(" "),e._m(10),e._v(" "),e._m(11),e._v(" "),r("p",[e._v("这些接口与浏览器自身的实现有关，可以控制页面的前进后退并且获取状态信息。虽然在 Android 和 iOS 中也有“历史”和“导航”的概念，但是它是用于多个管理视图之间的跳转的。换句话说，在浏览器中执行“前进”、“后退”仍然会处于同一个页签中，在原生应用中“前进”、“后退”则会真实的跳转到其他页面。")]),e._v(" "),r("p",[e._v("此外 Weex 也提供了 "),r("code",[e._v("navigator")]),e._v(" 模块来操作页面的跳转，使用方法参考"),r("router-link",{attrs:{to:"./../dev/modules/navigator.html"}},[e._v("《navigator 导航控制》")]),e._v("。")],1),e._v(" "),e._m(12),e._v(" "),r("p",[e._v("在 Weex 中能够调用移动设备原生 API，使用方法是通过注册、调用模块来实现。其中有一些模块是 Weex 内置的，如 clipboard 、 navigator 、storage 等。")]),e._v(" "),r("ul",[r("li",[r("router-link",{attrs:{to:"./../dev/modules/clipboard.html"}},[e._v("《clipboard 剪切板》")])],1),e._v(" "),r("li",[r("router-link",{attrs:{to:"./../dev/modules/navigator.html"}},[e._v("《navigator 导航控制》")])],1),e._v(" "),r("li",[r("router-link",{attrs:{to:"./../dev/modules/storage.html"}},[e._v("《storage 本地存储 》")])],1)]),e._v(" "),r("p",[e._v("为了保持框架的通用性，Weex 内置的原生模块有限，不过 Weex 提供了横向扩展的能力，可以扩展原生模块，具体的扩展方法请参考"),r("router-link",{attrs:{to:"./extend/extend-ios.html"}},[e._v("《iOS 扩展》")]),e._v(" 和"),r("router-link",{attrs:{to:"./extend/extend-android.html"}},[e._v("《Android 扩展》")]),e._v("。")],1),e._v(" "),e._m(13)])},[function(){var e=this.$createElement,t=this._self._c||e;return t("h1",{attrs:{id:"weex-和-web-的平台差异"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#weex-和-web-的平台差异","aria-hidden":"true"}},[this._v("#")]),this._v(" Weex 和 Web 的平台差异")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"weex-环境中没有-dom"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#weex-环境中没有-dom","aria-hidden":"true"}},[this._v("#")]),this._v(" Weex 环境中没有 DOM")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"不支持-dom-操作"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#不支持-dom-操作","aria-hidden":"true"}},[this._v("#")]),this._v(" 不支持 DOM 操作")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"有限的事件类型"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#有限的事件类型","aria-hidden":"true"}},[this._v("#")]),this._v(" 有限的事件类型")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"weex-环境中没有-bom"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#weex-环境中没有-bom","aria-hidden":"true"}},[this._v("#")]),this._v(" Weex 环境中没有 BOM")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"没有-window-、screen-对象"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#没有-window-、screen-对象","aria-hidden":"true"}},[this._v("#")]),this._v(" 没有 "),t("code",[this._v("window")]),this._v(" 、"),t("code",[this._v("screen")]),this._v(" 对象")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("Weex 中并未提供浏览器中的 "),t("code",[this._v("window")]),this._v(" 和 "),t("code",[this._v("screen")]),this._v(" 对象，不支持使用全局变量。如果是想要获取设备的屏幕或环境信息，可以使用 "),t("code",[this._v("WXEnvironment")]),this._v(" 变量。")])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ul",[r("li",[r("code",[e._v("WXEnvironment")]),e._v(" "),r("ul",[r("li",[r("code",[e._v("weexVersion")]),e._v(": WeexSDK 的版本。")]),e._v(" "),r("li",[r("code",[e._v("appName")]),e._v(": 应用的名称。")]),e._v(" "),r("li",[r("code",[e._v("appVersion")]),e._v(": 应用的版本。")]),e._v(" "),r("li",[r("code",[e._v("platform")]),e._v(": 运行平台，可能的值是 "),r("code",[e._v("Web")]),e._v(" 、"),r("code",[e._v("Android")]),e._v(" 、"),r("code",[e._v("iOS")]),e._v(" 之一。")]),e._v(" "),r("li",[r("code",[e._v("osName")]),e._v(": 系统的名称。")]),e._v(" "),r("li",[r("code",[e._v("osVersion")]),e._v(": 系统版本。")]),e._v(" "),r("li",[r("code",[e._v("deviceWidth")]),e._v(": 设备宽度。")]),e._v(" "),r("li",[r("code",[e._v("deviceHeight")]),e._v(": 设备高度。")])])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"没有-document-对象"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#没有-document-对象","aria-hidden":"true"}},[this._v("#")]),this._v(" 没有 "),t("code",[this._v("document")]),this._v(" 对象")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("在浏览器中 "),t("code",[this._v("document")]),this._v(" 表示了当前活动的文档模型，在 Android 和 iOS 环境中并没有这个对象，也不支持与其相关的 DOM 操作。")])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("h3",{attrs:{id:"没有-history-、location-、navigator-对象"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#没有-history-、location-、navigator-对象","aria-hidden":"true"}},[e._v("#")]),e._v(" 没有 "),r("code",[e._v("history")]),e._v(" 、"),r("code",[e._v("location")]),e._v(" 、"),r("code",[e._v("navigator")]),e._v(" 对象")])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ul",[r("li",[r("code",[e._v("history")]),e._v(" 保存了当前页面的历史记录，并且提供了前进后退操作。")]),e._v(" "),r("li",[r("code",[e._v("location")]),e._v(" 记录了当前页面 URL 相关的信息。")]),e._v(" "),r("li",[r("code",[e._v("navigator")]),e._v(" 记录了当前浏览器中的信息。")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"能够调用移动设备原生-api"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#能够调用移动设备原生-api","aria-hidden":"true"}},[this._v("#")]),this._v(" 能够调用移动设备原生 API")])},function(){var e=this.$createElement,t=this._self._c||e;return t("blockquote",[t("p",[this._v("有些接口在浏览器环境中也存在，不过在使用时应该注意浏览器的兼容性；如剪贴板功能，出于安全性考虑，绝大多数浏览器都限制其使用。")])])}],!1,null,null,null);t.default=_.exports}}]);