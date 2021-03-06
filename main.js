$(document).ready(function () {

  document.getElementById("cart-info").addEventListener("click", function () {
    const cart = document.getElementById("cart");
    cart.classList.toggle("show-cart");

  });
  const cart_info = document.querySelector('.cart-info');
  const cart = document.querySelector('.cart');
  let val = true;
  cart_info.addEventListener('click', () => {

    if (val) {
      cart.style.opacity = "1";
      cart.classList.add("rotate");
      val = false;
    } else {
      cart.style.display = "none"
    }
  })



  $(window).scroll(function () {
    if ($(document).scrollTop() > 100) {
      $('.navbar').addClass('shrink');


    } else {
      $('.navbar').removeClass('shrink');
    }
  });



  window.sr = ScrollReveal();


  sr.reveal('#services div', {
    duration: 700,
    origin: 'bottom',
    distance: '300px'

  });

  sr.reveal('.footer1,#row1', {
    duration: 900,
    origin: 'left',
    distance: '300px'

  });
  sr.reveal('.footer2, #row2', {
    duration: 900,
    origin: 'right',
    distance: '300px'

  });

  sr.reveal('#orders div,nav,#one .container', {
    duration: 1000,
    origin: 'top',
    distance: '300px'

  });



})