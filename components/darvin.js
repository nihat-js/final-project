import  * as THREE from  'three'
import { scene } from '../main';
import { checkObjectIntersection } from '../engine/physic';
import player from './player';
const randomMinusPositive = (max) =>  ( Math.random() - .5 > 0 ? 1  : -1)  * Math.floor(Math.random() * (max))

  

export function addDarvin (){
  const geometry = new THREE.BoxGeometry(.5,.5,.1);
  const material = new THREE.MeshBasicMaterial({color: 0x214363});

  const darvin = new THREE.Mesh(geometry,material)
  darvin.position.set( randomMinusPositive(25) ,5, randomMinusPositive(25) )
  darvin.userData = {
    name : "bullet",
    type : "player",
    hp :  50,
  }
  scene.add(darvin)
  return darvin
}


function moveDarvin(){

}




 