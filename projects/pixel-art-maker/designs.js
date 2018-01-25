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
  // sizePicker.children('[type="reset"]').on('click', function(e) {
  //   e.preventDefault();
  //   resetGrid();
  // });

  // Click on a cell to color it
  pixelCanvas.on('click', 'td', function() {
    $(this).css('background-color', colorPicker.val());
  });

  // Right click on a cell to clean it
  pixelCanvas.on('contextmenu', 'td', function(e) {
    e.preventDefault();
    $(this).css('background-color', '');
  });

  // Change cursor when mouse enters into a cell
  pixelCanvas.on('mouseenter', 'td', function() {
    $(this).awesomeCursor('pencil', {
      hotspot: 'bottom left'
    });
  });

  // Reset cursor when mouse leaves a cell
  pixelCanvas.on('mouseleave', 'td', function() {
    $(this).css('curson', '');
  });

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
