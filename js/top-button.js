

$(document).scroll(function() {
    var y = $(this).scrollTop();
    if (y > 100) {
      $('#top').fadeIn();
    } else {
      $('#top').fadeOut();
    }
  });