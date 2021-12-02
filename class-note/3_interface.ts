interface User {
  age: number;
  name: string;
}

// 변수에 인터페이스 활용
let gunwoong: User = {
  age: 25,
  name: "건웅",
};

// 함수에 인터페이스 활용
function getUser(user: User) {
  console.log(user);
}
const woong = {
  age: 100,
  name: "웅",
};
getUser(woong);

// 함수의 스펙(구조)에 인터페이스를 활용
interface SumFunction {
  (a: number, b: number): number;
}

let sum: SumFunction;
sum = function (a: number, b: number): number {
  return a + b;
};

// 인덱싱
interface StringArray {
  [index: number]: string;
}

let arr: StringArray = ["a", "b", "c"];
arr[0] = "10";
