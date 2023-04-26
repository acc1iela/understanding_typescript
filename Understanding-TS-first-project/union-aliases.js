"use strict";
function sumple(n1, n2) {
    return n1 + n2;
}
function printResult(num) {
    console.log('Result: ' + num);
}
// let combineValues: Function;
// 型の定義だけ一致していれば良い
let combineValues;
combineValues = sumple;
console.log(combineValues(8, 8));
printResult(sumple(5, 12));
function addAndHandle(n1, n2, cb) {
    const result = n1 + n2;
    cb(result);
}
addAndHandle(10, 20, (result) => {
    console.log(result);
});
