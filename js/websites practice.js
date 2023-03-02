"use strict"

// *-* Min-Max sum *-*

/*
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
console.log(minMaxSum([1, 3, 5, 7, 9]));
console.log(minMaxSum([6, 3, 7, 2, 4]));
*/


// *-* Bubble sort *-*

//const sorted = bubble_sort(Array(50).fill(null).map(() => Math.floor(Math.random() * 1000) - 500));
const array = [723, -524, 170, -322, 962, -618, -43, 902, -296, -569, 608, 722, 455, -59, 
	-797, 486, 601, -534, 815, 321, 301, -607, -972, -438, -581, -381, 640, 664, 93, 622, 942, 838, 919, 
	-844, 152, -945, -553, -705, 359, 823, -13, -298, 558, -266, 194, -696, -680, -620, -749, 545];

const arrayRight = array.slice();
console.log('NotSorted array:');
console.log(arrayRight);

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