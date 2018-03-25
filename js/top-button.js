

$(document).scroll(function() {
    var y = $(this).scrollTop();
    if (y > 150) {
      $('#top').fadeIn();
    } else {
      $('#top').fadeOut();
    }
  });