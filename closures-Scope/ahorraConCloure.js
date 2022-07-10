

function moneyBox(){
    let saveCoins = 0;
    function countCoints(coins){
        saveCoins += coins;
        console.log(`MoneyBox acumulado de: $${saveCoins}`)
    }
    return countCoints;
}

const myMoneyBox = moneyBox();
myMoneyBox(15)
myMoneyBox(15)
myMoneyBox(15)

const moneyCecyBox = moneyBox();
moneyCecyBox(10)
moneyCecyBox(10)
moneyCecyBox(10)
moneyCecyBox(10)