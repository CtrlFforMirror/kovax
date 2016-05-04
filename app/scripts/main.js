var mobileNavContainer = $('.mobile-nav-container');
var socialIcon = $('.social-icon');

$('.mobile-nav-button').on('click', function() {
  if ($(this).hasClass('mobile-nav-button--open')) {
    mobileNavContainer.addClass('mobile-nav-container--open');
  } else {
    mobileNavContainer.removeClass('mobile-nav-container--open');
  }
});

$('.send-button').on('click', function() {
  alert('Thank you for getting in touch. We will get back to you as soon as possible.');
});

socialIcon.mouseenter(function(){
  $(this).fadeTo(300, 0.7);
});

socialIcon.mouseleave(function(){
  $(this).fadeTo(300, 1);
});
