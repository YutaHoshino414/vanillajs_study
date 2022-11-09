console.log('hello')

function _cb() {
  try {
    $(".row").css("display", "table-row");
  } catch (e) {}
}

$(document).ready(function () {
  var speed = 300;
  $("#radio01").click(function () {
    $(".cell01").slideDown(speed);
    $(".cell02").slideDown(speed);
    $(".row").slideDown(speed, _cb());
  });
  $("#radio02").click(function () {
    $(".cell01").slideUp(speed);
    $(".cell02").slideUp(speed);
    setTimeout(function () {
      $(".row").hide();
    }, speed);
  });
});
