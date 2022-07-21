$(document).ready(function () {
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

  // updating the year on footer
  $("#year-now").text(new Date().getFullYear());

  // load the common section in the website
  // $("div[data-load]").each(function () {
  //   $(this).load($(this).data("load"), function () {
  //   });
  // });

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

  // Detect the OS
  function getOS() {
    var userAgent = window.navigator.userAgent,
      platform = window.navigator?.userAgentData?.platform || window.navigator.platform,
      macosPlatforms = ["Macintosh", "MacIntel", "MacPPC", "Mac68K"],
      windowsPlatforms = ["Win32", "Win64", "Windows", "WinCE"];

    if (macosPlatforms.indexOf(platform) !== -1) {
      $(".signup-link").href("/signup-mac.html");
      $(".apps-download .windows-app").hide();
      $(".apps-download .mac-app").show();
      $("#windows-tab").removeClass("active");
      $("#mac-tab").addClass("active");
    } else if (windowsPlatforms.indexOf(platform) !== -1) {
      $(".signup-link").attr("href", "/signup-windows.html");
      $(".apps-download .mac-app").hide();
      $(".apps-download .windows-app").show();
      $("#windows-tab").addClass("active");
      $("#mac-tab").removeClass("active");
    }
  }
  getOS();

  // checking email validation
  function validateEmail(email) {
    let re = /\S+@\S+\.\S+/;
    return re.test(email);
  }

  $(".coinsurf-login #email").on("keyup", function () {
    if ($(this).val()) {
      let valid = validateEmail($(this).val());
      if (valid) {
        $(this).addClass("valid").removeClass("invalid");
      } else {
        $(this).removeClass("valid").addClass("invalid");
      }
    } else {
      $(this).removeClass("invalid");
    }
  });

  // Search Function on FAQ Page
  $("#accordion_search_bar").on("keyup", function () {
    var value = $(this).val().toLowerCase();
    $("#accordionFaq > .accordion-item").filter(function () {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1);
    });
  });

  // validation for the email input when sending the invite
  var inviteEmail = $("#invite-email");
  var inviteEmailError = true;

  // validate the email when blur the email input field
  inviteEmail.on("keyup", function () {
    if (inviteEmail.val() != "") {
      if (!validateEmail(inviteEmail.val()) || inviteEmail.val() == "") {
        $(this).addClass("invalid");
        inviteEmailError = true;
      } else {
        $(this).removeClass("invalid");
        inviteEmailError = false;
      }
    } else {
      $(this).removeClass("invalid");
    }
  });

  // sending invitation state
  $("#invite-form").on("submit", function (e) {
    e.preventDefault();
    if (inviteEmailError == true) {
      $("#invite-form .error").show().delay(3000).fadeOut();
    } else {
      $("#send-invite").addClass("invite-sent").html(`
      <svg class="me-2" width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/  svg">
        <path d="M2 6L6.5 10L14 2" stroke="#20244f" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
      <span>Invite sent</span>`);
      setTimeout(function () {
        $("#send-invite").removeClass("invite-sent").text("Send Invite");
        inviteEmail.val("");
      }, 2000);
    }
  });
});
