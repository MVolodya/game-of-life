(function() {
  var canvas = document.getElementById('canvas')
  var cw = canvas.width = 300
  var ch = canvas.height = 300
  var ctx = canvas.getContext('2d')

  var resolution = 50
  var cols = ch / resolution;
  var rows = cw / resolution;
  var grid = null;

  function make2DArray(cols, rows) {
    var arr = new Array(cols)
    for(var i = 0; i < arr.length; i++) {
      arr[i] = new Array(rows)
    }
    return arr
  }

  function fill2DArray() {
    grid = make2DArray(cols, rows)
    for(var i = 0; i < cols; i++) {
      for(var j = 0; j < rows; j++) {
        grid[i][j] = 0
      }
    }
  }

  function drwa2DArray() {
    ctx.clearRect(0,0,cw,ch)
    for(var i = 0; i < cols; i++) {
      for(var j = 0; j < rows; j++) {
        if(grid[i][j] == 1) {
          ctx.fillRect(j*resolution, i*resolution, resolution-1, resolution-1);
        }
      }
    }
  }

  canvas.onclick = function(e) {
    var x = e.offsetX;
    var y = e.offsetY;
    x = Math.floor(x/resolution);
    y = Math.floor(y/resolution);
    grid[y][x] = 1
    drwa2DArray()
  }



  fill2DArray()

})()
