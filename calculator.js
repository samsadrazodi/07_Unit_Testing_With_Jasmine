window.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById("calc-form");
  if (form) {
    setupIntialValues();
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      update();
    });
  }
});

function getCurrentUIValues() {
  return {
    amount: +(document.getElementById("loan-amount").value),
    years: +(document.getElementById("loan-years").value),
    rate: +(document.getElementById("loan-rate").value),
  }
}

// Get the inputs from the DOM.
// Put some default values in the inputs
// Call a function to calculate the current monthly payment
function setupIntialValues() {
  const values = { amount: 100000, years: 30, rate: 5.6 }
  const UIamount = document.getElementById('loan-amount');
  UIamount.value = values.amount;
  const UIyear = document.getElementById('loan-years');
  UIyear.value = values.years;
  const UIrate = document.getElementById('loan-rate');
  UIrate.value = values.rate;
  update();
}

// Get the current values from the UI
// Update the monthly payment
function update() {

  const UI_Current_Values = getCurrentUIValues();
  updateMonthly(calculateMonthlyPayment(UI_Current_Values));

}

// Given an object of values (a value has amount, years and rate ),
// calculate the monthly payment.  The output should be a string
// that always has 2 decimal places.
function calculateMonthlyPayment(values) {
  const rate_monthly = (values.rate / 100) / 12;
  const n_terms = Math.floor(values.years * 12);
  return ((rate_monthly * values.amount) / (1 - Math.pow((1 + rate_monthly), -n_terms))).toFixed(2);

}

// Given a string representing the monthly payment value,
// update the UI to show the value.
function updateMonthly(monthly) {
  const UImonthly = document.getElementById("monthly-payment");
  UImonthly.innerText = `$${monthly}`;

}
