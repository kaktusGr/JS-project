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
