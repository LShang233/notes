作者：猪猪也不容易
链接：https://www.nowcoder.com/discuss/540875?type=post&order=jing&pos=&page=2&ncTraceId=&channel=-1&source_id=search_post_nctrack
来源：牛客网



# link和@import的区别 

1. link是HTML标签，link是XHTML标签，除了加载CSS外，还可以定义RSS等其他事务，没有兼容问题；import是css
2. link引用CSS时，在页面载入时同时加载；而@import需要页面网页完全载入以后加载。
3. link支持使用Javascript控制DOM去改变样式；而@import不支持。
4. @import可以在CSS文件中再次引入其他样式表；而link不支持。
5. 相同样式，`@import`引入的这个样式将被该 CSS 文件本身的样式层叠掉

# CSS权重

**`!important > 行内样式 > ID > 类、伪类、属性 > 标签名、伪元素 > 继承 > 通配符`**

#  盒模型 

https://segmentfault.com/a/1190000015235886

1. 基本概念：标准模型+ IE模型(区别)

   - 他们的height和width代表的长度不同
   - 标准模型只包括内容，IE模型加上边框和内边距

2. CSS如何设置这两种模型

   可以通过box-sizing设置

   - ```css
     box-sizing:conent-box;
     box-sizing:border-box;
     ```

3. JS如何设置获取盒子模型对应的宽和高

   ```js
   dom.style.width/height
   dom.currentStyle.width/height  (ie支持)
   window.getComputedStyle(dom).width/height;
   dom.getBoundingClientRect().width/height;
   ```

4. 实例题(根据盒模型解释边距重叠)

5. BFC(边距重叠解决方案

#  display:none，visibility:hidden和opcatity:0的区别 

#  BFC相关 

1. https://www.cnblogs.com/qqinhappyhappy/p/11537432.html
2. BFC块级格式化上下文，一个独立的块级渲染区域，该区域拥有一套渲染规格来约束块级盒子的布局，且与区域外部无关
2. 设置 display：table/table-cell/table-captions/inline-block 
2. float不为none
2. position:absolute/fixed 后元素与父元素、子元素、相邻元素都不会发生重叠

#  margin塌陷 

#  清除浮动 

https://segmentfault.com/a/1190000004865198

https://juejin.cn/post/6844903504545316877

#  选择器优先级 

important》ID》类、伪类、class》标签名、伪元素》继承》浏览器默认

行内》内部样式》外部样式》浏览器默认

#  absolute定位是基于什么的 

定位是相对于离元素最近的设置了绝对或相对定位的父元素决定的，如果没有父元素设置绝对或相对定位，则元素相对于根元素即html元素定位。

#  水平垂直居中 

#  css做圆形，三角形 

#  媒介查询相关的自适应布局 

#  px，em，rem 

#  回流和重绘 

#  动画相关 

#  flex布局 

#  精灵图 

#  伪类和伪元素