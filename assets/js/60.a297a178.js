(window.webpackJsonp=window.webpackJsonp||[]).push([[60],{285:function(t,a,s){"use strict";s.r(a);var n=s(0),e=Object(n.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"content"},[s("h1",{attrs:{id:"screen"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#screen","aria-hidden":"true"}},[t._v("#")]),t._v(" screen")]),t._v(" "),s("p",[t._v("用于获取及设置屏幕亮度、方向的模块。")]),t._v(" "),s("div",{staticClass:"tip custom-block"},[s("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),s("p",[t._v("安卓修改屏幕亮度时，需要有系统配置写入权限")])]),t._v(" "),s("h1",{attrs:{id:"api"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#api","aria-hidden":"true"}},[t._v("#")]),t._v(" API")]),t._v(" "),s("h2",{attrs:{id:"get"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#get","aria-hidden":"true"}},[t._v("#")]),t._v(" get")]),t._v(" "),s("p",[t._v("获取屏幕亮度")]),t._v(" "),s("h4",{attrs:{id:"get-callback"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#get-callback","aria-hidden":"true"}},[t._v("#")]),t._v(" get(callback)")]),t._v(" "),s("ul",[s("li",[s("strong",[t._v("@callback")]),t._v(" "),s("em",[t._v("{Function}")]),t._v("：执行完该操作后的回调函数。回调函数将收到一个Response对象\n"),s("ul",[s("li",[s("code",[t._v("brightness {float}")]),t._v("：亮度的值为0-1")])])])]),t._v(" "),s("p",[s("em",[t._v("Demo")])]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" screen "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" weex"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("requireModule")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'screen'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" modal "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" weex"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("requireModule")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'modal'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nscreen"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("get")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("res")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    modal"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("toast")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t    message"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" res"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("brightness\n\t"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("；\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("h2",{attrs:{id:"set"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#set","aria-hidden":"true"}},[t._v("#")]),t._v(" set")]),t._v(" "),s("p",[t._v("设置屏幕亮度")]),t._v(" "),s("h4",{attrs:{id:"set-value-callback"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#set-value-callback","aria-hidden":"true"}},[t._v("#")]),t._v(" set(value, callback)")]),t._v(" "),s("ul",[s("li",[s("strong",[t._v("@value")]),t._v(" "),s("em",[t._v("{float}")]),t._v("：亮度值0-1")]),t._v(" "),s("li",[s("strong",[t._v("@callback")]),t._v(" "),s("em",[t._v("{Function}")]),t._v("：执行完该操作后的回调函数。回调函数将收到一个Response对象\n"),s("ul",[s("li",[s("code",[t._v("brightness {float}")]),t._v("：返回设置后的亮度值0-1")])])])]),t._v(" "),s("p",[s("em",[t._v("Demo")])]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" screen "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" weex"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("requireModule")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'screen'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" modal "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" weex"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("requireModule")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'modal'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nscreen"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("set")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.7")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("res")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    modal"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("toast")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t    message"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" res"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("brightness\n\t"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("；\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("h2",{attrs:{id:"getorientation"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#getorientation","aria-hidden":"true"}},[t._v("#")]),t._v(" getOrientation")]),t._v(" "),s("p",[t._v("获取当前屏幕方向")]),t._v(" "),s("h4",{attrs:{id:"getorientation-callback"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#getorientation-callback","aria-hidden":"true"}},[t._v("#")]),t._v(" getOrientation(callback)")]),t._v(" "),s("ul",[s("li",[s("strong",[t._v("@callback")]),t._v(" "),s("em",[t._v("{Function}")]),t._v("：执行完该操作后的回调函数。回调函数将收到一个Response对象\n"),s("ul",[s("li",[s("code",[t._v("orientation {string}")]),t._v("：横屏：landscape，竖屏：portrait")])])])]),t._v(" "),s("p",[s("em",[t._v("Demo")])]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" screen "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" weex"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("requireModule")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'screen'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" modal "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" weex"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("requireModule")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'modal'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nscreen"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getOrientation")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("res")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    modal"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("toast")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t    message"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" res"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("orientation\n\t"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("；\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("h2",{attrs:{id:"lockorientation"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#lockorientation","aria-hidden":"true"}},[t._v("#")]),t._v(" lockOrientation")]),t._v(" "),s("p",[t._v("获取当前屏幕方向")]),t._v(" "),s("h4",{attrs:{id:"lockorientation-value-callback"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#lockorientation-value-callback","aria-hidden":"true"}},[t._v("#")]),t._v(" lockOrientation(value, callback)")]),t._v(" "),s("ul",[s("li",[s("strong",[t._v("@value")]),t._v(" "),s("em",[t._v("{string}")]),t._v("：横屏：landscape，竖屏：portrait")]),t._v(" "),s("li",[s("strong",[t._v("@callback")]),t._v(" "),s("em",[t._v("{Function}")]),t._v("：执行完该操作后的回调函数。回调函数将收到一个Response对象\n"),s("ul",[s("li",[s("code",[t._v("orientation {string}")]),t._v("：返回设置后的值，横屏：landscape，竖屏：portrait")])])])]),t._v(" "),s("p",[s("em",[t._v("Demo")])]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" screen "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" weex"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("requireModule")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'screen'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" modal "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" weex"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("requireModule")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'modal'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nscreen"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("lockOrientation")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'landscape'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("res")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    modal"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("toast")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t    message"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" res"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("orientation\n\t"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("；\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])])}],!1,null,null,null);a.default=e.exports}}]);