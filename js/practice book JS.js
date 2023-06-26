"use strict"
/*
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

function camelize(str) {
	return str
		.split('-')
		.map((word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1))
		.join('');
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

let usersMapped = users.map(item => {
	let newArr = {};
	newArr.fullName = item.name + ' ' + item.surname;
	newArr.id = item.id;
	return newArr;
});

function sortByAge(arr) {
	arr.sort((user1, user2) => {
		if (user1.age > user2.age) {
			return 1;
		}
		if (user1.age < user2.age) {
			return -1;
		}
		return 0;
	})
}

function shuffle(array) {
	for (let i = array.length - 1; i > 0; i--) {
		let j = Math.floor(Math.random() * (i + 1));
		[array[i], array[j]] = [array[j], array[i]];
	}
}

function unique(arr) {
	let uniqueStr = [];
	let result = arr.forEach((item) => {
		if (!uniqueStr.includes(item)) {
			uniqueStr.push(item);
		}
	});
	return uniqueStr;
}

function Calculator() {
	this.calculate = function (str) {
		let symbol = str.split(" ");
		return this[symbol[1]](+symbol[0], +symbol[2]);
	}

	this["+"] = function (a, b) {
		return a + b;
	}

	this["-"] = function (a, b) {
		return a - b;
	}

	this.addMethod = function (key, func) {
		this[key] = func;
	}
}
let calc = new Calculator;

function groupById(array) {
	return array.reduce((obj, value) => {
		obj[value.id] = value;
		return obj;
	}, {})
}

function aclean(arr) {
	let map = new Map();

	for (let item of arr) {
		let arrLetters = Array.from(item.toLowerCase());
		arrLetters.sort();
		let str = arrLetters.join('');
		map.set(str, item);
	}
	return Array.from(map.values());
}

function sumSalaries(salaries) {
	let salary = 0;
	for (let value of Object.values(salaries)) {
		salary += value;
	}
	return salary;
}

function formatDate(date) {
	let diff = new Date() - date;

	if (diff < 1000) {
		return 'прямо сейчас';
	}

	let sec = Math.floor(diff / 1000);
	if (sec < 60) {
		return `${sec} сек. назад`;
	}

	let min = Math.floor(diff / 60000);
	if (min < 60) {
		return `${min} мин. назад`;
	}

	let newDate = new Date(date);
	newDate = [
		'0' + newDate.getDate(),
		'0' + (newDate.getMonth() + 1),
		'' + newDate.getFullYear(),
		'0' + newDate.getHours(),
		'0' + newDate.getMinutes()
	].map(component => component.slice(-2));

	return newDate.slice(0, 3).join('.') + ' ' + newDate.slice(3).join(':');
}

function sumToFor(n) {
	let sum = 0;
	for (let i = 1; i <= n; i++) {
		sum += i;
	}
	return sum;
}

function sumToRecurse(n) {
	if (n == 1) {
		return n;
	} else {
		return n + sumToRecurse(n - 1);
	}
}

function sumToF(n) {
	return n * (n + 1) / 2;
}

function fib(n) {
	let last = 1;
	let next = 1;
	for (let i = 3; i <= n; i++) {
		cash = last + next;
		last = next;
		next = cash;
	}
	return next;
}

let list = {
	value: 1,
	next: {
		value: 2,
		next: {
			value: 3,
			next: {
				value: 4,
				next: null
			}
		}
	}
};

function printList(list) {
	console.log(list.value);
	if (list.next != null) {
		printList(list.next);
	}
}

function printList(list) {
	let change = list;
	do {
		console.log(change.value);
		change = change.next;
	} while (change != null);
}

printList(list);

function sum(a) {

	let currentSum = a;

	function f(b) {
		currentSum += b;
		return f;
	}

	f.valueOf = function () {
		return currentSum;
	};

	return f;
}

function printNumbers(from, to) {
	let current = from;

	let timerInterval = setInterval(() => {
		alert(current);
		if (current == to) {
			clearInterval(timerInterval);
		}
		current++;
	}, 1000);

	let timerTimeout = setTimeout(function t() {
		if (current <= to) {
			alert(current);
			current++;
		}
		timerTimeout = setTimeout(t, 1000);
	}, 1000);
}

function work(a, b) {
	console.log(a + b);
}

function spy(func) {
	function f(...args) {
		f.calls.push(args);
		return func.apply(this, args);
	};
	f.calls = [];
	return f;
}

work = spy(work);

work(1, 2);
work(4, 5);

for (let args of work.calls) {
	console.log('call:' + args.join()); // "call:1,2", "call:4,5"
}

function f(x) {
	alert(x);
}

function delay(f, ms) {
	return function (...args) {
		setTimeout(() => f.apply(this, args), ms);
	}
}

let f3000 = delay(f, 3000);
let f5500 = delay(f, 5500);

function debounce(f, ms) {
	let previousStart = null;
	return function (...args) {
		if (previousStart === null || Date.now() - previousStart >= ms) {
			previousStart = Date.now();
			return f.apply(this, args);
		}
	}
}

let f = debounce(console.log, 1000);

function debounce(f, ms) {
	let canCall = true;
	return function (...args) {
		if (canCall) {
			canCall = false;
			setTimeout(() => canCall = true, ms);
			return f.apply(this, args);
		}
	}
}

let f = debounce(console.log, 1000);

f(1); // выполняется немедленно
f(2); // проигнорирован
setTimeout(() => f(3), 100); // проигнорирован (прошло только 100 мс)
setTimeout(() => f(4), 1100); // выполняется
setTimeout(() => f(5), 1500); // проигнорирован
*/

// function f(a) {
// 	console.log(a)
// }

// function throttle(f, ms) {
// 	let canCall = true;
// 	let param = undefined;
// 	let savedThis = undefined;
// 	//setTimeout(() => f.apply(savedThis, param), ms); // должно вызываться в таймере, который проставляет canCall

// 	return function (...args) {
// 		if (canCall) {
// 			canCall = false;
// 			setTimeout(() => {
// 				if (savedThis !== undefined) {
// 					f.apply(savedThis, param);
// 					param = undefined;
// 					savedThis = undefined;
// 				}
// 				// проверяем, что сохраненный this - не undefined.
// 				// Если так, то вызываем функцию, обнуляем сохраненные параметры и сохраненный this.
// 				canCall = true;
// 			}, ms);
// 			return f.apply(this, args);
// 		} else {
// 			param = args;
// 			savedThis = this;
// 		}
// 	}
// }

// let f1000 = throttle(f, 1000);

// f1000(1); // показывает 1
// f1000(2); // (ограничение, 1000 мс ещё нет)
// f1000(3); // (ограничение, 1000 мс ещё нет)

class Clock {

	constructor({ template }) {
		this.template = template;
	}

	render() {
		let date = new Date();

		let hours = date.getHours();
		if (hours < 10) hours = '0' + hours;

		let mins = date.getMinutes();
		if (mins < 10) mins = '0' + mins;

		let secs = date.getSeconds();
		if (secs < 10) secs = '0' + secs;

		let output = this.template
			.replace('h', hours)
			.replace('m', mins)
			.replace('s', secs);

		console.log(output);
	}

	stop() {
		clearInterval(this.timer);
	};

	start() {
		this.render();
		this.timer = setInterval(() => this.render(), 1000);
	};

}

let clock = new Clock({ template: 'h:m:s' });
clock.start();
setTimeout(() => clock.stop(), 5000);
