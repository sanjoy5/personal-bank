

document.getElementById('withdraw-btn').addEventListener('click', function () {

    const withdrawFieldValue = getFieldValue('withdrawField');
    const previousWithdrawAmount = getAmountValue('withdrawAmount');

    if (isNaN(withdrawFieldValue)) {
        alert("Invalid input!!! You have to enter only number value.")
        return;
    }
    const totalWithdraw = withdrawFieldValue + previousWithdrawAmount;
    setAmount('withdrawAmount', totalWithdraw)

    const previousTotalAmount = getAmountValue('totalAmount');
    const totalAmountValue = previousTotalAmount - withdrawFieldValue
    setAmount('totalAmount', totalAmountValue)
})