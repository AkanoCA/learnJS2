'use strict';

// let ans = prompt('', '');
// let arr = [];

// arr = ans.split(', ')

// console.log(arr);

// let arr = ['arr', 'reee', 'yt'];
// let i = arr.join(' / ');

// console.log(i);

let arr = [1, 15, 4];
let i = arr.sort(compareNum);

console.log(i);

function compareNum(a, b) {
    return a - b;
}