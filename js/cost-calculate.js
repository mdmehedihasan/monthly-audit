document.getElementById('calculate_button').addEventListener('click', function () {
    const food_monthly_expense = parseFloat(document.getElementById('food_expense').value);
    const rent_monthly_expense = parseFloat(document.getElementById('rent_expense').value);
    const clothes_monthly_expense = parseFloat(document.getElementById('clothes_expense').value);
    const total_monthly_expense = food_monthly_expense + rent_monthly_expense + clothes_monthly_expense;
    // console.log(total_monthly_expense);

    let total_cost = document.getElementById('total_expense');
    let total_cost_price = parseFloat(total_cost.innerText);
    total_cost_price = 0;
    total_cost.innerText = total_monthly_expense + total_cost_price;
    // console.log(total_cost);

    let balance_total = document.getElementById('balance');
    let balance_price = parseFloat(balance_total.innerText);
    balance_price = 0;
    const income_total = parseFloat(document.getElementById('income').value);
    const newBalance = income_total - total_monthly_expense;
    balance_total.innerText = balance_price + newBalance;
    // console.log(newBalance);
})