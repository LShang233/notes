```js
// 1.局部作用域与全局作用域
let val = 1;
function foo() {
  console.log(val);
}
function bar() {
  let val = 2;
  foo();
}
bar();
// 作用域链：window( val=1 -> foo() -> bar( val=2 ) )
// 所以当foo调用的时候，bar在函数内部没有找到foo，就顺着作用域链向外找
// 调用foo后，在foo内部没有找到val，就顺着foo的作用域向外找

// 2.this指向
window.name = 'ByteDance';
function A() {
  this.name = 123;
}
A.prototype.getA = function () {
  return this.name + 1;
};
let a = new A();
let funcA = a.getA;
console.log(funcA());
// 只是把a.getA这个方法赋值给了funcA，当他调用的时候，会发现我的this其实是funcA的this，也就是window
// 解释完上面答下面这种情况
console.log(a.getA());
// 调用的时候，会发现调用我的a对象，那么我的this就是a，也就找到了123

// 3.this指向(call)
const obj = {
  birth: 1990,
  getAge(year) {
    let fn = y => y - this.birth;
    return fn.call({ birth: 2000 }, year);
  },
};
console.log(obj.getAge(2020));
// 箭头函数无法使用call等手段改变this指向

// 4.执行顺序
async function async1() {
  console.log('async1 start');
  await async2();
  console.log('async1 end');
}
async function async2() {
  console.log('async2');
}
console.log('script start');
setTimeout(() => {
  console.log('setTimeout');
}, 0);
async1();
new Promise(function (resolve) {
  console.log('promise1');
  resolve();
}).then(function () {
  console.log('promise2');
});
console.log('script end');

```

