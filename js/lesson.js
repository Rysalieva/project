// PHONE

const phoneInput = document.querySelector('#phone_input')
const phoneButton = document.querySelector('#phone_button')
const phoneResult = document.querySelector('#phone_result')



phoneButton.addEventListener('click', () => {

})
//TAB SLIDER
const tabContentItems = () => {
    tabContentItems.forEach((item) => {

    })
}
//CONVERTER
//////////////
// somInput.oninput = () => {
//     const request = new XMLHttpRequest()
//     request.open("GET", "../data/converter.json")
//     request.setRequestHeader("Content-type", "application/json")
//     request.send()
//
//
//     request.onload = () => {
//         const data = JSON.parse(request.response)
//
//         usdInput.value = (somInput.value / data.usd).toFixed(2)
//    }
// }
// usdInput.oninput = () => {
//     const request = new XMLHttpRequest()
//     request.open("GET", "../data/converter.json")
//     request.setRequestHeader("Content-type", "application/json")
//     request.send()
//
//
//     request.onload = () => {
//         const data = JSON.parse(request.response)
//
//         somInput.value = (usdInput.value * data.usd).toFixed(2)
//     }
// } !НАРУШЕНИЕ ПРИНЦИПА DRY, код не должен повторяться!

// DRY - don`t repeat yourself
let currencyData;

const fetchData = async () => {
    try {
        const response = await fetch('../data/converter.json');
        currencyData = await response.json();
    } catch (error) {
        console.error('Error fetching data:', error);
    }
};

const convertCurrency = (element, targetElements, current) => {
    const currentCurrency = currencyData.find(item => item.hasOwnProperty(current));

    targetElements.forEach((targetElement) => {
        if (targetElement !== element) {
            const targetCurrency = currencyData.find(item => item.hasOwnProperty(targetElement.id));

            const newValue = element.value.trim() !== '' ?
                (element.value * currentCurrency[current] / targetCurrency[targetElement.id]).toFixed(2) :
                '';

            targetElement.value = newValue;
        }
    });
};

const somInput = document.querySelector('#som');
const usdInput = document.querySelector('#usd');
const eurInput = document.querySelector('#eur');

somInput.addEventListener('input', () => convertCurrency(somInput, [usdInput, eurInput], 'som'));
usdInput.addEventListener('input', () => convertCurrency(usdInput, [somInput, eurInput], 'usd'));
eurInput.addEventListener('input', () => convertCurrency(eurInput, [somInput, usdInput], 'eur'));

// Загрузка данных при загрузке страницы
fetchData();

//Card Switcher
const cards = [];
for (let i = 1; i <= 200; i++) {
    cards.push(`Содержимое карточки ${i}`);
}

const cardContainer = document.querySelector('.card');
const btnPrev = document.querySelector('#btn-prev');
const btnNext = document.querySelector('#btn-next');

let currentCardIndex = 0;
updateCard();

function updateCard() {
    cardContainer.innerHTML = cards[currentCardIndex];
}

function prevCard() {
    currentCardIndex = (currentCardIndex - 1 + cards.length) % cards.length;
    updateCard();
}

function nextCard() {
    currentCardIndex = (currentCardIndex + 1) % cards.length;
    updateCard();
}

function handleButtonClick(event) {
    if (event.target.id === 'btn-prev') {
        prevCard();
    } else if (event.target.id === 'btn-next') {
        nextCard();
    }
}

document.querySelector('.inner_card_switcher').addEventListener('click', handleButtonClick);

window.addEventListener('DOMContentLoaded', () => {
    updateCard();
});

//2)
fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(data => {
        console.log('Data from the API:', data);
    })
    .catch(error => {
        console.error('Error fetching data:', error);
    });
