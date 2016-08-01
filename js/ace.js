
// Toggles mobile navbar when item selected
$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
});

// Smooth scrolling on anchor links
$("#nav ul li a[href^='#']").on('click', function(e) {
   // prevent default anchor click behavior
   e.preventDefault();
   // store hash
   var hash = this.hash;
   // animate
   $('html, body').animate({
       scrollTop: $(hash).offset().top
     }, 500, function(){
       // when done, add hash to url
       // (default click behaviour)
       window.location.hash = hash;
     });

});
