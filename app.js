function getHeight() {
  var height = $('#slide2').height();
  var width = $('#slide2 .carousel-caption').width();
  console.log("say hello");
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
function changeWellHeight() {
  var height = $('#slide5').height();
  $('.well').css({
    'height': height*0.38
  });
}

jQuery(document).ready(function() {
  getHeight();
  hideHotSpots();
  changeWellHeight();
  $(window).on('resize', getHeight);
  $(window).on('resize', changeWellHeight);
  $('.carousel').on('slid.bs.carousel', getHeight);

  $('#hotspot1').on('mouseenter', openHotSpot);
  $('#hotspot1').on('mouseleave', hideHotSpot);
  $('#hotspot2').on('mouseenter', openHotSpot);
  $('#hotspot2').on('mouseleave', hideHotSpot);
});
