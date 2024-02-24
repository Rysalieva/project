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
