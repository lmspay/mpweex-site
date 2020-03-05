(window.webpackJsonp=window.webpackJsonp||[]).push([[83],{248:function(e,t,a){"use strict";a.r(t);var n=a(0),s=Object(n.a)({},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"content"},[e._m(0),e._v(" "),a("p",[e._v("使用 "),a("a",{attrs:{href:"https://cocoapods.org/",target:"_blank",rel:"noopener noreferrer"}},[e._v("CocoaPods"),a("OutboundLink")],1),e._v(" 或 "),a("a",{attrs:{href:"https://github.com/Carthage/Carthage",target:"_blank",rel:"noopener noreferrer"}},[e._v("Carthage"),a("OutboundLink")],1),e._v(" 可以方便地将 Weex 集成到自己的项目中。")]),e._v(" "),e._m(1),e._v(" "),e._m(2),e._v(" "),a("p",[e._v("从 Cocoapods "),a("a",{attrs:{href:"https://cocoapods.org/pods/WeexSDK",target:"_blank",rel:"noopener noreferrer"}},[e._v("仓库"),a("OutboundLink")],1),e._v("中获取 WeexSDK 的最新版本。")]),e._v(" "),a("p",[e._v("将 WeexSDK 添加到你的 Podfile 中。")]),e._v(" "),e._m(3),e._m(4),e._v(" "),e._m(5),e._v(" "),a("p",[e._v("在工程中创建一个 Cartfile，"),a("a",{attrs:{href:"https://github.com/Carthage/Carthage#adding-frameworks-to-an-application",target:"_blank",rel:"noopener noreferrer"}},[e._v("Carthage 使用方法"),a("OutboundLink")],1),e._v("。")]),e._v(" "),a("p",[e._v("添加 "),a("code",[e._v('github "apache/incubator-weex"')]),e._v(" 到 "),a("a",{attrs:{href:"https://github.com/Carthage/Carthage/blob/master/Documentation/Artifacts.md#cartfile",target:"_blank",rel:"noopener noreferrer"}},[a("code",[e._v("Cartfile")]),a("OutboundLink")],1)]),e._v(" "),e._m(6),e._v(" "),e._m(7),e._v(" "),e._m(8),e._v(" "),e._m(9),e._m(10),e._v(" "),e._m(11),e._v(" "),e._m(12),e._m(13),e._v(" "),e._m(14),e._v(" "),e._m(15),e._m(16),e._v(" "),a("p",[e._v("Weex 支持自定义组件、模块，可以参考以下两篇文档。")]),e._v(" "),a("ul",[a("li",[a("router-link",{attrs:{to:"./../extend/extend-ios.html"}},[e._v("Extend iOS")])],1),e._v(" "),a("li",[a("router-link",{attrs:{to:"./../extend/extend-ios-with-swift.html"}},[e._v("Extend iOS with swift")])],1)]),e._v(" "),e._m(17),e._v(" "),a("p",[e._v("当页面渲染完成后，屏幕再旋转，页面不会自动适配。所以，如果你的 App 允许屏幕旋转，务必在页面渲染前更新屏幕宽度。")]),e._v(" "),e._m(18),e._v(" "),a("p",[e._v("修改 view-port-width 的方法，会影响前端代码，通常不要设置，默认为 750px。")]),e._v(" "),e._m(19),a("p",[e._v("监听 UIDeviceOrientationDidChangeNotification 通知，并调用下面方法修改屏幕尺寸（假设已经旋转完成，[UIScreen mainScreen].bounds.size.width 就是当前宽度）")]),e._v(" "),e._m(20)])},[function(){var e=this.$createElement,t=this._self._c||e;return t("h1",{attrs:{id:"集成-mpweex-到-ios"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#集成-mpweex-到-ios","aria-hidden":"true"}},[this._v("#")]),this._v(" 集成 MPWeex 到 iOS")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"_1-配置依赖"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-配置依赖","aria-hidden":"true"}},[this._v("#")]),this._v(" 1. 配置依赖")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"使用-cocoapods"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#使用-cocoapods","aria-hidden":"true"}},[this._v("#")]),this._v(" 使用 CocoaPods")])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"language-ruby extra-class"},[a("pre",{pre:!0,attrs:{class:"language-ruby"}},[a("code",[e._v("source "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v("'git@github.com:CocoaPods/Specs.git'")]),e._v("\ntarget "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v("'YourTarget'")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("do")]),e._v("\n    platform "),a("span",{pre:!0,attrs:{class:"token symbol"}},[e._v(":ios")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v("'8.0'")]),e._v("\n    pod "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v("'WeexSDK'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v("'0.20.1'")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("end")]),e._v("\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("运行 "),t("code",[this._v("pod install")]),this._v(" 命令安装依赖。")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"使用-carthage"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#使用-carthage","aria-hidden":"true"}},[this._v("#")]),this._v(" 使用 Carthage")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("运行 "),t("code",[this._v("carthage update")]),this._v("。")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"_2-初始化-weex"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-初始化-weex","aria-hidden":"true"}},[this._v("#")]),this._v(" 2. 初始化 Weex")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("建议在 "),t("code",[this._v("didFinishLaunchingWithOptions")]),this._v(" 回调中初始化 Weex，你也可以在子线程中异步初始化，但需要确保渲染 Weex 页面前初始化已经全部完成。")])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language-Objective-C extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v('// App configuration\n[WXAppConfiguration setAppGroup:@"Your app group"];\n[WXAppConfiguration setAppName:@"Your app name"];\n[WXAppConfiguration setAppVersion:@"Your app version"];\n\n//Initialize WeexSDK\n[WXSDKEngine initSDKEnvironment];\n\n//Register custom modules and components, optional.\n[WXSDKEngine registerComponent:@"myview" withClass:[MyViewComponent class]];\n[WXSDKEngine registerModule:@"mymodule" withClass:[MyWeexModule class]];\n\n//Register the implementation of protocol, optional.\n[WXSDKEngine registerHandler:[WXAppNavigationImpl new] withProtocol:@protocol(WXNavigationProtocol)];\n\n//Set the log level, optional\n[WXLog setLogLevel: WXLogLevelWarning];\n')])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"_3-创建一个-weex-实例"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-创建一个-weex-实例","aria-hidden":"true"}},[this._v("#")]),this._v(" 3. 创建一个 Weex 实例")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("你既可以在全页面中使用 Weex，也可以在一个 view 中渲染 Weex。只需要创建一个 Weex 实例并指定好回调方法，提供一个合法的 URL 就可以了。在 "),t("code",[this._v("onCreate")]),this._v(" 回调方法中将根 view 添加到你想显示内容的地方，并通过 "),t("code",[this._v("instance.frame =")]),this._v(" 来设置它的尺寸和位置。")])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language-Objective-C extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v('#import <WeexSDK/WXSDKInstance.h>\n\n- (void)viewDidLoad\n{\n    [super viewDidLoad];\n    _instance = [[WXSDKInstance alloc] init];\n    _instance.viewController = self;\n    _instance.frame = self.view.frame;\n    __weak typeof(self) weakSelf = self;\n    _instance.onCreate = ^(UIView *view) {\n        [weakSelf.weexView removeFromSuperview];\n        weakSelf.weexView = view;\n        [weakSelf.view addSubview:view];\n    };\n    _instance.onFailed = ^(NSError *error) {\n        //process failure, you could open an h5 web page instead or just show the error.\n    };\n    _instance.renderFinish = ^ (UIView *view) {\n        //process renderFinish\n    };\n    NSURL *url = [[NSBundle mainBundle] URLForResource:@"main" withExtension:@"js"];\n    [_instance renderWithURL:url options:@{@"bundleUrl":[self.url absoluteString]} data:nil];\n}\n')])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"_4-销毁实例"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-销毁实例","aria-hidden":"true"}},[this._v("#")]),this._v(" 4. 销毁实例")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("必须"),t("strong",[this._v("显式地")]),this._v("销毁 Weex 实例，否则可能引起内存泄漏。")])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language-Objective-C extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v("[instance destroyInstance];\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"_5-扩展-weex"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_5-扩展-weex","aria-hidden":"true"}},[this._v("#")]),this._v(" 5. 扩展 Weex")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"_6-在-ipad-中使用-weex"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_6-在-ipad-中使用-weex","aria-hidden":"true"}},[this._v("#")]),this._v(" 6. 在 iPad 中使用 Weex")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("前端样式中指定的坐标在渲染时会根据 "),t("strong",[this._v("屏幕宽度")]),this._v(" 和 "),t("strong",[this._v("当前页面的 view-port-width")]),this._v(" 进行换算。")])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[e._v("beforeCreate")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("const")]),e._v(" meta "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" weex"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("requireModule")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[e._v("'meta'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n    meta"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("setViewport")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n        width"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("1536")]),e._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language-Objective-C extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v("[WXCoreBridge setDeviceSize:[UIScreen mainScreen].bounds.size];\n")])])])}],!1,null,null,null);t.default=s.exports}}]);