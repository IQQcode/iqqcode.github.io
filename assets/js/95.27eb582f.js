(window.webpackJsonp=window.webpackJsonp||[]).push([[95],{422:function(s,a,t){"use strict";t.r(a);var r=t(3),n=Object(r.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h3",{attrs:{id:"api-28-新特性"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#api-28-新特性"}},[s._v("#")]),s._v(" API 28 新特性")]),s._v(" "),a("p",[s._v("API 28默认的网络请求均为HTTPS，限制HTTP请求")]),s._v(" "),a("p",[s._v("如果不使用"),a("code",[s._v("Https")]),s._v("，则会出现"),a("code",[s._v("UnknownServiceException")]),s._v("的错误")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://iqqcode-blog.oss-cn-beijing.aliyuncs.com/img-2021-befo/20210611151939.png",alt:"image-20210611151939093"}})]),s._v(" "),a("h4",{attrs:{id:"方法一"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#方法一"}},[s._v("#")]),s._v(" 方法一")]),s._v(" "),a("p",[s._v("I. 添加网络请求权限，如果还使用网络请求的缓存功能，那么还要申请读写外存的权限：")]),s._v(" "),a("div",{staticClass:"language-java line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[s._v("  "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("uses")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("permission android"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v("name"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"android.permission.INTERNET"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("uses")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("permission android"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v("name"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"android.permission.WRITE_EXTERNAL_STORAGE"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("uses")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("permission android"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v("name"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"android.permission.READ_EXTERNAL_STORAGE"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("p",[s._v("II. 创建安全配置文件")]),s._v(" "),a("ol",[a("li",[s._v("在res文件夹下创建"),a("code",[s._v("xml/network_security_config")]),s._v("文件")]),s._v(" "),a("li",[s._v("增加"),a("code",[s._v("cleartextTrafficPermitted")]),s._v("属性")])]),s._v(" "),a("div",{staticClass:"language-xml line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-xml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token prolog"}},[s._v('<?xml version="1.0" encoding="utf-8"?>')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("network-security-config")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("\x3c!--禁用掉明文流量的检查--\x3e")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("base-config")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[s._v("cleartextTrafficPermitted")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v('"')]),s._v("true"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v('"')])]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("/>")])]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("network-security-config")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("p",[s._v("III. 添加安全配置文件")]),s._v(" "),a("ul",[a("li",[s._v("在AndroidMenifest中的Application中声明")])]),s._v(" "),a("div",{staticClass:"language-xml line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-xml"}},[a("code",[s._v('android:networkSecurityConfig="@xml/network_security_config"\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h4",{attrs:{id:"方法二"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#方法二"}},[s._v("#")]),s._v(" 方法二")]),s._v(" "),a("p",[s._v("I.  添加网络请求权限，如果还使用网络请求的缓存功能，那么还要申请读写外存的权限:")]),s._v(" "),a("div",{staticClass:"language-java line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[s._v("  "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("uses")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("permission android"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v("name"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"android.permission.INTERNET"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("uses")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("permission android"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v("name"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"android.permission.WRITE_EXTERNAL_STORAGE"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("uses")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("permission android"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v("name"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"android.permission.READ_EXTERNAL_STORAGE"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("p",[s._v("II.  在application节点添加")]),s._v(" "),a("div",{staticClass:"language-xml line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-xml"}},[a("code",[s._v(" "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("application")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[s._v("……………………")]),s._v("\n     "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[a("span",{pre:!0,attrs:{class:"token namespace"}},[s._v("android:")]),s._v("usesCleartextTraffic")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v('"')]),s._v("true"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n \n    ………………………………\n \n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("application")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br")])]),a("br"),s._v(" "),a("h3",{attrs:{id:"请求网络数据步骤"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#请求网络数据步骤"}},[s._v("#")]),s._v(" 请求网络数据步骤")]),s._v(" "),a("p",[a("strong",[s._v("1. 实例化一个URL对象")])]),s._v(" "),a("p",[a("strong",[s._v("2. 获取HttpURLConnection对象")])]),s._v(" "),a("p",[a("strong",[s._v("3. 设置请求连接属性")])]),s._v(" "),a("p",[a("strong",[s._v("4. 获取响应码，判断连接结果码")])]),s._v(" "),a("p",[a("strong",[s._v("5. 读取输入流并解析")])])])}),[],!1,null,null,null);a.default=n.exports}}]);