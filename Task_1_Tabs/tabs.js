$(".ratings").hide();
$(".buy").hide();

$(".menu__left").click(function () {
  $(".content").slideToggle("slow", function () {});
  $(".ratings").hide();
  $(".buy").hide();
});
$(".menu__center").click(function () {
  $(".content").hide();
  $(".ratings").slideToggle("slow", function () {});
  $(".buy").hide();
});

$(".menu__right").click(function () {
  $(".content").hide();
  $(".ratings").hide();
  $(".buy").slideToggle("slow", function () {});
});
