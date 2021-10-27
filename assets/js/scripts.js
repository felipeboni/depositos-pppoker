$(function () {
  $("#btn-request")
    .mouseenter(function () {
      $("#btn-request img")
        .attr("src", "assets/img/btn_solid.png")
        .removeClass("leave-animation")
        .addClass("enter-animation");
    })
    .mouseleave(function () {
      $("#btn-request img")
        .attr("src", "assets/img/btn_line.png")
        .removeClass("enter-animation")
        .addClass("leave-animation");
    });

  $('.navbar-toggler').on('click', function() {
    $('.navbar-collapse').addClass('show')
    $('body').addClass('show')
  })
  $('.nav-link').on('click', function() {
    $('.navbar-collapse').removeClass('show')
    $('body').removeClass('show')
  })
});
