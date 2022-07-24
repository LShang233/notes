let arr = [22, 3, 7, 5, 12, 2]
// 方法一
// 使用原生
// arr.sort((a, b) => a - b);
// console.log(arr)

// 方法二（其他排序算法
// 快排
const quickSort = function (arr) {
    if (arr.length <= 1) {
        return arr;
    }
    var p = arr.splice(Math.floor(arr.length / 2), 1)[0];
    var left = [];
    var right = [];

    for (var i = 0; i < arr.length; i++) {
        if (arr[i] < p) {
            left.push(arr[i]);
        } else {
            right.push(arr[i]);
        }
    }
    return quickSort(left).concat([p], quickSort(right));
};
console.log(quickSort(arr))