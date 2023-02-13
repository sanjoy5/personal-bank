

function getFieldValue(fieldId) {
    const inputField = document.getElementById(fieldId);
    const inputFieldValueStr = inputField.value;
    const inputFieldValue = parseFloat(inputFieldValueStr);
    inputField.value = ''
    return inputFieldValue;
}


function getAmountValue(amountId) {
    const amountValue = document.getElementById(amountId);
    const amountValueStr = amountValue.innerText;
    const amount = parseFloat(amountValueStr);
    return amount;
}

function setAmount(amountId, totalAmout) {
    const amountValueId = document.getElementById(amountId)
    amountValueId.innerText = totalAmout;

}
