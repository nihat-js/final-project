import * as THREE from 'three';

import player from './components/player';

const renderer = new THREE.WebGLRenderer()

renderer.setSize(window.innerWidth, window.innerHeight)
document.body.appendChild(renderer.domElement)

 const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight)
const scene = new THREE.Scene()




scene.add(player)



function render(){
  requestAnimationFrame(render)
  renderer.render(scene,camera)

}
render()

export { camera,scene }