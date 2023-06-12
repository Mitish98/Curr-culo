// Criação da cena
var scene = new THREE.Scene();

// Criação da câmera
var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 5;

// Criação do renderizador
var renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Criação da esfera
var sphere = new THREE.SphereGeometry(1, 32, 32);
var material = new THREE.MeshBasicMaterial({ color: 0xffffff, wireframe: true });
var mesh = new THREE.Mesh(sphere, material);
scene.add(mesh);

// Função de animação
function animate() {
  requestAnimationFrame(animate);
  mesh.rotation.x += 0.01;
  mesh.rotation.y += 0.01;
  renderer.render(scene, camera);
}

// Inicialização da animação
animate();



const botao = document.getElementById('botao');
const minhaDiv = document.getElementById('minha-div');

botao.addEventListener('click', function() {
  
  if (minhaDiv.style.display === 'none') {
    minhaDiv.style.display = 'grid';
  } else {
    minhaDiv.style.display = 'none';
  }
  
});
