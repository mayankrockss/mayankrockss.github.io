// // closure - counter

// let counter = ((i = 1) => {
//   return () => i++;
// })();
// console.log(counter());
// console.log(counter());
// console.log(counter());
// console.log(counter());
// console.log(counter());
// console.log(counter());

// // with generators

// function* newCounter() {
//   let a = 1;
//   while (true) {
//     yield a++;
//   }
// }
// const counter1 = newCounter();
// console.log(counter1.next().value);
// console.log(counter1.next().value);
// console.log(counter1.next().value);
// console.log(counter1.next().value);
// console.log(counter1.next().value);
//----------------------------------------
// which type of functon gets arguments?
//ans- not the arrow function

// const sum1 = () => {
//   console.log("sum1", arguments);
// };

// function sum2() {
//   console.log("sum2", arguments);
// }
// const sum3 = function () {
//   console.log("sum3", arguments);
// };

// sum1(1, 2, 3); // this will not get arguments but will say, arguments not defined
// sum2(1, 2, 3);
// sum3(1, 2, 3);

//-------------------------------------------

// memoization

// const memoize = (fn) => {
//   const result = {};
//   return (...args) => {
//     const argkey = JSON.stringify(args);
//     if (result[argkey] === undefined) {
//       result[argkey] = fn(...args);
//     }
//     return result[argkey];
//   };
// };

// //fabonacci series with memoization
// const fabo = (num) => {
//   if (num === 1 || num === 2) {
//     return 1;
//   }
//   return fabo(num - 1) + fabo(num - 2);
// };

// const memoizedFabo = memoize(fabo);
// console.time("a");
// console.log(memoizedFabo(20));
// console.timeEnd("a");

// console.time("a");
// console.log(memoizedFabo(20));
// console.timeEnd("a");

// console.time("b");
// console.log(fabo(20));
// console.timeEnd("b");

// console.time("b");
// console.log(fabo(20));
// console.timeEnd("b");

//-----------------------------------------------------

// es6 inheritence

// class Animal {
//   constructor(name) {
//     this.name = name;
//   }
//   makeVoice() {
//     console.log("I " + this.voice);
//   }
// }
// class Cat extends Animal {
//   constructor(name, voice) {
//     super(name);
//     this.voice = voice;
//   }
//   walk() {
//     console.log("i walk silently");
//   }
// }
// const animal = new Animal("elephant");
// const cat = new Cat("kitty", "meow");

// console.log(animal);
// console.log(cat);
// cat.walk();
// cat.makeVoice();
// console.log(cat.name);

//--------------------------------------------------------

//es5 based inheritance

// function Animal(name) {
//   this.name = name;
// }
// Animal.prototype.makeVoice = function () {
//   console.log("I " + this.voice);
// };

// function Cat(name, voice) {
//   Animal.call(this, name);
//   this.voice = voice;
// }
// Cat.prototype = Object.create(Animal.prototype);
// Cat.prototype.constructor = Cat;

// Cat.prototype.walk = function () {
//   console.log("i walk silently");
// };

// const animal = new Animal("elephant");
// const cat = new Cat("kitty", "meow");

// console.log(animal);
// console.log(cat);

//-------------------------------------------------------
// binary search

// const arr = [1, 2, 3, 4, 5, 6, 10];

// const binSearch = (arr, num) => {
//   let lower = 0,
//     upper = arr.length - 1;
//   while (lower <= upper) {
//     const middle = Math.floor((lower + upper) / 2);
//     if (arr[middle] === num) {
//       return middle;
//     } else {
//       if (arr[middle] > num) {
//         upper = middle - 1;
//       } else {
//         lower = middle + 1;
//       }
//     }
//   }
//   return "not found";
// };

// console.log(binSearch(arr,6));

//-----------------------------------------------------

// Sorting of arr of objects
// const arr = [{name:"mak", age:29},
//             {name:"shr", age:28},
//             {name:"anshu", age:30},
//             {name:"z", age:12}];
// arr.sort((a,b)=> {
//   if(a.name<b.name){
//     return -1
//   }
//   else if (a.name>b.name){
//     return 1;
//   }
//   return 0;
// });
// console.log(arr);
// arr.sort((a,b)=> {
//   if(a.age<b.age){
//     return -1
//   }
//   else if (a.age>b.age){
//     return 1;
//   }
//   return 0;
// });
// console.log(arr);

//--------------------------------------------------------

// remove duplicates from array - give 2 efficient ways
// const arr = [1,2,1,4,7,9,4];

// console.log(Array.from(new Set(arr)));
// console.log([...new Set(arr)]);

// const obj = {}
// arr.forEach(e=> {
//   if(!obj[e]){obj[e] = true}
// })
// console.log("mak",Object.keys(obj))

//------------------------------------------------------------

// 2 sum

// const arr = [8, 4, 9, 10, 1, 5];

