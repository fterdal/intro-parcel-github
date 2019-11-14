import faker from 'faker'
import { addMonster } from './helpers'

const monsterContainer = document.getElementById("monster-container")
const generateMonsterButton = document.getElementById("generate-button")
const clearMonstersButton = document.getElementById("clear-button")

generateMonsterButton.onclick = function() {
  addMonster(monsterContainer, faker.name.firstName())
}

clearMonstersButton.onclick = function() {
  while (monsterContainer.hasChildNodes()) {
    monsterContainer.removeChild(monsterContainer.lastChild)
  }
}
