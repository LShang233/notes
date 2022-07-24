## 知乎一面

1. 自我介绍

2. 什么时候能来实习？我说暑假，他说能不能4月，看来是很着急用人了。

3. 挑一个项目来介绍一下把。我选了node

4. 这里面用到哪些框架吗？用了koa，其他基本是原生的fs。

5. 这个出租车项目有用什么技术栈吗？

6. webpack了解过吗？说一下构建流程。

7. 你有没有做过一些优化？有比如说去除一些console、分包（心虚）。

8. 那分包有哪些依据呢？不会。。

9. 说一下hook有哪些？

10. setState可以放在if里面吗？为什么

11. 说一下react的数据传递

12. useContext有用过吗？没有

13. 这里我自告奋勇说了redux，让我说了一下执行流程。

14. 那函数怎么获取store里面的属性？mapStateToProps。

15. 事件循环了解过吗？我说了浏览器的，想说node被打断。

16. 有哪些宏任务和微任务？

17. 来一道题目：(直接秒杀)

    ```js
    async function async1() {
        console.log('async1 start');
        await async2();
        console.log('async1 end');
    }
    async function async2() {
        console.log('async2');
    }
    console.log('script start');
    setTimeout(function() {
        console.log('setTimeout');
    }, 0)
    async1();
    new Promise(function(resolve) {
        console.log('promise1');
        resolve();
    }).then(function() {
        console.log('promise2');
    });
    console.log('script end'); 
    ```

18. 用promise用的多吗？有哪些方法？说了all和race。

19. all是干什么用的？

20. 那如果我想跳过这个错误，把全部结果获取出来，怎么办？

21. 闭包是什么？

22. 做一道题：（再次秒杀）

    ```js
    function createIncrement() {
      let count = 0;
      function increment() { 
        count++;
      }
    
      let message = `Count is ${count}`;
      function log() {
        console.log(message);
      }
      
      return [increment, log];
    }
    
    const [increment, log] = createIncrement();
    increment(); 
    increment(); 
    increment(); 
    log(); // => ? 
    ```

23. 说一下css如果有个盒子宽高不确定，要怎么垂直居中？说了flex、margin、绝对定位法。

24. 给我说了一下margin的特殊情况。





本来想继续二面的，结果那边忙就没有了，等会儿加微信通知下一次面试。

