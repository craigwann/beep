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
        return "I am sorry, Dave. I am afraid I cannot do that."
      } else {
        return number
      };
    });

    var daveStr = dave.toString();
    var boop = daveStr.slice();

    for (var i =0; i<= boop.lenght; i++) {
      if (boop.indexOf('1') > -1) { //true
        return "Boop!"
      } else {
        return str
      };
    };



      $(".result").text(dave.join(" - "));

    });
  });
