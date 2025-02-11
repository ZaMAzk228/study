let money,time;


function start() {
    money = prompt("ваш бюджет на месяц?", '');
    time = prompt("Введите дату в формате YYYY-MM-DD", '');

    while(isNaN(money) || money == "" || money == null){
        money = prompt("ваш бюджет на месяц?", '');
    };
}

start();

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    arr:[],
    saving: true
};

function expension(){
    for ( let i = 0; i < 2; i++) {
        let a = prompt('обязательная статья расходов'),
            b = prompt('во сколько это обойдётся');
    
        if( (typeof(a)) === 'string' && (typeof(a)) != null && (typeof(b)) != null 
        && a != '' && b != '') {
            console.log('ok');
            appData.expenses[a] = b;
        } else {
            console.log('pls, don`t null')
        }
    };
}

expension();

function dayBudgetDetected () {
    appData.moneyPerDay = (appData.budget / 30).toFixed();

    alert("ежедневный бюджет:" + appData.moneyPerDay);
}

dayBudgetDetected();

function detectLevel () {
    if ( appData.moneyPerDay < 100) {
        console.log("низкий уровень ");
    } else if( appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
        console.log('средний уровень ');
    } else if ( appData.moneyPerDay > 2000) {
        console.log('высокий уровень');
    } else {
        console.log('ошибка');
    }
}
detectLevel();

function deposit() {
    if (appData.saving == true) {
        let save = prompt('какова сумма накоплений'),
            present = prompt('под какой процент?');

        appData.saveValue = save/100/12*present;

        alert('ваш депозит' + appData.saveValue);
    }
}
deposit();

function chooseOptExpenses () {
    for( let i = 0; i < 3; i++) {
        let optExp = prompt("введите необязательные расходы");
        appData.optionalExpenses[i] = optExp;
    }
}
chooseOptExpenses();

console.log(appData);