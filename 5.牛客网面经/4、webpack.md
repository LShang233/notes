# 怎么打包

1. 舒适化参数，封装在complier对象里
2. 从entry开始递归遍历
3. 遇见的每一个文件调用loader进行处理（转码等）
4. 最后封装成一个个的chunk（一个entry+多个module）
5. 将chunk打包成一个bundle.js

# 分包合包

# 热更原理

1. 是在开发模式中使用的
2. 当webpack修改的时候，只需要将修改的部分打包更新，写入内存（而不是磁盘）
3. complier对象中有一个watch钩子，可以检测webpack构建文件的改变
4. 修改完后通过done钩子，在回调函数中，通过websorket通知客户端
5. 客户端从内存获取更新

# loader和plugin

loader是配置，因为webpack只能处理js文件，其他文件需要转码，他让webpack可以处理多种格式的文件

而plugin插件更像是生命周期钩子，可以在webpack的生命周期中处理一些loader处理不到的东西，扩展webpack的功能，如文件优化、压缩