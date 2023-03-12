"use strict";

function bubbleSortToEnd(array) {
	const copyArray = array.slice();
	for (let k = 0; k < copyArray.length; k++) {
		for (let i = 0; i < copyArray.length - 1 - k; i++) {
			if (copyArray[i] > copyArray[i + 1]) {
				let buffer = copyArray[i];
				copyArray[i] = copyArray[i + 1];
				copyArray[i + 1] = buffer;
			}
		}
	}
	return copyArray;
}

function bubbleSortToBegin(array) {
	const copyArray = array.slice();
	for (let k = copyArray.length; k < 0; k++) {
		for (let i = copyArray.length - 1; i > 0; i--) {
			if (copyArray[i] < copyArray[i - 1]) {
				let buffer = copyArray[i];
				copyArray[i] = copyArray[i - 1];
				copyArray[i - 1] = buffer;
			}
		}
	}
	return copyArray;
}

function bubbleSortReverseToBegin(array) {
	const copyArray = array.slice();
	for (let k = copyArray.length; k > 0; k--) {
		for (let i = copyArray.length - 1; i > 0; i--) {
			if (copyArray[i] > copyArray[i - 1]) {
				let buffer = copyArray[i];
				copyArray[i] = copyArray[i - 1];
				copyArray[i - 1] = buffer;
			}
		}
	}
	return copyArray;
}

function stupidSort(array) {
	const copyArray = array.slice();
	let i = 0;
	while (i < copyArray.length - 1) {
		if (copyArray[i] > copyArray[i + 1]) {
			let buffer = copyArray[i];
			copyArray[i] = copyArray[i + 1];
			copyArray[i + 1] = buffer;
			i = 0;
		} else {
			i++;
		}
	}
}

function shakerSort(array) {
	const copyArray = array.slice();
	for (let k = 0; k < copyArray.length / 2; k++) {
		for (let i = k; i < copyArray.length - 1 - k; i++) {
			if (copyArray[i] > copyArray[i + 1]) {
				let buffer = copyArray[i];
				copyArray[i] = copyArray[i + 1];
				copyArray[i + 1] = buffer;
			}
		}
		for (let i = copyArray.length - 1 - k; i > k; i--) {
			if (copyArray[i] < copyArray[i - 1]) {
				let buffer = copyArray[i];
				copyArray[i] = copyArray[i - 1];
				copyArray[i - 1] = buffer;
			}
		}
	}
	return copyArray;
}

function evenOddSort(array) {
	const copyArray = array.slice();
	let needNextStep;
	do {
		needNextStep = false;
		for (let i = 0; i < copyArray.length - 1; i += 2) {
			if (copyArray[i] > copyArray[i + 1]) {
				let buffer = copyArray[i];
				copyArray[i] = copyArray[i + 1];
				copyArray[i + 1] = buffer;
				needNextStep = true;
			}
		}
		for (let i = 1; i < copyArray.length - 1; i += 2) {
			if (copyArray[i] > copyArray[i + 1]) {
				let buffer = copyArray[i];
				copyArray[i] = copyArray[i + 1];
				copyArray[i + 1] = buffer;
				needNextStep = true;
			}
		}
	} while (needNextStep);
	return copyArray;
}
