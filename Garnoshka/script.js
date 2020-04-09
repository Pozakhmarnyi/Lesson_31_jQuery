$("span").slideUp();

$("#F").click(function () {
  $("#text").slideToggle("slow", function () {});
  $("#text1").slideUp();
  $("#text2").slideUp();
});

$("#S").click(function () {
  $("#text1").slideToggle("slow", function () {});
  $("#text").slideUp();
  $("#text2").slideUp();
});

$("#T").click(function () {
  $("#text2").slideToggle("slow", function () {});
  $("#text").slideUp();
  $("#text1").slideUp();
});

$(document).ready(function () {
  $("#F").text("jQuery work");
});

$("h2").css({
  backgroundColor: "grey",
  color: "yellow",
});
