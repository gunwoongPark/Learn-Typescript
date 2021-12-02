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
