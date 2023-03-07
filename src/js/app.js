const clockContainer = document.querySelector('.clock-container')
const secondHand = document.querySelector(".second-hand")
const minuteHand = document.querySelector(".minute-hand")
const hourHand = document.querySelector(".hour-hand")
const hourProgress = document.querySelector("#full-hour")
const percent = document.querySelector(".percent")

let deg = 30 /*  360 graus / 12 numbers(horas) = 30deg */

const placeTheNumbersOnTheClock = () => {
  const clockNumbers = document.querySelectorAll('.number')

  clockNumbers.forEach((_, index) => {
    const currentNumber = document.querySelector(`.number-${index + 1}`)

    currentNumber.style.transform = `rotate(${deg}deg) `
    deg += 30
  })
}

const formatTime = (time) => String(time).length === 1 ? `0${time}` : time

const getTime = () => {
  const date = new Date()
  const seconds = date.getSeconds()
  const minutes = date.getMinutes()
  const hours = date.getHours()

  return {
    seconds,
    minutes,
    hours
  }
}

const updateClock = () => {
  const { hours, minutes, seconds } = getTime()

  const clockHTML = `
     <span>${formatTime(hours)}</span> :
     <span>${formatTime(minutes)}</span> :
     <span>${formatTime(seconds)}</span>
   `

  clockContainer.setAttribute('dataTime', `${hours}:${minutes}:${seconds}`)
  hourProgress.setAttribute('value', minutes)

  percent.textContent = `${(minutes / 60 * 100).toFixed(0)}%`
  clockContainer.innerHTML = clockHTML
}

const rotateThePointers = () => {
  const { seconds, minutes, hours } = getTime()

  secondHand.style.transform =
    `translate(0, -50%) rotate(${seconds * 6}deg)`
  // 360deg / 60seg = 6deg

  minuteHand.style.transform =
    `translate(0, -50%) rotate(${minutes * 6}deg)`
  // 360deg / 60min = 6deg

  hourHand.style.transform =
    `translate(0, -50%) rotate(${hours * 30}deg)`
  // 360deg / 12h = 30deg
}

const handleWithClock = () => {
  updateClock()
  rotateThePointers()
}

//Init
placeTheNumbersOnTheClock()


setInterval(handleWithClock, 1000)



