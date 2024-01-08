function back(){
    window.location.href ="../signinpahge/index.html";

}

function start() {
    // Get the values entered in the input fields
    const playerName = document.getElementById("playerName").value;
    const opponentName = document.getElementById("opponentName").value;
    
    // Store the values in local storage
    localStorage.setItem("playerName", playerName);
    localStorage.setItem("opponentName", opponentName);
    
    // Redirect to the next page
    window.location.href = "../oneplayer/one.html";

    
}




