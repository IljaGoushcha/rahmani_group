function adjustSlide2() {
  var height = $(window).height();
  var width = $(window).width();
  var bodyHeight = $('#slide2-body').height();
  console.log("image height: " + bodyHeight);
  if (width < 700) {
    console.log("width < 700");
    $('#slide2-body img').css({
      'height': bodyHeight*330/700
    });
    $('#slide2-body li').css({
      'font-size': (bodyHeight)*25/700,
      'margin-bottom': (bodyHeight)*4/700
    });
    $('#slide2-body li').css({
      'list-style-image': 'none'
    });
  } else {
    console.log("width > 700");
    $('#slide2-body img').css({
      'height': bodyHeight*500/700
    });
    $('#slide2-body li').css({
      'font-size': (bodyHeight)*30/700,
      'margin-bottom': (bodyHeight)*5/700
    });
  }
}
function callImgMapPlugin() {
  jQuery(document).ready(function() {
    $('img[usemap]').rwdImageMaps();
  });
}
function toggleHotSpotMessage() {
  var id = "#" + $(this).attr('id') + "-message";
  console.log("enter: " + id);
  $(id).slideToggle(500);
}
function toggleProjectsImages() {
  $('#hotspot-cement-image').fadeToggle(500);
  $('.explore-projects').fadeToggle(500);
}


jQuery(document).ready(function() {

  adjustSlide2();
  $(window).on('resize', adjustSlide2);

  $('.carousel').on('slid.bs.carousel', callImgMapPlugin);

  $('.hotspot-area').on('mouseenter mouseleave', toggleHotSpotMessage);
  $('.hotspot-area').on('mouseenter mouseleave', toggleProjectsImages);

});
