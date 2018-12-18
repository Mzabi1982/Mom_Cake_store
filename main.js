
$(document).ready(function() {

document.getElementById("cart-info").addEventListener("click", function() {
    const cart = document.getElementById("cart");
    cart.classList.toggle("show-cart");
    console.log(cart);
  });
  const cart_info=document.querySelector('.cart-info');
  const cart=document.querySelector('.cart');
  let val=true;
  cart_info.addEventListener('click',()=>{

     if (val){
       cart.style.opacity="1";
       cart.classList.add("rotate");
        val=false;}
      else {cart.style.display="none"}
  })

 


  $(window).scroll(function(){
    if($(document).scrollTop() > 100){
        $('#nav').addClass('shrink');
     
    } else {
        $('#nav').removeClass('shrink');
    }
});

   

  
window.sr = ScrollReveal();


  sr.reveal('#services div,#one .container', {
    duration: 2000,
    origin:'bottom',
    distance:'300px'
  
  });

  sr.reveal('.footer1,#row1', {
    duration: 2000,
    origin:'left',
    distance:'300px'
  
  });
  sr.reveal('.footer2, #row2', {
    duration: 2000,
    origin:'right',
    distance:'300px'
  
  });

  sr.reveal('#orders div,nav', {
    duration: 2000,
    origin:'top',
    distance:'300px'
  
  });

  

  })
