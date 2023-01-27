import * as THREE from 'three';

const geometry = new THREE.PlaneGeometry(50, 50)
const material = new THREE.MeshBasicMaterial({ color: 0x7ec850 })

const plane = new THREE.Mesh(geometry, material)
plane.rotation.x = -Math.PI / 2

plane.userData = {
  type : "plane"
}


export default plane