function hideHotSpots() {
  $('#hotspot-gold-message').hide();
  $('#hotspot-equities-message').hide();
  $('#hotspot-realestate-message').hide();
  $('#hotspot-shariah-message').hide();
  $('#hotspot-sukuks-message').hide();
  $('#hotspot-translogistics-message').hide();
  $('#hotspot-2013-message').hide();
  $('#hotspot-2014-message').hide();
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
    'height': height*0.38,
  });
  $('#slide2-body li').css({
    'font-size': (height-70)*28/700,
    'margin-bottom': (height-70)*5/700
  });
  $('#slide2-body img').css({
    'height': height*400/700,
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

  hideHotSpots();
  changeWellHeight();
  $(window).on('resize', changeWellHeight);

  $('.carousel').on('slid.bs.carousel', changeWellHeight);
  $('.carousel').on('slid.bs.carousel', callImgMapPlugin);

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
  $('#hotspot-2013').on('mouseenter', showPieHotSpot);
  $('#hotspot-2013').on('mouseleave', hidePieHotSpot);
  $('#hotspot-2014').on('mouseenter', showPieHotSpot);
  $('#hotspot-2014').on('mouseleave', hidePieHotSpot);

});
