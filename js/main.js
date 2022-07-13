$(function () {
  // switch between app tutorials on download page
  $(".app-hero .platforms ul li.app").on("click", function () {
    $(this).addClass("active").siblings().removeClass("active");
    $(".apps-download > div").hide();
    $($(this).data("content")).fadeIn();
  });

  // menu toggle in mobile screen in main website
  $("button.menu-toggle").on("click", function () {
    $(this).toggleClass("is-active");
    $("body").toggleClass("overlay");
  });

  // add class active when click on items on sidebar and moving to the right content
  $(".dashboard-items ul li").on("click", function () {
    if ($(window).width() < 992) {
      $(".aside-content").toggleClass("show");
      $("body, html").removeClass("overlay");
      $(".navbar-toggler").removeClass("open");
    }
    $(".dashboard-items ul li").removeClass("active");
    $(".dashboard-main .main-content, html, body").scrollTop(0);
    $(this).addClass("active");
    $(".main-content .dashboard-content > div").hide();
    $($(this).data("content")).fadeIn();
  });

  //fixed navbar when scrolling
  $(".dashboard-main .main-content").on("scroll", function () {
    if ($(this).scrollTop() > 60) {
      $(".overview .overview-info").addClass("sticky");
    } else {
      $(".overview .overview-info").removeClass("sticky");
    }
  });

  // toggle between payment methods
  $(".payment--method .label-radio").on("click", function () {
    $(this).parents(".payment--method").next(".card-info").slideToggle(200);
    $(".card-info").not($(this).parents(".payment--method").next(".card-info")).slideUp(200);
  });

  // show current password when clicking on eye icon
  $("#eye").click(function () {
    if ($("#currentPassword").attr("type") === "password") {
      $("#currentPassword").attr("type", "text");
    } else {
      $("#currentPassword").attr("type", "password");
    }
  });

  $('.profile .profile-info .right button').on('click', function () {
    $('.profile .change-password').toggle()
  })


  // validation for new password and confirm password
  var newPassword =$('#new-password')
  var confirmPassword =$('#confirm-password')

  function passCheck() {
    document.getElementById("save-password").disabled = newPassword.val().length === 0 || newPassword.val() != confirmPassword.val();
  }

  $(newPassword).on('keyup', function () {
    passCheck();
  })
  $(confirmPassword).on('keyup', function () {
    passCheck();
  })

});
