(function() {
  var canvas = document.getElementById('canvas')
  var cw = canvas.width = 300
  var ch = canvas.height = 300
  var ctx = canvas.getContext('2d')
  var resolution = 30
  var cols = ch / resolution;
  var rows = cw / resolution;
  var grid = [];

  function Game(cols, rows) {
    this.cols = cols
    this.rows = rows
  
    var makeGrid = function() {
      var arr = new Array(this.cols)
      for(var i = 0; i < arr.length; i++) {
        arr[i] = new Array(this.rows)
        for(var j = 0; j < this.rows; j++) {
          arr[i][j] = 0
        }
      }
      return arr
    }

    this.generation = function() {
      var nextGeneration = makeGrid()
    }

    this.startGame = function() {
      grid = makeGrid.apply(this);
    }
  }

  function Cell(x, y) {
    this.x = x
    this.y = y

    this.setCell = function() {
      grid[this.y][this.x] = 1
      this.draw()
    }

    this.draw = function() {
      ctx.clearRect(0, 0, cw, ch)
      for(var i = 0; i < cols; i++) {
        for(var j = 0; j < rows; j++) {
          if(grid[i][j] == 1) {
            ctx.fillRect(j*resolution, i*resolution, resolution-1, resolution-1);
          }
        }
      }
    }
  }


  canvas.onclick = function(e) {
    var x = Math.floor(e.offsetX / resolution);
    var y = Math.floor(e.offsetY / resolution);
    var cell = new Cell(x, y)
    cell.setCell()
  }

  var newGame = new Game(cols, rows)
  newGame.startGame()

})()
