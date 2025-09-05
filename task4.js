export class Player {
    name;
    level;

    constructor(name, level) {
      this.name = name;
      this.level = level;
    }
  
    info() {
      console.log(this.name + " has reached Level " + this.level + "!");
    }

    levelUp() {
      this.level++;
    }

  }

let player = new Player("Ivan", 0);

player.info();

player.levelUp();

player.info();