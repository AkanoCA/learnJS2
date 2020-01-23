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

let checkBoxSavings = document.querySelector('#savings');

// ---- Buttons
let buttonStart = document.querySelector('#start');

let approveBtnExpenses = document.querySelector('.expenses-item-btn');

let approveBtnOptExpenses = document.querySelector('.optionalexpenses-btn');
let countBtnOptExpenses = document.querySelector('.count-budget-btn');