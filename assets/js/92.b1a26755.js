(window.webpackJsonp=window.webpackJsonp||[]).push([[92],{419:function(n,a,t){"use strict";t.r(a);var e=t(3),r=Object(e.a)({},(function(){var n=this,a=n._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[a("h5",{attrs:{id:"fragment概述"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#fragment概述"}},[n._v("#")]),n._v(" Fragment概述")]),n._v(" "),a("p",[n._v("Fragment是Activity中用户界面的一个行为或者说是一部分。主要是支持大屏幕上动态显示和更为灵活的去组合或是交换UI组件，通过将Activity的布局分割成若干个fragment，可以在运行时编辑activity的呈现，并且那些变化会被保存在由activity管理的后台栈里面。\n**Fragment必须总是被嵌入到一个activity之中，**并且fragment的生命周期直接接受其宿主activity的生命周期的影响。你可以认为fragment是activity的一个模块零件，它有自己的生命周期，接收它自己的输入的事件，并且可以在activity运行时添加或者删除。\n**应该将每一个fragment设计为模块化和可复用化的activity组件。**也就是说，你可以在多个activity中引用同一个fragment，因为fragment定义了它自己的布局，并且使用它本身生命周期回调的行为。")]),n._v(" "),a("ul",[a("li",[a("p",[n._v("先看fragment生命周期图：")]),n._v(" "),a("p",[a("img",{attrs:{src:"https://iqqcode-blog.oss-cn-beijing.aliyuncs.com/img-2021-befo/20210328203650.webp",alt:"img"}}),n._v(" "),a("em",[n._v("Fragment周期图")])])]),n._v(" "),a("li",[a("p",[n._v("在看Fragment依附于Activity的生命状态图：")]),n._v(" "),a("p",[a("img",{attrs:{src:"https://iqqcode-blog.oss-cn-beijing.aliyuncs.com/img-2021-befo/20210328203644.webp",alt:"img"}}),n._v(" "),a("em",[n._v("Fragment和Activity生命周期综合图")])])])]),n._v(" "),a("p",[n._v("Fragment生命周期中的那么多方法，快来学习一下吧！go go go")]),n._v(" "),a("h5",{attrs:{id:"fragment生命周期方法含义"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#fragment生命周期方法含义"}},[n._v("#")]),n._v(" Fragment生命周期方法含义：")]),n._v(" "),a("ul",[a("li",[a("strong",[a("code",[n._v("public void onAttach(Context context)")])]),n._v("\nonAttach()方法会在Fragment与Activity窗口关联后立刻调用。从该方法开始，就可以通过Fragment.getActivity()方法获取与Fragment关联的Activtiy窗口对象，但因为Fragment的控件未初始化，所以不能够操作控件。")]),n._v(" "),a("li",[a("strong",[a("code",[n._v("public void onCreate(Bundle savedInstanceState)")])]),n._v("\n在调用完onAttach()执行完之后，立即就会调用onCreate()方法，可以在Bundle对象中获取一些在Activity中传过来的数据。通常会在该方法中读取保存的转态，获取或初始化一些数据。在该方法中不要进行耗时操作，不然Activity窗口不会显示。")]),n._v(" "),a("li",[a("strong",[a("code",[n._v("public View onCreateView(LayoutInflater inflater, ViewGroup container,Bundle savedInstanceState)")])]),n._v("\n该方法是Fragment很重要的一个生命周期方法，因为会在该方法中创建Fragment显示的View，其中inflater是用来装载布局文件的，container是"),a("fragment",[n._v("标签的父标签对应对象，saveInstanceState参数可以获取Fragment保存的转态，如果未保存那么就为null。")])],1),n._v(" "),a("li",[a("strong",[a("code",[n._v("public void onViewCreated(View view,Bundle savedInstanceState)")])]),n._v("\nAndroid在创建完Fragment中的View对象之后，会立刻回调该方法。其中view参数就是onCreateView中返回的view，而bundle对象用于一般用途。")]),n._v(" "),a("li",[a("strong",[a("code",[n._v("public void onActivityCreated(Bundle savedInstanceState)")])]),n._v("\n在Activity的onCreate()方法执行完之后，Android系统会立刻调用该方法，表示Activity窗口已经初始化完成，从这一个时候开始，就可以在Fragment中使用getActivity().findViewById(R.id.xxx)；来操作Activity中的view了。")]),n._v(" "),a("li",[n._v("​        "),a("strong",[a("code",[n._v("public void onStart()")])]),n._v("\n这个没啥可讲的，但是一个细节需要知道，当系统调用该方法的时候，fragment已经显示在UI上了，但还不能进行互动，因为onResume()方法还没有执行完。")]),n._v(" "),a("li",[a("strong",[a("code",[n._v("public void onResume()")])]),n._v("\n该方法为fragment从创建到显示Android系统调用的最后一个生命周期方法，调用完该方法时候，fragment就可以与用户互动了。")]),n._v(" "),a("li",[a("strong",[a("code",[n._v("public void onPause()")])]),n._v("\nfragment由活动状态变成非活跃执行的第一个回调方法，通常可以在这个方法中保存一些需要临时暂停的工作。例如：存音乐播放速度，然后在onResume()方法中恢复音乐播放进度。")]),n._v(" "),a("li",[a("strong",[a("code",[n._v("public void onStop()")])]),n._v("\n当onStop()返回的时候，fragment将从屏幕上消失。")]),n._v(" "),a("li",[a("strong",[a("code",[n._v("public void onDestoryView()")])]),n._v("\n该方法的调用意味着在onCreateView()中创建的视图都将被移除。")]),n._v(" "),a("li",[a("strong",[a("code",[n._v("public void onDestroy()")])]),n._v("\nAndroid在Fragment不再使用时会调用该方法，要注意的是~这是Fragment还和Activity是藕断丝连！并且可以获得Fragment对象，但无法对获得的Fragment进行任何操作。")]),n._v(" "),a("li",[a("strong",[a("code",[n._v("public void onDetach()")])]),n._v("\n为Fragment生命周期中的最后一个方法，当该方法执行完后，Fragment与Activity不再有关联。")])]),n._v(" "),a("h5",{attrs:{id:"fragment比activity多了几个额外的生命周期回调方法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#fragment比activity多了几个额外的生命周期回调方法"}},[n._v("#")]),n._v(" Fragment比Activity多了几个额外的生命周期回调方法：")]),n._v(" "),a("ul",[a("li",[n._v("**onAttach(Activity)😗*当Fragment和Activity发生关联时使用。")]),n._v(" "),a("li",[n._v("**onCreateView(LayoutInflater,ViewGroup,Bundle)😗*创建该Fragment的视图")]),n._v(" "),a("li",[n._v("**onActivityCreate(Bundle)😗*当Activity的onCreate()方法返回时调用")]),n._v(" "),a("li",[n._v("**onDestoryView()😗*与onCreateView相对应，当该Fragment的视图被移除时调用")]),n._v(" "),a("li",[n._v("**onDetach()😗*与onAttach()相对应，当Fragment与Activity关联被取消时调用\n"),a("strong",[n._v("注意：除了onCreateView()方法，其他的所有的方法如果你重写了，必须调用父类对于该方法的实现")])])]),n._v(" "),a("h5",{attrs:{id:"管理fragment生命周期与管理activity生命周期很相像"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#管理fragment生命周期与管理activity生命周期很相像"}},[n._v("#")]),n._v(" 管理fragment生命周期与管理activity生命周期很相像")]),n._v(" "),a("p",[n._v("像activity一样，fragment也有三种状态：")]),n._v(" "),a("ul",[a("li",[a("p",[a("strong",[n._v("Resumed")]),n._v("\nfragment在运行中的activity中可见")])]),n._v(" "),a("li",[a("p",[a("strong",[n._v("Paused")]),n._v("\n另一个activity处于前台且得到焦点，但是这个fragment所在的activtiy仍然可见（前台activity部分透明，或者没有覆盖全屏）。")])]),n._v(" "),a("li",[a("p",[n._v("Stopped")]),n._v(" "),a("p",[n._v("fragment不可见。要么宿主activity已经停止，要么fragment已经从activity上移除，但已被添加到后台栈中。一个停止的fragment仍然活着（所有的状态和成员信息仍然由系统保留着）。但是，它对于用户来讲已经不再可见，并且如果activity被杀掉，它也将被杀掉。")]),n._v(" "),a("p",[n._v("————————————————————————————————")]),n._v(" "),a("p",[n._v("如果activity的进程被杀掉了，在activity被重新创建时，你恢复fragment状态。可以执行fragment的onSaveIntanceState()来保存状态（注意：fragment是在onCreate(),onCreateView()或者onActivityCreate()中进行恢复）")]),n._v(" "),a("p",[n._v("在生命周期方面，activity和fragment之间一个很重要的不同")]),n._v(" "),a("p",[n._v("就是在各自的后台栈中是如何存储的。当")]),n._v(" "),a("p",[n._v("activity停止时")]),n._v(" "),a("p",[n._v("，默认情况下activity被安置在由系统管理的activity后台栈中；")]),n._v(" "),a("p",[n._v("fragment")]),n._v(" "),a("p",[n._v("仅当在一个事务被移除时，通过显式调用addToBackStack()请求保存的实例，该fragment才被置于由宿主activity管理的后台栈。")]),n._v(" "),a("p",[n._v("要创建一个fragment，必须创建一个fragment的子类，一般情况下，我们至少需要实现以下几个fragment生命周期的方法:onCreate(),onCreateView(),onPause()")]),n._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v("@Override\npublic View onCreateView(LayoutInflater inflater, ViewGroup container,\n                                    Bundle savedInstanceState) {　\n          // Inflate the layout for this fragment\n         return inflater.inflate(R.layout.example_fragment, \n                                               container, false);\n}复制代码\n")])]),n._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[n._v("1")]),a("br"),a("span",{staticClass:"line-number"},[n._v("2")]),a("br"),a("span",{staticClass:"line-number"},[n._v("3")]),a("br"),a("span",{staticClass:"line-number"},[n._v("4")]),a("br"),a("span",{staticClass:"line-number"},[n._v("5")]),a("br"),a("span",{staticClass:"line-number"},[n._v("6")]),a("br"),a("span",{staticClass:"line-number"},[n._v("7")]),a("br")])]),a("p",[n._v("inflate()函数需要以下三个参数：")]),n._v(" "),a("p",[n._v("(1).要inflate的布局的资源Id")]),n._v(" "),a("p",[n._v("(2).被inflate的布局的父ViewGroup")]),n._v(" "),a("p",[n._v("(3).一个布尔值，表明在inflate期间被inflate的布局是否应该附上ViewGroup（第二个参数container）。（在这个例子中传入的是false，因为系统已经将被inflate的布局插入到容器中（container）——传入true会在最终的布局里创建一个多余的ViewGroup）")])])]),n._v(" "),a("h5",{attrs:{id:"fragment与activity之间的交互"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#fragment与activity之间的交互"}},[n._v("#")]),n._v(" Fragment与Activity之间的交互：")]),n._v(" "),a("ul",[a("li",[a("p",[n._v("将Fragment添加到activity之中\n可以通过在activtiy布局文件中声明fragment，用fragment标签把fragment插入到activity的布局中，或者是用应用程序源码将它添加到一个存在的ViewGroup中。但fragment并不是一定要作为activity布局的一部分，fragment也可以为activity隐身工作。\n"),a("strong",[n._v("(1).在activity的布局文件里声明fragment")]),n._v("\n可以像view一样为fragment指定布局属性。代码如下：")]),n._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v('  <?xml version="1.0" encoding="utf-8"?>\n  <LinearLayout xmlns:android="http://schemas.android.com/apk/res/android"\n      android:orientation="horizontal"\n      android:layout_width="match_parent"\n      android:layout_height="match_parent">　\n\n      <fragment android:name="com.example.test.FragmentOne"\n              android:id="@+id/fo"\n              android:layout_width="match_parent"\n              android:layout_height="match_parent" />\n  </LinearLayout>复制代码\n')])]),n._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[n._v("1")]),a("br"),a("span",{staticClass:"line-number"},[n._v("2")]),a("br"),a("span",{staticClass:"line-number"},[n._v("3")]),a("br"),a("span",{staticClass:"line-number"},[n._v("4")]),a("br"),a("span",{staticClass:"line-number"},[n._v("5")]),a("br"),a("span",{staticClass:"line-number"},[n._v("6")]),a("br"),a("span",{staticClass:"line-number"},[n._v("7")]),a("br"),a("span",{staticClass:"line-number"},[n._v("8")]),a("br"),a("span",{staticClass:"line-number"},[n._v("9")]),a("br"),a("span",{staticClass:"line-number"},[n._v("10")]),a("br"),a("span",{staticClass:"line-number"},[n._v("11")]),a("br")])]),a("p",[n._v("fragment标签中的android:name属性指定了布局中实例化Fragment类。\n当系统创建activity布局时，它实例化了布局文件中指定的每一个fragment，并为它们调用onCeateView()函数，以获取每一个fragment的布局。系统直接在元素的位置插入fragment返回的View。\n"),a("strong",[n._v("注意：每个fragment都需要一个唯一的标识，如果重启activity，系统可用来恢复fragment（并且可用来捕捉fragment的事务处理，例如：移除fragment），为fragment提供了ID有三种方法：")]),n._v("\n1:>用android:id属性提供一个唯一的标识\n2:>用android:tag属性提供一个唯一的字符串。\n3:>如果上述两种属性都没有，系统会使用其容器视图（view）的ID。\n"),a("strong",[n._v("(2).通过编码将fragment添加到已存在的ViewGroup中")]),n._v("\n在activity运行的任何时候，你都可以将fragment添加到activity布局中。要管理activity中的fragment，可以使用FragmentManager。可以通过在activity中调用getFragmentManager()获得。使用FragmentManager可以做如下事情，包括：\n1:>使用findFragmentById()（用于在activity布局中提供有界面的fragment或者findFragmentByTag()获取activity中存在的fragment（用于有界面或者没有界面的fragment））\n2:>使用popBackStack()（模仿用户的Back命令）从后台栈弹出fragment。\n3:>使用addOnBackStackChangeListener()注册一个监听后台栈变化的监听器。\n在android中，对fragment的事务操作都是通过FragmentTranSaction来执行。操作大致可以分为两类：\n1:>显示：add(),                replace(), show(), attach()\n2:>隐藏：remove(), hide(), detach()\n"),a("strong",[n._v("说明")]),n._v("：调用show() & hide()方法时，Fragment的生命周期方法并不会被执行，仅仅是Fragment的View被显示或者​隐藏。执行replace()时（至少两个Fragment），会执行第二个Fragment的onAttach()方法、执行第一个Fragment的onPause()-onDetach()方法，同时containerView会detach第一个Fragment的View。add()方法执行onAttach()-onResume()的生命周期，相对的remove()就是执行完成剩下的onPause()-onDetach()周期。\n可以像下面这样从Activity中取得FragmentTransaction的实例：")]),n._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v("FragmentManager fragmentManager = getFragmentManager()　\nFragmentTransaction fragmentTransaction = fragmentManager\n                                          .beginTransaction();复制代码\n")])]),n._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[n._v("1")]),a("br"),a("span",{staticClass:"line-number"},[n._v("2")]),a("br"),a("span",{staticClass:"line-number"},[n._v("3")]),a("br")])]),a("p",[n._v("可以用add()函数添加fragment，并指定要添加的fragment以及要将其插入到哪个视图（view）之中（注意commit事务）：")]),n._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v("ExampleFragment fragment = new ExampleFragment();\nfragmentTransaction.add(R.id.fragment_container, fragment);\nfragmentTransaction.commit();复制代码\n")])]),n._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[n._v("1")]),a("br"),a("span",{staticClass:"line-number"},[n._v("2")]),a("br"),a("span",{staticClass:"line-number"},[n._v("3")]),a("br")])]),a("p",[a("strong",[n._v("(3).添加没有界面的fragment")]),n._v("\n也可以使用fragment为activity提供后台动作，却不呈现多余的用户界面。想要添加没有界面的fragment ，可以使用add(Fragment, String)（为fragment提供一个唯一的字符串“tag”，而不是视图（view）ID）。这样添加了fragment，但是，因为还没有关联到activity布局中的视图（view） ，收不到onCreateView()的调用。所以不需要实现这个方法。对于无界面fragment，字符串标签是唯一识别它的方法。如果之后想从activity中取到fragment，需要使用findFragmentByTag()。")])]),n._v(" "),a("li",[a("p",[n._v("Fragment与Activity之间的交互可以通过Fragment.setArguments(Bundle args)以及Fragment.getArguments()来实现。")])])]),n._v(" "),a("h5",{attrs:{id:"fragment状态的持久化"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#fragment状态的持久化"}},[n._v("#")]),n._v(" Fragment状态的持久化：")]),n._v(" "),a("p",[n._v("由于Activity会经常性的发生配置变化，所以依附它的Fragment就有需要将其状态保存起来问题。下面有两种常用的方法去将Fragment的状态持久化。")]),n._v(" "),a("ul",[a("li",[a("p",[n._v("方法一\n可以通过"),a("code",[n._v("protected void onSaveInstanceState(Bundle outState),protected void onRestoreInstanceState(Bundle savedInstanceState)")]),n._v("状态保存和恢复的方法将状态持久化。")])]),n._v(" "),a("li",[a("p",[n._v("方法二（更为方便，让Android自动帮我们保存Fragment状态）\n**<1>.**我们只需要将Fragment在Activity中作为一个变量整个保存，只要保存了Fragment，那么Fragment的状态就得到保存了，所以我们就可以通过下面方法，进行获取Fragment数据。")]),n._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v("FragmentManager.putFragment(Bundle bundle, String key, Fragment \nfragment) 是在Activity中保存Fragment的方法。\nFragmentManager.getFragment(Bundle bundle, String key) \n是在Activity中获取所保存的Frament的方法。复制代码\n")])]),n._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[n._v("1")]),a("br"),a("span",{staticClass:"line-number"},[n._v("2")]),a("br"),a("span",{staticClass:"line-number"},[n._v("3")]),a("br"),a("span",{staticClass:"line-number"},[n._v("4")]),a("br")])]),a("p",[n._v("**<2>.**很显然，上述<1>中的key就传入Fragment的id，fragment就是你要保存状态的fragment，但，我们注意到上面的两个方法，第一个参数都是Bundle，这就意味着FragmentManager是通过Bundle去保存Fragment的。但是，这个方法仅仅能够保存Fragment中的控件状态，比如说：EditText中用户已经输入的文字（注意：在这里，控件需要设置一个id值，否则Android将不会为我们保存该控件的状态），而Fragment中需要持久化的变量依然会丢失，但依然有解决方法，就是利用方法一！\n**<3>.**下面给出状态的持久化实例代码：")]),n._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v('   /** Activity中的代码 **/\n   FragmentB fragmentB;\n\n  @Override\n  protected void onCreate(@Nullable Bundle savedInstanceState) {\n      super.onCreate(savedInstanceState);\n      setContentView(R.layout.fragment_activity);\n      if( savedInstanceState != null ){\n          fragmentB = (FragmentB) getSupportFragmentManager()\n                      .getFragment(savedInstanceState,"fragmentB");\n      }\n      init();\n  }\n\n  @Override\n  protected void onSaveInstanceState(Bundle outState) {\n      if( fragmentB != null ){\n         getSupportFragmentManager()\n           .putFragment(outState,"fragmentB",fragmentB);\n      }\n      super.onSaveInstanceState(outState);\n  }\n\n  /** Fragment中保存变量的代码 **/\n  @Nullable\n  @Override\n  public View onCreateView(LayoutInflater inflater, @Nullable \n      ViewGroup container, @Nullable Bundle savedInstanceState) {\n      AppLog.e("onCreateView");\n      if ( null != savedInstanceState ){\n          String savedString = savedInstanceState\n                               .getString("string");\n          //得到保存下来的string\n      }\n      View root = inflater.inflate(R.layout.fragment_a,null);\n      return root;\n  }\n\n  @Override\n  public void onSaveInstanceState(Bundle outState) {\n      outState.putString("string","anAngryAnt");\n      super.onSaveInstanceState(outState);\n  }复制代码\n')])]),n._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[n._v("1")]),a("br"),a("span",{staticClass:"line-number"},[n._v("2")]),a("br"),a("span",{staticClass:"line-number"},[n._v("3")]),a("br"),a("span",{staticClass:"line-number"},[n._v("4")]),a("br"),a("span",{staticClass:"line-number"},[n._v("5")]),a("br"),a("span",{staticClass:"line-number"},[n._v("6")]),a("br"),a("span",{staticClass:"line-number"},[n._v("7")]),a("br"),a("span",{staticClass:"line-number"},[n._v("8")]),a("br"),a("span",{staticClass:"line-number"},[n._v("9")]),a("br"),a("span",{staticClass:"line-number"},[n._v("10")]),a("br"),a("span",{staticClass:"line-number"},[n._v("11")]),a("br"),a("span",{staticClass:"line-number"},[n._v("12")]),a("br"),a("span",{staticClass:"line-number"},[n._v("13")]),a("br"),a("span",{staticClass:"line-number"},[n._v("14")]),a("br"),a("span",{staticClass:"line-number"},[n._v("15")]),a("br"),a("span",{staticClass:"line-number"},[n._v("16")]),a("br"),a("span",{staticClass:"line-number"},[n._v("17")]),a("br"),a("span",{staticClass:"line-number"},[n._v("18")]),a("br"),a("span",{staticClass:"line-number"},[n._v("19")]),a("br"),a("span",{staticClass:"line-number"},[n._v("20")]),a("br"),a("span",{staticClass:"line-number"},[n._v("21")]),a("br"),a("span",{staticClass:"line-number"},[n._v("22")]),a("br"),a("span",{staticClass:"line-number"},[n._v("23")]),a("br"),a("span",{staticClass:"line-number"},[n._v("24")]),a("br"),a("span",{staticClass:"line-number"},[n._v("25")]),a("br"),a("span",{staticClass:"line-number"},[n._v("26")]),a("br"),a("span",{staticClass:"line-number"},[n._v("27")]),a("br"),a("span",{staticClass:"line-number"},[n._v("28")]),a("br"),a("span",{staticClass:"line-number"},[n._v("29")]),a("br"),a("span",{staticClass:"line-number"},[n._v("30")]),a("br"),a("span",{staticClass:"line-number"},[n._v("31")]),a("br"),a("span",{staticClass:"line-number"},[n._v("32")]),a("br"),a("span",{staticClass:"line-number"},[n._v("33")]),a("br"),a("span",{staticClass:"line-number"},[n._v("34")]),a("br"),a("span",{staticClass:"line-number"},[n._v("35")]),a("br"),a("span",{staticClass:"line-number"},[n._v("36")]),a("br"),a("span",{staticClass:"line-number"},[n._v("37")]),a("br"),a("span",{staticClass:"line-number"},[n._v("38")]),a("br"),a("span",{staticClass:"line-number"},[n._v("39")]),a("br"),a("span",{staticClass:"line-number"},[n._v("40")]),a("br"),a("span",{staticClass:"line-number"},[n._v("41")]),a("br"),a("span",{staticClass:"line-number"},[n._v("42")]),a("br"),a("span",{staticClass:"line-number"},[n._v("43")]),a("br")])])])]),n._v(" "),a("h5",{attrs:{id:"静态的使用fragment"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#静态的使用fragment"}},[n._v("#")]),n._v(" 静态的使用Fragment")]),n._v(" "),a("p",[n._v("1.集成Fragment，重写onCreateView()决定Fragment的布局\n2.在Activity中声明此Fragment，就和普通的View一样。")]),n._v(" "),a("h5",{attrs:{id:"fragment常用的api"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#fragment常用的api"}},[n._v("#")]),n._v(" Fragment常用的API")]),n._v(" "),a("ul",[a("li",[n._v("android.support.v4.app.Fragment：主要用于定义Fragment")]),n._v(" "),a("li",[n._v("android.support.v4.app.FragmentManager ：主要用于在Activity中操作Fragment，可以使用"),a("code",[n._v("FragmentMagager.findFragmentById()和FragmentMagager.findFragmentByTag()")]),n._v("等方法去找到一个Fragment")]),n._v(" "),a("li",[n._v("android.support.v4.app.FragmentTransaction：保证一些Fragment操作的原子性，熟悉事务这个词。")]),n._v(" "),a("li",[n._v("主要的操作都是FragmentTransaction的方法（一般我们为了向下兼容，都会使用support.v4包里面的Fragment）\n"),a("code",[n._v("getFragmentManager() //Fragment若使用的是support.v4包中的，那就使用getSupportFragmentManager代替")])])]),n._v(" "),a("p",[a("a",{attrs:{href:"http://blog.csdn.net/u013531824/article/details/49333343",target:"_blank",rel:"noopener noreferrer"}},[n._v("链接：关于getChildFragmentManager()、 getFragmentManager()、getSupportFragmentManager()的使用"),a("OutboundLink")],1)]),n._v(" "),a("ul",[a("li",[a("p",[n._v("主要的操作都是FragmentTransaction的方法：")]),n._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v("  FragmentTransaction transaction = fm.benginTransatcion();//开启一个事务\n  //往Activity中添加一个Fragment\n  transaction.add() \n\n  transaction.remove() \n  //从Activity中移除一个Fragment，如果被移除的Fragment没有添    加到回退栈\n   （回退栈后面会详细说），这个Fragment实例将会被销毁。\n\n  transaction.replace()\n  //使用另一个Fragment替换当前的，实际上就是remove()然后add()的合体~\n\n  transaction.hide()\n  //隐藏当前的Fragment，仅仅是设为不可见，并不会销毁\n\n  transaction.show()\n  //显示之前隐藏的Fragment\n\n  detach()\n  //当fragment被加入到回退栈的时候，该方法与*remove()*的作用是相同的，\n  //反之，该方法只是将fragment从视图中移除，\n  //之后仍然可以通过*attach()*方法重新使用fragment，\n  //而调用了*remove()*方法之后，\n  //不仅将Fragment从视图中移除，fragment还将不再可用。\n\n  attach()\n  //重建view视图，附加到UI上并显示。\n\n  transatcion.commit()\n  //提交一个事务复制代码\n")])]),n._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[n._v("1")]),a("br"),a("span",{staticClass:"line-number"},[n._v("2")]),a("br"),a("span",{staticClass:"line-number"},[n._v("3")]),a("br"),a("span",{staticClass:"line-number"},[n._v("4")]),a("br"),a("span",{staticClass:"line-number"},[n._v("5")]),a("br"),a("span",{staticClass:"line-number"},[n._v("6")]),a("br"),a("span",{staticClass:"line-number"},[n._v("7")]),a("br"),a("span",{staticClass:"line-number"},[n._v("8")]),a("br"),a("span",{staticClass:"line-number"},[n._v("9")]),a("br"),a("span",{staticClass:"line-number"},[n._v("10")]),a("br"),a("span",{staticClass:"line-number"},[n._v("11")]),a("br"),a("span",{staticClass:"line-number"},[n._v("12")]),a("br"),a("span",{staticClass:"line-number"},[n._v("13")]),a("br"),a("span",{staticClass:"line-number"},[n._v("14")]),a("br"),a("span",{staticClass:"line-number"},[n._v("15")]),a("br"),a("span",{staticClass:"line-number"},[n._v("16")]),a("br"),a("span",{staticClass:"line-number"},[n._v("17")]),a("br"),a("span",{staticClass:"line-number"},[n._v("18")]),a("br"),a("span",{staticClass:"line-number"},[n._v("19")]),a("br"),a("span",{staticClass:"line-number"},[n._v("20")]),a("br"),a("span",{staticClass:"line-number"},[n._v("21")]),a("br"),a("span",{staticClass:"line-number"},[n._v("22")]),a("br"),a("span",{staticClass:"line-number"},[n._v("23")]),a("br"),a("span",{staticClass:"line-number"},[n._v("24")]),a("br"),a("span",{staticClass:"line-number"},[n._v("25")]),a("br"),a("span",{staticClass:"line-number"},[n._v("26")]),a("br"),a("span",{staticClass:"line-number"},[n._v("27")]),a("br"),a("span",{staticClass:"line-number"},[n._v("28")]),a("br"),a("span",{staticClass:"line-number"},[n._v("29")]),a("br")])]),a("p",[n._v("在调用commit()之前，可以将事务添加到fragment事务后台栈中（通过调用addToBackStatck()）。这个后台栈由activity管理，并且允许用户通过按BACK键回退到前一个fragment状态。\n下面的代码中一个fragment代替另一个fragment，并且将之前的fragment状态保留在后台栈中：")]),n._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v("Fragment newFragment = new ExampleFragment();\nFragmentTransaction transaction = getFragmentManager().beginTransaction();\ntransaction.replace(R.id.fragment_container, newFragment);\ntransaction.addToBackStack(null);\ntransaction.commit();复制代码\n")])]),n._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[n._v("1")]),a("br"),a("span",{staticClass:"line-number"},[n._v("2")]),a("br"),a("span",{staticClass:"line-number"},[n._v("3")]),a("br"),a("span",{staticClass:"line-number"},[n._v("4")]),a("br"),a("span",{staticClass:"line-number"},[n._v("5")]),a("br")])]),a("p",[a("strong",[n._v("注意")]),n._v("：\n如果添加多个变更事务（例如另一个add()或者remove()）并调用addToBackStack()，那么在调用commit()之前的所有应用的变更被作为一个单独的事务添加到后台栈中，并且BACK键可以将它们一起回退。\n当移除一个fragment时，如果调用了addToBackStack()，那么之后fragment会被停止，如果用户回退，它将被恢复过来。\n调用commit()并不立刻执行事务，相反，而是采取预约方式，一旦activity的界面线程（主线程）准备好便可运行起来。然而，如果有必要的话，你可以从界面线程调用executePendingTransations()立即执行由commit()提交的事务。\n只能在activity保存状态（当用户离开activity时）之前用commit()提交事务。如果你尝试在那时之后提交，会抛出一个异常。这是因为如果activity需要被恢复，提交后的状态会被丢失。对于这类丢失提交的情况，可使用commitAllowingStateLoss()")])])]),n._v(" "),a("h5",{attrs:{id:"管理fragment回退栈"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#管理fragment回退栈"}},[n._v("#")]),n._v(" 管理Fragment回退栈")]),n._v(" "),a("ul",[a("li",[a("p",[n._v("跟踪回退栈的状态")]),n._v(" "),a("p",[n._v("我们通过实现")]),n._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v("OnBackStackChangedListener\n")])]),n._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[n._v("1")]),a("br")])]),a("p",[n._v("接口来实现回退栈状态跟踪，具体代码如下：")]),n._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v("//implements接口\npublic class XXX implements FragmentManager.OnBackStackChangedListener \n//实现接口所要实现的方法\n@Override\npublic void onBackStackChanged() {\n  //do whatevery you want\n}\n//设置回退栈监听接口\ngetSupportFragmentManager().addOnBackStackChangedListener(this);复制代码\n")])]),n._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[n._v("1")]),a("br"),a("span",{staticClass:"line-number"},[n._v("2")]),a("br"),a("span",{staticClass:"line-number"},[n._v("3")]),a("br"),a("span",{staticClass:"line-number"},[n._v("4")]),a("br"),a("span",{staticClass:"line-number"},[n._v("5")]),a("br"),a("span",{staticClass:"line-number"},[n._v("6")]),a("br"),a("span",{staticClass:"line-number"},[n._v("7")]),a("br"),a("span",{staticClass:"line-number"},[n._v("8")]),a("br"),a("span",{staticClass:"line-number"},[n._v("9")]),a("br")])])]),n._v(" "),a("li",[a("p",[n._v("管理回退栈\n"),a("strong",[n._v("(1)."),a("code",[n._v("FragmentTransaction.addToBackStack(String)")])]),n._v("\n将一个刚刚添加的Fragment加入到回退栈中\n"),a("strong",[n._v("(2)."),a("code",[n._v("getSupportFragmentManager().getBackStackEntryCount()")])]),n._v("\n获取回退栈中的实体数量\n"),a("strong",[n._v("(3)."),a("code",[n._v("getSupportFragmentManager().popBackStack(String name, int flags)")])]),n._v("\n根据name立刻弹出栈顶的fragment\n"),a("strong",[n._v("(4)."),a("code",[n._v("getSupportFragmentManager().popBackStack(int id, int flags)")])]),n._v("\n根据id立刻弹出栈顶的fragment")])])])])}),[],!1,null,null,null);a.default=r.exports}}]);