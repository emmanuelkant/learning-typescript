interface Game {
  id?: string | number;
  title: string;
  description: string;
  readonly genre: string; // Modifiers as enable
  platform?: string[];
  getSimilars?: (title: string) => void
}

interface DLC extends Game {
  originalGame: Game;
  newContent: string[];
}

const tlou: Game = {
  title: 'The Last of Us',
  description: 'The best game in the world',
  genre: 'Action',
  platform: ['PS3', 'PS4'],
  getSimilars: (title: string) => {
    console.log(`Similar games to ${title}: Uncharted, A Plague Tale, Metro`);
  }
} 

const leftBehind = {
  title: 'The Last of Us - Left Behind',
  description: 'You plays as Ellie before original game',
  genre: 'Action',
  platform: ['PS4'],
  originalGame: tlou,
  newContent: ['3 hours story', 'new characters']
}

console.log(tlou.title)

if (tlou.getSimilars) {
  tlou.getSimilars(tlou.title)
}

// You can implements the Game
class CreateGame implements Game {
  title: string;
  description: string;
  genre: string;

  constructor(t: string, d: string, g: string) {
     this.title = t;
     this.description = d;
     this.genre = g;
  }
}