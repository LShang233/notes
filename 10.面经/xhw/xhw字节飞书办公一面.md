# 字节飞书办公一面

1h

1. 项目

     - 项目难点

     - setIntreval和Promise的区别

2. setState问题

     - 流程

     - 什么时候去修改DOM

3. fiber问题，对比DOM有什么优化

   - 对于diff算法的fiber、对于diff算法的DOM有什么区别（好像是这么问的

4. diff算法

   - 此时老节点A B C D，新节点A B C D，**B的颜色变化**，又会怎样diff（不了解，讲了一下我的猜想，去重新创建节点
   - 那这样不会消耗性能嘛，改口：去改变B的属性
   - 如果此时中断，diff算法又会怎样（答得不是很好

5. 事件订阅发布

6. 装饰器

7. 浏览器V8垃圾回收

   - 引用计数存在什么问题
   - 标记清除就没有这种问题吗（

8. css盒子模型，给了个题

   ```html
   <style>
       div{
           width: 10px;
           height: 10px;
           padding: 2px;
           margin: 2px;
           border:1px solid red;
           background: blue;
       }
       .box1{
           box-sizing: border-box;
       }
       .box2 {
           box-sizing:content-box;
       }
   </style>
   
   <div class="box1"></div>
   <div class="box2"></div>
   
   //蓝色区域宽高是多少
   ```

   ​	我的答案：第一个10px，第二个8px（当时脑子懵懵的，事后想了下感觉不对

9. 作用域题，很平常，不写了

10. 事件循环题，经典题，也不写了

11. 链表判环

12. 涉及Promise的题（当时面试时间快到了，直接让我讲思路

    ```js
    function create(time,id){
       	return new Promise(solve=>{
    		setTimeout(()=>{
                console.log('promise',id);
                solve();
            },time)
        })
    }
    
    runPromise([
        create(3000,1),
        create(1000,2),
        create(2000,3)
    ])
    
    //实现runPromise，顺序打印 1 2 3
    ```

13. 继承



反问：

有什么值得地方得改进

react底层原理再去看看，还有浏览器这块

感觉寄

