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

  // load the common section in the website
  $("[data-load]").each(function () {
    $(this).load($(this).data("load"), function () {
      // make updating the year on footer
      $("#year-now").text(new Date().getFullYear());
    });
  });

  // add class active when click on items on sidebar and moving to the right content
  $(".dashboard-items ul li").on("click", function () {
    if ($(window).width() < 992) {
      $(".aside-content").toggleClass("show");
      $("body, html").removeClass("overlay");
    }
    $(".dashboard-items ul li").removeClass("active");
    $(".dashboard-main .main-content, html, body").scrollTop(0);
    $(this).addClass("active");
    $(".main-content .dashboard-content > div").hide();
    $($(this).data("content")).fadeIn();
    $(".page-title").html($(this).html());
  });

  //fixed navbar when scrolling
  // $(".dashboard-main .main-content").on("scroll", function () {
  //   if ($(this).scrollTop() > 60) {
  //     $(".overview .overview-info").addClass("sticky");
  //   } else {
  //     $(".overview .overview-info").removeClass("sticky");
  //   }
  // });

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

  $(".profile .profile-info .right button").on("click", function () {
    $(".profile .change-password").toggle();
  });

  // validation for new password and confirm password
  var newPassword = $("#new-password");
  var confirmPassword = $("#confirm-password");

  function passCheck() {
    document.getElementById("save-password").disabled = newPassword.val().length === 0 || newPassword.val() != confirmPassword.val();
  }

  $(newPassword).on("keyup", function () {
    passCheck();
  });
  $(confirmPassword).on("keyup", function () {
    passCheck();
  });

  // read more button
  $(".content").hide();
  $(".show_hide").on("click", function () {
    var txt = $(".content").is(":visible") ? "read all" : "collapse";
    $(".show_hide").text(txt);
    $(this).siblings().find(".content").slideToggle(200);
  });

  $(".nav-mobile .close").click(function () {
    $("aside .aside-content").removeClass("show");
    $("body").removeClass("overlay");
  });

  $(".menu-toggler").click(function () {
    $("aside .aside-content").addClass("show");
    $("body").addClass("overlay");
  });
});
