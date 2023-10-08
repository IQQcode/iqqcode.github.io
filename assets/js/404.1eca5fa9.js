(window.webpackJsonp=window.webpackJsonp||[]).push([[404],{728:function(v,_,t){"use strict";t.r(_);var o=t(3),s=Object(o.a)({},(function(){var v=this,_=v._self._c;return _("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[_("h2",{attrs:{id:"概念"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#概念"}},[v._v("#")]),v._v(" 概念")]),v._v(" "),_("p",[_("strong",[v._v("域名解析")]),v._v("：将域名解析为 IP 地址")]),v._v(" "),_("p",[v._v("DNS在进行域名解析时使用的是"),_("font",{attrs:{color:"red"}},[_("strong",[v._v("UDP协议")])]),v._v("，在区域传输时使用的是TCP")],1),v._v(" "),_("p",[_("strong",[v._v("【DNS服务器功能】")])]),v._v(" "),_("ol",[_("li",[v._v("域名-映射-"),_("code",[v._v("IP")]),v._v("地址")]),v._v(" "),_("li",[v._v("域名-映射-域名")]),v._v(" "),_("li",[v._v("域名-映射-"),_("code",[v._v("URL")])])]),v._v(" "),_("hr"),v._v(" "),_("p",[_("strong",[v._v("本地域名服务器：")])]),v._v(" "),_("p",[v._v("当一个主机发出DNS査询请求时，首先会发给本地域名服务器，到本地缓存中查看该域名是否存在")]),v._v(" "),_("p",[_("img",{attrs:{src:"https://iqqcode-blog.oss-cn-beijing.aliyuncs.com/img-2021-later/20210626192430.png",alt:"image-20201018203514539"}})]),v._v(" "),_("p",[_("strong",[v._v("根域名服务器")]),v._v(" ：确定顶级域名服务器的范围")]),v._v(" "),_("p",[_("strong",[v._v("顶级域名服务器")]),v._v("：com、cn、net、org、edu等")]),v._v(" "),_("p",[_("strong",[v._v("权限域名的服务器")])]),v._v(" "),_("h2",{attrs:{id:"dns域名解析过程"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#dns域名解析过程"}},[v._v("#")]),v._v(" DNS域名解析过程")]),v._v(" "),_("p",[_("img",{attrs:{src:"https://iqqcode-blog.oss-cn-beijing.aliyuncs.com/img-2021-later/20210626192434.png",alt:"image-20201018220430985"}})]),v._v(" "),_("p",[v._v("以访问 www.163.com 这个域名为例，来看一看当你访问 www.163.com 时，会发生哪些事：")]),v._v(" "),_("ol",[_("li",[v._v("先查找本地浏览器的 DNS 缓存[chrome://net-internals/#dns]，有则返回，没有则进入下一步")]),v._v(" "),_("li",[v._v("查看本地 **hosts **文件有没有相应的映射记录，有则返回，没有则进入下一步")]),v._v(" "),_("li",[v._v("向本地 DNS 服务器（一般都是网络接入服务器商提供，比如中国电信，中国移动）发送请求进行查询，本地DNS服务器收到请求后，会先查下自己的缓存记录，如果查到了直接返回就结束了，如果没有查到，本地DNS服务器就会向 "),_("strong",[v._v("DNS根域名服务器")]),v._v("发起查询请求")]),v._v(" "),_("li",[v._v("根域名服务器收到请求后，发现是个"),_("code",[v._v(".com")]),v._v(" 的域名，递归向下查找"),_("code",[v._v(".com")]),v._v("顶级域名服务器")]),v._v(" "),_("li",[_("code",[v._v(".com")]),v._v(" 顶级域名服务器接收到请求后，看到这是 "),_("code",[v._v("163.com")]),v._v(" 的域名，又向 "),_("code",[v._v(".163.com")]),v._v(" 这个"),_("strong",[v._v("权威域名服务器")]),v._v("发起请求")]),v._v(" "),_("li",[_("code",[v._v("163.com")]),_("strong",[v._v("权威域名服务器")]),v._v("接收到请求后，确认了是自己管理的域名，马把 www.163.com 的ip告诉了 本地DNS服务器")]),v._v(" "),_("li",[v._v("本地DNS服务器接收到回信后，将IP地址返回给本机，并做缓存，同时反馈给客户端")])]),v._v(" "),_("p",[v._v("总结起来就是三句话：")]),v._v(" "),_("ol",[_("li",[v._v('从"根域名服务器"查到"顶级域名服务器"的NS记录和A记录（IP地址）')]),v._v(" "),_("li",[v._v('从"顶级域名服务器"查到"权限域名服务器"的NS记录和A记录（IP地址）')]),v._v(" "),_("li",[v._v('从"权限域名服务器"查出"主机名"的IP地址')])]),v._v(" "),_("hr"),v._v(" "),_("h2",{attrs:{id:"查询方式"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#查询方式"}},[v._v("#")]),v._v(" 查询方式")]),v._v(" "),_("p",[_("strong",[v._v("递归查询：")]),v._v(" 一路查下去中间不返回，得到最终结果才返回信息（浏览器到本地DNS服务器的过程）")]),v._v(" "),_("p",[_("strong",[v._v("迭代查询：")]),v._v(" DNS服务器会向客户机提供-其他能查询请求的DNS服务器。当客户机发起查询请求时，DNS服务器并不是立即回复查询结果，而是告诉客户机能查询该域名的DNS服务器。客户机再重新向新的DNS服务器发起请求，"),_("strong",[v._v("循环查询直到返回结果为止")])]),v._v(" "),_("p",[_("img",{attrs:{src:"https://iqqcode-blog.oss-cn-beijing.aliyuncs.com/img-2021-later/20210626192439.png",alt:"image-20201018204734413"}})])])}),[],!1,null,null,null);_.default=s.exports}}]);