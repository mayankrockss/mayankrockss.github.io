
// ------- rotate an array-------------------------------------------

//     function rotateArray(A, B) {
//         const newArr = [];
//         const exchange = (a, b) => {
//             newArr[b] = a;
//         }
//         const len = A.length;
//         const moves = B < len ? B : B % len;
//         for (let i = len - 1; i >= 0; i--) {
//             exchange(A[i], i - moves < 0 ? ((i - moves) + len) : i - moves);
//         }

//         console.log(newArr);
//     }
// const arr = [1, 2, 3, 4, 5, 6];
// rotateArray(arr, 1)

// ----pick from both sides----------------------------------------------
//     function pick(a, b) {
//         const arr = [...a.slice(-b), ...a.slice(0, b)];
//         let start = 0;
//         let sum = 0;
//         let maxSum = 0;
//         for (let i = 0; i <= arr.length - 1; i++) {
//             if (i < b) {
//                 sum += arr[i];
//                 maxSum = sum;
//             } else {
//                 sum = sum - arr[start] + arr[i];
//                 start++;
//                 // console.log(sum);
//                 if (sum > maxSum) maxSum = sum;
//             }
//         }
//         console.log(maxSum);

//     }

// const a = [1, 2];
// pick(a, 1)

// ------------spiral matrix-----------------------------------------------

// const printSpiral = (arr) => {
//     const newArr = [];
//     let m = 0, n = arr.length - 1;
//     for (let i = 0; i < arr.length; i++) {
//         for (let j = 0; j < arr[0].length; j++) {
//             if (i === m || j === n || i === n)
//                 newArr.push(arr[i][j]);
//         }
//         if (n === ) ????????
//     }
//     console.log(newArr);
// }

// const arr = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9]
// ];
// printSpiral(arr);

// --------Prettyprint-------------------------------------------------
//     input - 5
// output ->
//     [5, 5, 5, 5, 5, 5, 5, 5, 5]
//     [5, 4, 4, 4, 4, 4, 4, 4, 5]
//     [5, 4, 3, 3, 3, 3, 3, 4, 5]
//     [5, 4, 3, 2, 2, 2, 3, 4, 5]
//     [5, 4, 3, 2, 1, 2, 3, 4, 5]
//     [5, 4, 3, 2, 2, 2, 3, 4, 5]
//     [5, 4, 3, 3, 3, 3, 3, 4, 5]
//     [5, 4, 4, 4, 4, 4, 4, 4, 5]
//     [5, 5, 5, 5, 5, 5, 5, 5, 5]

// function Prettyprint(A) {
//     let arr = [];
//     let totalcount = A * 2 - 2;
//     for (let i = 0; i <= totalcount; i++) {
//         for (let j = 0; j <= totalcount; j++) {
//             if (!arr[i]) arr[i] = [];
//             if (!arr[i][j]) arr[i][j] = [];
//             arr[i][j] = A;
//         }
//     }
//     let runner = A - 1;
//     let m = 1, n = totalcount - 1, k = 1, l = totalcount - 1, dir = 0;
//     while (m <= n && k <= l) {
//         if (dir === 0) {
//             for (let i = k; i <= l; i++) {
//                 arr[m][i] = runner;
//                 arr[n][i] = runner;
//             }
//             dir += 1;
//         }
//         if (dir === 1) {
//             for (let i = k; i <= l; i++) {
//                 arr[i][k] = runner;
//                 arr[i][l] = runner;
//             }
//         }
//         m += 1, k += 1, n -= 1, l -= 1, runner -= 1, dir = 0;
//     }
//     return (arr);
// }
// console.log(Prettyprint(5));

// ------------max contigous subarray sum--------------------------------------------------------

//     function maxSubArray(arr) {
//         let max = arr[0];
//         let tempSum = 0;
//         for (let i = 0; i < arr.length; i++) {
//             if (tempSum < 0) tempSum = 0;
//             tempSum += arr[i];
//             max = Math.max(tempSum, max);
//         }
//         console.log(max);
//     }

// const a = [-1, -2, -3, 1, -3];
// maxSubArray(a);

// ----------max contigous subarray--------------------------------------------


