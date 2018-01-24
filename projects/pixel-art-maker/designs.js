// Select color input
// Select size input
var height, width;

height = Number($('#input_height').val());
width = Number($('#input_width').val());

$('#input_height').change(function() {
  height = Number($(this).val());
});

$('#input_width').change(function() {
  width = Number($(this).val());
});

// When size is submitted by the user, call makeGrid()
$('#sizePicker').submit(function(e) {
  e.preventDefault();
  makeGrid();
});

function makeGrid() {

  // Your code goes here!
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
