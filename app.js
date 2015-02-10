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
  $('#hotspot-gold-message').hide();
  $('#hotspot-equities-message').hide();
  $('#hotspot-realestate-message').hide();
  $('#hotspot-shariah-message').hide();
  $('#hotspot-sukuks-message').hide();
  $('#hotspot-translogistics-message').hide();
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
  var height = $(window).height();
  var width = $(window).width();
  $('.well').css({
    'height': height*0.38
  });
}
function callImgMapPlugin() {
  jQuery(document).ready(function() {
    $('img[usemap]').rwdImageMaps();
  });
}
function showPieHotSpot() {
  var id = "#" + $(this).attr('id') + "-message";
  console.log(id);
  $(id).show(500);
}
function hidePieHotSpot() {
  var id = "#" + $(this).attr('id') + "-message";
  console.log(this);
  $(id).hide(500);
}


jQuery(document).ready(function() {

  getHeight();
  hideHotSpots();
  changeWellHeight();
  $(window).on('resize', getHeight);
  $(window).on('resize', changeWellHeight);

  $('.carousel').on('slid.bs.carousel', getHeight);
  $('.carousel').on('slid.bs.carousel', changeWellHeight);
  $('.carousel').on('slid.bs.carousel', callImgMapPlugin);

  $('#hotspot1').on('mouseenter', openHotSpot);
  $('#hotspot1').on('mouseleave', hideHotSpot);
  $('#hotspot2').on('mouseenter', openHotSpot);
  $('#hotspot2').on('mouseleave', hideHotSpot);

  $('#hotspot-gold').on('mouseenter', showPieHotSpot);
  $('#hotspot-gold').on('mouseleave', hidePieHotSpot);
  $('#hotspot-equities').on('mouseenter', showPieHotSpot);
  $('#hotspot-equities').on('mouseleave', hidePieHotSpot);
  $('#hotspot-realestate').on('mouseenter', showPieHotSpot);
  $('#hotspot-realestate').on('mouseleave', hidePieHotSpot);
  $('#hotspot-shariah').on('mouseenter', showPieHotSpot);
  $('#hotspot-shariah').on('mouseleave', hidePieHotSpot);
  $('#hotspot-sukuks').on('mouseenter', showPieHotSpot);
  $('#hotspot-sukuks').on('mouseleave', hidePieHotSpot);
  $('#hotspot-translogistics').on('mouseenter', showPieHotSpot);
  $('#hotspot-translogistics').on('mouseleave', hidePieHotSpot);

});
