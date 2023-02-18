function sumple(n1: number, n2: number) {
  return n1 + n2;
}

function printResult(num: number) {
  console.log('Result: ' + num);
}

// let combineValues: Function;
// 型の定義だけ一致していれば良い
let combineValues: (a: number, b: number) => number;

combineValues = sumple;

console.log(combineValues(8, 8));

printResult(sumple(5, 12));

function addAndHandle(n1: number, n2: number, cb: (num: number) => void) {
  const result = n1 + n2;
  cb(result);
}

addAndHandle(10, 20, (result) => {
  console.log(result);
});
