const leaderboard = document.getElementById('leaderboard').getElementsByTagName('tbody')[0];
const players = [];

function addPlayer(name, score) {
    players.push({ name, score });
}

function displayLeaderboard() {
    players.sort((a, b) => b.score - a.score); // Alterado para ordem decrescente
    leaderboard.innerHTML = '';
    const highestScore = players.length > 0 ? players[0].score : null; // Alterado para pegar o primeiro jogador

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

addPlayer('Pato Apátrida', 5);
addPlayer('Vice', 2);
addPlayer('Marc', 12);
addPlayer('Sapo Cururu Perneta', 2);
addPlayer('Pato Árabe', 2);

displayLeaderboard();
