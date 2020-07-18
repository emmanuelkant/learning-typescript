// accountInfo
// charInfo
// PlayerInfo

type AccountInfo = {
  id: number,
  name: string,
  email: string
  age?: number // ? means optional field
}

type CharInfo = {
  nickname: string,
  level: number
}

// Intersection
type PlayerInfo = AccountInfo & CharInfo 

const account: AccountInfo = {
  id: 123,
  name: 'Emmanuel Kant Duarte',
  email: 'emmanuelkant.duarte@gmail.com'
}

const char: CharInfo = {
  nickname: 'The Philosopher',
  level: 99 
}

const player: PlayerInfo = {
  id: 123,
  name: 'Emmanuel Kant Duarte',
  email: 'emmanuelkant.duarte@gmail.com',
  nickname: 'The Philosopher',
  level: 99  
}