const template = document.createElement('template')
template.innerHTML = `
<style>
  .game-board {
    margin: 0;
    background-color:black;
  }
</style>
 <div>
<canvas class="game-board"></canvas>
</div>
`
customElements.define('game-maze',
/**
 * Represents a game-maze element.
 */
  class extends HTMLElement {
    #gameBoard
    gameCanvas
    width = 10
    height = 10
    x = 0
    y = 0
    /**
     * Creates an instance of the current type.
     */
    constructor () {
      super()

      // Attach a shadow DOM tree to this element and
      // append the template to the shadow root.
      this.attachShadow({ mode: 'open' })
        .appendChild(template.content.cloneNode(true))
      this.#gameBoard = this.shadowRoot.querySelector('.game-board')
      this.gameCanvas = this.#gameBoard.getContext('2d')
      this.gameCanvas.width = innerWidth
      this.gameCanvas.hight = innerHeight
    }

    /**
     * Called after the element is inserted into the DOM.
     */
    connectedCallback () {
      this.draw()
    }

    /**
     * Called after the element has been removed from the DOM.
     */
    disconnectedCallback () {
    }

    // eslint-disable-next-line jsdoc/require-jsdoc
    draw () {
      this.gameCanvas.fillStyle = 'blue'
      this.gameCanvas.fillRect(this.x, this.y, this.width, this.height)
    }
  }
)
