let f = debounce(console.log, 1000);

f(1); // выполняется немедленно
f(2); // проигнорирован

setTimeout( () => f(3), 100); // проигнорирован (прошло только 100 мс)
setTimeout( () => f(4), 1100); // выполняется
setTimeout( () => f(5), 1500); 


function debounce(func, delay){
  let flag  = true
  return function(){
    if (!flag){return}
    setTimeout(() => helloThere, delay)
    function helloThere() => {
      func.apply(this, arguments)
      flag = false
    }
    flag = true
  }
}