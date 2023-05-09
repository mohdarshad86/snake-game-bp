import { initializeGame } from './game.js';
import { setupControl } from './controls.js';

const canvas = document.getElementById('canvas');
const scoreValue = document.getElementById('score-value');

const game = initializeGame(canvas, scoreValue);
setupControl(game);
game.run();
