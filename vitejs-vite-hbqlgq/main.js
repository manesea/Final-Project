import * as THREE from 'three';
import './style.css';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

const scene = new THREE.Scene();
const axesHelper = new THREE.AxesHelper(5);
scene.add(axesHelper);
const arwing = new THREE.Group();
const indices = [0, 1, 2];
const normals = [0, 0, 1, 0, 0, 1, 0, 0, 1];

const v1 = new THREE.Vector3(1, 7, 0); //top
const v2 = new THREE.Vector3(-2, -1, 0); //bottom left
const v3 = new THREE.Vector3(1, -1, 2); //bottom right
const geometry = new THREE.BufferGeometry();
const vertices = [v1.x, v1.y, v1.z, v2.x, v2.y, v2.z, v3.x, v3.y, v3.z];
geometry.setAttribute(
  'position',
  new THREE.Float32BufferAttribute(vertices, 3)
);
geometry.setAttribute('normal', new THREE.Float32BufferAttribute(normals, 3));
geometry.setIndex(indices);
const material = new THREE.MeshStandardMaterial({ color: 0xbdbab5 });
const mesh = new THREE.Mesh(geometry, material);
arwing.add(mesh);
const triangleCopy = mesh.clone();
triangleCopy.position.x = 2;
triangleCopy.scale.set(-1, 1, 1);
arwing.add(triangleCopy);

const v4 = new THREE.Vector3(1, 7, 0);
const v5 = new THREE.Vector3(4, -1, 0);
const v6 = new THREE.Vector3(1, -1, -2);
const backGeometry = new THREE.BufferGeometry();
backGeometry.setAttribute(
  'position',
  new THREE.Float32BufferAttribute(
    [v4.x, v4.y, v4.z, v5.x, v5.y, v5.z, v6.x, v6.y, v6.z],
    3
  )
);
backGeometry.setAttribute(
  'normal',
  new THREE.Float32BufferAttribute(normals, 3)
);
backGeometry.setIndex(indices);
const backMesh = new THREE.Mesh(backGeometry, material);
arwing.add(backMesh);
const backCopy = backMesh.clone();
backCopy.position.x = 2;
backCopy.scale.set(-1, 1, 1);
arwing.add(backCopy);

const v7 = new THREE.Vector3(-2, -1, 0);
const v8 = new THREE.Vector3(1, -1, 2);
const v9 = new THREE.Vector3(1, -3, 0.5);
const tailGeometry = new THREE.BufferGeometry();
tailGeometry.setAttribute(
  'position',
  new THREE.Float32BufferAttribute(
    [v9.x, v9.y, v9.z, v8.x, v8.y, v8.z, v7.x, v7.y, v7.z],
    3
  )
);
tailGeometry.setAttribute(
  'normal',
  new THREE.Float32BufferAttribute(normals, 3)
);
tailGeometry.setIndex(indices);
const tailMesh = new THREE.Mesh(tailGeometry, material);
arwing.add(tailMesh);
const tailMeshCopy = tailMesh.clone();
tailMeshCopy.position.x = 2;
tailMeshCopy.scale.set(-1, 1, 1);
arwing.add(tailMeshCopy);

const tailInsideGeometry = new THREE.BufferGeometry();
tailInsideGeometry.setAttribute(
  'position',
  new THREE.Float32BufferAttribute(
    [v7.x, v7.y, v7.z, v8.x, v8.y, v8.z, v9.x, v9.y, v9.z],
    3
  )
);
tailInsideGeometry.setAttribute(
  'normal',
  new THREE.Float32BufferAttribute(normals, 3)
);
tailInsideGeometry.setIndex(indices);
const tailInsideMesh = new THREE.Mesh(tailInsideGeometry, material);
arwing.add(tailInsideMesh);
const tailInsideCopy = tailInsideMesh.clone();
tailInsideCopy.position.x = 2;
tailInsideCopy.scale.set(-1, 1, 1);
arwing.add(tailInsideCopy);

const v13 = new THREE.Vector3(-2, -1, 0);
const v14 = new THREE.Vector3(1, -1, -2);
const v15 = new THREE.Vector3(1, -2, -1);
const tail2Geometry = new THREE.BufferGeometry();
tail2Geometry.setAttribute(
  'position',
  new THREE.Float32BufferAttribute(
    [v13.x, v13.y, v13.z, v14.x, v14.y, v14.z, v15.x, v15.y, v15.z],
    3
  )
);
tail2Geometry.setAttribute(
  'normal',
  new THREE.Float32BufferAttribute(normals, 3)
);
tail2Geometry.setIndex(indices);
const tail2Mesh = new THREE.Mesh(tail2Geometry, material);
arwing.add(tail2Mesh);
const tail2MeshCopy = tail2Mesh.clone();
tail2MeshCopy.position.x = 2;
tail2MeshCopy.scale.set(-1, 1, 1);
arwing.add(tail2MeshCopy);

