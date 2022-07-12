$(function () {
  // switch between app tutorials
  $(".app-hero .platforms ul li.app").on("click", function () {
    $(this)
      .addClass("active")
      .siblings()
      .removeClass("active");
    $(".apps-download > div").hide();
    $($(this).data("content")).fadeIn();
  });

  $('button.menu-toggle').on('click', function() {
    $(this).toggleClass('is-active');
    $('body').toggleClass('overlay')
  });
});



