$("#F").click(function () {
  $("#text").slideToggle("slow", function () {});
});

$(document).ready(function () {
  $("#F").text("jQuery work");
});

$("h2").css({
  backgroundColor: "green",
  color: "yellow",
});

// $("#F").on("click", function () {
//   $("#text").slideToggle("slow", function () {
//   });
// });