// function twoSum(arr, num) {
//   const obj = {};
//   let ans = [];
//   arr.every((e, i) => {
//     if (obj[e] === undefined) {
//       obj[num - e] = i;
//     } else {
//       ans = [i, obj[e]];
//       return false;
//     }
//     return true;
//   });
//   return ans;
// }
// console.log(twoSum(arr, 9));
//-----------------------------------------------------------

// flateten an object
// const user = {
//   name: "Fireeye",
//   address: {
//     company: {
//       city: "blr",
//       state: "KA",
//       landmark: {
//         title: "banergatta rd."
//       }
//     },
//     corporate: {
//       city: "delhi",
//       state: "Delhi",
//       devisions: {
//         sales: { owner: "Mayank" },
//         tech: {
//           head: "Mani"
//         }
//       }
//     }
//   }
// };
// const final = {};
// const flatten = (obj, name) => {
//   for (const key in obj) {
//     if (obj.hasOwnProperty(key)) {
//       if (typeof obj[key] === "object") {
//         flatten(obj[key], name + "_" + key);
//       } else {
//         final[name + "_" + key] = obj[key];
//       }
//     }
//   }
// };
// flatten(user, "user");
// console.log(final);
// ------------------------------------------------------

// // ------- bind polyfill

// const obj = {
//     firstName: "mayank",
//     lastName: "singh"
// }

// function printName(city, state) {
//     console.log("Hi " + this.firstName + " " + this.lastName + " from " + city + " in " + state);
// }

//  Function.prototype.myBind = function (obj, ...args) {
//     const that = this;
//     return function (...newArgs) {
//         that.apply(obj, [...args, ...newArgs]);
//     }
// }

// const func = printName.myBind(obj, "lko");
// func("UP");

//-------------------------------------------------------------------------------------------------------------

// // call/ apply pollyfil

// const obj = {
//     firstName: "mayank",
//     lastName: "singh"
// }

// function printName(city, state) {
//     console.log("Hi " + this.firstName + " " + this.lastName + " from " + city + " in " + state);
// }

//  Function.prototype.myCall = function (obj, ...args) {
//     this.apply(obj, args);       //<-- Call polyfill
//     // this.call(obj, ...args);       //<-- Apply polyfill
// }

// printName.myCall(obj, "lko", "UP");

//--------------------------------------------------------------------------------------------------------------

//--------bind polyfill-> new way

// const obj = {
//     firstName: "mayank",
//     lastName: "singh",
// }

// function printName(city, state) {
//     console.log("Hi " + this.firstName + " " + this.lastName + " from " + city + " in " + state);
// }

//  Function.prototype.myBind = function (obj, ...args) {
//     obj.that = this;
//     return function (...newArgs) {
//         obj.that(...args, ...newArgs);
//     }
// }

// const func = printName.myBind(obj, "lko");
// func("UP");

//--------------------------------------------------------------------------------------------------------------

//---------------------------------------------------------------------------------------------------------

// // sum(1)(2)(3).....()

// const sum = (num) => {
//     return function (nextNum) {
//         if (nextNum) {
//             return sum(num + nextNum)
//         }
//         else {
//             console.log(num)
//         }
//     }
// }

// sum(1)(2)(3)(4)()

//----------------------------------------------------------------------------------------------------------

// flatten the array- i/p- [1,[2,3],[4,[5,6,7]],8]
// o/p- [1,2,3,4,5,6,7,8]

// // using closures and foreach
// const flatten = (arr) => {
//     const finalArr = [];
//     (function innerflatten(arr) {
//         arr.forEach(e => {
//             if (Array.isArray(e)) {
//                 innerflatten(e);
//             } else {
//                 finalArr.push(e);
//             }
//         });
//     })(arr);
//     return finalArr;
// }

// console.log(flatten([1,[2,3],[4,[5,6,7]],8]));

// // using reduce

// const flatten = (arr) => {
//     return arr.reduce((acc, item)=> {
//         if(Array.isArray(item)){
//            acc = [...acc ,...flatten(item)];
//         } else {
//             acc.push(item);
//         }
//         return acc;
//     }, []);
// }

// console.log(flatten([1,[2,3],[4,[5,6,7]],8]));

//-----------------------------------------------------------------------------------------------------------

// // reduce polyfill with edge case, if initial value of acc is not provided

// const arr = [1, 2, 3, 4, 5, 1];

// Array.prototype.myReduce = function (fn, init) {
//     let finalRes = init ?? this[0];
//     if (finalRes === undefined) {
//         this.shift();
//     }
//     this.forEach((item) => {
//         finalRes = fn(finalRes, item);
//     });
//     return finalRes;
// }

// const sum = arr.myReduce((acc, item) => {
//     return acc + item
// },0);
// console.log(sum);

//-------------------------------------------------------------------------------------------------------------

// level order traversal of Binary tree

// linked list example
