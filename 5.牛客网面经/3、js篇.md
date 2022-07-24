作者：猪猪也不容易
链接：https://www.nowcoder.com/discuss/540875?type=post&order=jing&pos=&page=2&ncTraceId=&channel=-1&source_id=search_post_nctrack
来源：牛客网



# 闭包，内存泄漏 

#  作用域链，变量提升 

#  let，var，const 

#  *常用数组，字符串方法 

forEach（值、下标、数组）、map（值、下标、数组）、fillter（同）、reduce

join、push、pop、shift、unshift

slice（头、尾）、splice（头下标、数量、值）、split（‘str’）、substr（开始、长度）、substring（头、尾）

#  map和foreach区别 

map有返回值

#  js事件循环机制，宏任务微任务，async/await,读代码运行顺序 

主线程和事件队列（红任务和微任务）

#  原型链 

每个函数都有一个属性。这个属性指向他的原型对象。人情对象里面有一个constructor。属性只回他的。指挥他的构造函数。那么如果当一个构造函数的。葡萄胎属性指向另一个构造函数的话。那么一次签到就形成了原型链。圆形链实现继承的最基本的一个方式。他有几个缺点，首先是当你修改父类构造函数的属性或方法的时候，所有的子类都会受到影响。而且他的继承方法单一。并且无法向父类构造函数传参。

#  对象继承方法 

除了上述的圆形链以外，接下来验证出来的是盗用构造函数的模式，它的它的原理就是使用扣。来继承。他解决了原形链的。三个问题。就是如果当你需要继承多个的话，你可以同时扣多个，然后通过扣来给父类。构造函数进行传参。但是他随着而来的有另一个问题，那就是他只继承了父类的。属性并没有继承方法。

接下来就出现了组合继承，将圆形面和盗用构造函数的模式结合起来。也就是在code的基础上再重新修改。之类的prototype属性，让它指向父类。这样的话就同时继承了属性和方法，但是它也有一个问题。就是父类的构造函数会运行两次，会带来一定量的那个损耗。

接下来还有两种，一个是圆形设计成一个是寄生世继承。原型是继承的话呢，就相当于哦，用函数封装一个实例。然后返回函数的调用。这样的话。这个对象就变成了一个可以**随意添加属性**的。实力对象。obj.create。就是这个原理。他相当于对这个对象进行了一次潜复制。

计生是继承的话，就相当于在圆形是继承的。基础上，再往外嵌套了一个函数。这个函数调用了原形，是继承的方法，在对返回的实力或者对象进行了真巧，也就是我可以网上**增加了一些方法**。但他没有用到原形啊，也就是说他没有复用

最后一个是寄生式组合继承，他结合继承是继承和组合继承。他解决了。组合继承的问题就是连续会调用两次父类的构造函数。他其实就是把其中一次调用。改到了计生室继承里面。也就是说在继承是继承返回的。这个实力对象就是他的一次付的构造函数的调用。

#  new做了什么操作 

首先他会创建一个空对象，然后呢为空对象添加一个。属性，把这个坡头属性连接到构造函数的圆形对象。然后呢这个空对象会作为diss的上下文。最后如果没有返回对象的话，就会返回这个this。

创建一个空对象

为空对象添加`__proto__`属性，连接到构造函数的原型对象

空对象作为this上下文

如果没有返回对象，则返回this

#  bind,call,apply的区别，手撕源码 

办的话，他是返回一个。呃，修改了diss的这个函数，而call和apply的话呢，就是传入diss的同时，传入的参数的同时就是直接调用了嘛。扣号的区别的话呢，就是扣的话你需要将参数一个一个传入派的话哈，第二个参数是一个数组。

#  ajax原理，手撕源码（xmlhttprequest）

```js
function $Ajax
```

 

#  this指向 

#  设计模式，应用场景，手撕源码 

https://juejin.cn/post/6844904032826294286

#  promise，promise.all,promise.race源码手撕

（让你写一个请求，5秒内执行完就返回执行结果，否则返回超时） 

#  垃圾回收 

#  基本数据类型 

object 

bigint、symbol、null、undefined、

#  ==和===的区别 

#  隐式转换

（坑1）var a=?;  console.log(a==1&&a==2&&a==3);   //返回true 

（坑2）为什么[]==![]

#  如何判断数组 

```js
let str = [1,2,3]

// 除了基本类型和普通函数，其他都为object
console.log(typeof str)
// VM268:2 object

console.log(str instanceof Array)
// VM337:2 true

console.log(str.constructor)
// VM396:2 ƒ Array() { [native code] }

// 只有对象的toString会返回类型，所以要借用obj的toString
Object.prototype.toString.call(str)
// '[object Array]'

Array.isArray(str)
// true
```



