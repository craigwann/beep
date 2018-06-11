var numbers = [0,1,2,3,4,5,6,7,8,9];
var dave = numbers.map(function(number){
  if (number % 3 == 0) {
    return "dave"
  } else {
    return number
  };
});
