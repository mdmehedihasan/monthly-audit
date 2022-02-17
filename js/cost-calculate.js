//per item cost function
function monthly_cost(item_name) {
    const item_cost = parseFloat(document.getElementById(item_name + '_expense').value);
    if (item_cost < 0) {
        return alert('Please put a positive value in ' + item_name + ' field');
    }
    return item_cost;
}

//total balance 
function total_balance(total_monthly_expense) {
    const income_total = parseFloat(document.getElementById('income').value);
    //error handle for negative input of Income
    const newBalance = income_total - total_monthly_expense;
    return newBalance;
}
document.getElementById('calculate_button').addEventListener('click', function () {
    const food_monthly_expense = monthly_cost('food');
    const rent_monthly_expense = monthly_cost('rent')
    const clothes_monthly_expense = monthly_cost('clothes');
    const total_monthly_expense = food_monthly_expense + rent_monthly_expense + clothes_monthly_expense;

    // total balance function call
    const all_total_balance = total_balance(total_monthly_expense);
    //negative income error handle
    if (all_total_balance < 0) {
        return alert('Salary is less than 0');
    }
    if (total_monthly_expense > all_total_balance) {
        document.getElementById('notification_message').style.display = 'block';
        return alert('Salary is less than cost');
    }


    //total cost 
    let total_cost = document.getElementById('total_expense');
    let total_cost_price = parseFloat(total_cost.innerText);


    let balance_total = document.getElementById('balance');
    let balance_price = parseFloat(balance_total.innerText);


    //where to show balance
    total_cost.innerText = total_monthly_expense;
    balance_total.innerText = all_total_balance;
})
//percentage
document.getElementById('save_button').addEventListener('click', function () {
    let balance_total = document.getElementById('balance');
    let balance_price = parseFloat(balance_total.innerText);
    //saving ammount
    const percentage_number = parseFloat(document.getElementById('save_input').value);
    const percentage = (balance_price * percentage_number) / 100;

    //error for negative input in saving percentage
    if (percentage < 0) {
        return alert('Do not input minus number');
    }
    if (percentage > balance_price) {
        return alert('Saving is greatert than remaining balance');
    }


    //where to show saving amount
    let saving_amount_balance = document.getElementById('saving_amount');
    let saving_amount_total = parseFloat(saving_amount_balance.innerText);
    saving_amount_balance.innerText = percentage;

    //remaining balance
    const remaining_amount = document.getElementById('remaining_balance');
    const remaining_amount_balance = parseFloat(remaining_amount.innerText);

    //where to show remaining balance
    remaining_amount.innerText = balance_price - percentage;
})