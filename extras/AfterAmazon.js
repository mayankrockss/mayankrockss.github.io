//promise

// resolve if even, reject if not
// setTimeout(() => {
//     console.log("setTimeoue")
// })
// function myPromise(num) {
//     return new Promise((resolve, reject) => {
//         if (num % 2 === 0) resolve("woowww")
//         else reject("shitt")
//     })
// }

// myPromise(3).then(suc => { console.log("even"); return suc }).catch(err => "catched").then((msg) => { console.log("makk", msg); return msg }).then((...args) => { throw Error("hayee reee") })

//counter

// function* generatorCounter() {
//     let c = 0;
//     while (true) {

//         const va = yield ++c;
//         console.log(va)
//     }
// }

// const gc = generatorCounter();
// console.log(gc)
// const short = (gc.next).bind(gc);
// console.log(short().value);
// console.log(short("gefs").value);
// console.log(short('makkkkkkkkkk').value);
// console.log(gc.return()); // end generator


// const a = {
//     name: "mak",
//     set sayName(q) {
//         debugger;
//         return this.name;
//     }
// }

// const b = {
//     name: "mak222"
// }

// b.sayName = a.sayName = "mak";

// console.dir(a)
// console.dir(b)


//bind pollyfill

// const a = {
//     name: "mak",
// }
// function sayName(city, edu) {
//     console.log(this.name + city + edu)
// }

// // const binded = sayName.bind(a);


// Function.prototype.myBind = function (context, ...others) {
//     const that = this;
//     return function () {
//         that.call(context, ...others, ...arguments)
//         // context.that(...others)
//     }
// }
// const binded = sayName.myBind(a, "lko");
// binded("be", "hi")
// console.log(a)

// call/apply
// Function.prototype.myCall = function (context, ...others) {
//     context.newfunc = this;
//     context.newfunc(...others);
//     delete context.newfunc;
// }
// // sayName.call(a, 'lko', 'edu');
// sayName.myCall(a, 'lko', 'edu')
// console.log(a)

// Debounce
// function debounce(cb, time) {
//     let timeout;
//     return function (msg) {
//         if (timeout) clearTimeout(timeout);
//         timeout = setTimeout(() => cb(msg), time);
//     }
// }

// const handelClickWithDebounce = debounce((msg) => console.log(msg), 1000);



// Throttle
// function throttle(cb, timer) {
//     let inProgress = false;
//     return function (...args) {
//         if (inProgress) return;
//         cb(...args);
//         inProgress = true;
//         setTimeout(() => { inProgress = false }, timer)
//     }
// }
// const handelClickWithThrottle = throttle((msg) => console.log(msg), 1000);

// sum(1)(2)(3)(4)()

// function sum(a) {
//     return function (b) {
//         if (b) return sum(a + b);
//         else return a;
//     }
// }


// reduce polyfill

// Array.prototype.myReduce = function (cb, init) {
//     let acc = init ?? this[0];
//     let that = this;
//     if (init === undefined || init === null)
//         that = this.slice(1);
//     // that.forEach((item) => {
//     //     acc = cb(acc, item);
//     // });
//     for (let index = 0; index < that.length; index++) {
//         acc = cb(acc, that[index]);
//     }
//     return acc;
// }
// const arr2 = [1, 2, 3, 4, 5, 1];

// const sum = arr2.myReduce((acc, item) => {
//     return acc + item
// }, 0);
// console.log(sum);


// Flatten an array

// const arr = [1, 2, [3, 4, [5, 6, [7, 8, [9, 10]]]], 11];

// function flatten(arr) {
//     const result = arr.myReduce((acc, cur) => {
//         if (Array.isArray(cur)) {
//             acc = [...acc, ...flatten(cur)];
//         }
//         else acc.push(cur);
//         return acc;
//     }, []);
//     return result;
// }

// console.log(flatten(arr));

// es5 inheritence

// function Employee(name) {
//     const shh = "secret"; //private variables
//     this.name = name;
//     this.saySalary = function () {
//         console.log("sal is ", this.salary)
//     }
//     this.saySecret = function () {
//         return shh;
//     }
// }
// Employee.prototype.sayName = function () {
//     console.log("nmae is= ", this.name)
// }
// function Manager(name, salary) {
//     Employee.call(this, name);
//     this.salary = salary;
// }

