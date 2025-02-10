'use strict'

let money = prompt("ваш бюджет на месяц?")
let time = prompt("Введите дату в формате YYYY-MM-DD")

let arr = [];

let me = prompt('Введите обязательную статью расходов в этом месяце')
let sum = prompt('во сколько обойдётся')

let expenses = {
        me,
        sum
    }


let appData = {
    budget: money,
    timeData: time,
    expenses,
    optionalExpenses: null,
    arr,
    saving: false
}

alert(appData.budget / 30);