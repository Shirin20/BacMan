/* eslint-disable jsdoc/require-jsdoc */

export class MazePosition {
  #hasDot = false
  #isWall = false
  // eslint-disable-next-line jsdoc/require-jsdoc
  constructor (dot, wall) {
    this.#isWall = wall

    if (this.#isWall) {
      this.hasDot = false
    } else {
      this.#hasDot = dot
    }
  }

  hasDot () {
    return this.#hasDot
  }

  isWall () {
    return this.#isWall
  }
}
