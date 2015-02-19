function hideHotSpots() {
  $('#hotspot-gold-message').hide();
  $('#hotspot-equities-message').hide();
  $('#hotspot-realestate-message').hide();
  $('#hotspot-shariah-message').hide();
  $('#hotspot-sukuks-message').hide();
  $('#hotspot-translogistics-message').hide();
  $('#hotspot-2013-message').hide();
  $('#hotspot-2014-message').hide();
  $('#hotspot-cement-message').hide();
  $('#hotspot-cement-image').hide();
}
function changeWellHeight() {
  var height = $(window).height();
  var width = $(window).width();
  var bodyHeight = $('#slide2-body').height();
  console.log("image height: " + bodyHeight);
  $('.well').css({
    'height': height*0.38,
  });
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
function showProjectsHotSpot() {
  var id = "#" + $(this).attr('id') + "-message";
  var imageId = "#" + $(this).attr('id') + "-image";
  console.log(imageId);
  $(id).slideDown(500);
  $('.explore-projects').fadeOut(200);
  $(imageId).fadeIn(500);

}
function hideProjectsHotSpot() {
  var id = "#" + $(this).attr('id') + "-message";
  var imageId = "#" + $(this).attr('id') + "-image";
  console.log(imageId);
  $(id).slideUp(500);
  $('.explore-projects').fadeIn(1000);
  $(imageId).fadeOut(500);
}
function hideHotSpotMessage() {
  var id = "#" + $(this).attr('id') + "-message";
  console.log("leave: " + id);
  $(id).slideUp(500);
}
function showHotSpotMessage() {
  var id = "#" + $(this).attr('id') + "-message";
  console.log("enter: " + id);
  $(id).slideDown(500);
}
function toggleHotSpotMessage() {
  var id = "#" + $(this).attr('id') + "-message";
  console.log("enter: " + id);
  $(id).slideToggle(500);
}


jQuery(document).ready(function() {

  hideHotSpots();
  changeWellHeight();
  $(window).on('resize', changeWellHeight);

  $('.carousel').on('slid.bs.carousel', changeWellHeight);
  $('.carousel').on('slid.bs.carousel', callImgMapPlugin);

  // $('#hotspot-gold').on('mouseenter', showPieHotSpot);
  // $('#hotspot-gold').on('mouseleave', hidePieHotSpot);
  $('.hotspot1').on('mouseleave', toggleHotSpotMessage);
  $('.hotspot1').on('mouseenter', toggleHotSpotMessage);
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
  $('#hotspot-cement').on('mouseenter', showProjectsHotSpot);
  $('#hotspot-cement').on('mouseleave', hideProjectsHotSpot);

});
