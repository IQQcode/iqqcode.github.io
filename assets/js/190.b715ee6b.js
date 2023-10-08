(window.webpackJsonp=window.webpackJsonp||[]).push([[190],{522:function(s,t,a){"use strict";a.r(t);var n=a(3),e=Object(n.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h3",{attrs:{id:"定义注解"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#定义注解"}},[s._v("#")]),s._v(" 定义注解")]),s._v(" "),t("p",[t("strong",[s._v("编译期间：     变成了  .class文件，已近不存在")])]),s._v(" "),t("p",[t("strong",[s._v("编译期间：     变成了 .class文件，还存在，但是运行时不存在")])]),s._v(" "),t("p",[t("strong",[s._v("运行期间：     始终存在（保存在方法区的类的元信息中）")])]),s._v(" "),t("p",[t("strong",[s._v("Reflection（反射）")])]),s._v(" "),t("p",[s._v("==注解使用的场景   ----\x3e 把代码逻辑转换成配置逻辑==")]),s._v(" "),t("p",[s._v("修改代码逻辑的成本要高于修改配置的成本,有些配置和代码强相关")]),s._v(" "),t("p",[t("strong",[s._v("语法：")])]),s._v(" "),t("div",{staticClass:"language-java line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[s._v("@ "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("interface")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Measurement")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("iterations")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("default")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("p",[s._v("使用注释："),t("code",[s._v("@Measurement（iterations = 10）")])]),s._v(" "),t("p",[s._v("或者 "),t("code",[s._v("@Measurement")]),s._v(" 等同于 "),t("code",[s._v("@Measurement")]),s._v(" 或者 "),t("code",[s._v("@Measurement（iterations = 10）")])]),s._v(" "),t("p",[t("strong",[s._v("修饰注解的注解  "),t("code",[s._v("@Target")])])]),s._v(" "),t("div",{staticClass:"language-java line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//设置注解 添加的目标")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[s._v("@Target")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("ElementType")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token constant"}},[s._v("METHOD")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//设置注解 保留级别")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[s._v("@Retention")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("RetentionPolicy")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token constant"}},[s._v("RUNTIME")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[s._v("@interface")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Measurement")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n     "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" iterations "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n     "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" group "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br")])]),t("p",[s._v("**修饰注解的注解  **")]),s._v(" "),t("ul",[t("li",[t("p",[s._v("性能测试的知识点")])]),s._v(" "),t("li",[t("p",[s._v("什么是性能测试、为什么要做性能测试")])]),s._v(" "),t("li",[t("p",[s._v("可能影响性能测试的因素")])]),s._v(" "),t("li",[t("p",[s._v("字符串 + 拼接")])]),s._v(" "),t("li",[t("p",[s._v("框架化")]),s._v(" "),t("p",[s._v("​    ---三级配置（默认 + 类级别 + 方法）")])])])])}),[],!1,null,null,null);t.default=e.exports}}]);