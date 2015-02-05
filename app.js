function getHeight() {
  var height = $('#slide2').height();
  var width = $('#slide2 .carousel-caption').width();
  console.log("height=" + height);
  console.log("width=" + width);
  $('#slide2 .carousel-caption').css({
    'height': height - 85,
    'background-size': width
  });
  $('#hotspot1').css({
    'top': (width*800/1200)*(700/800),
    'height': width*0.05,
    'width': width*0.05
  });
  $('#hotspot2').css({
    'top': (width*800/1200)*(570/800),
    'height': width*0.05,
    'width': width*0.05
  });
}
function hideHotSpots() {
  $('#hotspot1 p').hide();
  $('#hotspot2 p').hide();
}
function hideHotSpot() {
  console.log(this);
  $(this).children().hide(500);
}
function openHotSpot() {
  console.log(this);
  $(this).children().show(500);
}

jQuery(document).ready(function() {
  getHeight();
  hideHotSpots();
  $(window).on('resize', getHeight);
  $('#hotspot1').on('mouseenter', openHotSpot);
  $('#hotspot1').on('mouseleave', hideHotSpot);
  $('#hotspot2').on('mouseenter', openHotSpot);
  $('#hotspot2').on('mouseleave', hideHotSpot);
});
