let canvas = document.getElementById('snake');
let context = canvas.getContext('2d');
let box = 32;
let snake = [];
let food = [];
let direction = 'right';

snake[0] = {
    x: 7 * box,
    y: 8 * box
}

food = {
    X: Math.floor(Math.random() * 15 + 1) * box,
    Y: Math.floor(Math.random() * 15 + 1) * box
}

function criarBG() {
    context.fillStyle = 'black';
    context.fillRect(0, 0, 16 * box, 16 * box);
}

function criarCobrinha() {
    for (i = 0; i < snake.length; i++) {
        context.fillStyle = 'white';
        context.fillRect(snake[i].x, snake[i].y, box, box);
    }
}

function drawFood(){
    context.fillStyle = 'red';
    context.fillRect(food.X, food.Y, box, box);

}

document.addEventListener('keydown', update);

function update(event){
    if (event.keyCode == 37 && direction != 'right'){
        direction = 'left';
    }

    if (event.keyCode == 38 && direction != 'down'){
        direction = 'up';
    }

    if (event.keyCode == 39 && direction != 'left'){
        direction = 'rigth';
    }

    if (event.keyCode == 40 && direction != 'up'){
        direction = 'down';
    }
}
let snakeX = snake[0].x;
let snakeY =snake[0].y;

function iniciarJogo() {
    if(snake[0].x > 15 * box && direction == 'rigth') snake[0].x = 0;
    if(snake[0].x < 0 && direction == 'left') snake[0].x = 16 * box;
    if(snake[0].y > 15 * box && direction == 'down') snake[0].y = 0;
    if(snake[0].y < 0 && direction == 'up') snake[0].y = 16 * box;

    for(i =1 ; i < snake.length; i++){
        if(snake[0].x == snake[i].x && snake[0].y == snake[i].y){
            clearInterval(jogo);
            alert("Game over!!!")
        }
    }

    criarBG();
    criarCobrinha();
    drawFood();

    let snakeX = snake[0].x;
    let snakeY = snake[0].y;

    if (direction == 'rigth')  snakeX += box;
    if (direction == 'left')  snakeX -= box;
    if (direction == 'up')  snakeY -= box;
    if (direction == 'down')  snakeY += box;

    if(snakeX != food.X || snakeY != food.Y){
        snake.pop();
    }else{
        food.X = Math.floor(Math.random() * 15 + 1) * box;
        food.Y = Math.floor(Math.random() * 15 + 1) * box;
    }

    let newHead = {
        x: snakeX, 
        y: snakeY
    }

    snake.unshift(newHead);
}

let jogo = setInterval(iniciarJogo, 100);

