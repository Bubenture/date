let mode = 'full'
const output = document.getElementById('output')
const full = document.getElementById('full')
const date = document.getElementById('date')
const time = document.getElementById('time')

update()
setInterval(update, 1000)

function update() {
  output.textContent = format(mode)
}

function format(formatMode) {
  const now = new Date()

  debugger

  switch (formatMode) {
    case 'full':
      return now.toLocaleString()
    case 'date':
      return now.toLocaleDateString()
    case 'time':
      return now.toLocaleTimeString()
    default:
      return now.toLocaleString()
  }
}

function binMode(bin) {
  return function () {
    mode = bin
    update()
  }
}

full.onclick = binMode('full')
date.onclick = binMode('date')
time.onclick = binMode('time')
