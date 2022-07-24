xhr.readyStatus == 0 尚未调用 open 方法

xhr.readyStatus == 1 已调用 open 但还未发送请求（未调用 send）

xhr.readyStatus == 2 已发送请求（已调用 send）

xhr.readyStatus == 3 已接收到请求返回的数据

xhr.readyStatus == 4  下载操作已完成

```js
/*
    method : get 或者 post 方法
    url    ：上传地址
    data   ：上传的数据集合
    success：成功的回调函数
    error  ：失败的回调函数
*/

function $ajax({method = "get", url, data, success, error}){
    let xhr = null;
    try{
        xhr = new XMLHttpRequest();
    }catch(error){
        xhr = new ActiveXObject("Microsoft.XMLHTTP");
    }

    if(data){
        data = querystring(data);
    }

    if(method == "get" && data){
        url += "?" + data;
    }

    xhr.open(method, url, true);

    if(method == "get"){
        xhr.send();
    }else{
        xhr.setRequestHeader("content-type", "application/x-www-form-urlencoded");
        xhr.send(data);
    }

    xhr.onreadystatechange = function(){
        if(xhr.readyState == 4){
            if(xhr.status == 200){
                //回调函数
                if(success)
                    success(xhr.responseText);
            }else{
                if(error)
                    error(xhr.responseText);
            }
        }
    }
}

function querystring(obj){
    let str = "";
    for(let attr in obj){
        str += attr + "=" + obj[attr] + "&";
    }
    return str.replace(/&$/, '') // 替换最后一位&符为空
    //return str.substring(0, str.length - 1);
}
```

