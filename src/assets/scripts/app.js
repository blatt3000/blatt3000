import Navigation from './navigation'

function init() {
  new Navigation({
    hamburgerElem: document.getElementById('hamburger'),
    navigationElem: document.getElementById('navigation'),
  })
}

document.addEventListener('DOMContentLoaded', () => {
  init()
})
