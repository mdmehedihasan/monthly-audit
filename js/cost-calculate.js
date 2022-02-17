//per item cost function
function monthly_cost(item_name) {
    const item_cost = parseFloat(document.getElementById(item_name + '_expense').value);
    return item_cost;
}

//total balance 
function total_balance(total_monthly_expense) {
    const income_total = parseFloat(document.getElementById('income').value);
    const newBalance = income_total - total_monthly_expense;
    return newBalance;
}

//calculate button 
document.getElementById('calculate_button').addEventListener('click', function () {

    const food_monthly_expense = monthly_cost('food');
    if (food_monthly_expense < 0) {
        return alert('Please put a positive value in Food Field ');
    }
    const rent_monthly_expense = monthly_cost('rent')
    if (rent_monthly_expense < 0) {
        return alert('Please put a positive value in Rent Field');
    }
    const clothes_monthly_expense = monthly_cost('clothes');
    if (clothes_monthly_expense < 0) {
        return alert('Please put a positive value in Clothes Field');
    }

    //total expense calculation
    const total_monthly_expense = food_monthly_expense + rent_monthly_expense + clothes_monthly_expense;

    //function call for total balance
    const all_total_balance = total_balance(total_monthly_expense);

    //negative income error handle
    const income_total = parseFloat(document.getElementById('income').value);
    if (income_total == 0) {
        return alert('Your Input Salary Field is Blank. ');
    }
    if (income_total < 0) {
        return alert('Salary is less than 0');
    }

    //total balance is less than the cost error handle
    if (total_monthly_expense > all_total_balance) {
        document.getElementById('notification_message').style.display = 'block';
        return alert('Salary is less than cost');
    }

    //total cost 
    let total_cost = document.getElementById('total_expense');
    let total_cost_price = parseFloat(total_cost.innerText);

    //where to show cost
    total_cost.innerText = total_monthly_expense;

    let balance_total = document.getElementById('balance');
    let balance_price = parseFloat(balance_total.innerText);

    //where to show balance
    balance_total.innerText = all_total_balance;
})
//saving percentage button
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