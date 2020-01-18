'use strict';

let money = +prompt("Ваш бюджет на месяц?", "1000");
let time = prompt("Введите дату в формет YYYY-MM-DD", "1125-11-28");


let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false
};

for (let i = 0; i < 2; i++) {
    let item = prompt("Введите обязательную статью рассходов в этом месяце", "Еда");
    let itemCost = +prompt("Во сколько обойдется?", "5000");

    if (
        (typeof (item)) != null &&
        (typeof (itemCost)) != null &&
        (typeof (item)) != '' &&
        (typeof (itemCost)) != '' &&
        item.length < 50
    ) {
        appData.expenses[item] = itemCost;
    } else {

    }

}


appData.moneyPerDay = appData.budget / 30;

alert("Ежедневный бюджет: " + appData.moneyPerDay);

if (appData.moneyPerDay < 100) {
    console.log("Миннимальный уровень достатка");
} else if (appData.moneyPerDay < 2000) {
    console.log("Средний уровень достатка");
} else if (appData.moneyPerDay >= 2000) {
    console.log("Высокий уровень достатка");
} else {
    console.log("Ошибка");
}