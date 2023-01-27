import * as THREE from 'three';

import { checkObjectIntersection } from "../engine/physic";
const randomMinusPositive = (max) =>  ( Math.random() - .5 > 0 ? 1  : -1)  * Math.floor(Math.random() * (max))

const geometry = new THREE.BoxGeometry(.5, .5, .5);
const material = new THREE.MeshBasicMaterial({ color: 0x203040 });


export function createXpStones(scene) {
  let arr = []
  for (let i = 0; i < scene.children; i++){
    const el = new THREE.Mesh(geometry, material)
    el.position.set(randomMinusPositive(25), el.geometry.parameters.height / 2, randomMinusPositive(25))
    let result = checkObjectIntersection(el,scene)
    if (!result){
      arr.push(el)
    }else{
      i--;
      continue
    }
  }
  console.log(arr)
  return arr
}

