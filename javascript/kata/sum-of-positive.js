// https://www.codewars.com/kata/5715eaedb436cf5606000381/train/javascript
// You get an array of numbers, return the sum of all of the positives ones.
// Example [1,-4,7,12] => 1 + 7 + 12 = 20
// Note: if there is nothing to sum, the sum is default to 0.

// решение через цикл for
// function positiveSum(arr) {
//  let sum = 0;
//   for(let i = 0; i < arr.length; i++) {
//     if(arr[i] > 0) {
//       sum += arr[i]
//     }
//   }
// return sum;
// }


// решение через forEach
// function positiveSum(arr) {
// 	let sum = 0;
// 	arr.forEach(e => {
// 		if(e > 0) {
// 			sum += e
// 		}
// 	})
// 	return sum;
// }

// Решение через методы
// const positiveSum = arr => arr.filter(x => x >= 0).reduce((a, c) => a + c, 0)

// const positiveSum = (arr) => arr.reduce((a,b)=> a + (b > 0 ? b : 0),0);