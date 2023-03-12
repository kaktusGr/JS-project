"use strict";

//1 Числа Фибоначчи
function fib(index) {
	if (index < 2) {
		return index;
	}

	let lastLastStep = 0;
	let lastStep = 1;

	for (let i = 2; i <= index; i++) {
		let result = lastLastStep + lastStep;
		lastLastStep = lastStep;
		lastStep = result;
	}
	return lastStep;
}

//2 Найди Fizz и Buzz
function fizzBuzz(begin, end) {
	let number = begin;
	while (number <= end) {
		if (number % 3 === 0 && number % 5 === 0) {
			console.log('FizzBuzz');
		} else if (number % 3 === 0) {
			console.log('Fizz');
		} else if (number % 5 === 0) {
			console.log('Buzz');
		} else {
			console.log(number);
		}
		number++;
	}
}

//3 Переворот числа
function reverseInt(num) {
	let numAbs = Math.abs(num);
	let isNegative = num !== numAbs;
	let numString = String(numAbs);
	let numStringReverse = '';
	for (let i = 0; i < numString.length; i++) {
		numStringReverse = numString[i] + numStringReverse;
	}

	if (isNegative) {
		return +numStringReverse * -1;
	} else {
		return +numStringReverse;
	}
}

//4 Счастливый билет
function isHappyTicket(numberTicket) {
	let resultLeft = 0;
	let resultRight = 0;
	for (let i = 0; i < numberTicket.length; i++) {
		if (i < (numberTicket.length / 2)) {
			resultLeft += Number(numberTicket[i]);
		} else {
			resultRight += +numberTicket[i];
		}
	}
	return resultLeft === resultRight;
}

//6 Идеальное число
function isPerfect(number) {
	let sumNumber = 0;
	for (let i = 1; i < number; i++) {
		if (number % i === 0) {
			sumNumber += i;
		}
	}
	return sumNumber === number;
}

//7 Инвертированный регистр
function register(text) {
	let textResult = '';
	for (let i = 0; i < text.length; i++) {
		if (text[i] == text[i].toUpperCase()) {
			textResult += text[i].toLowerCase();
		} else {
			textResult += text[i].toUpperCase();
		}
	}
	return textResult;
}

//8 Счастливые числа
function sumOfSquareDigits(number) {
	let numberToString = String(number);
	let sum = 0;
	for (let i = 0; i < numberToString.length; i++) {
		sum += numberToString[i] ** 2;
	}
	return sum;
}

function isHappyNumber(number) {
	let sumSquare = number;
	for (let i = 0; i < 10 && sumSquare !== 1; i++) {
		sumSquare = sumOfSquareDigits(sumSquare);
	}
	return sumSquare === 1;
}
