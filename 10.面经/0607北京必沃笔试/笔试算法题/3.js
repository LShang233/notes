let str = 'aslxjkgakfakerkxlkfeikakdck'
// 利用map
let map = new Map();
let maxCount = 0, maxChar = [];
for (let i of str) {
    // 存在该元素
    if (map.has(i)) {
        let c = map.get(i) + 1;
        // 考虑同一个字母次数相同的情况
        if (c > maxCount) {
            maxCount = c;
            maxChar = [i];
        } else if (c == maxCount) {
            maxChar.push(i);
        }
        map.set(i, c);
    } else {
        map.set(i, 1);
    }
}
console.log(map);
console.log('出现最多的字母：', maxChar.join(''), '次数：', maxCount)

// 其他方法：
// 都需要记录每个字母出现的次数，只是记录方式的不同
// 1、与map类似，将字母以对象的属性方式挂上去（map能优化查找，更优一点）
// 2、建一个长度为26的数组，将字母转为ascii码后按顺序存储，相当于arr[0] = 1为第一个字母a出现一次