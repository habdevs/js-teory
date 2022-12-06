function runSomething(o: any) {
	let x = Math.random()
	let y = Math.random()

	return o.something(x, y)
}

runSomething({
	something: function something(x: number, y: number) {
		if (x > y) {
			return something(y, x)
		}
		return y - x
	},
})
