作者：猪猪也不容易
链接：https://www.nowcoder.com/discuss/540875?type=post&order=jing&pos=&page=2&ncTraceId=&channel=-1&source_id=search_post_nctrack
来源：牛客网



# react和vue的区别 

1. 

#  diff算法 

**单节点**

1. 上次更新的fiber节点是否存在对应的DOM节点，不存在则生成新fiber
2. 存在的话要判断是否可以复用：
3. 先对比key，若key不同，标记为删除
4. 在对比type，type不同标记删除
5. 都相等将上次更新的fiber作为结果返回，其他情况生成新fiber返回

**多节点**

1. 分为两次遍历，第一次处理更新节点，第二次处理其他情况
2. 第一次遍历：单节点的对比方式，一共分为四种结果：
   1. 可复用：无需标记，继续遍历
   2. key不同导致不可复用：退出循环
   3. key相同，type不同：旧树标记为删除，继续
   4. 新树或旧树遍历完成：退出循环
3. 第二次遍历：此时有四种情况：
   1. 新树完成，旧树完成：不需要第二轮
   2. 新树完成，旧树未：旧树标记删除
   3. 新树未，旧树完成：没有可复用的了，将新树剩余节点标记添加
   4. 新树未，旧树未：表示有节点位置发生了变化。维护最后一个可复用节点的索引，每次都会在这个索引后面进行查找可复用节点，可以简单理解为：react的diff只有向后移动的功能

#  虚拟dom 

1. 真实dom元素非常庞大，频繁的修改会产生很大的开销
2. 于是很多框架采用虚拟dom，通过维护虚拟dom来减少真实dom的操作
3. 采用虚拟dom还可以在转化为真实dom的过程中进行许多的操作，如添加生命周期钩子，比较虚拟dom的不同来减少对真实dom的操作，还可以将一次大的修改分割为多次小修改，以此避免让用户察觉到页面卡顿
4. 他还有一个好处，他抽象了渲染的过程，为引用带来了跨平台的能力

#  setstate同步还是异步，具体过程 

`setState`只在合成事件和钩子函数中是“异步”的，在原生事件和 `setTimeout` 中都是同步的。

` setState`的“异步”并不是说内部由异步代码实现，其实本身执行的过程和代码都是同步的，只是合成事件和钩子函数的调用顺序在更新之前，导致在合成事件和钩子函数中没法立马拿到更新后的值，形式了所谓的“异步”，当然可以通过第二个参数 `setState(partialState, callback)` 中的`callback`拿到更新后的结果。

`setState` 的批量更新优化也是建立在“异步”（合成事件、钩子函数）之上的，在原生事件和`setTimeout` 中不会批量更新，在“异步”中如果对同一个值进行多次 `setState `， `setState` 的批量更新策略会对其进行覆盖，取最后一次的执行，如果是同时 `setState` 多个不同的值，在更新时会对其进行合并批量更新。



只要你进入了 `react` 的调度流程，那就是异步的。只要你没有进入 `react` 的调度流程，那就是同步的。什么东西不会进入 `react` 的调度流程？ `setTimeout` `setInterval` ，直接在 `DOM` 上绑定原生事件等。这些都不会走 `React` 的调度流程，你在这种情况下调用 `setState` ，那这次 `setState` 就是同步的。 否则就是异步的。

而 `setState` 同步执行的情况下， `DOM` 也会被同步更新，也就意味着如果你多次 `setState` ，会导致多次更新，这是毫无意义并且浪费性能的。

#  事件代理 

将事件全部绑定到最外层的结构上，使用一个统一的事件监听器

当函数挂载或者卸载的时候，这个监听器会删除和插入一些对象

当事件发生的时候，会被监听器拦截，然后再映射表中找到真正的处理函数并且调用

优点。

1. 减少事件注册,节省内存，能够提升整体性能。
2. 简化了dom节点更新时,相应事件的更新（用过 jquery 的都知道，动态加入的元素，事件需要重新绑定）。

#  redux原理 

- redux是将整个应用的状态存储到一个地方，称为store
- 里面保存着一颗状态树
- 组件可以dispatch action给store
- store将旧数据和action交给reducer处理，reducer将更新好的新数据返回给store
- 其他组件可以通过getState获取store里的数据
- 
- 所以，redux有三个重要的模块，分别是action、store、reducer
- action负责将用户的操作派发给store
- store是只读的，他将旧数据和行为包装，发给reducer
- reducer处理之后，将新数据交还给store存储
- 
- 这里有几点要注意
- 首先：redux是单一数据源，也就是说，store是唯一的
- 第二：store只读，他不负责处理数据，处理数据的操作都交给reducer
- 最后：reducer是一个纯函数，也就是说你可以拆分成很多个小reducer，分别处理状态树的不同数据
- 还有一点：reducer返回的数据会覆盖原值，也就是说，如果是数组，你需要将新数据和之前的数据一起返回

#  hook 

- 是函数式组件独有的，他是函数式组件的申明周期函数和状态
- 拿useState举例，分为mount和update阶段
- mount时会将useState封装一个hook对象，挂到FiberNode的memoriseState上，它是一个单链表，存了所有的hook
- 这个hook对象上有一个queue属性，保存了你这个useSate的所有状态，它是一个循环链表，指向最新更新的状态
- 当你在update的时候，会顺着memoriseState找到你需要的hook，然后获取最新的状态；
- 如果是useReducer的话，他跟useState的区别是，useState存的是数据，而他存的是函数，
- 所以，她或通过queue.next获取第一次更新的操作，然后依次执行，最后返回函数执行的结果；
- 如果是useEffert的话，他的状态是存在FiberNode的updateQueue上的，每次执行的时候会先判断他的依赖有没有改变，如果为改变的话会跳过更新

#  生命周期 

react有三个状态，分别是mount、update、unmount

旧的生命周期是：

- mount：CWillMount----render----CDidMount
- update：CWillRerciveProps-----CShouldUpdate-----CWillUpdate-----Render-----CDidUpdate
- unmount：CWillUnmount

新：

- getDerviedStateFromProps\*-----CShouldUpdate-----render\*----getSnapshotBeforeUpdate----CDidUpdate(Mount)

#  容器组件和展示组件 

#  父子通信 

#  非父子通信 

#  高阶组件（高阶组件不是组件） 

#  shouldComponentUpdate 

react生命周期的一个，可以自行编写，返回布尔值，表示接下来是否render



#  react native性能调优

