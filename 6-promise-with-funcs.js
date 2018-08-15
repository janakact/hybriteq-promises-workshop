const sayHello = () => console.log('Hello World')
const sayHowAreYou = () => {
  console.log('How are you?')
}
const sayNice = () => {
  console.log('Nice to see you')
}

function sayHelloLaterWithPromise () {
  const promiseWork = (resolve, reject) => {
    setTimeout(() => {
      sayHello()
      resolve()
    }, 2000)
  }

  return new Promise(promiseWork)
}

sayHelloLaterWithPromise().then(sayHowAreYou).then(sayNice)
