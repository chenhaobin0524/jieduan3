

console.log(add(10, 20));
alert(add(10, 10))


// 这就是代码分割，也就是模块化的意思
// math.js文件
// export function add(a, b) {
//     return a + b;
// }


// app.js文件
// import { add } from './math.js';

// console.log(add(16, 26)); // 42

// function add(a, b) {
//     return a + b;
// }

// console.log(add(16, 26)); // 42