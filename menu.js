$(document).ready(function () {
  var a = "active",
    n = ".nav",
    el = ".sub-btn, .head_logo, .head_city";
  $.event.special.touchstart = {
    setup: function (_, ns, handle) {
      this.addEventListener("touchstart", handle, { passive: true });
      this.addEventListener("touchmove", handle, { passive: true });
      this.addEventListener("scroll", handle, { passive: true });
    }
  };
  function HeadFoot(cls, color, img) {
    $(
      ".nav, .footer_info, .footer_map, .footer_logo, #footer-btn, #footer-btn2, body, #loftloader-wrapper"
    ).addClass(cls);
    $("#loftloader-wrapper")
      .find(".imgloading-container span")
      .css({
        "background-image":
          "url('https://sportsmens.ru/wp-content/uploads/" + img + ""
      });
    $("#loftloader-wrapper")
      .find("img")
      .attr("src", "https://sportsmens.ru/wp-content/uploads/" + img + "");
    $("#loftloader-wrapper .percentage.front").css({ color: color });
    $(".breadcrumps span *").css({ color: color });
  }
  var url = window.location.href;
  var g = "grass",
    h = "hock",
    pp = "pp";
  if (url.search(g) >= 0) {
    HeadFoot(g, "#019939", "LG.svg");
    if (url.search("#success") >= 0) {
      ym(78226927, "reachGoal", "uratrava");
    }
  } else if (url.search(h) >= 0) {
    HeadFoot(h, "#1E69AA", "LH.svg");
    $(".footer-cls").addClass(h);
    if (url.search("h-cort#success") >= 0) {
      ym(78226927, "reachGoal", "urakort");
    }
    if (url.search("plast#success") >= 0) {
      ym(78226927, "reachGoal", "urazakaz");
    }
  } else if (url.search(pp) >= 0) {
    HeadFoot(pp, "#365148", "LP-1.svg");
    $(".footer-cls").addClass(pp);
    if (url.search("#success") >= 0) {
      ym(78226927, "reachGoal", "urapp");
    }
  }
  //-------

  if ($(document).width() > 767) {
    $(n).removeClass("nav-fix");
    $(".main-btn").click(function () {
      var body = $("html, body");
      body.animate({ scrollTop: 0 }, 500, "swing");
    });
    $(".dropdown li").hover(function () {
      if (!$(this).hasClass(".hover")) {
        $(this).addClass("hover");
        $(this).parent().find(".hover").not(this).removeClass("hover");
      } else {
        $(this).parent().find(".hover").removeClass("hover");
      }
    });
    $(".dropdown").on("mouseleave", function () {
      $(this).find(".hover").removeClass("hover");
    });
    var ofs = $(n).offset();
    $(window).scroll(function () {
      if ($(this).scrollTop() > ofs.top) {
        $(".homelink").hide();
        $(n).addClass("nav-fix");
        $(el).hide();
        $(n + "-fix").css({
          "background-color": "transparent"
        });
      } else if ($(this).scrollTop() <= ofs.top) {
        $(".homelink").show();
        $(n).removeClass("nav-fix");
        $(el).show();
        $(n).removeAttr("style");
      }
      $(".main-btn").on("mouseenter", function () {
        $(n + "-fix")
          .find(el)
          .show();
        $(n + "-fix").removeAttr("style");
      });
    });
  } else {
    var $menu_popup = $(n);
    $(".main-btn").prependTo("#sub-navs");
    $(".wee").click(function () {
      mobileDrop($(this).parent().parent(), ".dropdown");
    });
    $(".menu-mobile-btn").on("click", function () {
      if (!$(this).hasClass(a)) {
        $(".head_city").addClass("sub-btn");
        $(".menu-mobile-btn").addClass(a);
        $(n).addClass(a);
        $("body").css({ overflow: "hidden" });
      } else {
        $(".head_city").removeClass("sub-btn");
        $(this).removeClass(a);
        $(n).removeClass(a);
        $(n)
          .find("." + a)
          .removeClass(a);
        $(n).find(".hide").removeClass("hide");
        $("body").css({ overflow: "scroll" });
      }
    });
  }
  function mobileDrop(par, ch) {
    //дроп-меню
    if (!$(par).hasClass(a)) {
      $(par).addClass(a);
      $($(par).parent().children())
        .not($(par).parent().find(".active"))
        .not(".main-btn")
        .addClass("hide");
    } else {
      $(par).removeClass(a);
      $($(par).parent().find(".active")).removeClass(a);
      $($(par).parent().find(".hide")).removeClass("hide");
    }
  }
});
