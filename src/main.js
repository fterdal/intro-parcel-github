import faker from 'faker'

const hello = async () => {
  await Promise.resolve()
  return 'hello'
}

const monsterContainer = document.getElementById("monster-container")
const generateMonsterButton = document.getElementById("generate-button")
const clearMonstersButton = document.getElementById("clear-button")

function addMonster(monsterName) {
  const monsterDiv = document.createElement("div")
  monsterDiv.classList.add("monster")
  const monsterImg = document.createElement("img")
  monsterImg.src = `https://robohash.org/${monsterName}?set=set2`
  const monsterNameDiv = document.createElement("div")
  monsterNameDiv.innerText = monsterName
  monsterDiv.appendChild(monsterNameDiv)
  monsterDiv.appendChild(monsterImg)

  monsterContainer.appendChild(monsterDiv)
}

generateMonsterButton.onclick = function() {
  console.log(hello())
  addMonster(faker.name.firstName())
}

clearMonstersButton.onclick = function() {
  while (monsterContainer.hasChildNodes()) {
    monsterContainer.removeChild(monsterContainer.lastChild)
  }
}
