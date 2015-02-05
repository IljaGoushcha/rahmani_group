function getHeight() {
  var height = $('#slide2').height();
  var width = $('#slide2').width();
  console.log("height=" + height);
  console.log("width=" + width);
  $('#slide2 .carousel-caption').css({
    'height': height - 85,
    'background-size': width - 500
  })
}

jQuery(document).ready(function() {
  getHeight();
  $(window).on('resize', getHeight);
});
