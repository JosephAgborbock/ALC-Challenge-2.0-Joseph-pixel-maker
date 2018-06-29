function makeGrid() {

  // Select size input form the canvas, cell, Height, Width, and rows

  var canvas, cell, Height, Width, rows;

  canvas = $('#pixelCanvas');
  Height = $('#inputHeight').val();
  Width = $('#inputWeight').val();

  canvas.children().remove()

  for (x = 0; x < Height; x++) {
    canvas.append('<tr></tr>');
  }

  rows = $('tr');

  for (y = 0; y < Width; y++) {
    rows.append('<td></td>');
  }

  cell = canvas.find('td');

  // When td is clicked by the user, it's changes the color of td
  cell.click(function () {
    // Select color input
    var color;
    color = $("#colorPicker").val();
    $(this).attr('bgcolor', color);
  });

}

// When the sizes is submitted by the user, we call the makeGrid()
var submitQuery;

submitQuery = $('input[type="submit"]')

submitQuery.click(function (event) {
  event.preventDefault();
  makeGrid();
});

$("body").css("background-color", "skyblue");