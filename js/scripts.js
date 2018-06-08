//--------BACK END------------

function countTo(number) {
  var number = 5;
  var count = [];

  for (var i = 0; i <= number; i++) {
    count.push(i);
    return count;
  }
};


//--------FRONT END------------
$(document).ready(function() {
  $(".theForm").submit(function(event) {
    event.preventDefault();
    var countTo = [];
    var inputString = $(".inputNumber").val();
    var input = parseInt($(".inputNumber").val());

    for (var i = 0; i <= number; i++) {
      count.push(i);
      return count;
    }




    $(".result").text(countTo);
  });
});
