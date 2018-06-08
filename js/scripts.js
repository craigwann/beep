//--------BACK END------------
var arrayOrig = [];
var arrayFinal = [];

function dave() {
  var answer = "I'm sorry, Dave. I'm afraid I can't do that."
  return answer
};





// //-----------
// function check(number) {
//   return number >= 2;
// }
// function myFunction() {
//   testArray.find(check);
// };
//------------
// function arrayOrig(number) {
//   var number = 5;
//   var count = [];
//
//   for (var i = 0; i <= number; i++) {
//     count.push(i);
//     return count;
//   }
// };


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

    for (var i =0; i <= arrayOrig.legnth; i++) {
      var first = arrayOrig[i];
      alert("here");

      arrayOrig.shift();
      arrayFinal.push();


      // if (arrayOrig.indexOf(i) % 3 === 0 ) {
      //   arrayFinal.push(dave());
      // } else arrayFinal()
    };




    $(".result").text(arrayOrig.join(" - "));
  });
});
