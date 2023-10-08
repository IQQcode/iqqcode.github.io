(window.webpackJsonp=window.webpackJsonp||[]).push([[360],{683:function(e,r,t){"use strict";t.r(r);var a=t(3),n=Object(a.a)({},(function(){var e=this,r=e._self._c;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h2",{attrs:{id:"_1-报错内容"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_1-报错内容"}},[e._v("#")]),e._v(" 1. 报错内容")]),e._v(" "),r("p",[r("strong",[e._v("报错如下：")])]),e._v(" "),r("div",{staticClass:"language-shell line-numbers-mode"},[r("pre",{pre:!0,attrs:{class:"language-shell"}},[r("code",[e._v("Caused by: java.lang.RuntimeException: Duplicate class android.support.v4.app.INotificationSideChannel found "),r("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("in")]),e._v(" modules core-1.10.1-runtime "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("androidx.core:core:1.10.1"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v(" and support-compat-28.0.0-runtime "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("com.android.support:support-compat:28.0.0"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("\n")])]),e._v(" "),r("div",{staticClass:"line-numbers-wrapper"},[r("span",{staticClass:"line-number"},[e._v("1")]),r("br")])]),r("p",[r("img",{attrs:{src:"https://iqqcode-blog.oss-cn-beijing.aliyuncs.com/img/202310042338618.png",alt:"image-20231004233808435"}})]),e._v(" "),r("p",[r("strong",[e._v("报错环境：")])]),e._v(" "),r("ul",[r("li",[e._v("使用了 "),r("strong",[e._v("ARouter")]),e._v(" 构建组件化项目")]),e._v(" "),r("li",[e._v("使用了 "),r("strong",[r("RouterLink",{attrs:{to:"/『Bug踩坑记录』/01.Android/*https://xingyun.xiaojukeji.com/docs/dokit/#/androidGuide*"}},[e._v("Dokit")])],1)])]),e._v(" "),r("p",[e._v("怀疑可能是二者内部依赖有冲突")]),e._v(" "),r("div",{staticClass:"language-gradle line-numbers-mode"},[r("pre",{pre:!0,attrs:{class:"language-gradle"}},[r("code",[r("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("implementation")]),e._v(" "),r("span",{pre:!0,attrs:{class:"token string"}},[e._v("'androidx.appcompat:appcompat:1.6.1'")]),e._v("\n"),r("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("implementation")]),e._v(" "),r("span",{pre:!0,attrs:{class:"token string"}},[e._v("'com.google.android.material:material:1.9.0'")]),e._v("\n"),r("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("implementation")]),e._v(" "),r("span",{pre:!0,attrs:{class:"token string"}},[e._v("'androidx.constraintlayout:constraintlayout:2.1.4'")]),e._v("\n")])]),e._v(" "),r("div",{staticClass:"line-numbers-wrapper"},[r("span",{staticClass:"line-number"},[e._v("1")]),r("br"),r("span",{staticClass:"line-number"},[e._v("2")]),r("br"),r("span",{staticClass:"line-number"},[e._v("3")]),r("br")])]),r("h2",{attrs:{id:"_2-fix修复"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_2-fix修复"}},[e._v("#")]),e._v(" 2. Fix修复")]),e._v(" "),r("p",[e._v("在根目录的 "),r("code",[e._v("gradle.properties")])]),e._v(" "),r("p",[r("img",{attrs:{src:"https://iqqcode-blog.oss-cn-beijing.aliyuncs.com/img/202310042350492.png",alt:"image-20231004235023446"}})]),e._v(" "),r("p",[e._v("添加")]),e._v(" "),r("div",{staticClass:"language-groovy line-numbers-mode"},[r("pre",{pre:!0,attrs:{class:"language-groovy"}},[r("code",[e._v("android"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("enableJetifier"),r("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),r("span",{pre:!0,attrs:{class:"token boolean"}},[e._v("true")]),e._v("\n")])]),e._v(" "),r("div",{staticClass:"line-numbers-wrapper"},[r("span",{staticClass:"line-number"},[e._v("1")]),r("br")])]),r("p",[e._v("重新Build即可")]),e._v(" "),r("h2",{attrs:{id:"_3-android-enablejetifier-true是什么"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_3-android-enablejetifier-true是什么"}},[e._v("#")]),e._v(" 3. android.enablejetifier=true是什么")]),e._v(" "),r("h3",{attrs:{id:"_3-1-简介"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-简介"}},[e._v("#")]),e._v(" 3.1 简介")]),e._v(" "),r("p",[e._v("android.enablejetifier=true是一个新的构建选项，用于自动更新应用程序中使用的废弃Android支持库依赖项。")]),e._v(" "),r("p",[e._v("在构建Android应用程序时，为了使用最新的API和Bug修复，我们经常依赖于第三方库和支持库。在Android开发中，支持库是不可或缺的一部分。但是，由于废弃的支持库必须被替换为给定的AndroidX库，这可能会成为一个挑战。android.enablejetifier=true可以帮助我们解决这个问题。")]),e._v(" "),r("h3",{attrs:{id:"_3-2-android-enablejetifier-true是什么"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-android-enablejetifier-true是什么"}},[e._v("#")]),e._v(" 3.2 android.enablejetifier=true是什么")]),e._v(" "),r("p",[e._v("android.enablejetifier=true是一个Gradle选项，用于自动更新应用程序中使用的依赖项所需的库（例如，废弃的Android支持库）适用于AndroidX库。")]),e._v(" "),r("p",[e._v("AndroidX是一个重构的支持库。它摆脱了一些历史包名和命名空间问题，并提供了新的库来支持最新的Android API。虽然所有现有的第三方库和支持库都需要更新才能与AndroidX兼容，但使用Jetifier（一种二进制文件转换工具）可以自动将现有支持库转换为AndroidX依赖项。")]),e._v(" "),r("h3",{attrs:{id:"_3-3-android-enablejetifier-true的作用"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_3-3-android-enablejetifier-true的作用"}},[e._v("#")]),e._v(" 3.3 android.enablejetifier=true的作用")]),e._v(" "),r("p",[e._v("由于一些第三方库或依赖系统库仍然使用旧的Android支持库，它们可能无法与新的AndroidX库兼容。因此，当您升级到AndroidX时，Gradle可能会报告许多错误。这也许是因为有一些其他的库无法兼容AndroidX库。android.enablejetifier=true能够解决这个问题，因为它将旧支持库替换为新AndroidX库。")]),e._v(" "),r("p",[e._v("因此，当您升级到AndroidX并启用android.enablejetifier=true时，它将在构建过程中使用Jetifier运行，以确保app使用的所有依赖项都与AndroidX兼容。")]),e._v(" "),r("p",[e._v("使用android.enablejetifier=true，您可以实现以下两个功能：")]),e._v(" "),r("p",[e._v("将现有支持库转换为AndroidX库。\n保持与现有支持库兼容，以确保您的应用程序仍然能够使用旧的支持库。")]),e._v(" "),r("h3",{attrs:{id:"_3-4-android-enablejetifier-true的优缺点"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_3-4-android-enablejetifier-true的优缺点"}},[e._v("#")]),e._v(" 3.4 android.enablejetifier=true的优缺点")]),e._v(" "),r("p",[r("strong",[e._v("优点：")])]),e._v(" "),r("p",[e._v("自动更新旧的支持库为AndroidX库。这样可以避免手动更新所有依赖项的繁琐过程。\n保持与旧支持库的兼容性，以确保应用程序能够使用旧的支持库。\n能够减少代码中需要更改的地方。如果所有依赖项都能自动更新为AndroidX库，就不需要对代码进行更改。")]),e._v(" "),r("p",[r("strong",[e._v("缺点：")])]),e._v(" "),r("p",[e._v("需要更长的编译时间，因为Gradle编译器需要转换支持库到AndroidX库。\nJetifier无法更新某些依赖项，因此可能需要手动更新一些库以保持与AndroidX兼容。")]),e._v(" "),r("h3",{attrs:{id:"_3-5-结论"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_3-5-结论"}},[e._v("#")]),e._v(" 3.5 结论")]),e._v(" "),r("p",[e._v("android.enablejetifier=true可以为您的应用程序提供更好的兼容性和体验，而无需手动更新所有旧的支持库。虽然它有一些缺点，但优点远高于缺点。如果您正在更新应用程序到AndroidX，我们强烈建议启用android.enablejetifier=true选项。")]),e._v(" "),r("hr"),e._v(" "),r("p",[e._v("【参考文章】")]),e._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"https://www.python100.com/html/ZKJL337AB024.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("理解android.enablejetifier=true"),r("OutboundLink")],1)])])])}),[],!1,null,null,null);r.default=n.exports}}]);