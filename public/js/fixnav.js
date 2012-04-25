!function ($) {
  $(function(){
    // fix sub nav on scroll
    var $win = $(window)
      , $nav = $('.navbar')
      , navTop = $('.navbar').length && $('.navbar').offset().top
      , isFixed = 0
      , $content = $('#page-content')

    processScroll()

    $win.on('scroll', processScroll)

    function processScroll() {
      var i, scrollTop = $win.scrollTop()
      if (scrollTop >= navTop && !isFixed) {
        isFixed = 1
        $nav.addClass('navbar-fixed-top')
        $content.addClass('under-nav-offset')
      } else if (scrollTop <= navTop && isFixed) {
        isFixed = 0
        $nav.removeClass('navbar-fixed-top')
        $content.removeClass('under-nav-offset')
      }
    }
  })
}(window.jQuery)
