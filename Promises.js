 let promise10 = new Promise(function(resolve, reject) {
  setTimeout(() => resolve("done!"), 1000);
})

// resolve запустит первую функцию, переданную в .then
promise10.then(
  result => console.log(result), // выведет "done!" через одну секунду
  error => console.log(error) // не будет запущена
)

let promise20 = new Promise(function(resolve, reject) {
  setTimeout(() => reject(new Error("Whoops!")), 1000)
})

// reject запустит вторую функцию, переданную в .then
.then(
  result => console.log(result), // не будет запущена
  error => console.log(error) // выведет "Error: Whoops!" спустя одну секунду
)

let promise = new Promise(function(resolve, reject) {
  setTimeout(() => reject(new Error("Whoops!")), 1000);
});

promise.then(null, alert)

let promise0 = new Promise(function(resolve, reject) {
  setTimeout(() => resolve("done!"), 1000)
})

promise0.then(alert)

let promise1 = new Promise(function(resolve) {
  setTimeout(() => resolve(console.log("done!")), 1000)
})

promise1.then()

let promise2 = new Promise(function(resolve) {
  setTimeout(() => resolve("done!"), 1000)
})

promise2.then(console.log)

let promise3 = new Promise(function(resolve, reject) {
  setTimeout(() => reject(new Error("Whoops!")), 1000)
})

promise3.then(null, console.log)

