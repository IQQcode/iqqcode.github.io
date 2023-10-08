(window.webpackJsonp=window.webpackJsonp||[]).push([[245],{572:function(t,a,s){"use strict";s.r(a);var o=s(3),e=Object(o.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"tomcat缓存区满问题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#tomcat缓存区满问题"}},[t._v("#")]),t._v(" Tomcat缓存区满问题")]),t._v(" "),a("p",[t._v("【报错信息】")]),t._v(" "),a("blockquote",[a("p",[a("font",{attrs:{color:"red",size:"3"}},[t._v("无法将位于[/WEB-INF/classes/]的资源添加到Web应用程序[/News_Xifang_war_exploded]的缓存中，因为在清除过期缓存条目后可用空间仍不足 - 请考虑增加缓存的最大空间")])],1)]),t._v(" "),a("hr"),t._v(" "),a("blockquote",[a("p",[a("font",{attrs:{color:"red",size:"3"}},[t._v("警告 [main] org.apache.catalina.webresources.Cache.getResource\n无法将位于[/WEB-INF/classes/templates/framework/help/helpinfo.html]的资源添加到Web应用程序[/zhfx]的缓存中，\n因为在清除过期缓存条目后可用空间仍不足 - 请考虑增加缓存的最大空间")])],1)]),t._v(" "),a("p",[t._v("出现这种问题的原因是"),a("strong",[t._v("Tomcat缓存区已满")]),t._v("，在启动Tomcat后，会出现web项目的图片资源等加载不出来。")]),t._v(" "),a("p",[a("strong",[t._v("解决方法是清理Tomcat缓存区，或者将缓存区最大空间更改")]),t._v("。由于Tomcat配置出错之后比较麻烦，所以我们选择直接清理就好！")]),t._v(" "),a("hr"),t._v(" "),a("h3",{attrs:{id:"第一步"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#第一步"}},[t._v("#")]),t._v(" 第一步")]),t._v(" "),a("p",[t._v("1.进入Tomcat的安装目录进行清理缓存，我使用的是"),a("code",[t._v("Tomcat-8.5.50")]),t._v("，不同版本的目录结构基本都是一样的，操作相同。\n"),a("img",{attrs:{src:"https://img-blog.csdnimg.cn/20200127102752366.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80MzIzMjk1NQ==,size_16,color_FFFFFF,t_70",alt:"在这里插入图片描述"}}),t._v("\n2.找到work文件夹。此文件下有个Catalina目录（tomcat小名叫Catalina），work目录下的文件都可以删除。删除work中的tomcat目录后，缓存已经删除\n"),a("img",{attrs:{src:"https://img-blog.csdnimg.cn/20200127103156517.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80MzIzMjk1NQ==,size_16,color_FFFFFF,t_70",alt:"在这里插入图片描述"}})]),t._v(" "),a("blockquote",[a("p",[t._v("work目录只是tomcat的工作目录，也就是tomcat把 jsp转换为class文件的工作目录")])]),t._v(" "),a("h3",{attrs:{id:"第二步"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#第二步"}},[t._v("#")]),t._v(" 第二步")]),t._v(" "),a("p",[t._v("找到Tomcat的安装目录，修改bin文件夹下的startup.bat文件")]),t._v(" "),a("blockquote",[a("p",[a("code",[t._v("startup.bat")]),t._v("是Tomcat的启动命令")])]),t._v(" "),a("p",[a("img",{attrs:{src:"https://img-blog.csdnimg.cn/20200127103452641.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80MzIzMjk1NQ==,size_16,color_FFFFFF,t_70",alt:"在这里插入图片描述"}})]),t._v(" "),a("p",[a("strong",[t._v("在startup.bat文件的头部加上批处理命令")])]),t._v(" "),a("p",[t._v("打开之后在第一行加上命令，后面为Tomcat的缓存区目录")]),t._v(" "),a("p",[a("code",[t._v("rd/s/q D:\\apache-Tomcat-8.5.50\\work\\Catalina")]),t._v(" "),a("img",{attrs:{src:"https://img-blog.csdnimg.cn/20200127103606464.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80MzIzMjk1NQ==,size_16,color_FFFFFF,t_70",alt:"在这里插入图片描述"}}),t._v("\n关闭Tomcat服务，重新启动web项目即可！")])])}),[],!1,null,null,null);a.default=e.exports}}]);