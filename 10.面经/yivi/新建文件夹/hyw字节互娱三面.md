# 字节互娱三面1h

- 自我介绍

- 聊项目

- 什么情况会导致回流重绘？

- 有哪些本地缓存的方法？

- canvas和svg的区别？

- 10w个点在canvas上渲染会出问题吗？

- 一直在抓回流这个点细问，除了改变集合元素，还有其他方面会引起吗？

- 这个会引起什么情况？怎么优化？（这里我一开始说文档碎片，后面发现不对劲，换成了css3解决）

  ```js
  function animation() {
      let els = document.querySelector('#children');
      for(let i=0;i<els.length;i++) {
          els[i].style.left = els[i].offsetLeft + 1 + 'px';
      }
  }
  setTimeinterval(animation,1000/60);
  ```

- 说一下React的Diff算法？

- 写一个算法模拟一下diff算法

- ```js
  // 实现一个MyFetch，每次只有limit个任务执行，最后返回所有fetch的结果
  MyFetch(['a.json','b.json','c.json','d.json'],2).then(res => {
      console.log(res);
  })
  ```

- 这里他让我去了解一下fetch如果出错后，怎么处理比较妥当。

- 你为什么选择字节跳动？

- 未来的学习计划？

- 什么时候能实习?

- 反问：实习的模式是什么样的？