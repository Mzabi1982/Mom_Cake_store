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