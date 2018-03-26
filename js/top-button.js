

$(document).scroll(function() {
    var y = $(this).scrollTop();
    if (y > 50) {
      $('#top').fadeIn(1500);
    } else {
      $('#top').fadeOut(-500);
    }
  });