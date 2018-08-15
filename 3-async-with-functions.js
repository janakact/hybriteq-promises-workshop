const sayHello = () => {
  console.log('Hello World')
}

const sayHelloLater = () => {
  setTimeout(sayHello, 2000)
}

sayHelloLater()
console.log('How are you?')

// Try with set timeout

// // 2
// const sayHelloLater2 = () => {
//   setTimeout(() => {
//       sayHello()
//   }, 2000)
// }

// sayHelloLater2()
