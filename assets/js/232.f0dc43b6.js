(window.webpackJsonp=window.webpackJsonp||[]).push([[232],{559:function(v,_,t){"use strict";t.r(_);var e=t(3),r=Object(e.a)({},(function(){var v=this,_=v._self._c;return _("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[_("h2",{attrs:{id:"_1-jsp的发展"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_1-jsp的发展"}},[v._v("#")]),v._v(" 1. JSP的发展")]),v._v(" "),_("p",[v._v("早期只有Servlet，只能使用response输出标签数据，非常麻烦后来。JSP的出现，简化了 Servlet的开发。但是过度的使用JSP，在JSP中写大量的java代码，又前端的页面，造成难以维护，难于分工协作的窘境。\n再后来，随着java的web开发的逐步完善，公司的开发需要形成一种规范，来更好的管理和维护代码，借鉴"),_("code",[v._v("MVC")]),v._v("的开发模式，使得程序的设计更加合理性。")]),v._v(" "),_("p",[_("img",{attrs:{src:"https://blogimage-1255618592.cos.ap-chengdu.myqcloud.com/img20200318172939.png",alt:""}})]),v._v(" "),_("p",[_("strong",[v._v("JSP")]),v._v("（全称"),_("strong",[v._v("J")]),v._v("ava"),_("strong",[v._v("S")]),v._v("erver "),_("strong",[v._v("P")]),v._v("ages）是由Sun公司主导创建的一种动态网页技术标准。JSP部署于网络服务器上，可以响应客户端发送的请求，并根据请求内容"),_("strong",[v._v("动态")]),v._v("地生成HTML、XML或其他格式文档的Web网页，然后返回给请求者。")]),v._v(" "),_("p",[v._v("JSP技术以Java语言作为脚本语言，为用户的HTTP请求提供服务，并能与服务器上的其它Java程序共同处理复杂的业务需求。")]),v._v(" "),_("blockquote",[_("p",[v._v("百度百科复制来的哈！！")])]),v._v(" "),_("h2",{attrs:{id:"mvc思想"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#mvc思想"}},[v._v("#")]),v._v(" MVC思想")]),v._v(" "),_("p",[_("img",{attrs:{src:"https://blogimage-1255618592.cos.ap-chengdu.myqcloud.com/img20200318162446.png",alt:""}})]),v._v(" "),_("p",[v._v("MVC（Model View Controller）是软件工程中的一种软件架构模式，它把软件系统分为模型、"),_("strong",[v._v("视图")]),v._v("和"),_("strong",[v._v("控制器")]),v._v("三个基本部分。用一种业务逻辑、数据、界面显示分离的方法组织代码，将业务逻辑聚集到一个部件里面，在改进和个性化定制界面及用户交互的同时，不需要重新编写业务逻辑。")]),v._v(" "),_("h3",{attrs:{id:"_2-mvc"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_2-mvc"}},[v._v("#")]),v._v(" 2. MVC")]),v._v(" "),_("p",[v._v("MVC每层之间的逻辑关系：")]),v._v(" "),_("p",[_("img",{attrs:{src:"https://blogimage-1255618592.cos.ap-chengdu.myqcloud.com/img20200318181649.png",alt:""}})]),v._v(" "),_("p",[_("strong",[v._v("M")]),v._v("：Model，模型。 JavaBean")]),v._v(" "),_("ul",[_("li",[v._v("完成具体的业务操作，如：查询数据库，封装对象")])]),v._v(" "),_("p",[_("strong",[v._v("V")]),v._v("：view视图。JSP、HTML等来进行数据展示")]),v._v(" "),_("p",[_("strong",[v._v("C")]),v._v("：Controller控制器。 Servlet")]),v._v(" "),_("ul",[_("li",[_("p",[v._v("获取View的请求")])]),v._v(" "),_("li",[_("p",[v._v("调用模型将数据交给视图进行展示")])])]),v._v(" "),_("p",[_("img",{attrs:{src:"https://blogimage-1255618592.cos.ap-chengdu.myqcloud.com/img20200318232617.png",alt:""}})]),v._v(" "),_("p",[v._v("控制器"),_("code",[v._v("Controller")]),v._v(" 的作用就是将"),_("code",[v._v("Model")]),v._v(" 与 "),_("code",[v._v("View")]),v._v("一一对应起来")]),v._v(" "),_("p",[v._v("我们用用户登录这个例子来说明：")]),v._v(" "),_("p",[v._v("View层是"),_("code",[v._v("index.jsp")]),v._v("，Cotroller是"),_("code",[v._v("/loginServlet")]),v._v("，Model是"),_("code",[v._v("JavaBean")]),v._v("对象")]),v._v(" "),_("ol",[_("li",[_("p",[v._v("用户看到的是JSP展示页面，用户输入数据点击登录按钮时，这是JSP会通过数据共享将请求转发到"),_("code",[v._v("/loginServlet")]),v._v("控制器上")])]),v._v(" "),_("li",[_("p",[v._v("然后控制器再将请求分发到Model上，通过JDBC连接到数据库来查询数据库中是否存在该用户信息。")])]),v._v(" "),_("li",[_("p",[v._v("若存在该用户，则返回信息，让控制器告诉前台页面展示登陆成功的信息；不存在则告诉登陆失败...")])]),v._v(" "),_("li",[_("p",[v._v("View来响应控制器交给它的数据")])])]),v._v(" "),_("p",[v._v("在这个过程中，控制器其实只是起到了承上启下的作用，它只负责中转（指挥调度），不负责具体的业务操作。")]),v._v(" "),_("h3",{attrs:{id:"优缺点"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#优缺点"}},[v._v("#")]),v._v(" 优缺点")]),v._v(" "),_("p",[v._v("【优点】")]),v._v(" "),_("ol",[_("li",[_("p",[v._v("耦合性低，方便维护，可以利于分工协作")])]),v._v(" "),_("li",[_("p",[v._v("重用性高")])])]),v._v(" "),_("p",[v._v("【缺点】")]),v._v(" "),_("ol",[_("li",[v._v("使得项目架构变得复杂，对开发人员要求高")])]),v._v(" "),_("h2",{attrs:{id:"_3-三层架构"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_3-三层架构"}},[v._v("#")]),v._v(" 3. 三层架构")]),v._v(" "),_("p",[_("img",{attrs:{src:"https://blogimage-1255618592.cos.ap-chengdu.myqcloud.com/img20200318162808.png",alt:""}})]),v._v(" "),_("p",[v._v("三层架构(3-tier architecture) 通常意义上的三层架构就是将整个业务应用划分为：界面层[表示层]（User Interface layer）、业务逻辑层（Business Logic Layer）、数据访问层（Data access layer）。")]),v._v(" "),_("p",[_("strong",[v._v("区分层次的目的即为了“高内聚低耦合” 的思想")]),v._v("。在软件体系架构设计中，分层式结构是最常见，也是最重要的一种结构。")]),v._v(" "),_("p",[v._v("举一个例子来说明吧：")]),v._v(" "),_("p",[_("a",{attrs:{href:"https://baike.baidu.com/item/%E5%90%8E%E5%8E%A8/74801?fr=aladdin",target:"_blank",rel:"noopener noreferrer"}},[_("strong",[v._v("后厨")]),_("OutboundLink")],1),v._v("这个电视剧不知道大家听说过没，那会俺上初中时记得寒假无聊时看的一个剧，剧荒的推荐去看看。")]),v._v(" "),_("p",[v._v("在后厨中，小小的餐厅厨房，却是厨师们的一番战场。都说艺术来源于生活，同样，技术也是如此。其实，三层架构就可以用后厨这个场景来抽象理解。")]),v._v(" "),_("p",[_("img",{attrs:{src:"https://blogimage-1255618592.cos.ap-chengdu.myqcloud.com/img20200319090419.png",alt:""}})]),v._v(" "),_("ul",[_("li",[_("p",[v._v("服务员：负责接待客人和传菜")])]),v._v(" "),_("li",[_("p",[v._v("主厨：后厨的头头，后处里主厨说了算。可以理解为架构师，负责后厨和服务员的对接")])]),v._v(" "),_("li",[_("p",[v._v("小厨：每个小厨有自己特定的工作，各司其职")])])]),v._v(" "),_("p",[v._v("现在，假设饭店开业了，广大学生战友不用再钉钉，MOOC上网课了，楼下的煎饼果子还是那个味！去饭店吃个大餐，西红柿炒鸡蛋。")]),v._v(" "),_("p",[_("strong",[v._v("他们三者是如何联系的？")])]),v._v(" "),_("p",[v._v("我走进饭店，漂亮的服务员小姐姐迎接我，毕节这是个看颜的时代，表示层得好看点才能吃饭体验好。Waitress给我递上了菜单，我再菜单上选菜，兜里块钱好纠结哈哈哈哈.......我点菜，只是看看菜单就可以了，我总不能去后厨问问大师傅你能做什么菜吧！后厨重地，闲人免进！！！就像我们在浏览器看到的页面一样，我只是看攻城狮们想让我看到的东西。")]),v._v(" "),_("p",[v._v("一番精挑细选之后，我决定点个西红柿炒鸡蛋。Waitress拿着菜单，交给后厨的主厨。主厨拿到我的菜单后，一看这小伙子有品位呀，马上安排小弟们给做，必须安排！")]),v._v(" "),_("p",[v._v("小厨A负责洗菜，小厨B负责切菜，小厨C负责炒菜，小厨D负责装盘。那大师傅干嘛了？")]),v._v(" "),_("p",[v._v("主厨都这个级别了，当然是负责呐喊加油呀！安排小厨们干活，负责给服务员上菜。")]),v._v(" "),_("p",[v._v("这是，店里来了一个大佬，要吃东坡肉。小厨C一想，我靠，我不会做呀！总不能让客人走吧！这时，主厨说，老铁们，不慌，有我在！然后，大厨在重新安排并且指导手下的4个小弟来做这道菜。")]),v._v(" "),_("p",[v._v("对于主厨来说，小弟们可以说自己不会，但是自己却不能。其实小弟们就是数据访层，他们的操作是原子性的，不能再分割了，会的都是最基本的手艺。但是，自己是业务逻辑层，要删除或是添加一个操作，不是简单地直接删除或是添加，而是由数据访问层这些底层的功能组合起来的操作。在删除时，判断用户是否存在；在添加时，也要判断用户是否存在，防止重复操作造成数据冗余。")]),v._v(" "),_("h3",{attrs:{id:"为什么使用三层"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#为什么使用三层"}},[v._v("#")]),v._v(" 为什么使用三层？")]),v._v(" "),_("p",[v._v("使用三层架构的目的："),_("strong",[v._v("解耦")]),v._v("！！！")]),v._v(" "),_("p",[v._v("同样拿上面饭店的例子来讲：")]),v._v(" "),_("ul",[_("li",[_("p",[v._v("服务员（UI层）请假——另找服务员；")])]),v._v(" "),_("li",[_("p",[v._v("主厨（BLL层）辞职——招聘另一个主厨；")])]),v._v(" "),_("li",[_("p",[v._v("小厨（DAL）辞职——招聘另一个小厨；")])])]),v._v(" "),_("p",[v._v("【顾客反映】")]),v._v(" "),_("ol",[_("li",[_("p",[v._v("你们店服务态度不好——服务员的问题。开除服务员；")])]),v._v(" "),_("li",[_("p",[v._v("你们店菜里有虫子——主厨的问题。换厨师；")])])]),v._v(" "),_("p",[v._v("任何一层发生变化都不会影响到另外一层！！！")]),v._v(" "),_("hr"),v._v(" "),_("p",[v._v("三层架构每层之间的逻辑关系：")]),v._v(" "),_("p",[_("img",{attrs:{src:"https://blogimage-1255618592.cos.ap-chengdu.myqcloud.com/img20200318204843.png",alt:""}})]),v._v(" "),_("p",[v._v("三层架构的目的即为了“高内聚，低耦合”的思想。")]),v._v(" "),_("p",[v._v("【优点】")]),v._v(" "),_("ol",[_("li",[_("p",[v._v("开发人员可以只关注整个结构中的其中某一层；")])]),v._v(" "),_("li",[_("p",[v._v("可维护性高，可扩展性高")])]),v._v(" "),_("li",[_("p",[v._v("可以降低层与层之间的依赖；")])]),v._v(" "),_("li",[_("p",[v._v("有利于标准化；")])]),v._v(" "),_("li",[_("p",[v._v("利于各层逻辑的复用")])])]),v._v(" "),_("p",[v._v("【缺点】")]),v._v(" "),_("ol",[_("li",[_("p",[v._v("降低了系统的性能。如果不采用分层式结构，很多业务可以直接造访数据库，以此获取相应的数据，如今却必须通过中间层来完成")])]),v._v(" "),_("li",[_("p",[v._v("有时会导致"),_("strong",[v._v("级联")]),v._v("的修改，这种修改尤其体现在自上而下的方向。如果在表示层中需要增加一个功能，为保证其设计符合分层式结构，可能需要在相应的业务逻辑层和数据访问层中都增加相应的代码")])]),v._v(" "),_("li",[_("p",[v._v("增加了开发成本")])])]),v._v(" "),_("h2",{attrs:{id:"_4-mvc与三层架构的区别"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_4-mvc与三层架构的区别"}},[v._v("#")]),v._v(" 4. MVC与三层架构的区别")]),v._v(" "),_("p",[v._v("直接看图吧")]),v._v(" "),_("p",[_("img",{attrs:{src:"https://blogimage-1255618592.cos.ap-chengdu.myqcloud.com/img20200319104500.png",alt:""}})]),v._v(" "),_("p",[v._v('其实，无论是MVC还是三层架构，都是一种规范，都是奔着"'),_("strong",[v._v("高耦合，低内聚")]),v._v('"的思想来设计的。三层中的UI和Servlet来分别对应MVC中的View和Controller，业务逻辑层是来'),_("strong",[v._v("组合")]),v._v("数据访问层的原子性功能的。")]),v._v(" "),_("p",[v._v("在三层中，业务逻辑层和数据访问层要遵循面型接口编程的。这种接口定义和具体实现逻辑的分开，非常有利于后续扩展和维护！")]),v._v(" "),_("p",[v._v("可以参考一下羊哥文章，写的很通熟易懂。")]),v._v(" "),_("blockquote",[_("p",[_("a",{attrs:{href:"https://blog.csdn.net/wangshuaiwsws95/article/details/104689831",target:"_blank",rel:"noopener noreferrer"}},[_("strong",[v._v("为什么我们要面向接口编程？！")]),_("OutboundLink")],1)])]),v._v(" "),_("hr"),v._v(" "),_("p",[_("a",{attrs:{href:"http://",target:"_blank",rel:"noopener noreferrer"}},[v._v("实例来理解三层结构和MVC"),_("OutboundLink")],1)]),v._v(" "),_("p",[v._v("如果文中有论述不严谨的地方欢迎大家批评指正...")])])}),[],!1,null,null,null);_.default=r.exports}}]);