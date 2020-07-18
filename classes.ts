abstract class UserAccount {
  public name: string;
  protected age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  logDetails(): void {
    console.log(`The player ${this.name} is ${this.age} years old`)
  }
}

class CharAccount extends UserAccount {
  readonly nickname: string;
  private level: number;

  constructor(name: string, age: number, nickname: string, level: number) {
    super(name, age);
    this.nickname = nickname;
    this.level = level;
  }

  get getLevel() {
    console.log('------GET------')
    return this.level; 
  }

  set setLevel(level: number) {
    this.level = level; 
  }

  logCharDetails() {
    console.log(`The player ${this.name} is ${this.age} years old  has the char ${this.nickname} at level ${this.level}`)
  }
}

const Arthur = new CharAccount('Arthur Morgan', 54, 'Arthur', 45);

console.log(Arthur);
console.log(Arthur.name);
//  console.log(Arthur.age); // Can't read because is protected
// console.log(Arthur.nickname); // Error because is private
// console.log(Arthur.level); // Can't read directly because is private
// Arthur.level = 50 // Can't change
console.log(Arthur.logCharDetails());
console.log(Arthur.getLevel);
Arthur.setLevel = 20;
console.log(Arthur)