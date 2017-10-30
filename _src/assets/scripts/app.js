import Navigation from './navigation'

function init() {
  const navigation = new Navigation({
    hamburgerElem: document.getElementById('hamburger'),
    navigationElem: document.getElementById('navigation'),
  })
}

document.addEventListener('DOMContentLoaded', () => {
  init()
})