// Manager.prototype = Object.create(Employee.prototype);
// Manager.prototype.constructor = Manager;

// const e = new Manager("mak", "43.5");
// console.dir(Employee);
// console.dir(Manager);
// console.dir(e);
// let ref2 = e.saySalary;
// ref2.call(e);
// console.log(ref2)

// console.log(Employee.shh)

//es 6 inheritance

// class Employee1 {
//     #shh = "secret";
//     constructor(name) {
//         this.name = name;
//         this.saySalary = function () {
//             console.log("sal is ", this.salary)
//         }
//     }
//     sayName() {
//         console.log("name is ", this.name)
//     }
//     get Secret() {
//         console.log("secret is", this.#shh)
//     }
// }

// class Manager1 extends Employee1 {
//     constructor(name, salary) {
//         super(name);
//         this.salary = salary;
//     }
// }

// const e1 = new Manager1("mak", "43.5");
// console.dir(Employee1);
// console.dir(Manager1);
// console.dir(e1);
// e1.saySalary();
// e1.sayName();
// console.log(e1.shh)

// binary search

// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// function binSearch(arr, tofind) {
//     let start = 0, end = arr.length - 1;
//     while (start <= end) {
//         let middle = Math.floor((start + end) / 2);
//         if (arr[middle] === tofind) { return middle }
//         else if (arr[middle] > tofind) {
//             end = middle - 1;
//         } else {
//             start = middle + 1;
//         }
//     }
//     return -1;
// }

// console.log(binSearch(arr, 40));

// Sorting of arr of objects
// const arr = [{ name: "shruti", age: 29 },
// { name: "mak", age: 28 },
// { name: "anshu", age: 30 },
// { name: "anshu2", age: 30 },
// { name: "z", age: 12 }];

// arr.sort((a, b) => {
//     return a.name < b.name ? -1 : 1
// })
// console.log(arr)

// //remove duplicates
// const arr = [1, 1, 2, 2, 3, 4];
// console.log(Array.from(new Set(arr)))

// 2 sum
// const arr = [8, 4, 9, 10, 1, 5];

// function sum2(arr, num) {
//     const obj = {};
//     let ar = [];
//     arr.every((cur, i) => {
//         console.log(obj)
//         if (obj[cur] !== undefined) {
//             ar = [obj[cur], i];
//             return false;
//         } else {
//             obj[num - cur] = i
//         }
//         return true;
//     })
//     return ar;
// }
// console.log(sum2(arr, 9));

// flateten an object
// const user = {
//     name: "Fireeye",
//     address: {
//         company: {
//             city: "blr",
//             state: "KA",
//             landmark: {
//                 title: "banergatta rd."
//             }
//         },
//         corporate: {
//             city: "delhi",
//             state: "Delhi",
//             devisions: {
//                 sales: { owner: "Mayank" },
//                 tech: {
//                     head: "Mani"
//                 }
//             }
//         }
//     }
// };

// const finalObj = {}
// const flattenObj = (obj, name) => {
//     for (const key in obj) {
//         if (obj[key].constructor === Object) {
//             flattenObj(obj[key], name + '_' + key)
//         } else {
//             finalObj[name + '_' + key] = obj[key];
//         }
//     }
// }

// flattenObj(user, "user")
// console.log(finalObj)

// more curring
// const sum = (...args) => {
//     return args.reduce((acc, cur) => acc + cur, 0);
// }
// console.log(sum(1, 2, 3))
// const curry = (fn) => {
//     const cachedArgs = [];
//     return function innerCurry(...args) {
//         if (args.length == 0) {
//             const ans = fn(...cachedArgs)
//             cachedArgs.length = 0;
//             return ans;
//         } else {
//             cachedArgs.push(...args);
//             return function (...args) {
//                 return innerCurry(...args)
//             }
//         }
//     }
// }
// const curriedSum = curry(sum);
// console.log(curriedSum(1, 2, 3, 4)());
// console.log(curriedSum(1)(2, 3)(4)());
// console.log(curriedSum(1)(2)(3)(9)(1)(0)());

