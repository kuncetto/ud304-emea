// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()
$('#sizePicker').submit(function(e) {
  e.preventDefault();
  makeGrid();
});

function makeGrid() {

  // Your code goes here!
  var height = 10;
  var width = 10;
  var canvas = $('#pixel_canvas');

  // clear pixel canvas
  canvas.empty();

  for (var i = 0; i < height; i++) {
    var row = $('<tr></tr>');
    for (var j = 0; j < width; j++) {
      // add column to row
      row.append($('<td></td>'));
    }
    // add row to table
    canvas.append(row);
  }
}
