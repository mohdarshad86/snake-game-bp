const SNAKE_SIZE = 20;

export function createSnake(width, height) {
	const x = Math.floor(Math.random() * (width / SNAKE_SIZE)) * SNAKE_SIZE;
	const y = Math.floor(Math.random() * (height / SNAKE_SIZE)) * SNAKE_SIZE;
	return [{x, y}];
}

export function drawSnake(ctx, snake) {
	ctx.fillStyle = '#0f0';
	snake.forEach(({x, y}) => {
		ctx.fillRect(x, y, SNAKE_SIZE, SNAKE_SIZE);
	});
}

export function moveSnake(snake) {
	for (let i = snake.length - 1; i > 0; i--) {
		snake[i].x = snake[i - 1].x;
		snake[i].y = snake[i - 1].y;
	}
	switch (snake[0].direction) {
		case 'up':
			snake[0].y -= SNAKE_SIZE;
			break;
		case 'down':
			snake[0].y += SNAKE_SIZE;
			break;
		case 'left':
			snake[0].x -= SNAKE_SIZE;
			break;
		case 'right':
			snake[0].x += SNAKE_SIZE;
			break;
	}
}

export function checkCollisions(snake, width, height) {
	const head = snake[0];
	if (head.x < 0 || head.x >= width || head.y < 0 || head.y >= height) {
		return true;
	}
	for (let i = 1; i < snake.length; i++) {
		if (head.x === snake[i].x && head.y === snake[i].y) {
			return true;
		}
	}
	return false;
}

export function createFood(width, height) {
	const x = Math.floor(Math.random() * (width / SNAKE_SIZE)) * SNAKE_SIZE;
	const y = Math.floor(Math.random() * (height / SNAKE_SIZE)) * SNAKE_SIZE;
	return {x, y};
}

export function drawFood(ctx, food) {
	ctx.fillStyle = '#f00';
	ctx.fillRect(food.x, food.y, SNAKE_SIZE, SNAKE_SIZE);
}