// interpolated expressions
// внутри интерполированных строковых литералов могут находиться любые допустимые выражения втч вызовы функций, вызовы встроенных функциональных выражений и даже другие интерполированные строковые литералы

function upper(s) {
	return s.toUpperCase()
}

let who = 'reader'
let texte = `a very ${upper('warm')} welcome to all of you ${upper(
	`${who}s`
)}!!!!!`

console.log(texte)

// expression scope
// интерполированные строковые литералы напоминают IIFE. Здесь строковый литерал помещен внутрь функции, другими словами интерполированный строковый литерал попадет в лексический контекст, там, где он появился, и никаким образом не может быть связан с динамической областью видимости.

function foo(str) {
	var name = 'fooo'
	console.log(str)
}

function bar() {
	var name = 'bar'

	foo(`hello from ${name} !
	`)
}

var name = 'flobal'

console.log(bar())

// tagged pattern strings
// В Качестве примера мы рассмотрим простое форматирование чисел с помощью значка американского доллара(своего рода примитивную локализацию )

const dollarBillsAll = (strings, ...values) => {
	return strings.reduce(function (s, v, idx) {
		if (idx > 0) {
			if (typeof values[idx - 1] == 'number') {
				s += `$${values[idx - 1].toFixed(2)}`
			} else {
				s += values[idx - 1]
			}
		}
		return s + v
	}, '')
}

var amt1 = 11.99,
	amt2 = amt1 * 1.08,
	name = 'Kyle'

var text = dollarBillsAll`thanks to buy, ${name}! You change price ${amt1} and nds ${amt2}`

console.log(text)
