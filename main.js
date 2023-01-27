import * as THREE from 'three';



import player from './components/player';
import plane from './components/plane';
import { createBullet } from './components/bullet';
import keyboardActions from './controllers/keyboard';
import { obstacle1 } from './components/obstacles';
import { addDarvin } from './components/darvin';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

const renderer = new THREE.WebGLRenderer()
renderer.setSize(window.innerWidth, window.innerHeight)
document.body.appendChild(renderer.domElement)

const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, .1, 100)
const scene = new THREE.Scene()
scene.background = new THREE.Color(0x87ceeb)

// const bullet = createBullet()

const controls = new OrbitControls(camera, renderer.domElement);
controls.update();


export const players = [obstacle1]
export const fragileObjects = []
export const solidObjects = []
export const collectableObjects = []




scene.add(player, plane, obstacle1)
addDarvin()
function render() {
  requestAnimationFrame(render)
  player.userData.lookMe()
  renderer.render(scene, camera)
}



setInterval(keyboardActions, 1000 / 60)
render()

export { camera, scene }