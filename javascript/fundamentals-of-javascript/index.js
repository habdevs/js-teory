function positiveSum(arr) {
	let result = arr
		.map((item, index) => (item > 0 ? index : 0))
		// .reduce((sum, current) => sum + current)
console.log(result)
}

positiveSum([-1,2,3,4,-5])
positiveSum([1, 2, 3, 4, 5])
positiveSum([1,-2,3,4,5])
// const myCity = {
// 	country: 'RUSSIA'
// }

// myCity.country // GET
// console.log(myCity)

// myCity.world = 'Earth' // ADD
// myCity.people = true // ADD
// myCity.rasa = 'people' // ADD
// myCity.sumPeople = undefined // ADD
// console.log(myCity)

// myCity.rasa = 'nigga' // EDITH
// console.log(myCity)

// delete myCity.sumPeople // DELETE
// console.log(myCity)

// const countryPropertyName = 'country' // GET []
// myCity[countryPropertyName] = 'USA' // GET []
// console.log(myCity)
