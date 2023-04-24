  $(document).ready(function() {
    $(window).scroll(function() {
      $('.slide-in-section').each(function() {
        var position = $(this).offset().top;
        var scroll = $(window).scrollTop();
        var windowHeight = $(window).height();
        if (scroll > position - windowHeight + 100) {
          $(this).addClass('is-visible');
        }
      });
    });
  });
  
