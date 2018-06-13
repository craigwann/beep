//--------BACK END------------

function boopBeep(input) {
  var array = []
  for (var i = 0; i <= input; i++){
    if (i % 3 == 0) {
      array.push("Dave!")
    } else if (i.toString().includes('1')) {
      array.push("Boop!")
    } else if (i.toString().includes('0')) {
      array.push("Beep!")
    } else {
      array.push(i);
    }
  }
  return array
};



//--------FRONT END------------
$(document).ready(function() {
  $(".theForm").submit(function(event) {
    event.preventDefault();

    var input = $(".inputNumber").val();

    $(".result").text(boopBeep(input).join(" - "));
    });
  });
