
// slow = cachingDecorator(slow)

// console.log(printTime(slow, 2,4))
// console.log(printTime(slow, 2,4))
// console.log(printTime(slow, 2,4))



// // ...functions...

// // slow function
// function slow(a,b){
//   let result = 0
//   for (let i = 0; i <= 10000000; i++){
//     result = Math.round((result + a + b)/b)
//   }
//   return result
// }

// function printTime(func, ...args){
//   let start = Date.now()
//   func(...args)
//   let workingTime = (Date.now() - start)
//   return workingTime
// }

// function cachingDecorator(func){
//   let cache = new Map()
  
//   return function(...args){
//     let key = args.join(',')
//     if (cache.has(key)){
//       return cache.get(key)
//     }
//     let result = func(...args)
//     cache.set(key, result)
//     return result
//   }
// }



// let room = {
//   number: 23
// };

// let meetup = {
//   title: "Совещание",
//   occupiedBy: [{name: "Иванов"}, {name: "Петров"}],
//   place: room
// };

// // цикличные ссылки
// room.occupiedBy = meetup;
// meetup.self = meetup;

// alert( JSON.stringify(meetup, function replacer(key, value) {
//   if (place === room) {return}
//   return value
// }));

/* в результате должно быть:
{
  "title":"Совещание",
  "occupiedBy":[{"name":"Иванов"},{"name":"Петров"}],
  "place":{"number":23}
}
*/














// let date = new Date(2003, 0, 30);  // 30 января 2003 года
// console.log( getWeekDay(date) );    


// function getWeekDay(date){
//   let weekDays = 'ВС ПН ВТ СР ЧТ ПТ СБ'.split(' ')

//   return weekDays[date.getDay()]
// }





// let salaries = {
//   "John": 100,
//   "Pete": 300,
//   "Mary": 250
// };

// function topSalary(salaries){
//   let result = {name: null, salary: 0}

//   for (let [key, value] of 
//   Object.entries(salaries)){
//     if (value > result.salary){
//       result.salary = value,
//       result.name = key
//     }
//   }
  
//   return result.name
// }

// console.log(topSalary(salaries))
// let user = {
//   name: "John",
//   years: 30
// };

// let {name, years: age, isAdmin = false} = user

// console.log(name)
// console.log(age)
// console.log(isAdmin)




// let options = {
//   size: {
//     width: 100,
//     height: 200
//   },
//   items: ["Cake", "Donut"],
//   extra: true
// };

// // деструктуризация разбита на несколько строк для ясности
// let {
//   size,
//   items: [item1, item2], // добавим элементы к items
//   title = "Menu" // отсутствует в объекте (используется значение по умолчанию)
// } = options;

// console.log(size);  // Menu









//   let user = {
//   name: 'John',
//   age: '30',
// };
//   // ...Ваш код...
// function count(obj){
//   let amountOfEnteries = 0
//   for (let key of Object.keys(user)){
//     amountOfEnteries++
//   }
//   return amountOfEnteries
// }
// console.log(count(user))







// let map = new Map()

// map.set({name: 'john'}, 'lol')

// console.log(map.entries())





// let set = new Set([
//     {name: 'joke'}
// ])

// for (let i of (sset)){
//     console.log(i)
// }

// let sset = new WeakSet()






// let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

// console.log( aclean(arr) ); // "nap,teachers,ear" или "PAN,cheaters,era"

// function aclean(arr){
//     let set = new Set()
//     let result = new Array()
    
//     for (const item of arr){
//         let temporaryValue = item
//         temporaryValue = Array.from(temporaryValue.toLowerCase()).sort().join('')
//         let setSizeOld = set.size
//         set.add(temporaryValue)
//         if (set.size != setSizeOld){
//             result.push(item)
//         }
//     }
//     arr = result
//     return arr
// }









// function unique(arr) {
//     let set = new Set();
//     for (const item of arr){
//         set.add(item)
//     }
//     return set
//   }
  
//   let values = ["Hare", "Krishna", "Hare", "Krishna",
//     "Krishna", "Krishna", "Hare", "Hare", ":-O"
//   ];
  
//   console.log( unique(values) ); // Hare,Krishna,:-O


// let obj = {
//     0: 'holla',
//     1: 'soy',
//     2: 'dora',
//     length: 3,
//     [Symbol.iterator]: function() {
//         return {
//           current: 0,
//           last: 2,
//           object: this,
            
//           next() {
//             if (this.current <= this.last) {
//               return { done: false, value: this.object[this.current++] };
//             } else {
//               return { done: true };
//             }
//           }
//         }
//     }
// }
// for (const item of obj){
//     console.log(item)
// }

// function Calculator() {
//   this.calculate = (str) => {
//     str.split(' ')
//     str.array.forEach(element => {
//       alert(element)
//     });
//   }  
// }
   

// function camelize(str){
//     let arr = str.split('-')
//     let str = arr[0]
//     for (let index = 1; index < arr.lengt; index++){
//         let firstLetter = arr[index][0].toUppercase()
//         str += firstLetter + arr[index].splice(1)
//     }
//     return str
//   }





// function getMaxSubSum(arr){    
//     if (arr.length === 0) return 0
//     let index = 0
//     let max = 0
//     let localMax = 0

//     while(index < arr.length){
//         localMax += arr[index]
        
//         if (localMax > max) max = localMax
//         if (localMax < 0) {localMax = 0; index++; continue}

//         index++

//     }
//     return max
// }

// alert(getMaxSubSum([-1,-2,3,-1,2,3,-100,100,-12]))