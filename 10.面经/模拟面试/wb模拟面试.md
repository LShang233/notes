1. TCP和UDP的区别
   - 他们的区别主要是围绕可靠性（无差错、不丢失、不重复、按序到达
   - TCP是可靠的，所以面向连接，拥有流量控制和红色避免、而且是一对一
   - 然后因为他一对一，所以要在头部存更多的消息，所以头部会比UDP更长
   - UDP面向报文，而TCP面向字节流
2. TCP为什么需要链接？TCP是怎么链接和断开的？
   - 为了保证他的可靠性
3. 怎么让UDP变得可靠？
   - RUDP
   - 根据应用场景可以对可靠性的定义进行一些取舍
   - 比如说在直播或视频会议的场所，追求实时性，允许中途丢失一部分数据，UDP只需要做到尽最大努力交付
   - 在数据下载的的时候，重要的是不丢失，UDP可以不保证按序到达
   - 那么UDP是靠什么进行这种半可靠的交付的呢？
   - 是依据重传模式
   - 分为定时重传、请求重传、和FEC选择重传
   - 也就是分别代表：一段时间内未收到确认包、客户端主动请求
   - 最后一种是在发送的时候会多发送一些数据或者包，如果中途发生了丢包，客户端会先通过算法尝试对求是的数据进行还原，如果还原不了再进行重传，这是一种向前纠错的选择重传的机制
4. 进程和线程的问题
   - 进程是资源分配的最小单位
   - 线程是进程调度的最小单位
   - 所以、每个进程有自己的存储空间，当进程切换的时候，需要对读取的磁盘数据进行切换，开销会比较大
   - 而线程共享一个存储空间，通过锁的形式确保数据的正确性，线程切换开销小
5. 执行JS会阻塞HTML的解析吗？
   - 会，浏览器渲染线程和js线程互斥
   - js能修改html，防止错误
6. onload函数时什么意思？
   - onload 通常用于 <body> 元素，在页面完全载入后(包括图片、css文件等等)执行脚本代码
7. ES6的类和ES5的类的区别
   - class没有变量提升
   - class类无法遍历它实例原型链上的属性和方法
   - class类有static静态方法（ES5可以通过将函数挂在构造函数上实现，因为继承的是原型对象
8. promise语法，他是怎么实现的，手写一个promise
   - 有三个模块，分别是初始化promise对象、保存then、执行resolve/reject
   - 首先初始化对象，保存状态为pending
   - 将then的回调存在promise对象中
   - 执行promise中的语句：
     - 如果遇见reject，直接reject回调，修改状态为rejected
     - 如果遇见resolve，执行回调
       - 如果返回值不是promise对象，修改状态为fulfilled
       - 如果是，将执行结果作为下一个promise对象的value，继续执行初始化操作
9. for-of和for哪种性能更高，为什么
   - for性能搞，因为for是直接通过下标获取的
   - 而for-of是通过指针
10. 用ES5实现async，await
    - 自动执行器+generator函数
    - generator函数：根据yield切分代码为switch语句，每执行到一个状态就会切换下一个状态，遇到next就再次switch
11. js模块化（AMD，UMD这些 system.js）
12. redux的思想
    1. action、store、reducer
13. redux怎么更新，他的更新依据什么
    1. 依据action和store提供的旧数据
    2. 新数据会覆盖旧数据（更新数组的时候要保存之前的数据
14. react的核心是什么
    1. 核心思想：虚拟dom和diff算法
    2. https://segmentfault.com/a/1190000021631279
    3. 核心概念：组件、JSX、Props&State、组件API、组件类型
15. FuctionComponent和ClassComponent的区别是什么
    1. CL是一个类，会使用new去执行，他会形成自己的实例对象，可以保存自己的状态，有自己的生命周期函数
    2. 而函数组件不会去new，他没有自己的实例对象，也就无法去保存自身的状态，只能通过fiber的memorizedState去存储
16. FC怎么处理
    1. 使用hook
17. hook的本质是什么，在js上他的本质是什么，为什么函数能够通过这种方式去存储状态
    1. 闭包
    2. 将数据存在外部作用域上（Fiber
18. 闭包，闭包的几个要素
    1. 能访问另一个函数作用域中的变量的函数
    2. 保存私有属性和方法（缓存），而不会污染全局（封装）
    3. 这是因为他不会被垃圾回收机制检测（引用计数，标记删除
19. render到渲染发生了什么
    1. render的时候，传入的是JSX，先将JSX封装成element对象
    2. 将element对象转为Fiber对象，并通过diff给Fiber打上Tag
    3. 将打好标签的节点渲染到页面
    4. https://segmentfault.com/a/1190000041112179
    5. react有三个重要的模块，分别是scheduler、reconciler、renderer
    6. scheduler：任务调度，找出最高优先级
    7. reconciler：也就是render阶段，通过diff找到有副作用的节点，并将其标记，通过EffectList链表存储
    8. renderer：遍历EffectList，处理副作用到真实节点上
20. fiber树是什么结构（复杂链表），他为什么长这样，有什么意图
    1. 因为链表结构比较好做中断恢复，在循环过程中更容易停止并保护现场
21. 讲讲Concurrent Mode，依照什么排序
22. git上有bug怎么操作
23. 项目





















```js
// 答
class Event {
    handler = {};

    dispatch(event) {
    setTimeout(() => {
     const hdls = this.handler[event];
        if (hdls) {
          hdls.forEach((item) => item())
        }
    });       
    }
    addEventListener(s, fun) {
       const hdls = this.handler[event];
       if (hdls) {
           hdls.push(fun);
       } else {
          const hdls = [fun];
          this.handler[event] = hdls[]
       }
    }
}

// 问：
const event = new Event();
event.dispatch('click');
event.dispatch('touch');

event.addEventListener('click', () => {
  console.log('weybn');
});

event.addEventListener('touch', () => {
  console.log('anton');
});

// 以上都能打印出来
// weybn
// anton
```

