(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{343:function(s,t,a){"use strict";a.r(t);var e=a(3),n=Object(e.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h2",{attrs:{id:"adb命令查看"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#adb命令查看"}},[s._v("#")]),s._v(" adb命令查看")]),s._v(" "),t("h3",{attrs:{id:"查看当前界面activity"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#查看当前界面activity"}},[s._v("#")]),s._v(" 查看当前界面Activity")]),s._v(" "),t("p",[t("strong",[s._v("方式一：")])]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("adb shell "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"dumpsys activity top | grep ACTIVITY | tail -n 1"')]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("ul",[t("li",[s._v("dumpsys activity top：打印顶层Activity信息")]),s._v(" "),t("li",[s._v("grep ACTIVITY：从上个命令结果中过滤出Activity相关信息")]),s._v(" "),t("li",[s._v("tail -n 1：从上一步过滤结果中继续过滤出最后一条记录，也就是当前界面(顶层top)activity")])]),s._v(" "),t("p",[t("strong",[s._v("命令执行结果：")])]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v(" ACTIVITY top.iqqcode.schema_deeplink/.MainActivity ca96fdb "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("pid")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("19441")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[t("strong",[s._v("方式二：")])]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("adb shell\n\nHNYOK:/ $ dumpsys activity "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("top")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("grep")]),s._v(" ACTIVITY                                                                         \n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("br"),s._v(" "),t("h3",{attrs:{id:"查看当前界面fragment"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#查看当前界面fragment"}},[s._v("#")]),s._v(" 查看当前界面Fragment")]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("adb shell "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("\"dumpsys activity top | grep '#0: ' | tail -n 1\"")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[t("strong",[s._v("命令执行结果：")])]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#0: DevelopmentSettingsDashboardFragment{d1b926e #1 id=0x7f0a03e2}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("br"),s._v(" "),t("h3",{attrs:{id:"查看activity任务栈"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#查看activity任务栈"}},[s._v("#")]),s._v(" 查看Activity任务栈")]),s._v(" "),t("blockquote",[t("p",[s._v("(仅适用android11以及以上)，最好是打断点来查看堆栈吧")])]),s._v(" "),t("p",[t("strong",[s._v("命令查看：")])]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("adb shell "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("\"dumpsys activity activities | grep '* ActivityRecord{'\"")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[t("strong",[s._v("运行结果")])]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("* ActivityRecord"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("93779f2 u0 com.miui.home/.launcher.Launcher t2"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n* ActivityRecord"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("1fd1f6d u0 com.tencent.mm/.ui.LauncherUI t57"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n* ActivityRecord"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("b2d7811 u0 top.iqqcode.app2/.MainActivity t56"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("p",[t("strong",[s._v("windows下可以将下面代码保存成bat文件直接运行：")])]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("@echo off "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&")]),s._v("PUSHD %~DP0 "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&")]),s._v("TITLE Settings Tool\n\n:menu\ncls\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" Notes: Please connect device with adb, it"),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('\'s only adapter for Android 11.\necho === Menu ===\necho [1] view top activity\necho [2] view top fragment\necho [3] view activity stack\necho ============\nset /p user_input=Please choose menu:\nif %user_input%==1 goto topActivity\nif %user_input%==2 goto topFragment\nif %user_input%==3 goto activityStack\nif not %user_input%=="" goto menu\n\n:topActivity\nadb wait-for-device\nadb shell "dumpsys activity top | grep ACTIVITY | tail -n 1"\necho. & pause\ngoto menu\n\n:topFragment\nadb wait-for-device\nadb shell "dumpsys activity top | grep \'')]),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#0: ' | tail -n 1\"")]),s._v("\necho. "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&")]),s._v(" pause\ngoto menu\n\n:activityStack\nadb wait-for-device\nadb shell "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("\"dumpsys activity activities | grep '* ActivityRecord{'\"")]),s._v("\necho. "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&")]),s._v(" pause\ngoto menu\n\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br"),t("span",{staticClass:"line-number"},[s._v("22")]),t("br"),t("span",{staticClass:"line-number"},[s._v("23")]),t("br"),t("span",{staticClass:"line-number"},[s._v("24")]),t("br"),t("span",{staticClass:"line-number"},[s._v("25")]),t("br"),t("span",{staticClass:"line-number"},[s._v("26")]),t("br"),t("span",{staticClass:"line-number"},[s._v("27")]),t("br"),t("span",{staticClass:"line-number"},[s._v("28")]),t("br"),t("span",{staticClass:"line-number"},[s._v("29")]),t("br"),t("span",{staticClass:"line-number"},[s._v("30")]),t("br"),t("span",{staticClass:"line-number"},[s._v("31")]),t("br"),t("span",{staticClass:"line-number"},[s._v("32")]),t("br"),t("span",{staticClass:"line-number"},[s._v("33")]),t("br"),t("span",{staticClass:"line-number"},[s._v("34")]),t("br")])]),t("p",[s._v("运行结果：")]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("Notes: Please connect device with adb, it's only adapter "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" Android "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("11")]),s._v(".\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" Menu "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" view "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("top")]),s._v(" activity\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" view "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("top")]),s._v(" fragment\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" view activity stack\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),s._v("\nPlease choose menu:2\n        "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#0: AppCategorySelectFragment{4c31805 #0 id=0x7f0a004e}")]),s._v("\n\n请按任意键继续. "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(".")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(".")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br")])]),t("br"),s._v(" "),t("hr"),s._v(" "),t("br"),s._v(" "),t("h2",{attrs:{id:"uiautomatorviewer工具"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#uiautomatorviewer工具"}},[s._v("#")]),s._v(" UIAutomatorViewer工具")]),s._v(" "),t("p",[s._v("进入Android SDK文件夹，在"),t("code",[s._v("tools/bin")]),s._v("下的"),t("code",[s._v("uiautomatorviewer.bat")]),s._v("，命令行进入该目录下运行")]),s._v(" "),t("blockquote",[t("p",[s._v("该工具是Android SDK自带的；双击可能无响应或者出错，要用命令行运行")])]),s._v(" "),t("p",[t("img",{attrs:{src:"https://iqqcode-blog.oss-cn-beijing.aliyuncs.com/img-2021-later/202110242145734.png",alt:"image-20211024214547470"}})]),s._v(" "),t("p",[t("img",{attrs:{src:"https://iqqcode-blog.oss-cn-beijing.aliyuncs.com/img-2021-later/202110242150857.png",alt:"image-20211024215001605"}})]),s._v(" "),t("br"),s._v(" "),t("hr"),s._v(" "),t("br"),s._v(" "),t("h2",{attrs:{id:"layout-inspector"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#layout-inspector"}},[s._v("#")]),s._v(" Layout Inspector")]),s._v(" "),t("p",[s._v("官方文档："),t("a",{attrs:{href:"https://developer.android.google.cn/studio/debug/layout-inspector",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://developer.android.google.cn/studio/debug/layout-inspector"),t("OutboundLink")],1)])])}),[],!1,null,null,null);t.default=n.exports}}]);