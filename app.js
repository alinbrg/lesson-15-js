// 1. შექმენით 5 ელემენტიანი რიცვების მასივი, console.log-ით გამოიტანეთ
//  ამ მასივის ელემენტების საშუალო არითმეტიკული;
let myNumArr = [1, 4, 5, 10, 7];
let sum = myNumArr[0] + myNumArr[1] + myNumArr[2] + myNumArr[3] + myNumArr[4];
let myArrLength = myNumArr.length;
// console.log(sum / myArrLength);
// 2. შექმენით 5 ელემენტიანი მასივი, რომლის თითოეული ელემენტი არის ობიექტი,
// რომელსაც გააჩნია name  და age property.
let myArrOfObj = [
	{
		name: "Harry",
		age: 30,
	},
	{
		name: "Hermione",
		age: 30,
	},
	{
		name: "Ron",
		age: 30,
	},
	{
		name: "Ginny",
		age: 30,
	},
	{
		name: "Draco",
		age: 30,
	},
];
// 3. შექმენით ობიექტი რომელსაც გააჩნია შემდეგი ველები (properties):
// firstName - სტრინგ ტიპის მნიშვნელობა
// lastName - სტრინგ ტიპის მნიშვნელობა
// address - სტრინგების მასივი
// age - რიცხვითი მნიშვნელობა
// phoneNumbers - რიცხვითი მნიშვნელობების მასივი
let personObj = {
	firstName: "Nino",
	lastName: "example",
	address: ["Tbilisi", "kutaisi"],
	age: 20,
	phoneNumbers: [123456, 12345676],
};
// 4. console.log ში გამოიტანეთ სტრინგი "My name is
// (#3 დავალების firstName  მნიშვნელობა)", My age is
// (#3 დავალების age-ის მნიშვნელობა)", "My address is
// (#3 დავალების address-ის პირველი ელემენტის მნიშვნელობა)"
// console.log(
// 	`My name is ${personObj.firstName}, My age is ${personObj.age}, "My address is ${personObj.address[0]}`
// );

let x = 1,
	y = 0,
	z = 0;
y = x++;
// console.log(x, y);
z = ++x;
// console.log(x, z);

if (x > 0 && y > 0) {
	console.log("x is greater than 0 and y is greater than 0");
}
if (x > 0 && y < 0) {
	console.log("x is greater than 0 and y is less than 0");
}
if (x > 0 || y > 0) {
	console.log("x is greater than 0 or y is greater than 0");
}
if (x > 0 || y < 0) {
	console.log("x is greater than 0 or y is less than 0");
}

let userAge = 20;
let userName = "giorgi";
// if (userAge > 10) console.log("userAge > 10");

// console.log("example text");

// if (userName === "Nino") {
// 	console.log("userName === giorgi");
// } else {
// 	console.log("userName !== giorgi");
// }

let userCity = "telavi";
let kutaisi = "kutaisi";
let cityArr = ["tbilisi", "kutaisi", "batumi"];

// if (cityArr.includes(userCity)) {
// 	console.log(`${userCity} is in an array`);
// } else {
// 	console.log(`${userCity} is not in an array`);
// }

// if (userCity === kutaisi) {
// 	console.log("userCity === kitaisi");
// } else if (userCity === "tbilisi") {
// 	console.log("userCity === tbilisi");
// } else if (userCity === "batumi") {
// 	console.log("userCity === batumi");
// } else {
// 	console.log("userCity === other city");
// }

// switch (userCity) {
// 	case "tbilisi":
// 		console.log("userCity === tbilisi");
// 		break;
// 	case "kutaisi":
// 		console.log("userCity === kitaisi");
// 		break;
// 	case "batumi":
// 		console.log("userCity === batumi");
// 		break;
// 	default:
// 		console.log("userCity === other city");
// 		break;
// }

// let myArr = [1, 3, 4, 6, 5, 9];
// for (let i = myArr.length - 1; i >= 0; i = i - 1) {
// 	console.log(myArr[i]);
// }
// for (let i = 0; i < myArr.length; i--) {
// 	// console.log(myArr[i]);
// 	let blockScopeLet = 0;
// 	var functionScopeVar = 0;
// 	// console.log(blockScopeLet, functionScopeVan);
// 	console.log(i);
// }
// console.log(blockScopeLet, functionScopeVan);

let userNum = 0;
while (userNum < 10) {
	// console.log(userNum);
	userNum++;
}
console.log(userNum);

do {
	console.log(userNum);
	userNum++;
} while (userNum < 20);
console.log(userNum);

let myNumArr2 = [10, 3, 4, 6, 8, 10, 3, 4, 6, 8, 10, 3, 4, 6, 8];

let sum2 = 0;
// sum2 = myNumArr2[0] + myNumArr2[1]+ myNumArr2[2]+ myNumArr2[3];
for (let i = 0; i < myNumArr2.length; i++) {
	sum2 = sum2 + myNumArr2[i];
	// sum2 += myNumArr2[i];
	console.log(sum2);
}

console.log(sum2);
