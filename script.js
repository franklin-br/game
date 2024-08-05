
// Variaveis 

const screen1 = document.querySelector('.screen1')
const screen2 = document.querySelector('.screen2')
const btnTry = document.querySelector('#btnTry')
const btnReset = document.querySelector('#btnReset')
let randomNumber = Math.round(Math.random() * 10)
let xAttempts = 1

// eventos 

btnTry.addEventListener('click', handleTryClick)
btnReset.addEventListener('click', handleResetClick)
document.addEventListener('keydown', function(e) {
  console.log(e.key)
  if(e.key == 'enter' && screen1.ClassListe.contains('hide') ) {
    handleResetClick()
  }

})

// função callback

function handleTryClick(event) {
  event.preventDefault()

  const inputNumber = document.querySelector('#inputNumber')

  if (Number(inputNumber.value) == randomNumber) {

    toggleScreen()

    screen2.querySelector("h2").innerText = ` got it right in ${xAttempts} attempts`
  }

  inputNumber.value = ''
  xAttempts++
}

function handleResetClick () {
  toggleScreen()
  xAttempts = 1
  randomNumber = Math.round(Math.random() * 10)
}

function toggleScreen() {
  screen1.classList.toggle('hide')
  screen2.classList.toggle('hide')
}
