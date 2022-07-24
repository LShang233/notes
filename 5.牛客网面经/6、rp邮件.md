CSS ：你有多少种办法画出正方形 DIV 并相对窗口居中

JavaScript：this 是谁？谁是 this？这里的 this 是什么？那里的 this 又是啥？

1、页面渲染过程 

- dns（cnd
- tcp链接（握手
- https的TLS（TCP三次 + 三次交换密码 + 两次确认）
- get获取页面信息
  - 解析html，建立dom树
  - 解析css，建立cssom
  - 遇见js暂停，编译执行后继续
  - 合并dom和cssom
  - 回流+重绘
  - 将这些页面信息交给浏览器GPU进程进行绘制

2、http状态码、请求方式、http协议相关什么的

3、跨域

- 同源政策：端口、域名、协议

- JSONP（get回调
- websocket
- 代理服务器
- CROS

4、js数组操作方法都有哪些，哪些可以改变原数组

- 基本上都不会改变原数组
- 改变：shift、unshift、pop、push、sort、reverse

5、CSS自适应二栏、三栏布局、元素垂直居中

- https://blog.csdn.net/a197p/article/details/103560130
- grid

6、cookie、session、webstorage

- cookie：小，4KB，同域名下所有请求头都会带cookie，http请求（明文传输
- session：基于cookie，服务端接收到cookie后解析出session
- cookie相当于客户端存id，session相当于服务端存id
- token：uid+time+sign[+字符串]，自己手动添加
- webStorage：seccion、localStorage：5MB，只在客户端使用，不会发送给服务端，只能存键值对

7、css实现三角形、平形四边形什么的

- border
- shape-outside 

8、事件冒泡、事件捕获、事件委托

Vue的computed属性是怎么实现的？

你工作中遇到的印象最深刻的一个技术难点（或收获最大的）是什么，然后撸起



1. 手写一个去重函数（不能用Set）

   - indexOf(item[i]) == i : push

2. 已知代码如下，写出createA这个函数（考查的js闭包）

   ```js
   const addSix = createA(6)
   addSix(20) // 26 
   addSix(7)  // 13
   
   function createA(num) {
       let count = num;
       return (addNum) => {
           console.log(count + addNum)
           return count + addNum;
       }
   }
   ```

3. 说一下js原型链

   - 每个函数都有一个prototype指向他的原型对象
   - 原型对象中也有个constructor指回他的构造函数
   - 放原型对象的prototype指向另一个函数的原型对象的时候，就构成了原型链
   - 当子类想调用某个属性或方法的时候，会先从自己的构造函数上找
   - 如果没好到，就会顺着prototype找到他的原型对象
   - 如果还没有，就会继续顺着prototype一路找上去，如果到跟还没有找到，就返回undefined
   - 所以子类会共享父类的属性和方法，当父类的改变的时候，子类也会受到影响
   - 而且无法传参，只能顺着一条链继承
   - 盗用构造函数：call（只能继承属性
   - 组合继承：原型链+盗用，call+prototype（会调用两次父类的构造函数
   - 原型式：函数包裹，传入obj，建个空函数，将空函数的protot指向obj，返回new obj（obj.create的原理，无法复用，
   - 寄生式：原型式返回的new obj，往上增强（添加方法，没用到原型，无法复用
   - 寄生式组合：寄生+组合，将父类的prototype用寄生创建实例，子类call父类，将二者联系起来；组合sub.prototype是指向new Super()，而寄生式组合将这一步改成了寄生式，其他都一样

4. js的继承的方式

5. 说一下Promise的使用

6. HTTP状态码有哪些

   - 1xx服务器接收，请继续
   - 2xx成功 200ok， 204ok无返回
   - 3xx重定向，301永久、302临时、304无更新
   - 4xx客户端错误，400语法错误，404找不到文件
   - 5xx服务端错误，500无法处理，503过一会可能恢复

7. web性能优化

   - 让页面流畅
     - 减少js阻塞事件（大量计算，请求异步
     - loading
     - 动画尽量用css3
   - 快速响应
     - 哪里速度慢优化哪里
   - 资源下载，减少请求
     - 懒加载
     - 节流防抖
     - 虚拟滚动等
   - 一些用户操作友好的地方
     - 设计师那边
     - 弹窗，关闭按钮，cursor等

8. web安全问题

   - 前端
     - 防注入
     - crsf：用token，不要用cookie
     - https
   - 后台
     - 数据脱敏
     - 加密
     - 权限分离
     - 减少返回信息



js数组的遍历有几种方式，那个性能最优



1、页面渲染过程

2、http状态码、请求方式、http协议相关什么的

3、跨域

4、js数组操作方法都有哪些，哪些可以改变原数组

5、CSS自适应二栏、三栏布局、元素垂直居中

6、cookie、session、webstorage

7、css实现三角形、平形四边形什么的

8、事件冒泡、事件捕获、事件委托

Vue的computed属性是怎么实现的？

很久以前的面试

1、get post请求有啥区别

- post没有幂等性，get有
- get数据放在url里，post不是，他放在request body中，所以它支持多种编码格式
- get只发一个数据报，post会先发header，返回100后再发data

2、网页从输入网址到渲染完成经历了哪些过程

3、如何优化网站性能

4、盒子模型

- IE盒模型和W3C盒模型
- height和width不同
- IE包括padding和border
- W3C只含content

5、position的值，相对定位 绝对定位问题

6、HTTP和HTTPS

- HTTPS = HTTP + 认证 + 加密 + 完整性保护
- http：明文、不验证发送方、不保证完整

7、常见web安全 sql注入 xss攻击等

8、跨域问题如何解决

- 代理服务器
- JSONP
- websocket
- CORS

9、session和cookie

10、项目中遇到过什么难点，怎么解决的



1.项目中有没有遇到过什么技术难点

2 怎么判断用户是否登录

- 将身份信息缓存在浏览器
- 查看是否存在缓存来判断
- 同时请求的时候将身份信息发送给后台，后台来判断这个身份信息是否过期
- 过期要重新登录

3.知道vue路由的工作原理吗

4.说一下对promise的理解 和 语法糖是什么意思

- 语法糖：指计算机语言中添加的某种语法，这种语法对语言的功能并没有影响，但是更方便程序员使用

5.说一下 关于 页面优化

请简述增删改查数组对应的性能差异

请简述vue和react的区别

webpack打包优化以及loader和plugin的区别

为什么说js是单线程执行的？js的执行机制