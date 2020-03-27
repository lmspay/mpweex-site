(window.webpackJsonp=window.webpackJsonp||[]).push([[62],{283:function(t,e,_){"use strict";_.r(e);var a=_(0),r=Object(a.a)({},function(){var t=this,e=t.$createElement,_=t._self._c||e;return _("div",{staticClass:"content"},[t._m(0),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),_("p",[t._v("该方法可以通过键值对的形式将数据存储到本地。同时可以通过该方法，更新已有的数据。")]),t._v(" "),t._m(4),t._v(" "),t._m(5),t._v(" "),t._m(6),t._v(" "),_("p",[t._v("传入键名返回对应的键值。")]),t._v(" "),t._m(7),t._v(" "),t._m(8),t._v(" "),t._m(9),t._v(" "),_("p",[t._v("传入一个键名将会删除本地存储中对应的键值。")]),t._v(" "),t._m(10),t._v(" "),t._m(11),t._v(" "),t._m(12),t._v(" "),_("p",[t._v("返回本地存储的数据中所有存储项数量的整数。")]),t._v(" "),t._m(13),t._v(" "),t._m(14),t._v(" "),t._m(15),t._v(" "),_("p",[t._v("返回一个包含全部已存储项键名的数组。")]),t._v(" "),t._m(16),t._v(" "),t._m(17),t._v(" "),_("p",[_("a",{attrs:{href:"http://dotwe.org/vue/71d1dff37c54fa9bafab4d8cbe3d21e3",target:"_blank",rel:"noopener noreferrer"}},[t._v("示例"),_("OutboundLink")],1)])])},[function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{attrs:{id:"storage"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#storage","aria-hidden":"true"}},[this._v("#")]),this._v(" storage")])},function(){var t=this,e=t.$createElement,_=t._self._c||e;return _("p",[_("code",[t._v("storage")]),t._v(" 是一个在前端比较常用的模块，可以对本地数据进行存储、修改、删除，并且该数据是永久保存的，除非手动清除或者代码清除。但是，"),_("code",[t._v("storage")]),t._v(" 模块有一个限制就是浏览器端（H5）只能存储小于5M的数据，因为在 H5/Web 端的实现是采用 "),_("code",[t._v("HTML5 LocalStorage API")]),t._v("。而 Android 和 iOS 这块是没什么限制的。\nstorage 常用在一些被用户经常查询，但是又不频繁更新的数据，比如搜索历史、用户的订单列表等。搜索历史一般情况都是作为本地数据存储的，因此使用 storage 比较合适。而用户订单列表是需要本地存储和服务端器检索配合的场景。当一个用户下单后，会经常查阅个人的订单列表。但是，订单的列表数据不是频繁更新的，往往只有在收到货品时，才更新“已签收”，其余平时的状态是“已发货”。因此，可以使用 "),_("code",[t._v("storage")]),t._v(" 存储订单列表，可以减少服务器的压力，例如减少 SQL 查询或者缓存的压力。当用户查看订单详情的时候，再更新数据状态。")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{attrs:{id:"api"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#api","aria-hidden":"true"}},[this._v("#")]),this._v(" API")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"setitem"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#setitem","aria-hidden":"true"}},[this._v("#")]),this._v(" setItem")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h4",{attrs:{id:"setitem-key-value-callback"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#setitem-key-value-callback","aria-hidden":"true"}},[this._v("#")]),this._v(" setItem(key, value, callback)")])},function(){var t=this,e=t.$createElement,_=t._self._c||e;return _("table",[_("thead",[_("tr",[_("th",[t._v("参数")]),t._v(" "),_("th",[t._v("说明")]),t._v(" "),_("th",[t._v("类型")])])]),t._v(" "),_("tbody",[_("tr",[_("td",[t._v("key")]),t._v(" "),_("td",[t._v("要存储的键，不允许是 "),_("code",[t._v('""')]),t._v(" 或 "),_("code",[t._v("null")])]),t._v(" "),_("td",[t._v("string")])]),t._v(" "),_("tr",[_("td",[t._v("value")]),t._v(" "),_("td",[t._v("要存储的值，不允许是 "),_("code",[t._v('""')]),t._v(" 或 "),_("code",[t._v("null")])]),t._v(" "),_("td",[t._v("string")])]),t._v(" "),_("tr",[_("td",[t._v("callback")]),t._v(" "),_("td",[t._v("执行操作成功后的回调"),_("br"),_("code",[t._v("e.result")]),t._v("：表示设置是否成功，如果成功返回 "),_("code",[t._v('"success"')]),_("br"),_("code",[t._v("e.data")]),t._v("："),_("code",[t._v("undefined")]),t._v(" 表示设置成功，"),_("code",[t._v("invalid_param")]),t._v(" 表示 key/value 为 "),_("code",[t._v('""')]),t._v(" 或者 "),_("code",[t._v("null")])]),t._v(" "),_("td",[t._v("function(e)")])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"getitem"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#getitem","aria-hidden":"true"}},[this._v("#")]),this._v(" getItem")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h4",{attrs:{id:"getitem-key-callback"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#getitem-key-callback","aria-hidden":"true"}},[this._v("#")]),this._v(" getItem(key, callback)")])},function(){var t=this,e=t.$createElement,_=t._self._c||e;return _("table",[_("thead",[_("tr",[_("th",[t._v("参数")]),t._v(" "),_("th",[t._v("说明")]),t._v(" "),_("th",[t._v("类型")])])]),t._v(" "),_("tbody",[_("tr",[_("td",[t._v("key")]),t._v(" "),_("td",[t._v("要获取的值的名称，不允许是 "),_("code",[t._v('""')]),t._v(" 或 "),_("code",[t._v("null")])]),t._v(" "),_("td",[t._v("string")])]),t._v(" "),_("tr",[_("td",[t._v("callback")]),t._v(" "),_("td",[t._v("执行操作成功后的回调"),_("br"),_("code",[t._v("e.result")]),t._v("：表示操作是否成功，如果成功返回 "),_("code",[t._v('"success"')]),_("br"),_("code",[t._v("e.data")]),t._v("：获取对应的键值字符串，如果没有找到则返回 "),_("code",[t._v("undefined")])]),t._v(" "),_("td",[t._v("function(e)")])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"removeitem"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#removeitem","aria-hidden":"true"}},[this._v("#")]),this._v(" removeItem")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h4",{attrs:{id:"removeitem-key-callback"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#removeitem-key-callback","aria-hidden":"true"}},[this._v("#")]),this._v(" removeItem(key, callback)")])},function(){var t=this,e=t.$createElement,_=t._self._c||e;return _("table",[_("thead",[_("tr",[_("th",[t._v("参数")]),t._v(" "),_("th",[t._v("说明")]),t._v(" "),_("th",[t._v("类型")])])]),t._v(" "),_("tbody",[_("tr",[_("td",[t._v("key")]),t._v(" "),_("td",[t._v("要删除的值的名称，不允许是 "),_("code",[t._v('""')]),t._v(" 或 "),_("code",[t._v("null")])]),t._v(" "),_("td",[t._v("string")])]),t._v(" "),_("tr",[_("td",[t._v("callback")]),t._v(" "),_("td",[t._v("执行操作成功后的回调"),_("br"),_("code",[t._v("e.result")]),t._v("：表示删除是否成功，如果成功返回 "),_("code",[t._v('"success"')]),_("br"),_("code",[t._v("e.data")]),t._v("："),_("code",[t._v("undefined")]),t._v(" 表示删除成功")]),t._v(" "),_("td",[t._v("function(e)")])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"length"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#length","aria-hidden":"true"}},[this._v("#")]),this._v(" length")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h4",{attrs:{id:"length-callback"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#length-callback","aria-hidden":"true"}},[this._v("#")]),this._v(" length(callback)")])},function(){var t=this,e=t.$createElement,_=t._self._c||e;return _("table",[_("thead",[_("tr",[_("th",[t._v("参数")]),t._v(" "),_("th",[t._v("说明")]),t._v(" "),_("th",[t._v("类型")])])]),t._v(" "),_("tbody",[_("tr",[_("td",[t._v("callback")]),t._v(" "),_("td",[t._v("执行操作成功后的回调"),_("br"),_("code",[t._v("e.result")]),t._v("：表示操作是否成功，如果成功返回 "),_("code",[t._v('"success"')]),_("br"),_("code",[t._v("e.data")]),t._v("：当前已存储项的数量")]),t._v(" "),_("td",[t._v("function(e)")])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"getallkeys"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#getallkeys","aria-hidden":"true"}},[this._v("#")]),this._v(" getAllKeys")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h4",{attrs:{id:"getallkeys-callback"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#getallkeys-callback","aria-hidden":"true"}},[this._v("#")]),this._v(" getAllKeys(callback)")])},function(){var t=this,e=t.$createElement,_=t._self._c||e;return _("table",[_("thead",[_("tr",[_("th",[t._v("参数")]),t._v(" "),_("th",[t._v("说明")]),t._v(" "),_("th",[t._v("类型")])])]),t._v(" "),_("tbody",[_("tr",[_("td",[t._v("callback")]),t._v(" "),_("td",[t._v("执行操作成功后的回调"),_("br"),_("code",[t._v("e.result")]),t._v("：表示操作是否成功，如果成功返回 "),_("code",[t._v('"success"')]),_("br"),_("code",[t._v("e.data")]),t._v("：所有键名组成的数组")]),t._v(" "),_("td",[t._v("function(e)")])])])])}],!1,null,null,null);e.default=r.exports}}]);