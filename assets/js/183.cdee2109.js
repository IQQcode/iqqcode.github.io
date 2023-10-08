(window.webpackJsonp=window.webpackJsonp||[]).push([[183],{512:function(v,_,t){"use strict";t.r(_);var l=t(3),o=Object(l.a)({},(function(){var v=this,_=v._self._c;return _("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[_("blockquote",[_("p",[v._v("在Java相关的岗位面试中，很多面试官都喜欢考察面试者对Java并发的了解程度，而以volatile关键字作为一个小的切入点，往往可以一问到底，把Java内存模型（JMM），Java并发编程的一些特性都牵扯出来，深入地话还可以考察JVM底层实现以及操作系统的相关知识。")]),v._v(" "),_("p",[v._v("本文以一次假想的面试过程，来深入了解下volitile关键字【本菜鸡还没投简历，准备好被今年20年秋招的毒打了😭】")])]),v._v(" "),_("p",[v._v("【灵魂拷问开始】")]),v._v(" "),_("ol",[_("li",[v._v("面试官：Java并发这块了解的怎么样？说说你对volatile关键字的理解？")]),v._v(" "),_("li",[v._v("面试官：能不能详细说下什么是内存可见性，什么又是重排序呢？")]),v._v(" "),_("li",[v._v("面试官：volatile怎么保证可见性的？多个线程之间的可见性，你能讲一下底层原理是怎么实现的吗？")]),v._v(" "),_("li",[v._v("面试官：volatile关键字是怎么保证有序性的？")]),v._v(" "),_("li",[v._v("面试官：volatile能保证可见性和有序性，但是能保证原子性吗？为什么？")]),v._v(" "),_("li",[v._v("面试官：了解过JMM内存模型吗？简单的讲讲")])]),v._v(" "),_("p",[v._v("到这里，我的眼里已是常含泪水了。不是因为我对代码爱的深沉，而是因为我菜的真诚！")]),v._v(" "),_("p",[v._v("没事，不就是个破"),_("code",[v._v("volatile")]),v._v("吗？别念了，我学习还不行吗！")]),v._v(" "),_("h3",{attrs:{id:"q1-请你谈谈对volatile关键字的理解"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#q1-请你谈谈对volatile关键字的理解"}},[v._v("#")]),v._v(" Q1：请你谈谈对Volatile关键字的理解？")]),v._v(" "),_("p",[v._v("Volatile是JVM提供的"),_("strong",[v._v("轻量级的同步机制")])]),v._v(" "),_("ol",[_("li",[_("p",[v._v("保证可见性")])]),v._v(" "),_("li",[_("p",[v._v("保证有序性，禁止指令重排")])]),v._v(" "),_("li",[_("p",[v._v("不保证原子性（需要借助synchronized或者CAS)")])])]),v._v(" "),_("p",[v._v("小伙子，不错么😊，回答对了 1 + 1，得来点 2 + 2 的难度了")]),v._v(" "),_("h3",{attrs:{id:"q2-什么是内存可见性-volatile怎么保证多个线程之间的可见性的"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#q2-什么是内存可见性-volatile怎么保证多个线程之间的可见性的"}},[v._v("#")]),v._v(" Q2：什么是内存可见性，volatile怎么保证多个线程之间的可见性的？")]),v._v(" "),_("blockquote",[_("p",[v._v("问题2和问题3讲到的可见性，用JMM来解释的话，本质上是同一个问题。至于有序性和重排序，到问题4再讨论。")])]),v._v(" "),_("p",[v._v("一问到内存的可见性，"),_("code",[v._v("volatile")]),v._v("相关的，直接就把JMM内存模型搬出来好吧。先放图，然后再表演。")]),v._v(" "),_("p",[v._v("以下是俺个人的回答，有不足或漏洞，欢迎大家更正指出！")]),v._v(" "),_("p",[_("strong",[v._v("所谓可见性，是指当一条线程修改了共享变量的值，新值对于其他线程来说是可以立即得知的")])]),v._v(" "),_("p",[_("img",{attrs:{src:"https://iqqcode-blog.oss-cn-beijing.aliyuncs.com/img/20200613100012.png",alt:""}})]),v._v(" "),_("p",[v._v("每个线程都有自己独立的工作区间，为了匹配CPU的运行速度，他们不会直接从内存中读取数据，而是将数据拷贝一份到CPU缓存中（即每个线程自己的工作内存），他们之间的相互交互，是通过内存来完成的。")]),v._v(" "),_("p",[v._v("根据JMM内存模型的8大原子操作，每个线程在将数据操作完"),_("code",[v._v("stroe")]),v._v("回主存之前，会加"),_("code",[v._v("lock")]),v._v("指令来锁定内存区域的缓存（缓存行锁定），根据MESI缓存一致性协议，总线通过侦听器发现数据被修改，会立即让其他线程工作内存中不一致的副本立即失效。等到当前线程将更改后的数据"),_("code",[v._v("write")]),v._v("回主存后，立即执行"),_("code",[v._v("unlock")]),v._v("指令。")]),v._v(" "),_("p",[_("img",{attrs:{src:"https://iqqcode-blog.oss-cn-beijing.aliyuncs.com/img/20200613100504.png",alt:""}})]),v._v(" "),_("p",[v._v("此时，其他线程再重新读取更新后的数据，再拷贝到自己的工作内存。总线侦听机制会在总线上检测线程的数据，发现有线程做了更改时准备"),_("code",[v._v("store")]),v._v("回主内存时，它就会立刻将其他线程工作内存中的副本置位无效，然后从新到主存获取更新后的值。")]),v._v(" "),_("p",[v._v("除了使用 volatile 关键字来保证内存可见性之外，使用"),_("code",[v._v("synchronized")]),v._v("或"),_("code",[v._v("Lock")]),v._v("锁也能保证变量的内存可见性。只是相比而言使用 "),_("code",[v._v("volatile")]),v._v("关键字开销更小，是轻量级的锁。")]),v._v(" "),_("p",[v._v("这就是内存可见性的原理。")]),v._v(" "),_("h3",{attrs:{id:"q3-volatile关键字是怎么保证有序性的"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#q3-volatile关键字是怎么保证有序性的"}},[v._v("#")]),v._v(" Q3：volatile关键字是怎么保证有序性的？")]),v._v(" "),_("p",[v._v("使用volatile关键字修饰共享变量便可以"),_("strong",[v._v("禁止指令重排序")]),v._v("。若用volatile修饰共享变量，在JVM底层volatile是采用“"),_("strong",[v._v("内存屏障")]),v._v("”来实现禁止特定类型的处理器重排序。加入volatile关键字时，会多出一个lock前缀指令，lock前缀指令实际上相当于一个内存屏障（也成内存栅栏），内存屏障会提供3个功能：")]),v._v(" "),_("ol",[_("li",[_("p",[v._v("它确保指令重排序时不会把其后面的指令排到内存屏障之前的位置，也不会把前面的指令排到内存屏障的后面；即在执行到内存屏障这句指令时，在它前面的操作已经全部完成；")])]),v._v(" "),_("li",[_("p",[v._v("它会强制将对缓存的修改操作立即写入主存；")])]),v._v(" "),_("li",[_("p",[v._v("如果是写操作，它会导致其他CPU中对应的缓存行无效。")])])]),v._v(" "),_("p",[v._v("JMM具备一些先天的有序性，通过Happens-Before原则就可以保证的一定的有序性。")]),v._v(" "),_("h3",{attrs:{id:"q4-volatile能保证可见性和有序性-但是能保证原子性吗-为什么"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#q4-volatile能保证可见性和有序性-但是能保证原子性吗-为什么"}},[v._v("#")]),v._v(" Q4：volatile能保证可见性和有序性，但是能保证原子性吗？为什么？")]),v._v(" "),_("p",[_("code",[v._v("volatile")]),v._v("关键字不能保证原子性。")]),v._v(" "),_("p",[v._v("a. 当写一个volatile变量时，JMM会把该线程本地内存中的变量强制刷新到主内存中去；")]),v._v(" "),_("p",[v._v("b. 这个写会操作会导致其他线程中的缓存无效。")]),v._v(" "),_("p",[v._v("对于类似"),_("code",[v._v("i++")]),v._v("这样的复合操作，要想保证原子性，只能借助于"),_("code",[v._v("synchronized")]),v._v("、"),_("code",[v._v("Lock")]),v._v("以及并发包下的"),_("code",[v._v("AtomicInteger")]),v._v("的原子操作类。AtomicInteger对基本数据类型的 自增（加1操作），自减（减1操作）、以及加法操作（加一个数），减法操作（减一个数）进行了封装，保证这些操作是原子性操作。")]),v._v(" "),_("h4",{attrs:{id:"怎样才能保证原子性"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#怎样才能保证原子性"}},[v._v("#")]),v._v(" 怎样才能保证原子性？")]),v._v(" "),_("p",[_("strong",[v._v("1. 加锁。synchronized或Lock")])]),v._v(" "),_("p",[_("strong",[v._v("2. CAS无锁算法")])]),v._v(" "),_("h3",{attrs:{id:"q5-了解过jmm内存模型吗-简单的讲讲"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#q5-了解过jmm内存模型吗-简单的讲讲"}},[v._v("#")]),v._v(" Q5：了解过JMM内存模型吗？简单的讲讲")]),v._v(" "),_("p",[v._v("看完这篇👇文章，这道题目就是你的主场。")]),v._v(" "),_("p",[v._v("👉👈")]),v._v(" "),_("p",[v._v("看着这张图，直接就巴拉巴拉一顿操作！")]),v._v(" "),_("p",[_("img",{attrs:{src:"https://iqqcode-blog.oss-cn-beijing.aliyuncs.com/img/20200613152249.png",alt:""}})])])}),[],!1,null,null,null);_.default=o.exports}}]);