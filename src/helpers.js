export function addMonster(monsterContainer, monsterName) {
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

export const sleep = ms => {
  return new Promise(resolve => {
    console.log(`😴 Going to sleep for ${ms} milliseconds...`)
    setTimeout(() => {
      console.log(`😄 Alright, I'm awake now!`)
      resolve()
    }, ms)
  })
}
;(async () => {
  await sleep(1000)
})()
