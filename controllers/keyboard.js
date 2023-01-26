import player from "../components/player";

const downKeys = []

document.addEventListener('keydown', keyDown)
document.addEventListener('keydown', keyUp)

function keyDown(e) {
  let key = e.key.toLowerCase()
  keyDown.indexOf(key) == -1  ?   keyDown.push(key) : '' ;
}

function keyUp(e){
  let key = e.key.toLowerCase()
  keyDown = keyDown.filter(item => item !== key)
}

function userController(){
  if (key.contains('w')){
    player.position.z -= player.userData.speed
  }
  else if (key.contains('s')){
    player.position.z += player.userData.speed
  }
  else if (key.contains('d')){
    player.position.x += player.userData.speed
  }
  else if (key.contains('a')){
    player.position.x -= player.userData.speed
  }
}

export default userController