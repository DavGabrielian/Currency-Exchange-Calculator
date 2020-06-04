const crrncy = { AMD: { USD: 0.0021 }, USD: { AMD: 482.11 } };
const btn = document.querySelector(".calculate-btn");
const firstCurrencyInput = document.getElementById("currency-1");
const secondCurrencyInput = document.getElementById("currency-2");
const amountInput = document.getElementById("amount");
const toShowAmount = document.querySelector(".given-amount");
const toShowFirst = document.querySelector(".first-currency");
const toShowSecond = document.querySelector(".second-currency");
const toShowResult = document.querySelector(".final-result");

function convertCurrency(e) {
  e.preventDefault();
  let amount = amountInput.value;
  let from = firstCurrencyInput.value;
  let to = secondCurrencyInput.value;
  let result = 0;

  if (from == to) {
    result = amount;
  } else {
    result = amount * crrncy[from][to];
  }

  toShowAmount.innerHTML = amount;
  toShowFirst.textContent = from + " = ";
  toShowSecond.textContent = to;
  toShowResult.textContent = result;
}

btn.addEventListener("click", convertCurrency);
