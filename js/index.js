const playerListArray = []

// Function For Create A Table 

function addElementToList(list) {
    const tableBody = document.getElementById('table-body')
    tableBody.innerHTML = ''
    for (let i = 0; i < list.length; i++) {
        if (i <= 4) {
            const name = list[i].playerName

            // Create A Table 
            const table = document.createElement('tr');
            table.innerHTML = `
                    <th>${i + 1 + " . "}</th>
                    <td> ${name}</td>`
            // Appeend Child 
            tableBody.appendChild(table)


        }
    }
}


// Function For Click to button 

function tabToButton(buttonElement) {

    const buttonText = buttonElement.parentNode.parentNode.children[0].innerText

    const playerList = {
        playerName: buttonText
    }
    // If its length is greater than five then it will not work. The button inside is also blocked

    if (playerListArray.length <= 4) {
        playerListArray.push(playerList)
        buttonElement.disabled = true;
        // buttonElement.style.cursor = "not-allowed"
        buttonElement.style.backgroundColor = "#242B2E"
    }
    else {
        alert("Five players have already added")
    }
    addElementToList(playerListArray)
}


