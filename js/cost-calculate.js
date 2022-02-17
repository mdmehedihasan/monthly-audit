//per item cost function
function monthly_cost(item_name) {
    const item_cost = parseFloat(document.getElementById(item_name + '_expense').value);
    return item_cost;
}

//total balance 
function total_balance(total_monthly_expense) {
    let get_total_monthly_expense = total_monthly_expense;
    const income_total = parseFloat(document.getElementById('income').value);
    const newBalance = income_total - get_total_monthly_expense;
    return newBalance;
}
document.getElementById('calculate_button').addEventListener('click', function () {
    const food_monthly_expense = monthly_cost('food');
    const rent_monthly_expense = monthly_cost('rent')
    const clothes_monthly_expense = monthly_cost('clothes');
    const total_monthly_expense = food_monthly_expense + rent_monthly_expense + clothes_monthly_expense;

    //total cost 
    let total_cost = document.getElementById('total_expense');
    let total_cost_price = parseFloat(total_cost.innerText);
    total_cost.innerText = total_monthly_expense;

    // total balance function call
    const all_total_balance = total_balance(total_monthly_expense);

    //where to show balance
    let balance_total = document.getElementById('balance');
    let balance_price = parseFloat(balance_total.innerText);
    balance_total.innerText = all_total_balance;
})
//percentage
document.getElementById('save_button').addEventListener('click', function () {
    let balance_total = document.getElementById('balance');
    let balance_price = parseFloat(balance_total.innerText);
    //saving ammount
    const percentage_number = parseFloat(document.getElementById('save_input').value);
    const percentage = balance_price / percentage_number;

    //where to show saving amount
    let saving_amount_balance = document.getElementById('saving_amount');
    let saving_amount_total = parseFloat(saving_amount_balance.innerText);
    saving_amount_balance.innerText = percentage;

})