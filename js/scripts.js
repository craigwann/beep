//--------BACK END------------
var arrayOrig = [];




//--------FRONT END------------
$(document).ready(function() {
  $(".theForm").submit(function(event) {
    event.preventDefault();
    var inputString = $(".inputNumber").val();
    var input = parseInt($(".inputNumber").val());
//-----add to arrayOrig

    for (var i = 0; i <= input; i++) {
      arrayOrig.push(i);
    };

    var dave = arrayOrig.map(function(number){
      if (number % 3 == 0) {
        return "dave"
      } else {
        return number
      };
    });




      $(".result").text(dave.join(" - "));

    });
  });
