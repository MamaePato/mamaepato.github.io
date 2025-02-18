const leaderboard = document.getElementById('leaderboard').getElementsByTagName('tbody')[0];
const players = [];

function addPlayer(name, score) {
    players.push({ name, score });
}

function displayLeaderboard() {
    players.sort((a, b) => a.score - b.score);
    leaderboard.innerHTML = '';
    const highestScore = players.length > 0 ? players[players.length - 1].score : null;

    players.forEach((player) => {
        const row = leaderboard.insertRow();
        const cell1 = row.insertCell(0);
        const cell2 = row.insertCell(1);
        cell1.innerHTML = player.name;
        cell2.innerHTML = player.score;

        if (player.score === highestScore) {
            row.classList.add('first-place');
        }
    });
}

displayLeaderboard();
