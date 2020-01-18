'use strict';

let money = prompt("Ваш бюджет на месяц?", "1000");
let time = prompt("Введите дату в формет YYYY-MM-DD", "1125-11-28");


let appData = {
    budget : money,
    timeData : time,
    expenses : {},
    optionalExpenses : {},
    income : [],
    savings : false
};

for ( let i = 0; i < 2; i++){
    let item = prompt("Введите обязательную статью рассходов в этом месяце", "Еда");
    let itemCost = prompt("Во сколько обойдется?", "5000");
    appData.expenses[item] = itemCost;
}


alert(+appData.budget / 30);