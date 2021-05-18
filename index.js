// wow init
new WOW().init()
// #burger
const menu = document.querySelector('.menu')
const menuNavbar = document.querySelector('.menu-navbar')
const burger = document.querySelector('.burger')
const burgerTop = document.querySelector('.burger-top')
const burgerMiddle = document.querySelector('.burger-middle')
const burgerBottom = document.querySelector('.burger-bottom')
// #slider
const slidesArray = Array.from(document.querySelectorAll('.features-block'))
const prevArrow = document.querySelector('.features .prev-arrow')
const nextArrow = document.querySelector('.features .next-arrow')
// scrollup
const scrollup = document.querySelector('.scrollup')

// scrollup
document.addEventListener('scroll', () => {
  window.scrollY > 1000
    ? (scrollup.style.display = 'block')
    : (scrollup.style.display = 'none')
})

document.addEventListener('click', (event) => {
  const target = event.target

  // #burger
  if (
    target.classList.contains('burger') ||
    target.classList.contains('burger-layer') ||
    target.classList.contains('menu-navbar-link') ||
    target.classList.contains('menu')
  ) {
    menu.classList.toggle('menu--onclick')
    menuNavbar.classList.toggle('menu-navbar--onclick')
    burger.classList.toggle('burger--onclick')
    burgerTop.classList.toggle('burger-top--onclick')
    burgerMiddle.classList.toggle('burger-middle--onclick')
    burgerBottom.classList.toggle('burger-bottom--onclick')
  }

  // #slider
  if (target === prevArrow) {
    slideLeft()
  } else if (target === nextArrow) {
    slideRight()
  }
})

function slideLeft() {
  const [prev, current, next] = getPrevCurrNextSlide()

  prev.classList.add('current')
  prev.classList.remove('prev')
  current.classList.add('next')
  current.classList.remove('current')
  next.classList.remove('next')

  for (let i = 0; i < slidesArray.length; i++) {
    if (slidesArray[i] === prev) {
      if (slidesArray[i - 1]) {
        slidesArray[i - 1].classList.add('prev')
      } else {
        slidesArray[slidesArray.length - 1].classList.add('prev')
      }
    }
  }
}

function slideRight() {
  const [prev, current, next] = getPrevCurrNextSlide()

  prev.classList.remove('prev')
  current.classList.add('prev')
  current.classList.remove('current')
  next.classList.add('current')
  next.classList.remove('next')

  for (let i = 0; i < slidesArray.length; i++) {
    if (slidesArray[i] === next) {
      if (slidesArray[i + 1]) {
        slidesArray[i + 1].classList.add('next')
      } else {
        slidesArray[0].classList.add('next')
      }
    }
  }
}

function getPrevCurrNextSlide() {
  const prev = document.querySelector('.features .prev')
  const current = document.querySelector('.features .current')
  const next = document.querySelector('.features .next')

  return [prev, current, next]
}
