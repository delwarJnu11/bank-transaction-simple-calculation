//get input value 
function getInputValue(inputId) {
    const inputField = document.getElementById(inputId);
    const inputFieldValue = parseFloat(inputField.value);
    //clear input
    inputField.value = '';
    return inputFieldValue;
};
//update deposit and withdraw
function updateDepositWithdraw(depositWithdrawIdName, amount) {
    const depositWithdrawId = document.getElementById(depositWithdrawIdName);
    const previousAmount = parseFloat(depositWithdrawId.innerText);
    depositWithdrawId.innerText = previousAmount + amount;
};
//get current balance 
function getCurrentBalance() {
    const balance = document.getElementById('balance');
    const previousBalance = parseFloat(balance.innerText);
    return previousBalance;
}
//update balance
function updateBalance(amount, isAdd) {
    const balance = document.getElementById('balance');
    const previousBalance = getCurrentBalance();
    if (isAdd == true) {
        balance.innerText = previousBalance + amount;
    } else {
        balance.innerText = previousBalance - amount;
    }
};

//Deposit button handler
document.getElementById('deposit-button').addEventListener('click', function () {
    const depositAmount = getInputValue('deposit-input');
    if (depositAmount > 0) {
        updateDepositWithdraw('deposit', depositAmount);
        updateBalance(depositAmount, true);
    }
});
//Withdraw button handler
document.getElementById('withdraw-button').addEventListener('click', function () {
    const withdrawAmount = getInputValue('withdraw-input');
    const currentBalance = getCurrentBalance();
    if (withdrawAmount > 0 && currentBalance > withdrawAmount) {
        updateDepositWithdraw('withdraw', withdrawAmount);
        updateBalance(withdrawAmount, false);

    }
})