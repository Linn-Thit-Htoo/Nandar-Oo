var email = "linnthit77387@gmail.com";
var password = 123123;

console.log(password == "123123"); // == value

console.log(password === "123123"); // data type & value

console.log(email == "linnthit77387@gmail.com" && password == 123123);

function Print() {
  console.log("Hello!");
}

Print();

var array = [1, 2, 3, 4]; // array starts from 0 index

array.push(5); // last insert
array.unshift(0); // first insert

array.pop(); // last remove
array.shift(); // first remove

array.map((item) => console.log(item));

var arrObj = [
  {
    UserId: 1,
    UserName: "Leo",
  },
  {
    UserId: 2,
    UserName: "Linn Thit",
  },
];

arrObj.map(({ UserName}) => {
    console.log(UserName);
})