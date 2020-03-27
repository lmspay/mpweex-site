(window.webpackJsonp=window.webpackJsonp||[]).push([[92],{241:function(t,e,s){"use strict";s.r(e);var a=s(0),n=Object(a.a)({},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"content"},[t._m(0),t._v(" "),t._m(1),t._v(" "),s("p",[t._v("在这篇文档里，我们使用 Objective-C 来扩展 Weex 功能，如果想使用 Swift，可以参考 "),s("router-link",{attrs:{to:"./extend-ios-with-swift.html"}},[t._v("使用 Swift 扩展")]),t._v("。")],1),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),t._m(4),t._v(" "),s("p",[t._v("到此，我们已经完成了一个简单的 module 方法的封装，在 JS 里使用方法如下：")]),t._v(" "),t._m(5),t._m(6),t._v(" "),s("p",[t._v("关于 Module 和 Module 方法的执行特性（同步、异步；执行线程），需要了解：")]),t._v(" "),t._m(7),t._v(" "),t._m(8),t._v(" "),t._m(9),t._v(" "),t._m(10),t._v(" "),t._m(11),t._m(12),t._v(" "),t._m(13),t._m(14),t._v(" "),t._m(15),t._m(16),t._v(" "),t._m(17),t._m(18),t._v(" "),t._m(19),t._v(" "),t._m(20),t._m(21),t._v(" "),t._m(22),t._v(" "),t._m(23),t._m(24),t._v(" "),t._m(25),t._m(26),t._v(" "),t._m(27),t._v(" "),t._m(28),t._m(29),t._v(" "),t._m(30),t._m(31),t._v(" "),t._m(32),t._m(33),t._v(" "),t._m(34),t._m(35),t._v(" "),s("p",[t._v("组件是由 Weex 管理的，比如创建、布局、渲染、销毁。Weex 组件的生命周期方法都是可以重写的，你可以在这些生命周期中去做自己的事情。")]),t._v(" "),t._m(36),t._v(" "),t._m(37),t._v(" "),t._m(38),t._v(" "),t._m(39),t._m(40),t._v(" "),t._m(41),t._m(42),t._v(" "),t._m(43),t._v(" "),t._m(44),t._m(45),t._v(" "),t._m(46),t._m(47),t._v(" "),t._m(48),t._v(" "),t._m(49),t._v(" "),t._m(50),t._v(" "),t._m(51),t._m(52),t._v(" "),t._m(53),t._m(54),t._v(" "),t._m(55)])},[function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{attrs:{id:"扩展-ios-的功能"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#扩展-ios-的功能","aria-hidden":"true"}},[this._v("#")]),this._v(" 扩展 iOS 的功能")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("blockquote",[s("p",[t._v("注意：Weex 所有暴露给 JS 的内置 module 或 component API 都是安全和可控的，它们不会去访问系统的私有 API，也不会去做任何 runtime 上的 hack 更不会去改变应用原有的功能定位。"),s("br"),t._v("\n如果需要扩展自定义的 module 或者 component ，一定注意不要将 OC 的 runtime 暴露给 JS ，不要将一些诸如 "),s("code",[t._v("dlopen()")]),t._v("， "),s("code",[t._v("dlsym()")]),t._v("， "),s("code",[t._v("respondsToSelector:")]),t._v("，"),s("code",[t._v("performSelector:")]),t._v("，"),s("code",[t._v("method_exchangeImplementations()")]),t._v(" 的动态和不可控的方法暴露给JS，也不要将系统的私有API暴露给JS。否则将可能面临苹果上架审核问题。")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"自定义-module"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#自定义-module","aria-hidden":"true"}},[this._v("#")]),this._v(" 自定义 module")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("自定义 module，需要让自己的 class 遵循 "),e("code",[this._v("WXModuleProtocol")]),this._v(" 这个protocol，通过 "),e("code",[this._v("WX_EXPORT_METHOD")]),this._v(" 这个宏暴露出需要透出到 "),e("code",[this._v("JavaScript")]),this._v(" 调用的方法，再向 WeexSDK 注册 module，就可以完成一个简单 module 的自定义。")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ol",[s("li",[t._v("新建一个基类为 NSObject 的 class "),s("code",[t._v("WXCustomEventModule")]),t._v("，让该类遵循 "),s("code",[t._v("WXModuleProtocol")]),t._v(" 的协议。\n"),s("img",{attrs:{src:"https://img.alicdn.com/tfs/TB1LrZ8n7voK1RjSZPfXXXPKFXa-1042-264.png",width:"100%"}})]),t._v(" "),s("li",[t._v("添加打印的方法，通过 "),s("code",[t._v("WX_EXPORT_METHOD")]),t._v(" 暴露该方法。\n"),s("img",{attrs:{src:"https://img.alicdn.com/tfs/TB156M9nZfpK1RjSZFOXXa6nFXa-1434-564.png",width:"100%"}})]),t._v(" "),s("li",[t._v("在初始化完成 Weex SDK 之后注册该 module。\n"),s("img",{attrs:{src:"https://img.alicdn.com/tfs/TB1IGo4nVzqK1RjSZFoXXbfcXXa-1420-122.png",width:"100%"}})])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"language-Javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[t._v("weex"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("requireModule")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"event"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("showParams")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v('"hello Weex'),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h4",{attrs:{id:"module-进阶"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#module-进阶","aria-hidden":"true"}},[this._v("#")]),this._v(" Module 进阶")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ol",[s("li",[s("code",[t._v("weexInstance")]),s("br"),t._v("\n在一个 Weex 页面中，默认 WXSDKInstance 的实例持有多个 module 的实例, 而 Module 的实例是是没有对 WXSDKInstance 做持有的，在自定义的 module 中添加 "),s("code",[t._v("@synthesize weexInstance")]),t._v("，module 实例可以对持有它本身的 WXSDKInstance 实例做一个弱引用，通过 weexInstance 可以拿到调用该 module 的页面的一些信息。")]),t._v(" "),s("li",[s("code",[t._v("targetExecuteThread")]),s("br"),t._v("\nModule 方法默认会在 UI 线程（iOS 主线程）中被调用，建议不要在这做太多耗时的任务。如果你的任务不需要在 UI 线程执行或需要在特定线程执行，需要实现 "),s("code",[t._v("WXModuleProtocol")]),t._v(" 中的 "),s("code",[t._v("- (NSThread *)")]),t._v(" 的方法，并返回你希望方法执行所在的线程。")]),t._v(" "),s("li",[s("code",[t._v("WXModuleKeepAliveCallback")]),s("br"),t._v("\nModule 支持返回值给 JavaScript 中的回调，回调的类型是 "),s("code",[t._v("WXModuleKeepAliveCallback")]),t._v("。回调的参数可以是 "),s("code",[t._v("String")]),t._v(" 或者 "),s("code",[t._v("Map")]),t._v("。该 block 第一个参数为回调给 JavaScript 的数据，第二参数是一个 BOOL 值，表示该回调执行完成之后是否要被清除。JavaScript 每次调用都会产生一个回调，但是对于单独一次调用，是否要在完成该调用之后清除掉回调函数 id 就由这个选项控制，如非特殊场景，建议传 NO。")]),t._v(" "),s("li",[s("code",[t._v("WX_EXPORT_METHOD_SYNC")]),s("br"),t._v("\n使用 "),s("code",[t._v("WX_EXPORT_METHOD")]),t._v(" 暴露到前端的方法都是异步方法(获得结果需要通过回调函数获得)。如果期望获得同步调用结果，可以使用 "),s("code",[t._v("WX_EXPORT_METHOD_SYNC")]),t._v(" 声明同步的 Module 方法。")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"扩展组件"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#扩展组件","aria-hidden":"true"}},[this._v("#")]),this._v(" 扩展组件")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ol",[s("li",[t._v("新建一个基类为 "),s("code",[t._v("WXComponent")]),t._v(" 的类。如果这个类里什么代码也不写，它和默认的的 "),s("code",[t._v("div")]),t._v(" 组件能力是一致的。")]),t._v(" "),s("li",[t._v("覆盖 "),s("code",[t._v("WXComponent")]),t._v(" 中的生命周期方法")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ul",[s("li",[s("code",[t._v("loadView")]),s("br"),t._v("\n一个组件默认对应于一个 view，如果未覆盖 "),s("code",[t._v("loadView")]),t._v(" 提供自定义 view，会让 "),s("code",[t._v("WXComponent")]),t._v(" 基类创建 "),s("code",[t._v("WXView")]),t._v("。"),s("code",[t._v("WXView")]),t._v(" 继承自 "),s("code",[t._v("UIView")]),t._v("。比如我们要实现一个组件支持地图功能，我们可以返回系统的 "),s("code",[t._v("MKMapView")]),t._v("。")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language-Objective-C extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("- (UIView *)loadView {\n    return [MKMapView new];\n}\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[e("code",[this._v("viewDidLoad")]),this._v("\n对组件 view 需要做一些配置，比如设置 delegate，可以在 "),e("code",[this._v("viewDidLoad")]),this._v(" 生命周期做。如果当前 view 没有添加 subview 的话，不要设置 view 的 frame，WeexSDK 会根据 style 进行排版后设置。")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language-Objective-C extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("- (void)viewDidLoad {\n      ((MKMapView*)self.view).delegate = self;\n}\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("ol",{attrs:{start:"3"}},[e("li",[this._v("注册组件")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language-Objective-C extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v('[WXSDKEngine registerComponent:@"map" withClass:[WXMapComponent class]];\n')])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("ol",{attrs:{start:"4"}},[e("li",[this._v("在前端代码中使用新组件")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"language-Html extra-class"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("template")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("map")]),s("span",{pre:!0,attrs:{class:"token style-attr language-css"}},[s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("style")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('="')]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token property"}},[t._v("width")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("200px"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("height")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("200px")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("map")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("template")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h4",{attrs:{id:"自定义事件"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#自定义事件","aria-hidden":"true"}},[this._v("#")]),this._v(" 自定义事件")])},function(){var t=this.$createElement,e=this._self._c||t;return e("ol",[e("li",[this._v("对于每个组件，WeexSDK 默认提供了一些事件能力，如点击等。假如想给我们的地图组件提供 "),e("code",[this._v("mapLoaded")]),this._v(" 事件。")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"language-Html extra-class"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("template")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("map")]),s("span",{pre:!0,attrs:{class:"token style-attr language-css"}},[s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("style")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('="')]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token property"}},[t._v("width")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("200px"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("height")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("200px")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("@mapLoaded")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("onMapLoaded"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("map")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("template")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("script")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token script"}},[s("span",{pre:!0,attrs:{class:"token language-javascript"}},[t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    methods"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("onMapLoaded")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("e")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            console"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"map loaded"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("JSON")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("stringify")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("e"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("script")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("ol",{attrs:{start:"2"}},[e("li",[this._v("覆盖组件生命周期方法，记录事件是否需要处理")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("我们需要额外添加一个 "),e("code",[this._v("BOOL")]),this._v(" 成员 "),e("code",[this._v("mapLoaded")]),this._v(" 用来记录该事件是否生效。")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language-Objective-C extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v('- (void)addEvent:(NSString *)eventName {\n    if ([eventName isEqualToString:@"mapLoaded"]) {\n        _mapLoaded = YES;\n    }\n}\n\n- (void)removeEvent:(NSString *)eventName {\n    if ([eventName isEqualToString:@"mapLoaded"]) {\n        _mapLoaded = NO;\n    }\n}\n')])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("ol",{attrs:{start:"3"}},[e("li",[this._v("给前端发送事件")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language-Objective-C extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v('- (void)mapViewDidFinishLoadingMap:(MKMapView *)mapView {\n    if (_mapLoaded) {\n        [self fireEvent:@"mapLoaded" params:@{@"customKey":@"customValue"} domChanges:nil];\n    }\n}\n')])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h4",{attrs:{id:"自定义属性"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#自定义属性","aria-hidden":"true"}},[this._v("#")]),this._v(" 自定义属性")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("给我们的地图组件添加一个新的属性 "),e("code",[this._v("showTraffic")]),this._v("。在前端代码里可以控制组件是否显示车流情况。")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"language-Html extra-class"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("template")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("map")]),s("span",{pre:!0,attrs:{class:"token style-attr language-css"}},[s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("style")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('="')]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token property"}},[t._v("width")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("200px"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("height")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("200px")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("showTraffic")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("true"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("map")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("template")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("ol",[e("li",[this._v("覆盖组件初始化方法 "),e("code",[this._v("initWithRef...")]),this._v("\n给组件添加一个成员变量记录 "),e("code",[this._v("showTraffic")]),this._v(" 属性的值，并在 init 方法中初始化。")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language-Objective-C extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v('- (instancetype)initWithRef:(NSString *)ref type:(NSString *)type styles:(NSDictionary *)styles attributes:(NSDictionary *)attributes events:(NSArray *)events weexInstance:(WXSDKInstance *)weexInstance {\n    if(self = [super initWithRef:ref type:type styles:styles attributes:attributes events:events weexInstance:weexInstance]) {\n        if (attributes[@"showsTraffic"]) {\n            _showsTraffic = [WXConvert BOOL: attributes[@"showsTraffic"]];\n        }\n    }\n    return self;\n}\n')])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("ol",{attrs:{start:"2"}},[e("li",[this._v("在生命期事件中记得将属性值同步给地图控件")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language-Objective-C extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("- (void)viewDidLoad {\n  ((MKMapView*)self.view).showsTraffic = _showsTraffic;\n}\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("ol",{attrs:{start:"3"}},[e("li",[this._v("当属性更新时，同步给地图控件")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language-Objective-C extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v('- (void)updateAttributes:(NSDictionary *)attributes {\n    if (attributes[@"showsTraffic"]) {\n        _showsTraffic = [WXConvert BOOL: attributes[@"showsTraffic"]];\n        ((MKMapView*)self.view).showsTraffic = _showsTraffic;\n    }\n}\n')])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h4",{attrs:{id:"更多的组件生命期方法"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#更多的组件生命期方法","aria-hidden":"true"}},[this._v("#")]),this._v(" 更多的组件生命期方法")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("table",[s("thead",[s("tr",[s("th",[t._v("方法")]),t._v(" "),s("th",[t._v("描述")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("initWithRef:type:…")]),t._v(" "),s("td",[t._v("用给定的属性初始化一个component.")])]),t._v(" "),s("tr",[s("td",[t._v("layoutDidFinish")]),t._v(" "),s("td",[t._v("在component完成布局时候会调用.")])]),t._v(" "),s("tr",[s("td",[t._v("loadView")]),t._v(" "),s("td",[t._v("创建component管理的view.")])]),t._v(" "),s("tr",[s("td",[t._v("viewWillLoad")]),t._v(" "),s("td",[t._v("在component的view加载之前会调用.")])]),t._v(" "),s("tr",[s("td",[t._v("viewDidLoad")]),t._v(" "),s("td",[t._v("在component的view加载完之后调用.")])]),t._v(" "),s("tr",[s("td",[t._v("viewWillUnload")]),t._v(" "),s("td",[t._v("在component的view被释放之前调用.")])]),t._v(" "),s("tr",[s("td",[t._v("viewDidUnload")]),t._v(" "),s("td",[t._v("在component的view被释放之后调用.")])]),t._v(" "),s("tr",[s("td",[t._v("updateStyles:")]),t._v(" "),s("td",[t._v("在component的style更新时候调用.")])]),t._v(" "),s("tr",[s("td",[t._v("updateAttributes:")]),t._v(" "),s("td",[t._v("在component的attribute更新时候调用.")])]),t._v(" "),s("tr",[s("td",[t._v("addEvent:")]),t._v(" "),s("td",[t._v("给component添加event的时候调用.")])]),t._v(" "),s("tr",[s("td",[t._v("removeEvent:")]),t._v(" "),s("td",[t._v("在event移除的时候调用.")])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h4",{attrs:{id:"给组件添加方法"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#给组件添加方法","aria-hidden":"true"}},[this._v("#")]),this._v(" 给组件添加方法")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("在组件代码中使用宏 "),e("code",[this._v("WX_EXPORT_METHOD")]),this._v(" 声明组件方法供前端调用。")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language-Objective-C extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v('@implementation WXMyComponent\n\nWX_EXPORT_METHOD(@selector(focus))\n\n- (instancetype)initWithRef:(NSString *)ref type:(NSString *)type styles:(NSDictionary *)styles attributes:(NSDictionary *)attributes events:(NSArray *)events weexInstance:(WXSDKInstance *)weexInstance {\n   if (self = [super initWithRef:ref type:type styles:styles attributes:attributes events:events weexInstance:weexInstance]) {\n       // handle your attributes\n       // handle your styles\n   }\n\n   return self;\n}\n\n- (void)focus {\n    NSLog(@"you got it");\n}\n@end\n')])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("在 JS 中调用 "),e("code",[this._v("focus")]),this._v(" 方法。")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"language-Html extra-class"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("template")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("mycomponent")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("ref")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("'")]),t._v("mycomponent"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("'")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("mycomponent")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("template")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("script")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token script"}},[s("span",{pre:!0,attrs:{class:"token language-javascript"}},[t._v("\n  module"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("created")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("$refs"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("mycomponent"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("focus")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("script")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"获取组件的-css-样式"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#获取组件的-css-样式","aria-hidden":"true"}},[this._v("#")]),this._v(" 获取组件的 CSS 样式")])},function(){var t=this.$createElement,e=this._self._c||t;return e("ol",[e("li",[this._v("在 0.19 版本之前，Weex 使用 Yoga 排版引擎，可以通过访问 WXComponent 的 cssNode 属性获取。例如：")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language-Objective-C extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("self.cssNode->style.flex = 1.0;\nfloat height = self.cssNode->style.dimensions[CSS_HEIGHT];\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("ol",{attrs:{start:"2"}},[e("li",[e("p",[this._v("从 0.19 版本开始，Weex 使用自已的排版引擎，是 C++ 代码。获取 CSS 属性可以从 WXComponent 的 styles 字典（NSDictionary）里获取，也可以访问 WXComponent 的 flexCssNode 属性，其类型为 C++ 类 WeexCore::WXCoreLayoutNode。注意，需要源文件为 .mm 类型。")])]),this._v(" "),e("li",[e("p",[this._v("从 0.20 版本开始，iOS 接入 WeexCore，排版引擎也沉入 WeexCore层，并且 CSS 相关属性不再上传给 WXComponent 对象，WXComponent 对象的 styles 字典里只有非 CSS 样式。我们的目的是上层 UI 组件只需要关心排版引擎生成的最终坐标即可，不需要关心前端标记的 CSS 属性。如果仍然需要获取 CSS 样式，可以在 .mm 文件中直接访问 flexCssNode，或通过 WXComponent+Layout.h 文件中提供的扩展方法。")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language-Objective-C extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("/**\n * @abstract Get css style value for key. The key should be of CSS standard form.\n *  This method is for convenience use in C/ObjC environment. And if you want to\n *  retrieve all style values or in C++, you could use flexCssNode directly.\n *\n *  Thread usage:\n *      This method should be invoked in component thread by WXPerformBlockOnComponentThread.\n *      Note that all initWithRef methods of WXComponent and its subclasses are performed in\n *      component thread by default. Therefore you can call this method directly in initWithRef.\n *\n *  Supported keys:\n *      width, height, min-width, min-height, max-width, max-height,\n *      margin-(left/right/top/bottom)\n *      padding-(left/right/top/bottom)\n *      border-(left/right/top/bottom)-width\n *      left, right, top, bottom\n *      flex-grow\n */\n- (float)getCssStyleValueForKey:(NSString *)key;\n\n// Other methods which should also be used in component thread.\n- (WXCoreFlexDirection)getCssStyleFlexDirection;\n- (WXCoreFlexWrap)getCssStyleFlexWrap;\n- (WXCoreJustifyContent)getCssStyleJustifyContent;\n- (WXCoreAlignItems)getCssStyleAlignItems;\n- (WXCoreAlignSelf)getCssStyleAlignSelf;\n- (WXCorePositionType)getCssStylePositionType;\n- (WXCoreDirection)getCssDirection;\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"自定义-handler"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#自定义-handler","aria-hidden":"true"}},[this._v("#")]),this._v(" 自定义 handler")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("Handler 的作用是什么？比如 WeexSDK 目前没有提供图片下载的能力，而是在 "),e("code",[this._v("WXImgLoaderProtocol")]),this._v(" 定义了一些获取图片的接口。Image 组件正是通过 "),e("code",[this._v("WXImgLoaderProtocol")]),this._v(" 获得并展示图片，开发者可以实现该 protocol 中的接口方法，这样 "),e("code",[this._v("image")]),this._v(" 标签才能正常展示图片。")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("开发者也可以定义自己的 "),e("code",[this._v("protocol")]),this._v(" 和对应的实现来使用 "),e("code",[this._v("handler")]),this._v(" 机制。常见的一个场景就是在每个 App 中需要特定的 Handler 来实现一些公共的能力。")])},function(){var t=this.$createElement,e=this._self._c||t;return e("ol",[e("li",[this._v("新建基类为 NSObject 的类，并实现 "),e("code",[this._v("WXImgLoaderProtocol")]),this._v(" 协议，实现 "),e("code",[this._v("WXImgLoaderProtocol")]),this._v(" 的方法。\n下面加载图片的逻辑需要依赖 SDWebImage，你也可以不依赖 SDWebimage 使用自己的方式加载对应 URL 图片。")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language-Objective-C extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v('@implementation WXImgLoaderDefaultImpl\n- (id<WXImageOperationProtocol>)downloadImageWithURL:(NSString *)url imageFrame:(CGRect)imageFrame userInfo:(NSDictionary *)userInfo completed:(void(^)(UIImage *image,  NSError *error, BOOL finished))completedBlock {\n    if ([url hasPrefix:@"//"]) {\n        url = [@"http:" stringByAppendingString:url];\n    }\n    return (id<WXImageOperationProtocol>)[[SDWebImageManager sharedManager] downloadImageWithURL:[NSURL URLWithString:url] options:0 progress:^(NSInteger receivedSize, NSInteger expectedSize) {\n    } completed:^(UIImage *image, NSError *error, SDImageCacheType cacheType, BOOL finished, NSURL *imageURL) {\n    if (completedBlock) {\n        completedBlock(image, error, finished);\n    }\n    }];\n}\n@end\n')])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("ol",{attrs:{start:"2"}},[e("li",[this._v("注册")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language-Objective-C extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("[WXSDKEngine registerHandler:[WXImgLoaderDefaultImpl new] withProtocol:@protocol(WXImgLoaderProtocol)];\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("ol",{attrs:{start:"3"}},[e("li",[this._v("使用")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language-Objective-C extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("id<WXImgLoaderProtocol> imageLoader = [WXSDKEngine handlerForProtocol:@protocol(WXImgLoaderProtocol)];\n[iamgeLoader downloadImageWithURL:imageURl imageFrame:frame userInfo:customParam completed:^(UIImage *image, NSError *error, BOOL finished) {\n}];\n")])])])}],!1,null,null,null);e.default=n.exports}}]);