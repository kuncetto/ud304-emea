/*
 * Programming Quiz: JuliaJames (4-1)
 */

var x = 1;

while (x <= 20) {
  var s = "";
  // check divisibility
  if (x % 3 === 0) {
    s += "Julia";
  }
  if (x % 5 === 0) {
    s += "James";
  }

  // print Julia, James, or JuliaJames
  console.log(s ? s : x);

  // increment x
  x = x + 1;
}
