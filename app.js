const currencyEl_one = document.getElementById('currency-one');
const currencyEl_two = document.getElementById('currency-two');
const amountEl_one = document.getElementById('amount-one');
const amountEl_two = document.getElementById('amount-two');

const rateEl = document.getElementById('rate');
const swap = document.getElementById('swap');

// fetch exchange rates and update DOM
const calculate =async()=>{
const currency_one = currencyEl_one.value; 
const currency_two = currencyEl_two.value;

const URL = `https://prime.exchangerate-api.com/v5/7b69d83b1523c9285bdbfa43/latest/${currency_one}`;
const res = await fetch(URL);
const data = await res.json()
const {conversion_rates} = data
const rate = conversion_rates[currency_two];

rateEl.innerText = `1 ${currency_one} = ${rate} ${currency_two}`;

amountEl_two.value = (amountEl_one.value*rate).toFixed(2)

}

// Even Listeners
currencyEl_one.addEventListener('change',calculate)
amountEl_one.addEventListener('input',calculate)
currencyEl_two.addEventListener('change',calculate)
amountEl_two.addEventListener('input',calculate)


calculate()