function sumple(n1, n2) {
    return n1 + n2;
}
function printResult(num) {
    console.log('Result: ' + num);
}
// let combineValues: Function;
// 型の定義だけ一致していれば良い
var combineValues;
combineValues = sumple;
console.log(combineValues(8, 8));
printResult(sumple(5, 12));
function addAndHandle(n1, n2, cb) {
    var result = n1 + n2;
    cb(result);
}
addAndHandle(10, 20, function (result) {
    console.log(result);
});
