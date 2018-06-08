


//--------FRONT END------------
$(document).ready(function() {
  $(".theForm").submit(function(event) {
    event.preventDefault();
    var array = [];
    var inputString = $(".inputNumber").val()
    var input = parseInt($(".inputNumber").val());





    $(".result").text(array.join(""));
  });
});
