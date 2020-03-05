(window.webpackJsonp=window.webpackJsonp||[]).push([[73],{260:function(t,s,n){"use strict";n.r(s);var e=n(0),a=Object(e.a)({},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"content"},[t._m(0),t._v(" "),n("p",[t._v("“降级” 通常是指以普通 Web 页面的模式渲染 Weex 的页面。")]),t._v(" "),n("p",[t._v("Weex 本身是支持跨三种平台的（Android、iOS、Web），在不同平台中集成不同版本的 SDK 来实现原生渲染，然而随着平台和应用版本的迭代，会出现版本碎片化的情况。如果你使用了较高版本中的特性，但是又无法升级已经存在的低版本 App，就可以使用“降级”的方式在低版本 App 中以普通 Web 页面的模式来渲染（在 Web 模式中，渲染器或者说“SDK”也是用 Javascript 实现的，可以动态更新）。")]),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),t._m(4),t._m(5),t._v(" "),t._m(6),t._v(" "),t._m(7),t._v(" "),t._m(8),t._v(" "),n("p",[t._v("为了方便使用，Weex 提供了一系列辅助模块/插件来实现降级功能。")]),t._v(" "),t._m(9),t._v(" "),n("ul",[n("li",[t._v("npm 模块主页： "),n("a",{attrs:{href:"https://www.npmjs.com/package/@weex-project/downgrade",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://www.npmjs.com/package/@weex-project/downgrade"),n("OutboundLink")],1)]),t._v(" "),n("li",[t._v("源码地址： "),n("a",{attrs:{href:"https://github.com/weexteam/downgrade",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://github.com/weexteam/downgrade"),n("OutboundLink")],1)])]),t._v(" "),t._m(10),t._v(" "),t._m(11),n("p",[t._v("提供的接口如下：")]),t._v(" "),t._m(12),t._v(" "),n("p",[t._v("强制降级。调用该接口可以无条件立即降级。")]),t._v(" "),t._m(13),t._m(14),t._v(" "),t._m(15),t._v(" "),t._m(16),t._v(" "),t._m(17),t._v(" "),t._m(18),t._m(19),t._v(" "),t._m(20),t._v(" "),t._m(21),t._m(22),t._v(" "),n("p",[t._v("Weex 提供了一个 Webpack 插件 "),n("a",{attrs:{href:"https://www.npmjs.com/package/webpack-plugin-downgrade",target:"_blank",rel:"noopener noreferrer"}},[n("code",[t._v("webpack-plugin-downgrade")]),n("OutboundLink")],1),t._v(" 支持在打包时注入触发降级的代码。")]),t._v(" "),t._m(23),n("p",[t._v("插件支持的配置项如下：")]),t._v(" "),t._m(24),t._v(" "),t._m(25),t._m(26),t._v(" "),t._m(27),t._v(" "),t._m(28),t._v(" "),t._m(29),t._m(30),t._v(" "),n("p",[t._v("在辅助降级的工具包中，实现了简版的 "),n("a",{attrs:{href:"https://semver.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Semantic Versioning"),n("OutboundLink")],1),t._v("（语义化版本号）来匹配版本，"),t._m(31)]),t._v(" "),t._m(32),t._v(" "),n("p",[t._v("设备型号由手机设备厂商定义，降级配置项中需要列举出所有想要降级的设备型号。")])])},[function(){var t=this.$createElement,s=this._self._c||t;return s("h1",{attrs:{id:"页面降级"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#页面降级","aria-hidden":"true"}},[this._v("#")]),this._v(" 页面降级")])},function(){var t=this.$createElement,s=this._self._c||t;return s("blockquote",[s("p",[this._v("降级是一个与业务属性相关的功能，这里仅提供一份建议和约定，而非技术限制。")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"触发降级"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#触发降级","aria-hidden":"true"}},[this._v("#")]),this._v(" 触发降级")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("在 Weex 里，“降级”行为是在前端（页面代码）中触发的，由客户端来实现。触发方式是调用客户端提供的 "),s("code",[this._v("instanceWrap")]),this._v(" 模块中的 "),s("code",[this._v("error")]),this._v(" 方法来实现。")])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" instanceWrap "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" weex"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("requireModule")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'instanceWrap'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\ninstanceWrap"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("error")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("errorType"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" errorCode"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" message"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("code",[this._v("instanceWrap")]),this._v(" 模块仅包含 "),s("code",[this._v("error")]),this._v(" 这一个接口，传递的参数主要用于区分降级的类型和原因，与具体业务场景相关，不做强限制，大致的约定如下。")])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("ul",[n("li",[n("code",[t._v("errorType")]),t._v(": 【数字】 错误类型。由前端触发的降级通常约定为 "),n("code",[t._v("1")]),t._v("。")]),t._v(" "),n("li",[n("code",[t._v("errorCode")]),t._v(": 【数字】 错误代码。\n"),n("ul",[n("li",[n("code",[t._v("1001")]),t._v(": 系统版本不满足条件。")]),t._v(" "),n("li",[n("code",[t._v("1002")]),t._v(": 应用版本不满足条件。")]),t._v(" "),n("li",[n("code",[t._v("1003")]),t._v(": WeexSDK 版本不满足条件。")]),t._v(" "),n("li",[n("code",[t._v("1004")]),t._v(": 设备型号不满足条件。")])])]),t._v(" "),n("li",[n("code",[t._v("message")]),t._v(": 【字符串】 错误信息。")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("blockquote",[s("p",[this._v("在页面代码任意位置调用了降级接口都会立即触发降级，比较常见的做法是在渲染页面之前，先判断环境信息是否满足需求，然后触发降级。")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"辅助工具"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#辅助工具","aria-hidden":"true"}},[this._v("#")]),this._v(" 辅助工具")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"npm-模块"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#npm-模块","aria-hidden":"true"}},[this._v("#")]),this._v(" Npm 模块")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("首先安装 "),s("code",[this._v("@weex-project/downgrade")]),this._v(" 模块，然后在页面代码中引入，调用其中的接口即可触发降级。")])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[this._v("import")]),this._v(" downgrade "),s("span",{pre:!0,attrs:{class:"token keyword"}},[this._v("from")]),this._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[this._v("'@weex-project/downgrade'")]),this._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h4",{attrs:{id:"force"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#force","aria-hidden":"true"}},[this._v("#")]),this._v(" "),s("code",[this._v("force()")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[this._v("downgrade"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[this._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[this._v("force")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[this._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[this._v(")")]),this._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h4",{attrs:{id:"check-options"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#check-options","aria-hidden":"true"}},[this._v("#")]),this._v(" "),s("code",[this._v("check(options)")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("检查环境信息是否满足 "),s("code",[this._v("options")]),this._v(" 的描述，返回校验结果，"),s("strong",[this._v("并不会触发降级")]),this._v("。")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("code",[this._v("options")]),this._v(" 的格式见下文详解，返回值的格式如下：")])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("ul",[n("li",[n("code",[t._v("isDowngrade")]),t._v(": 是否应该降级（不满足 "),n("code",[t._v("options")]),t._v(" 中的条件则为 "),n("code",[t._v("true")]),t._v("）。")]),t._v(" "),n("li",[n("code",[t._v("errorType")]),t._v(": 错误类型，语义同上，仅 "),n("code",[t._v("isDowngrade")]),t._v(" 为 "),n("code",[t._v("true")]),t._v(" 时才包含。")]),t._v(" "),n("li",[n("code",[t._v("code")]),t._v(": 错误代码，语义同上，仅 "),n("code",[t._v("isDowngrade")]),t._v(" 为 "),n("code",[t._v("true")]),t._v(" 时才包含。")])])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" result "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" downgrade"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("check")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" ios"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" osVersion"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'<=9.0'")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v("result"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("isDowngrade"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Do something")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h4",{attrs:{id:"condition-options"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#condition-options","aria-hidden":"true"}},[this._v("#")]),this._v(" "),s("code",[this._v("condition(options)")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("检查环境信息是否满足 "),s("code",[this._v("options")]),this._v(" 的描述，"),s("strong",[this._v("不满足条件则触发降级")]),this._v("。 "),s("code",[this._v("options")]),this._v(" 的格式见下文详解，没有返回值。")])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[t._v("downgrade"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("condition")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  android"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    appVersion"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'<=7.8.0'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    weexVersion"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'<0.16.0'")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"webpack-插件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#webpack-插件","aria-hidden":"true"}},[this._v("#")]),this._v(" Webpack 插件")])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// webpack.config.js")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" DowngradePlugin "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'webpack-plugin-downgrade'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\nmodule"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// other configs ...")]),t._v("\n\n  plugins"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("DowngradePlugin")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* downgrade options */")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("ul",[n("li",[n("code",[t._v("force")]),t._v(": "),n("code",[t._v("Boolean")]),t._v(" 是否强制降级。")]),t._v(" "),n("li",[n("code",[t._v("condition")]),t._v(": "),n("code",[t._v("Object")]),t._v(" 满足特定条件时才触发降级。具体的配置项见下文详解。")])])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 强制降级")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("DowngradePlugin")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" force"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 满足某些条件时降级")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("DowngradePlugin")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  condition"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    ios"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      deviceModel"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'iPhone5,1'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    android"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      osVersion"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'<=4.4'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      weexVersion"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'<0.16.0'")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"降级配置项"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#降级配置项","aria-hidden":"true"}},[this._v("#")]),this._v(" 降级配置项")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("降级配置项是一个普通的 JS 对象，包含 "),s("code",[this._v("ios")]),this._v(" 和 "),s("code",[this._v("android")]),this._v(" 两个字段，这两个字段内部的配置项的语义都是一样的。满足配置项中的任意一个条件就会触发降级。")])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("table",[n("thead",[n("tr",[n("th",[t._v("字段")]),t._v(" "),n("th",[t._v("数据格式")]),t._v(" "),n("th",[t._v("含义")])])]),t._v(" "),n("tbody",[n("tr",[n("td",[n("code",[t._v("osVersion")])]),t._v(" "),n("td",[t._v("语义化版本号")]),t._v(" "),n("td",[t._v("手机操作系统的版本范围")])]),t._v(" "),n("tr",[n("td",[n("code",[t._v("appVersion")])]),t._v(" "),n("td",[t._v("语义化版本号")]),t._v(" "),n("td",[t._v("App 应用的版本范围")])]),t._v(" "),n("tr",[n("td",[n("code",[t._v("weexVersion")])]),t._v(" "),n("td",[t._v("语义化版本号")]),t._v(" "),n("td",[t._v("WeexSDK 的版本范围")])]),t._v(" "),n("tr",[n("td",[n("code",[t._v("deviceModel")])]),t._v(" "),n("td",[t._v("由设备机型字符串构成的数组")]),t._v(" "),n("td",[t._v("需要降级的机型列表")])])])])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" options "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 在 Android 中的配置项")]),t._v("\n  android"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 在低于 4.5 的安卓系统中降级")]),t._v("\n    osVersion"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'<4.5'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 仅在 8.1.10 版本的 App 中降级")]),t._v("\n    appVersion"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'8.1.10'")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\n  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 在 iOS 中的配置项")]),t._v("\n  ios"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 在小于等于 WeexSDK 0.18.2 的版本中降级")]),t._v("\n    weexVersion"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'<=0.18.2'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 在 iPhone 5 和 iPhone 5s 中降级")]),t._v("\n    deviceModel"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'iPhone5,1'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'iPhone6,1'")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"语义化版本号"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#语义化版本号","aria-hidden":"true"}},[this._v("#")]),this._v(" 语义化版本号")])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("strong",[t._v("仅支持使用 "),n("code",[t._v(">")]),t._v(" 、 "),n("code",[t._v("<")]),t._v(" 、 "),n("code",[t._v("=")]),t._v(" 、 "),n("code",[t._v(">=")]),t._v(" 、 "),n("code",[t._v("<=")]),t._v(" 这五种比较符。")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"设备型号"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#设备型号","aria-hidden":"true"}},[this._v("#")]),this._v(" 设备型号")])}],!1,null,null,null);s.default=a.exports}}]);