"use strict";

function minMaxSum(arr) {
	let mainSum = 0;
	let findMax = arr[0];
	let findMin = arr[0];

	for (let i = 0; i < arr.length; i++) {
		if (arr[i] > findMax) {
			findMax = arr[i];
		}
		if (arr[i] < findMin) {
			findMin = arr[i];
		}
		mainSum += arr[i];
	}
	return `${mainSum - findMax} ${mainSum - findMin}`;
}

function timeConversion(time) {
	let lastTwoSymbols = time.slice(-2);
	let firstTwoSymbols = time.slice(0, 2);

	if (lastTwoSymbols === 'PM' && firstTwoSymbols !== '12') {
		firstTwoSymbols = +firstTwoSymbols + 12;
		time = firstTwoSymbols + time.slice(2, -2);
		return time;
	} else if (firstTwoSymbols === '12' && lastTwoSymbols === "AM") {
		firstTwoSymbols = '00';
		time = firstTwoSymbols + time.slice(2, -2);
		return time;
	} else {
		return time = time.slice(0, -2);
	}
}

function breakingRecords(scores) {
	let countMin = 0;
	let countMax = 0;
	let min = scores[0];
	let max = scores[0];
	for (let i = 1; i < scores.length; i++) {
		if (scores[i] > max) {
			max = scores[i];
			countMax++;
		} else if (scores[i] < min) {
			min = scores[i];
			countMin++;
		}
	}
	return [countMax, countMin];
}

function plusMinus(arr) {
	let numPositive = 0;
	let numNegative = 0;
	let numZero = 0;
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] > 0) {
			numPositive++;
		}

		if (arr[i] < 0) {
			numNegative++;
		}

		if (arr[i] == 0) {
			numZero++;
		}
	}
	let positive = numPositive / arr.length;
	let negative = numNegative / arr.length;
	let zero = numZero / arr.length;
	console.log(positive.toFixed(6));
	console.log(negative.toFixed(6));
	console.log(zero.toFixed(6));
}

function processData(input) {
	let firstFourSymbols = input.slice(0, 4);
	let nameInput = input.slice(4);
	let splitCombineInput;
	let resultInput;

	if (firstFourSymbols[0] == 'S') {
		splitCombineInput = nameInput
			.split('')
			.map((letter) => letter == letter.toLowerCase() ? letter : ' ' + letter.toLowerCase())
			.join('');
	}

	if (firstFourSymbols[0] == 'C') {
		splitCombineInput = nameInput
			.split(' ')
			.map((word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1))
			.join('');
	}

	if (firstFourSymbols[2] == 'M' && splitCombineInput.slice(-2) == '()') {
		resultInput = splitCombineInput.slice(0, -2);
	} else {
		resultInput = splitCombineInput + '()';
	}

	if (firstFourSymbols[2] == 'C' && splitCombineInput[0] == ' ') {
		resultInput = splitCombineInput.trim();
	} else if (firstFourSymbols[2] == 'C' && splitCombineInput[0] == splitCombineInput[0].toLowerCase()) {
		resultInput = splitCombineInput[0].toUpperCase() + splitCombineInput.slice(1);
	}

	if (firstFourSymbols[2] == 'V') {
		resultInput = splitCombineInput;
	}

	return resultInput;
}

console.log(processData('S;M;plasticCup()')); //plastic cup
console.log(processData('C;V;mobile phone')); //mobilePhone
console.log(processData('C;C;coffee machine')); //CoffeeMachine
console.log(processData('S;C;LargeSoftwareBook')); //large software book
console.log(processData('C;M;white sheet of paper')); //whiteSheetOfPaper()
console.log(processData('S;V;pictureFrame')); //picture frame
