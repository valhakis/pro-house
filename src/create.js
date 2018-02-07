// if ( ! Detector.webgl ) Detector.addGetWebGLMessage();
var THREE = require('three');
var collada = require('three-loaders-collada')(THREE);
var ColladaLoader = require('three-collada-loader');
// var Stats = require('./stats');

// var container, stats, clock;
// var camera, scene, renderer, elf;

// init();
// animate();

// function init() {

// container = document.createElement( 'div' );

// camera = new THREE.PerspectiveCamera( 45, window.innerWidth / window.innerHeight, 0.1, 2000 );
// camera.position.set( 8, 10, 8 );
// camera.lookAt( new THREE.Vector3( 0, 3, 0 ) );

// scene = new THREE.Scene();

// clock = new THREE.Clock();

// loading manager

// var loadingManager = new THREE.LoadingManager( function() {

//   scene.add( elf );

// } );

// collada

// var loader = new THREE.ColladaLoader( loadingManager );
// var loader = new ColladaLoader();
// loader.load( './dae/Medieval_building.DAE', function ( collada ) {
// // loader.load( './dae/Medieval_building.DAE', function ( collada ) {

//   elf = collada.scene;

// } );

//

// var ambientLight = new THREE.AmbientLight( 0xcccccc, 0.4 );
// scene.add( ambientLight );

// var directionalLight = new THREE.DirectionalLight( 0xffffff, 0.8 );
// directionalLight.position.set( 1, 1, 0 ).normalize();
// scene.add( directionalLight );

//

// renderer = new THREE.WebGLRenderer();
// renderer.setPixelRatio( window.devicePixelRatio );
// renderer.setSize( window.innerWidth, window.innerHeight );

// document.body.appendChild(container);

// container.appendChild( renderer.domElement );

//

// stats = new Stats();
// container.appendChild( stats.dom );

//

// window.addEventListener( 'resize', onWindowResize, false );

// }

// function onWindowResize() {

// camera.aspect = window.innerWidth / window.innerHeight;
// camera.updateProjectionMatrix();

// renderer.setSize( window.innerWidth, window.innerHeight );

// }

// function animate() {

// requestAnimationFrame( animate );

// render();
// stats.update();

// }

// function render() {

// var delta = clock.getDelta();

// if ( elf !== undefined ) {

//   elf.rotation.z += delta * 0.5;

// }

// renderer.render( scene, camera );

// }


var camera, scene, renderer;
var mesh;
init();
animate();
function init() {
  camera = new THREE.PerspectiveCamera( 70, window.innerWidth / window.innerHeight, 1, 1000 );
  camera.position.z = 400;
  scene = new THREE.Scene();
  var texture = new THREE.TextureLoader().load( 'examples/textures/crate.gif' );
  var geometry = new THREE.BoxBufferGeometry( 200, 200, 200 );
  var material = new THREE.MeshBasicMaterial( { map: texture } );
  mesh = new THREE.Mesh( geometry, material );
  scene.add( mesh );
  renderer = new THREE.WebGLRenderer();
  renderer.setPixelRatio( window.devicePixelRatio );
  renderer.setSize( window.innerWidth, window.innerHeight );
  document.body.appendChild( renderer.domElement );
  //
  window.addEventListener( 'resize', onWindowResize, false );
}
function onWindowResize() {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize( window.innerWidth, window.innerHeight );
}
function animate() {
  requestAnimationFrame( animate );
  mesh.rotation.x += 0.005;
  mesh.rotation.y += 0.01;
  renderer.render( scene, camera );
}
