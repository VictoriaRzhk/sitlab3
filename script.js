const btn = document.getElementById('btn')
const pop = document.getElementById('pop')
const overlay = document.getElementById('overlay')

function showPop () {
  pop.classList.add('active')
  overlay.classList.add('active')
}

function hidePop () {
  pop.classList.remove('active')
  overlay.classList.remove('active')
}

btn.addEventListener('click', () => showPop())
overlay.addEventListener('click', () => hidePop())