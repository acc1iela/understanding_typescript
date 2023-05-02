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

for (const hobby of person.hobbies) {
  console.log(hobby.toUpperCase());
}

let userInput: unknown;
let userName: string;

userInput = 5;
userInput = 'Max';

function generateError(message: string, code: number): never {
  throw { message: message, errorCode: code };
}

generateError('エラーが発生しました', 500);

const printOutput: (output: string | number) => void = (output) => console.log(output);
printOutput(add(2, 5));

const hobbies = ['Sports', 'Cooking'];
const activeHobbies = ['Hikking', ...hobbies];
