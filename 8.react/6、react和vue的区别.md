# 监听数据变化的实现原理不同

vue通过**getter、setter**以及一些函数的劫持，能够精确制导数据变化

react默认通过比较引用（**diff**）的方式进行的



vue使用可变数据，react强调数据不可变

vue更加简单，react构建大型应用更加坚固

# 数据绑定

![image-20220223184511417](https://raw.githubusercontent.com/LShang233/mdImg/master/img/20220223184511.png)

vue双向数据绑定

1. 响应式数据绑定系统
2. 组件系统

双向绑定原理：

原理上不支持，v-model是通过监听DOM事件实现的语法糖

通过监听getter和setter，实现绑定

组件之间采用单向数据流，方便解耦



react单向数据流

通过state（model层）与view层绑定实现数据的实时变化

view层会将model层的数据拿过来渲染，

# 组件间通信不同

![image-20220223185234515](https://raw.githubusercontent.com/LShang233/mdImg/master/img/20220223185234.png)

vue：

1. 父传子：props
2. 子传父：事件
3. 父向子，多层级：provide、inject

react：

1. 父传子：props
2. 父向子，多层级：content



react自身并不支持自定义事件，而vue子传父可以使用事件和回调函数，vue更倾向于事件。

而react中使用的是回调函数

# 框架本质不同

vue：MVVM，MVC发展而来

react：前端组件化框架，由后端组件化发展而来



# 组合方式不同：HoC和mixins

**Vue组合不同功能的方式是通过mixin**，Vue中组件是一个被包装的函数，并不简单的就是我们定义组件的时候传入的对象或者函数。比如我们定义的模板怎么被编译的？比如声明的props怎么接收到的？这些都是vue创建组件实例的时候隐式干的事。由于vue默默帮我们做了这么多事，所以我们自己如果直接把组件的声明包装一下，返回一个HoC，那么这个被包装的组件就无法正常工作了。

**React组合不同功能的方式是通过HoC**(高阶组件）。React最早也是使用mixins的，不过后来他们觉得这种方式对组件侵入太强会导致很多问题，就弃用了mixinx转而使用HoC。**高阶组件本质就是高阶函数**，React的组件是一个纯粹的函数，所以高阶函数对React来说非常简单。



# 模板渲染方式不同

在表层上，模板的语法不同，React是通过**JSX渲染模板**。而Vue是通过一种**拓展的HTML语法**进行渲染，但其实这只是**表面现象**，毕竟React并不必须依赖JSX。

在深层上，模板的原理不同，这才是他们的本质区别：React是在组件JS代码中，通过原生JS实现模板中的常见语法，比如插值，条件，循环等，都是**通过JS语法实现**的，更加纯粹更加原生。而Vue是在和组件JS代码分离的单独的模板中，**通过指令来实现**的，比如条件语句就需要 v-if 来实现对这一点，这样的做法显得有些独特，会把HTML弄得很乱。

举个例子，说明React的好处：react中render函数是支持闭包特性的，所以我们import的组件在render中可以直接调用。但是在Vue中，由于模板中使用的数据都必须挂在 this 上进行一次中转，所以我们import 一个组件完了之后，还需要在 components 中再声明下，这样显然是很奇怪但又不得不这样的做法。



# 渲染过程不同

Vue可以更快地计算出Virtual DOM的差异，这是由于它在渲染过程中，会跟踪每一个组件的依赖关系，**不需要重新渲染整个组件树**。

React在应用的状态被改变时，**全部子组件都会重新渲染**。通过shouldComponentUpdate这个生命周期方法可以进行控制，但Vue将此视为默认的优化。

如果应用中交互复杂，需要处理大量的UI变化，那么使用Virtual DOM是一个好主意。如果更新元素并不频繁，那么Virtual DOM并不一定适用，性能很可能还不如直接操控DOM。



# Vuex和Redux的区别

从表面上来说，store注入和使用方式有一些区别。在Vuex中，$store被直接注入到了组件实例中，因此可以比较灵活的使用：使用dispatch、commit提交更新，通过mapState或者直接通过this.$store来读取数据。在Redux中，我们每一个组件都需要显示的用connect把需要的props和dispatch连接起来。另外，Vuex更加灵活一些，组件中既可以dispatch action，也可以commit updates，而Redux中只能进行dispatch，不能直接调用reducer进行修改。

从实现原理上来说，最大的区别是两点：Redux使用的是不可变数据，而Vuex的数据是可变的，因此，Redux每次都是用新state替换旧state，而Vuex是直接修改。Redux在检测数据变化的时候，是通过diff的方式比较差异的，而Vuex其实和Vue的原理一样，是通过getter/setter来比较的，这两点的区别，也是因为React和Vue的设计理念不同。React更偏向于构建稳定大型的应用，非常的科班化。相比之下，Vue更偏向于简单迅速的解决问题，更灵活，不那么严格遵循条条框框。因此也会给人一种大型项目用React，小型项目用Vue的感觉。



# vue优缺点

## 优点

1. 简单
2. 快速：一步批处理方式更新DOM
3. 组合
4. 紧凑
5. 强大
6. 对模块友好

## 缺点

1. 新项目，不够成熟
2. 影响度不是很大
3. 不支持IE8

# react优缺点

## 优点：

1. 速度快
2. 跨浏览器兼容
3. 模块化
4. 单向数据流
5. 同构、纯粹的js
6. 兼容性好

## 缺点

复杂





# 个人理解（总结）：

https://lq782655835.github.io/blogs/vue/diff-vue-vs-react.html

## 1、核心思想不同

**Vue早期定位是尽可能的降低前端开发的门槛**（这跟Vue作者是独立开发者也有关系）。所以**`Vue推崇灵活易用（渐进式开发体验），数据可变，双向数据绑定（依赖收集）`**。

React早期口号是Rethinking Best Practices。背靠大公司Facebook的React，从开始起就不缺关注和用户，而且**React想要做的是用更好的方式去颠覆前端开发方式**（事实上跟早期jquery称霸前端，的确是颠覆了）。**`所以React推崇函数式编程（纯组件），数据不可变以及单向数据流`**。函数式编程最大的好处是其稳定性（无副作用）和可测试性（输入相同，输出一定相同），**所以通常大家说的React适合大型应用，根本原因还是在于其函数式编程**。

```
由于两者核心思想的不同，所以导致Vue和React许多外在表现不同（从开发层面看）
```

### 1.1 核心思想不同导致写法差异

**Vue推崇template（简单易懂，从传统前端转过来易于理解）、单文件vue**。而且虽然Vue2.0以后使用了Virtual DOM，使得Vue也可以使用JSX（bebel工具转换支持），但Vue官方依然首先推荐template，这跟Vue的核心思想和定位有一定关系。

**React推崇JSX、HOC、all in js**

### 1.2 核心思想不同导致api差异

Vue定位简单易上手，**基于template模板 + options API**，所以不可避免的有较多的概念和api。比如template模板中需要理解slot、filter、指令等概念和api，options API中需要理解watch、computed（依赖收集）等概念和api。

React本质上核心只有一个**Virtual DOM + Diff算法**，所以API非常少，知道setState就能开始开发了。

### 1.3 核心思想不同导致社区差异

`由于Vue定义简单易上手，能快速解决问题，所以很多常见的解决方案，是Vue官方主导开发和维护`。比如状态管理库Vuex、路由库Vue-Router、脚手架Vue-CLI、Vutur工具等。属于那种**大包大揽**，遇到某类通用问题，只需要使用官方给出的解决方案即可。

`React只关注底层，上层应用解决方案基本不插手`，连最基础的状态管理早期也只是给出flow单向数据流思想，大部分都丢给社区去解决。比如状态管理库方面，有redux、mobx、redux-sage、dva等一大堆（选择困难症犯了），所以这也造就了React社区非常繁荣。同时由于有社区做上层应用解决方案，所以React团队有更多时间**专注于底层升级**，比如花了近2年时间把底层架构改为Fiber架构，以及创造出React Hooks来替换HOC，Suspense等。 更多框架设计思想可看 [尤雨溪 - 在框架设计中寻求平衡 (opens new window)](https://www.bilibili.com/video/av80042358?from=search&seid=17425026665332701435)。

### 1.4 核心思想不同导致未来升级方向不同

核心思想不同，决定了Vue和React未来不管怎么升级变化，Vue和React考虑的基本盘不变。

**Vue依然会定位简单易上手（渐进式开发），依然是考虑通过依赖收集来实现数据可变**。这点从Vue3核心更新内容可以看到：template语法基本不变、options api只增加了setup选项（composition api）、基于依赖收集（Proxy）的数据可变。更多Vue3具体更新内容可看笔者总结 [Vue3设计思想 (opens new window)](https://lq782655835.github.io/blogs/vue/vue3-design-thought.html)或者 [尤雨溪 - 聊聊 Vue.js 3.0 Beta 官方直播 (opens new window)](https://www.bilibili.com/video/BV1Tg4y1z7FH?from=search&seid=7905243385819443675)。

**React的函数式编程这个基本盘不会变**。React核心思想，是把UI作为Basic Type，比如String、Array类型，然后经过render处理，转换为另外一个value（纯函数）。从React Hooks可以看出，React团队致力于**组件函数式编程**，（纯组件，无class组件），尽量减少副作用（减少this，this会引起副作用）。



## 2、组件实现不同

`Vue源码实现是把options挂载到Vue核心类上，然后再new Vue({options})拿到实例`（vue组件的script导出的是一个挂满options的纯对象而已）。所以options api中的this指向内部Vue实例，对用户是不透明的，所以需要文档去说明this.$slot、this.$xxx这些api。另外Vue插件都是基于Vue原型类基础之上建立的，这也是Vue插件使用Vue.install的原因，因为要确保第三方库的Vue和当前应用的Vue对象是同一个。

React内部实现比较简单，直接定义render函数以生成VNode，而`React内部使用了四大组件类包装VNode`，不同类型的VNode使用相应的组件类处理，职责划分清晰明了（后面的Diff算法也非常清晰）。React类组件都是继承自React.Component类，其this指向用户自定义的类，对用户来说是透明的。

![image](https://user-images.githubusercontent.com/6310131/58312027-04ca9180-7e3d-11e9-9099-786694da7c38.png)

## 3. 响应式原理不同

这个问题网上已经有许多优秀文章都详细讲解过，这里就不具体展开讲，对Vue3响应式原理有兴趣可以看笔者 [Vue3响应式原理 (opens new window)](https://lq782655835.github.io/blogs/vue/vue3-reactive.html)(Vue2和Vue3响应式原理基本一致，都是基于依赖收集，不同的是Vue3使用Proxy)。

Vue

- `Vue依赖收集，自动优化`，数据可变。
- Vue递归监听data的所有属性,直接修改。
- 当数据改变时，自动找到引用组件重新渲染。

React

- `React基于状态机，手动优化`，数据不可变，需要setState驱动新的State替换老的State。
- 当数据改变时，以组件为根目录，默认全部重新渲染

## 4. diff算法不同

两者流程思维上是类似的，都是基于两个假设（使得算法复杂度降为O(n)）：

1. 不同的组件产生不同的 DOM 结构。当type不相同时，对应DOM操作就是直接销毁老的DOM，创建新的DOM。
2. 同一层次的一组子节点，可以通过唯一的 key 区分。

但两者源码实现上有区别：

Vue基于snabbdom库，它有较好的速度以及模块机制。`Vue Diff使用双向链表，边对比，边更新DOM。`

`React主要使用diff队列保存需要更新哪些DOM，得到patch树，再统一操作批量更新DOM`。

![image](https://user-images.githubusercontent.com/6310131/58315009-41998700-7e43-11e9-8c52-438adad9b23b.png)

## 5. 事件机制不同

Vue

- `Vue原生事件使用标准Web事件`
- Vue组件自定义事件机制，是父子组件通信基础
- Vue合理利用了snabbdom库的模块插件

React

- `React原生事件被包装`，所有事件都冒泡到顶层document监听，然后在这里合成事件下发。基于这套，可以跨端使用事件机制，而不是和Web DOM强绑定。
- React组件上无事件，父子组件通信使用props

## Vue 和 React源码流程图

### Vue整体流程图

![image](https://user-images.githubusercontent.com/6310131/58315972-1dd74080-7e45-11e9-94bc-b494d41ae61c.png)

### React整体流程图

![image](https://user-images.githubusercontent.com/6310131/58316112-6b53ad80-7e45-11e9-8b2a-d31bfaf269aa.png)