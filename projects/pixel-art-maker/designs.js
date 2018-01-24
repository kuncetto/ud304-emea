$(document).ready(function() {
  // Select color input
  const colorPicker = $('#colorPicker');

  // Select size input
  const inputHeight = $('#input_height');
  const inputWidth = $('#input_width');

  // When size is submitted by the user, call makeGrid()
  $('#sizePicker').submit(function(e) {
    e.preventDefault();
    let height = inputHeight.val();
    let width = inputWidth.val();
    makeGrid(height, width);
  });

  $('#pixel_canvas').on('click', 'td', function() {
    $(this).css('background-color', colorPicker.val());
  });

  function makeGrid(height, width) {

    // Your code goes here!
    const canvas = $('#pixel_canvas');

    // clear pixel canvas
    canvas.empty();

    for (let i = 0; i < height; i++) {
      $('<tr></tr>').appendTo(canvas);
    }

    for (let j = 0; j < width; j++) {
      $('<td></td>').appendTo('tr');
    }
  }
});