//     function maxSubArray(arr) {
//         let max = 0;
//         let newarr = [];
//         const obj = {};
//         for (let i = 0; i < arr.length; i++) {
//             if (arr[i] >= 0) {
//                 max += arr[i];
//                 newarr.push(arr[i]);
//             }
//             if (arr[i] < 0 || i === arr.length - 1) {
//                 if (obj[max]) {
//                     if (obj[max].length === newarr.length) {
//                         obj[max] = arr.indexOf(obj[max][0]) > arr.indexOf([newarr][0]) ? [...newarr]
//                             : obj[max]
//                     } else {
//                         obj[max] = obj[max].length > newarr.length ? obj[max] :
//                             [...newarr];
//                     }
//                 }
//                 else {
//                     obj[max] = [...newarr];
//                 }
//                 max = 0;
//                 newarr = [];
//             }
//         }
//         let maxKey = 0;
//         for (const key in obj) {
//             if (+key > maxKey) maxKey = key;
//         }
//         console.log(obj[maxKey])
//     }

// const a = [336465782, -278722862, -2145174067, 1101513929, 1315634022, -1369133069, 1059961393, 628175011, -1131176229, -85948442];
// maxSubArray(a);

// ----- rotate a matrix-----------------------------------------------------------

//     function rorate(arr) {
//         let newArr = [];
//         for (let i = 0; i < arr.length; i++) {
//             let temp = arr.length
//             for (let j = arr.length - 1; j >= 0; j--) {
//                 if (!newArr[i]) newArr[i] = [];
//                 newArr[i][(arr.length - 1) - j] = arr[j][i];
//             }
//         }
//         return (newArr)
//     }

// function rorate(arr) {

// efficient way ->

//         let l = 0, r = arr.length - 1;
//     while (l < r) {
//         for (let i = 0; i < r - l; i++) {
//             let t = l, b = r;
//             let temp = arr[t][l + i];
//             arr[t][l + i] = arr[b - i][l];
//             arr[b - i][l] = arr[b][r - i];
//             arr[b][r - i] = arr[t + i][r];
//             arr[t + i][r] = temp;
//         }
//         r -= 1; l += 1;
//     }
//     return arr;
// }

// const arr = [
//     [27, 35, 36, 47, 94, 133, 163, 164, 235, 253, 280, 310, 339, 352],
//     [46, 72, 77, 95, 144, 149, 158, 174, 242, 243, 317, 371, 378, 386],
//     [13, 14, 80, 83, 121, 157, 158, 163, 215, 220, 308, 325, 388, 397],
//     [11, 38, 45, 84, 105, 132, 134, 145, 184, 219, 282, 298, 380, 381],
//     [23, 27, 42, 118, 120, 139, 168, 225, 243, 271, 274, 349, 393, 395],
//     [22, 27, 49, 85, 103, 167, 175, 234, 241, 258, 283, 296, 352, 385],
//     [24, 78, 117, 119, 137, 147, 173, 189, 193, 216, 281, 304, 332, 358],
//     [27, 71, 108, 109, 112, 133, 137, 145, 150, 171, 195, 225, 260, 336],
//     [5, 56, 65, 114, 123, 200, 220, 222, 248, 264, 285, 317, 350, 367],
//     [2, 20, 60, 72, 75, 130, 136, 149, 189, 254, 264, 295, 315, 349],
//     [23, 35, 68, 77, 104, 129, 153, 165, 248, 253, 290, 316, 321, 394],
//     [34, 127, 129, 154, 186, 202, 203, 210, 235, 269, 331, 344, 376, 387],
//     [11, 98, 99, 118, 119, 183, 250, 252, 277, 280, 291, 307, 360, 368],
//     [42, 74, 93, 119, 178, 186, 198, 221, 234, 295, 296, 319, 322, 335],
// ]
// console.log(rorate(arr))

// ------------------------first missing positive int------------------------------

//     function missing(arr) {
//         for (let i = 0; i < arr.length; i++) {
//             if (arr[i] < 0) arr[i] = 0;
//         }
//         for (let i = 0; i < arr.length; i++) {
//             let abs = Math.abs(arr[i])
//             if (abs >= 0 && abs <= arr.length) {
//                 if (arr[abs - 1] > 0)
//                     arr[abs - 1] = -1 * arr[abs - 1];
//                 else if (arr[abs - 1] === 0) {
//                     arr[abs - 1] = -arr.length + 1;
//                 }
//             }
//         }
//         for (let i = 0; i < arr.length; i++) {
//             if (arr[i] >= 0) return i + 1;
//         }
//         return arr.length + 1;
//     }

// const a = [-4]
// console.log(missing(a));