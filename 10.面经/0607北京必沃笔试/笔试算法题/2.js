let a = ['1', '2', '3', 1, NaN, NaN, undefined, undefined, null, null, 'a', 'b', 'b']
// 方法一（最优）
// 利用set数组
console.log([...new Set(a)])
// 方法二
// 当前索引为当前第一次出现的次数，需要单独判断NaN，因为indexOf会返回-1
// 除了用filter还能用for循环嵌套等其它方式，原理相同
function unique(arr) {
    let NaNFlag = true;
    return arr.filter(function (item, index, arr) {
        let i = arr.indexOf(item, 0);
        if(i == -1 && window.isNaN(item)) {
            if(NaNFlag) {
                NaNFlag = false;
                return true;
            }
            return false;
        }
        return  i === index;
    });
}
console.log(unique(a));