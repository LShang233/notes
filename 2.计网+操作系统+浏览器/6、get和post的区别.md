# GET和POST方法的区别

GET 和 POST 方法都是基于 TCP/IP 协议，也就是说，两者的数据传输都是建立在 TCP 的连接，所以，如果从两者的本质来讲并没有多大的区别，你**非要给 GET 方法加上 request body，给 POST 方法加上 URL 参数都是行得通的**，HTTP 协议对于 GET 和 POST 其实并没有长度限制。

因而，两者的区别更多地体现在使用规范上，从使用规范上来说：

- GET方法从服务器获取资源，POST是想服务器发送数据
- GET 浏览器回退是无害的，而 POST 会再次提交请求。
- GET 产生的 URL 地址可以被书签收藏，并且被**浏览器缓存**，而 POST 不能书签收藏也不能缓存。
- GET 只能进行 URL 编码，而 POST 支持多种**编码**方式。
- GET 参数通过 URL 传递，并且**长度**有限制，而 POST 放在 request body 并且长度没有限制。并且，正因为这个原因， GET 比 POST 更不安全，因为参数暴露在 URL 中。



二者还有一个显著区别：GET 产生一个 TCP 数据包；POST 产生两个 TCP 数据包。

对于 GET 方式的请求，浏览器会把 http header 和 data 一并发送出去，服务器响应 200（返回数据）；

而对于 POST，浏览器先发送 header，服务器响应 100 continue，浏览器再发送 data，服务器响应 200 ok（返回数据）。
