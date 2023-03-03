"use strict";

// *-* Min-Max sum *-*

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