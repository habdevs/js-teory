class SmallestIntegerFinder {
	findSmallestInt(args) {
		let min = args[0]

		args.forEach((elem, index) => {
			if (elem < min) {
					min = elem
			}
		})
		return min
	}
}

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
