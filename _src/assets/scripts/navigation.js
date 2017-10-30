export default class Hamburger {
  constructor(options) {
    this.options = options
    this.isActive = false

    const { hamburgerElem, navigationElem } = this.options

    hamburgerElem.addEventListener('click', () => {
      this.isActive = !this.isActive

      if (this.isActive) {
        hamburgerElem.classList.add('hamburger--active')
        navigationElem.classList.add('navigation--active')
      } else {
        hamburgerElem.classList.remove('hamburger--active')
        navigationElem.classList.remove('navigation--active')
      }
    })
  }
}
