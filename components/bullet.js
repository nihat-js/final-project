import  * as THREE from  'three'
import { scene } from '../main';
import { obstacle1 } from './obstacles';
import { checkObjectIntersection } from '../engine/physic';
import player from './player';


function createBullet (){
  const geometry = new THREE.BoxGeometry(.2,.2,.1);
  const material = new THREE.MeshBasicMaterial({color: 0x214363});

  const bullet = new THREE.Mesh(geometry,material)
  bullet.position.set(player.position.x,.5,player.position.z + player.geometry.parameters.height/2)
  bullet.rotation.y = player.userData.direction
  bullet.userData = {
    name : "bullet",
    type : "bullet"
  }
  initBullet(bullet);
  return bullet
}

function initBullet(bullet){
  scene.add(bullet)
  let speed = 3/ 60
  let duration = 3 * 60 //millisecond
  let count = 1
  let timerId = setInterval(() => {
    if (count < duration ){
      bullet.position.x -= speed*Math.sin(bullet.rotation.y)
      bullet.position.z -= speed*Math.cos(bullet.rotation.y)
      let result = checkObjectIntersection(bullet,obstacle1) 
      if (result){
        console.log('I hit an obstacle')
        clearInterval(timerId)
        scene.remove(bullet,obstacle1)
        
      }
      count++
    }else{
      clearInterval(timerId)
      scene.remove(bullet)
    }

  },1000/60)
}

export { createBullet , initBullet }


 