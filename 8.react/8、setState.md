# setState同步异步问题

react中的事件都是合成事件，由react内部封装

react本身的代码和过程是同步的，只是合成事件和钩子函数的调用顺序**在更新之前**

导致在合成事件和钩子函数中没法立马拿到更新后的值

因为原生事件和setTimeout不是合成事件，所以是同步的



# 原理

是否同步更新是看isBatchingUpdates 属性是否为true

当进入合成事件的时候，isBatchingUpdates 会先改为true（默认为false），当合成事件结束的时候改回false（钩子、生命周期同理，也是在开始的时候修改

这也是为什么setTimeout同步更新，是因为当他执行的时候，isBatchingUpdates 以及为false了

而原生事件不会在开始改为true，使用的是默认值false



设为true有什么好处呢，她能将多个setState合并，只进行一次渲染



## 具体流程：

setState --- enqueueSetState/enqueueCallback --- enqueueUpdate

```js
enqueueSetState: function(publicInstance, partialState) {
  // 拿到对应的组件实例
  var internalInstance = getInternalInstanceReadyForUpdate(
    publicInstance,
    'setState',
  );
  // queue 对应一个组件实例的 state 数组
  var queue = internalInstance._pendingStateQueue || (internalInstance._pendingStateQueue = []);
  queue.push(partialState); // 将 partialState 放入待更新 state 队列
  // 处理当前的组件实例
  enqueueUpdate(internalInstance);
}
```

enqueueSetState做了两件事

1. 将 新的State 放入待更新 state 队列
2. 处理这个State

```js
function enqueueUpdate(component) {
  ensureInjected()
  // isBatchingUpdates 标识着当前是否处于批量更新过程
  if (!batchingStrategy.isBatchingUpdates) {
    // 若当前没有处于批量创建/更新组件的阶段，则立即更新组件
    batchingStrategy.batchedUpdates(enqueueUpdate, component)
    return
  }
  // 需要批量更新，则先把组件塞入 dirtyComponents 队列
  dirtyComponents.push(component)
  if (component._updateBatchNumber == null) {
    component._updateBatchNumber = updateBatchNumber + 1
  }
}
```

进入函数enqueueUpdate，判断isBatchingUpdates

如果为true，则吧组件放进dirtyComponents队列

若为false，则立即执行更新（batchedUpdates



`batchingStrategy`用于管控批量更新的对象

```js
/**
 *  batchingStrategy源码
 **/
var ReactDefaultBatchingStrategy = {
  isBatchingUpdates: false, // 初始值为 false 表示当前并未进行任何批量更新操作

  // 发起更新动作的方法
  batchedUpdates: function (callback, a, b, c, d, e) {
    var alreadyBatchingUpdates = ReactDefaultBatchingStrategy.isBatchingUpdates

    ReactDefaultBatchingStrategy.isBatchingUpdates = true

    if (alreadyBatchingUpdates) {
      return callback(a, b, c, d, e)
    } else {
      // 启动事务，将 callback 放进事务里执行
      return transaction.perform(callback, null, a, b, c, d, e)
    }
  },
}
```



## 事务机制

https://juejin.cn/post/6844904024236359687#heading-0

事务是一个繁琐的概念，在React中事务的核心作用是保证数据的一致性，以及出错时候的回滚。在React中事务主要做的事情是包装。

### Transaction 类

```html
 * <pre>
 *                       wrappers (injected at creation time)
 *                                      +        +
 *                                      |        |
 *                    +-----------------|--------|--------------+
 *                    |                 v        |              |
 *                    |      +---------------+   |              |
 *                    |   +--|    wrapper1   |---|----+         |
 *                    |   |  +---------------+   v    |         |
 *                    |   |          +-------------+  |         |
 *                    |   |     +----|   wrapper2  |--------+   |
 *                    |   |     |    +-------------+  |     |   |
 *                    |   |     |                     |     |   |
 *                    |   v     v                     v     v   | wrapper
 *                    | +---+ +---+   +---------+   +---+ +---+ | invariants
 * perform(anyMethod) | |   | |   |   |         |   |   | |   | | maintained
 * +----------------->|-|---|-|---|-->|anyMethod|---|---|-|---|-|-------->
 *                    | |   | |   |   |         |   |   | |   | |
 *                    | |   | |   |   |         |   |   | |   | |
 *                    | |   | |   |   |         |   |   | |   | |
 *                    | +---+ +---+   +---------+   +---+ +---+ |
 *                    |  initialize                    close    |
 *                    +-----------------------------------------+
 * </pre>
```

#### 包装纸（Wrapper）

一个wrapper包含initialize和close

initialize里面是一些初始化的东西

close是执行结束方法

#### Transaction 做了什么

接收func和一组wrapper

分为三步：所有wrapper的initialize --- func ---所有wrapper的close



## batchingStrategy 批量更新策略（事务机制

再看回`batchingStrategy`批量更新策略，ReactDefaultBatchingStrategy 其实就是一个批量更新策略事务，它的 wrapper 有两个：`FLUSH_BATCHED_UPDATES` 和 `RESET_BATCHED_UPDATES`。

```js
var RESET_BATCHED_UPDATES = {
  initialize: emptyFunction,
  close: function () {
    ReactDefaultBatchingStrategy.isBatchingUpdates = false
  },
}
//  flushBatchedUpdates 将所有的临时 state 合并并计算出最新的 props 及 state
var FLUSH_BATCHED_UPDATES = {
  initialize: emptyFunction,
  close: ReactUpdates.flushBatchedUpdates.bind(ReactUpdates),
}

var TRANSACTION_WRAPPERS = [FLUSH_BATCHED_UPDATES, RESET_BATCHED_UPDATES]
```

# 总结

setState 同步异步的表现会因调用场景的不同而不同：在 React 钩子函数及合成事件中，它表现为异步；而在 setTimeout/setInterval 函数，DOM 原生事件中，它都表现为同步。

这是由 React 事务机制和批量更新机制的工作方式来决定的。