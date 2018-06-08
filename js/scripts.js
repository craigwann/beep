//--------BACK END------------
var arrayOrig = [];
function test(someNumber) {
  return someNumber * 2;
}

function dave(someNumber) {
  if (someNumber % 3 === 0) {
    var answer = "I'm sorry, Dave. I'm afraid I can't do that."
    return answer
  }
};


//--------FRONT END------------
$(document).ready(function() {
  $(".theForm").submit(function(event) {
    event.preventDefault();
    var inputString = $(".inputNumber").val();
    var input = parseInt($(".inputNumber").val());
//-----add to arrayOrig

    for (var i = 0; i <= input; i++) {
      arrayOrig.push(i);
    }

    for (var i =0; i <= arrayOrig.legnth; i++) {
      arrayOrig.map(test);

      console.log(arrayOrig);

      // if (arrayOrig.indexOf(i) % 3 === 0 ) {
      //   arrayFinal.push(dave());
      // } else arrayFinal()
    };

    $(".result").text(arrayOrig.join(" - "));
  });
});