// let main = document.getElementsByTagName("main")[0];

// const traverseTree = (rootA) => {
//     if (!rootA) {
//         return;
//     }
//     for (let i = 0; i < rootA.children.length; i++) {
//         console.log(rootA.children[i]);
//         traverseTree(rootA.children[i]);
//     }
// }
// traverseTree(main)


// deep comparision

// function deepCheck(obj1, obj2) {
//     if (Object.keys(obj1)?.length === Object.keys(obj2)?.length) {
//         for (const key in obj1) {
//             if (obj1[key].constructor === Object) {
//                 return deepCheck(obj1[key], obj2?.[key])
//             } else {
//                 if (obj1?.[key] !== obj2?.[key]) {
//                     return "not Same";
//                 }
//             }
//         }
//         return "same";
//     } else
//         return "not Same"
// }
// const obj1 = {
//     name: "mayank",
//     address: { street: "someStreet", city: "lko" }
// }
// const obj2 = {
//     name: "mayank",
//     address: { street: "someStreet", city: "lko", prop: "hooo" }
// }

// console.log(deepCheck(obj1, obj2));

//----------------------------------------------------------------------------
//All about promises

// const p1 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         reject(1);
//     }, 3000);
// });
// const p2 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         reject(2);
//     }, 5000);
// });
// const p3 = Promise.resolve("hiahaha");
// const p4 = Promise.reject("dekho mujhe");

// function MyPromise(exec) {
//     let thenCb, errCb, data, err, resolved, called;

//     function resolve(_data) {
//         data = _data
//         resolved = true;
//         if (called) thenCb(_data);
//     }
//     function reject(_err) {
//         err = _err;
//         resolved = true;
//         if (called) errCb(err);
//     }

//     this.then = function (cb) {
//         thenCb = cb;
//         if (data && resolved) {
//             setTimeout(() => { cb(data); }, 0)
//         }
//         called = true;
//         return this;
//     }
//     this.catch = function (cb) {
//         errCb = cb;
//         if (err && resolved) {
//             setTimeout(() => { cb(err); }, 0)
//         }
//         called = true;
//         return this;
//     }
//     this.finally = function (cb) {
//         setTimeout(() => { cb(); }, 0);
//         return this;
//     }
//     exec(resolve, reject);
// }
// console.log("1111")
// const myPromise = new MyPromise((res, rej) => {
//     res("mayank");
// })

// myPromise.then((data) => { console.log(data) }).catch(err => console.log("error", err)).finally(() => console.log("doing SOmething finally"));
// console.log("22222")

//----------------------------------------------------------------------------
//all

// Promise.all([p1, p2, p3, p4]).then((args)=> console.log(args)).catch(err=> console.log("error",err));
// Promise.myAll = function (arr) {
//     return new Promise((resolve, reject) => {
//         const resultArr = [];
//         let length = 0;
//         arr.forEach((e, i) => {
//             e.then((res) => {
//                 resultArr[i] = res;
//                 length++;
//             })
//                 .catch((err) => reject(err))
//                 .finally(() => {
//                     if (length === arr.length) {
//                         resolve(resultArr);
//                     }
//                 });
//         });
//     })
// };

// Promise.myAll([p1, p2, p3, p4]).then(console.log).catch(console.log);

//------------------------------------------------------------------------------
//all_settled

//   Promise.myAllSettled = function (arr) {
//     return new Promise((resolve, reject) => {
//         const resultArr = [];
//         let length = 0;
//         arr.forEach((e, i) => {
//             e.then((res) => {
//                 resultArr[i] = {status: "resolved1", value: res};

//             })
//                 .catch((err) => {
//                     resultArr[i] = {status: "rejected1", reason: err};
//                  })
//                 .finally(() => {
//                     length++;
//                     if (length === arr.length) {
//                         resolve(resultArr);
//                     }
//                 });
//         });
//     })
// };

// Promise.myAllSettled([p1, p2, p3, p4]).then((args)=> console.log("success", args));

