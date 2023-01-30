'use strict';


var number = 5
var string = "Hello!";
var sym = Symbol();
var boolean = true;
null;
undefined;
var obj = {};

console.log(number);
console.log(string);

let persone = {
    name: "JhonDichead",
    age: 25,
    isMarried: false
};

console.log(persone["name"]);

let arr = ['plum.png','orange.jpg','apple.bmp'];

console.log(arr[1])

// alert("Hello World!");

// let answer = confirm("Are you superman?");

// console.log(answer);

// let answer = prompt("Выбери какой цвет тебе нравится?", "Красный");

// console.log(typeof(arr));

let incr = 10,
    decr = 10;

console.log(++incr);
console.log(--decr);

console.log(5%2);
console.log("2" == 2);

let isChecked = false,
    isClosed = false;

console.log(isChecked || isClose);