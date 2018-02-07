<!DOCTYPE html>
<html lang="en">
	<head>
		<title>three.js webgl - collada</title>
		<meta charset="utf-8">
		<meta name="viewport" content="width=device-width, user-scalable=no, minimum-scale=1.0, maximum-scale=1.0">
		<style>
			body {
				background:#777;
				padding:0;
				margin:0;
				overflow:hidden;
			}
			#info {
				position: absolute;
				top: 0px;
				width: 100%;
				color: #ffffff;
				padding: 5px;
				font-family:Monospace;
				font-size:13px;
				text-align:center;
			}
			a {
				color: #ffffff;
			}
		</style>
	</head>
	<body>

		<div id="container"></div>
		<div id="info">
			<a href="https://threejs.org" target="_blank" rel="noopener">three.js</a> collada loader
			| Elf Girl by <a href="https://sketchfab.com/yellow09" target="_blank" rel="noopener">halloween</a> is licensed under <a href="https://creativecommons.org/licenses/by/4.0/" target="_blank" rel="noopener">CC Attribution</a>
		</div>

		<script src="../build/three.js"></script>

		<script src="js/loaders/ColladaLoader.js"></script>
		<script src="js/Detector.js"></script>
		<script src="js/libs/stats.min.js"></script>

		<script>
			if ( ! Detector.webgl ) Detector.addGetWebGLMessage();
			var container, stats, clock;
			var camera, scene, renderer, elf;
			init();
			animate();
			function init() {
				container = document.getElementById( 'container' );
				camera = new THREE.PerspectiveCamera( 45, window.innerWidth / window.innerHeight, 0.1, 2000 );
				camera.position.set( 8, 10, 8 );
				camera.lookAt( new THREE.Vector3( 0, 3, 0 ) );
				scene = new THREE.Scene();
				clock = new THREE.Clock();
				// loading manager
				var loadingManager = new THREE.LoadingManager( function() {
					scene.add( elf );
				} );
				// collada
				var loader = new THREE.ColladaLoader( loadingManager );
				loader.load( './Akali/Akali.dae', function ( collada ) {
					elf = collada.scene;
				} );
				//
				var ambientLight = new THREE.AmbientLight( 0xcccccc, 0.4 );
				scene.add( ambientLight );
				var directionalLight = new THREE.DirectionalLight( 0xffffff, 0.8 );
				directionalLight.position.set( 1, 1, 0 ).normalize();
				scene.add( directionalLight );
				//
				renderer = new THREE.WebGLRenderer();
				renderer.setPixelRatio( window.devicePixelRatio );
				renderer.setSize( window.innerWidth, window.innerHeight );
				container.appendChild( renderer.domElement );
				//
				stats = new Stats();
				container.appendChild( stats.dom );
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
				render();
				stats.update();
			}
			function render() {
				var delta = clock.getDelta();
				if ( elf !== undefined ) {
					elf.rotation.z += delta * 0.5;
				}
				renderer.render( scene, camera );
			}
		</script>
	</body>
</html>
