(window.webpackJsonp=window.webpackJsonp||[]).push([[86],{245:function(e,a,s){"use strict";s.r(a);var t=s(0),r=Object(t.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var e=this,a=e.$createElement,s=e._self._c||a;return s("div",{staticClass:"content"},[s("h1",{attrs:{id:"_0-25-x升级到0-28-x"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_0-25-x升级到0-28-x","aria-hidden":"true"}},[e._v("#")]),e._v(" 0.25.X升级到0.28.X")]),e._v(" "),s("h2",{attrs:{id:"版本变化"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#版本变化","aria-hidden":"true"}},[e._v("#")]),e._v(" 版本变化")]),e._v(" "),s("ul",[s("li",[e._v("0.25.X不支持"),s("code",[e._v("arm64-v8a")]),e._v("、"),s("code",[e._v("x86")]),e._v("架构，0.28.X支持")]),e._v(" "),s("li",[e._v("0.28.X包名由"),s("code",[e._v("com.lmspay.mpweex")]),e._v("变更为"),s("code",[e._v("com.lmspay.zq")])])]),e._v(" "),s("h2",{attrs:{id:"依赖包修改"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#依赖包修改","aria-hidden":"true"}},[e._v("#")]),e._v(" 依赖包修改")]),e._v(" "),s("ul",[s("li",[e._v("SDK版本")])]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v('implementation "com.lmspay.mpweex:mpweex_sdk:0.28.0"\n')])])]),s("ul",[s("li",[e._v("仿微信下拉\n如果APP有使用两码事实现的仿微信下拉，则需要变更依赖")])]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v('implementation "com.lmspay.mpweexheader:mpweexheader:0.1.3"\n')])])]),s("h2",{attrs:{id:"包名变更"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#包名变更","aria-hidden":"true"}},[e._v("#")]),e._v(" 包名变更")]),e._v(" "),s("p",[e._v("由于包名由"),s("code",[e._v("com.lmspay.mpweex")]),e._v("变更为"),s("code",[e._v("com.lmspay.zq")]),e._v("，故有使用到SDK的类，都需要重新导包")]),e._v(" "),s("h2",{attrs:{id:"去掉websocket"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#去掉websocket","aria-hidden":"true"}},[e._v("#")]),e._v(" 去掉websocket")]),e._v(" "),s("p",[e._v("如果有实现websocket相关类，则可以删除掉，因为0.28.X已经自带实现了。")]),e._v(" "),s("h2",{attrs:{id:"layout文件包名替换"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#layout文件包名替换","aria-hidden":"true"}},[e._v("#")]),e._v(" layout文件包名替换")]),e._v(" "),s("p",[e._v("如果有使用WXAdsView，则需要变更包名")]),e._v(" "),s("p",[s("code",[e._v("com.lmspay.mpweex.ui.WXAdsView")]),e._v("替换为"),s("code",[e._v("com.lmspay.zq.ui.WXAdsView")])]),e._v(" "),s("h2",{attrs:{id:"修改混淆参数"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#修改混淆参数","aria-hidden":"true"}},[e._v("#")]),e._v(" 修改混淆参数")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("# weex\n-keep class org.apache.weex.bridge.**{*;}\n-keep class org.apache.weex.dom.**{*;}\n-keep class org.apache.weex.layout.**{*;}\n-keep class org.apache.weex.base.**{*;}\n-keep class org.apache.weex.common.**{*;}\n-keep class * implements org.apache.weex.IWXObject{*;}\n-keep class org.apache.weex.ui.**{*;}\n-keep class org.apache.weex.ui.component.**{*;}\n-keep class org.apache.weex.utils.**{\n    public <fields>;\n    public <methods>;\n    }\n-keepclassmembers class * {\n    @org.apache.weex.annotation.JSMethod *;\n}\n\n-keep class org.apache.weex.base.SystemMessageHandler { *; }\n-dontwarn org.apache.weex.bridge.**\n\n# mpweex\n-keep class com.lmspay.zq.widget.indicators.**{*;}\n")])])])])}],!1,null,null,null);a.default=r.exports}}]);