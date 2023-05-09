// control.js

export function setupControl(game) {
    const LEFT_ARROW_CODE = 37;
    const RIGHT_ARROW_CODE = 39;
    const UP_ARROW_CODE = 38;
    const DOWN_ARROW_CODE = 40;
  
    function handleKeydown(event) {
      const keyCode = event.keyCode;
      if (keyCode === LEFT_ARROW_CODE) {
        game.changeDirection('left');
      } else if (keyCode === RIGHT_ARROW_CODE) {
        game.changeDirection('right');
      } else if (keyCode === UP_ARROW_CODE) {
        game.changeDirection('up');
      } else if (keyCode === DOWN_ARROW_CODE) {
        game.changeDirection('down');
      }
    }
  
    document.addEventListener('keydown', handleKeydown);
  }
  