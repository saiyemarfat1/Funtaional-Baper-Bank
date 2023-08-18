document.getElementById('btn-diposit').addEventListener('click', function () {
    const dipositField = document.getElementById('diposit-field')
    const dipositFieldsString = dipositField.value;
    const dipositsFields = parseFloat(dipositFieldsString)

    dipositField.value = '';

    if (isNaN(dipositsFields)) {
        alert('Please Provide a valid number');
        return;
    }


    const dipositAmount = document.getElementById('diposit-amount')
    const newDipositString = dipositAmount.innerText;
    const newDiposit = parseFloat(newDipositString)

    const newDipositTotal = newDiposit + dipositsFields;
    dipositAmount.innerText = newDipositTotal

    const blanceTotalAdded = document.getElementById('blance-total')
    const newBlanceTotalString = blanceTotalAdded.innerText;
    const newBlanceTotal = parseFloat(newBlanceTotalString)

    const addeNewAmount = newBlanceTotal + dipositsFields;
    blanceTotalAdded.innerText = addeNewAmount


    // work on Withdraw Button 
    // nexTpaeg



})