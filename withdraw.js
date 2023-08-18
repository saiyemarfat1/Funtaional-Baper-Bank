document.getElementById('btn-withdraw').addEventListener('click', function () {
    const withdrawButton = document.getElementById('withdraw-field')
    const withdrawAddedButtonString = withdrawButton.value;
    const withdrawAddedButton = parseFloat(withdrawAddedButtonString)

    withdrawButton.value = '';

    if (isNaN(withdrawAddedButton)) {
        alert('Please Provide a valid number');
        return;
    }

    const withdrawAmount = document.getElementById('withdraw-amount')
    const newWithdrawAmountString = withdrawAmount.innerText;
    const newWithdrawAmount = parseFloat(newWithdrawAmountString)

    const finalWithdrawAdded = newWithdrawAmount + withdrawAddedButton;
    withdrawAmount.innerText = finalWithdrawAdded




    const newBlanceTotalAdded = document.getElementById('blance-total')
    const blanceTotalFinalString = newBlanceTotalAdded.innerText;
    const blanceTotalFinal = parseFloat(blanceTotalFinalString)

    const finalNewOneBlance = blanceTotalFinal - withdrawAddedButton
    newBlanceTotalAdded.innerText = finalNewOneBlance



















})