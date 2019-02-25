
'use strict';
var money, time,list,cost;
money=prompt("Ваш бюджет на месяц");
time=prompt("Введите дату в формате YY-MM-DD");
var appData={};
appData.money=money;
appData.timeData=time;
appData.expenses={};
appData.optionalExpenses={};
appData.income=[];
appData.saving=false;
for(var i=1;i<3;i++){
    list=prompt('Введите обязательную статью расходов в этом месяце');
    cost=prompt("Во сколько это обойдётся?");
    }
appData.expenses={
    list:   cost
};
alert (+money/30);