import * as THREE from 'three';


const geometry = new THREE.BoxGeometry(.5, .5 , .5);
const material = new THREE.MeshBasicMaterial({ color: 0x203040 });

const obstacle1 = new THREE.Mesh(geometry,material)
obstacle1.position.set(-4,obstacle1.geometry.parameters.height/2 ,  - 12)

obstacle1.userData = {
  weight : 4000,
}

export {obstacle1}