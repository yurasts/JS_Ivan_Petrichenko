
//snake_case - название файлов и папок но не переменных в скрипте
//UPPER_SNAKE_CASE - переменные в виде констант (нельзя переопределять)
const COLOR_RED = '#F00'; //- можно только использовать
const _apiBase = 'https://gateway.marvel.com:443/v1/public/'; //- не трогать
//Kebab-case
//PascalCase - для названия классов в JavaScript





"use strict";

// let number = 4.6;

// console.log(number);
// console.log(5 / 0);
// console.log('string' * 8);

// const persona = "Alex";
// const bulen = true;

// let und;
// console.log(und);

// const obj = {
//     name: "john",
//     age: 25,
//     isMarried: false
// };
// console.log(obj.name);

let arr = ['apple.jpg', 'green.bmp', 5, 'sun.svg', []];
arr[10] = 1789;

console.log(arr[2]);
console.log(arr);




let arrObj = {
    0: 'apple.jpg', 
    1: 'green.bmp', 
    2: 5, 
    3: 'sun.svg'};
arrObj.b = '1234';
arrObj['b'] = '1234';

console.log(arrObj['1']);
console.log(arrObj.b);
console.log(arrObj);

let obj = {
    Anna: 38,
    Dima: 32,
    Max: 12
}
console.log(obj.Dima)

// TEST12 ----------------------------------
const storeName = 'My awesome store';

let storeDescription = {
    budget: 10000,
    employees: ['Pit', 'Jack', 'Kate'],
    products:{
        apple: 1.5,
        egg: 4
    },
    open:true
}
console.log(storeDescription.products.apple);
