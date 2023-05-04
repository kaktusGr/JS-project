// Example how to use sorting algorithms with different arrays

let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 28 };

let arrayOfUsers = [vasya, petya, masha];
let arrayOfNumbers = [10, 5, 3, 15];
let arrayOfStrings = ["a", "zzzzz", "vv", "bbbbbbb"];

function bubbleSortReverseToBegin(array, compareFunction) {
	const copyArray = array.slice();
	for (let k = copyArray.length; k > 0; k--) {
		for (let i = copyArray.length - 1; i > 0; i--) {
			if (compareFunction(copyArray[i], copyArray[i - 1]) > 0) {
				let buffer = copyArray[i];
				copyArray[i] = copyArray[i - 1];
				copyArray[i - 1] = buffer;
			}
		}
	}
	return copyArray;
}

function compareUsersByAge(user1, user2) {
	if (user1.age > user2.age) {
		return 1;
	}
	if (user1.age < user2.age) {
		return -1;
	}
	return 0;
}

function compareNumbers(number1, number2) {
	if (number1 > number2) {
		return 1;
	}
	if (number1 < number2) {
		return -1;
	}
	return 0;
}

function compareStringsByLength(string1, string2) {
	if (string1.length > string2.length) {
		return 1;
	}
	if (string1.length < string2.length) {
		return -1;
	}
	return 0;
}