const tail2insideGeometry = new THREE.BufferGeometry();
tail2insideGeometry.setAttribute(
  'position',
  new THREE.Float32BufferAttribute(
    [v13.x, v13.y, v13.z, v14.x, v14.y, v14.z, v15.x, v15.y, v15.z],
    3
  )
);
tail2insideGeometry.setAttribute(
  'normal',
  new THREE.Float32BufferAttribute(normals, 3)
);
tail2insideGeometry.setIndex(indices);
const tail2insideMesh = new THREE.Mesh(tail2insideGeometry, material);
arwing.add(tail2insideMesh);
const tail2insideMeshCopy = tail2insideMesh.clone();
tail2insideMesh.position.x = 2;
tail2insideMesh.scale.set(-1, 1, 1);
arwing.add(tail2insideMeshCopy);

const v10 = new THREE.Vector3(-2, -1, 0);
const v11 = new THREE.Vector3(1, -1, 2);
const v12 = new THREE.Vector3(1, -1, -2);
const endGeometry = new THREE.BufferGeometry();
endGeometry.setAttribute(
  'position',
  new THREE.Float32BufferAttribute(
    [v12.x, v12.y, v12.z, v11.x, v11.y, v11.z, v10.x, v10.y, v10.z],
    3
  )
);

const color = new THREE.Color(0xfab246);
const endMaterial = new THREE.MeshBasicMaterial({ color: 0xfab247 });
const endMesh = new THREE.Mesh(endGeometry, endMaterial);
arwing.add(endMesh);
const endCopy = endMesh.clone();
endCopy.position.x = 2;
endCopy.scale.set(-1, 1, 1);
arwing.add(endCopy);

const clock = new THREE.Clock();
function animate() {
  const elapsed = 2 * clock.getElapsedTime();
  const t = (Math.sin(elapsed * 10) + 1) / 2;
  color.setRGB(
    t * 1.0 + (1 - t) * 1.0, //r
    t * 0.5 + (1 - t) * 0.0, //g
    t * 0.0 + (1 - t) * 0.1 //b
  );
  endMesh.material.color = color;
  requestAnimationFrame(animate);
}
animate();

const v16 = new THREE.Vector3(-2, -1, 0);
const v17 = new THREE.Vector3(-2, 2, -2);
const v18 = new THREE.Vector3(-5, 2, 0.5);
const wingGeometry = new THREE.BufferGeometry();
wingGeometry.setAttribute(
  'position',
  new THREE.Float32BufferAttribute(
    [v16.x, v16.y, v16.z, v17.x, v17.y, v17.z, v18.x, v18.y, v18.z],
    3
  )
);
wingGeometry.setAttribute(
  'normal',
  new THREE.Float32BufferAttribute(normals, 3)
);
wingGeometry.setIndex(indices);
const wingMesh = new THREE.Mesh(wingGeometry, material);
arwing.add(wingMesh);
const rightWing = wingMesh.clone();
rightWing.position.x = 2;
rightWing.scale.set(-1, 1, 1);
arwing.add(rightWing);

const v19 = new THREE.Vector3(-2, -1, 0);
const v20 = new THREE.Vector3(-5, 2, 0.5);
const v21 = new THREE.Vector3(-10, -9, 0.5);
const topWingGeometry = new THREE.BufferGeometry();
topWingGeometry.setAttribute(
  'position',
  new THREE.Float32BufferAttribute(
    [v19.x, v19.y, v19.z, v20.x, v20.y, v20.z, v21.x, v21.y, v21.z],
    3
  )
);
topWingGeometry.setAttribute(
  'normal',
  new THREE.Float32BufferAttribute(normals, 3)
);
topWingGeometry.setIndex(indices);
const topWingMesh = new THREE.Mesh(topWingGeometry, material);
arwing.add(topWingMesh);
const rightTopWing = topWingMesh.clone();
rightTopWing.position.x = 2;
rightTopWing.scale.set(-1, 1, 1);
arwing.add(rightTopWing);

