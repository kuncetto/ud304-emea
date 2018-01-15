/*
 * Programming Quiz: 99 Bottles of Juice (4-2)
 *
 * Use the following `while` loop to write out the song "99 bottles of juice".
 * Log the your lyrics to the console.
 *
 * Note
 *   - Each line of the lyrics needs to be logged to the same line.
 *   - The pluralization of the word "bottle" changes from "2 bottles" to "1 bottle" to "0 bottles".
 */

var num = 99;

while (num > 0) {
  // check value of num
  // print lyrics using num
  // don't forget to check pluralization on the last line!
  console.log(num + " bottle" + (num !== 1 ? "s" : "") + " of juice on the wall! " +
    num + " bottle" + (num !== 1 ? "s" : "") + " of juice! Take one down, pass it around... " +
    (num - 1) + " bottle" + (num - 1 !== 1 ? "s" : "") +  " of juice on the wall!");
  // decrement num
  num = num - 1;
}
