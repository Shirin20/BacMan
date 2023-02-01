/**
 * The main script file of the application.
 *
 * @author Shirin Meirkhan
 * @version 1.0.0
 */

import './maze-view/index.js'
import { Maze } from '../../model/Maze.js'


const bacMan = document.querySelector('#bacman-game')
const gameMaze = document.createElement('maze-view')
const maze = new Maze()

gameMaze.setMaze(maze)
bacMan.appendChild(gameMaze)
