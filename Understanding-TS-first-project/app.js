"use strict";
// const person: {
//   name: string;
//   age: number;
//   hobbies: string[];
//   role: [number, string];
// } = {
//   name: 'accio',
//   age: 30,
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["READ_ONLY"] = 1] = "READ_ONLY";
    Role[Role["AUTHOR"] = 2] = "AUTHOR";
})(Role || (Role = {}));
//   hobbies: ['Sports', 'Cooking'],
//   role: [2, 'author'],
// };
const person = {
    name: 'accio',
    age: 30,
    hobbies: ['Sports', 'Cooking'],
    role: Role.ADMIN,
};
// const ADMIN = 0;
// const READ_ONLY = 1;
// const AUTHOR = 2;
for (const hobby of person.hobbies) {
    console.log(hobby.toUpperCase());
}
let userInput;
let userName;
userInput = 5;
userInput = 'Max';
function generateError(message, code) {
    throw { message: message, errorCode: code };
}
generateError('エラーが発生しました', 500);
const printOutput = (output) => console.log(output);
printOutput(add(2, 5));
//# sourceMappingURL=app.js.map