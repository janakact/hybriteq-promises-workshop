function sayHelloLaterWithPromise () {
  const promiseWork = (resolve, reject) => {
    setTimeout(() => {
      console.log('Hello World')
      reject()
    }, 2000)
  }

  return new Promise(promiseWork)
}

const promise = sayHelloLaterWithPromise()

promise
  .then(() => {
    console.log('How are you?')
    return 10
  })
  .then(value => {
    console.log('Nice to see you', value)
    return 232
  })
  .catch(e => {
    console.log('Error')
    return 0
  })
  .then(n => {
    console.log('After catch', n)
  })
