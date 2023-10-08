(window.webpackJsonp=window.webpackJsonp||[]).push([[409],{733:function(_,v,t){"use strict";t.r(v);var s=t(3),r=Object(s.a)({},(function(){var _=this,v=_._self._c;return v("ContentSlotsDistributor",{attrs:{"slot-key":_.$parent.slotKey}},[v("h2",{attrs:{id:"_1-可靠传输"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_1-可靠传输"}},[_._v("#")]),_._v(" 1. 可靠传输")]),_._v(" "),v("p",[v("strong",[_._v("可靠：")]),_._v(" 接收方进程从缓存区读出的字节流 与 发送方保持一致")]),_._v(" "),v("p",[v("img",{attrs:{src:"https://iqqcode-blog.oss-cn-beijing.aliyuncs.com/img-2021-later/20210626193123.png",alt:"image-20200831190330437"}})]),_._v(" "),v("p",[v("strong",[_._v("TCP实现可靠传输的机制：")])]),_._v(" "),v("p",[v("img",{attrs:{src:"https://iqqcode-blog.oss-cn-beijing.aliyuncs.com/img-2021-later/20210626193127.png",alt:"image-20200831192057362"}})]),_._v(" "),v("p",[v("strong",[_._v("1. 伪首部二进制反码求和")])]),_._v(" "),v("p",[v("strong",[_._v("2. 确认应答机制，序号、确认号累计应答")])]),_._v(" "),v("p",[v("strong",[_._v("3. 重传机制")])]),_._v(" "),v("br"),_._v(" "),v("h2",{attrs:{id:"【重传机制】"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#【重传机制】"}},[_._v("#")]),_._v(" 【重传机制】")]),_._v(" "),v("h3",{attrs:{id:"超时重传"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#超时重传"}},[_._v("#")]),_._v(" 超时重传")]),_._v(" "),v("p",[_._v("发送方在规定时间内，没有收到接收方的确认"),v("code",[_._v("ACK")]),_._v("，重传已发送的报文")]),_._v(" "),v("p",[v("strong",[_._v("【超时时间RTO】：")])]),_._v(" "),v("p",[v("img",{attrs:{src:"https://iqqcode-blog.oss-cn-beijing.aliyuncs.com/img-2021-later/20210626193133.png",alt:"image-20201102142905230"}})]),_._v(" "),v("p",[_._v("重传机制的其中一个方式，就是在发送数据时，设定一个"),v("strong",[_._v("定时器")]),_._v("，当超过指定的时间后，没有收到对方的 "),v("code",[_._v("ACK")]),_._v(" 确认应答报文，就会重发该数据")]),_._v(" "),v("p",[_._v("TCP 会在以下两种情况发生超时重传：")]),_._v(" "),v("ul",[v("li",[_._v("数据包丢失")]),_._v(" "),v("li",[_._v("确认应答丢失")])]),_._v(" "),v("p",[v("strong",[_._v("重传时间")])]),_._v(" "),v("p",[_._v("TCP采用"),v("strong",[_._v("自适应算法")]),_._v("，动态改变重传时间RTTs（加权平均往返时间）")]),_._v(" "),v("blockquote",[v("p",[v("code",[_._v("RTT")]),_._v("（Round-Trip Time 往返时延）")])]),_._v(" "),v("p",[v("img",{attrs:{src:"https://iqqcode-blog.oss-cn-beijing.aliyuncs.com/img-2021-later/20210626193203.png",alt:"9ee"}})]),_._v(" "),v("br"),_._v(" "),v("h3",{attrs:{id:"快速重"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#快速重"}},[_._v("#")]),_._v(" 快速重")]),_._v(" "),v("p",[v("strong",[_._v("快速重传")]),_._v("：重传冗余确认，解决了超时时间的问题")]),_._v(" "),v("p",[_._v("快速重传的工作方式是当收到三个相同的 "),v("code",[_._v("ACK")]),_._v(" 报文时，会在定时器过期之前，重传丢失的报文段。")]),_._v(" "),v("p",[v("img",{attrs:{src:"https://iqqcode-blog.oss-cn-beijing.aliyuncs.com/img-2021-later/20210626193208.png",alt:"image-20200831192808242"}})]),_._v(" "),v("p",[v("img",{attrs:{src:"https://iqqcode-blog.oss-cn-beijing.aliyuncs.com/img-2021-later/20210626193216.png",alt:"image-20200831201932536"}})]),_._v(" "),v("p",[_._v("快速重传机制")]),_._v(" "),v("p",[_._v("在上图，发送方发出了 1，2，3，4，5 份数据：")]),_._v(" "),v("ul",[v("li",[_._v("第一份 Seq1 先送到了，于是就 Ack 回 2；")]),_._v(" "),v("li",[_._v("结果 Seq2 因为某些原因没收到，Seq3 到达了，于是还是 Ack 回 2；")]),_._v(" "),v("li",[_._v("后面的 Seq4 和 Seq5 都到了，但还是 Ack 回 2，因为 Seq2 还是没有收到；")]),_._v(" "),v("li",[v("strong",[_._v("发送端收到了三个 Ack = 2 的确认，知道了 Seq2 还没有收到，就会在定时器过期之前，重传丢失的 Seq2")])]),_._v(" "),v("li",[_._v("最后，接收到收到了 Seq2，此时因为 Seq3，Seq4，Seq5 都收到了，于是 Ack 回 6")])]),_._v(" "),v("p",[v("img",{attrs:{src:"https://iqqcode-blog.oss-cn-beijing.aliyuncs.com/img-2021-later/20210626193222.png",alt:"image"}})]),_._v(" "),v("br"),_._v(" "),v("h2",{attrs:{id:"_2-滑动窗口"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_2-滑动窗口"}},[_._v("#")]),_._v(" 2. 滑动窗口")]),_._v(" "),v("p",[_._v("较高的发送速度  与  较低的接收能力 不匹配，引入流量控制的窗口概念")]),_._v(" "),v("p",[v("strong",[_._v("【接收窗口-rwnd】")]),_._v("： "),v("strong",[_._v("接收方")]),_._v(" 告知发送方自己的接收容量，反映接收方容量")]),_._v(" "),v("p",[v("strong",[_._v("【拥塞窗口-cwnd】")]),_._v("： "),v("strong",[_._v("发送方")]),_._v(" 根据网络拥塞程度设置的窗口值，反映网络当前容量")]),_._v(" "),v("p",[_._v("发送窗口："),v("code",[_._v("Min (rwnd ， cwnd)")])]),_._v(" "),v("p",[v("strong",[_._v("采用的是GBN和SR协议，并没有采用停等协议")])]),_._v(" "),v("hr"),_._v(" "),v("h3",{attrs:{id:"停等协议"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#停等协议"}},[_._v("#")]),_._v(" 停等协议")]),_._v(" "),v("p",[v("strong",[_._v("停等协议：发送方每发送一个数据帧，都要等待接收方确认之后，才会继续发送下一帧")])]),_._v(" "),v("p",[_._v("发送效率太低，为了提高信道利用率，一次发送多个帧，采用"),v("strong",[_._v("流水线技术")])]),_._v(" "),v("p",[v("strong",[_._v("流水线技术对停等协议的改善")])]),_._v(" "),v("ol",[v("li",[_._v("增加序号范围（为了标识具体哪一帧到达）")]),_._v(" "),v("li",[_._v("发送方要缓存多个分组（帧丢失要重发）")])]),_._v(" "),v("p",[v("strong",[_._v("缓存多个分组的"),v("font",{attrs:{color:"red"}},[_._v("累计确认")]),_._v("协议")],1)]),_._v(" "),v("ul",[v("li",[_._v("GBN-后退N帧协议")]),_._v(" "),v("li",[_._v("SR-选择重传协议")])]),_._v(" "),v("p",[v("strong",[_._v("发送窗口和接收窗口个数区别")])]),_._v(" "),v("ul",[v("li",[_._v("停等协议："),v("code",[_._v("1")]),_._v("个发送窗口，"),v("code",[_._v("1")]),_._v("个接收窗口")]),_._v(" "),v("li",[_._v("GBN-后退N帧："),v("code",[_._v("n")]),_._v("个发送窗口，"),v("code",[_._v("1")]),_._v("个接收窗口")]),_._v(" "),v("li",[_._v("SR-选择重传："),v("code",[_._v("n")]),_._v("个发送窗口，"),v("code",[_._v("n")]),_._v("个接收窗口")])]),_._v(" "),v("h3",{attrs:{id:"gbn-后退n帧协议"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#gbn-后退n帧协议"}},[_._v("#")]),_._v(" GBN-后退N帧协议")]),_._v(" "),v("p",[_._v("GBN定时器过期之后，发送方会重传未被确认的-最小序号之后的"),v("strong",[_._v("所有")]),_._v("数据段")]),_._v(" "),v("p",[_._v("重传"),v("strong",[_._v("已发未确认")]),_._v("之后的所有帧，浪费严重")]),_._v(" "),v("h3",{attrs:{id:"sr-选择重传协议"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#sr-选择重传协议"}},[_._v("#")]),_._v(" SR-选择重传协议")]),_._v(" "),v("p",[_._v("SR协议用的是窗口长度N来限制流水线中-未完成的、未被确认的分组，以接收确认的不会丢弃")]),_._v(" "),v("hr"),_._v(" "),v("p",[v("strong",[_._v("重传")]),_._v("   对于丢失分组 "),v("code",[_._v("n")]),_._v("：")]),_._v(" "),v("ul",[v("li",[_._v("在GBN中，发送方会重传n及n以后的数据包；")]),_._v(" "),v("li",[_._v("在SR中，只会重传n")])]),_._v(" "),v("p",[v("strong",[_._v("缓存")]),_._v("   对于乱序达到的分组：")]),_._v(" "),v("ul",[v("li",[_._v("在GBN中，接受段端会直接丢弃；")]),_._v(" "),v("li",[_._v("在SR中，会把它们缓存下来")])]),_._v(" "),v("p",[v("strong",[_._v("定时器")]),_._v(" 在GBN中一个连接只会设置"),v("code",[_._v("一个")]),_._v("定时器，在SR中会为每个分组设置定时器。")]),_._v(" "),v("hr"),_._v(" "),v("h2",{attrs:{id:"_3-流量控制"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_3-流量控制"}},[_._v("#")]),_._v(" 3. 流量控制")]),_._v(" "),v("p",[v("strong",[_._v("TCP 可以让「发送方」根据「接收方」的实际接收能力控制发送的数据量，这就是所谓的流量控制")])]),_._v(" "),v("p",[_._v("流量控制： 让"),v("strong",[_._v("发送方")]),_._v("发慢点，使接收方来得及接收，避免丢包")]),_._v(" "),v("p",[_._v("流量控制实现的方式："),v("strong",[_._v("滑动窗口机制")])]),_._v(" "),v("p",[v("img",{attrs:{src:"https://iqqcode-blog.oss-cn-beijing.aliyuncs.com/img-2021-later/20210626193229.png",alt:"image-20200831185946977"}})]),_._v(" "),v("blockquote",[v("p",[_._v("TCP并不是停等协议。发送方连续发送若干报文段，接收方进行"),v("strong",[_._v("累计确认")])])]),_._v(" "),v("h3",{attrs:{id:"潜在死锁"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#潜在死锁"}},[_._v("#")]),_._v(" 潜在死锁")]),_._v(" "),v("p",[v("strong",[_._v("接收方给发送方反馈的窗口数据丢失了，发送方则一直处于等待状态")])]),_._v(" "),v("ul",[v("li",[_._v("发送发：等待接收方的窗口信息反馈")]),_._v(" "),v("li",[_._v("接收方：等待发送方发送数据")])]),_._v(" "),v("p",[_._v("TCP 是如何解决窗口关闭时，潜在的死锁现象呢？")]),_._v(" "),v("ul",[v("li",[_._v("TCP为每一个连接设置有"),v("strong",[_._v("持续计数器")]),_._v("，计数器超时，发送"),v("strong",[_._v("零窗口的探测报文")])])]),_._v(" "),v("br"),_._v(" "),v("p",[_._v("若发送方没有收到  接收方  发来的窗口大小信息，为了避免双方都陷入死锁状况，会设置"),v("strong",[_._v("持续计数器")])]),_._v(" "),v("p",[_._v("如果持续计时器超时，就会发送"),v("strong",[_._v("窗口探测 ( Window probe ) 报文")])]),_._v(" "),v("ul",[v("li",[_._v("如果接收窗口仍然为 0，那么收到这个报文的一方就会重新启动持续计时器；")]),_._v(" "),v("li",[_._v("如果接收窗口不是 0，那么死锁的局面就可以被打破了")])]),_._v(" "),v("p",[v("img",{attrs:{src:"https://iqqcode-blog.oss-cn-beijing.aliyuncs.com/img-2021-later/20210626193254.png",alt:"640"}})]),_._v(" "),v("br"),_._v(" "),v("h2",{attrs:{id:"_4-拥塞控制"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_4-拥塞控制"}},[_._v("#")]),_._v(" 4. 拥塞控制")]),_._v(" "),v("p",[v("strong",[_._v("拥塞控制")]),_._v(" ： 防止过多的数据注入到网络中，协调网络中的主机的发送速率")]),_._v(" "),v("h3",{attrs:{id:"拥塞控制和流量控制的区别"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#拥塞控制和流量控制的区别"}},[_._v("#")]),_._v(" 拥塞控制和流量控制的区别")]),_._v(" "),v("p",[v("img",{attrs:{src:"https://iqqcode-blog.oss-cn-beijing.aliyuncs.com/img-2021-later/20210626193300.png",alt:"image-20200831193849940"}})]),_._v(" "),v("p",[v("img",{attrs:{src:"https://iqqcode-blog.oss-cn-beijing.aliyuncs.com/img-2021-later/20210626193304.png",alt:"image-20200831194840817"}})]),_._v(" "),v("h3",{attrs:{id:"拥塞控制的四种算法"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#拥塞控制的四种算法"}},[_._v("#")]),_._v(" 拥塞控制的四种算法")]),_._v(" "),v("hr"),_._v(" "),v("h4",{attrs:{id:"慢开始-拥塞避免"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#慢开始-拥塞避免"}},[_._v("#")]),_._v(" 慢开始—拥塞避免")]),_._v(" "),v("ul",[v("li",[v("strong",[_._v("慢开始")]),_._v("：开始以指数级增大拥塞窗口"),v("strong",[_._v("cwnd")]),_._v("，收到了确认之后窗口大小翻倍（2、4、8、16）")]),_._v(" "),v("li",[_._v("到达"),v("strong",[_._v("门限值ssthresh")]),_._v("后，执行"),v("strong",[_._v("拥塞避免算法")]),_._v("，线性增大（16、17、18）")]),_._v(" "),v("li",[_._v("达到阈值"),v("code",[_._v("top")]),_._v("之后，检测出了"),v("code",[_._v("网络拥塞")]),_._v("；"),v("font",{attrs:{color:"red"}},[v("strong",[_._v("拥塞窗口cwnd立即降为1，继续执行慢开始算法")])])],1),_._v(" "),v("li",[_._v("新的"),v("strong",[_._v("门限值ssthresh")]),_._v("="),v("code",[_._v("top / 2")])])]),_._v(" "),v("p",[v("img",{attrs:{src:"https://iqqcode-blog.oss-cn-beijing.aliyuncs.com/img-2021-later/20210626193312.png",alt:"image-20200920060508950"}})]),_._v(" "),v("h4",{attrs:{id:"快重传-快恢复"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#快重传-快恢复"}},[_._v("#")]),_._v(" 快重传—快恢复")]),_._v(" "),v("p",[v("font",{attrs:{color:"red"}},[v("strong",[_._v("收到3个重复的确认，执行快重传算法")])])],1),_._v(" "),v("p",[_._v("【快恢复】：发生了拥塞，不再降到初始值，而是从"),v("strong",[_._v("新的门限值ssthresh")]),_._v("开始，执行"),v("strong",[_._v("拥塞避免")]),_._v("算法")]),_._v(" "),v("p",[v("img",{attrs:{src:"https://iqqcode-blog.oss-cn-beijing.aliyuncs.com/img-2021-later/20210626193319.png",alt:"image-20200920060551181"}})]),_._v(" "),v("h2",{attrs:{id:"【粘包问题】"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#【粘包问题】"}},[_._v("#")]),_._v(" 【粘包问题】")]),_._v(" "),v("p",[_._v("发送端为了将多个数据报高效的的发给接收端，于是采用了优化算法（"),v("strong",[_._v("Nagle算法")]),_._v("），将多次间隔较小、数据量较小的数据，合并成一个数据量大的数据块，然后进行封包。那么这样一来，接收端就必须使用高效科学的拆包机制来分辨这些数据。")]),_._v(" "),v("h3",{attrs:{id:"q1-什么是tcp粘包问题"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#q1-什么是tcp粘包问题"}},[_._v("#")]),_._v(" Q1：什么是TCP粘包问题？")]),_._v(" "),v("p",[_._v("发送方发送的若干包数据到达接收方时粘成了一包。因为TCP是面向字节流的传输，将数据包看做一连串字节序列")]),_._v(" "),v("p",[v("img",{attrs:{src:"https://iqqcode-blog.oss-cn-beijing.aliyuncs.com/img-2021-later/20210626193329.png",alt:""}})]),_._v(" "),v("p",[_._v("从接收缓冲区来看，后一包数据的头紧接着前一包数据的尾，出现粘包的原因是多方面的，可能是来自发送方，也可能是来自接收方。")]),_._v(" "),v("h3",{attrs:{id:"q2-造成tcp粘包的原因"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#q2-造成tcp粘包的原因"}},[_._v("#")]),_._v(" Q2：造成TCP粘包的原因")]),_._v(" "),v("p",[v("strong",[_._v("发送方原因")])]),_._v(" "),v("p",[_._v("TCP默认使用Nagle算法（主要作用：减少网络中报文段的数量），而Nagle算法主要做两件事：")]),_._v(" "),v("ol",[v("li",[_._v("只有上一个分组得到确认，才会发送下一个分组")]),_._v(" "),v("li",[_._v("收集多个小分组，在一个确认到来时一起发送")])]),_._v(" "),v("p",[_._v("Nagle算法造成了发送方可能会出现粘包问题")]),_._v(" "),v("p",[v("strong",[_._v("接收方原因")])]),_._v(" "),v("p",[_._v("TCP接收到数据包时，并不会马上交到应用层进行处理，或者说应用层并不会立即处理。")]),_._v(" "),v("p",[_._v("实际上，TCP将接收到的数据包保存在接收缓存里，然后应用程序主动从缓存读取收到的分组。这样一来，如果TCP接收数据包到缓存的速度"),v("strong",[_._v("大于")]),_._v("应用程序从缓存中读取数据包的速度，多个包就会被缓存，应用程序就有可能读取到多个首尾相接粘到一起的包。")]),_._v(" "),v("h3",{attrs:{id:"q3-什么时候需要处理粘包现象"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#q3-什么时候需要处理粘包现象"}},[_._v("#")]),_._v(" Q3：什么时候需要处理粘包现象？")]),_._v(" "),v("ol",[v("li",[_._v("如果发送的多组数据本来就是同一块数据的不同部分，比如说一个文件被分成多个部分发送，这时当然不需要处理粘包现象")]),_._v(" "),v("li",[_._v("如果多个分组毫不相干，甚至是并列关系，那么这个时候就一定要处理粘包现象了")])]),_._v(" "),v("h3",{attrs:{id:"q4-如何处理粘包现象"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#q4-如何处理粘包现象"}},[_._v("#")]),_._v(" Q4：如何处理粘包现象？")]),_._v(" "),v("p",[v("strong",[_._v("（1）发送方")])]),_._v(" "),v("p",[_._v("对于发送方造成的粘包问题，可以通过关闭Nagle算法来解决，使用"),v("code",[_._v("TCP_NODELAY")]),_._v("选项来关闭算法。")]),_._v(" "),v("p",[v("strong",[_._v("（2）接收方")])]),_._v(" "),v("p",[_._v("接收方没有办法来处理粘包现象，只能将问题交给应用层来处理。")]),_._v(" "),v("p",[_._v("【应用层】")]),_._v(" "),v("ol",[v("li",[v("strong",[_._v("格式化数据")]),_._v("：每条数据有固定的格式（开始符，结束符），但是选择开始符和结束符时一定要确保每条数据的内部不包含开始符和结束符。")]),_._v(" "),v("li",[v("strong",[_._v("发送长度")]),_._v("：发送每条数据时，将数据的长度一并发送，例如规定数据的前4位是数据的长度，应用层在处理时可以根据长度来判断每个分组的开始和结束位置。")])]),_._v(" "),v("h3",{attrs:{id:"q5-udp会不会产生粘包问题呢"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#q5-udp会不会产生粘包问题呢"}},[_._v("#")]),_._v(" Q5：UDP会不会产生粘包问题呢？")]),_._v(" "),v("p",[_._v("TCP为了保证"),v("strong",[_._v("可靠传输并减少额外的开销")]),_._v("（每次发包都要验证），采用了"),v("strong",[_._v("面向字节流")]),_._v("的传输，将数据包看做"),v("strong",[_._v("一连串的无结构的字节流")]),_._v("，是无保护消息边界")]),_._v(" "),v("blockquote",[v("p",[_._v("保护消息边界：传输协议把数据当做一条独立的消息在网上传输，接收端一次只能接受一条独立的消息")])]),_._v(" "),v("p",[_._v("UDP则是面向消息传输的，是有保护消息边界的，接收方一次只接受一条独立的信息，所以不存在粘包问题。")]),_._v(" "),v("p",[_._v("举个例子：有三个数据包，大小分别为2k、4k、6k，如果采用UDP发送的话，不管接受方的接收缓存有多大，我们必须要进行至少三次以上的发送才能把数据包发送完，但是使用TCP协议发送的话，我们只需要接受方的接收缓存有12k的大小，就可以一次把这3个数据包全部发送完毕。")])])}),[],!1,null,null,null);v.default=r.exports}}]);