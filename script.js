console.log('Первое задание')  // ++
let a = 'aaa@bbb@ccc'
console.log(a.replace(/@/g, '!'))

console.log('Второе задание')  // ++
let date = '2025-12-31.'
// console.log(date.replace(/-/g, '/'))
console.log(date.replace(/(2025)-(12)-(31)/gi, '$3/$2/$1'))

console.log('Третье задание')  // ++
let a2 = 'Я учу javascript!'
console.log('Через substr - ' + `${a2.substr(2,14)}`)
console.log('Через substring - ' + `${a2.substring(2, 16)}`)
console.log('Через slice - ' + `${a2.slice(2, 16)}`)


console.log('Четвертое задание') // ++
let arr = [4, 2, 5, 19, 13, 0, 10];
let total = 0
for (i = 0; i < arr.length; i++){
    total += arr[i]**3;
}
console.log(Math.sqrt(total))

console.log('Пятое задание') // ++
let a3 = 6
let b3 = 1
let c = Math.abs(a3-b3)
console.log(c)


console.log('Шестое задание')
let newDate = new Date()
let opt = {
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
    year: 'numeric',
    month: 'numeric',
    day: 'numeric'
}
let total3
console.log(total3 = newDate.toLocaleDateString('ru', opt))
// console.log(total3.replace(/([0-9]{2}.[0-9]{2}.[0-9]{4}) ([0-9]{2}:[0-9]{2}:[0-9]{2})/gi, '$2 $1'))

console.log('Седьмое задание') // ++
let a4 = 'aa aba abba abbba abca abea'
console.log(a4.match(/ab+a/g))


console.log('Восьмое задание') // ++
let a5 = '+375-29-672-85-45'
let regexp = /[+][0-9]{3}[-][0-9]{2}[-][0-9]{3}[-][0-9]{2}[-][0-9]{2}/gi;
console.log(regexp.test(a5))


console.log('Девятое задание') // ???
let a6 = 'laiz.kelsky@gmail.com'
let regexp2 = /[^0-9][a-z.-_0-9][^0-9]@[a-z].[a-z]{2,11}/gi;
console.log(regexp2.test(a6))

// console.log('Десятое задание')

