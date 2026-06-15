const submitButton = document.querySelector('input[type="submit"]');

submitButton.addEventListener("click", myLineUp);

function myLineUp(event) {
    event.preventDefault();

    const status = document.querySelector('input[name="status"]:checked').value;
    const date = document.querySelector('select[name="gameDate"]').value;
    const players = document.querySelectorAll('input[type="checkbox"]:checked');

    // Output lineup to the console
    console.log("Status:", status);
    console.log("Date:", date);
    console.log("Players:");
    players.forEach(player => {
        console.log(player.value);
    });

    // Concatenate data into a string
    let output = "Status: " + status + "<br>" + "Date: " + date + "<br>" + "Players: " + "<br>";
    players.forEach(function(player) {
        output += player.value + "<br>";
    });

    // Display linup on the webpage
    document.getElementById("lineupOutput").innerHTML = output;
}