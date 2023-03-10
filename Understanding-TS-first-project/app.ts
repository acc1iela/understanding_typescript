type Combinable = number | string;
type ConversionDescriptor = 'as-number' | 'as-text';

// const person: {
//   name: string;
//   age: number;
//   hobbies: string[];
//   role: [number, string];
// } = {
//   name: 'accio',
//   age: 30,
enum Role {
  ADMIN,
  READ_ONLY,
  AUTHOR,
}
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

if (person.role === Role.ADMIN) {
  console.log('読み取り専用ユーザー');
}

// union型について
function combine(input1: Combinable, input2: Combinable) {
  if (typeof input1 === 'number' && typeof input2 === 'number') {
    result = input1 + input2;
  } else {
    result = input1.toString() + input2.toString();
  }
  return result;
}

const combinedAges = combine(30, 26);

let userInput: unknown;
let userName: string;

userInput = 5;
userInput = 'Max';

function generateError(message: string, code: number): never {
  throw { message: message, errorCode: code };
}

generateError('エラーが発生しました', 500);
