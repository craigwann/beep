var numbers = [0,1,2,3,4,5,6,7,8,9];
var dave = numbers.map(function(number){
  if (number % 3 == 0) {
    return "dave"
  } else {
    return number
  };
});

var daveStr = dave.toString();
var boop = daveStr.slice();

boop.forEach(function(str) {
  if (boop.indexOf('1') > -1) { //true
    return "Boop!"
  } else {
    return str
  };
});


var num = [0,1,2,3,4,5,6,7,8,9];
num.toString().indexOf('5') > -1 //return true or false - contains or not
