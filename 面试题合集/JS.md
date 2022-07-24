# JS

## 1、继承

- 原型链
  - 改prototype
- 盗用构造函数
  - call一次
- 组合继承
- 原型式
  - return new obj()
- 寄生式
  - 原型式的结果再添加一些方法
- 寄生组合式

## 2、for-in与for-of的区别

for-in：

- 遍历可枚举的属性
- 会遍历原型上的属性
- 跳过null和undefined
- 无法保证遍历顺序，顺序与浏览器有关

for-of

- 遍历可迭代的元素，可遍历map、set
- 不会遍历原型链上的属性
- 不会跳过空值
- 顺序就是调用next方法返回的顺序

## 3、闭包

能访问另一个函数作用域的变量的函数

用于保存和隐藏变量

因为他始终保留着对变量的引用，所以即使外部函数被销毁，被引用的变量却始终留在内存中，不会被垃圾回收机制回收

## 4、call、apply、bind

call，第二个参数往后都是需要传入的变量

apply第二个参数是数组

bind返回一个已经修改了this的函数，该函数不能再改变this指向，因为就算改变，最里面一层的this依旧是第一次修改的值

## 5、new做了什么

- 创建一个空对象
- 将空对象的proto改为传入的prototype
- 将空对象作为this，执行一次传入对象的构造函数
- 如果执行结果不为空，则返回，否则返回已修改的空对象

## 6、箭头函数与普通函数的区别

- 箭头函数没有argument
- 不能new，没有prototype
- 没有target，super
- 没有自己的this，不能用call、apply等改变this
- 不能作为generator函数，没有yield

## 7、数组遍历的方法

### reduce

reduce() 方法接收一个函数作为累加器，数组中的每个值（从左到右）开始缩减，最终计算为一个值。

```
array.reduce(function(total, currentValue, currentIndex, arr), initialValue)
```

| 参数           | 描述                                     |
| :------------- | :--------------------------------------- |
| *total*        | 必需。*初始值*, 或者计算结束后的返回值。 |
| *currentValue* | 必需。当前元素                           |
| *currentIndex* | 可选。当前元素的索引                     |
| *arr*          | 可选。当前元素所属的数组对象。           |
| *initialValue* | 可选。传递给函数的初始值                 |



### filter

filter不会对空数组进行检测，filter不会改变原数组

遍历一个数组并返回一个新数组，并且不影响原数组。遍历数组每一项，回调函数返回true,就把这一项添加到新数组中。其中回调函数中有三个参数，（value,index,array）,value是每一项，index是索引，array是当前被遍历的数组



### forEach

```js
let arr = [1,2,3,4,5];

arr.forEach( (v,i) => {
	console.log(v,i,this); // 这个this是第二个参数
},this);
```

不支持return



### include \ find \ findIndex

#### **include:**

Array.prototype.includes方法返回一个布尔值，表示**某个数组是否包含给定的值**，与字符串includes方法类似。

​    [1,2,3].includes(2);       //true

​    [1,2,3].includes(4);       //false

​     [1,2,NaN].includes(NaN);   //true

​    该方法的第二个参数表示搜索的起始位置，默认为0.如果第二个参数为负数，则表示倒数的位置，如果这是它大于数组长度，（比如第二个参数为-4，但长度为3），则会重置为0开始。

#### find:

   查找目标元素，参数是一个回调函数，函数的参数是每一项以及对应下标，find**会返回匹配的那一项的值**，一旦匹配就不会继续往下匹配（就是找到第一项，就停止查询），返回第一个符合条件的值，若没有匹配到符合条件的值，就返回undefined。

   函数参数有三个值，第一个是每次迭代查找的数组元素，第二个是每一次迭代查找的数组元素索引，第三个是被查找的数组。

#### findIndex:

查找目标元素，找到就返回元素的位置，找不到就返回-1.

​    与find相比，他们只是返回值不一样，find返回的是符合条件的第一个值，findIndex返回的是符合条件的第一个值得索引，他们的参数都是一样的。



