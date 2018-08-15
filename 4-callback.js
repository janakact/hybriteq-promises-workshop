const sayHelloLater = (name, callback) => {
  setTimeout(() => {
    console.log('Hello', name)
    callback()
  }, 2000)
}

const sayHowAreYou = callback => {
  setTimeout(() => {
    console.log('How are you?')
    callback(12)
  }, 2000)
}

const sayIamFine = () => {
  setTimeout(() => {
    console.log('I am fine')
  }, 2000)
}

sayHelloLater('Narthana', () => {
  sayHowAreYou(n => {
    console.log(n)
    sayIamFine()
  })
})
