(window.webpackJsonp=window.webpackJsonp||[]).push([[397],{720:function(t,_,s){"use strict";s.r(_);var a=s(3),v=Object(a.a)({},(function(){var t=this,_=t._self._c;return _("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[_("p",[_("img",{attrs:{src:"https://imgconvert.csdnimg.cn/aHR0cHM6Ly9ibG9naW1hZ2UtMTI1NTYxODU5Mi5jb3MuYXAtY2hlbmdkdS5teXFjbG91ZC5jb20vaW1nbmV0d29yay10b3BvbG9neS5qcGc?x-oss-process=image/format,png",alt:""}})]),t._v(" "),_("p",[t._v("近来，新学期俺们新开了一节课，《计算机网络原理》。对于广大IT的莘莘学子来说，这是基础的基础课，不学这个，不懂 "),_("code",[t._v("TCP/IP")]),t._v("，分层协议的学生不是好的程序员。俺之前也浅显的接触过，属于那种半吊子类型，听过，但是别问！问就是不会！现在也别问，还是不懂！")]),t._v(" "),_("p",[_("img",{attrs:{src:"https://img-blog.csdnimg.cn/20200305174822852.jpg",alt:"在这里插入图片描述"}})]),t._v(" "),_("p",[t._v("距离秋招已马上来临，惶惶不可终日的内心略有一丝躁动和焦虑。看着MOOC和超新的线上网课，一阵困意莫名袭来。听了感觉我又行了，一问我又聂尔了！算了，还是看书吧。这种理解性记忆性的东西，自己理解比较好。当然，俺看的书是《图解TCP/IP》和《计算机网络（第7版）-谢希仁》，内容大部分都是书中的，俺会加上自己的理解和体会结合来叙述，尽量让它变得人能看懂8，我就当笔记来写，反正也没啥人看，我写给我自己看。")]),t._v(" "),_("p",[_("img",{attrs:{src:"https://imgconvert.csdnimg.cn/aHR0cHM6Ly9ibG9naW1hZ2UtMTI1NTYxODU5Mi5jb3MuYXAtY2hlbmdkdS5teXFjbG91ZC5jb20vaW1nMjAyMDAzMDUwOTM4MTkucG5n?x-oss-process=image/format,png",alt:""}})]),t._v(" "),_("p",[t._v("既然是网络，那就会提到协议。协议是神马？计算机网络为什么需要协议？网络协议有哪些？")]),t._v(" "),_("p",[t._v("俺作为隔壁班的阿菜，来和大家一起探讨这个问题。")]),t._v(" "),_("h2",{attrs:{id:"_1-协议"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_1-协议"}},[t._v("#")]),t._v(" 1. 协议")]),t._v(" "),_("p",[_("strong",[t._v("协议")]),t._v("：可以理解为一种约定。网络协议就是在计算机网络中的一些约定。")]),t._v(" "),_("p",[t._v("官方术语就是：")]),t._v(" "),_("p",[t._v("协议就是计算机与计算机之间通过网络实现"),_("strong",[t._v("通信")]),t._v("时事先达成的一种“约定”。不同品牌厂商的计算机，CPU，操作系统只要遵循相同的协议就能够实现通信！")]),t._v(" "),_("p",[t._v("那么，我们为什么需要协议呢？是为了通过网络来实现通信。")]),t._v(" "),_("p",[t._v("通信是一个什么概念呀？其实就是用你的终端设备与其他外界的终端建立连接来交换获取信息的过程。")]),t._v(" "),_("p",[t._v("为什么需要协议呢？没有协议我还不能联网了还是咋地？那咱就得唠唠协议的必要性了。")]),t._v(" "),_("h3",{attrs:{id:"协议的必要性"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#协议的必要性"}},[t._v("#")]),t._v(" 协议的必要性")]),t._v(" "),_("p",[t._v("如果雷总问：")]),t._v(" "),_("p",[_("img",{attrs:{src:"https://img-blog.csdnimg.cn/20200305174931910.jpg?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80MzIzMjk1NQ==,size_16,color_FFFFFF,t_70",alt:"在这里插入图片描述"}})]),t._v(" "),_("p",[t._v("罗老师：？？？？")]),t._v(" "),_("p",[_("img",{attrs:{src:"https://img-blog.csdnimg.cn/20200305175021875.gif",alt:"在这里插入图片描述"}})]),t._v(" "),_("p",[t._v("其实就类似于语言不通，无法交流。")]),t._v(" "),_("p",[t._v("现在有甲，乙，丙三人。甲只会说汉语，乙只会说英语，丙都会说。")]),t._v(" "),_("ul",[_("li",[_("p",[t._v("将英语和汉语当做 "),_("code",[t._v("协议")])])]),t._v(" "),_("li",[_("p",[t._v("将聊天当做 "),_("code",[t._v("通信")])])]),t._v(" "),_("li",[_("p",[t._v("将说话内容当做 "),_("code",[t._v("数据")])])])]),t._v(" "),_("p",[t._v("甲和乙各持一种语言且不懂对方的语言，自然无法交流（表情和动作交流就不算了），也就无法建立通信来传输数据了。但是丙却能够和他们交流，因为丙支持的协议多呀。")]),t._v(" "),_("p",[_("img",{attrs:{src:"https://imgconvert.csdnimg.cn/aHR0cHM6Ly9ibG9naW1hZ2UtMTI1NTYxODU5Mi5jb3MuYXAtY2hlbmdkdS5teXFjbG91ZC5jb20vaW1nMjAyMDAzMDUxMDE4MzQucG5n?x-oss-process=image/format,png",alt:""}})]),t._v(" "),_("p",[t._v("其实，协议可以类比我们编程语言中的字符集。编解码不一致自然就会产生乱码了，所以协议明确的规定了计算机在网络通信中的行为规范，两台计算机只有遵循相同的协议，才能实现彼此的通信。")]),t._v(" "),_("p",[t._v("其实，现阶段的计算机智能水平，说到底还是源于程序员和开发者们的”智“，计算机才“能“。它只是机器，只能够按照事先设置好的指令来执行，遇到突发情况就挂了。")]),t._v(" "),_("p",[_("img",{attrs:{src:"https://imgconvert.csdnimg.cn/aHR0cHM6Ly9ibG9naW1hZ2UtMTI1NTYxODU5Mi5jb3MuYXAtY2hlbmdkdS5teXFjbG91ZC5jb20vaW1nMjAyMDAzMDUxMTAxMTkucG5n?x-oss-process=image/format,png",alt:""}})]),t._v(" "),_("h3",{attrs:{id:"协议由谁定"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#协议由谁定"}},[t._v("#")]),t._v(" 协议由谁定")]),t._v(" "),_("p",[t._v("既然计算机之间使用了相同的协议才能建立通信，全世界有那么多的电脑产商，各家产的电脑不同，一家一个协议，百家争鸣那岂不是乱套了？同样是协议，各不相同，你总不能让用户都使用一家产商的电脑吧，这是不现实的。")]),t._v(" "),_("p",[t._v("俺是北方娃子，当南方的同学说家乡话时，我才体会到汉语的博大精深，别说是老外了，俺也听不懂。我们都说的汉语，相当于都遵循汉语协议；但是方言不同，也就是厂家不同，还是不行。但是，有一种标准叫“普通话呀”，这不就解决问题了！")]),t._v(" "),_("p",[t._v('所以，此时，针对不同厂商的不同方言，一个组织站出来，说"俺给你们建立一套普通话标准"，以后协议都按这个来。这就是 '),_("a",{attrs:{href:"https://www.baidu.com/baidu?isource=infinity&iname=baidu&itype=web&tn=02003390_42_hao_pg&ie=utf-8&wd=OSI",target:"_blank",rel:"noopener noreferrer"}},[t._v("OSI"),_("OutboundLink")],1),t._v(" 制定的国际标准 "),_("a",{attrs:{href:"https://baike.baidu.com/item/OSI%E5%8F%82%E8%80%83%E6%A8%A1%E5%9E%8B/708028?fr=aladdin",target:"_blank",rel:"noopener noreferrer"}},[t._v("OSI参考模型"),_("OutboundLink")],1),t._v("，对通信系统进行了标准化。")]),t._v(" "),_("p",[t._v("虽然，OSI定义的协议并没有得到普及，但是它作为一个标准来用于网络的协议来制定。因为它建立的模型太过理论化，实际的厂商难以实现。它只是对各层的作用做了粗略的界定，并没有对协议和接口进行详细的定义。实际使用的是由"),_("a",{attrs:{href:"https://baike.baidu.com/item/%E4%BA%92%E8%81%94%E7%BD%91%E5%B7%A5%E7%A8%8B%E4%BB%BB%E5%8A%A1%E7%BB%84/707674?fromtitle=IETF&fromid=2800318&fr=aladdin",target:"_blank",rel:"noopener noreferrer"}},[t._v("IETF"),_("OutboundLink")],1),t._v("所建议的、致力推进与标准化的一种协议。")]),t._v(" "),_("h3",{attrs:{id:"协议的分层"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#协议的分层"}},[t._v("#")]),t._v(" 协议的分层")]),t._v(" "),_("p",[t._v("在学习中，理解了OSI参考模型是学习网络协议的基础。这个模型分了七层，通过这些分层使得复杂的网络协议更加简单化。")]),t._v(" "),_("p",[_("strong",[t._v("在这个模型中，每个分层都接收由它下一层所提供的特定的服务，并且为上一层提供服务。")])]),t._v(" "),_("ul",[_("li",[_("p",[t._v("上下层之间进行交互的约定叫 "),_("strong",[t._v("接口")])])]),t._v(" "),_("li",[_("p",[t._v("同层之间的叫 "),_("strong",[t._v("协议")])])])]),t._v(" "),_("p",[t._v("【分层的目的】")]),t._v(" "),_("p",[t._v("将每个分层独立使用，即使系统中的某些分层发生变化，也不会影响整个系统。")]),t._v(" "),_("p",[_("img",{attrs:{src:"https://iqqcode-blog.oss-cn-beijing.aliyuncs.com/img/20200720104109.png",alt:""}})]),t._v(" "),_("p",[t._v("七层模型从上到下依次是：")]),t._v(" "),_("ul",[_("li",[_("strong",[t._v("应用层")]),t._v("：为应用程序提供服务并规定应用程序中通信的相关细节。包括文件传输，电子邮件，远程登录等协议。")]),t._v(" "),_("li",[_("strong",[t._v("表示层")]),t._v("：负责数据格式的转换，将设备固有的数据格式转换为网络标准传输格式。")]),t._v(" "),_("li",[_("strong",[t._v("会话层")]),t._v("：建立、管理、终止会话连接。")]),t._v(" "),_("li",[_("strong",[t._v("传输层")]),t._v("：负责可靠传输，定义传输数据的协议端口号，以及流控和差错校验。")]),t._v(" "),_("li",[_("strong",[t._v("网络层")]),t._v("：将数据传输到目标地址。")]),t._v(" "),_("li",[_("strong",[t._v("数据链路层")]),t._v("：负责物理层上互连的、节点之间的通信传输。")]),t._v(" "),_("li",[_("strong",[t._v("物理层")]),t._v("：光电信号的传输。")])]),t._v(" "),_("p",[_("img",{attrs:{src:"https://iqqcode-blog.oss-cn-beijing.aliyuncs.com/img/20200720104328.png",alt:""}})]),t._v(" "),_("p",[_("img",{attrs:{src:"https://img-blog.csdnimg.cn/20200305175258850.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80MzIzMjk1NQ==,size_16,color_FFFFFF,t_70",alt:"在这里插入图片描述"}})]),t._v(" "),_("h2",{attrs:{id:"_2-osi参考模型通信"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_2-osi参考模型通信"}},[t._v("#")]),t._v(" 2. OSI参考模型通信")]),t._v(" "),_("p",[t._v("假定用户A要给用户B发送一封邮件，内容为“Hello World”。网络究竟会进行哪些处理呢？我们由上自下开始分析一波。")]),t._v(" "),_("p",[_("img",{attrs:{src:"https://img-blog.csdnimg.cn/20200305175316260.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80MzIzMjk1NQ==,size_16,color_FFFFFF,t_70",alt:"在这里插入图片描述"}})]),t._v(" "),_("p",[t._v("你们可能不知道这份邮件经过OSI七层模型的分层后是怎么处理的，我们一般只会用两个字形容这种操作，NB。我经常说一句话，当年C语言能用unix一统操作系统的江湖，我OSI靠ISO模型坐上网络协议一统江湖的位置不是问题。")]),t._v(" "),_("p",[t._v("埋伏他一手，应用层不能抢，表示层会话层不用抢，他死定了！反手加一个TCP/IP协议，闷声发大财，他也有TCP/IP？但是不用怕，他的TCP/IP赢不了我。传输层，网络层，数据链路层，物理层，很牛逼我这个牌，如果传输速度再快一点，我这个牌将绝杀！可惜快不了。\nTCP/IP握手挥手？SB，你挥手我挥手。\nHTTP你出牌啊？通信无加密吗？HTTP你快点啊？别磨磨蹭蹭的。给HTTP倒杯茶吧！HTTP，给你倒一杯卡布提诺，开启你的传输秀！漂亮！\n就靠简单你能秒我？你能秒杀我？你今天能用简单把我OSI秒了？我！当！场！把这个电脑屏幕吃掉。")]),t._v(" "),_("p",[_("img",{attrs:{src:"https://img-blog.csdnimg.cn/20200305183536511.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80MzIzMjk1NQ==,size_16,color_FFFFFF,t_70",alt:"在这里插入图片描述"}})]),t._v(" "),_("h3",{attrs:{id:"应用层"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#应用层"}},[t._v("#")]),t._v(" 应用层")]),t._v(" "),_("p",[_("img",{attrs:{src:"https://imgconvert.csdnimg.cn/aHR0cHM6Ly9ibG9naW1hZ2UtMTI1NTYxODU5Mi5jb3MuYXAtY2hlbmdkdS5teXFjbG91ZC5jb20vaW1nMjAyMDAzMDUxNTM2MDAucG5n?x-oss-process=image/format,png",alt:""}})]),t._v(" "),_("p",[t._v("将输入电子邮件的内容填写发送人后通过网络点击发送这一操作，就是应用层要干的事。在点击“发送”的那一刻，就进入了应用层的协议处理。")]),t._v(" "),_("p",[t._v("那么，它到底干嘛了？")]),t._v(" "),_("p",[t._v("我们都知道网络传输是通过"),_("strong",[t._v("分组交换")]),t._v("来传输数据的。计算机通信会在每一个分组中附加上源主机地址和目标主机地址在通信线路上传输。这些发送端地址、接收端地址以及分组序号写入的部分称为“报文首部”。")]),t._v(" "),_("p",[_("img",{attrs:{src:"https://imgconvert.csdnimg.cn/aHR0cHM6Ly9ibG9naW1hZ2UtMTI1NTYxODU5Mi5jb3MuYXAtY2hlbmdkdS5teXFjbG91ZC5jb20vaW1nMjAyMDAzMDUxNTE5MzEucG5n?x-oss-process=image/format,png",alt:""}})]),t._v(" "),_("p",[t._v("应用层协议会在所要传输数据的前端附加一个首部信息A，标明了邮件内容为“Hello World”和收件人为B。B的接收端在手到这份邮件后，首先是通过邮箱来获取（假定B使用的是QQ邮箱，当然，不同邮箱之间也有公用的邮件协议）。QQ邮箱接收到邮件后，分析发送来的数据首部与数据正文，并且保存在本地磁盘。")]),t._v(" "),_("p",[t._v("简单来说，"),_("strong",[t._v("应用层为应用程序提供服务并规定应用程序中通信的相关细节")]),t._v("。就是具体到某一个应用软件使用的协议。你用邮箱才能接收并且打开邮件，你的记事本肯定是打不开的。")]),t._v(" "),_("h3",{attrs:{id:"表示层"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#表示层"}},[t._v("#")]),t._v(" 表示层")]),t._v(" "),_("p",[_("img",{attrs:{src:"https://imgconvert.csdnimg.cn/aHR0cHM6Ly9ibG9naW1hZ2UtMTI1NTYxODU5Mi5jb3MuYXAtY2hlbmdkdS5teXFjbG91ZC5jb20vaW1nMjAyMDAzMDUxNTQwMTMucG5n?x-oss-process=image/format,png",alt:""}})]),t._v(" "),_("p",[_("strong",[t._v("表示层")]),t._v("的表示有“表示”、“表现”的意思，更加关注的是数据具体的表现形式。")]),t._v(" "),_("p",[t._v("在我们的日常生活中，我们发送的word文档，必须使用Office或者WPS才能够打开阅读，记事本是无法打开的，打开也是乱码。回归到发邮件问题上，生活中大家也不可能千篇一律的使用同一种邮箱客户端。那这样才能让不同用户不同的邮箱客户端统一的能够阅读接收并且阅读邮件呢？")]),t._v(" "),_("p",[t._v("上面的应用层负责的是将邮件发送给接收端邮箱，而不是胡乱发给别人。"),_("strong",[t._v("表示层")]),t._v("负责将邮件数据转换成网络传输的标准按格式，然后到具体是什么邮箱客户端在转换成它们自己的标准。")]),t._v(" "),_("p",[t._v("简单来说就像是英语是国际通用语言，国际学术文章都是统一用英文来发布的，到不同国家人看的时候，在翻译成他们自己的语言来阅读。")]),t._v(" "),_("p",[_("strong",[t._v("表示层就是将数据从 “某个计算机特定的数据格式” 转换为 “网络通用的标准数据格式” 再发送出去")]),t._v("。")]),t._v(" "),_("p",[t._v("表示层也会添加首部信息，将实际传输数据转交给下一层处理。")]),t._v(" "),_("h3",{attrs:{id:"会话层"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#会话层"}},[t._v("#")]),t._v(" 会话层")]),t._v(" "),_("p",[_("img",{attrs:{src:"https://imgconvert.csdnimg.cn/aHR0cHM6Ly9ibG9naW1hZ2UtMTI1NTYxODU5Mi5jb3MuYXAtY2hlbmdkdS5teXFjbG91ZC5jb20vaW1nMjAyMDAzMDUxNjA4MzIucG5n?x-oss-process=image/format,png",alt:""}})]),t._v(" "),_("p",[_("strong",[t._v("决定数据如何高效的交互和传输是会话层的主要工作")]),t._v("。")]),t._v(" "),_("p",[t._v("现在我要发五份邮件。如果网络好，网络延时低，我可能一次5份都发完；如果网络差，我可能每次发一份，分五次发过去。决定采用何种连接方法是会话层的主要职责。")]),t._v(" "),_("hr"),t._v(" "),_("p",[t._v("在应用层写入的数据经由表示层格式化编码，再有会话层标记发送顺序才能被发送。但是搞了半天还没发呐！老铁门有没有发现，上面三层都是在办公室的“决策人群”，负责管事的，告诉下面这些小弟们该怎么做。真正负责在网络上传输具体数据的是会话层以下的”无名英雄“。")]),t._v(" "),_("p",[_("img",{attrs:{src:"https://img-blog.csdnimg.cn/2020030517535867.png",alt:"在这里插入图片描述"}})]),t._v(" "),_("p",[t._v("在"),_("code",[t._v("TCP/IP")]),t._v("协议中，上面三层都归结为 "),_("code",[t._v("应用层")])]),t._v(" "),_("h3",{attrs:{id:"传输层"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#传输层"}},[t._v("#")]),t._v(" 传输层")]),t._v(" "),_("p",[_("img",{attrs:{src:"https://imgconvert.csdnimg.cn/aHR0cHM6Ly9ibG9naW1hZ2UtMTI1NTYxODU5Mi5jb3MuYXAtY2hlbmdkdS5teXFjbG91ZC5jb20vaW1nMjAyMDAzMDUxNzA2MTgucG5n?x-oss-process=image/format,png",alt:""}})]),t._v(" "),_("p",[t._v("这一层主要干的事儿是 “建立连接”（通信传输结束后连接会断开）")]),t._v(" "),_("p",[t._v("骗俺读的书少，这不就是“媒婆”么，牵媒拉线！真正谈婚论嫁还是取决于男女双发。")]),t._v(" "),_("p",[_("img",{attrs:{src:"https://img-blog.csdnimg.cn/2020030517541741.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80MzIzMjk1NQ==,size_16,color_FFFFFF,t_70",alt:"在这里插入图片描述"}})]),t._v(" "),_("p",[t._v("传输层首先会在两个主机间建立逻辑上的通信连接，并且会在通信两端的计算机之间进行确认；如果数据没法到达，会进行重发。（男女双发看不上眼，再给重新介绍对象）")]),t._v(" "),_("p",[_("img",{attrs:{src:"https://imgconvert.csdnimg.cn/aHR0cHM6Ly9ibG9naW1hZ2UtMTI1NTYxODU5Mi5jb3MuYXAtY2hlbmdkdS5teXFjbG91ZC5jb20vaW1nMjAyMDAzMDUxNzA0MDkucG5n?x-oss-process=image/format,png",alt:""}})]),t._v(" "),_("p",[t._v("由此可见，"),_("strong",[t._v("保证数据传输的可靠是传输层的重要作用")]),t._v("！")]),t._v(" "),_("h3",{attrs:{id:"网络层"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#网络层"}},[t._v("#")]),t._v(" 网络层")]),t._v(" "),_("p",[_("img",{attrs:{src:"https://img-blog.csdnimg.cn/2020030517543234.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80MzIzMjk1NQ==,size_16,color_FFFFFF,t_70",alt:"在这里插入图片描述"}}),t._v(" "),_("strong",[t._v("网络层负责将 数据传输给对端")]),t._v("。干的可都是苦力活呀兄嘚！")]),t._v(" "),_("p",[_("img",{attrs:{src:"https://img-blog.csdnimg.cn/20200305175451149.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80MzIzMjk1NQ==,size_16,color_FFFFFF,t_70",alt:"在这里插入图片描述"}})]),t._v(" "),_("p",[t._v("在实际发送数据时，目的地址至关重要。这个地址是进行通信的网络中唯一指定的序号。就像我们每个人的身份证号，都是唯一的对应一个人的。基于这个地址，就可以在网络层进行数据包的发送了。")]),t._v(" "),_("p",[t._v("网络层也会将从上层收到的数据和地址等信息一起发送给下面的数据链路层。")]),t._v(" "),_("h3",{attrs:{id:"数据链路层"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#数据链路层"}},[t._v("#")]),t._v(" 数据链路层")]),t._v(" "),_("p",[_("img",{attrs:{src:"https://imgconvert.csdnimg.cn/aHR0cHM6Ly9ibG9naW1hZ2UtMTI1NTYxODU5Mi5jb3MuYXAtY2hlbmdkdS5teXFjbG91ZC5jb20vaW1nMjAyMDAzMDUxNzI0MjEucG5n?x-oss-process=image/format,png",alt:""}})]),t._v(" "),_("p",[t._v("通信传输实际上是通过物理的传输介质实现的，计算机软件的逻辑，归根结底还是靠硬件来完成的。")]),t._v(" "),_("p",[_("strong",[t._v("数据链路层的作用是：通过传输介质在互连的设备之间进行数据处理")]),t._v("。")]),t._v(" "),_("p",[t._v("网络层与数据链里层都是基于目标地址将数据发送给接收端的，但是网络层负责将整个数据发送给目标地址，而数据链路层只负责发送一个分段内的数据。毕竟，越往底层，负责的工作越精细么！")]),t._v(" "),_("p",[_("img",{attrs:{src:"https://imgconvert.csdnimg.cn/aHR0cHM6Ly9ibG9naW1hZ2UtMTI1NTYxODU5Mi5jb3MuYXAtY2hlbmdkdS5teXFjbG91ZC5jb20vaW1nMjAyMDAzMDUxNzM4NTQucG5n?x-oss-process=image/format,png",alt:""}})]),t._v(" "),_("h3",{attrs:{id:"物理层"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#物理层"}},[t._v("#")]),t._v(" 物理层")]),t._v(" "),_("p",[_("img",{attrs:{src:"https://imgconvert.csdnimg.cn/aHR0cHM6Ly9ibG9naW1hZ2UtMTI1NTYxODU5Mi5jb3MuYXAtY2hlbmdkdS5teXFjbG91ZC5jb20vaW1nMjAyMDAzMDUxNzQ2MDYucG5n?x-oss-process=image/format,png",alt:""}})]),t._v(" "),_("p",[t._v("在物理层中，将数据的二进制位0、1转换成为光电信号给物理的传输介质（光纤），相互直连的设备之间使用"),_("strong",[t._v("MAC地址")]),t._v("实现传输。")]),t._v(" "),_("p",[t._v("采用"),_("strong",[t._v("MAC地址")]),t._v("是为了识别连接到同一个传输介质上的设备。\n"),_("img",{attrs:{src:"https://img-blog.csdnimg.cn/20200305175641699.jpg?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80MzIzMjk1NQ==,size_16,color_FFFFFF,t_70",alt:"在这里插入图片描述"}})]),t._v(" "),_("hr"),t._v(" "),_("p",[_("strong",[t._v("【总结一下】")])]),t._v(" "),_("p",[t._v("某宝ID：马化云爱❥马腾")]),t._v(" "),_("p",[t._v("OSI模型：美美美！！！买买买！！！")]),t._v(" "),_("p",[_("img",{attrs:{src:"https://img-blog.csdnimg.cn/20200305184516661.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80MzIzMjk1NQ==,size_16,color_FFFFFF,t_70",alt:"在这里插入图片描述"}})]),t._v(" "),_("ul",[_("li",[_("p",[t._v("应用层：向某宝店家下单商品（提供应用服务）")])]),t._v(" "),_("li",[_("p",[t._v("表示层：老马给我发的啥快递呀，要不就隔壁某东吧，物流速度挺快的！（转换为物流信息发出去）")])]),t._v(" "),_("li",[_("p",[t._v("会话层：一次发送，货到付款（传输方式）")])]),t._v(" "),_("li",[_("p",[t._v("传输层：向快递小哥哥确认自己的物流地址无误（简历传输连接）")])]),t._v(" "),_("li",[_("p",[t._v("网络层：东哥小弟们给我送快递了（负责将数据传输给对端）")])]),t._v(" "),_("li",[_("p",[t._v("数据链路层：老弟，你的货到了，出来签一下子（建立物理上的实体连接）")])]),t._v(" "),_("li",[_("p",[t._v("物理层：出门取件，货到付款（通信设备和网络媒体间的互通）")])])]),t._v(" "),_("p",[t._v("妈呀，取个快递累死了。这篇文肝了一天了，我歇会，嘴有点干吧。")]),t._v(" "),_("p",[_("img",{attrs:{src:"https://iqqcode-blog.oss-cn-beijing.aliyuncs.com/img/20200720104158.png",alt:""}})]),t._v(" "),_("hr"),t._v(" "),_("p",[t._v("【参考文章】")]),t._v(" "),_("ul",[_("li",[_("p",[t._v("《图解TCP/IP》")])]),t._v(" "),_("li",[_("p",[_("a",{attrs:{href:"https://www.jianshu.com/p/9b9438dff7a2",target:"_blank",rel:"noopener noreferrer"}},[t._v("图解OSI七层模型"),_("OutboundLink")],1)])])])])}),[],!1,null,null,null);_.default=v.exports}}]);