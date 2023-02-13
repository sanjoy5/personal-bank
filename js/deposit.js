

document.getElementById('deposit-btn').addEventListener('click', function () {
    const depositValue = getFieldValue('depositField');
    const amountValue = getAmountValue('depositAmount');

    if (isNaN(depositValue)) {
        alert("Invalid input!!! You have to enter only number value.")
        return;
    }

    const totalDeposit = depositValue + amountValue;
    setAmount('depositAmount', totalDeposit);

    const previousTotalAmount = getAmountValue('totalAmount')
    const newTotalAmount = previousTotalAmount + depositValue
    setAmount('totalAmount', newTotalAmount)
})