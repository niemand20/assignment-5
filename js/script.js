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
    playersArray.push(playerName);
    // console.log(playerName);
    // console.log(playersArray);
    // if (playersArray.length>5){
    //     alert("you are adding more than five players");
        
    // }
    // else{
    //     return;
    // }

    displayPlayers(playersArray);

}