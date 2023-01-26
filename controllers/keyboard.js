import player from "../components/player";
let downKeys = []

document.addEventListener('keydown', keyDown)
document.addEventListener('keyup', keyUp)

function keyDown(e) {
  let key = e.key.toLowerCase()
  downKeys.indexOf(key) == -1 ? downKeys.push(key) : '';
}

function keyUp(e) {
  let key = e.key.toLowerCase()
  downKeys = downKeys.filter(item => item !== key)
}

function keyboardActions() {
  if (downKeys.indexOf('w') > -1) {
    player.position.z -= player.userData.speed
  }
  if (downKeys.indexOf('s') > -1) {
    player.position.z += player.userData.speed
  }
  if (downKeys.indexOf('d') > -1) {
    player.position.x += player.userData.speed
  }
  if (downKeys.indexOf('a') > -1) {
    player.position.x -= player.userData.speed
  }
}


export default keyboardActions