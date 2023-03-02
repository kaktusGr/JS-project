"use strict"
/*
let nameJS = prompt('Какое официальное название JavaScript?', '');

if (nameJS = ECMAScript) {
	alert("Верно!");
} else {
	alert("Не знаете? ECMAScript!");
}

let num = prompt('Введите число', '');
if (num > 0) {
	alert(1);
} else if (num < 0) {
	alert (-1);
} else {
	alert (0);
}

result = (a + b < 4) ? 'Мало' : 'Много';

let message = (login == 'Сотрудник') ? 'Привет' :
	(login == 'Директор') ? 'Здравствуйте' :
	(login == '') ? 'Нет логина' :
	'';

if (age >= 14 && age <= 90)

if (!(age >= 14 && age <= 90))
if (age < 14 || age > 90)

-1 +
0 -
1 +
*/

//
/*
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
*/

/*
function convert(usd, rub) {
	let result = Math.round(rub / usd);
	//return result;
	if (result < 1100 && result !== 1100) {
		let changeResult1 = rub + usd;
		console.log(changeResult1);
	} else if (result > 1200 && result !== 1200) {
		let changeResult2 = rub - usd;
		console.log(changeResult2);
	} //else { return result;}
}
console.log(convert(75.5, 85000));
*/


// пыталась создать калькулятор валют
/*
let changeResult;
function convert(usd, rub) {
	let result = Math.floor(rub / usd);
	if (result % 100 != 0) {
		changeResult = function() {
			let num = rub += usd;
		}
		//convert(75.5, changeResult);
		//return result;
	}
}
console.log(convert(75.5, 85000));


//for (result = Math.floor(rub / usd); result % 100 != 0; result)
*/

var person = 'Mike';
var age = 28;

function myTag(strings, personExp, ageExp) {
  var str0 = strings[0]; // "That "
  var str1 = strings[1]; // " is a "

  // Технически, в конце итогового выражения
  // (в нашем примере) есть ещё одна строка,
  // но она пустая (""), так что пропустим её.
  // var str2 = strings[2];

  var ageStr;
  if (ageExp > 99){
    ageStr = 'centenarian';
  } else {
    ageStr = 'youngster';
  }

  // Мы даже можем вернуть строку, построенную другим шаблонным литералом
  return `${str0}${personExp}${str1}${ageStr}`;
}

var output = myTag`That ${ person } is a ${ age }`;

console.log(output);
// That Mike is a youngster