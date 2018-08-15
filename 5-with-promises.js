const sayHello = () => console.log('Hello World')

function sayHelloLaterWithPromise () {
  const promiseWork = (resolve, reject) => {
    setTimeout(() => {
      sayHello()
      resolve()
    }, 2000)
  }

  return new Promise(promiseWork)
}

sayHelloLaterWithPromise()
  .then(() => {
    console.log('How are you?')
  })
  .then(() => {
    console.log('Nice to see you')
  })
