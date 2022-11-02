// Обязателен ли "else"?
// важность: 4
// Следующая функция возвращает true, если параметр age больше 18.
// В ином случае она запрашивает подтверждение через confirm и возвращает его результат:

// function checkAge(age) {
//   if (age > 18) {
//     return true;
//   } else {
//     // ...
//     return confirm('Родители разрешили?');
//   }
// }
// Будет ли эта функция работать как-то иначе, если убрать else?

// function checkAge(age) {
//   if (age > 18) {
//     return true;
//   }
//   // ...
//   return confirm('Родители разрешили?');
// }

// Перепишите функцию, используя оператор '?' или '||'
// важность: 4
// Следующая функция возвращает true, если параметр age больше 18.
// В ином случае она задаёт вопрос confirm и возвращает его результат.
// let age = +prompt('years?')
// const checkAge = age => age > 18 ? true : confirm('Родители разрешили')
// checkAge()
// const checkAge = age => age > 18 == true || confirm('Родители разрешили')
// function checkAge(age) {
// 	return age > 18 ? true : confirm('Родители разрешили?')
// }
// function checkAge(age) {
// 	return age > 18 || confirm('Родители разрешили?')
// }

// Функция min(a, b)
// важность: 1
// Напишите функцию min(a,b), которая возвращает меньшее из чисел a и b.
// Пример вызовов:

// min(2, 5) == 2
// min(3, -1) == -1
// min(1, 1) == 1

// function min(a, b) {
// 	if (a > b) {
// 		return b
// 	} else return a
// }

// function min(a, b) {
// 	return a > b ? b : a
// }

// const isMin = (a, b) => (a > b ? b : a)
// isMin(10, 3)


// Функция pow(x,n)
// важность: 4
// Напишите функцию pow(x,n), которая возвращает x в степени n. Иначе говоря, умножает x на себя n раз и возвращает результат.
// pow(3, 2) = 3 * 3 = 9
// pow(3, 3) = 3 * 3 * 3 = 27
// pow(1, 100) = 1 * 1 * ...* 1 = 1
// Создайте страницу, которая запрашивает x и n, а затем выводит результат pow(x,n).
// Запустить демо
// P.S. В этой задаче функция обязана поддерживать только натуральные значения n, т.е. целые от 1 и выше.

// function pow(a, b) {return a ** b}

// const isPow = (a, b) =>  a ** b


// let a = prompt('a?', '')
// let b = prompt('b?', '')

// if (b < 1) {
// 	alert(`Степень ${b} не поддерживается, используйте натуральное число`)
// } else {
// 	alert(isPow(a, b))
// }

// https://www.codewars.com/kata/523b623152af8a30c6000027/train/javascript
// Function 2 - squaring an argument
// Now you have to write a function that takes an argument and returns the square of it.

// const square = n => n * n

// https://www.codewars.com/kata/56200d610758762fb0000002/train/javascript
// Fix the function
// I created this function to add five to any number that was passed in to it and return the new value. It doesn't throw any errors but it returns the wrong number.
// Can you help me fix the function?

// const addFive = (num) => total = num + 5

// function addFive(num) {
//   var total = num + 5
//   return total
// }

// https://www.codewars.com/kata/56dae9dc54c0acd29d00109a/train/javascript
// Grasshopper - Function syntax debugging
// A student was working on a function and made some syntax mistakes while coding. Help them find their mistakes and fix them

// const main = (verb, noun) => verb + noun

// function main (verb, noun) {
//   return verb + noun
// }
  

