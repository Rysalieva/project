// Part - 1
const gmailInput = document.getElementById('gmail_input');
const gmailButton = document.getElementById('gmail_button');
const gmailResult = document.getElementById('gmail_result');

const regExp = /^[a-z][a-z\d_]{0,19}@gmail\.com$/;


// `^`: Символ начала строки. Гарантирует, что сопоставление начнется с начала строки.

// `[a-z]`: Это символьный класс, который соответствует любой букве в нижнем регистре от "a" до "z". Это обозначает, что адрес электронной почты должен начинаться с буквы в нижнем регистре.

// `[a-z\d_]`: Это символьный класс, который соответствует любой букве в нижнем регистре, цифре или подчеркиванию. `\d` соответствует любой цифре от 0 до 9.
   // Подчеркивание `_` также включено в этот класс. Этот фрагмент указывает, что после первого символа адреса могут следовать любые буквы в нижнем регистре, цифры или подчеркивания.

// `{0,19}`: Это квантификатор, который указывает, что предыдущий символьный класс должен повторяться от 0 до 19 раз. Таким образом, это ограничивает длину имени адреса электронной почты до 20 символов.

// `@gmail\.com`: Символ "@" и строка "gmail.com", которые должны быть в конце адреса электронной почты.

// `$`: Символ конца строки. Гарантирует, что сопоставление заканчивается в конце строки.

gmailButton.addEventListener('click', () => {
    const gmailInputValue = gmailInput.value;
    if (regExp.test(gmailInputValue)) {
        gmailResult.textContent = 'Ok';
        gmailResult.style.color = 'green';
    } else {
        gmailResult.textContent = 'not Ok';
        gmailResult.style.color = 'red';
    }
});

// Part - 2
const movingBlock = document.getElementById("moving_block");

function moveRight() {
    let currentPositionX = 0; // Начальная позиция блока по горизонтали
    const parentWidth = movingBlock.parentElement.clientWidth; // Ширина родительского блока
    const blockWidth = movingBlock.clientWidth; // Ширина маленького блока

    const interval = setInterval(() => {
        currentPositionX++;
        movingBlock.style.left = `${currentPositionX}px`; // Устанавливаем новую позицию блока по горизонтали.

        // Проверяем, достиг ли блок правого края родительского блока.
        if (currentPositionX >= parentWidth - blockWidth) {
            clearInterval(interval); // Останавливаем интервал движения вправо.
            moveDown(); // Начинаем движение вниз.
        }
    }, 7); //(7 миллисекунд)
}

function moveDown() {
    let currentPositionY = 0; // Начальная позиция блока по вертикали
    const parentHeight = movingBlock.parentElement.clientHeight; // Высота родительского блока
    const blockHeight = movingBlock.clientHeight; // Высота маленького блока

    const interval = setInterval(() => {
        currentPositionY++;
        movingBlock.style.top = `${currentPositionY}px`; // Устанавливаем новую позицию блока по вертикали.

        // Проверяем, достиг ли блок нижнего края родительского блока.
        if (currentPositionY >= parentHeight - blockHeight) {
            clearInterval(interval); // Останавливаем интервал движения вниз.
        }
    }, 7); //(7 миллисекунд)
}

moveRight();

// STOPWATCH

const secondsElement = document.getElementById('seconds');
const startButton = document.getElementById('start');
const stopButton = document.getElementById('stop');
const resetButton = document.getElementById('reset');

let timer; // Переменная для хранения таймера
let seconds = 0; // Переменная для хранения количества секунд
let isRunning = false; // Переменная для отслеживания состояния таймера

function startTimer() {
    if (!isRunning) {
        timer = setInterval(updateTimer, 1000);
        isRunning = true;
    }
}

function stopTimer() {
    clearInterval(timer);
    isRunning = false;
}

function resetTimer() {
    clearInterval(timer);
    seconds = 0;
    updateDisplay();
    isRunning = false;
}

function updateTimer() {
    seconds++;
    updateDisplay();
}

function updateDisplay() {
    secondsElement.textContent = seconds;
}

startButton.addEventListener('click', startTimer);
stopButton.addEventListener('click', stopTimer);
resetButton.addEventListener('click', resetTimer);