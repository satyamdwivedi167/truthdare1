// Initial list of names (only once)
let remainingNames = ["Piyush", "Satyam", "Toshif", "Sahil", "TomKar"];

function whosTurn() {
    if (remainingNames.length === 0) {
        return "All names have had their turn!";
    }

    let randomIndex = Math.floor(Math.random() * remainingNames.length);
    let selectedName = remainingNames[randomIndex];

    // Remove the selected name so it won't repeat
    

    return selectedName + ", your turn now!";
}

function showTurn() {
    const result = whosTurn();
    document.getElementById("nameBox").textContent = result;
}
