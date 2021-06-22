

class Resource {
  constructor(name, cost, difficulty) {
    this.name = name
    this.cost = cost
    this.difficulty = difficulty
    this.unlocked = false
    this.amount = 0


    //static vars
  }

  unlockResource() {
    this.unlocked = true
  }

  get getUnlocked() {
    return this.unlocked;
  }
}



export default Resource;