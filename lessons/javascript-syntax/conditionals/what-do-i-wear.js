/*
 * Programming Quiz: What do I Wear? (3-7)
 */

// change the values of `shirtWidth`, `shirtLength`, and `shirtSleeve` to test your code
var shirtWidth = 23;
var shirtLength = 30;
var shirtSleeve = 8.71;

// your code goes here
if (shirtWidth >= 28 && shirtLength >= 34 && shirtSleeve >= 10.13) {
  console.log("3XL");
} else if ((shirtWidth < 28 && shirtWidth >= 26) &&
  (shirtLength < 34 && shirtLength >= 33) &&
  (shirtSleeve < 10.13 && shirtSleeve >= 9.63)) {
  console.log("2XL");
} else if ((shirtWidth < 26 && shirtWidth >= 24) &&
  (shirtLength < 33 && shirtLength >= 31) &&
  (shirtSleeve < 9.63 && shirtSleeve >= 8.88)) {
  console.log("XL");
} else if ((shirtWidth < 24 && shirtWidth >= 22) &&
  (shirtLength < 31 && shirtLength >= 30) &&
  (shirtSleeve < 8.88 && shirtSleeve >= 8.63)) {
  console.log("L");
} else if ((shirtWidth < 22 && shirtWidth >= 20) &&
  (shirtLength < 30 && shirtLength >= 29) &&
  (shirtSleeve < 8.63 && shirtSleeve >= 8.38)) {
  console.log("M");
} else if ((shirtWidth < 20 && shirtWidth >= 18) &&
  (shirtLength < 29 && shirtLength >= 28) &&
  (shirtSleeve < 8.38 && shirtSleeve >= 8.13)) {
  console.log("S");
} else {
  console.log("N/A");
}
