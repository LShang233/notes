## ES6 Module 和 CommonJS 的区别

1. 加载时机不同：
   - CommonJS 是**运行时**加载，必须到代码执行才能确认模块依赖关系，所以 webpack 无法进行 tree-shaking 去除死代码。
   - ES6 Module 是**编译时**加载，能在编译时确认模块依赖关系，以便 webpack 进行 **tree-shaking** 去除死代码；
     + import 的参数必须是字符串常量；require 的参数可以是变量
     + import 和 export 语句必须写在顶层作用域；require 语句可以写在任意地方
2. 导出机制不同：
   - CommonJS 的导出是值的**拷贝**，修改后不会影响模块内部变量；
   - ES6 Module 的导出是值的**映射**，只读不可修改，但可以调用模块内部方法进行修改，修改后再读就可以得到最新的映射值。
3. 顶层作用域的 this 不同
   - ES6 Module 默认使用**严格模式**，所以顶层 this 只会是 undefined；
   - 而 CommonJS 如果不指明使用严格模式，顶层 this 会是 window