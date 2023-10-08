(window.webpackJsonp=window.webpackJsonp||[]).push([[371],{695:function(s,a,t){"use strict";t.r(a);var e=t(3),r=Object(e.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h2",{attrs:{id:"索引失效"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#索引失效"}},[s._v("#")]),s._v(" 索引失效")]),s._v(" "),a("p",[a("code",[s._v("explain")]),s._v("判断索引是否生效：看"),a("code",[s._v("type")]),s._v("字段是否为"),a("strong",[s._v("All")])]),s._v(" "),a("ul",[a("li",[s._v("All则索引失效")]),s._v(" "),a("li",[s._v("否则用到了索引")])]),s._v(" "),a("p",[a("img",{attrs:{src:"https://iqqcode-blog.oss-cn-beijing.aliyuncs.com/img-2021-later/20210626232618.png",alt:"640"}})]),s._v(" "),a("br"),s._v(" "),a("h3",{attrs:{id:"_1-最左匹配失效"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-最左匹配失效"}},[s._v("#")]),s._v(" 1. 最左匹配失效")]),s._v(" "),a("ul",[a("li",[a("p",[a("strong",[s._v("索引中，范围条件右边的列没有被覆盖")])])]),s._v(" "),a("li",[a("p",[a("strong",[s._v("where条件中含"),a("code",[s._v("!=")]),s._v(" 或者"),a("code",[s._v(">")]),s._v("、"),a("code",[s._v("<")])])])]),s._v(" "),a("li",[a("p",[a("strong",[a("code",[s._v("group by")]),s._v("没有按索引顺序写，索引列和查序列顺序不一致")])])])]),s._v(" "),a("h3",{attrs:{id:"_2-在索引列上有其他操作"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-在索引列上有其他操作"}},[s._v("#")]),s._v(" 2. 在索引列上有其他操作")]),s._v(" "),a("p",[a("strong",[s._v("不在索引列上做任何操作（计算、函数（自动或手动）类型转换），会使索引失效转为全表扫描")])]),s._v(" "),a("blockquote",[a("p",[s._v("索引列做了计算或者函数的操作，导致了全表扫描")])]),s._v(" "),a("h3",{attrs:{id:"_3-is-null-is-not-null-也无法使用索引"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-is-null-is-not-null-也无法使用索引"}},[s._v("#")]),s._v(" 3. "),a("strong",[s._v("is null，is not null 也无法使用索引")])]),s._v(" "),a("h3",{attrs:{id:"_4-like-开头"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-like-开头"}},[s._v("#")]),s._v(" 4. like %开头")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("-- 索引失效\nEXPLAIN SELECT * FROM sys_user WHERE name like "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'%明%'")]),s._v("\n\n-- 走索引\nEXPLAIN SELECT * FROM sys_user WHERE name like "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'明%'")]),s._v("\n\n-- %abc…%，用覆盖索引解决索引失效的问题\nEXPLAIN SELECT name,age,pos FROM sys_user WHERE name like "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'%明%'")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br")])]),a("h3",{attrs:{id:"_5-索引发生了类型转换"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5-索引发生了类型转换"}},[s._v("#")]),s._v(" 5. 索引发生了类型转换")]),s._v(" "),a("p",[a("strong",[s._v("字符串不加单引号索引会失效")])]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("EXPLAIN SELECT * FROM sys_user WHERE "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("name")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("222")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("因为检索字符串是必须加单引号，上面用用了222是int类型，mysql在检索的时候会判断name是varchar的类型会将222转换为’222’进行检索，索引列发生了类型转换，故索引失效。")]),s._v(" "),a("h3",{attrs:{id:"_6-or连接时会索引失效"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_6-or连接时会索引失效"}},[s._v("#")]),s._v(" 6. or连接时会索引失效")]),s._v(" "),a("h2",{attrs:{id:"索引失效怎么解决"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#索引失效怎么解决"}},[s._v("#")]),s._v(" 索引失效怎么解决")])])}),[],!1,null,null,null);a.default=r.exports}}]);