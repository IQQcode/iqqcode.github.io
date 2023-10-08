(window.webpackJsonp=window.webpackJsonp||[]).push([[242],{569:function(t,e,v){"use strict";v.r(e);var r=v(3),_=Object(r.a)({},(function(){var t=this,e=t._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h3",{attrs:{id:"servletcontext对象"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#servletcontext对象"}},[t._v("#")]),t._v(" ServletContext对象")]),t._v(" "),e("p",[t._v("ServletContext概念：代表整个web应用，可以和程序的容器（服务器）来通信")]),t._v(" "),e("h4",{attrs:{id:"servletcontext对象获取"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#servletcontext对象获取"}},[t._v("#")]),t._v(" ServletContext对象获取")]),t._v(" "),e("p",[e("strong",[t._v("通过request对象获取")])]),t._v(" "),e("p",[e("code",[t._v("request.getservletcontext();")])]),t._v(" "),e("p",[e("strong",[t._v("通过HttpServlet获取")])]),t._v(" "),e("p",[e("code",[t._v("this.getservletcontext();")])]),t._v(" "),e("h4",{attrs:{id:"servletcontext对象功能"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#servletcontext对象功能"}},[t._v("#")]),t._v(" ServletContext对象功能")]),t._v(" "),e("p",[e("strong",[t._v("1. 获取MIME类型")])]),t._v(" "),e("p",[t._v("通过文件的后缀名来获取。因为所有的MIME类型都存储在服务器中，而ServletContext对象刚好可以和程序的容器（服务器）来通信，所以可以获取到")]),t._v(" "),e("p",[t._v("Tomcat下config文件下的"),e("code",[t._v("web.xml")])]),t._v(" "),e("p",[t._v("MIME类型")]),t._v(" "),e("p",[e("img",{attrs:{src:"C:%5CUsers%5Cj2726%5CAppData%5CRoaming%5CTypora%5Ctypora-user-images%5C1581568539911.png",alt:"1581568539911"}})]),t._v(" "),e("ul",[e("li",[t._v("MIME类型：在互联网通后过程中定义的一种文件数据类型")]),t._v(" "),e("li",[t._v("格式：大类型/小类型text/htmlimage/jpeg")]),t._v(" "),e("li",[t._v("获取："),e("code",[t._v("String getMimeType(String file)")])])]),t._v(" "),e("p",[e("strong",[t._v("2. 域对象：共享数据")])]),t._v(" "),e("ul",[e("li",[e("p",[t._v("setAttribute(String name，object value)")])]),t._v(" "),e("li",[e("p",[t._v("getAttribute(String name)")])]),t._v(" "),e("li",[e("p",[t._v("removeAttribute(String name)")])]),t._v(" "),e("li",[e("p",[t._v("ServletContext对象范围：所有用户所有请求的数据")])])]),t._v(" "),e("p",[e("strong",[t._v("3. 获取文件的真实（服务器）路径")])]),t._v(" "),e("p",[t._v("WEB-INF目录下的资源访问:")]),t._v(" "),e("p",[t._v("​\t\t\tServletContext context = request.getServletContext();")]),t._v(" "),e("p",[t._v('​\t\t\tString file = context.getRealPath(s:"/WEB-INF/c.txt");')]),t._v(" "),e("p",[t._v("​\t\t\tSystem.out.println(file);")]),t._v(" "),e("p",[t._v("src目录下的资源访问:")]),t._v(" "),e("p",[t._v("​\t\t\tServletContext context = request.getServletContext();")]),t._v(" "),e("p",[t._v('​\t\t\tString file = context.getRealPath(s:"/WEB-INF/c1asses/a.txt");')]),t._v(" "),e("p",[t._v("​\t\t\tSystem.out.println(file)")])])}),[],!1,null,null,null);e.default=_.exports}}]);