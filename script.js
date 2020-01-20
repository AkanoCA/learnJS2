'use strict';

let money,
    time;

start();

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: true
};

chooseExpenses();
chooseOptExpenses();
checkSavings();
detectDayBudget();




if (appData.moneyPerDay < 100) {
    console.log("Миннимальный уровень достатка");
} else if (appData.moneyPerDay < 2000) {
    console.log("Средний уровень достатка");
} else if (appData.moneyPerDay >= 2000) {
    console.log("Высокий уровень достатка");
} else {
    console.log("Ошибка");
}


//=======functions==========

function show(val) {
    console.log(val);
    console.log(typeof(val));
}

function start () {

    do{

        money = +prompt("Ваш бюджет на месяц?", "1000"); 

    } while(isNaN(money) || money == '' || money == null);

    time = prompt("Введите дату в формет YYYY-MM-DD", "1125-11-28");
}

function chooseExpenses() {

    for (let i = 0; i < 2; i++) {

        let item = prompt("Введите обязательную статью рассходов в этом месяце", "");
        let itemCost = +prompt("Во сколько обойдется?", "");

        if (
            item != null &&
            itemCost != null &&
            item != '' &&
            itemCost != '' &&
            item.length < 50
        ) {
            appData.expenses[item] = itemCost;
            
        } else {
            --i;
        };
    };
}

function checkSavings() {
    if (appData.savings == true) {
        let save = +prompt('Какова сумма накоплений?', '');
        let percent = +prompt('Под какой процент?');

        appData.monthIncome = save/100/12 * percent;
        alert('Доход в месяц с Вашего депозита: ' + appData.monthIncome.toFixed(2));
    }
}

function detectDayBudget () {
    appData.moneyPerDay = (appData.budget / 30).toFixed(2);

    alert("Ежедневный бюджет: " + appData.moneyPerDay);
}

function chooseOptExpenses () {

    for (let i = 0; i < 3; i++) {

        let optExpensesItem = prompt("Статья необязательных расходов?");

        appData.optionalExpenses[i] = optExpensesItem;
        }    
}