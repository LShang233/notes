// 请从2022-04-23T13:24:06 Europe/Paris提取出["2022","04","23","13","24","06"]
let str = '2022-04-23T13:24:06 Europe/Paris';

// 提取字符串中的数字(最优)
var numArr = str.match(/\d+/g);
console.log(numArr);

// 其他方法
// 逐个遍历字符串，将连续的数字提取出来放入答案