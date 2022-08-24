const playersArray = [];

function displayPlayers(selectedPlayer){
    // console.log(selectedPlayer);
    const displayName = document.getElementById("displayPlayersName");
    displayName.innerHTML = "";
    for (let i = 0; i<selectedPlayer.length; i++){
        const name = playersArray[i];
        const li = document.createElement("p");

        li.innerHTML = `
        <p>${i+1}. ${name}</p>
        
        `;
        displayName.appendChild(li);
    }
}

function addToSelectedPlayers(element){
    const playerName = element.parentNode.children[0].innerText;
    if (playersArray.length<=4){
        playersArray.push(playerName);
    }
    else{
        alert("you cannot add more than five players")
    }
    displayPlayers(playersArray);
    
}





document.getElementById("players-cost-calculate-btn").addEventListener("click",function(){
    
    //const numbers = parseFloat(playersArray.length);
    const inputFieldForPlayers = document.getElementById("per-player-cost-input");
    const playersFieldInput = parseFloat(inputFieldForPlayers.value);
    //console.log(playersFieldInput);
    inputFieldForPlayers.value = "";

    let total=0;
    for (let i=0; i<=playersArray.length-1; i++){
        total++
    }
    // console.log(total)

    const playersCost = document.getElementById("player-total-amount");
    // const previousPlayersCost = parseFloat(playersCost.innerText);
    
     const newPlayersCost = (playersFieldInput *total);
    //  console.log(parseFloat(newPlayersCost));

    playersCost.innerText = newPlayersCost;
    // console.log(playersCost.innerText);
});

document.getElementById("calculate-total-cost").addEventListener("click", function(){
    const playersExpenseTotal = document.getElementById("player-total-amount");
    const playersExpenseTotalString =playersExpenseTotal.innerText;
    const playersExpenseTotalNumber = parseFloat(playersExpenseTotalString)
    //console.log("players total cost is ", playersExpenseTotalNumber);
    
     const managerExpense = document.getElementById("manager-cost-input");
     const managerExpenseTotalNumber = parseFloat(managerExpense.value);
     //console.log("manager cost is ", managerExpenseTotalNumber);

     const coachExpense = document.getElementById("coach-cost-input");
     const coachExpenseTotalNumber = parseFloat(coachExpense.value);
     //console.log("coach cost is ",coachExpenseTotalNumber);

     const totalBudget = document.getElementById("total-money");
     const totalExpenseMoney = playersExpenseTotalNumber+managerExpenseTotalNumber
     +coachExpenseTotalNumber;

    totalBudget.innerText = totalExpenseMoney;
})
