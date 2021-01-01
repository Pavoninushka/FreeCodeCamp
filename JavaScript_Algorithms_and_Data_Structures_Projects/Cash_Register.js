const currencyUnits = [
    ["ONE HUNDRED", 100],
    ["TWENTY", 20],
    ["TEN", 10],
    ["FIVE", 5],
    ["ONE", 1],
    ["QUARTER", 0.25],
    ["DIME", 0.1],
    ["NICKEL", 0.05],
    ["PENNY", 0.01],
];

function countTotalIn(cid) {
    let totalAmount = 0;
    for (let [_, amount] of cid) {
        totalAmount = Number((totalAmount + amount).toFixed(2));
    }
    return totalAmount;
}

function changeToGive(totalChange, cid) {
    let change = [];
    for (let [currency, value] of currencyUnits) {
        let desiredUnits = Math.floor(totalChange / value);
        let [_, availableTotal] = cid.find(item => item[0] === currency);
        let availableUnits = Math.floor(availableTotal / value);
        let countUnits = Math.min(desiredUnits, availableUnits);

        if (countUnits > 0) {
            change.unshift([currency, countUnits * value]);
            totalChange = (totalChange - (countUnits * value)).toFixed(2);
        }
    }
    change.sort((a, b) => {
        return b[1] - a[1];
    });
    return change;
}

function checkCashRegister(price, cash, cid) {
    let totalChange = cash - price;
    let totalCurrentInCid = countTotalIn(cid);

    if (totalCurrentInCid < totalChange) {
        return {status: "INSUFFICIENT_FUNDS", change: []};
    } else if (totalCurrentInCid === totalChange) {
        return {status: "CLOSED", change: cid};
    } else {
        let change = changeToGive(totalChange, cid);
        if (countTotalIn(change) === totalChange) {
            return {status: "OPEN", change: change};
        } else {
            return {status: "INSUFFICIENT_FUNDS", change: []};
        }
    }
}

console.log(checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]));
