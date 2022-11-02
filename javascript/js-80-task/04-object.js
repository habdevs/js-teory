const objA = {
	a: 10,
	b: true,
}

const copyObjA = objA // копируем объект в новую переменную

copyObjA.a = 20 // изменение свойства объекта

copyObjA.c = 'добавил ключ С значение - строка' // добавление свойств

const copyObjB = copyObjA // копируем объект в новую переменную

copyObjB.d = 'ещё ключ и значение' // добавление свойств
console.log(objA)
