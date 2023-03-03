"use strict";

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

// *-*Time Conversion *-*
timeExample1 = '03:29:00PM';
timeExample2 = '11:04:55AM';
timeExample3 = '17:20:03';
console.log(timeExample1, timeExample2, timeExample3);

function timeConversion(time) {
    let lastTwoSymbols = time.slice(-2);
    let firstTwoSymbols = time.slice(2);
    if (lastTwoSymbols === 'PM') {
        firstTwoSymbols = +firstTwoSymbols + 12;
        time = firstTwoSymbols + time.slice(2, -2);
        console.log(time);
    } else if (lastTwoSymbols === 'AM') {
        return time = time.slice(1, -2);
    } else {
        return time;
    }
}
//timeConversion('03:29:00PM');
console.log(timeConversion('03:29:00PM'));