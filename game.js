import { createSnake, drawSnake, moveSnake, checkCollisions, createFood, drawFood } from './snake.js';

const FRAME_RATE = 8;

class Game {
	constructor(canvas, scoreValue) {
		this.canvas = canvas;
		this.scoreValue = scoreValue;
		this.ctx = canvas.getContext('2d');
		this.width = canvas.width;
		this.height = canvas.height;
		this.snake = createSnake(this.width, this.height);
		this.food = createFood(this.width, this.height);
		this.score = 0;
	}

	run() {
		setInterval(() => {
			this.ctx.clearRect(0, 0, this.width, this.height);
			drawSnake(this.ctx, this.snake);
			drawFood(this.ctx, this.food);
			moveSnake(this.snake);
			if (checkCollisions(this.snake, this.width, this.height)) {
				alert(`Game over! Your score is ${this.score}`);
				location.reload();
			}
			if (this.snake[0].x === this.food.x && this.snake[0].y === this.food.y) {
				this.snake.push({});
				this.food = createFood(this.width, this.height);
				this.score += 10;
				this.scoreValue.innerText = this.score;
			}
		}, 1000 / FRAME_RATE);
	}
}

export function initializeGame(canvas, scoreValue) {
	return new Game(canvas, scoreValue);
}
