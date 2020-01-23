'use strict';

let resultTable = document.querySelector('.result-table');

// ---- Right column Value
let budgetVal = resultTable.querySelector('.budget-value');
let dayBudgetVal = resultTable.querySelector('.dabudget-value');
let levelVal = resultTable.querySelector('.level-value');
let expensesVal = resultTable.querySelector('.expenses-value');
let optExpensesVal = resultTable.querySelector('.optionalexpenses-value');
let incomeVal = resultTable.querySelector('.income-value');
let mothSavingsVal = resultTable.querySelector('.mothsavings-value');
let yearSavingsVal = resultTable.querySelector('.yearsavings-value');

// ---- Input items
let expensesItems = document.querySelectorAll('.expenses-item');
let optExpensesItems = document.querySelectorAll('.optionalexpenses-item');

let chooseIncome = document.querySelector('.choose-income');
let chooseSum = document.querySelector('.choose-sum');
let choosePercent = document.querySelector('.choose-percent');

let yearValue = document.querySelector('.year-value');
let monthValue = document.querySelector('.month-value');
let dayValue = document.querySelector('.day-value');

let checkBoxSavings = document.querySelector('#savings');

// ---- Buttons
let buttonStart = document.querySelector('#start');

let approveBtnExpenses = document.querySelector('.expenses-item-btn');

let approveBtnOptExpenses = document.querySelector('.optionalexpenses-btn');
let countBtnOptExpenses = document.querySelector('.count-budget-btn');


// ---- Data

let appData = {
    budget: null,
    timeData: null,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: true,
    chooseExpenses: function () {
        
    },
    detectDayBudget: function () {
        appData.moneyPerDay = (appData.budget / 30).toFixed(2);

        alert("Ежедневный бюджет: " + appData.moneyPerDay);
    },
    detectLevel: function () {
        if (appData.moneyPerDay < 100) {
            console.log("Миннимальный уровень достатка");
        } else if (appData.moneyPerDay < 2000) {
            console.log("Средний уровень достатка");
        } else if (appData.moneyPerDay >= 2000) {
            console.log("Высокий уровень достатка");
        } else {
            console.log("Ошибка");
        }
    },
    checkSavings: function () {
        if (appData.savings == true) {
            let save = +prompt('Какова сумма накоплений?', '');
            let percent = +prompt('Под какой процент?');

            appData.monthIncome = save / 100 / 12 * percent;
            alert('Доход в месяц с Вашего депозита: ' + appData.monthIncome.toFixed(2));
        }
    },
    chooseOptExpenses: function () {

        for (let i = 0; i < 3; i++) {

            let optExpensesItem = prompt("Статья необязательных расходов?");

            appData.optionalExpenses[i] = optExpensesItem;
        }
    },
    chooseIncome: function () {

        let unCorrect = true;
        do {
            let items = prompt('Что принесет дополнительный доход? (Перечислите через запятую', '');

            if (items != '' &&
                items != null
            ) {
                appData.income = items.split(', ');
                unCorrect = false;
            }
        } while (unCorrect);

        appData.income.push(prompt('Может что-то еще?', ''));
        appData.income.sort();

        console.log("Способы доп. заработка:")
        appData.income.forEach(function (item, i, arr) {
            console.log(i+1 + ': ' + item);
        });
    }
};

// console.log ('Наша программа включает в себя:');
// for (let key in appData) {
//     console.log(key);
// };


//----- Events

buttonStart.addEventListener('click', function(){

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

approveBtnExpenses.addEventListener('click', function(){

    let sum = 0;

    for (let i = 0; i < expensesItems.length; i++) {

        let item = expensesItems[i].value;
        let itemCost = expensesItems[++i].value;

        if (
            item != null &&
            itemCost != null &&
            item != '' &&
            itemCost != '' &&
            item.length < 50
        ) {
            appData.expenses[item] = itemCost;
            sum += +itemCost;

        } else {
            --i;
        };
    };

});

//----- 


//=======functions==========


function show(val) {
    console.log(val);
    console.log(typeof (val));
}