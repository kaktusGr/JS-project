"use strict";

/*
//const sorted = bubble_sort(Array(50).fill(null).map(() => Math.floor(Math.random() * 1000) - 500));
const array = [723, -524, 170, -322, 962, -618, -43, 902, -296, -569, 608, 722, 455, -59, 
	-797, 486, 601, -534, 815, 321, 301, -607, -972, -438, -581, -381, 640, 664, 93, 622, 942, 838, 919, 
	-844, 152, -945, -553, -705, 359, 823, -13, -298, 558, -266, 194, -696, -680, -620, -749, 545];

const arrayRight = array.slice();
console.log('NotSorted array:');
console.log(arrayRight);
*/

// Bubble sort
/*
//sort to end
function bubble_sort_to_end(array) {
  for (let k = 0; k < array.length; k++) { //отвечает за порядок сортировки, т.е. здесь прямой (по возрастанию)
	 for (let i = 0; i < array.length - 1 - k; i++) { //сортировка в конец массива
		if (array[i] > array[i + 1]) {
			let result = array[i];
			array[i] = array[i + 1];
			array[i + 1] = result;
		}
	}
  }
 return array;
}

bubble_sort_to_end(array);
console.log('Sorted array to end:');
console.log(array);

//sort to begin
function bubble_sort_to_begin(array) {
	for (let k = array.length; k < 0; k++) {
		for (let i = array.length - 1; i > 0; i--) { //сортировка в начало массива
		if (array[i] < array[i - 1]) {
			let result = array[i];
			array[i] = array[i - 1];
			array[i - 1] = result;
		}
	 }
	}
	return array;
}

bubble_sort_to_begin(array);
console.log('Sorted array to begin:');
console.log(array);

//sort to begin - reverse
function bubble_sort_reverse_to_begin(array) {
	for (let k = array.length; k > 0; k--) { //отвечает за порядок сортировки, т.е. здесь обратный (по убыванию)
		for (let i = array.length - 1; i > 0; i--) {
		if (array[i] > array[i - 1]) {
			let result = array[i];
			array[i] = array[i - 1];
			array[i - 1] = result;
		}
	 }
	}
	return array;
}

bubble_sort_reverse_to_begin(array);
console.log('Reverse sorted array to begin:');
console.log(array);
*/


// Stupid sort
const array = [5, 2, 1, 3, 9, 0, 4, 6, 8, 7];
const trueArray = array.slice();
console.log(trueArray);
/*
console.log('Stupid sort steps:');

function stupid_sort(array) {
	let i = 0;
	while (i < array.length - 1) {
		if (array[i] > array[i + 1]) {
			let result = array[i];
			array[i] = array[i + 1];
			array[i + 1] = result;
			console.log(array);
			i = 0;
		} else {
			i++;
		}
	}
}

stupid_sort(array);
console.log('Stupid sort result:');
console.log(array);
*/

// Shaker sort

function shaker_sort(array) {
	for (let k = 0; k < array.length / 2; k++) {
		for (let i = k; i < array.length - 1 - k; i++) {
			if (array[i] > array[i + 1]) {
				let buffer = array[i];
				array[i] = array[i + 1];
				array[i + 1] = buffer;
			}
		}
		for (let i = array.length - 1 - k; i > k; i--) {
			if (array[i] < array[i - 1]) {
				let buffer = array[i];
				array[i] = array[i - 1];
				array[i - 1] = buffer;
			}
		}
	}
	return array;
}
