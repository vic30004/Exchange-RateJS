const currencyEl_one = document.getElementById('currency-one');
const currencyEl_two = document.getElementById('currency-two');
const amountEl_one = document.getElementById('amount-one');
const amountEl_two = document.getElementById('amount-two');

const rateEl = document.getElementById('rate');
const swap = document.getElementById('swap');

// fetch exchange rates and update DOM
function calculate(){

}

// Even Listeners
currencyEl_one.addEventListener('change',calculate)
amountEl_one.addEventListener('input',calculate)
currencyEl_two.addEventListener('change',calculate)
amountEl_two.addEventListener('input',calculate)


calculate()