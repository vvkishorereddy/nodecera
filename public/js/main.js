jQuery(function($) {
  "use strict";

  // Change Dropdown
  // Slick Slider
  // CounterUp
  // Checkbox Icon Change
  // Text Edit
  // Remove Item
  // Item clone
  // Gmap

  // -------------------------------------------------------------
  //  Toggle Menu for Mobile
  // -------------------------------------------------------------

  mobileDropdown();
  function mobileDropdown() {
    if ($(".tr-menu").length) {
      $(".tr-menu .tr-dropdown").on("append", function() {
        return '<i class="fa fa-angle-down icon" aria-hidden="true"></i>';
      });
      $(".tr-menu .tr-dropdown .icon").on("click", function() {
        $(this)
          .parent("li")
          .children("ul")
          .slideToggle();
      });
    }
  }

  // -------------------------------------------------------------
  //  Change Dropdown
  // -------------------------------------------------------------

  $(".tr-change-dropdown").on("click", ".tr-change a", function(ev) {
    if ("#" === $(this).attr("href")) {
      ev.preventDefault();
      var parent = $(this).parents(".tr-change-dropdown");
      parent.find(".change-text").html($(this).html());
    }
  });

  // -------------------------------------------------------------
  //  Slick Slider
  // -------------------------------------------------------------

  $(".testimonial-slider").slick({
    infinite: true,
    slidesToShow: 1,
    autoplay: true,
    autoplaySpeed: 10000,
    slidesToScroll: 1
  });

  // -------------------------------------------------------------
  //  Checkbox Icon Change
  // -------------------------------------------------------------

  $('input[type="checkbox"]').change(function() {
    if ($(this).is(":checked")) {
      $(this)
        .parent("label")
        .addClass("checked");
    } else {
      $(this)
        .parent("label")
        .removeClass("checked");
    }
  });

  // -------------------------------------------------------------
  //  Remove Item
  // -------------------------------------------------------------

  $(".remove-icon").on("click", function() {
    $(this)
      .parents(".remove-item")
      .fadeOut();
  });

  // -------------------------------------------------------------
  //  item clone
  // -------------------------------------------------------------

  $(document).ready(function() {
    var regex = /^(.*)(\d)+$/i;
    var cloneitem = $("#addhistory").length;
    $("#clone").click(function() {
      $("#addhistory")
        .clone()
        .appendTo(".additem-work")
        .attr("id", "#addhistory" + cloneitem)
        .find("*")
        .each(function() {
          var id = this.id || "";
          var match = id.match(regex) || [];
          if (match.length == 3) {
            this.id = match[1] + cloneitem;
          }
        });
      cloneitem++;
    });

    var cloneitem2 = $("#add-edu").length;
    $("#edu-clone").click(function() {
      $("#add-edu")
        .clone()
        .appendTo(".additem-edu")
        .attr("id", "#add-edu" + cloneitem2)
        .find("*")
        .each(function() {
          var id = this.id || "";
          var match = id.match(regex) || [];
          if (match.length == 3) {
            this.id = match[1] + cloneitem2;
          }
        });
      cloneitem2++;
    });

    var cloneitem3 = $("#achievement").length;
    $("#achiev-clone").click(function() {
      $("#achievement")
        .clone()
        .appendTo(".additem-achiev")
        .attr("id", "#achievement" + cloneitem3)
        .find("*")
        .each(function() {
          var id = this.id || "";
          var match = id.match(regex) || [];
          if (match.length == 3) {
            this.id = match[1] + cloneitem3;
          }
        });
      cloneitem3++;
    });

    $(document).on("click", ".remove", function() {
      $(this)
        .parents(".additem")
        .remove();
    });
  });

  // script end
});

openTab = (e, page) => {
  let liTag = document.querySelectorAll(".tabTitle");
  let dataDivTag = document.querySelectorAll(".tab-pane");

  dataDivTag.forEach(element => {
    element.classList.remove("active", "show");
  });
  document
    .querySelector(`#${e.currentTarget.dataset.id}`)
    .classList.add("active", "show");

  if (page === "jobs") {
    liTag.forEach(element => {
      element.classList.remove("active");
    });
    document
      .querySelector(`[data-id=${e.currentTarget.dataset.id}]`)
      .classList.add("active");
  }

  if (page === "register") {
    liTag.forEach(element => {
      element.querySelector("a").classList.remove("active");
    });
    document
      .querySelector(`[data-id=${e.currentTarget.dataset.id}] a`)
      .classList.add("active");
  }

  if (page === "profile") {
    liTag.forEach(element => {
      element.querySelector("a").classList.remove("active");
    });
    document
      .querySelector(`[data-id=${e.currentTarget.dataset.id}] a`)
      .classList.add("active");
  }
};