#  js动画和css动画区别 

js:逐帧动画

- 灵活。可以在代码中间随意暂停继续，也可以在固定点添加事件，可以实现复杂的动画
- 因为占用主线程，如果期间在运行其他程序，可能出现掉帧的情况
- 复杂度会比css高，要考虑多种情况（计算等）
- 需要手动兼容低版本

css：补间动画

- 确定动画的头尾，浏览器自动生成中间动画
- 只能修改关键帧，不能中途暂停，也不能在过程中对其操作
- 对于复杂的动画，会比js的代码更加冗长
- 优点：浏览器的GPU会对动画进行优化，会比js占用更少的cpu
- 会自动兼容css3以下的版本

#  dom0级事件dom2级事件 

dom0：

- onclick绑定，或者在html标签中绑定
- 会覆盖
- 冒泡阶段触发

dom2：

- addEventListener，removeEventListener
- 不会覆盖
- 接收第二个参数， true捕获，false冒泡（默认
- 有三个阶段，依次是：捕获 - 自身 - 冒泡



event对象（window的属性）里包含了target、currentTarget等属性，可以通过他查看浏览器是否支持捕获（IE没有捕获）

#  模块化 

前端：AMD，CMD

后端：CommonJS



ES6 Modules

#  防抖节流 

#  深浅拷贝 

#  事件流 

dom2三阶段

#  浏览器渲染过程 

（点击网页）

1. DNS解析（CND缓存
2. TCP三次握手（HTTPS的TLS协商【八次 ： 三次握手+SSL三次交换秘钥+两次确认】
3. 重定向，获取重定向页面（301永久重定向，修改缓存；302暂时重定向，跳转页面；304无更新）
4. GET获取页面数据，TCP慢开始，逐渐到网络的最大宽带，使用拥塞控制防止丢包（一次性发太多包容易丢失，也就是没有收到确认包）（慢开始【1.2.4.8.】，拥塞避免【8.9.10.11.12.】，快重传【12.6.】，快恢复【6.7.8.】）
5. HTML边下载边解析，构建DOM树和CSS树，两棵树都构建完成后组合成为render树
6. 因为js线程和Gui渲染线程互斥，遇见js暂停渲染，执行js，js执行并渲染完成后，再继续渲染线程
7. 而其他非阻塞资源，则会异步请求（图片，字体等）
8. render树构建完毕后进行回流和重绘，先回流，确定各个和模型的大小和位置，再重绘，修改颜色样式
9. 最后把这些信息交给GPU进程，页面绘制

#  generator 

1. ES的循环需要追踪下标的位置，并且考虑结何时停止
2. ES6引入了iterator对象，他有个next方法，可以追踪值和是否循环结束
3. 因为手写iterator很麻烦，所以ES6推出了generator 
4. 
5. generator 通过*号标注，通过yield关键字设置迭代
6. 同时，因为他可以交出执行权的特性，可以将next方法藏进异步函数的回调里面，实现异步函数的同步写法



https://juejin.cn/post/6844903599529541645#heading-5

#  数组去重 

ES6前：

1. 遍历，依次判断ans里indexOf是否为-1
2. 都是遍历

ES6后：[...new Set(arr)]

#  数组展平 

#  typeof 和instance of 

#  为什么0.1+0.2！=0.3 

1. js的小数是双精度浮点型，科学计数法的形式存储
2. 他是64位的，但是真正能存储小数位的只有53位
3. 计算的时候会先把0.1和0.2转换为二进制数，他们都是无限循环小数，相加后也是
4. 所以0.1、0.2的53位以后的精度丢失后相加，计算出的结果再转为十进制，这也就导致了进度丢失

#  用symbol.iterator实现对象遍历（清晰的记得是b站的问题，难搞哦）

```js
let iteratorobj = {
    a: 1,
    b: 2,
    c: 3,
    [Symbol.iterator]() {
        const _this = this;
        const keys = Reflect.ownKeys(_this) // 获取到对象的key值列表
        let index = 0;
        return {
            next() {
                if (index < keys.length - 1) {
                    return {
                        value: _this[keys[index++]], // 想返回什么 就返回什么 keys[index++]
                        done: false
                    }
                }
                return {
                    value: keys[index++],
                    done: true
                }
            }
        }
    }
}


for (var value of iteratorobj) {
    console.log(value);
}
```

