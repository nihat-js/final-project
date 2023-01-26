import * as THREE from 'three';

import player from './components/player';
import plane from './components/plane';
import keyboardActions from './controllers/keyboard';

const renderer = new THREE.WebGLRenderer()
renderer.setSize(window.innerWidth, window.innerHeight)
document.body.appendChild(renderer.domElement)

const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight , .1 , 100 )
const scene = new THREE.Scene()
scene.background = new THREE.Color(0x87ceeb)


scene.add(player,plane)




function render() {
  requestAnimationFrame(render)
  player.userData.lookMe()
  renderer.render(scene, camera)
}

setInterval(keyboardActions,1000/60)
render()

export { camera, scene }