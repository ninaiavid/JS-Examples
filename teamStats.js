const team = {
    _players: [{
        firstName: 'Pablo',
        lastName: 'Sanchez',
        age: 11
    },
    {
        firstName: 'Pablito',
        lastName: 'Sanchezito',
        age: 12
    },
    {
        firstName: 'Pabl',
        lastName: 'Sanch',
        age: 13
    }
    ],
    _games: [{
        opponent: 'Broncos',
        teamPoints: 40,
        opponentPoints: 25
    },
    {
        opponent: 'Bronc',
        teamPoints: 25,
        opponentPoints: 40
    },
    {
        opponent: 'Bron',
        teamPoints: 20,
        opponentPoints: 20
    }
    ],
    get players(){
        return this._players
    },
    get games(){
        return this._games
    },
    addPlayer(firstName, lastName, age){
        player = {
            firstName: firstName,
            lastName: lastName,
            age: age
        },
        this._players.push(player)
    },
    addGame(opponent, teamPoints, opponentPoints){
        game = {
            opponent: opponent,
            teamPoints: teamPoints,
            opponentPoints: opponentPoints
        },
        this._games.push(game)
    }
}

team.addPlayer('Steph', 'Curry', 28);
team.addPlayer('Lisa', 'Leslie', 44);
team.addPlayer('Bugs', 'Bunny', 76);
team.addGame('lisa', 20, 21);
team.addGame('dora', 19, 10);
team.addGame('bran', 50, 50);

console.log(team.players, team.games);