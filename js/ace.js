var bg = jQuery("#bg1, #bg2");
jQuery(window).resize("resizeBackground");
function resizeBackground() {
  bg.height(jQuery(window).height() + 60);
}
resizeBackground();
