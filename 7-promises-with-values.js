const readline = require('readline-sync')

// Sync
const sayHello = () => console.log('Hello World')
const askName = () => {
  const name = readline.question('What is your name?\n')
  return name
}
const sayHowAreYou = name => {
  console.log(`${name}, How are you?`)
}
const sayNice = () => {
  console.log('Nice to see you')
}

//
function sayHelloLaterWithPromise () {
  const promiseWork = (resolve, reject) => {
    setTimeout(() => {
      sayHello()
      resolve()
    }, 2000)
  }

  return new Promise(promiseWork)
}

sayHelloLaterWithPromise().then(askName).then(sayHowAreYou).then(sayNice)

// askName()
