"use strict"

//Use prompt and alert
function promptName() {
	let nameJS = prompt('Какое официальное название JavaScript?', '');
	if (nameJS == 'ECMAScript') {
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

function promptBirthday() {
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
