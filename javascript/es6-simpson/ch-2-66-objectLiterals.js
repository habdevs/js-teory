'use strict'

// Расширения объектных литералов


// ES2015 Краткие свойства
var x = 2, y =3;

o = {
	x: x,
	y: y,
}
// а в ES6 такие краткие свойства
var x = 2,
	y = 3

o = {
	x,
	y,
}
// ES2015 Краткие методы
var o = {
	x: function () {
		// .....
	},
	y: function () {
		// .....
	},
}
// а в ES6 так выглядят краткие методы
var o = {
	x() {
		// .....
	},
	y() {
		// .....
	},
}

function runSomething(o) {
	let x = Math.random()
	let y = Math.random()
	return o.something(x, y)
}
// ES2015
// console.log(runSomething({
//     something: function something(x, y) {
//         if (x > y) {
//             return something(y, x);
//         }
//         return y - x;
//     },
// }))
// ES6
console.log(
	runSomething({
		something: function something(x, y) {
			if (x > y) {
				return something(y, x)
			}
			return y - x
		},
	})
)
