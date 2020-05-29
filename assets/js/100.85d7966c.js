(window.webpackJsonp=window.webpackJsonp||[]).push([[100],{246:function(t,a,e){"use strict";e.r(a);var s=e(0),n=Object(s.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"content"},[e("p",[t._v("这部分扩展能力还在讨论尝试中，可能随时会有调整，请留意。")]),t._v(" "),e("p",[t._v("Weex 希望能够尊重尽可能多的开发者的使用习惯，所以除了 Weex 官方支持的 Vue 2.0 之外，开发者还可以定制并横向扩展自己的或自己喜欢的 JS Framework。完整一套 JS Framework 的定制和扩展需要以下几个步骤：")]),t._v(" "),e("ol",[e("li",[t._v("首先你要有一套完整的 JS Framework。")]),t._v(" "),e("li",[t._v("了解 Weex 的 JS 引擎的特性支持情况。")]),t._v(" "),e("li",[t._v("适配 Weex 的 native DOM APIs。")]),t._v(" "),e("li",[t._v("适配 Weex 的初始化入口和多实例管理机制。")]),t._v(" "),e("li",[t._v("在 Weex JS runtime 的 framework 配置中加入自己的 JS Framework 然后打包。")]),t._v(" "),e("li",[t._v("基于该 JS Framework 撰写 JS bundle，并加入特定的前缀注释，以便 Weex JS runtime 能够正确识别。")])]),t._v(" "),e("h2",{attrs:{id:"weex-js-引擎的特性支持情况"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#weex-js-引擎的特性支持情况","aria-hidden":"true"}},[t._v("#")]),t._v(" Weex JS 引擎的特性支持情况")]),t._v(" "),e("ul",[e("li",[t._v("在 iOS 下，Weex 使用的是系统自带的 JavaScriptCore，所以 ES 支持情况取决于操作系统的版本。目前保守判断，ES5 的特性市面上主流的 iOS 设备都是可以完美支持的，但是 ES6+ 的特性存在一定的碎片化。")]),t._v(" "),e("li",[t._v("在 Android 下，Weex 使用的是 UC 提供的 v8 内核，出于体积、性能和稳定性的考虑，我们使用的并不是最新版本的 v8 内核，同样的保守判断，ES5 特性能够全部支持，包括严格模式、"),e("code",[t._v("Object.freeze")]),t._v(" 等。")]),t._v(" "),e("li",[t._v("Weex JS 引擎不支持 HTML DOM APIs 和 HTML5 JS APIs，这包括 "),e("code",[t._v("document")]),t._v(", "),e("code",[t._v("setTimeout")]),t._v(" 等。")]),t._v(" "),e("li",[t._v("在此基础上，我们加入了 "),e("code",[t._v("Promise")]),t._v(" 的 polyfill，以及 "),e("code",[t._v("console")]),t._v(" 的 polyfill。")]),t._v(" "),e("li",[t._v("额外的，为了尽可能的确保 JS 引擎的长效内存管理，我们对一个通用的全局对象进行了 "),e("code",[t._v("Object.freeze()")]),t._v(" 冻结操作，这包括：\n"),e("ul",[e("li",[e("code",[t._v("Object")])]),t._v(" "),e("li",[e("code",[t._v("Object.prototype")])]),t._v(" "),e("li",[e("code",[t._v("Array")])]),t._v(" "),e("li",[e("code",[t._v("Array.prototype")])]),t._v(" "),e("li",[e("code",[t._v("String.prototype")])]),t._v(" "),e("li",[e("code",[t._v("Number.prototype")])]),t._v(" "),e("li",[e("code",[t._v("Boolean.prototype")])]),t._v(" "),e("li",[e("code",[t._v("Error.prototype")])]),t._v(" "),e("li",[e("code",[t._v("Date.prototype")])]),t._v(" "),e("li",[e("code",[t._v("RegExp.prototype")])])])])]),t._v(" "),e("h2",{attrs:{id:"适配-weex-的初始化入口和多实例管理机制"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#适配-weex-的初始化入口和多实例管理机制","aria-hidden":"true"}},[t._v("#")]),t._v(" 适配 Weex 的初始化入口和多实例管理机制")]),t._v(" "),e("p",[t._v("开发者提供的 JS Framework 最终需要包装成一个 CommonJS 包，并且这个包需要对外暴露以下方法：")]),t._v(" "),e("h3",{attrs:{id:"框架初始化"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#框架初始化","aria-hidden":"true"}},[t._v("#")]),t._v(" 框架初始化")]),t._v(" "),e("ul",[e("li",[e("code",[t._v("init(config)")]),t._v(" "),e("ul",[e("li",[e("code",[t._v("config")]),t._v(" "),e("ul",[e("li",[e("code",[t._v("Document")])]),t._v(" "),e("li",[e("code",[t._v("Element")])]),t._v(" "),e("li",[e("code",[t._v("Comment")])]),t._v(" "),e("li",[e("code",[t._v("TaskSender")])]),t._v(" "),e("li",[e("code",[t._v("CallbackManager")])])])])])])]),t._v(" "),e("p",[t._v("该方法会把 Weex 提供的 Native DOM 类和两个辅助类放到 config 参数中，并允许框架本身完成初始化。")]),t._v(" "),e("p",[t._v("小提示：同时，框架作者也能够通过在框架初始化时传入不同的 config 来进行框架的测试或环境模拟。")]),t._v(" "),e("h4",{attrs:{id:"参数格式介绍"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#参数格式介绍","aria-hidden":"true"}},[t._v("#")]),t._v(" 参数格式介绍")]),t._v(" "),e("ul",[e("li",[e("code",[t._v("TaskSender")]),t._v(": wip...")]),t._v(" "),e("li",[e("code",[t._v("CallbackManager")]),t._v(": wip...")])]),t._v(" "),e("h3",{attrs:{id:"注册可用的-native-组件和模块"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#注册可用的-native-组件和模块","aria-hidden":"true"}},[t._v("#")]),t._v(" 注册可用的 native 组件和模块")]),t._v(" "),e("ul",[e("li",[e("code",[t._v("registerComponents(components)")])]),t._v(" "),e("li",[e("code",[t._v("registerModules(modules)")])])]),t._v(" "),e("p",[t._v("这两个方法会在框架初始化之后立刻调用，这样框架就能够知道当前的客户端支持哪些组件和模块，在一些特殊逻辑或必要的情况下，有机会为框架本身提供参考信息。")]),t._v(" "),e("h4",{attrs:{id:"参数格式介绍-2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#参数格式介绍-2","aria-hidden":"true"}},[t._v("#")]),t._v(" 参数格式介绍")]),t._v(" "),e("ul",[e("li",[e("code",[t._v("components: Array")]),t._v(": 描述组件的数组，每一项包括：\n"),e("ul",[e("li",[e("code",[t._v("type: string")]),t._v(": 组件名称，比如 "),e("code",[t._v("div")]),t._v("。")]),t._v(" "),e("li",[e("code",[t._v("methods: string[]")]),t._v(": 可选项，该组件支持的方法名称列表，这些方法可以遵循 Weex 的 native DOM APIs 的组件方法调用方式。")])])]),t._v(" "),e("li",[e("code",[t._v("modules: Object")]),t._v(": 描述一系列模块的散列表，每一项的 key 是模块名，每一项的值是一个数组，数组里的每一项描述了一个该模块中的一个方法，该方法的信息包括：\n"),e("code",[t._v("name: string")]),t._v(": 方法名\n"),e("code",[t._v("args: string[]")]),t._v(": 参数个数和类型描述\n例如：")])]),t._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("registerComponents")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" type"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'web'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" methods"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'goBack'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'goForward'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'refresh'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("registerModules")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  event"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("name"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'openURL'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" args"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'string'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),e("h3",{attrs:{id:"多实例生命周期管理"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#多实例生命周期管理","aria-hidden":"true"}},[t._v("#")]),t._v(" 多实例生命周期管理")]),t._v(" "),e("ul",[e("li",[e("code",[t._v("createInstance(instanceId, code, config, data, env)")])]),t._v(" "),e("li",[e("code",[t._v("refreshInstance(instanceId, data)")])]),t._v(" "),e("li",[e("code",[t._v("destroyInstance(instanceId)")])])]),t._v(" "),e("p",[t._v("每个 Weex 页面都有被创建、被销毁两个必经阶段，同时在 Weex 页面运行过程中，native 有机会主动向 Weex 页面发送消息，不同的框架可以根据自己框架的设计对这样的消息有自己的理解和设计实现。")]),t._v(" "),e("h4",{attrs:{id:"参数格式介绍-3"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#参数格式介绍-3","aria-hidden":"true"}},[t._v("#")]),t._v(" 参数格式介绍")]),t._v(" "),e("ul",[e("li",[e("code",[t._v("instanceId: string")]),t._v(": 该 Weex 页面的唯一 id，由 native 产生。")]),t._v(" "),e("li",[e("code",[t._v("code: string")]),t._v(": 该 Weex 页面的 JS bundle 的代码，通过 native 传入。")]),t._v(" "),e("li",[e("code",[t._v("config: Object?")]),t._v(": 该 Weex 页面的配置信息，比如代表该 bundle 地址的 "),e("code",[t._v("bundleUrl")]),t._v("，由 native 配置产生，和 JS bundle 本身的内容无关。")]),t._v(" "),e("li",[e("code",[t._v("data: Object?")]),t._v(": Native 有机会在创建一个 Weex 页面的时候，传入一份外部数据，JS 框架也有机会接此机会为相同的 JS bundle 配合不同的 "),e("code",[t._v("data")]),t._v(" 生成不同的页面内容。")]),t._v(" "),e("li",[e("code",[t._v("env: Object?")]),t._v(": 当前 Weex 页面的相关环境信息，各字段的含义：\n"),e("ul",[e("li",[e("code",[t._v("info: Object")]),t._v(": 框架 info 信息，详见之后的 “JS Bundle 格式要求”。")]),t._v(" "),e("li",[e("code",[t._v("config: Object")]),t._v(": 等同该方法的第三个参数 "),e("code",[t._v("config")]),t._v("。")]),t._v(" "),e("li",[e("code",[t._v("callbacks: CallbackManager")]),t._v(": 该 Weex 页面唯一的 "),e("code",[t._v("CallbackManager")]),t._v(" 实例。")]),t._v(" "),e("li",[e("code",[t._v("created: number")]),t._v(": 该 Weex 页面的创建时间毫秒数。")]),t._v(" "),e("li",[e("code",[t._v("framework: string")]),t._v(": 该 Weex 页面基于的框架名，等同于 "),e("code",[t._v("info.framework")]),t._v("。")])])])]),t._v(" "),e("h3",{attrs:{id:"native-通信"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#native-通信","aria-hidden":"true"}},[t._v("#")]),t._v(" Native 通信")]),t._v(" "),e("ul",[e("li",[e("code",[t._v("receiveTasks(instanceId, tasks)")])])]),t._v(" "),e("p",[t._v("Native 除了通过 "),e("code",[t._v("refreshInstance")]),t._v(" 方法向 JS 框架层发送消息之外，更多的会通过 "),e("code",[t._v("receiveTasks")]),t._v(" 发送用户事件或方法回调给 JS 框架。")]),t._v(" "),e("p",[t._v("比如用户点击了一个按钮，native 就会发送一个 "),e("code",[t._v("fireEvent")]),t._v(" 类型的任务给 JS 框架，然后 JS 框架再处理相应的事件逻辑。这部分工作机制和 native DOM 接口中的 "),e("code",[t._v("addEvent")]),t._v(" 的设计有关。")]),t._v(" "),e("p",[t._v("再比如用户发起了一个 "),e("code",[t._v("fetch")]),t._v(" 网络请求，当请求在 native 端完成时，会以一个 "),e("code",[t._v("callback")]),t._v(" 类型的任务发给 JS 框架。由于 native 无法传递 JavaScript 中的 function，所以实际上知会发送一个 "),e("code",[t._v("callbackId")]),t._v(" 给 JS 框架。这部分工作机制和之前出现过的 "),e("code",[t._v("CallbackManager")]),t._v(" 的设计有关。")]),t._v(" "),e("h3",{attrs:{id:"辅助方法"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#辅助方法","aria-hidden":"true"}},[t._v("#")]),t._v(" 辅助方法")]),t._v(" "),e("ul",[e("li",[e("code",[t._v("getRoot(instanceId): JSON")])])]),t._v(" "),e("p",[t._v("该方法可以返回文档主体结点的完整 JSON 描述，开发者可以以此查看到完整的 native DOM 树，具体返回值的格式和 native DOM 接口中的 "),e("code",[t._v("toJSON()")]),t._v(" 方法返回值格式一致。此功能多用作开发者工具扩展。")]),t._v(" "),e("h2",{attrs:{id:"在-weexsdk-中配置-js-framework"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#在-weexsdk-中配置-js-framework","aria-hidden":"true"}},[t._v("#")]),t._v(" 在 WeexSDK 中配置 JS Framework")]),t._v(" "),e("h3",{attrs:{id:"准备好你的-js-framework-代码"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#准备好你的-js-framework-代码","aria-hidden":"true"}},[t._v("#")]),t._v(" 准备好你的 JS Framework 代码")]),t._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// your-own-js-framework.js")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("init")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("config")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("registerComponents")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("components")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("registerModules")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("modules")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("createInstance")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("id"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" code"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" config"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" data"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" env")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("destroyInstance")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("id")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("refreshInstance")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("id"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" data")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("recieveTasks")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("id"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" tasks")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("getRoot")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("id")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),e("h3",{attrs:{id:"注册一个-js-framework"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#注册一个-js-framework","aria-hidden":"true"}},[t._v("#")]),t._v(" 注册一个 JS Framework")]),t._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("as")]),t._v(" Vue "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'...'")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("as")]),t._v(" React "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'...'")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("as")]),t._v(" Angular "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'...'")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" Vue"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" React"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" Angular "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),e("p",[t._v("然后打包 JS runtime，集成到 WeexSDK 中。")]),t._v(" "),e("h3",{attrs:{id:"js-bundle-格式要求"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#js-bundle-格式要求","aria-hidden":"true"}},[t._v("#")]),t._v(" JS Bundle 格式要求")]),t._v(" "),e("h4",{attrs:{id:"框架-info"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#框架-info","aria-hidden":"true"}},[t._v("#")]),t._v(" 框架 info")]),t._v(" "),e("p",[t._v("你需要保障基于该 JS Framework 的 JS Bundle 在文件开头带有如下格式的注释，我们称其为框架 info：")]),t._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// { "framework": "Vue" }')]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v("\n")])])]),e("p",[t._v("这样 Weex JS 引擎就会识别出这个 JS bundle 需要用 Vue 框架来解析。并分发给 Vue 框架处理。同理，Weex 支持同时多种框架在一个移动应用中共存并各自解析基于不同框架的 JS bundle。")])])}],!1,null,null,null);a.default=n.exports}}]);