### some和every

 some()是对数组中每一项运行给定函数，如果该函数对任一项返回true,则返回true.

   every()是对数组中每一项运行给定函数，如果该函数对每一项返回true,则返回true.

   some一直在找符合条件的值，一旦找到就不再继续迭代下去(有一个符合条件，就返回true)。

​    every从迭代开始，一旦有一个不符合条件，则不会继续迭代下去（要求每一个都符合条件，才返回true）。



## 8、防抖节流

https://blog.csdn.net/hupian1989/article/details/80920324

### 防抖

向后台请求时。

在规定时间内不再触发时，为一个阶段。

当事件快速连续不断触发时，动作只会执行一次。

1. 延迟debounce，是在周期结束时执行，
2. 前缘debounce，是在周期开始时执行。

但当触发有间断，且间断大于我们设定的时间间隔时，动作就会有多次执行。

#### 实现

版本1: 周期内有新事件触发，清除旧定时器，重置新定时器；这种方法，需要高频的创建定时器。

版本2: 周期内有新事件触发时，重置定时器开始时间撮，定时器执行时，判断开始时间撮，若开始时间撮被推后，重新设定延时定时器。

版本3: 在版本2基础上增加是否立即执行选项：



### 节流

页面滚动等。

固定周期内，只执行一次动作，若有新事件触发，不执行。

周期结束后，又有事件触发，开始新的周期。

 节流策略也分前缘和延迟两种。与debounce类似，延迟是指 周期结束后执行动作，前缘是指执行动作后再开始周期。

throttling的特点在连续高频触发事件时，动作会被定期执行，响应平滑。

#### 实现

1. 定时器期间，只执行最后一次操作

   ```js
   // 简单版： 定时器期间，只执行最后一次操作
   var throttling = (fn, wait) => {
   	let timer;
   	let context, args;
    
   	let run = () => {
   		timer = setTimeout(()=>{
   			fn.apply(context, args);
   			clearTimeout(timer);
   			timer = null;
   		}, wait);
   	}
    
   	return function () {
   		context = this;
   		args = arguments;
   		if(!timer) {
   			console.log("throttle, set");
   			run();
   		}else{
   			console.log("throttle, ignore");
   		}
   	}
   }
   ```

   

2. 增加前缘选项

```js
/// 增加前缘
var throttling = (fn, wait, immediate) => {
	let timer, timeStamp=0;
	let context, args;
 
	let run = () => {
		timer=setTimeout(()=>{
			if(!immediate){
				fn.apply(context,args);
			}
			clearTimeout(timer);
			timer=null;
		},wait);
	}
 
	return function () {
		context=this;
		args=arguments;
		if(!timer){
			console.log("throttle, set");
			if(immediate){
				fn.apply(context,args);
			}
			run();
		}else{
			console.log("throttle, ignore");
		}
	}
}

// 要防抖的函数
function doSomeThing(e){
    console.log(this)   // 绑定事件的对象 btn
    console.log(e)  // event事件对象 点击事件对象
    
  	// 做某些事情...
  
    return '想要的结果';   
}
// 使用
let doSome = throttling(doSomeThing, 5000);
// 绑定点击事件，执行 取消定时器中事件 函数
doSome()
```



### 总结：

都是防止高频触发事件多次执行

防抖：操作合并，每次触发会刷新等待时间，只有最后一次的触发才会真正的执行

节流：每次触发都会查看当前时间内是否有事件已经执行（是否在等待时间内），如果无事件则执行

**应用：**

- 防抖：点击动画，输入框搜索
- 节流：无限向下拉伸的页面

**实现：**

- 防抖：闭包+setTimeout
- 节流：闭包
  - 时间戳，记下pre时间与now时间之差，与delay比较
  - 定时器，每次查看定时器是否为空，空则为无执行



## 9、**函数执行过程**

1. 为函数创建一个**执行环境**
2. 复制函数的 [[scopes]] 属性中的对象，构建起**执行环境的作用链域**
3. 创建函数**活动对象**并推入执行环境作用链域的前端
4. **执行**代码
5. **销毁**执行环境和活动对象（闭包情况下活动对象仍被引用没被销毁）



