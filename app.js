const squares = document.querySelectorAll('.square')
const mole = document.querySelectorAll('.mole')
const timeLeft = document.querySelector('#time-left')
let score = document.querySelector('#score')

let result = 0
let hitPosition
let currentTime = 60
let timerId = null

function randomSquare(){
  squares.forEach(square => { 
    squares.ClassList.remove('mole')
  })
let randomSquar = squares[Math.floor(Math.random()*9)]
randomSquar.classList.add ('mole')

hitPosition = randomSquare.id
}
squares.forEach(squares => {
  squares.addEventListener('mousedown', () => {
 if (square.id == hitPosition) {
  result ++
  score.textContent=result
  hitPosition= null
 }
 })
})
function moveMole() {
  timerId = setInterval(randomSquare, 500)
}
moveMole()
function countDown() {
  currentTime--
  timeLeft.textContent = currentTime
  if (currentTime == 0){
  clearInterval(countDownTimerId)
  clearInterval (timerId)
alert('game over final score is' +result)
}
}

let countDownTimerId = setInterval(countDown , 1000)










