let start = document.getElementById('start')

let bd = document.getElementsByClassName('budget-value')[0],
    dayBD = document.getElementsByClassName('daybudget-value')[0],
    lv = document.getElementsByClassName('level-value')[0],
    exp = document.getElementsByClassName('expenses-value')[0],
    opt = document.getElementsByClassName('optionalexpenses-value')[0],
    inc = document.getElementsByClassName('income-value')[0],
    month = document.getElementsByClassName('monthsavings-value')[0],
    year = document.getElementsByClassName('yearsavings-value')[0]

let expALL = document.getElementsByClassName('expenses-item')

let expBtn = document.getElementsByTagName('button')[0],
    optExpBtn = document.getElementsByTagName('button')[1],
    countBtn = document.getElementsByTagName('button')[2]

let optItem = document.querySelectorAll('.optionalexpenses-item'),
    incomeItem = document.querySelector('.choose-income'),
	checkSavings = document.querySelector('#savings'),
	sumValue = document.querySelector('.choose-sum'),
    percentValue = document.querySelector('.choose-percent'),
    yearValue = document.querySelector('.year-value'),
    monthValue = document.querySelector('.month-value'),
    dayValue = document.querySelector('.day-value');

let money,time;


start.addEventListener('click', function(){
    time = prompt('Введите дату в формате YYYY-MM-DD', '');
    money = prompt("ваш бюджет на месяц?", '');

    while(isNaN(money) || money == "" || money == null){
        money = prompt("ваш бюджет на месяц?", '');
    };
    appData.budget = money;
    appData.timeData = time;
    bd.textContent = money;
    yearValue.value = new Date(Date.parse(time)).getFullYear();
    monthValue.value = new Date(Date.parse(time)).getMonth() + 1;
    dayValue.value = new Date(Date.parse(time)).getDay();
})

expBtn.addEventListener('click', function(){
    let sum = 0

        for ( let i = 0; i < expALL.length; i++) {
            let a = expALL[i].value,
                b = expALL[++i].value;
        
            if( (typeof(a)) === 'string' && (typeof(a)) != null && (typeof(b)) != null 
            && a != '' && b != '') {
                console.log('ok');
                appData.expenses[a] = b;
                sum += +b;
            } else {
                console.log('pls, don`t null')
                i = i - 1;
            }
        };
        exp.textContent = sum;
})

optExpBtn.addEventListener('click', function(){
    for( let i = 0; i < optItem.length; i++) {
            let optExp = optItem[i].value;
            appData.optionalExpenses[i] = optExp;
            opt.textContent += appData.optionalExpenses[i] + ' ';  
        }
})

countBtn.addEventListener('click', function(){
    if( appData.budget != undefined){
        appData.moneyPerDay = (appData.budget / 30).toFixed();
        dayBD.textContent = appData.moneyPerDay;

        if ( appData.moneyPerDay < 100) {
                lv.textContent = "низкий уровень ";
            } else if( appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
                lv.textContent = 'средний уровень ';
            } else if ( appData.moneyPerDay > 2000) {
                lv.textContent = 'высокий уровень';
            } else {
                lv.textContent = 'ошибка';
            }
    } else {
        dayBD.textContent = 'произошла ошибка';
    }
})

incomeItem.addEventListener('input', function(){
    let item = incomeItem.value;
    appData.income = item.split(', ');
    inc.textContent = appData.income;
})

checkSavings.addEventListener('click', function(){
    if(appData.savings == true){
        appData.savings = false;
    } else {
        appData.savings = true;
    }
})

sumValue.addEventListener('input', function(){
    if (appData.savings == true) {
        let sum = +sumValue.value;
        let percent = +percentValue.value;
        appData.monthIncome = sum/100/12*percent;
        appData.yearIncome = sum/100*percent;
        month.textContent = appData.monthIncome.toFixed(1);
        year.textContent = appData.yearIncome.toFixed(1);
    }
})

percentValue.addEventListener('input', function(){
    if(appData.savings == true){
        if (appData.savings == true) {
        let sum = +sumValue.value;
        let percent = +percentValue.value;
        appData.monthIncome = sum/100/12*percent;
        appData.yearIncome = sum/100*percent;
        month.textContent = appData.monthIncome.toFixed(1);
        year.textContent = appData.yearIncome.toFixed(1);
    }
    }
})


let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false,
    expension: function () {
        
    },
    dayBudgetDetected: function () {


        alert("ежедневный бюджет:" + appData.moneyPerDay);
    },
    detectLevel: function () {
        
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



// appData.chooseIncome();


// console.log(appData);

// for (let key in appData) {
//     console.log("Наша программа включает в себя данные: " + appData + appData[key]);
// }