var overlay = document.getElementById("overlay");

window.addEventListener('load' ,function(){
    overlay.style.display = 'none';
    brand.style.display = 'block';
})

$(function() {
    $('.banner').unslider({
      //  Enable keyboard arrows
      keys: true,               
			// Enable dot nav
      dots: true,
      delay: 7000
    });
});