//race - very straight forward
// Promise.race([p1, p2, p3, p4]).then((args) => console.log("success", args)).catch(err => console.log("error", err));
//any - very straight forward
// Promise.any([p1, p2, p3, p4]).then((args) => console.log("success", args)).catch(err => console.log("error", err));



// Graphs

const graph = {
    a: ['b', 'c'],
    b: ['d'],
    d: ['f'],
    c: ['e'],
    e: [],
    f: []

}
const g1 = {
    f: ['g', 'i'],
    g: ['h'],
    h: [],
    i: ['g', 'k'],
    j: ['i'],
    k: []
}
const g3 = [
    ['i', 'j'], ['k', 'i'], ['m', 'k'], ['k', 'l'], ['o', 'n']
]

const g4 = {
    a: ["b", "c"],
    b: ['d'],
    c: ['e'],
    d: [],
    e: ['f'],
    f: [],
}

//util function to convert array form to object adjency list
const converToAdjencyList = (arr) => {
    const al = {};
    for (const i of arr) {
        const [a, b] = i;
        if (al[a]) {
            al[a].push(b);
        } else {
            al[a] = [b]
        }
        if (al[b]) {
            al[b].push(a);
        } else {
            al[b] = [a]
        }
    }
    console.log(al);
    return al;
}
// dfs with stack

function dfs(graph, start) {
    const stack = [start];
    while (stack.length != 0) {
        const cur = stack.pop();
        console.log(cur);
        stack.push(...graph[cur]);
    }
}
// dfs(graph, 'a');


// dfs with recursion
function dfsWithRecursion(graph, start) {
    console.log(start);
    for (const i of graph[start]) {
        dfsWithRecursion(graph, i)
    }

}
// dfsWithRecursion(graph, 'a');


//bfs with queue
function bfs(graph, start) {
    const queue = [start];
    while (queue.length != 0) {
        const cur = queue.shift();
        console.log(cur);
        queue.push(...graph[cur])
    }
}
// bfs(graph, 'a');


// has path problem: tell if you can travel from src to dest
function hasPath(graph, src, dest) {
    if (src === dest) { return true };
    for (const i of graph[src]) {
        if (hasPath(graph, i, dest)) return true;
    }
    return false;
}
// console.log(hasPath(g1, 'f', 'k'))


// undirected graphs, find if it has a path.
function hasPathInCyclic(graph, src, dest, set) {
    if (src === dest) {
        return true;
    }
    if (set.has(src)) {
        return false;
    }
    for (let i of graph[src]) {
        set.add(src);
        if (hasPathInCyclic(graph, i, dest, set)) return true;
    }
    return false;
}
// console.log(hasPathInCyclic(converToAdjencyList(g3), 'i', 'j', new Set()));

// course completion 2 problem - 
// const output = [];
// const visited = new Set(), cycle = new Set();
// function coversAll(graph, start = Object.keys(graph)[0]) {
//     if (cycle.has(start)) {
//         return false;
//     }
//     if (visited.has(start)) {
//         return true;
//     }
//     cycle.add(start);
//     for (let i of graph[start]) {
//         if (!coversAll(graph, i)) return false;
//     }
//     cycle.delete(start);
//     visited.add(start);
//     output.push(start);
//     return true;
// }

// console.log(coversAll(g4))
// console.log(output)





// polyfill of seTimeout
// can cancel to with-


function newSetTimeout() {
    function setMyTimeout(fn, time, ...args) {
        const b = Date.now() + time;
        function repeat() {
            if (Date.now() > b) {
                fn.apply(this, args);
            } else {
                requestIdleCallback(repeat);
            }
        }
        requestIdleCallback(repeat);
    }
    return { setMyTimeout }
}
const { setMyTimeout } = newSetTimeout();

console.log("hi1")
const count = setMyTimeout((name) => console.log(name), 2000, "makk")
console.log(count, 'hi2')
// const count2 = setMyTImeout(() => console.log("hi"), 1000)
// console.log(count2)
// const count3 = setMyTImeout(() => console.log("hi"), 1000)
// console.log(count3)