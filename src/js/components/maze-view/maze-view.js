/* eslint-disable jsdoc/require-jsdoc */
const template = document.createElement('template')
template.innerHTML = `
<style>
  .game-board {
    margin: 0;
    background-color:black;
    width: 100%;
    height: 100%;
    overflow: auto;
  }
  .game-div {
    width: 100%;
    height: 100%;
    overflow: auto;
  }
</style>
 <div class="game-div">
<canvas class="game-board"></canvas>

</div>
`
customElements.define('maze-view',

  class extends HTMLElement {
    #gameBoard
    #modelMaze
    gameCanvas
    tileWidth = 16
    tileHeight = 12
    x = 0
    y = 0

    constructor () {
      super()

      this.attachShadow({ mode: 'open' })
        .appendChild(template.content.cloneNode(true))
      this.#gameBoard = this.shadowRoot.querySelector('.game-board')
      this.gameCanvas = this.#gameBoard.getContext('2d')
    }

    setMaze (modelMaze) {
      this.#modelMaze = modelMaze
      this.tileWidth = this.#gameBoard.width / modelMaze.width
      this.tileHeight = this.#gameBoard.height / modelMaze.height

      this.tileWidth = this.tileHeight = modelMaze.width > modelMaze.height ? modelMaze.height : modelMaze.width

      console.log('setMaze')
    }

    connectedCallback () {
      this.draw()
    }

    disconnectedCallback () {
    }

    draw () {
      this.gameCanvas.fillStyle = 'blue'
      // this.gameCanvas.fillRect(this.x, this.y, this.width, this.height)
      for (let x = 0; x < this.#modelMaze.width; x++) {
        for (let y = 0; y < this.#modelMaze.height; y++) {
          const mazePosition = this.#modelMaze.getAt(x, y)
          this.#drawMazePosition(mazePosition, x, y)
        }
      }
    }

    #drawMazePosition (mazePosition, x, y) {
      if (mazePosition.isWall()) {
        this.gameCanvas.fillRect(x * this.tileWidth, y * this.tileHeight, this.tileWidth, this.tileHeight)
      } else if (mazePosition.hasDot()) {
        this.gameCanvas.fillRect(x * this.tileWidth + 3, y * this.tileHeight + 3, this.tileWidth - 6, this.tileHeight - 6)
      }
    }
  }
)
