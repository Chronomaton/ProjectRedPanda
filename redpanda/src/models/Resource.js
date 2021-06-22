

class Resource {
  constructor(name, cost, difficulty) {
    this.name = name
    this.cost = cost
    this.difficulty = difficulty
    this.unlocked = false

  }

  unlockResource() {
    this.unlocked = true
  }

  get getUnlocked() {
    return this.unlocked;
  }
}



export default Resource;