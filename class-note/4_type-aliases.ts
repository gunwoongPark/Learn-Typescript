// interface Person {
//   name: string;
//   age: number;
// }

type Person = {
  name: string;
  age: number;
};

var gunwoong: Person = {
  name: "건웅",
  age: 25,
};

type MyString = string;
const str: MyString = "hello";

type Todo = {
  id: number;
  title: string;
  done: boolean;
};
function getTodo(todo: Todo) {}
