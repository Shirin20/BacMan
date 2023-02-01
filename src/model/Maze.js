/* eslint-disable jsdoc/require-jsdoc */
import { MazePosition } from './MazePosition.js'

export class Maze {
  width
  height

  #loadMap ="------------------" +
            "-                -" +
            "- -------------- -" +
            "- -------------- -" +
            "- -------------- -" +
            "- -------------- -" +
            "- -------------- -" +
            "- -------------- -" +
            "- -------------- -" +
            "- -------------- -" +
            "-                -" +
            "------------------"
  #map
  // eslint-disable-next-line jsdoc/require-jsdoc
  constructor () {
    this.width = 18
    this.height = 12
    this.#map = new Array(this.width)
    for (let x = 0; x < this.width; x++) {
      this.#map[x] = new Array(this.height)
      for (let y = 0; y < this.height; y++) {
        const indexOfCoordinateInString = y * this.width + x
        const posString = this.#loadMap.charAt(indexOfCoordinateInString)
        let isWall = false
        if (posString === "-")
          isWall = true
        this.#map[x][y] = new MazePosition(Math.random() > 0.25, isWall)
      }
    }
  }

  getAt (x, y) {
    return this.#map[x][y]
  }
}
