let money = prompt("ваш бюджет на месяц?", '')
let time = prompt("Введите дату в формате YYYY-MM-DD", '');

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    arr:[],
    saving: false
};

for (let i = 0; i < 2; i++) {
    let a = prompt("введите обязательную статью расходов в этом месяце", ''),
        b = prompt("во сколько обойдётся?", '');

    if ( (typeof(a)) === 'string' && (typeof(a)) != null && (typeof(b)) != null 
        && a != '' && b != '') {
        console.log("done");
        appData.expenses[a] = b;
    }
};

appData.moneyPerDay = appData.budget / 30;

alert("ежедневный бюджет:" + appData.moneyPerDay);