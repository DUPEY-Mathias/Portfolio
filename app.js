var face = document.getElementById("face");
var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(20, 10, 1, 500);
camera.position.set(0, 0, 20);
var renderer = new THREE.WebGLRenderer({
  antialias: true,
  alpha: true,
});
var canvas = renderer.domElement;
document.body.appendChild(canvas);

const light = new THREE.DirectionalLight(0xffffff, 1);
light.position.set(10, 10, 40);
scene.add(light);

let loader = new THREE.GLTFLoader();
loader.load("./house/scene.gltf", function (gltf) {
  scene.add(gltf.scene);
  model = gltf.scene;
});

var plane = new THREE.Plane(new THREE.Vector3(0, 0, 1), -5);
var raycaster = new THREE.Raycaster();
var mouse = new THREE.Vector2();
var pointOfIntersection = new THREE.Vector3();
canvas.addEventListener("mousemove", onMouseMove, false);

function onMouseMove(event) {
  mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
  mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
  raycaster.setFromCamera(mouse, camera);
  raycaster.ray.intersectPlane(plane, pointOfIntersection);
  model.lookAt(pointOfIntersection);
}

renderer.setAnimationLoop(() => {
  if (resize(renderer)) {
    camera.aspect = canvas.clientWidth / canvas.clientHeight;
    camera.updateProjectionMatrix();
  }
  face.appendChild(renderer.domElement);
  renderer.render(scene, camera);
});

function resize(renderer) {
  const canvas = renderer.domElement;
  const width = canvas.clientWidth;
  const height = canvas.clientHeight;
  const needResize = canvas.width !== width || canvas.height !== height;
  if (needResize) {
    renderer.setSize(width, height, false);
  }
  return needResize;
}
