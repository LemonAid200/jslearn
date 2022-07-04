
let user = {
    name: "Вася",
    _password: "***"
  };

  user = new Proxy(user, {
    get(target, prop){
        if (prop.startsWith('_')) throw new Error('Access is denied');
        return (typeof target[prop] === 'function') ? target[prop].bind(target) : target[prop]
    },
    set(target, prop, val){
        if (prop.startsWith('_')) throw new Error('Access is denied');
        target[prop] = val
        return true
    },
    deleteProperty(target, prop){
        if (prop.startsWith('_')) throw new Error('Access is denied');
        delete target[prop]
        return true
    },        
    ownKeys(target, prop){
        return Object.keys(target).filter(key => !key.startsWith('_'))
    },
  })
// "get" не позволяет прочитать _password
try {
    console.log(user._password); // Error: Отказано в доступе
  } catch(e) { console.log(e.message); }
  
  // "set" не позволяет записать _password
  try {
    user._password = "test"; // Error: Отказано в доступе
  } catch(e) { console.log(e.message); }
  
  // "deleteProperty" не позволяет удалить _password
  try {
    delete user._password; // Error: Отказано в доступе
  } catch(e) { console.log(e.message); }
  
  // "ownKeys" исключает _password из списка видимых для итерации свойств
  for(let key in user) console.log(key); // name



// function loadJson(url) {
//     return fetch(url)
//       .then(response => {
//         if (response.status == 200) {
//           return response.json();
//         } else {
//           throw new Error(response.status);
//         }
//       })
//   }
  
//   loadJson('no-such-user.json') // (3)
//     .catch(alert); // Error: 404


// async function loadJson(url) {
//     let response = await fetch(url)
//     console.log(response)
// }

// loadJson('https://learn.javascript.ru/async-await#asinhronnye-funktsii')

// fetch('https://jsonplaceholder.typicode.com/users')
//   .then(response => response.json())
//   .then(json => console.log(json))





// async function f() {
//   let i = undefined
//   i = await new Promise(function (recive, reject) {
//       setTimeout(() => recive(1), 2000)
//   })
//   return i

// }
  
//   f().then(item => {console.log(item); return undefined}).then(item => {console.log(2)})

  

// let promise = new Promise(function (recive, reject){
//     err =  new Error('Ну вот так вот')
//     reject(err)
// })
// promise.catch(error => console.log(error.__proto__))








// function delay(ms) {
//     return new Promise(function (resolve){
//         setTimeout(resolve, ms)
//     })
//   }
  
//   delay(3000).then(() => console.log('выполнилось через 3 секунды'));





// class FormatError extends SyntaxError{
//     constructor(message){
//         super()
//         this.message = message
//         this.name = this.constructor.name
//     }
// }




// let err = new FormatError("ошибка форматирования");

// console.log( err.message ); // ошибка форматирования
// console.log( err.name ); // FormatError
// console.log( err.stack ); // stack
// console.log( err instanceof FormatError ); // true
// console.log( err instanceof SyntaxError ); // true (потому что наследует от SyntaxError)












// function askPassword(ok, fail) {
//   let password = prompt("Password?", '');
//   if (password == "rockstar") ok();
//   else fail();
// }

// let user = {
//   name: 'John',

//   login(result) {
//     alert( this.name + (result ? ' logged in' : ' failed to log in') );
//   }
// };

// askPassword(() => user.login.bind(user)(true), () => user.login.bind(user)(false)); // ?




// function askPassword(ok, fail) {
//   let password = prompt("Password?", '');
//   if (password == "rockstar") ok();
//   else fail();
// }

// let user = {
//   name: 'Вася',

//   loginOk() {
//     alert(`${this.name} logged in`);
//   },

//   loginFail() {
//     alert(`${this.name} failed to log in`);
//   },

// };

// askPassword(user.loginOk.bind(user), user.loginFail.bind(user));


// let f = debounce(console.log, 1000);

// f(1); // выполняется немедленно
// f(2); // проигнорирован

// setTimeout( () => f(3), 100); // проигнорирован (прошло только 100 мс)
// setTimeout( () => f(4), 1100); // выполняется
// setTimeout( () => f(5), 1500); 


// function debounce(func, delay){
//   let flag = true
//   return function(){
//       if (flag){
//         func.apply(this, arguments)
//         flag = false
//         setTimeout(() => {flag = true}, delay)        
//       }
//   }
// }