学习笔记
# // 第一步 HTTP请求总结
1.  设计一个HTTP请求的类 
2.  content type 是一个必要的字段，要有默认值
3.  body是KTV格式
4.  不同的content-type影响body的格式

##  第二步 HTTP请求总结
// 在Request的构造器中收集必要的信息
// 在设计send函数，把请求真实发送到服务器
// send函数应该是异步的，所以返回Promise

## 第三步发送请求
// 设计支持已有的connection或者自己创建connection
// 收到数据传给parse
// 根据parser的状态 resolve Promise

## 第四步 ResponseParse总结
// Response必须分段构造，所以我们要用一个ResponseParser"装配"
// ResponseParser分段处理Response Text,我们用状态机来分析文本结构

## 第五步 bodyParser总结

 1. Response的body可能根据Content-Type有不同的结构，因此我们会采用子Parser的结构来解决问题
 2. 以TrunkedBodyParser为例，我们同样用状态机来处理body的格式
