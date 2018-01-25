$(document).ready(function() {
  // Select color input
  const colorPicker = $('#colorPicker');

  // Select size input
  const inputHeight = $('#input_height');
  const inputWidth = $('#input_width');

  // Select size picker form
  const sizePicker = $('#sizePicker');

  // Select pixel canvas table
  const pixelCanvas = $('#pixel_canvas');

  // When size is submitted by the user, call makeGrid()
  sizePicker.submit(function(e) {
    e.preventDefault();
    let height = inputHeight.val();
    let width = inputWidth.val();
    makeGrid(height, width);
  });

  // When user reset the form, call resetGrid()
  sizePicker.children('[type="reset"]').on('click', function(e) {
    e.preventDefault();
    resetGrid();
  });

  // Click on a cell to color it
  pixelCanvas.on('click', 'td', function() {
    $(this).css('background-color', colorPicker.val());
  });

  // Double click on a cell to clean it
  pixelCanvas.on('dblclick', 'td', function() {
    $(this).css('background-color', '');
  })

  function makeGrid(height, width) {

    resetGrid();

    // add rows to table
    for (let i = 0; i < height; i++) {
      $('<tr></tr>').appendTo(pixelCanvas);
    }

    // add columns to table rows
    for (let j = 0; j < width; j++) {
      $('<td></td>').appendTo('tr');
    }
  }

  function resetGrid() {
    // clear pixel canvas table
    pixelCanvas.empty();
  }

});
