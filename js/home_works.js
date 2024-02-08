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
    let currentPosition = 0; // Начальная позиция блока


    const interval = setInterval(() => {
        currentPosition++;
        movingBlock.style.left = `${currentPosition}px`; // Устанавливаем новую позицию блока.

        // Проверяем, достиг ли блок края родительского блока.
        if (currentPosition >= 450) { // 450px - ширина родительского блока минус ширина маленького блока.
            clearInterval(interval); // Останавливаем интервал.
            setTimeout(() => {
                movingBlock.style.left = '0px'; // Сбрасываем позицию блока в начало.
                moveRight(); // Запускаем движение снова.
            }, 0.5); // Задержка перед повторным запуском движения.
        }
    }, 7); // Интервал обновления позиции блока (7 миллисекунд)
}

moveRight();