## 10、模板字符串

1. 是一种更美观更优雅的字符串书写方式
2. 可以跨行书写，保留缩进
3. 对于里面使用的特殊符号要用转义（$`{}）
4. 可以是任意js表达式，甚至可以嵌套
5. 如果不是字符串，会使用toString



## 11、遍历对象属性的方法

1.for ... in 循环遍历对象自身的和继承的可枚举属性(不含Symbol属性).

2.Obejct.keys(obj),返回一个数组,包括对象自身的(不含继承的)所有**可枚举**属性(不含Symbol属性).

3.Object.getOwnPropertyNames(obj),返回一个数组,包含对象自身的所有属性(不含Symbol属性,但是包括不可枚举属性).

4.Object.getOwnPropertySymbols(obj),返回一个数组,包含对象自身的所有Symbol属性.

5.Reflect.ownKeys(obj),返回一个数组,包含对象自身的所有属性,不管属性名是Symbol或字符串,也不管是否可枚举.

6.Reflect.enumerate(obj),返回一个Iterator对象,遍历对象自身的和继承的所有可枚举属性(不含Symbol属性),与for ... in 循环相同.



## 12、捕获和冒泡

点击事件的时候：**先捕获，再冒泡**，就像把一个球丢进水里，先沉下去，再浮起来

由父到子称为捕获，从子到父称为冒泡（里到外）

第三个参数为`false`为冒泡，也是默认设置，`true`为捕获

这个参数的意义是在什么阶段才能执行这个函数

```js
a.addEventListener('click', function () {}, false)
```

### event

有两个属性`target`和`currentTarget`

  1）、target：而直接的**事件源**（真正的事件源）是target。真正触发的事件源。

  2）、currentTarget：经过冒泡或者捕获触发的父级的DOM元素是currentTarget。冒泡到哪个父元素，那么currentTarget就是哪个父元素。**冒泡或捕获到的事件源**

  3）、this：在事件处理函数中，this就是**currentTarget**。

### 事件委托

`event.target`就是实现事件委托的基石

把本该属于某个DOM对象的事件，委托给它的父（级）元素。（target是你点的元素，currentTarget是你的父元素）

好处：对于动态添加的元素，事件依然会有效。

## 13、二等和三等

```js
[] == false // "" == 0   0 == 0
[1]== 1 // '1' == 1   1 == 1
```

先转换数据类型

1. 有一个**对象**的话，先将对象调用valueOf获取原始值
2. 有一个**布尔值**的话，布尔值转换为数值
3. 同时存在**字符串和数值**的话，将字符串转为数值

进行比较

1. null==undefined，都不能转换为其他类型进行比较
2. NaN不等于任何数
3. 二者都是对象，比较是否指向同一个对象 

## 14、基本类型、内存关系

基本类型：null、undefined、string、number、boolean、symbol、bigint

复杂类型：object

分为堆和栈

栈存放简单数据类型、堆存放引用数据类型（对象、数组、函数）

## 15、js 获取原型的方法？

- p.\_\_proto\_\_
- p.constructor.prototype
- Object.getPrototypeOf(p)

## 16、整数的安全范围

-2^53-1 ~ 2^53-1

在 ES6 中被定义为 Number.MIN_SAFE_INTEGER

超过会自动转换为Infinity，不能参与下一次的计算

## 17、isNaN和Number.isNaN区别

isNaN：先转为数字，在判断

Number.isNaN：先判断是不是数字，是之后判断

## 18. {} 和 [] 的 valueOf 和 toString 的结果是什么？

{} 的 valueOf 结果为 {} ，toString 的结果为 "[object Object]"

[] 的 valueOf 结果为 [] ，toString 的结果为 ""



## 19. || 和 && 操作符的返回值？

|| 和 && 首先会对第一个操作数执行条件判断，如果其不是布尔值就先进行 ToBoolean 强制类型转换，然后再执行条件判断。

对于 || 来说，如果条件判断结果为 true 就返回第一个操作数的值，如果为 false 就返回第二个操作数的值。

&& 则相反，如果条件判断结果为 true 就返回第二个操作数的值，如果为 false 就返回第一个操作数的值。

|| 和 && 返回它们其中一个操作数的值，而非条件判断的结果

## 20、如何将浮点数点左边的数每三位添加一个逗号，如 12000000.11 转化为『12,000,000.11』?

```js
// 方法一
function format(number) {
  return number && number.replace(/(?!^)(?=(\d{3})+\.)/g, ",");
}
// 方法二
function format1(number) {
  return Intl.NumberFormat().format(number)
}
// 方法三
function format2(number) {
  return number.toLocaleString('en')
}
```

## 21、谈谈 This 对象的理解。

```
this 是执行上下文中的一个属性，它指向最后一次调用这个方法的对象。在实际开发中，this 的指向可以通过四种调用模式来判断。
```

- 1.第一种是函数调用模式，当一个函数不是一个对象的属性时，直接作为函数来调用时，this 指向全局对象。

- 2.第二种是方法调用模式，如果一个函数作为一个对象的方法来调用时，this 指向这个对象。

- 3.第三种是构造器调用模式，如果一个函数用 new 调用时，函数执行前会新创建一个对象，this 指向这个新创建的对象。

- 4.第四种是 apply 、 call 和 bind 调用模式，这三个方法都可以显示的指定调用函数的 this 指向。其中 apply 方法接收两个参数：一个是 this 绑定的对象，一个是参数数组。call 方法接收的参数，第一个是 this 绑定的对象，后面的其余参数是传入函数执行的参数。也就是说，在使用 call() 方法时，传递给函数的参数必须逐个列举出来。bind 方法通过传入一个对象，返回一个 this 绑定了传入对象的新函数。这个函数的 this 指向除了使用 new 时会被改变，其他情况下都不会改变。

```
这四种方式，使用构造器调用模式的优先级最高，然后是 apply 、 call 和 bind 调用模式，然后是方法调用模式，然后是函数调用模式。
```

## 22、类数组是什么

一个拥有 length 属性和若干索引属性的对象就可以被称为类数组对象，类数组对象和数组类似，但是不能调用数组的方法。

常见的类数组对象有 arguments 和 DOM 方法的返回结果，还有一个函数也可以被看作是类数组对象，因为它含有 length属性值，代表可接收的参数个数。

## 23、mouseover 和 mouseenter 的区别？

```
当鼠标移动到元素上时就会触发 mouseenter 事件，类似 mouseover，它们两者之间的差别是 mouseenter 不会冒泡。

