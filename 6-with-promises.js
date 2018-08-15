function sayHelloLaterWithPromise () {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('Hello World')
      resolve('Narthana')
    }, 2000)
  })
}

function sayHowAreYouWithPromise (name) {
  const promiseWork = (resolve, reject) => {
    setTimeout(() => {
      console.log(name, ', How are you?')
      resolve('AKila')
    }, 2000)
  }

  return new Promise(promiseWork)
}

function sayIamFineWithPromise () {
  const promiseWork = (resolve, reject) => {
    setTimeout(() => {
      console.log('I am fine')
      resolve('Chathuranga')
    }, 2000)
  }

  return new Promise(promiseWork)
}

function sayNow () {
  console.log('Now')
  return Promise.resolve('Something')
}

const p1 = sayHelloLaterWithPromise()
const p2 = sayHowAreYouWithPromise('Nalin')
const p3 = sayIamFineWithPromise()
const p4 = sayNow()

Promise.all([p1, p2, p3, p4]).then(result => {
  console.log('P1', result[0])
  console.log(result)
})
