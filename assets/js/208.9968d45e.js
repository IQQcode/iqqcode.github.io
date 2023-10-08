(window.webpackJsonp=window.webpackJsonp||[]).push([[208],{534:function(v,_,t){"use strict";t.r(_);var s=t(3),a=Object(s.a)({},(function(){var v=this,_=v._self._c;return _("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[_("p",[_("img",{attrs:{src:"https://iqqcode-blog.oss-cn-beijing.aliyuncs.com/img/20200724172145.png",alt:""}})]),v._v(" "),_("h2",{attrs:{id:"_1-垃圾回收概述"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_1-垃圾回收概述"}},[v._v("#")]),v._v(" 1. 垃圾回收概述")]),v._v(" "),_("p",[v._v("关于垃圾收集有三个经典问题：")]),v._v(" "),_("ol",[_("li",[_("p",[v._v("哪些内存需要回收？")])]),v._v(" "),_("li",[_("p",[v._v("什么时候回收？")])]),v._v(" "),_("li",[_("p",[v._v("如何回收？")])])]),v._v(" "),_("p",[v._v("这三个问题，也是贯穿JVM垃圾回收学习的路线。")]),v._v(" "),_("h3",{attrs:{id:"什么是垃圾"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#什么是垃圾"}},[v._v("#")]),v._v(" 什么是垃圾")]),v._v(" "),_("p",[v._v("垃圾是指：在运行的程序中"),_("strong",[v._v("没有被任何指针指向的对象")]),v._v("，这个对象就是要被回收的垃圾。")]),v._v(" "),_("p",[v._v("如果不及时对内存中的垃圾进行清理，那么，这些垃圾对象所占的内存空间会一直保留到应用程序结束，被保留的空间无法被其他对象使用，甚至可能导致内存溢出。")]),v._v(" "),_("h3",{attrs:{id:"为什么需要gc"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#为什么需要gc"}},[v._v("#")]),v._v(" 为什么需要GC")]),v._v(" "),_("ul",[_("li",[_("p",[v._v("不进行垃圾回收，内存不断的被分配而不回收，会导致内存被耗尽")])]),v._v(" "),_("li",[_("p",[v._v("垃圾回收也可以清除内存里的碎片，以便JVM将整理出的内存分配给新的对象")])]),v._v(" "),_("li",[_("p",[v._v("没有GC就不能保证应用程序的正常执行")])])]),v._v(" "),_("blockquote",[_("p",[v._v("👉"),_("a",{attrs:{href:"https://docs.oracle.com/javase/8/docs/technotes/guides/vm/gctuning/toc.html",target:"_blank",rel:"noopener noreferrer"}},[_("strong",[v._v("Oracle-HotSpot虚拟机垃圾收集调优指南")]),_("OutboundLink")],1)])]),v._v(" "),_("h3",{attrs:{id:"对象是否存活"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#对象是否存活"}},[v._v("#")]),v._v(" 对象是否存活")]),v._v(" "),_("p",[v._v("在GC执行垃圾回收前，首先需要区分内存中哪些是存活对象，哪些是已经死亡的对象。"),_("strong",[v._v("当一个对象不再被任何存活的对象所引用时，就宣判此对象已死！垃圾对象就是已经死亡的对象")])]),v._v(" "),_("p",[v._v("垃圾回收的过程分为：")]),v._v(" "),_("ul",[_("li",[_("p",[v._v("垃圾标记阶段，判断对象是否存活")])]),v._v(" "),_("li",[_("p",[v._v("垃圾清除阶段，清除被标记为垃圾（死亡）的对象")])])]),v._v(" "),_("hr"),v._v(" "),_("h2",{attrs:{id:"_2-标记阶段-引用计数算法"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_2-标记阶段-引用计数算法"}},[v._v("#")]),v._v(" 2. 标记阶段—引用计数算法")]),v._v(" "),_("p",[v._v("判断对象是否存活有两种方式：")]),v._v(" "),_("ol",[_("li",[_("p",[_("strong",[v._v("引用计数算法")])])]),v._v(" "),_("li",[_("p",[_("strong",[v._v("可达性分析算法")])])])]),v._v(" "),_("p",[_("strong",[v._v("引用计数算法")]),v._v("：对每个独享保存一个整型的应用计数器属性，用于记录对象被引用的情况。")]),v._v(" "),_("p",[v._v("对于一个对象A：")]),v._v(" "),_("ul",[_("li",[_("p",[v._v("只要有任何一个对象引用了A，则A的引用计数器加1")])]),v._v(" "),_("li",[_("p",[v._v("引用失效时，引用计数器减1")])]),v._v(" "),_("li",[_("p",[v._v("对象A的引用计数器值为0时，表示对象A没有被使用，标记为垃圾进行回收")])])]),v._v(" "),_("p",[_("img",{attrs:{src:"https://iqqcode-blog.oss-cn-beijing.aliyuncs.com/imgs01/20200724181950.png",alt:""}})]),v._v(" "),_("p",[_("strong",[v._v("【优点】")])]),v._v(" "),_("ul",[_("li",[_("p",[v._v("实现简单，垃圾对象便于标识")])]),v._v(" "),_("li",[_("p",[v._v("判定效率高，回收没有延迟性")])])]),v._v(" "),_("p",[_("strong",[v._v("【缺点】")])]),v._v(" "),_("ul",[_("li",[_("p",[v._v("需要单独的字段存储计数器，增加内存空间的开销（影响很小，就是一个变量）")])]),v._v(" "),_("li",[_("p",[v._v("需要更新计数器的值，增加时间开销")])]),v._v(" "),_("li",[_("p",[_("font",{attrs:{color:"red"}},[v._v("致命缺陷：无法解决循环引用的问题。")]),v._v("这也是导致Java的垃圾回收器没有采用此算法的原因")],1)])]),v._v(" "),_("p",[_("strong",[v._v("循环引用：")])]),v._v(" "),_("p",[_("img",{attrs:{src:"https://iqqcode-blog.oss-cn-beijing.aliyuncs.com/imgs01/20200724182603.png",alt:""}})]),v._v(" "),_("p",[_("code",[v._v("a")]),v._v("指向了"),_("code",[v._v("next1")]),v._v("，"),_("code",[v._v("next1")]),v._v("又被"),_("code",[v._v("next3")]),v._v("指向，所以"),_("code",[v._v("rc=2")])]),v._v(" "),_("ul",[_("li",[v._v("可以理解为循环链表，"),_("code",[v._v("a")]),v._v("为链表头结点，链表成环，循环引用指向")])]),v._v(" "),_("p",[_("code",[v._v("a")]),v._v("断开了指向"),_("code",[v._v("next1")]),v._v("的指向，"),_("code",[v._v("next1")]),v._v("的"),_("code",[v._v("rc")]),v._v(" 减一。源头的指向断开，则后面的应用没有了源头的指向后，就没法找到引用来被使用了，此时应该被标记为垃圾，即"),_("code",[v._v("rc=1")]),v._v("。")]),v._v(" "),_("p",[v._v("但是，由于存在"),_("code",[v._v("next3")]),v._v("的循环指向，"),_("code",[v._v("next1")]),v._v("任然有被指向，"),_("code",[v._v("rc")]),v._v("并不等于0，可能会导致内存泄漏。这就是引用计数算法无法解决循环引用的原因。")]),v._v(" "),_("ul",[_("li",[v._v("链表的头结点被删除了，则其后面的节点虽然还连接着，但是无法被使用了。应该被标记为垃圾进行回收")])]),v._v(" "),_("p",[_("font",{attrs:{color:"red"}},[v._v("注意：这个例子用Java来说严格意义上是不正确的！因为Java采用的是可达性分析算法，而此问题说明的引用计数算法下的情形，只是为了能够更好地理解。")])],1),v._v(" "),_("blockquote",[_("p",[v._v("内存泄漏：对象已不再被使用，应该被回收，但是由于有引用的存在却无法被回收，最终导致内存占满而泄漏")])]),v._v(" "),_("p",[v._v("Java并没有选择引用计数算法，是因为其存在一个基本的难题，也就是很难处理循环引用关系。")]),v._v(" "),_("p",[v._v("Python采用的是引用计数算法。Python如何解决循环引用的呢？")]),v._v(" "),_("ol",[_("li",[_("p",[v._v("手动解除：很好理解，就是在合适的时机，解除引用关系")])]),v._v(" "),_("li",[_("p",[v._v("使用弱引用 weakref，weakref是 Python提供的标准库，旨在解决循环引用")])])]),v._v(" "),_("hr"),v._v(" "),_("h2",{attrs:{id:"_3-标记阶段-可达性分析算法"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_3-标记阶段-可达性分析算法"}},[v._v("#")]),v._v(" 3. 标记阶段—可达性分析算法")]),v._v(" "),_("p",[v._v("可达性分析算法（根搜索算法、追踪性垃圾收集），可以有效的解决引用计数算法中循环引用的问题，房子内存泄漏的发生。是Java和C#所选择的。")]),v._v(" "),_("p",[v._v("所谓 "),_("strong",[v._v('"GC Roots" 根集合就是一组必须活跃的引用')]),v._v("。")]),v._v(" "),_("p",[_("img",{attrs:{src:"https://iqqcode-blog.oss-cn-beijing.aliyuncs.com/imgs01/20200724192846.png",alt:""}})]),v._v(" "),_("p",[v._v("由GC Roots根集合直接或间接相连的对象，称为"),_("strong",[v._v("可达")]),v._v("。"),_("code",[v._v("Object5")]),v._v("虽然有引用指向，但是GC Roots不可达，仍然标记为垃圾对象。")]),v._v(" "),_("p",[_("strong",[v._v("【基本思路】")])]),v._v(" "),_("ul",[_("li",[_("p",[v._v("可达性分析算法是以根对象集合（GC Roots）为起始点，按照从上至下的方式"),_("strong",[v._v("搜索被根对象集合所连接的目标对象是否可达")])])]),v._v(" "),_("li",[_("p",[v._v("使用可达性分析算法后，内存中的存活对象都会被根对象集合直接或间接连接着，搜索所走过的路径称为"),_("mark",[v._v("引用链")]),v._v("（ Reference chain）")])]),v._v(" "),_("li",[_("p",[v._v("如果目标对象没有任何引用链相连，则是不可达的，就意味着该对象己经死亡，可以标记为垃圾对象。")])]),v._v(" "),_("li",[_("p",[v._v("在可达性分析算法中，只有能够被根对象集合"),_("strong",[v._v("直接或者间接连接的对象")]),v._v("才是存活对象")])])]),v._v(" "),_("h3",{attrs:{id:"gc-roots"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#gc-roots"}},[v._v("#")]),v._v(" GC Roots")]),v._v(" "),_("p",[v._v("在Java中，GC Roots包括以下几类：")]),v._v(" "),_("p",[_("strong",[v._v("1. 虚拟机栈中引用的对象")])]),v._v(" "),_("ul",[_("li",[v._v("局部变量表中的内容，包括方法参数、局部变量")])]),v._v(" "),_("p",[_("strong",[v._v("2. 类的静态属性")])]),v._v(" "),_("ul",[_("li",[v._v("引用类型的静态变量，JDK8及之后存储在堆上")])]),v._v(" "),_("p",[_("strong",[v._v("3. 方法区中的字符串常量池")])]),v._v(" "),_("ul",[_("li",[v._v("String Table中的引用")])]),v._v(" "),_("p",[_("strong",[v._v("4. 被synchronized所持有的对象")])]),v._v(" "),_("p",[_("strong",[v._v("5. 局部的GC Roots--Remember Set")])]),v._v(" "),_("ul",[_("li",[v._v("如：老年代的对象被新生代所引用")])]),v._v(" "),_("p",[_("strong",[v._v("6. 常驻的异常类对象（空指针、OOM）、系统类加载器")])]),v._v(" "),_("p",[v._v("【小结】")]),v._v(" "),_("p",[v._v("由于Root采用栈方式存放变量和指针，所以如果一个指针，它保存了堆内存里面的对象，但是自己又不存放在堆上，则它就是一个Root。")]),v._v(" "),_("h3",{attrs:{id:"查看gc-roots"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#查看gc-roots"}},[v._v("#")]),v._v(" 查看GC Roots")]),v._v(" "),_("p",[v._v("MAT是 Memory Analyzer的简称，它是一款功能强大的Java堆内存分析器。"),_("strong",[v._v("用于査找内存泄漏以及査看内存消耗情况")]),v._v("。")]),v._v(" "),_("p",[_("strong",[v._v("【使用】")])]),v._v(" "),_("p",[v._v("生成内存区域的运行时快照----"),_("code",[v._v("dump")]),v._v("文件")]),v._v(" "),_("div",{staticClass:"language-java line-numbers-mode"},[_("pre",{pre:!0,attrs:{class:"language-java"}},[_("code",[v._v("jps    "),_("span",{pre:!0,attrs:{class:"token comment"}},[v._v("//查看当前进程")]),v._v("\njmap   "),_("span",{pre:!0,attrs:{class:"token comment"}},[v._v("//生成dump文件    ")]),v._v("\n")])]),v._v(" "),_("div",{staticClass:"line-numbers-wrapper"},[_("span",{staticClass:"line-number"},[v._v("1")]),_("br"),_("span",{staticClass:"line-number"},[v._v("2")]),_("br")])]),_("br"),v._v(" "),_("h3",{attrs:{id:"并发标记-三色标记法"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#并发标记-三色标记法"}},[v._v("#")]),v._v(" 并发标记-三色标记法")]),v._v(" "),_("p",[v._v("要找出存活对象，根据可达性分析，从GC Roots开始进行遍历访问，可达的则为存活对象：")]),v._v(" "),_("p",[_("img",{attrs:{src:"https://iqqcode-blog.oss-cn-beijing.aliyuncs.com/img-2021-later/20210621204307.png",alt:"img"}})]),v._v(" "),_("p",[v._v("我们把遍历对象图过程中遇到的对象，按“是否访问过”这个条件标记成以下三种颜色：")]),v._v(" "),_("p",[_("img",{attrs:{src:"https://iqqcode-blog.oss-cn-beijing.aliyuncs.com/img-2021-later/20210621204311.png",alt:"img"}})]),v._v(" "),_("p",[_("strong",[v._v("白色")]),v._v("：尚未访问过。")]),v._v(" "),_("p",[_("strong",[v._v("黑色")]),v._v("：本对象已访问过，而且本对象 引用到 的其他对象 也"),_("code",[v._v("全部访问过")]),v._v("了。 (自己标记完了，自己的孩子（包括多个孩子）也标记完了，都不是垃圾)")]),v._v(" "),_("p",[_("strong",[v._v("灰色")]),v._v("：本对象已访问过，但是本对象 引用到 的其他对象 尚"),_("code",[v._v("未全部访问")]),v._v("完。全部访问后，会转换为黑色。(自己标记完了，自己的孩子（包括多个孩子）没有标记)")]),v._v(" "),_("p",[_("img",{attrs:{src:"https://iqqcode-blog.oss-cn-beijing.aliyuncs.com/img-2021-later/20210621204450.gif",alt:""}})]),v._v(" "),_("h3",{attrs:{id:"三色标记过程"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#三色标记过程"}},[v._v("#")]),v._v(" 三色标记过程")]),v._v(" "),_("p",[v._v("假设现在有白、灰、黑三个集合（表示当前对象的颜色），其遍历访问过程为：")]),v._v(" "),_("ol",[_("li",[v._v("初始时，所有对象都在 【白色集合】中；")]),v._v(" "),_("li",[v._v("将GC Roots 直接引用到的对象 挪到 【灰色集合】中；")]),v._v(" "),_("li",[v._v("从灰色集合中获取对象：\n"),_("ul",[_("li",[v._v("将本对象 引用到的 其他对象 全部挪到 【灰色集合】中；")]),v._v(" "),_("li",[v._v("将本对象 挪到 【黑色集合】里面。")])])]),v._v(" "),_("li",[v._v("重复步骤3，直至【灰色集合】为空时结束。")]),v._v(" "),_("li",[v._v("结束后，仍在【白色集合】的对象即为GC Roots 不可达，可以进行回收。")])]),v._v(" "),_("blockquote",[_("p",[v._v("注：如果标记结束后对象仍为白色，意味着已经“找不到”该对象在哪了，不可能会再被重新引用。")])]),v._v(" "),_("p",[v._v("当Stop The World （以下简称 STW）时，对象间的引用 是不会发生变化的，可以轻松完成标记。")]),v._v(" "),_("p",[v._v("而当需要支持并发标记时，即标记期间应用线程还在继续跑，对象间的引用可能发生变化，"),_("strong",[v._v("多标和漏标的情况就有可能发生")]),v._v("。")]),v._v(" "),_("blockquote",[_("p",[_("a",{attrs:{href:"https://www.jianshu.com/p/12544c0ad5c1",target:"_blank",rel:"noopener noreferrer"}},[v._v("📌三色标记法与读写屏障"),_("OutboundLink")],1)])]),v._v(" "),_("hr"),v._v(" "),_("h2",{attrs:{id:"_4-对象的finalize机制"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_4-对象的finalize机制"}},[v._v("#")]),v._v(" 4. 对象的finalize机制")]),v._v(" "),_("p",[_("strong",[v._v("对象的finalize机制")]),v._v("：对象被销毁之前的自定义逻辑处理（这个对象能否自我挽救）")]),v._v(" "),_("p",[v._v("由于每一个对象都可能会被垃圾回收器回收，所以每个对象皆具有此机制，那么它是公共类的方法，定义在Object类中的"),_("code",[v._v("finalize()")]),v._v("方法")]),v._v(" "),_("p",[_("img",{attrs:{src:"https://iqqcode-blog.oss-cn-beijing.aliyuncs.com/imgs01/20200724200231.png",alt:""}})]),v._v(" "),_("ul",[_("li",[_("p",[v._v("当垃圾回收器发现没有引用指向一个对象，即：垃圾回收此对象之前，总会先调用这个对象的"),_("code",[v._v("finalize()")]),v._v("方法")])]),v._v(" "),_("li",[_("p",[_("code",[v._v("finalize()")]),v._v("方法允许在子类中被重写，用于在对象被回收时进行资源释放。通常在这个方法中进行一些资源释放和清理的工作，比如关闭文件、套接字和数据库连接等")])])]),v._v(" "),_("p",[_("strong",[v._v("Q & A 🤔：对象的finalize机制到底是干嘛的？")])]),v._v(" "),_("ul",[_("li",[v._v("就是给临死前的对象一个自我拯救的机会，将死之对象调用"),_("code",[v._v("finalize()")]),v._v("能否自救")])]),v._v(" "),_("p",[_("strong",[v._v("Q & A 🤨：对象怎么才能自救？")])]),v._v(" "),_("ul",[_("li",[v._v("必须覆写"),_("code",[v._v("finalize()")]),v._v("方法，否则无法自救，因为源码该方法是空实现，不覆写不会做任何操作")])]),v._v(" "),_("h3",{attrs:{id:"生存-还是死亡"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#生存-还是死亡"}},[v._v("#")]),v._v(" 生存？还是死亡")]),v._v(" "),_("p",[_("code",[v._v("finalize()")]),v._v("方法源码：")]),v._v(" "),_("p",[_("img",{attrs:{src:"https://iqqcode-blog.oss-cn-beijing.aliyuncs.com/imgs01/20200724204210.png",alt:""}})]),v._v(" "),_("p",[_("strong",[v._v("永远不要主动调用")]),v._v("某个对象的"),_("code",[v._v("finalize()")]),v._v("方法，应该交给垃圾回收器调用。")]),v._v(" "),_("p",[v._v("理由包括下面三点：")]),v._v(" "),_("ol",[_("li",[_("p",[v._v("在"),_("code",[v._v("finalize()")]),v._v("时可能会导致对象复活")])]),v._v(" "),_("li",[_("p",[_("code",[v._v("finalize()")]),v._v("方法的执行时间是没有保障的，它完由GC线程所决定。若不发生GC，则 "),_("code",[v._v("finalize()")]),v._v("方法将没有机会执行。")])]),v._v(" "),_("li",[_("p",[v._v("一个糟糕的"),_("code",[v._v("finalize()")]),v._v("方法会严重影响GC的性能（如果覆写的finalize产生了死循环）")])])]),v._v(" "),_("p",[v._v("如果从所有的根节点都无法访问到某个对象，说明对象己经不再使用了。一般来说此对象需要被回收。但事实上，也并非是“非死不可”的，这时候它们暂时处于"),_("strong",[v._v("死缓阶段")]),v._v("。")]),v._v(" "),_("p",[_("img",{attrs:{src:"https://iqqcode-blog.oss-cn-beijing.aliyuncs.com/imgs01/20200724205205.png",alt:""}})]),v._v(" "),_("p",[v._v("一个无法触及的对象有可能在某一个条件下"),_("strong",[v._v("复活自己")]),v._v("，如果这样，那么对它的回收就是不合理的。")]),v._v(" "),_("blockquote",[_("p",[_("strong",[v._v("复活")]),v._v("指的是对象又有引用被指向了，    可复活对象与可触及对象产生了引用链，GC Roots可达")])]),v._v(" "),_("p",[v._v("由于"),_("code",[v._v("finalize()")]),v._v("方法的存在，"),_("font",{attrs:{color:"red"}},[v._v("虚拟机中的对象一般处于三种可能的状态：")])],1),v._v(" "),_("ul",[_("li",[_("p",[_("strong",[v._v("可触及的")]),v._v("。从根节点开始，对象可达")])]),v._v(" "),_("li",[_("p",[_("strong",[v._v("可复活的")]),v._v("。对象无引用被指向，但仍可能在调用了"),_("code",[v._v("finalize()")]),v._v("后复活")])]),v._v(" "),_("li",[_("p",[_("strong",[v._v("不可触及的")]),v._v("。调用了"),_("code",[v._v("finalize()")]),v._v("后，自救失败！")])])]),v._v(" "),_("p",[v._v("【注意】：")]),v._v(" "),_("p",[_("font",{attrs:{color:"blue"}},[v._v("对象的"),_("code",[v._v("finalize()")]),v._v("只会被调用一次")]),v._v("，自救失败后就变成了垃圾对象进而被回收。")],1),v._v(" "),_("hr"),v._v(" "),_("h2",{attrs:{id:"_5-stw"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_5-stw"}},[v._v("#")]),v._v(" 5. STW")]),v._v(" "),_("p",[v._v("当成功区分出内存中存活对象和死亡对象后，GC接下来的任务就是执行垃圾回收，释放掉无用对象所占用的内存空间，以便有足够的可用内存空间为新对象分配内存。")]),v._v(" "),_("p",[v._v("目前在JVM中比较常见的三种垃圾收集算法是:")]),v._v(" "),_("ul",[_("li",[_("p",[v._v("标记一清除算法Mark Sweep")])]),v._v(" "),_("li",[_("p",[v._v("复制算法Copying、")])]),v._v(" "),_("li",[_("p",[v._v("标记一整理算法Mark Compact")])])]),v._v(" "),_("p",[v._v("Java中 Stop-The-World 机制简称"),_("strong",[v._v("STW")]),v._v("，是在执行垃圾收集算法时，Java应用程序的其他所有线程都被挂起（除了垃圾收集器之外）。")]),v._v(" "),_("p",[v._v("STW是Java中一种"),_("strong",[v._v("全局暂停现象")]),v._v("，全局停顿，所有Java代码停止，native代码可以执行，但不能与JVM交互。")]),v._v(" "),_("p",[_("strong",[v._v("GC时为什么会有全局停顿？")])]),v._v(" "),_("p",[_("u",[v._v("为了保证一致性。")])]),v._v(" "),_("p",[v._v("类比在聚会时打扫房间，聚会时很乱，又有新的垃圾产生，房间永远打扫不干净，只有让大家停止活动了，才能将房间打扫干净。")]),v._v(" "),_("p",[v._v("当GC线程在处理垃圾的时候，其它Java线程要停止才能彻底清除干净，否则会影响GC线程的处理效率增加GC线程负担，特别是在垃圾标记的时候。")]),v._v(" "),_("hr"),v._v(" "),_("h2",{attrs:{id:"_6-清除阶段-标记-清除算法"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_6-清除阶段-标记-清除算法"}},[v._v("#")]),v._v(" 6. 清除阶段：标记—清除算法")]),v._v(" "),_("p",[_("strong",[v._v("标记—清除算法Mark Sweep")]),v._v("：当堆空间中有效的内存空间被耗尽时，JVM会停止整个程序，即STW。然后进行两项工作：")]),v._v(" "),_("ul",[_("li",[_("p",[v._v("标记")])]),v._v(" "),_("li",[_("p",[v._v("清除")])])]),v._v(" "),_("p",[_("img",{attrs:{src:"https://iqqcode-blog.oss-cn-beijing.aliyuncs.com/imgs01/20200724214640.png",alt:""}})]),v._v(" "),_("p",[_("strong",[v._v("【核心思想】")])]),v._v(" "),_("p",[_("strong",[v._v("标记：")]),v._v(" Collector从引用GC Roots开始"),_("strong",[v._v("递归遍历")]),v._v("，标记所有 "),_("font",{attrs:{color:"red"}},[_("strong",[v._v("被引用的可达对象")])])],1),v._v(" "),_("p",[_("strong",[v._v("清除：")]),v._v(" Collector对堆内存"),_("strong",[v._v("从头到尾进行线性遍历")]),v._v("，如果发现某个对象在Header中没有标记为可达，则将其回收")]),v._v(" "),_("ul",[_("li",[v._v("两次遍历的时间复杂度均近似为"),_("code",[v._v("O(n)")])])]),v._v(" "),_("blockquote",[_("p",[v._v("为什么标记的是可达的对象？")]),v._v(" "),_("ul",[_("li",[v._v("因为不可达的对象可能不连续，无法关联。标记了可达的对象之后，通过线性遍历清除"),_("em",[v._v("未被标记")]),v._v("的“不可达对象”")])])]),v._v(" "),_("p",[_("strong",[v._v("Q & A：何为清除？")])]),v._v(" "),_("p",[v._v("这里所谓的清除并不是真的置空，而是把需要清除的对象地址保存在空的地址列表里。下次有新对象需要加载时，判断垃圾的位置空间是否够，如果够，就"),_("strong",[v._v("覆盖存放")]),v._v("。")]),v._v(" "),_("p",[_("strong",[v._v("清除指的是覆盖。")])]),v._v(" "),_("blockquote",[_("p",[v._v("🖥这一点可以类比我们的操作系统的文件删除。我们把文件误删了，但是还是能通过文件恢复工具将其恢复。我们并不是真正意义上的“删除”，只是将存储的文件的引用指向的指针删除了，真实的文件还在📖。等到再次在这块地址上存放文件时，将原有的覆盖。")])]),v._v(" "),_("p",[_("strong",[v._v("【缺点】")])]),v._v(" "),_("ul",[_("li",[_("p",[v._v("效率不算高")])]),v._v(" "),_("li",[_("p",[v._v("在进行GC时，会有STW，用户线程体验差")])]),v._v(" "),_("li",[_("p",[v._v("可能产生内存的碎片化，需要维护"),_("strong",[v._v("空闲列表")])])])]),v._v(" "),_("p",[_("img",{attrs:{src:"https://iqqcode-blog.oss-cn-beijing.aliyuncs.com/imgs01/20200724215513.png",alt:""}})]),v._v(" "),_("p",[_("strong",[v._v("对象分配内存的策略：")])]),v._v(" "),_("ul",[_("li",[_("p",[v._v("如果内存完整🌕——指针碰撞")])]),v._v(" "),_("li",[_("p",[v._v("如果内存不完整🌛——空闲列表")])])]),v._v(" "),_("p",[v._v("显然，通过标记—清除算法回收的碎片化的内存，只能通过空闲列表来为对象分配内存。如果要分配大对象时，可能无法对象的创建和初始化。")]),v._v(" "),_("hr"),v._v(" "),_("h2",{attrs:{id:"_7-清除阶段-复制算法"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_7-清除阶段-复制算法"}},[v._v("#")]),v._v(" 7. 清除阶段：复制算法")]),v._v(" "),_("p",[_("strong",[v._v("复制算法Copying")]),v._v("：为了解决标记—清除算法在垃圾回收效率方面的缺陷。")]),v._v(" "),_("p",[_("img",{attrs:{src:"https://iqqcode-blog.oss-cn-beijing.aliyuncs.com/imgs01/20200724222237.png",alt:""}})]),v._v(" "),_("p",[_("strong",[v._v("【核心思想】")])]),v._v(" "),_("ul",[_("li",[_("p",[v._v("将内存空间划分为两大块，每次只使用其中一块")])]),v._v(" "),_("li",[_("p",[v._v("将存活的可达对象"),_("strong",[v._v("复制")]),v._v("（深拷贝）到未被使用的内存块，并且清理正在使用的内存块中的"),_("font",{attrs:{color:"red"}},[_("strong",[v._v("所有对象")])])],1)]),v._v(" "),_("li",[_("p",[v._v("交换两个内存块的角色，完成垃圾回收")])])]),v._v(" "),_("p",[v._v("复制到另一块内存时，可达对象是紧密排列的。")]),v._v(" "),_("p",[v._v("连续的内存空间，在对象创建分配内存时，是通过"),_("strong",[v._v("指针碰撞")]),v._v("的方式进行的。")]),v._v(" "),_("p",[_("strong",[v._v("【优点】")])]),v._v(" "),_("ul",[_("li",[_("p",[v._v("没有标记和清除的过程，实现简单，运行高效")])]),v._v(" "),_("li",[_("p",[v._v("复制后保证了连续的空间，不会出现“碎片问题”")])])]),v._v(" "),_("p",[_("strong",[v._v("【缺点】")])]),v._v(" "),_("ul",[_("li",[_("p",[v._v("需要两倍的内存空间")])]),v._v(" "),_("li",[_("p",[v._v("像G1这样要拆分成大量"),_("code",[v._v("region")]),v._v("的GC，复制意味着GC需要维护"),_("code",[v._v("region")]),v._v("与对象之间的关系，都需要耗费内存占用和时间开销")])])]),v._v(" "),_("h2",{attrs:{id:"【java对象的访问方式】"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#【java对象的访问方式】"}},[v._v("#")]),v._v(" 【Java对象的访问方式】")]),v._v(" "),_("p",[v._v("因为Java对象引用的访问方式是"),_("strong",[v._v("直接访问")]),v._v("，而不是句柄池方式访问。")]),v._v(" "),_("p",[v._v("所以堆上的对象再移动了位置之后，变量的引用地址发生了改变，需要重新关联起来。")]),v._v(" "),_("p",[_("img",{attrs:{src:"https://iqqcode-blog.oss-cn-beijing.aliyuncs.com/imgs01/20200725074232.png",alt:""}})]),v._v(" "),_("ul",[_("li",[_("p",[v._v("直接访问：局部变量表中的变量直接关联实例对象")])]),v._v(" "),_("li",[_("p",[v._v("句柄池访问：局部变量表中的变量先关联句柄池，句柄池存放的是对象实例数据的指针，通过句柄池再映射到实例对象")])])]),v._v(" "),_("p",[_("img",{attrs:{src:"https://iqqcode-blog.oss-cn-beijing.aliyuncs.com/imgs01/20200725073715.png",alt:""}})]),v._v(" "),_("p",[_("img",{attrs:{src:"https://iqqcode-blog.oss-cn-beijing.aliyuncs.com/imgs01/20200725073603.png",alt:""}})]),v._v(" "),_("p",[_("strong",[v._v("【过犹不及】")])]),v._v(" "),_("p",[v._v("如果系统中的存活对象多于垃圾对象时，复制算法反而更加低效，因为清理的垃圾很少，却需要消耗大量的时间和空间来拷贝存活的对象，还需要额外维护对象"),_("code",[v._v("region")]),v._v("与对象之间的映射关系，相当于在做无用功。")]),v._v(" "),_("p",[v._v("举个极端的例子：")]),v._v(" "),_("p",[_("img",{attrs:{src:"https://iqqcode-blog.oss-cn-beijing.aliyuncs.com/imgs01/20200725074547.png",alt:""}})]),v._v(" "),_("p",[v._v("这样复制的意义就不是很大，回收效率很低。")]),v._v(" "),_("hr"),v._v(" "),_("h2",{attrs:{id:"_8-清除阶段-标记-整理算法"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_8-清除阶段-标记-整理算法"}},[v._v("#")]),v._v(" 8. 清除阶段：标记—整理算法")]),v._v(" "),_("p",[_("strong",[v._v("标记—整理算法Mark Compact")]),v._v("：")]),v._v(" "),_("p",[_("mark",[v._v("复制算法")]),v._v("的高效性是建立在"),_("font",{attrs:{color:"red"}},[_("strong",[v._v("存活对象少、垃圾对象多")])]),v._v("的前提下的。这种情况在新生代经常发生，但是在老年代，更常见的情况是大部分对象都是存活对象。如果依然使用复制算法，由于存活对象较多，复制的成本也将很高。")],1),v._v(" "),_("p",[_("mark",[v._v("标记一清除算法")]),v._v("的确可以应用在老年代中，但是该算法不仅执行效率低下而且在执行完内存回收后还会产生内存碎片，所以JVM的设计者需要在此基础之上进行改进因此，基于老年代垃圾回收的特性，标记—整理（压缩）算法（Mark- Compact）算法由此诞生。")]),v._v(" "),_("p",[_("img",{attrs:{src:"https://iqqcode-blog.oss-cn-beijing.aliyuncs.com/imgs01/20200725080330.png",alt:""}})]),v._v(" "),_("p",[v._v("【执行过程】")]),v._v(" "),_("ul",[_("li",[_("p",[v._v("第一阶段：和标记—清除算法一样，从根节点递归标记所有可达的对象")])]),v._v(" "),_("li",[_("p",[v._v("第二阶段：将所有的存活对象压缩到内存的一端，按序排放。之后清除边界外的垃圾对象")])])]),v._v(" "),_("p",[v._v("标记-压缩算法的最终效果等同于标记-清除算法执行完成后，再进行一次内存碎片整理，因此，也可以把它称为"),_("strong",[v._v("标记-清除-压缩（Mark- Sweep Compact）算法")])]),v._v(" "),_("p",[v._v("二者的本质差异在于标记-清除算法是一种"),_("font",{attrs:{color:"[[E86862]]"}},[v._v("非移动式")]),v._v("的回收算法，标记-压缩是"),_("font",{attrs:{color:"[[E86862]]"}},[v._v("移动式")]),v._v("的。是否移动回收后的存活对象是一项优缺点并存的风险决策")],1),v._v(" "),_("p",[v._v("可以看到，标记的存活对象将会被整理，按照内存地址依次排列，而未被标记的内存会被清理掉。如此一来，当我们需要给新对象分配内存时， "),_("strong",[v._v("JVM只需要持有一个内存的起始地址即可")]),v._v("，这比维护一个空闲列表显然少了许多开销。")]),v._v(" "),_("p",[_("strong",[v._v("【优点】")])]),v._v(" "),_("ul",[_("li",[_("p",[v._v("解决了标记-清除算法中碎片化的缺点")])]),v._v(" "),_("li",[_("p",[v._v("解决了复制算法中内存减半的缺点")])])]),v._v(" "),_("p",[_("strong",[v._v("【缺点】")])]),v._v(" "),_("ul",[_("li",[_("p",[v._v("相对于其他两种算法，效率最低")])]),v._v(" "),_("li",[_("p",[v._v("移动对象的同时，还需要调整"),_("code",[v._v("region")]),v._v("与对象的映射关系")])]),v._v(" "),_("li",[_("p",[v._v("会产生STW")])])]),v._v(" "),_("hr"),v._v(" "),_("h2",{attrs:{id:"_9-三种算法的对比及应用"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_9-三种算法的对比及应用"}},[v._v("#")]),v._v(" 9. 三种算法的对比及应用")]),v._v(" "),_("h3",{attrs:{id:"对比"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#对比"}},[v._v("#")]),v._v(" 对比")]),v._v(" "),_("p",[_("strong",[v._v("没有最好的算法，只有最合适的算法")]),v._v("。三种清除阶段的算法都有各自的优缺点，都有其特定的应用场景。")]),v._v(" "),_("table",[_("thead",[_("tr",[_("th",{staticStyle:{"text-align":"center"}},[v._v("衡量指标")]),v._v(" "),_("th",{staticStyle:{"text-align":"center"}},[v._v("Mark-Sweep")]),v._v(" "),_("th",{staticStyle:{"text-align":"center"}},[v._v("Copying")]),v._v(" "),_("th",{staticStyle:{"text-align":"center"}},[v._v("Mark-Compect")])])]),v._v(" "),_("tbody",[_("tr",[_("td",{staticStyle:{"text-align":"center"}},[v._v("速度")]),v._v(" "),_("td",{staticStyle:{"text-align":"center"}},[v._v("中")]),v._v(" "),_("td",{staticStyle:{"text-align":"center"}},[v._v("快")]),v._v(" "),_("td",{staticStyle:{"text-align":"center"}},[v._v("慢")])]),v._v(" "),_("tr",[_("td",{staticStyle:{"text-align":"center"}},[v._v("空间开销")]),v._v(" "),_("td",{staticStyle:{"text-align":"center"}},[v._v("少（堆积碎片）")]),v._v(" "),_("td",{staticStyle:{"text-align":"center"}},[v._v("少（不堆积碎片）")]),v._v(" "),_("td",{staticStyle:{"text-align":"center"}},[v._v("2倍开销（不堆积碎片）")])]),v._v(" "),_("tr",[_("td",{staticStyle:{"text-align":"center"}},[v._v("移动对象")]),v._v(" "),_("td",{staticStyle:{"text-align":"center"}},[v._v("❌")]),v._v(" "),_("td",{staticStyle:{"text-align":"center"}},[v._v("✔")]),v._v(" "),_("td",{staticStyle:{"text-align":"center"}},[v._v("✔")])])])]),v._v(" "),_("h3",{attrs:{id:"应用"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#应用"}},[v._v("#")]),v._v(" 应用")]),v._v(" "),_("p",[_("strong",[v._v("标记—清除算法")])]),v._v(" "),_("p",[v._v("标记清除算法的效率是介于标记整理算法和复制算法之间的，由于其逻辑和实现简单，常常配合标记整理算法作为复合算法来使用")]),v._v(" "),_("p",[_("strong",[v._v("复制算法")])]),v._v(" "),_("p",[v._v("复制算法的特点是需要将内存分为两个区间，并且垃圾对象要多于存活对象。结合这两个显著的特点，典型的应用是在"),_("strong",[v._v("新生代")]),v._v("里应用。")]),v._v(" "),_("p",[_("img",{attrs:{src:"https://iqqcode-blog.oss-cn-beijing.aliyuncs.com/imgs01/20200725085042.png",alt:""}})]),v._v(" "),_("ul",[_("li",[_("p",[v._v("Eden区存放新对象，大部分对象都是朝生夕死，满足垃圾对象多于存活对象的特点")])]),v._v(" "),_("li",[_("p",[v._v("Survivor区分为"),_("code",[v._v("from")]),v._v("去和"),_("code",[v._v("to")]),v._v("区，并且空间占比很小，不会造成很大程度上的浪费。满足了复制算法分区的特点")])])]),v._v(" "),_("p",[_("strong",[v._v("标记—整理算法")])]),v._v(" "),_("p",[v._v("标记—整理算法典型的应用是在"),_("strong",[v._v("老年代")]),v._v("。")]),v._v(" "),_("ul",[_("li",[_("p",[v._v("老年代对象存活周期长，存活对象多于垃圾对象，适合标记算法")])]),v._v(" "),_("li",[_("p",[v._v("老年代空间大，适合存放大对象，所以需要连续的空间，要避免“碎片化”。标记整理算法的整理阶段很好的解决了这一问题")])])]),v._v(" "),_("hr"),v._v(" "),_("h2",{attrs:{id:"_10-复合算法-分代收集算法"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_10-复合算法-分代收集算法"}},[v._v("#")]),v._v(" 10. 复合算法：分代收集算法")]),v._v(" "),_("p",[v._v("前面所有这些算法中，并没有一种算法可以完全替代其他算法，它们都具有自己独特的优势和特点。分代收集算法是一种复合算法，它不是全新的算法，而是将三种基础的清除算法取长补短整合起来。")]),v._v(" "),_("p",[v._v("复合算法：解决的是用户线程和GC线程之间的冲突问题，提高垃圾回收器的效率")]),v._v(" "),_("br"),v._v(" "),_("p",[_("strong",[v._v("分代收集算法")]),v._v("：不同的对象的生命周期是不一样的。因此，不同生命周期的对象可以采取不同的收集方式，以便提高回收效率。")]),v._v(" "),_("p",[_("strong",[v._v("目前几乎所有的GC都是采用分代收集（ Generational Collection）算法执行垃圾回收的")])]),v._v(" "),_("p",[v._v("一般是把Java堆分为新生代和老年代，这样就可以根据各个年代的特点使用不同的回收算法，以提高垃圾回收的效率。")]),v._v(" "),_("ul",[_("li",[_("p",[v._v("如Http请求中的 Session对象、线程、 Socket连接、IO流，这类对象跟业务挂钩，因此生命周期比较长")])]),v._v(" "),_("li",[_("p",[v._v("但是还有一些对象，主要是程序运行过程中生成的临时变量，这些对象生命周期会比较短。比如：String对象，由于其不变类的特性，系统会产生大量的这些对象，有些对象甚至只用一次即可回收。")])])]),v._v(" "),_("hr"),v._v(" "),_("p",[v._v("【新生代Yang Gen】：区域相对较小，对象朝生夕死、回收频繁")]),v._v(" "),_("ul",[_("li",[v._v("[x] 复制算法")])]),v._v(" "),_("p",[v._v("【老年代Tenured Gen】：区域相对较大，对象生命周期长、回收不频繁")]),v._v(" "),_("ul",[_("li",[v._v("[x] 标记—清除—整理复合算法")]),v._v(" "),_("li",[v._v("Mark阶段的开销与存活对象的数量成正比")]),v._v(" "),_("li",[v._v("Sweep阶段的开销与所管理区域的大小成正相关")]),v._v(" "),_("li",[v._v("Compact阶段的开销与存活对象的数据成正比")])]),v._v(" "),_("hr"),v._v(" "),_("h2",{attrs:{id:"_11-复合算法-增量收集算法"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_11-复合算法-增量收集算法"}},[v._v("#")]),v._v(" 11. 复合算法：增量收集算法")]),v._v(" "),_("p",[v._v("上述现有的算法，在垃圾回收过程中，应用软件将处于一种 "),_("strong",[v._v("Stop the World")]),v._v("的状态。")]),v._v(" "),_("p",[v._v("在 Stop the World状态下，"),_("strong",[v._v("应用程序所有的线程都会挂起")]),v._v("，暂停切正常的工作，等待垃圾回收的完成。如果垃圾回收时间过长，应用程序会被挂起很久，将严重影响用户体验或者系统的稳定性。")]),v._v(" "),_("p",[_("strong",[v._v("增量收集（ Incremental Collection）算法的诞生就是为了解决STW问题")])]),v._v(" "),_("blockquote",[_("p",[v._v("【举个例子】：双十一你喜欢的商品即将开抢，但是此时由于你的淘宝突然处于刷新等待状态，一直持续了一分钟的停顿。在这个拼手速的时刻，一寸光阴一寸金呀，看着羊毛被薅走，你什么心情🙃")])]),v._v(" "),_("br"),v._v(" "),_("p",[_("strong",[v._v("【基本思想】")])]),v._v(" "),_("p",[v._v("如果一次性将所有的垃圾进行处理，需要造成系统长时间的停顿，那么就可以让垃圾收集线程和应用程序线程"),_("strong",[v._v("交替执行")]),v._v("。"),_("strong",[v._v("每次，垃圾收集线程只收集一小片区域的内存空间，接着切换到应用程序线程")]),v._v("。依次反复，直到垃圾收集完成。")]),v._v(" "),_("p",[v._v("总的来说，增量收集算法的基础仍是传统的"),_("strong",[v._v("标记-清除-整理和复制算法")]),v._v("。增量收集算法通过对线程间冲突的妥善处理，"),_("strong",[v._v("允许垃圾收集线程以分阶段的方式完成标记、清理或复制工作")]),v._v("。")]),v._v(" "),_("blockquote",[_("p",[v._v("好比你攒了一个月的脏衣服和一周的脏衣服，虽然穿新都很爽，但是洗衣火葬场🤣")])]),v._v(" "),_("p",[_("strong",[v._v("【缺点】")]),v._v("：频繁的切换用户线程和GC线程，"),_("font",{attrs:{color:"blue"}},[v._v("造成系统吞吐量的下降")])],1),v._v(" "),_("p",[v._v("垃圾回收器的衡量指标：")]),v._v(" "),_("ul",[_("li",[_("p",[v._v("低延迟")])]),v._v(" "),_("li",[_("p",[v._v("吞吐量")])])]),v._v(" "),_("blockquote",[_("p",[v._v("就好比算法的时间复杂度和空间复杂度，二者不可兼得，只能尽可能的去平衡")])]),v._v(" "),_("hr"),v._v(" "),_("h2",{attrs:{id:"_12-复合算法-分区算法"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_12-复合算法-分区算法"}},[v._v("#")]),v._v(" 12. 复合算法：分区算法")]),v._v(" "),_("p",[_("strong",[v._v("增量算法基于分时，分区算法是基于分区")]),v._v("。采用回收小区间的策略解决STW问题。")]),v._v(" "),_("p",[v._v("在相同条件下，堆空间越大，一次GC时所需要的时间就越长，有关GC产的停顿也越长。为了更好地控制GC产生的停顿时间，将一块大的内存区域分割成多小块，根据目标的停顿时间，每次合理地回收若干个小区间，而不是整个堆空间，而减少一次GC所产生的停顿。")]),v._v(" "),_("p",[v._v("为了避免STW，提出了增量算法，在时间上CPU切换用户线程和GC线程，达到低延时的效果。如果增量算法回收很大一块内存区域，如老年代，反反复复可能需要很多次才能完成。")]),v._v(" "),_("p",[_("img",{attrs:{src:"https://iqqcode-blog.oss-cn-beijing.aliyuncs.com/imgs01/20200725094105.png",alt:""}})]),v._v(" "),_("p",[_("strong",[v._v("分区算法")]),v._v("：将按照对象的生命周期长短划分成两个部分，分区算法将整个堆空间划分成连续的不同小区间region。"),_("strong",[v._v("每一个小区间都独立使用，独立回收")]),v._v("。")]),v._v(" "),_("p",[v._v("这种算法的好处是可以控制一次回收多少个小区间。G1垃圾回收器采用的就是分区算法。")]),v._v(" "),_("hr"),v._v(" "),_("p",[v._v("目前还在发展中的前沿GC都是复合算法，兼备并行和并发。")])])}),[],!1,null,null,null);_.default=a.exports}}]);