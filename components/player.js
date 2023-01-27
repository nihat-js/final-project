import * as THREE from 'three';
import { camera } from '../main';

const geometry = new THREE.BoxGeometry(1, 1.5 , 1);
const material = new THREE.MeshBasicMaterial({ color: 0x008080 });

const player = new THREE.Mesh(geometry,material)
player.position.set(0,  0 + player.geometry.parameters.height/2, -5)


player.userData= { 
  type : "player",
  weight : 15000,
  hp : 100,
  speed : .12,
  level : 0 ,
  damage : 65 ,
  direction : 0,
  isMoving : false,
  nextAttackTime : Date.now() ,
  lookMe : function (){
    camera.position.set(player.position.x , player.position.y+ 8 ,player.position.z  + 5)
    camera.rotation.x = -Math.PI/180*55
  }
}

export default player
