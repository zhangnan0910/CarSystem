# 车系渲染

### 遇到问题

1. 请求数据存在赋值时，因为数据异步请求，初始数据无法获取到值
解决方案：
    赋值时写在.then(),通过promise解决异步

2. 价格排序(起初思路不对)
解决方案：
    array.sort((a,b)=>{
        return a.type - b.type
    })