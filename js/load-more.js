var limit = 2;

var handleButton = function () {
  if ($('.hidden-cards div').length === 0) {
    $('#loadMore').remove();
  }
};

$('#loadMore').on('click', function () {
  $('.hidden-cards div').slice(0, limit).appendTo('.show-cards');
  
  handleButton();
});