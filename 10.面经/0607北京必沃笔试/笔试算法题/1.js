const arr1 = ["a", "b"];
const arr2 = ["c"];
const arr3 = ["d", "e"];
// 方法一
const ans1 = arr1.concat(arr2, arr3);
console.log('方法一:', ans1)
// 方法二
// 会改变原数组
// for(let i of arr2) {
//     arr1.push(i)
// }
// for(let i of arr3) {
//     arr1.push(i)
// }
// console.log('方法二:', arr1);

// 方法三
// 会改变原数组
arr1.push(...arr2, ...arr3)
console.log('方法三:',arr1)