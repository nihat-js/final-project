import { createBullet } from "../components/bullet";
import player from "../components/player";
import { checkObjectIntersection } from "../engine/physic";
import { scene } from "../main";

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
    player.userData.direction = 0    
  }
  if (downKeys.indexOf('s') > -1) {
    player.position.z += player.userData.speed
    player.userData.direction = Math.PI   
  }
  if (downKeys.indexOf('d') > -1) {
    player.position.x += player.userData.speed
    player.userData.direction = Math.PI /2 * 3
  }
  if (downKeys.indexOf('a') > -1) {
    player.position.x -= player.userData.speed
    player.userData.direction = Math.PI /2
  }

  if (downKeys.indexOf(' ')  > -1){
    if (player.userData.nextAttackTime <= Date.now() ){
      player.userData.nextAttackTime +=1500
      createBullet()
    }
  }



}


export default keyboardActions



