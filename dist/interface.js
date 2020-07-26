"use strict";
var tlou = {
    title: 'The Last of Us',
    description: 'The best game in the world',
    genre: 'Action',
    platform: ['PS3', 'PS4'],
    getSimilars: function (title) {
        console.log("Similar games to " + title + ": Uncharted, A Plague Tale, Metro");
    }
};
var leftBehind = {
    title: 'The Last of Us - Left Behind',
    description: 'You plays as Ellie before original game',
    genre: 'Action',
    platform: ['PS4'],
    originalGame: tlou,
    newContent: ['3 hours story', 'new characters']
};
console.log(tlou.title);
if (tlou.getSimilars) {
    tlou.getSimilars(tlou.title);
}
// You can implements the Game
var CreateGame = /** @class */ (function () {
    function CreateGame(t, d, g) {
        this.title = t;
        this.description = d;
        this.genre = g;
    }
    return CreateGame;
}());
