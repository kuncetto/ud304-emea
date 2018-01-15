/*
 * Programming Quiz: Laugh (5-4)
 */

var laugh = function(num) {
  var result = "";

  for (var i = 0; i < num; i++) {
    result += "ha";
  }

  return result + "!";
};

console.log(laugh(10));
