(window.webpackJsonp=window.webpackJsonp||[]).push([[233],{560:function(t,a,e){"use strict";e.r(a);var s=e(3),n=Object(s.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"_1-maven简介"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-maven简介"}},[t._v("#")]),t._v(" 1.Maven简介")]),t._v(" "),a("p",[t._v("Maven的主要功能是，通过在pom.xml的"),a("code",[t._v("<dependency>")]),t._v("指定要在项目中使用的JAR库名称和版本，可以自动下载在外部站点上集中管理的JAR ，并在本地使用该JAR进行构建可以。")]),t._v(" "),a("p",[t._v("Maven构建项目的优势")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://imgconvert.csdnimg.cn/aHR0cHM6Ly9ibG9naW1hZ2UtMTI1NTYxODU5Mi5jb3MuYXAtY2hlbmdkdS5teXFjbG91ZC5jb20vaW1nMjAyMDAzMDMxMjQyMTAucG5n?x-oss-process=image/format,png",alt:""}})]),t._v(" "),a("p",[t._v("在传统的Web项目中，每个项目所需要的"),a("code",[t._v("jar")]),t._v("包文件都配置在"),a("strong",[t._v("WEB-INF")]),t._v("下的lib目录下，如果所需要的jar包文件很多，则项目会很大，关键是jar包可能产生冲突，这才是要命的！web下几十行的报红，对于俺这种菜鸟来说简直是.....Maven的优势就在于能够复用jab包，构建了统一的Web目录结构，方便项目的管理和部署。")]),t._v(" "),a("p",[t._v("Maven 中的有两大核心：")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("依赖管理：对 jar 的统一管理(Maven 提供了一个 Maven 的中央仓库"),a("a",{attrs:{href:"https://mvnrepository.com/%EF%BC%8C",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://mvnrepository.com/"),a("OutboundLink")],1),t._v("，当我们在项目中添加完依赖之后，Maven 会自动去中央仓库下载相关的依赖，并且解决依赖的依赖问题)")])]),t._v(" "),a("li",[a("p",[t._v("项目构建：对项目进行编译、测试、打包、部署、上传到私服等")])])]),t._v(" "),a("h2",{attrs:{id:"_2-maven安装及配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-maven安装及配置"}},[t._v("#")]),t._v(" 2.Maven安装及配置")]),t._v(" "),a("p",[a("strong",[t._v("安装仓库配置出门左转")])]),t._v(" "),a("p",[a("a",{attrs:{href:"https://blog.csdn.net/weixin_43232955/article/details/97840767",target:"_blank",rel:"noopener noreferrer"}},[a("strong",[t._v("【Maven安装配置及在idea中配置】")]),a("OutboundLink")],1)]),t._v(" "),a("p",[a("strong",[t._v("Maven目录结构")])]),t._v(" "),a("p",[a("img",{attrs:{src:"https://imgconvert.csdnimg.cn/aHR0cHM6Ly9ibG9naW1hZ2UtMTI1NTYxODU5Mi5jb3MuYXAtY2hlbmdkdS5teXFjbG91ZC5jb20vaW1nMjAyMDAzMDMxMTE2MjcucG5n?x-oss-process=image/format,png",alt:""}})]),t._v(" "),a("p",[a("strong",[t._v("bin目录下")])]),t._v(" "),a("p",[a("img",{attrs:{src:"https://imgconvert.csdnimg.cn/aHR0cHM6Ly9ibG9naW1hZ2UtMTI1NTYxODU5Mi5jb3MuYXAtY2hlbmdkdS5teXFjbG91ZC5jb20vaW1nMjAyMDAzMDMxMTE4MTIucG5n?x-oss-process=image/format,png",alt:""}})]),t._v(" "),a("p",[a("strong",[t._v("boot目录")])]),t._v(" "),a("p",[a("img",{attrs:{src:"https://imgconvert.csdnimg.cn/aHR0cHM6Ly9ibG9naW1hZ2UtMTI1NTYxODU5Mi5jb3MuYXAtY2hlbmdkdS5teXFjbG91ZC5jb20vaW1nMjAyMDAzMDMxMTE5NTAucG5n?x-oss-process=image/format,png",alt:""}})]),t._v(" "),a("p",[a("strong",[t._v("config")])]),t._v(" "),a("p",[a("img",{attrs:{src:"https://imgconvert.csdnimg.cn/aHR0cHM6Ly9ibG9naW1hZ2UtMTI1NTYxODU5Mi5jb3MuYXAtY2hlbmdkdS5teXFjbG91ZC5jb20vaW1nMjAyMDAzMDMxMTIxMTYucG5n?x-oss-process=image/format,png",alt:""}})]),t._v(" "),a("p",[a("img",{attrs:{src:"https://img-blog.csdnimg.cn/20200303220432387.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80MzIzMjk1NQ==,size_16,color_FFFFFF,t_70",alt:"在这里插入图片描述"}})]),t._v(" "),a("p",[a("strong",[t._v("lib")])]),t._v(" "),a("p",[a("img",{attrs:{src:"https://imgconvert.csdnimg.cn/aHR0cHM6Ly9ibG9naW1hZ2UtMTI1NTYxODU5Mi5jb3MuYXAtY2hlbmdkdS5teXFjbG91ZC5jb20vaW1nMjAyMDAzMDMxMTI2MjEucG5n?x-oss-process=image/format,png",alt:""}})]),t._v(" "),a("h2",{attrs:{id:"_3-仓库repository"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-仓库repository"}},[t._v("#")]),t._v(" 3.仓库repository")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://imgconvert.csdnimg.cn/aHR0cHM6Ly9ibG9naW1hZ2UtMTI1NTYxODU5Mi5jb3MuYXAtY2hlbmdkdS5teXFjbG91ZC5jb20vaW1nMjAyMDAzMDMxMjIwMjMucG5n?x-oss-process=image/format,png",alt:""}})]),t._v(" "),a("p",[a("strong",[t._v("运行原理")])]),t._v(" "),a("p",[t._v("运行Maven的时候，Maven所需要的任何构件首先从本地仓库获取。如果本地仓库没有，它会首先尝试从远程仓库下载构件至本地仓库，然后再使用本地仓库的构件。")]),t._v(" "),a("blockquote",[a("p",[t._v("关于如何将本地仓库修改到别的盘符，移步链接"),a("a",{attrs:{href:"https://blog.csdn.net/weixin_43232955/article/details/97840767",target:"_blank",rel:"noopener noreferrer"}},[a("strong",[t._v("【Maven安装配置及在idea中配置】")]),a("OutboundLink")],1)])]),t._v(" "),a("p",[t._v("本地默认仓库位置")]),t._v(" "),a("blockquote",[a("p",[a("strong",[t._v("C:\\Users\\YourPC\\.m2")])])]),t._v(" "),a("p",[a("img",{attrs:{src:"https://img-blog.csdnimg.cn/20200303220457894.png",alt:"在这里插入图片描述"}}),t._v("\n创建Maven项目，一定要保持网络畅通，否则一些依赖文件无法下载会导致项目报错！！！")]),t._v(" "),a("h2",{attrs:{id:"_4-maven项目标准目录结构"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-maven项目标准目录结构"}},[t._v("#")]),t._v(" 4.Maven项目标准目录结构")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://img-blog.csdnimg.cn/20200303220515666.png",alt:"在这里插入图片描述"}})]),t._v(" "),a("ul",[a("li",[a("p",[t._v("src/ main / java目录 核心代码部分")])]),t._v(" "),a("li",[a("p",[t._v("src/ main / resources 配置文件部分")])]),t._v(" "),a("li",[a("p",[t._v("src/ test / java目录 测试代码部分")])]),t._v(" "),a("li",[a("p",[t._v("src/ test / resources 测试配置文件")])]),t._v(" "),a("li",[a("p",[t._v("src/ main / webapp页面资源，js，cs，图片等等")])])]),t._v(" "),a("h2",{attrs:{id:"_5-maven常用命令"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5-maven常用命令"}},[t._v("#")]),t._v(" 5.Maven常用命令")]),t._v(" "),a("p",[a("code",[t._v("mvn -version")]),t._v("：显示版本信息")]),t._v(" "),a("p",[a("code",[t._v("mvn clean")]),t._v("：将编译过的target文件删除，清除产生的项目")]),t._v(" "),a("p",[a("code",[t._v("mvn compile")]),t._v("：编译src-main下源代码，并放置到target下")]),t._v(" "),a("p",[a("code",[t._v("mvn test-compile")]),t._v("：编译测试代码")]),t._v(" "),a("p",[a("code",[t._v("mvn test")]),t._v("：运行测试src下的代码")]),t._v(" "),a("p",[a("code",[t._v("mvn package")]),t._v("：打包")]),t._v(" "),a("p",[a("code",[t._v("mvn install")]),t._v("：打包项目并且安装到本地仓库")]),t._v(" "),a("p",[a("code",[t._v("mvn:deploy")]),t._v("：发布项目")]),t._v(" "),a("p",[t._v("【idea中集成的mvn命令】")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://imgconvert.csdnimg.cn/aHR0cHM6Ly9ibG9naW1hZ2UtMTI1NTYxODU5Mi5jb3MuYXAtY2hlbmdkdS5teXFjbG91ZC5jb20vaW1nMjAyMDAzMDMyMTM4MTUucG5n?x-oss-process=image/format,png",alt:""}})]),t._v(" "),a("hr"),t._v(" "),a("ol",[a("li",[t._v("创建maven项目："),a("code",[t._v("mvn archetype:generate")])]),t._v(" "),a("li",[t._v("验证项目是否正确："),a("code",[t._v("mvn validate")])]),t._v(" "),a("li",[t._v("只打jar包："),a("code",[t._v("mvn jar:jar")])]),t._v(" "),a("li",[t._v("生成源码jar包："),a("code",[t._v("mvn source:jar")])]),t._v(" "),a("li",[t._v("产生应用需要的任何额外的源代码："),a("code",[t._v("mvn generate-sources")])]),t._v(" "),a("li",[t._v("运行检查："),a("code",[t._v("mvn verify")])]),t._v(" "),a("li",[t._v("生成idea项目："),a("code",[t._v("mvn idea:idea")])]),t._v(" "),a("li",[t._v("显示maven依赖树："),a("code",[t._v("mvn dependency:tree")])]),t._v(" "),a("li",[t._v("显示maven依赖列表："),a("code",[t._v("mvn dependency:list")])])]),t._v(" "),a("p",[a("strong",[t._v("web项目相关命令")])]),t._v(" "),a("ol",[a("li",[t._v("启动tomcat："),a("code",[t._v("mvn tomcat:run")])]),t._v(" "),a("li",[t._v("启动jetty："),a("code",[t._v("mvn jetty:run")])]),t._v(" "),a("li",[t._v("运行打包部署："),a("code",[t._v("mvn tomcat:deploy")])]),t._v(" "),a("li",[t._v("撤销部署："),a("code",[t._v("mvn tomcat:undeploy")])]),t._v(" "),a("li",[t._v("启动web应用："),a("code",[t._v("mvn tomcat:start")])]),t._v(" "),a("li",[t._v("停止web应用："),a("code",[t._v("mvn tomcat:stop")])]),t._v(" "),a("li",[t._v("重新部署："),a("code",[t._v("mvn tomcat:redeploy")])]),t._v(" "),a("li",[t._v("部署展开的war文件："),a("code",[t._v("mvn war:exploded tomcat:exploded")])])]),t._v(" "),a("h2",{attrs:{id:"_6-项目对象模型pom-xml"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_6-项目对象模型pom-xml"}},[t._v("#")]),t._v(" 6.项目对象模型pom.xml")]),t._v(" "),a("p",[t._v("Maven有三个内置的构建生命周期分别为："),a("code",[t._v("clean")]),t._v("、"),a("code",[t._v("default")]),t._v("、"),a("code",[t._v("site")])]),t._v(" "),a("p",[t._v("我们一般使用的是默认的生命周期")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://imgconvert.csdnimg.cn/aHR0cHM6Ly9ibG9naW1hZ2UtMTI1NTYxODU5Mi5jb3MuYXAtY2hlbmdkdS5teXFjbG91ZC5jb20vaW1nMjAyMDAzMDMyMDU2MjkucG5n?x-oss-process=image/format,png",alt:""}})]),t._v(" "),a("p",[t._v("Maven 项目，如果需要使用第三方的控件，都是通过依赖管理来完成的。这里用到的一个东西就是 "),a("code",[t._v("pom.xml")]),t._v("文件，概念叫做项目对象模型（POM，Project Object Model），我们在 pom.xml 中定义了 Maven 项目的形式，所以，pom.xml 相当于是 Maven 项目的一个地图。")]),t._v(" "),a("p",[t._v("这个地图中都涉及到哪些东西呢？")]),t._v(" "),a("p",[a("strong",[t._v("Maven 坐标")])]),t._v(" "),a("p",[a("img",{attrs:{src:"https://img-blog.csdnimg.cn/20200303220540808.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80MzIzMjk1NQ==,size_16,color_FFFFFF,t_70",alt:"在这里插入图片描述"}})]),t._v(" "),a("ul",[a("li",[a("p",[t._v("dependencies：添加项目需要的 jar 所对应的 maven 坐标")])]),t._v(" "),a("li",[a("p",[t._v("dependency：一个 dependency 标签表示一个组件的坐标")])]),t._v(" "),a("li",[a("p",[t._v("groupId：公司名")])]),t._v(" "),a("li",[a("p",[t._v("artifactId：相当于在一个组织中项目的唯一标识符。")])]),t._v(" "),a("li",[a("p",[t._v("version：一个项目的版本")])]),t._v(" "),a("li",[a("p",[t._v("scope：表示依赖范围")])])]),t._v(" "),a("p",[a("img",{attrs:{src:"https://imgconvert.csdnimg.cn/aHR0cHM6Ly9tbWJpei5xcGljLmNuL21tYml6X3BuZy9HdnRER0tLNHVZbTB2aWFoZWxEaWJPUXp0a0Qwd2FpYzd4ejF3UzAxeUk2UUd6eEZHSFpvUzZ3VW1nbk1VTndpYlpBbXlTMkJDdEprT2JMaWFCRWliSlFWaWNpYnBBLzY0MA?x-oss-process=image/format,png",alt:""}})]),t._v(" "),a("p",[a("strong",[t._v("jar包冲突问题")])]),t._v(" "),a("p",[t._v("maven所需要的jar包存放在本地仓库，但是在我们使用"),a("code",[t._v("jsp")]),t._v("、"),a("code",[t._v("servlet")]),t._v("时，项目有可能不识别"),a("code",[t._v("HttpServlet")]),t._v("而报红，此时我们导入相关依赖到 pom.xml 中，虽然解决了问题。但是将跑起来之后，会出现jar包冲突的问题...")]),t._v(" "),a("p",[t._v("这是为什么呢？")]),t._v(" "),a("p",[t._v("因为在本地仓库中和此项目中，出现了两个相同的重名jar包文件，本地项目中有servlet包，但是由于编译器不识别我们又导入了一份servlet包，导致冲突。")]),t._v(" "),a("hr"),t._v(" "),a("p",[t._v("所以为了解决这样的问题，需要在冲突的jar包文件上加上作用域"),a("code",[t._v("provided")]),t._v("，让它只在编译时起作用")]),t._v(" "),a("div",{staticClass:"language-xml line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-xml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("dependency")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("groupId")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("javax.servlet.jsp"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("groupId")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("artifactId")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("javax.servlet.jsp-api"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("artifactId")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("version")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("2.2.1"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("version")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("scope")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("provided"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("scope")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!--只在编译时起作用--\x3e")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("dependency")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br")])]),a("p",[t._v("pom.xml参考")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://img-blog.csdnimg.cn/20200303220607967.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80MzIzMjk1NQ==,size_16,color_FFFFFF,t_70",alt:"在这里插入图片描述"}})]),t._v(" "),a("hr"),t._v(" "),a("p",[t._v("【参考文章】")]),t._v(" "),a("ul",[a("li",[a("p",[a("a",{attrs:{href:"https://zhuanlan.zhihu.com/p/29208926",target:"_blank",rel:"noopener noreferrer"}},[t._v("30个常用 Maven 命令"),a("OutboundLink")],1)])]),t._v(" "),a("li",[a("p",[a("a",{attrs:{href:"https://blog.csdn.net/keda8997110/article/details/20925449?ops_request_misc=%7B%22request%5Fid%22%3A%22158321681819724845043728%22%2C%22scm%22%3A%2220140713.130056874..%22%7D&request_id=158321681819724845043728&biz_id=0&utm_source=distribute.pc_search_result.none-task",target:"_blank",rel:"noopener noreferrer"}},[t._v("maven命令大全"),a("OutboundLink")],1)])]),t._v(" "),a("li",[a("p",[a("a",{attrs:{href:"https://mp.weixin.qq.com/s?src=11&timestamp=1583204753&ver=2193&signature=CZcDtLVnP38oJs3Kq8RyZfTB4p0VAKsRCn0xaypJstbLJo-Zo3BRdOF7t4XLzmb03rmuY7PVeT*dEGgT033zHiyHdyRsf*jfGZmZpKhD*wmcFxeVrRJecjntfQU3jKEH&new=1",target:"_blank",rel:"noopener noreferrer"}},[t._v("学Maven,看这一篇就够了"),a("OutboundLink")],1)])]),t._v(" "),a("li",[a("p",[a("a",{attrs:{href:"https://mp.weixin.qq.com/s?src=11&timestamp=1583204753&ver=2193&signature=AVXfGAZSsVQEMrumww4rFU8kNz24Ugq9Ecqs3vOjR*SrRYK3pNhJDTko*GdY15ysga9KK1yO*nqkxkkBlGOVY8qwMBaSP1v1g0OSbzmB4*g-R8HgUvBi3eFJujS1Q9Xz&new=1",target:"_blank",rel:"noopener noreferrer"}},[t._v("开局一张图，学一学项目管理神器Maven！"),a("OutboundLink")],1)])])])])}),[],!1,null,null,null);a.default=n.exports}}]);