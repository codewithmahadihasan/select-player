

function inputFildToComeANumber(Id) {
    const inputFild = document.getElementById(Id)
    const inputValue = inputFild.value;
    const convertToNumber = parseInt(inputValue)

    if (isNaN(convertToNumber)) {
        alert("Plese Input a Number")
        return convertToNumber;
    }

    else if (convertToNumber >= 0) {
        return convertToNumber;
    }
}

function resultInnnerText(Id) {
    const resultElemnt = document.getElementById(Id)
    const resultInnnerText = resultElemnt.innerText
    const result = parseInt(resultInnnerText)
    return result;
}

function showingDisplay(Id, amount) {
    const idName = document.getElementById(Id)
    if (isNaN(amount)) {
    }
    else {
        idName.innerText = amount;
    }

}


// Calcutale Per Player 

document.getElementById('button-of-calculate').addEventListener('click', function () {
    const playerList = parseInt(playerListArray.length)
    const player = inputFildToComeANumber('per-player-amount')
    const playerCost = playerList * player
    showingDisplay("result-player-expense", playerCost)

})

// Added Manager And Cousch 
document.getElementById("button-of-calculate-total").addEventListener('click', function () {
    const display = resultInnnerText('result-player-expense')
    const managerCost = inputFildToComeANumber("manager-cost")
    const coachCost = inputFildToComeANumber('coach-cost')
    const totalCost = display + managerCost + coachCost
    showingDisplay("allCost", totalCost)


})