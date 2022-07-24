# QG 工作室招新系统 

「描述」面对全校新生的招新系统，分为小程序端和管理端。小程序端面向用户和管理员，用于面试的全部流 程，包括报名，通知，签到排队以及打分评价等功能。管理端为 web 页面，包括数据分析，面试结 果，编辑面试信息等管理功能。 

「成就」访问量 900+，投入简历 200+，面试排队功能投入使用 

「职责」小程序端团队介绍、排队签到；管理端负责人，页面框架搭建，数据统计、考试结果等模块开发 

「亮点」1、小程序性能优化 2、使用 webSocket 和心跳机制实现实时排队人数 

「技术」微信小程序，webSocket，Vue，Echarts

# 介绍

面对全校新生的招新系统，分为小程序端和管理端。小程序端面向用户和管理员，用于面试的全部流 程，包括报名，通知，签到排队以及打分评价等功能。管理端为 web 页面，包括数据分析，面试结 果，编辑面试信息等管理功能

# 困难，怎么解决

因为是第一次使用小程序，所以在实际开发上会有很多细节上的问题

比如说同样的方式但是小程序会页面卡顿，以及一些小程序自带的接口更新

前者会根据具体情况进行优化

后者基本上找博客看文档就能解决，印象中比较深刻的一个问题是用户登录的模块，旧接口在十几天前不支持了（而且她在开发者根据和真机调试的效果还不一样），因为比较新，网上也找不到博客，最后是通过博客指引到文档

# 使用节流对小程序动画性能优化 

宣传页面有使用微信的卡片组件，但是当用户频繁滑动的时候，会无限的添加事件，也就导致了只有当页面停止滚动的时候才能后续的操作

所以我对滑动事件进行了节流，每三秒才能滑动一次

# 使用懒加载处理图片，减少请求



# 使用 webSocket 和心跳机制实现实时排队人数

使用websocket接收服务器推送

为了保证是否能接受这个服务器的推送，我们使用了心跳机制，也就是隔一段时间发送一一段数据给后台，判断这个链接是否还继续连着。如果我不行的话，那么就重新连接这个链接。



# 小程序性能优化

「[启动性能](https://developers.weixin.qq.com/miniprogram/dev/framework/performance/tips/start)」和「[运行时性能](https://developers.weixin.qq.com/miniprogram/dev/framework/performance/tips)」

- 设计：简约
- 图片压缩并上传oss
- 下拉框卡片：
  - 直接用小程序的默认样式
  - 改变屏幕大小，修改层叠关系和相对布局
  - 问题：当用户频繁多次的下滑的时候，动画会一直循环，无法暂停，同时部分元素会移位
  - 锁定了下拉操作，直到动画结束才能进行下一次操作
- setDate使用少

- [合理使用 setData](https://developers.weixin.qq.com/miniprogram/dev/framework/performance/tips/runtime_setData.html)
- [渲染性能优化](https://developers.weixin.qq.com/miniprogram/dev/framework/performance/tips/runtime_render.html)
- [页面切换优化](https://developers.weixin.qq.com/miniprogram/dev/framework/performance/tips/runtime_nav.html)
- [资源加载优化](https://developers.weixin.qq.com/miniprogram/dev/framework/performance/tips/runtime_resource.html)
- [内存优化](https://developers.weixin.qq.com/miniprogram/dev/framework/performance/tips/runtime_memory.html)

