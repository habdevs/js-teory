// https://www.codewars.com/kata/5259b20d6021e9e14c0010d4/train/javascript
// Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.

// Examples
// "This is an example!" ==> "sihT si na !elpmaxe"
// "double  spaces"      ==> "elbuod  secaps

// function reverseWords(str) {
// 	return str
// 		.split(' ')
// 		.map(e => e.split('').reverse().join(''))
// 		.join(' ')
// }

function reverseWords(str) {
	let reversedWord = ''
	let reversedStr = ''
	for (let i = 0; i < str.length; i++) {
		if (str[i] !== ' ') {
			reversedWord = str[i] + reversedWord
		} else {
			reversedStr += reversedWord + ' '
			reversedWord = ''
		}
	}
	return reversedStr + reversedWord
}

str = 'This is an example!'
