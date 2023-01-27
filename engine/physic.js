import * as THREE from 'three'

function checkObjectIntersection(object1, object2) {
  let box1 = new THREE.Box3().setFromObject(object1);
  let box2 = new THREE.Box3().setFromObject(object2);

  if (box1.intersectsBox(box2)) {
    console.log("Objects intersect!");
    return true;
  } else {
    console.log("Objects do not intersect.");
    return false
  }

}

export { checkObjectIntersection}