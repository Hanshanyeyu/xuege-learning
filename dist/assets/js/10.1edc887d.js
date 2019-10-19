(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{223:function(a,s,e){"use strict";e.r(s);var o=e(0),n=Object(o.a)({},(function(){var a=this,s=a.$createElement,e=a._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[e("h1",{attrs:{id:"css模块化"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#css模块化","aria-hidden":"true"}},[a._v("#")]),a._v(" css模块化")]),a._v(" "),e("h4",{attrs:{id:"为什么要css模块化？"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#为什么要css模块化？","aria-hidden":"true"}},[a._v("#")]),a._v(" 为什么要CSS模块化？")]),a._v(" "),e("blockquote",[e("p",[a._v("你是否为class命名而感到苦恼？\n你是否有怕跟别人使用同样class名而感到担忧？\n你是否因层级结构不清晰而感到烦躁？\n你是否因代码难以复用而感到不爽？\n你是否因为common.css的庞大而感到恐惧？")])]),a._v(" "),e("p",[a._v("如果有，恭喜你来对了地方！本文会为您一一解决这些难题！")]),a._v(" "),e("h5",{attrs:{id:"那么如何解决css命名问题？"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#那么如何解决css命名问题？","aria-hidden":"true"}},[a._v("#")]),a._v(" 那么如何解决CSS命名问题？")]),a._v(" "),e("p",[a._v("我们看一下CSS是怎么规范的：使用有意义的或通用的ID和class命名。ID和class的命名应反映该元素的功能或使用通用名称，而不要用抽象的晦涩的命名。反映元素的使用目的是首选；使用通用名称代表该元素不表特定意义，与其同级元素无异，通常是用于辅助命名；使用功能性或通用的名称可以更适用于文档或模版变化的情况。")]),a._v(" "),e("blockquote",[e("p",[a._v("常用命名（多记多查英文单词）：page、wrap、layout、header(head)、footer(foot、ft)、 content(cont)、menu、nav、main、submain、sidebar(side)、logo、banner、 title(tit)、popo(pop)、icon、note、btn、txt、iblock、window(win)、tips等")])]),a._v(" "),e("p",[e("em",[a._v("注：类型选择器避免同时使用标签、ID和class作为定位一个元素选择器；从性能上考虑也应尽量减少选择器的层级。")])]),a._v(" "),e("h5",{attrs:{id:"如何构建结构清晰的css？"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#如何构建结构清晰的css？","aria-hidden":"true"}},[a._v("#")]),a._v(" 如何构建结构清晰的CSS？")]),a._v(" "),e("p",[a._v("大家都说CSS学和写都简单，那么写了多年CSS的同学是否有静下来思考过，自己写CSS是有较为系统的和具有一定规范的，而不是草率的写CSS。另外就是自己写的CSS在团队中，别的同学是否能看到代码就知道您写的是什么？如果没有，那不仿看看这里提到的一些概念与思想，比如：Sass 、SCSS、LESS、BEM、OOCSS、AMCSS等。让我们一起来深入了解css吧?")]),a._v(" "),e("ul",[e("li",[e("h6",{attrs:{id:"首先了解一下bem（我个人比较喜欢的）"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#首先了解一下bem（我个人比较喜欢的）","aria-hidden":"true"}},[a._v("#")]),a._v(" 首先了解一下BEM（我个人比较喜欢的）")])])]),a._v(" "),e("blockquote",[e("p",[a._v("BEM的意思就是块（block）、元素（element）、修饰符（modifier）,是由Yandex团队提出的一种前端命名方法论。这种巧妙的命名方法让你的CSS类对其他开发者来说更加透明而且更有意义。BEM命名约定更加严格，而且包含更多的信息，它们用于一个团队开发一个耗时的大项目。")])]),a._v(" "),e("p",[a._v("命名约定的模式如下：")]),a._v(" "),e("pre",[e("code",[a._v(".block{}   // 块即是通常所说的 Web 应用开发中的组件或模块。每个块在逻辑上和功能上都是相互独立的。\n.block__element{}  // 元素是块中的组成部分。元素不能离开块来使用。BEM 不推荐在元素中嵌套其他元素。\n.block--modifier{}   // 修饰符用来定义块或元素的外观和行为。同样的块在应用不同的修饰符之后，会有不同的外观。\n")])]),a._v(" "),e("p",[e("em",[a._v("BEM不是一个框架，它只是一种思想")])]),a._v(" "),e("h6",{attrs:{id:"bem优缺点"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#bem优缺点","aria-hidden":"true"}},[a._v("#")]),a._v(" BEM优缺点")]),a._v(" "),e("blockquote",[e("p",[a._v("优点：BEM 的优点在于所产生的 CSS 类名都只使用一个类别选择器，可以避免传统做法中由于多个类别选择器嵌套带来的复杂的属性级联问题。在 BEM 命名规则中，所有的 CSS 样式规则都只用一个类别选择器。因此所有样式规则的特异性（specificity）都是相同的，也就不存在复杂的优先级问题。这可以简化属性值的层叠规则。代码清单中的命名规则的好处在于每个 CSS 类名都很简单明了，而且类名的层次关系可以与 DOM 节点的树型结构相对应。\n缺点： CSS 类名会比较长而且复杂。乍看之下，根据 BEM 命名规则产生的 CSS 类名都会很复杂，但实际上在熟悉了命名规则之后，可以很容易理解其含义。")])]),a._v(" "),e("ul",[e("li",[e("h6",{attrs:{id:"我们再看一下oocss（面向对象css）"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#我们再看一下oocss（面向对象css）","aria-hidden":"true"}},[a._v("#")]),a._v(" 我们再看一下OOCSS（面向对象CSS）")])])]),a._v(" "),e("blockquote",[e("p",[a._v("OOCSS 表示的是面向对象 CSS（Object Oriented CSS），是一种把面向对象方法学应用到 CSS 代码组织和管理中的实践。 OOCSS最关键的一点就是：提高他的灵活性和可重用性。这个也是OOCSS最重要的一点。OOCSS主张是通过在基础组件中添加更多的类，从而扩展基础组件的CSS规则，从而使CSS有更好的扩展性。")])]),a._v(" "),e("p",[a._v("我们有一个容器是页面page的1/4宽，有一个蓝色的背景，1px灰色的边框，10px的左右边距，5px的上边距，10px的下边距，以前对于这样一个样式，我们常常给这个容器创建一个类，并把这些样式全部加上。像下面这样。")]),a._v(" "),e("pre",[e("code",[a._v('// template\n<div class="size1of4"></div>\n// style\n.size1of4 {\n  background: blue;\n  border: 1px solid #ccc;\n  margin: 5px 10px 10px;\n  width: 25%;\n}\n')])]),a._v(" "),e("p",[a._v("然而使用oocss的话，我们不这样做，我把为这个容器创建更多的类，并且每个样式对应一个类，这样是为了后面可以重复使用这些组件的样式，避免重复写相同的样式，就拿这个实例来说，我们给这个容器增加下面的类：bgBlue,solidGray,mts,mlm,mrm,mbm")]),a._v(" "),e("pre",[e("code",[a._v('// template\n<div class="size1of4 bgBlue solidGray mts mlm mrm mbm"></div>\n// style\n.size1of4 {width: 25%;}\n.bgBlue {background:blue}\n.solidGray {border: 1px solid #ccc}\n.mts {margin-top: 5px}\n.mrm {margin-right: 10px}\n.mbm {margin-bottom: 10px}\n.mlm {margin-left: 10px}\n')])]),a._v(" "),e("p",[a._v("OOCSS的优点")]),a._v(" "),e("ul",[e("li",[a._v("减少CSS代码")]),a._v(" "),e("li",[a._v("具有清洁的HTML标记，有语义的类名，逻辑性强的层次关系")]),a._v(" "),e("li",[a._v("语义标记，有助于SEO")]),a._v(" "),e("li",[a._v("更好的页面优化，更快的加载时间（因为有很多组件重用）")]),a._v(" "),e("li",[a._v("可扩展的标记和CSS样式，有更多的组件可以放到库中，而不影响其他*\n的组件")]),a._v(" "),e("li",[a._v("能轻松构造新的页面布局，或制作新的页面风格")])]),a._v(" "),e("p",[a._v("OOCSS的缺点")]),a._v(" "),e("ul",[e("li",[e("p",[a._v("OOCSS适合真正的大型网站开发，因为大型网站用到的可重用性组件特别的多，如果运用在小型项目中可能见不到什么成效。所以用不用OOCSS应该根据你的项目来决定。")])]),a._v(" "),e("li",[e("p",[a._v("如果没用巧妙的使用，创建组件可能对于你来说是一堆没用的东西，成为一烂摊子，给你的维护带来意想不到的杯具，说不定还是个维护的噩梦。")])]),a._v(" "),e("li",[e("p",[a._v("最好给每一个组件备写一份说明文档，有助于调用与维护")])]),a._v(" "),e("li",[e("h5",{attrs:{id:"amcss（属性模块）"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#amcss（属性模块）","aria-hidden":"true"}},[a._v("#")]),a._v(" AMCSS（属性模块）")])])]),a._v(" "),e("blockquote",[e("p",[a._v("属性模块或者说AM，其核心就是关于定义命名空间用来写样式。通俗的讲就是，给一个元素加上属性，再通过属性选择器定位到这个元素。达到避免过多的使用class。")])]),a._v(" "),e("pre",[e("code",[a._v('// template\n<div am- Row ></div>\n<div am- Column = "12"> Full < /div> \n</ div> <div am- Row > <div am- Column = "4"> Thirds </div> \n<div am- Column = "4"> Thirds </div> \n<div am- Column = "4"> Thirds < /div> </ div> \n// style \n[am- Row ] { /* max-width, clearfixes */ } \n[am- Column ~= "1" ] { /* 1/12th width, floated */ } \n[am- Column ~= "2" ] { /* 1/6th width, floated */ } \n[am- Column ~= "3" ] { /* 1/4th width, floated */ } \n[am- Column ~= "4" ] { /* 1/3rd width, floated */ } \n[am- Column ~= "5" ] { /* 5/12th width, floated */ } /* etc */ \n[am- Column ~= "12" ] { /* 100% width, floated */ }\n')])]),a._v(" "),e("p",[a._v("你会注意到第一件事情就是有am-前缀。这也是AM核心部分，确保属性模块不会与现有属性冲突。你可以使用你自己喜欢的任何前缀名，我常使用的是ui-、css-或者其他前缀，但这些示例中使用的是am-前缀。HTML的有效性对你或你的项目来说是非常重要，就类似于使用data-前缀开头定义的属性类似。\n你可能会注意到的第二件事情就是类似于1、4或12这样的值，使用类名变得极为麻烦——造成冲突的机会很多。但定义了我们自己的命名空间，实际上将空间变得很小，用于工作中不会造成冲突。为了更好的工作，可以自由选择最简明而且有意义的标记。")]),a._v(" "),e("blockquote",[e("p",[a._v("我们虽然有这么多的好的方案去解决css的一些难题，但是有没有一种东西或者工具来代替我们去做这些呢，作为一个程序员我们不喜欢做太麻烦的事情。那么接下来我们谈一谈css的构建工具")])]),a._v(" "),e("h5",{attrs:{id:"ok，我们来探索一下webpack是怎么实现模块化的。"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#ok，我们来探索一下webpack是怎么实现模块化的。","aria-hidden":"true"}},[a._v("#")]),a._v(" OK，我们来探索一下webpack是怎么实现模块化的。")]),a._v(" "),e("blockquote",[e("p",[e("em",[a._v("With :local (without brackets) local mode can be switched on for this selector. :global(.className) can be used to declare an explicit global selector. With :global (without brackets) global mode can be switched on for this selector.")]),a._v("\nwebpack会把class分为两种，一种是local（本地的），一种是global（全局的）。默认导出的都是本地的，但是你可以通过 :global(...)开关来控制导出全局。下面我们看一下栗子。")])]),a._v(" "),e("pre",[e("code",[a._v("// 输入\n: local (.className) { background: red; }\n: local .className { color: green; } \n: local (.className .subClass) { color: green; } \n: local .className .subClass : global (. global - class -name) { color: blue; } \n// 导出 \n._23_aKvs-b8bW2Vg3fwHozO { background: red; } \n._23_aKvs-b8bW2Vg3fwHozO { color: green; } \n._23_aKvs-b8bW2Vg3fwHozO ._13LGdX8RMStbBE9w-t0gZ1 { color: green; } \n._23_aKvs-b8bW2Vg3fwHozO ._13LGdX8RMStbBE9w-t0gZ1 . global - class -name { color: blue; }\n")])]),a._v(" "),e("blockquote",[e("p",[a._v("：local（className）被编译为唯一可识别的标示，：global（className）原样输出，当然我们也可以控制导出的格式。配置如下：")])]),a._v(" "),e("pre",[e("code",[a._v("{\n  test: /\\.css$/ ,\n  use : [\n    {\n     loader: 'css-loader',\n     options: {\n       modules: true ,\n       localIdentName: '[path][name]__[local]--[hash:base64:5]'\n     }\n   }\n ]\n}\n")])]),a._v(" "),e("h5",{attrs:{id:"css的scoped实现？"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#css的scoped实现？","aria-hidden":"true"}},[a._v("#")]),a._v(" CSS的scoped实现？")]),a._v(" "),e("p",[a._v("现在在各种框架中都会有scoped属性，使我们的css具有模块化性质，不会污染到其他模块，那么scoped是如何实现的呢？我们一起来揭开它神秘的面纱吧？")]),a._v(" "),e("p",[a._v("如果你是一个勤奋好学的同学，你一定会发现在HTML的style标签中有一个scoped属性。让我们来一起看一下这个属性的神奇吧。")]),a._v(" "),e("blockquote",[e("p",[a._v("一直以来，文档上的STYLE元素通常都是作用域全局的，选择器按照全局的CSS优先规则来设置的。要实现局部的选择需要先选到容器元素，再用后代选择器来实现。scoped属性可以让STYLE元素不再作用于全局，而从当前STYLE元素所在的容器开始选择后代。")])]),a._v(" "),e("pre",[e("code",[a._v("<div>\n  <style scoped >\n    span {color:red;}\n  </style> \n  <span> 我是第1个DIV内的SPAN </span>\n</div> \n<div> \n  <style scoped > \n    span {color:green;}\n  </style> \n  <span> 我是第2个DIV内的SPAN </span> \n</div>\n<div> \n  <span> 我是第3个DIV内的SPAN </span> \n</div>\n")])]),a._v(" "),e("p",[a._v("结果：")]),a._v(" "),e("p",[e("img",{attrs:{src:"http://upload-images.jianshu.io/upload_images/3357019-3777eabe5e445f27.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240",alt:"结果"}})]),a._v(" "),e("p",[a._v("我们可以看见第三个div并没有被第一及第二个style所感染，也就是说带有scoped属性的css是一个独立的作用域，不会影响到其它模块！！太好了，那我们以后在style里面加上scoped属性就可以完美解决啦"),e("img",{attrs:{src:"http://upload-images.jianshu.io/upload_images/3357019-250560069c474da4.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240",alt:""}}),a._v("慢！"),e("strong",[a._v("BUT")]),a._v("，这种方法只有在火狐浏览器才生效，其它浏览器即使最新的chrome浏览器也不支持哦。我@#￥%……")]),a._v(" "),e("p",[a._v("不要急年轻人，我们来看一下vue的代码，当我们在style中加了scoped属性后")]),a._v(" "),e("p",[e("img",{attrs:{src:"http://upload-images.jianshu.io/upload_images/3357019-ca9221a7cf1730b8.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240",alt:"微信图片_20170816201320.png"}})]),a._v(" "),e("p",[a._v("咦，这不就是我们刚刚讲过的AMCSS（属性模块）的应用吗？也就是说vue在编译的时候，把带有scoped属性的的模块，加上了一个唯一的属性，然后通过类名+属性选择器的方法来实现模块化！")]),a._v(" "),e("p",[a._v("其实其他框架也是用的类似的方法，我们再看一下，小程序wepy框架的实现吧？")]),a._v(" "),e("p",[e("img",{attrs:{src:"http://upload-images.jianshu.io/upload_images/3357019-b54657081b02ac6f.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240",alt:"微信图片_20170817161148.png"}})]),a._v(" "),e("p",[a._v("这个是我们刚才讲过OOCSS（面对对象CSS）！！")]),a._v(" "),e("p",[a._v("对的，这样结合框架来讲是不是能够更能深刻理解我们刚才讲过的内容了啊？")]),a._v(" "),e("h5",{attrs:{id:"如何按需加载css？"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#如何按需加载css？","aria-hidden":"true"}},[a._v("#")]),a._v(" 如何按需加载css？")]),a._v(" "),e("blockquote",[e("p",[a._v("有时候我们需要把一些有用的常见的css放到一个common.css里面，但是当我们项目足够大的时候，common的内容就会变得异常庞大，而且难以维护。")])]),a._v(" "),e("p",[a._v("首先我们不得不说一下当下有几个比较火的CSS预处理器，Less、Sass 、Stylus和postCss，这是一个CSS史上的巨大飞跃。他主要提供了以下功能")]),a._v(" "),e("ul",[e("li",[a._v("嵌套语法")]),a._v(" "),e("li",[a._v("变量")]),a._v(" "),e("li",[a._v("@import")]),a._v(" "),e("li",[a._v("混入")]),a._v(" "),e("li",[a._v("继承")]),a._v(" "),e("li",[a._v("函数")]),a._v(" "),e("li",[a._v("逻辑控制")])]),a._v(" "),e("p",[a._v("了解了css预处理器，那么我们如何优化我们的common.css呢？")]),a._v(" "),e("blockquote",[e("p",[a._v("要想解决这个问题，我们首先来看一看LESS中的mixin是如何运作的。")])]),a._v(" "),e("pre",[e("code",[a._v("// 你可以混合“类”选择器或者“id”选择器，例如：\n.a, #b {\n  color: red;\n}\n.mixin-class\n{\n  .a();\n}\n.mixin-id {  \n  #b();\n}\n")])]),a._v(" "),e("p",[a._v("以上将得到:")]),a._v(" "),e("pre",[e("code",[a._v(".a, #b {\n  color: red;\n}\n.mixin-class\n{\n  color: red;\n}\n.mixin-id {\n  color: red;\n}  \n")])]),a._v(" "),e("p",[a._v("小提示：当你调用混合集的时候，括号可加可不加。")]),a._v(" "),e("pre",[e("code",[a._v(".a();  //这两种调用方式效果是一样的\n.a;\n")])]),a._v(" "),e("p",[a._v("如果你想要创建一个混合集，但是却不想让它输出到你的样式中，你可以在混合集的名字后面加上一个括号。")]),a._v(" "),e("pre",[e("code",[a._v(".my-mixin {\n  color: black;\n}\n.my-other-mixin() {\n  background: white;\n}\n.class {\n  .my-mixin;\n  .my-other-mixin;\n}\n")])]),a._v(" "),e("p",[a._v("输出：")]),a._v(" "),e("pre",[e("code",[a._v(".my-mixin {\n  color: black;\n}\n.class {\n  color: black;\n  background: white;\n}\n")])]),a._v(" "),e("p",[a._v("好了，我们知道这个原理就可以用less中的mixins重新修改我们的common.less了，而且不会显得非常臃肿，我们可以按需加载我们的样式了，是不是很棒啊")]),a._v(" "),e("p",[e("img",{attrs:{src:"http://upload-images.jianshu.io/upload_images/3357019-8e02ac3441c5066d.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240",alt:""}})]),a._v(" "),e("blockquote",[e("p",[a._v("我们的CSS模块化就讲到这里了，有什么意见或建议可以联系我哦！")])])])}),[],!1,null,null,null);s.default=n.exports}}]);