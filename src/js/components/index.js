/**
 * The main script file of the application.
 *
 * @author Shirin Meirkhan
 * @version 1.0.0
 */

import './game-maze/index.js'
import { Maze } from '../../model/Maze.js'


const bacMan = document.querySelector('#bacman-game')
const gameMaze = document.createElement('game-maze')
const maze = new Maze()

gameMaze.setMaze(maze)
bacMan.appendChild(gameMaze)
