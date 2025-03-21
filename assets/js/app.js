
const navbar = document.querySelector(".navbar")
const hamburger = document.querySelector('.hamburger')
const navLinks = document.querySelector('.nav-links')

window.addEventListener('scroll', () => {
  if (this.scrollY >= 100) {
    navbar.classList.add('scrolled')
  } else {
    navbar.classList.remove('scrolled')
  }
})

hamburger.addEventListener('click' , () =>{
    navLinks.classList.toggle('active')
    hamburger.classList.toggle('active')
})

// typed.js

var typed = new Typed('#hero-titles', {
    strings: [
        'Creative Agency',
         'Typed Js is Cool'],
    typeSpeed: 50,
    loop: true,
  loopCount: Infinity,
  typeSpeed:10,
  backDelay:2000,
  });