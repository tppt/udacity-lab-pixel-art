// Select color input
let color = '';
document.getElementById('colorPicker').addEventListener('change', function (event) {
  color = event.target.value;
});

// When size is submitted by the user, call makeGrid()
document.getElementById('sizePicker').addEventListener('submit', function (event) {
  event.preventDefault();
  makeGrid();
});

function makeGrid() {
  const height = document.getElementById('inputHeight').value;
  const width = document.getElementById('inputWidth').value;

  const table = document.getElementById('pixelCanvas');
  //Clear the table before adding rows/cols to it
  table.innerHTML = '';

  for (let row = 0; row < height; row++) {
    const tr = table.insertRow(row);
    
    for (let col = 0; col < width; col++) {
      tr.insertCell(col);
    }
  }
}
  