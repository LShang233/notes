// 二、函数柯里化
// 说明：实现一个add方法，满足如下需求。


function addab(a, b) {
    console.log(a + b)
    return a + b;
}

function curry(fn) {
    // 闭包
    let arr = [];
    let fun = fn;
    // 返回函数
    function cur() {
        for(let i = 0; i < arguments.length; i++) {
            arr.push(arguments[i])
        }

        if(arr.length == fn.length) {
            fun.apply(null, arr);
            arr = [];
        } else {
            return cur;
        }
    }
    return cur;
}

let add = curry(addab);

add(2, 5); // 7
add(2)(5); // 7
add()(2, 5); // 7
add()(2)(5); // 7
add()()(2)(5); // 7 