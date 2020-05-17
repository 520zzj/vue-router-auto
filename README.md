

<h2>
    自动注册路由
</h2>
<p>1.按业务功能划分组件，一个modal一个大的功能模块，modal下面的page保存功能相关的页面，小组件保存在components</p>
<p>2.首页路由/index，modal1下面的page下面的modal1.second.vue的path为/modal1/second,以此类推</p>
<p>3.关键代码：require.context()和r(item).default</p>