const v22 = new THREE.Vector3(-5, 2, 0.5);
const v23 = new THREE.Vector3(-2, 2, -2);
const v24 = new THREE.Vector3(-10, -9, 0.5);
const sideWingGeometry = new THREE.BufferGeometry();
sideWingGeometry.setAttribute(
  'position',
  new THREE.Float32BufferAttribute(
    [v22.x, v22.y, v22.z, v23.x, v23.y, v23.z, v24.x, v24.y, v24.z],
    3
  )
);
sideWingGeometry.setAttribute(
  'normal',
  new THREE.Float32BufferAttribute(normals, 3)
);
sideWingGeometry.setIndex(indices);
const sideWingMesh = new THREE.Mesh(sideWingGeometry, material);
arwing.add(sideWingMesh);
const rightSideWing = sideWingMesh.clone();
rightSideWing.position.x = 2;
rightSideWing.scale.set(-1, 1, 1);
arwing.add(rightSideWing);

const v25 = new THREE.Vector3(-10, -9, 0.5);
const v27 = new THREE.Vector3(-2, -1, 0);
const v26 = new THREE.Vector3(-2, 2, -2);
const sideWing2Geometry = new THREE.BufferGeometry();
sideWing2Geometry.setAttribute(
  'position',
  new THREE.Float32BufferAttribute(
    [v25.x, v25.y, v25.z, v26.x, v26.y, v26.z, v27.x, v27.y, v27.z],
    3
  )
);
sideWing2Geometry.setAttribute(
  'normal',
  new THREE.Float32BufferAttribute(normals, 3)
);
sideWing2Geometry.setIndex(indices);
const sideWing2Mesh = new THREE.Mesh(sideWing2Geometry, material);
arwing.add(sideWing2Mesh);
const rightSide2Wing = sideWing2Mesh.clone();
rightSide2Wing.position.x = 2;
rightSide2Wing.scale.set(-1, 1, 1);
arwing.add(rightSide2Wing);

const v28 = new THREE.Vector3(-2, 3, -1);
const v29 = new THREE.Vector3(-2, -4, 0);
const v30 = new THREE.Vector3(-3, -4, 5);
const sideBody = new THREE.BufferGeometry();
sideBody.setAttribute(
  'position',
  new THREE.Float32BufferAttribute(
    [v28.x, v28.y, v28.z, v29.x, v29.y, v29.z, v30.x, v30.y, v30.z],
    3
  )
);
sideBody.setAttribute('normal', new THREE.Float32BufferAttribute(normals, 3));
sideBody.setIndex(indices);
const sideBodyMaterial = new THREE.MeshStandardMaterial({ color: 0x1757bf });
const sideBodyMesh = new THREE.Mesh(sideBody, sideBodyMaterial);
arwing.add(sideBodyMesh);
const sideBodyRight = sideBodyMesh.clone();
sideBodyRight.position.x = 2;
sideBodyRight.scale.set(-1, 1, 1);
arwing.add(sideBodyRight);

const insideBody = new THREE.BufferGeometry();
insideBody.setAttribute(
  'position',
  new THREE.Float32BufferAttribute(
    [v30.x, v30.y, v30.z, v29.x, v29.y, v29.z, v28.x, v28.y, v28.z],
    3
  )
);
insideBody.setAttribute('normal', new THREE.Float32BufferAttribute(normals, 3));
insideBody.setIndex(indices);
const insideBodyMesh = new THREE.Mesh(insideBody, sideBodyMaterial);
arwing.add(insideBodyMesh);
const insideBodyRight = insideBodyMesh.clone();
insideBodyRight.position.x = 2;
insideBodyRight.scale.set(-1, 1, 1);
arwing.add(insideBodyRight);
scene.add(arwing);

const sizes = {
  width: window.innerWidth,
  height: window.innerHeight,
};

const light = new THREE.PointLight(0xffffff, 1);
light.position.set(0, 0, 40);
scene.add(light);

const leftLight = new THREE.PointLight(0xffffff, 0.4);
leftLight.position.set(-40, 0, 0);
scene.add(leftLight);

const rightLight = new THREE.PointLight(0xffffff, 0.4);
rightLight.position.set(40, 0, 0);
scene.add(rightLight);

const bottomLight = new THREE.PointLight(0xffffff, 0.4);
bottomLight.position.set(0, 0, -40);
scene.add(bottomLight);

