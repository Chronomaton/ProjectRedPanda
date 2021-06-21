

class Resource {
  constructor(name, value, difficulty) {
    this.name = name
    this.value = value
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