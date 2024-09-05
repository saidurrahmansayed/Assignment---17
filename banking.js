document.getElementById('deposit-button').addEventListener('click', function(){
    // get deposit input form html tag and convert it number
    const depositInputField = document.getElementById('deposit-input');
    const depositInputText = depositInputField.value;
    const newDepositeAmount = parseFloat(depositInputText);

    // get previous deposite number and convert it number
    const depositTotal = document.getElementById('deposit-total');
    const previousDepositeText = depositTotal.innerText;
    const previousDepoditAmount = parseFloat(previousDepositeText);

    // add previous deposite with new deposite and update in previous deposite htnl tag
    const newDepositeTotal = previousDepoditAmount + newDepositeAmount;
    depositTotal.innerText = newDepositeTotal;

    // clear the input value 
    depositInputField.value =''

    // update new balance
    const previousBalanceToatal = document.getElementById('balance-total');
    const previousBalanceTotalText = previousBalanceToatal.innerText;
    const previousBalanceamount = parseFloat(previousBalanceTotalText);
    const newBalanceTotal = previousBalanceamount + newDepositeAmount;

    previousBalanceToatal.innerText = newBalanceTotal
});

document.getElementById('withdraw-button').addEventListener('click', function(){
    // get withdraw input form html tag and convert it number
    const withdrawInputField = document.getElementById('withdraw-input');
    const withdrawInputText = withdrawInputField.value;
    const withdrawInputAmount = parseFloat(withdrawInputText);

    // get previous deposite number and convert it number
    const withdrawTotal = document.getElementById('withdraw-total');
    const previousWithdrawText = withdrawTotal.innerText;
    const previousWithdrawAmount = parseFloat(previousWithdrawText);

    // add previous withdraw with new deposite and update in previous deposite htnl tag
    const newWithdrawTotal = previousWithdrawAmount + withdrawInputAmount;
    withdrawTotal.innerText = newWithdrawTotal

    // update new balance
    const previousBalanceToatal = document.getElementById('balance-total');
    const previousBalanceTotalText = previousBalanceToatal.innerText;
    const previousBalanceamount = parseFloat(previousBalanceTotalText);
    const newBalanceTotal = previousBalanceamount - withdrawInputAmount;
    previousBalanceToatal.innerText = newBalanceTotal

    // clear the input value
    withdrawInputField.value = ''

});