由于 mouseenter 不支持事件冒泡，导致在一个元素的子元素上进入或离开的时候会触发其 mouseover 和 mouseout 事件，但是却不会触发 mouseenter 和 mouseleave 事件。
```

## 24、为什么使用 setTimeout 实现 setInterval？怎么模拟？

相关知识点：

```js
// 思路是使用递归函数，不断地去执行 setTimeout 从而达到 setInterval 的效果

function mySetInterval(fn, timeout) {
  // 控制器，控制定时器是否继续执行
  var timer = {
    flag: true
  };

  // 设置递归函数，模拟定时器执行。
  function interval() {
    if (timer.flag) {
      fn();
      setTimeout(interval, timeout);
    }
  }

  // 启动定时器
  setTimeout(interval, timeout);

  // 返回控制器
  return timer;
}
```

回答：

```
setInterval 的作用是每隔一段指定时间执行一个函数，但是这个执行不是真的到了时间立即执行，它真正的作用是每隔一段时间将事件加入事件队列中去，只有当当前的执行栈为空的时候，才能去从事件队列中取出事件执行。所以可能会出现这样的情况，就是当前执行栈执行的时间很长，导致事件队列里边积累多个定时器加入的事件，当执行栈结束的时候，这些事件会依次执行，因此就不能到间隔一段时间执行的效果。

