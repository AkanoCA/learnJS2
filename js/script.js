'use strict';

let resultTable = document.querySelector('.result-table');

// ---- Right column Value
let budgetVal = resultTable.querySelector('.budget-value');
let dayBudgetVal = resultTable.querySelector('.daybudget-value');
let levelVal = resultTable.querySelector('.level-value');
let expensesVal = resultTable.querySelector('.expenses-value');
let optExpensesVal = resultTable.querySelector('.optionalexpenses-value');
let incomeVal = resultTable.querySelector('.income-value');
let monthSavingsVal = resultTable.querySelector('.monthsavings-value');
let yearSavingsVal = resultTable.querySelector('.yearsavings-value');

// ---- Input items
let expensesItems = document.querySelectorAll('.expenses-item');
let optExpensesItems = document.querySelectorAll('.optionalexpenses-item');

let chooseIncome = document.querySelector('.choose-income');
let sumVal = document.querySelector('.choose-sum');
let percentVal = document.querySelector('.choose-percent');

let yearValue = document.querySelector('.year-value');
let monthValue = document.querySelector('.month-value');
let dayValue = document.querySelector('.day-value');

let checkBoxSavings = document.querySelector('#savings');

// ---- Buttons
let buttonStart = document.querySelector('#start');

let approveBtnExpenses = document.querySelector('.expenses-item-btn');

let approveBtnOptExpenses = document.querySelector('.optionalexpenses-btn');
let countBtn = document.querySelector('.count-budget-btn');


// ---- Data

let appData = {
    budget: null,
    timeData: null,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false
};


//----- Events

buttonStart.addEventListener('click', function () {

    let money, time;

    time = prompt("Введите дату в формет YYYY-MM-DD", "1125-11-28");

    do {

        money = +prompt("Ваш бюджет на месяц?", "30000");

    } while (isNaN(money) || money == '' || money == null);

    appData.budget = money;
    appData.timeData = time;
    budgetVal.textContent = money.toFixed();

    yearValue.value = new Date(Date.parse(time)).getFullYear()
    monthValue.value = new Date(Date.parse(time)).getMonth() + 1;
    dayValue.value = new Date(Date.parse(time)).getDate();

});

approveBtnExpenses.addEventListener('click', function () {

    let sum = 0;

    for (let i = 0; i < expensesItems.length; i += 2) {

        let item = expensesItems[i].value;
        let itemCost = expensesItems[i + 1].value;

        if (
            item != null &&
            itemCost != null &&
            item != '' &&
            itemCost != '' &&
            item.length < 50
        ) {
            appData.expenses[item] = itemCost;
            sum += +itemCost;
        }
    }

    expensesVal.textContent = sum;

});

approveBtnOptExpenses.addEventListener('click', function () {

    for (let i = 0; i < optExpensesItems.length; i++) {

        let optExpensesItem = +optExpensesItems[i].value;

        if (optExpensesItem != '' && optExpensesItem != null) {

            appData.optionalExpenses[i] = optExpensesItem;

            optExpensesVal.textContent += optExpensesItem + ' ';
        }


    }

});

countBtn.addEventListener('click', function () {

    if (appData.budget != null) {
        appData.moneyPerDay = (appData.budget / 30).toFixed();
        dayBudgetVal.textContent = appData.moneyPerDay;

        if (appData.moneyPerDay < 100) {
            levelVal.textContent = "Миннимальный уровень достатка";
        } else if (appData.moneyPerDay < 2000) {
            levelVal.textContent = "Средний уровень достатка";
        } else if (appData.moneyPerDay >= 2000) {
            levelVal.textContent = "Высокий уровень достатка";
        } else {
            levelVal.textContent = "Ошибка";
        }
    } else {
        alert('Сначала нужно нажать на кнопку "Начать рассчет" и ввести бюджет');
    }
});


chooseIncome.addEventListener('input', function () {

    let items = chooseIncome.value;
    appData.income = items.split(', ');

    incomeVal.textContent = items;
});

checkBoxSavings.addEventListener('click', function() {

    if (appData.savings == false) {
        appData.savings = true;
        savingsSum();
    } else {
        appData.savings = false;

        appData.monthIncome = null;
        monthSavingsVal.textContent = null;

        appData.yearIncome = null;
        yearSavingsVal.textContent = null;
    }
});

sumVal.addEventListener('input', function() {
    savingsSum();
});

percentVal.addEventListener('input', function() {
    savingsSum();
});
//----- 


//=======functions==========

function savingsSum (){

    if (appData.savings) {

        let sum = +sumVal.value;
        let percent = +percentVal.value;

        appData.monthIncome = sum / 100 / 12 * percent;
        appData.yearIncome = sum / 100 * percent;

        monthSavingsVal.textContent = appData.monthIncome.toFixed(1);
        yearSavingsVal.textContent = appData.yearIncome.toFixed(1);

    }
}

function show(val, i) {
    if (i >= 0) {
        console.log('-----------(' + i + ')');
    } else {
        console.log('-----------(*)');
    }
    console.log(val);
    console.log(typeof (val));
}