const camera = new THREE.PerspectiveCamera(
  45,
  sizes.width / sizes.height,
  0.1,
  100
);
camera.position.z = 20;
camera.position.y = -50;
scene.add(camera);

const canvas = document.querySelector('.webgl');
const renderer = new THREE.WebGL1Renderer({ canvas });
renderer.setSize(sizes.width, sizes.height);
renderer.setPixelRatio(2);
renderer.render(scene, camera);

const controls = new OrbitControls(camera, canvas);
controls.enableDamping = true;
controls.enablePan = false;
controls.enableZoom = true;

window.addEventListener('resize', () => {
  sizes.width = window.innerWidth;
  sizes.height = window.innerHeight;
  camera.aspect = sizes.width / sizes.height;
  camera.updateProjectionMatrix();
  renderer.setSize(sizes.width, sizes.height);
});

const loop = () => {
  controls.update();
  renderer.render(scene, camera);
  window.requestAnimationFrame(loop);
};
loop();

const starGeometry = new THREE.BufferGeometry();
const positions = [];
for (let i = 0; i < 1000; i++) {
  const x = THREE.MathUtils.randFloatSpread(200);
  const y = THREE.MathUtils.randFloatSpread(200);
  const z = THREE.MathUtils.randFloatSpread(200);
  positions.push(x, y, z);
}
starGeometry.setAttribute(
  'position',
  new THREE.Float32BufferAttribute(positions, 3)
);
const starMaterial = new THREE.PointsMaterial({
  size: 1,
  color: 0xffffff,
  opacity: 0.5,
  transparent: true,
});
const points = new THREE.Points(starGeometry, starMaterial);
scene.add(points);

function animateStars() {
  points.position.y -= 2;
  if (points.position.y < -60) {
    points.position.y = 100;
  }
  requestAnimationFrame(animateStars);
}
animateStars();

const laser = new THREE.CapsuleGeometry(1, 3, 1, 6);
const laserMaterial = new THREE.MeshBasicMaterial({ color: 0x35e82c });
const laserMesh = new THREE.Mesh(laser, laserMaterial);
const refObjectPosition = new THREE.Vector3();
const rotationSpeed = Math.PI / 15;
let rotationAmount = 0;
const maxLasers = 3;
let laserCount = 0;

document.addEventListener('keydown', (event) => {
  if (event.key === ' ') {
    if (laserCount == maxLasers) {
      return;
    }
    arwing.getWorldPosition(refObjectPosition);
    laserMesh.position.copy(refObjectPosition);
    scene.add(laserMesh);
    laserCount++;
  }
  if (event.key === 'ArrowRight') {
    rotationAmount = 0; // Reset the rotation amount
    animateRotation(); // Start the rotation animation
  }
  if (event.key === 'ArrowLeft') {
    rotationAmount = 0;
    animateRotationCounter();
  }
  if (event.key === 'ArrowUp') {
    boost();
  }
  if (event.key === 'ArrowDown') {
    returnPos();
  }
});

function animateRotation() {
  rotationAmount += rotationSpeed;
  if (rotationAmount < Math.PI * 4) {
    arwing.rotation.y += rotationSpeed;
    requestAnimationFrame(animateRotation);
  }
}

function animateRotationCounter() {
  rotationAmount += rotationSpeed;
  if (rotationAmount < Math.PI * 4) {
    arwing.rotation.y -= rotationSpeed;
    requestAnimationFrame(animateRotationCounter);
  }
}

function boost() {
  if (arwing.position.y < 30) {
    arwing.position.y += 1;
    requestAnimationFrame(boost);
  }
}

function returnPos() {
  if (arwing.position.y > 0) {
    arwing.position.y -= 0.3;
    requestAnimationFrame(returnPos);
  }
}

function animateLasers() {
  laserMesh.position.y += 4;
  if (laserMesh.position.y > 100) {
    laserCount--;
    scene.remove(laserMesh);
  }
  requestAnimationFrame(animateLasers);
}
animateLasers();

function onMouseMove(event) {
  const mouseX = (event.clientX / window.innerWidth) * 2 - 1;
  const mouseY = -(event.clientY / window.innerHeight) * 2 + 1;
  arwing.position.x = mouseX * 20;
  arwing.position.z = mouseY * 20;
  arwing.rotation.x = (mouseY * Math.PI) / 4;
  arwing.rotation.y = (mouseX * Math.PI) / 2;
}

window.addEventListener('mousemove', onMouseMove);
function control() {
  requestAnimationFrame(control);
  renderer.render(scene, camera);
}
control();
