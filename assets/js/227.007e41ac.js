(window.webpackJsonp=window.webpackJsonp||[]).push([[227],{553:function(s,t,a){"use strict";a.r(t);var n=a(3),r=Object(n.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("p",[t("img",{attrs:{src:"https://blogimage-1255618592.cos.ap-chengdu.myqcloud.com/img20200315200504.png",alt:""}})]),s._v(" "),t("h3",{attrs:{id:"json简介"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#json简介"}},[s._v("#")]),s._v(" JSON简介")]),s._v(" "),t("p",[t("strong",[s._v("什么是JSON?")])]),s._v(" "),t("ul",[t("li",[s._v("JSON 指的是 JavaScript 对象表示法（"),t("strong",[s._v("J")]),s._v("ava"),t("strong",[s._v("S")]),s._v("cript "),t("strong",[s._v("O")]),s._v("bject "),t("strong",[s._v("N")]),s._v("otation）")]),s._v(" "),t("li",[s._v("JSON 是轻量级的"),t("strong",[s._v("文本数据交换格式")])]),s._v(" "),t("li",[s._v("JSON 独立于语言：JSON 使用 Javascript语法来描述数据对象，但是 JSON 仍然独立于语言和平台。JSON 解析器和 JSON 库支持许多不同的编程语言")]),s._v(" "),t("li",[s._v("JSON 具有自我描述性，更易理解")])]),s._v(" "),t("p",[t("strong",[s._v("JSON能干嘛？")])]),s._v(" "),t("ul",[t("li",[s._v("JSON现在多用于"),t("strong",[s._v("存储")]),s._v(" 和 "),t("strong",[s._v("交换文本信息")]),s._v("的语法")]),s._v(" "),t("li",[s._v("进行数据的"),t("strong",[s._v("传输")])])]),s._v(" "),t("p",[t("strong",[s._v("JSON 文件")])]),s._v(" "),t("ul",[t("li",[s._v("JSON 文件的文件类型是 "),t("code",[s._v(".json")])]),s._v(" "),t("li",[s._v('JSON 文本的 MIME 类型是 "application/json"')])]),s._v(" "),t("h3",{attrs:{id:"json-vs-xml"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#json-vs-xml"}},[s._v("#")]),s._v(" JSON vs XML")]),s._v(" "),t("p",[s._v("JSON能干的事，XML也能干呀？有啥子区别？")]),s._v(" "),t("ul",[t("li",[s._v("JSON 比 XML 更小、更快，更易解析")])]),s._v(" "),t("hr"),s._v(" "),t("p",[s._v("【JSON 与 XML 的"),t("em",[s._v("相同")]),s._v("之处】")]),s._v(" "),t("ol",[t("li",[t("p",[s._v('JSON 和 XML 数据都是 "自我描述" ，都易于理解')])]),s._v(" "),t("li",[t("p",[s._v("JSON 和 XML 数据都是有层次的结构")])]),s._v(" "),t("li",[t("p",[s._v("JSON 和 XML 数据可以被大多数编程语言使用")])])]),s._v(" "),t("p",[s._v("【JSON 与 XML 的"),t("em",[s._v("不同")]),s._v("之处】")]),s._v(" "),t("ol",[t("li",[t("p",[s._v("JSON 不需要结束标签")])]),s._v(" "),t("li",[t("p",[s._v("JSON 更加简短")])]),s._v(" "),t("li",[t("p",[s._v("JSON 读写速度更快")])]),s._v(" "),t("li",[t("p",[s._v("JSON 可以使用数组")])])]),s._v(" "),t("blockquote",[t("p",[t("strong",[s._v("最大的不同是")]),s._v("：XML 需要使用 XML 解析器来解析，JSON 可以使用标准的 JavaScript 函数来解析")]),s._v(" "),t("ul",[t("li",[t("code",[s._v("JSON.parse()")]),s._v("：将一个 JSON 字符串转换为 JavaScript 对象")]),s._v(" "),t("li",[t("code",[s._v("JSON.stringify()")]),s._v("：于将 JavaScript 值转换为 JSON 字符串")])])]),s._v(" "),t("hr"),s._v(" "),t("p",[t("strong",[s._v("为什么 JSON 比 XML 更好？")])]),s._v(" "),t("ol",[t("li",[t("p",[s._v("XML 比 JSON 更难解析")])]),s._v(" "),t("li",[t("p",[s._v("JSON 可以直接使用现有的 JavaScript 对象解析")])]),s._v(" "),t("li",[t("p",[s._v("针对 AJAX 应用，JSON 比 XML 数据加载更快，而且更简单")])])]),s._v(" "),t("h3",{attrs:{id:"json语法"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#json语法"}},[s._v("#")]),s._v(" JSON语法")]),s._v(" "),t("h4",{attrs:{id:"【基本规则】"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#【基本规则】"}},[s._v("#")]),s._v(" 【基本规则】")]),s._v(" "),t("ul",[t("li",[s._v("数据在"),t("code",[s._v("键-值")]),s._v("对中：json数据是由键值对构成的\n"),t("ul",[t("li",[t("code",[s._v("键")]),s._v(" 用引号(单双都行)引起来，也可以不使用引号")]),s._v(" "),t("li",[t("code",[s._v("值")]),s._v(" 取值类型：\n"),t("ol",[t("li",[s._v("数字（整数或浮点数）")]),s._v(" "),t("li",[s._v("字符串（在双引号中）")]),s._v(" "),t("li",[s._v("逻辑值（true 或 false）")]),s._v(" "),t("li",[s._v("数组（在方括号中）"),t("code",[s._v('{"persons":[{},{}]}')])]),s._v(" "),t("li",[s._v("对象（在花括号中）"),t("code",[s._v('{"address":{"school"："西安"....}}')])]),s._v(" "),t("li",[s._v("null")])])])])]),s._v(" "),t("li",[s._v("数据由逗号分隔：多个键值对由逗号分隔")]),s._v(" "),t("li",[s._v("花括号保存对象：使用"),t("code",[s._v("{}")]),s._v("定义json 格式")]),s._v(" "),t("li",[s._v("方括号保存数组："),t("code",[s._v("[]")])])]),s._v(" "),t("p",[t("img",{attrs:{src:"https://blogimage-1255618592.cos.ap-chengdu.myqcloud.com/img1.png",alt:""}})]),s._v(" "),t("p",[s._v("多层级JSON:")]),s._v(" "),t("div",{staticClass:"language-json line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-json"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//JSON对象里面可以嵌套多层对象(数组或对象)，嵌套层数未知")]),s._v("\n\nvar JSONS = "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"id"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"123456"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"username"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"root"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"persons"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"name"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Tom"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"age"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("23")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"major"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Java"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"name"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Jack"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"major"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"python"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"name"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Sun"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"major"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"go"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"gender"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"man"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"华中地区"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"长三角"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v("\n            "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"城市名"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"武汉"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"发展年限"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("80")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"简称"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"火炉"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n            "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"城市名"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"宜昌"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"发展年限"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("79")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"简称"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"宜家"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n            "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"城市名"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"咢州"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"发展年限"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("78")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"简称"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"小咢"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(";\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br")])]),t("h4",{attrs:{id:"获取数据"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#获取数据"}},[s._v("#")]),s._v(" 获取数据")]),s._v(" "),t("p",[t("strong",[s._v("1. json对象.键名")])]),s._v(" "),t("p",[t("img",{attrs:{src:"https://blogimage-1255618592.cos.ap-chengdu.myqcloud.com/img2.png",alt:""}})]),s._v(" "),t("p",[t("strong",[s._v('2. json对象["键名"]')])]),s._v(" "),t("p",[t("img",{attrs:{src:"https://blogimage-1255618592.cos.ap-chengdu.myqcloud.com/img3.png",alt:""}})]),s._v(" "),t("p",[t("strong",[s._v("3. 数组对象[索引]")])]),s._v(" "),t("p",[t("img",{attrs:{src:"https://blogimage-1255618592.cos.ap-chengdu.myqcloud.com/img3.png",alt:""}})]),s._v(" "),t("h4",{attrs:{id:"遍历获取数据"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#遍历获取数据"}},[s._v("#")]),s._v(" 遍历获取数据")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://blogimage-1255618592.cos.ap-chengdu.myqcloud.com/img4.png",alt:""}})])])}),[],!1,null,null,null);t.default=r.exports}}]);