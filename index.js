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
    income: [],
    saving: true,
    expension: function () {
        for ( let i = 0; i < 2; i++) {
            let a = prompt('обязательная статья расходов'),
                b = prompt('во сколько это обойдётся');
        
            if( (typeof(a)) === 'string' && (typeof(a)) != null && (typeof(b)) != null 
            && a != '' && b != '') {
                console.log('ok');
                appData.expenses[a] = b;
            } else {
                console.log('pls, don`t null')
                i = i - 1;
            }
        };
    },
    dayBudgetDetected: function () {
        appData.moneyPerDay = (appData.budget / 30).toFixed();

        alert("ежедневный бюджет:" + appData.moneyPerDay);
    },
    detectLevel: function () {
        if ( appData.moneyPerDay < 100) {
            console.log("низкий уровень ");
        } else if( appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
            console.log('средний уровень ');
        } else if ( appData.moneyPerDay > 2000) {
            console.log('высокий уровень');
        } else {
            console.log('ошибка');
        }
    },
    deposit: function () {
        if (appData.saving == true) {
            let save = prompt('какова сумма накоплений'),
                present = prompt('под какой процент?');
    
            appData.saveValue = save/100/12*present;
    
            alert('ваш депозит' + appData.saveValue);
        }
    },
    chooseOptExpenses: function () {
        for( let i = 0; i < 3; i++) {
            let optExp = prompt("введите необязательные расходы");
            appData.optionalExpenses[i] = optExp;
        }
    },
    chooseIncome: function () { 
        let items = prompt('что принесёт дополнительный доход?');

        if ( typeof(items) != "string"  || items == '' || typeof(items) === null) {
            console.log('retry');
        } else {
            appData.income = items.split();
            appData.income.sort();
        }

        appData.income.forEach( function(item, i) {
            alert("Способы доп.заработка " + (i+1) + item);
        });
    }
};



appData.chooseIncome();


console.log(appData);

for (let key in appData) {
    console.log("Наша программа включает в себя данные: " + appData + appData[key]);
}