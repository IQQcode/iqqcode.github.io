(window.webpackJsonp=window.webpackJsonp||[]).push([[215],{542:function(s,a,t){"use strict";t.r(a);var n=t(3),e=Object(n.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h3",{attrs:{id:"面试官的拷问"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#面试官的拷问"}},[s._v("#")]),s._v(" 面试官的拷问")]),s._v(" "),a("p",[s._v("👨‍🦲面试官：“说一说"),a("code",[s._v("i++")]),s._v("跟"),a("code",[s._v("++i")]),s._v("的区别”")]),s._v(" "),a("p",[s._v("😈我：“这个我懂！"),a("code",[s._v("i++")]),s._v("是先把i的值拿出来使用，然后再对i+1，"),a("code",[s._v("++i")]),s._v("是先对i+1，然后再去使用i”")]),s._v(" "),a("p",[s._v("👨‍🦲面试官：你说你懂"),a("code",[s._v("i++")]),s._v("跟"),a("code",[s._v("++i")]),s._v("的区别，那你知道下面这段代码的运行结果吗?")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://iqqcode-blog.oss-cn-beijing.aliyuncs.com/img/20200626184623.png",alt:""}})]),s._v(" "),a("p",[s._v("😈我：“以我零年的开发经验来看，它必然不会是10！”")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://iqqcode-blog.oss-cn-beijing.aliyuncs.com/img-2021-later/20210621204101.jpeg",alt:"我开玩笑的（熊猫人）_熊猫人_开玩笑表情"}})]),s._v(" "),a("p",[s._v("👨‍🦲面试官："),a("img",{attrs:{src:"https://iqqcode-blog.oss-cn-beijing.aliyuncs.com/img-2021-later/20210621204107.jpeg",alt:"你可真会开玩笑啊_可真会_开玩笑表情"}})]),s._v(" "),a("p",[s._v("😈我：“哈哈…，开个玩笑，结果为0啦”")]),s._v(" "),a("p",[s._v("👨‍🦲面试官：“你能说说为什么吗？”")]),s._v(" "),a("p",[s._v("😈我：“因为"),a("code",[s._v("j++")]),s._v("这个表达式每次返回的都是0，所以最终结果就是0”")]),s._v(" "),a("p",[s._v("👨‍🦲面试官：“小伙子不错，那你能从JVM的角度讲一讲为什么嘛？”")]),s._v(" "),a("p",[s._v("😈我心想：这货明显是在搞事情啊，这么快就到JVM了？还好我有准备。")]),s._v(" "),a("blockquote",[a("p",[s._v("想要解释清楚这个问题，我们就必须要了解JVM的内存区域划分，主要涉及到的是"),a("strong",[s._v("虚拟机栈")]),s._v("，通过JVM字节码指令来做具体分析！")])]),s._v(" "),a("h3",{attrs:{id:"暖场准备"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#暖场准备"}},[s._v("#")]),s._v(" 暖场准备")]),s._v(" "),a("p",[s._v("JVM的运行时数据区Rutime Data Area分为这5大块：")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://iqqcode-blog.oss-cn-beijing.aliyuncs.com/img-2021-later/20210621204114.png",alt:""}})]),s._v(" "),a("p",[s._v("虚拟机栈中又分为以下四块区域：")]),s._v(" "),a("ul",[a("li",[a("p",[s._v("局部变量表（Local Variables）")])]),s._v(" "),a("li",[a("p",[s._v("操作数栈（Operand Stack）")])]),s._v(" "),a("li",[a("p",[s._v("动态链接（Dynamic Linking）")])]),s._v(" "),a("li",[a("p",[s._v("方法返回地址（Return Address）")])])]),s._v(" "),a("p",[a("img",{attrs:{src:"https://iqqcode-blog.oss-cn-beijing.aliyuncs.com/img/20200625173710.png",alt:""}})]),s._v(" "),a("p",[s._v("局部变量表Local Variables（局部变量数组或者本地变量表）。")]),s._v(" "),a("ol",[a("li",[a("p",[s._v("局部变量表是一个"),a("font",{attrs:{color:"pink"}},[s._v("数字数组")]),s._v("，主要用于存储方法参数和定义在方法体内的局部变量。")],1),s._v(" "),a("ul",[a("li",[s._v("数据类型包括：基本数据类型、引用类型、返回值类型")])])]),s._v(" "),a("li",[a("p",[s._v("线程私有数据，不存在线程安全问题")])]),s._v(" "),a("li",[a("p",[s._v("局部变量表的容量大小在"),a("font",{attrs:{color:"pink"}},[s._v("编译期间")]),s._v("被确定，在方法运行期间不会改变")],1)])]),s._v(" "),a("p",[s._v("其中的局部变量表存放了编译期可知的各种基本数据类型（boolean、byte、char、short、int、float、long、double）、对象引用。局部变量表所需的内存空间在编译期间完成分配，当进入一个方法时，这个方法需要在帧中分配多大的局部变量空间是完全确定的，在方法运行期间不会改变局部变量表的大小。")]),s._v(" "),a("blockquote",[a("p",[s._v("局部变量表的最小存储单元为Slot（槽），其中"),a("strong",[s._v("64位长度的long和double类型的数据会占用2个Slot")]),s._v("，其余的数据类型只占用1个。所以我们可以将局部变量表分为一个个的存储单元，每个存储单元有自己的下标位置，在对数据进行访问时可以直接通过下标来访问")])]),s._v(" "),a("p",[s._v("操作数栈对于数据的存储跟局部变量表是一样的，但是跟局部变量表不同的是，操作数栈对于数据的访问不是通过下标而是通过标准的栈操作来进行的（压入与弹出），之后在分析字节码指令时我们会很明显的感觉到这一点。另外还有，对于数据的计算是由CPU完成的，所以CPU在执行指令时每次会从操作数栈中弹出所需的操作数经过计算后再压入到操作数栈顶。")]),s._v(" "),a("h3",{attrs:{id:"开始表演"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#开始表演"}},[s._v("#")]),s._v(" 开始表演")]),s._v(" "),a("p",[s._v("以执行下面这段代码为例：")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://iqqcode-blog.oss-cn-beijing.aliyuncs.com/img/20200626191221.png",alt:""}})]),s._v(" "),a("p",[s._v("这个过程如下所示")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://iqqcode-blog.oss-cn-beijing.aliyuncs.com/img-2021-later/20210621204124.png",alt:"在这里插入图片描述"}})]),s._v(" "),a("p",[s._v("这两步完成了局部变量a的赋值，同理b的赋值也一样，a,b完成赋值后此时的状态如下图所示")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://iqqcode-blog.oss-cn-beijing.aliyuncs.com/img-2021-later/20210621204131.png",alt:""}})]),s._v(" "),a("p",[s._v("此时要执行a+b的运算了，所以首先要将需要的操作数加载到操作数栈，执行运算时再将操作数从栈中弹出，由CPU完成计算后再将结果压入到栈中，整个过程如下：")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://iqqcode-blog.oss-cn-beijing.aliyuncs.com/img-2021-later/20210621204136.png",alt:""}})]),s._v(" "),a("p",[s._v("到这里还没有完哦，还剩最后一步，需要将计算后的结果赋值给c，也就是要将操作数栈的数据弹出并赋值给局部变量表中的第三个槽位")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://iqqcode-blog.oss-cn-beijing.aliyuncs.com/img-2021-later/20210621204140.png",alt:"在这里插入图片描述"}})]),s._v(" "),a("p",[s._v("OK，到这一步整个过程就完成了")]),s._v(" "),a("hr"),s._v(" "),a("p",[s._v("👨‍🦲面试官：“嗯，说的不错，但是你还是没解释为什么最开始的那个问题，为什么"),a("code",[s._v("j=j++")]),s._v("的结果会是0呢？”")]),s._v(" "),a("p",[s._v("😈我：“面试官您好，要解释这个问题上面的知识都是基础，真正要说明白这个问题我们需要从字节码入手。”")]),s._v(" "),a("p",[s._v("我们进入到这段代码编译好的.class文件目录下执行反编译操作：")]),s._v(" "),a("p",[a("code",[s._v("javap -c xxx.class")])]),s._v(" "),a("p",[a("img",{attrs:{src:"https://iqqcode-blog.oss-cn-beijing.aliyuncs.com/img/20200626184623.png",alt:""}})]),s._v(" "),a("p",[s._v("得到其字节码如下：")]),s._v(" "),a("div",{staticClass:"language-java line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[s._v("  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("void")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("test1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    descriptor"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("V")]),s._v("\n    flags"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("ACC_PUBLIC")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Code")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v("\n      stack"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" locals"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" args_size"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\n         "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" iconst_0\n         "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" istore_1\n         "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" iconst_0\n         "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" istore_2\n         "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" iload_2\n         "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" bipush        "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),s._v("\n         "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("7")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" if_icmpge     "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("21")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" iload_1\n        "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("11")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" iinc          "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("14")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" istore_1\n        "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("15")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" iinc          "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("18")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("goto")]),s._v("          "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("21")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" getstatic     #"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v("  \n        "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("24")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" iload_1\n        "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("25")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" invokevirtual #"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v(" \n        "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("28")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("LineNumberTable")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v("\n        line "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("18")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("\n        line "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("19")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v("\n        line "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("20")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),s._v("\n        line "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("19")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("15")]),s._v("\n        line "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("22")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("21")]),s._v("\n        line "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("23")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("28")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("LocalVariableTable")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Start")]),s._v("  "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Length")]),s._v("  "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Slot")]),s._v("  "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Name")]),s._v("   "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Signature")]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),s._v("      "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("17")]),s._v("     "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v("     i   "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("I")]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("      "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("29")]),s._v("     "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("this")]),s._v("   "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Liqqcode")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("pcregister"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("problemsAdd"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v("      "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("27")]),s._v("     "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("     j   "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("I")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br"),a("span",{staticClass:"line-number"},[s._v("30")]),a("br"),a("span",{staticClass:"line-number"},[s._v("31")]),a("br"),a("span",{staticClass:"line-number"},[s._v("32")]),a("br"),a("span",{staticClass:"line-number"},[s._v("33")]),a("br")])]),a("p",[a("img",{attrs:{src:"https://iqqcode-blog.oss-cn-beijing.aliyuncs.com/img/20200626190919.png",alt:""}})]),s._v(" "),a("div",{staticClass:"language-java line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Code")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" iconst_0    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 将常数0压入到操作数栈顶")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" istore_1    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 将操作数栈顶元素弹出并压入到局部变量表中1号槽位，也就是j=0")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" iconst_0    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 将常数0压入到操作数栈顶")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" istore_2     "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 将操作数栈顶元素弹出并压入到局部变量表中2号槽位，也就是i=0")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" iload_2     "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 将2号槽位的元素压入操作数栈顶")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" bipush        "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),s._v("    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 将常数10压入到操作数栈顶，此时操作数栈中有两个数（常数10，以及i）")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("7")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" if_icmpge     "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("21")]),s._v("     "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 比较操作数栈中的两个数，如果i>=10,跳转到第21行")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" iload_1             "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 将局部变量表中的1号槽位的元素压入到操作数栈顶，就是将j=0压入操作数栈顶")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("11")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" iinc          "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 将局部变量表中的1号元素自增1，此时局部变量表中的j=1")]),s._v("\n\n      "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("14")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" istore_1             "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 将操作数栈顶的元素（此时栈顶元素为0）弹出并赋值给局部变量表中的1号    ")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//槽位（一号槽位本来已经完成自增了，但是又被赋值成了0）")]),s._v("\n\n      "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("15")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" iinc          "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 将局部变量表中的2号槽位的元素自增1，此时局部变量表中的2号元素值为1，也就是i=1")]),s._v("\n\n      "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("18")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("goto")]),s._v("          "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),s._v("     "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 第一次循环结束，跳转到第四行继续循环")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("21")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" getstatic     #"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v("                  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// Field java/lang/System.out:Ljava/io/PrintStream;")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("24")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" iload_1\n      "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("25")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" invokevirtual #"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v("                  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// Method java/io/PrintStream.println:(I)V")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("28")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br")])]),a("p",[a("img",{attrs:{src:"https://iqqcode-blog.oss-cn-beijing.aliyuncs.com/img/20200626191929.png",alt:""}})]),s._v(" "),a("p",[a("strong",[s._v("操作数栈主要用来保存计算过程的中间结果，同时作为计算过程中 变量临时的存储空间。")])]),s._v(" "),a("p",[s._v("我们着重关注第10，11，14行字节码指令，用图表示如下：")]),s._v(" "),a("p",[a("code",[s._v("指令10")]),s._v("： 将局部变量表中的1号槽位的元素压入操作数栈顶，即 j = 0 入栈")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://iqqcode-blog.oss-cn-beijing.aliyuncs.com/img/20200626195227.png",alt:""}})]),s._v(" "),a("p",[a("code",[s._v("指令11")]),s._v("： 将局部变量表中的1号槽位的元素自增1，即 j = 1")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://iqqcode-blog.oss-cn-beijing.aliyuncs.com/img/20200626200242.png",alt:""}})]),s._v(" "),a("p",[a("code",[s._v("指令14")]),s._v("： 将操作数栈顶元素（j = 0）出栈并赋给局部变量表1号槽位")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://iqqcode-blog.oss-cn-beijing.aliyuncs.com/img/20200626200317.png",alt:""}})]),s._v(" "),a("p",[s._v("此时操作数栈顶 j  = 0，局部变量表中1号槽位的值本来自增了，变成了 j = 1.")]),s._v(" "),a("p",[s._v("但是操作数栈没自增就把值赋给了局部变量表1号槽，此时 j = 0")]),s._v(" "),a("p",[s._v("可以看到本来局部变量表中的j已经完成了自增（"),a("strong",[a("code",[s._v("iinc")]),s._v("指令是直接对局部变量进行自增")]),s._v("），但是在进行赋值时是将操作数栈中的数据弹出，但是操作数栈的数据并没有经过计算，所以每次自增的结果都被覆盖了。")]),s._v(" "),a("p",[s._v("最终结果就是0。")]),s._v(" "),a("hr"),s._v(" "),a("p",[s._v("我们平常说的"),a("code",[s._v("i++")]),s._v("是先拿去用，然后再自增，而"),a("code",[s._v("++i")]),s._v("是先自增再拿去用。这个到底怎么理解呢？如果站在JVM的层次来讲的话，应该这样说：")]),s._v(" "),a("ol",[a("li",[a("p",[a("code",[s._v("i++")]),s._v("是先被操作数栈拿去用了（先执行的"),a("code",[s._v("load")]),s._v("指令），然后再在局部变量表中完成了自增，但是操作数栈中还是"),a("strong",[s._v("自增前的值")])])]),s._v(" "),a("li",[a("p",[a("code",[s._v("++1")]),s._v("是先在局部变量表中完成了自增（先执行"),a("code",[s._v("innc")]),s._v("指令），然后再被"),a("code",[s._v("load")]),s._v("进了操作数栈，所以操作数栈中保存的是"),a("strong",[s._v("自增后的值")])])])]),s._v(" "),a("p",[a("strong",[s._v("根本的区别就是"),a("code",[s._v("innc")]),s._v("和"),a("code",[s._v("load")]),s._v("指令先后执行的顺序问题。")])]),s._v(" "),a("p",[s._v("这就是它们的根本区别。")]),s._v(" "),a("hr"),s._v(" "),a("h3",{attrs:{id:"拓展"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#拓展"}},[s._v("#")]),s._v(" 拓展")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://iqqcode-blog.oss-cn-beijing.aliyuncs.com/img/20200626192637.png",alt:""}})]),s._v(" "),a("div",{staticClass:"language-java line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("static")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("test2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" i "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" b "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" i"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("++")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" a "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("++")]),s._v("i"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("void")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("test2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Code")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v("\n       "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" iconst_4\n       "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" istore_1\n       "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" iload_1\n       "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" iinc          "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\n           "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("6")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" istore_2\n       "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("7")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" iinc          "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\n           "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" iload_1\n      "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("11")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" istore_3\n      "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("12")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br")])]),a("p",[s._v("安康是戴纳肯SVNAV那")]),s._v(" "),a("hr"),s._v(" "),a("p",[s._v("原文参考自："),a("a",{attrs:{href:"https://blog.csdn.net/qq_41907991/article/details/105337049?depth_1-utm_source=distribute.pc_relevant.none-task-blog-BlogCommendFromMachineLearnPai2-8.nonecase",target:"_blank",rel:"noopener noreferrer"}},[s._v("【面试官：你说你懂i++跟++i的区别，那你会做下面这道题吗】"),a("OutboundLink")],1)])])}),[],!1,null,null,null);a.default=e.exports}}]);