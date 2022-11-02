const delay = ms => {
	return new Promise(resolve => setTimeout(() => resolve(), ms))
}

const url = 'https://jsonplaceholder.typicode.com/users'

async function fetchAsyncTodos() {
	console.log('start')
	try {
		await delay(2000)
		const response = await fetch(url)
		const data = await response.json()
		console.log('data', data)
	} catch (e) {
		console.error(e)
	} finally {
	}
}
fetchAsyncTodos()

// function fetchTodos() {
// 	console.log('Start')
// 	return delay(2000)
// 	.then(() => fetch(url)
// 	.then(response => response.json)
// }

// fetchTodos().then(data => {
// 	console.log('data', data)
// }).catch(e => console.error(e))

/* 
    Пятеро друзей купили билеты на концерт Моргенштерна. 
    Мы собрали их данные в массив, где у каждого пользователя 
    есть свойство age — возраст. Посчитайте средний возраст целевой аудитории артиста.
    Ответ должен быть округлён к ближайшему целому.
*/

// const data = [
// 	{
// 		name: 'Саша',
// 		age: 19,
// 		info: {
// 			city: 'Moscow',
// 			tel: '8-999-444-3312',
// 			quantityReposts: {
// 				vk: 21,
// 				dzen: 3,
// 				telegram: 1,
// 			},
// 		},
// 	},
// 	{
// 		name: 'Катя',
// 		age: 21,
// 		info: {
// 			city: 'Ryzan',
// 			tel: '8-939-144-1322',
// 			quantityReposts: {
// 				vk: 1,
// 				dzen: 4,
// 				telegram: 0,
// 			},
// 		},
// 	},
// 	{
// 		name: 'Миша',
// 		age: 17,
// 		info: {
// 			city: 'Omsk',
// 			tel: '8-993-321-9833',
// 			quantityReposts: {
// 				vk: 0,
// 				dzen: 1,
// 				telegram: 8,
// 			},
// 		},
// 	},
// 	{
// 		name: 'Федя',
// 		age: 23,
// 		info: {
// 			city: 'Moscow',
// 			tel: '8-992-121-2233',
// 			quantityReposts: {
// 				vk: 3,
// 				dzen: 2,
// 				telegram: 1,
// 			},
// 		},
// 	},
// 	{
// 		name: 'Клава',
// 		age: 22,
// 		info: {
// 			city: 'Saint Petersburg',
// 			tel: '8-931-221-2243',
// 			quantityReposts: {
// 				vk: 2,
// 				dzen: 1,
// 				telegram: 0,
// 			},
// 		},
// 	},
// ]

// function calculateAverageAge(data) {
// 	const peopleCount = data.length
// 	let totalAge = 0
// 	for (const user of data) {
// 		totalAge += user.age
// 	}
// 	const averageAge = totalAge / peopleCount
// 	return 'Средний возраст аудитории Моргенштерна: ' + Math.round(averageAge)
// }
// console.log(calculateAverageAge(data))
