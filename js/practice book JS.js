"use strict"

function promptNameJS() {
	let nameJS = prompt('Какое официальное название JavaScript?', '');
	if (nameJS === 'ECMAScript') {
		alert("Верно!");
	} else {
		alert("Не знаете? ECMAScript!");
	}
}

function promptNumber() {
	let num = prompt('Введите число', '');
	if (num > 0) {
		alert(1);
	} else if (num < 0) {
		alert(-1);
	} else {
		alert(0);
	}
}

function promptUserName() {
	let userName = prompt('Кто там?', '');
	if (userName === 'Админ') {
		let psw = prompt('Пароль?', '');

		if (psw === 'Я Главный') {
			alert('Здравствуйте!');
		} else if (psw === '' || psw === null) {
			alert('Отменено');
		} else {
			alert('Неверный пароль');
		}

	} else if (userName === '' || userName === null) {
		alert('Отменено');
	} else {
		alert('Я вас не знаю');
	}
}

function myAge(birthday) {
	let myYear = birthday.slice(-4);
	let nowYear = date.getFullYear();
	let myDay = birthday.slice(0, 2);
	let nowDay = date.getDate();
	let myMonth = birthday.slice(3, 5);
	let nowMonth = date.getMonth() + 1;

	if ((myMonth < nowMonth) || (myMonth == nowMonth && myDay < nowDay)) {
		return `Your age is ${nowYear - myYear} years`;
	} else if ((myMonth > nowMonth) || (myMonth == nowMonth && myDay > nowDay)) {
		return `Your age is ${nowYear - myYear - 1} years`;
	} else {
		return 'Happy birthday!';
	}
}

let date = new Date();
let birthday = prompt('Write your birthday (DD.MM.YYYY)', '');
if (birthday !== '') {
	alert(myAge(birthday));
}

function simpleNum(num) {
	stepNum:
	for (let i = 2; i <= num; i++) {
		for (let j = 2; j < i; j++) {
			if (i % j == 0) continue stepNum;
		}
		console.log(i);
	}
}

function toNumber(str) {
	str = str.trim();
	if (str === '') {
		return Number.NaN;
	}
	return +str;
}

function sumInput() {
	let array = [];
	let num;
	let sum = 0;

	do {
		let str = prompt("Write a number:", '');
		num = toNumber(str);
		array.push(num);
	} while (!Number.isNaN(num));
	array.pop();

	for (let n of array) {
		sum += n;
	}
	alert(sum);
}

function getMaxSubSum(arr) {
	let maxSum = 0;

	for (let i = 0; i < arr.length; i++) {
		let sumFixedStart = 0;
		for (let j = i; j < arr.length; j++) {
			sumFixedStart += arr[j];
			maxSum = Math.max(maxSum, sumFixedStart);
		}
	}

	return maxSum;
}

function getMaxSubSumShort(arr) {
	let maxSum = 0;
	let partialSum = 0;

	for (let item of arr) {
		partialSum += item;
		maxSum = Math.max(maxSum, partialSum);
		if (partialSum < 0) partialSum = 0;
	}

	return maxSum;
}

/*function camelize(str) {
	return str
		.split('-')
		.map((word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1))
		.join('');
}*/

function camelize(str) {
	let strToArray = str.split('-');

	let upperCase = strToArray.map((word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1));

	return upperCase.join('');
}

function filterRangeInPlace(arr, a, b) {

	for (let i = 0; i < arr.length; i++) {
		let val = arr[i];
		if (val < a || val > b) {
			arr.splice(i, 1);
			i--;
		}
	}
}

let vasya = { name: "Вася", surname: "Пупкин", id: 1 };
let petya = { name: "Петя", surname: "Иванов", id: 2 };
let masha = { name: "Маша", surname: "Петрова", id: 3 };

let users = [vasya, petya, masha];

let usersMapped = users.map(item => {
	let newArr = {};
	newArr.fullName = item.name + ' ' + item.surname;
	newArr.id = item.id;
	return newArr;
});

// let usersMapped = users.map(item => ({
// 	fullName: `${item.name} ${item.surname}`,
// 	id: item.id
//  }));
