var limit = 1;

var handleButton = function () {
  if ($('.hidden-blog div').length === 0) {
    $('#loadMore').css("display","none");
  }
  else {
    $('#loadMore').css("display","block");      
  }
};

var backButton = function () {
    if ($('.showen-blog .card').length > 3) {
      $('#goBack').css("display","block");
    }
    else {
      $('#goBack').css("display","none");        
    }
  };

$('#loadMore').on('click', function () {
  $('.hidden-blog .card').slice(0, limit).appendTo('.showen-blog');
  handleButton();
  backButton();  
});

$('#goBack').on('click', function() {
    $('.showen-blog .card').last().prependTo('.hidden-blog');
    handleButton();
    backButton(); 
})