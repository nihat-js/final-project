import * as THREE from 'three';
import { camera } from '../main';

const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: 0x008080 });

const player = new THREE.Mesh(geometry,material)


player.userData= { 
  lookMe : function (){
    camera.position.set(player.position.x , player.position.y+ 5 ,player.position.z + 5)
  }
}

export default player