针对 setInterval 的这个缺点，我们可以使用 setTimeout 递归调用来模拟 setInterval，这样我们就确保了只有一个事件结束了，我们才会触发下一个定时器事件，这样解决了 setInterval 的问题。
```

## 25、如何获取原型

基础代码:

> function R(){
>
> }
>
> let obj=new R();

第一种方式

> console.log(Object.getPrototypeOf(obj));

第二种方式

```
console.log(obj.__proto__);
```

第三种方式

```
console.log(obj.constructor.__proto__);
```

第四种方式:

> console.log(R.prototype);

## 26、toString与valueOf区别

https://juejin.cn/post/6873215243804213262

toString( ):返回对象的字符串表示。

valueOf( ):返回对象的字符串、数值或布尔值表示。

两者区别

- 共同点：在输出对象时会自动调用。
- 不同点：**默认返回值不同，且存在优先级关系**。

二者并存的情况下，在**数值**运算中，优先调用改写的方法，同时修改的话，优先调用了`valueOf`，**字符串**运算中，优先调用了`toString`。









# ES6

## Set

set是key的集合，他不存储value，因为利用了key不能重复的特性，所以有去重的效果

他内部key的对比与===相同，唯一的区别是NAN

set遍历顺序就是插入顺序

### set遍历方法

- `Set.prototype.keys()`：返回键名的遍历器
- `Set.prototype.values()`：返回键值的遍历器
- `Set.prototype.entries()`：返回键值对的遍历器
- `Set.prototype.forEach()`：使用回调函数遍历每个成员

因为set没有减值，所以values与keys方法返回值一样

## WeakSet

成员只能是对象（`null`不行），成员是弱引用（不计入垃圾回收机制的引用次数

其次，因为弱引用，weakset的成员数量与什么时候运行垃圾回收机制相关，所以不可遍历

作为构造函数，接受数组或类数组（有Iterable 接口的对象都行）



## Map

传统的object只能用字符串当键，为了解决这个问题，出现了map

map的键不局限与字符串，各种类型的值（包括对象）都能作为map的键

传统对象是`字符串-值`，而map则是`值-值`

而map的键为数组或对象时，对比的是引用

## WeakMap

与weakset一样



## WeakRef 

WeakSet 和 WeakMap 是基于弱引用的数据结构

WeakRef 对象，用于直接创建对象的弱引用。



## async原理

为了解决传统异步函数回调地狱的问题，经过了多次方法的迭代，async是目前最优雅的解决方式，用同步的写法来写异步函数

本质上是对generator的封装

async函数返回一个Promise对象，当函数执行时遇到await，会先返回，等到await后面的promise执行完毕后，再接着执行函数体后面的内容



## ES6模块和commonJS

- ES6模块是编译时加载，commonJS是运行时加载。所以ES6模块能让webpack在打包时进行tree-shaking去除死码
- ES6导出的是引用，而commonJS是拷贝。
- ES使用严格模式，顶层this是undefined，commonJS是window



## proxy对比defineproperty的优势

**Proxy的优势如下**

- Proxy可以直接监听整个对象而非属性。
- Proxy可以直接监听数组的变化。
- Proxy有13中拦截方法，如`ownKeys、deleteProperty、has` 等是 `Object.defineProperty` 不具备的。
- Proxy返回的是一个新对象，我们可以只操作新的对象达到目的，而`Object.defineProperty`只能遍历对象属性直接修改;
- Proxy做为新标准将受到浏览器产商重点持续的性能优化,也就是传说中的新标准的性能红利。

**Object.defineProperty 的优势如下**

- 兼容性好，支持 IE9，而 Proxy 的存在浏览器兼容性问题,而且无法用 polyfill 磨平。

**Object.defineProperty 不足在于**：

- `Object.defineProperty` 只能劫持对象的属性,因此我们需要对每个对象的每个属性进行遍历。
- `Object.defineProperty`不能监听数组。是通过重写数据的那7个可以改变数据的方法来对数组进行监听的。
- `Object.defineProperty` 也不能对 `es6` 新产生的 `Map`,`Set` 这些数据结构做出监听。
- `Object.defineProperty`也不能监听新增和删除操作，通过 `Vue.set()`和 `Vue.delete`来实现响应式的。

















