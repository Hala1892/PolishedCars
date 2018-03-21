

$(document).scroll(function() {
    var y = $(this).scrollTop();
    if (y > 250) {
      $('#top').fadeIn();
    } else {
      $('#top').fadeOut();
    }
  });