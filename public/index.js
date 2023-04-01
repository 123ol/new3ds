import * as THREE from "../node_modules/three/build/three.module.js";
import Rocket from "./rocket.js";
import gsap from "../node_modules/gsap/index.js";
let scene;
let camera;
let renderer;
const canvas = document.querySelector(".webgl");
var startGame = false;
var stopSmoke = false;

scene = new THREE.Scene();

const launch = $(".launch");
const back = $(".backBtn");
const title = $(".title-box");





launch.click(() => {
 
  back[0].style.left="0px";
  title[0].style.display='none';
  startGame=true;
  gsap.to(rocket.mesh.scale, {
    duration: 1,
    x: 0.002,
    y: 0.002,
    z: 0.002,
    ease: "Power3.inOut",
  });
  gsap.to(rocket.mesh.position, {
    duration: 1,
    x: 0,
    y: -2,
    z: 0,
    ease: "Power3.inOut",
  });
  gsap.to(rocket.mesh.rotation, {
    duration: 2,
    x: -1.5,
    y: 1.5,
    ease: "Power3.out",
    onComplete: () => {
      startGame = true;
      stopSmoke = false;
    },
  });
});


// camera setup
const fov = 60;
const aspect = window.innerWidth / window.innerHeight;
const near = 0.1;
const far = 1000;
camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
camera.position.z = 8;
camera.position.x = 0;
scene.add(camera);


renderer = new THREE.WebGLRenderer({
    canvas: canvas,
    antialias: true,
  });


  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setPixelRatio(window.devicePixelRatio ? window.devicePixelRatio : 1);
  renderer.autoClear = false;
  renderer.setClearColor(0x000000, 0.0);
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFSoftShadowMap; 


  window.addEventListener(
    "resize",
    () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    },
    false
  );
  const ambientlight = new THREE.AmbientLight(0xffffff, 0.5);
  scene.add(ambientlight);

  const pointLight = new THREE.PointLight(0xffffff, 1);
  pointLight.position.set(0, 5, 10);
  scene.add(pointLight);
  


  var rocket = new Rocket(); 
  rocket.mesh.scale.set(0.01,0.01,0.01);
  rocket.mesh.position.x = 2.5;
rocket.mesh.position.y = 1.5;
  // rocket.mesh.rotation.x=-1.5;
  // rocket.mesh.rotation.y=1.5;
  scene.add(rocket.mesh);

  const control = {
    up: false,
    down: false,
    left: false,
    right: false,
    forward:false,
    backward:false,
  };

  const assembleParts = () => {
    transitionArray.forEach((i) => {
      i.reverse();
    });
    transitionArray = [];
  };

  window.addEventListener("keydown", (e) => {

    if (startGame) {
      assembleParts()
    if (e.keyCode==37){
      control.down=true;
      gsap.to(rocket.mesh.rotation, {
        duration: 0.2,
      
        y: 1,
        z: 0.1,
        else:"power3.out"
      });
    }
    if (e.keyCode==38){
      control.right=true;
      gsap.to(rocket.mesh.rotation, {
        duration: 0.2,
      
        x: -1.2,
        else:"power3.out"
      });
    }
    if (e.keyCode==39){
      control.up=true;

      gsap.to(rocket.mesh.rotation, {
        duration: 0.2,
      
        y: 2,
        z: -0.1,
        else:"power3.out"
      });
    }
    if (e.keyCode==40){
      control.left=true;
      gsap.to(rocket.mesh.rotation, {
        duration: 0.2,
      
        x: -1.8,

        else:"power3.out"
      });
    }
  }
  })
  window.addEventListener("keyup", (e) => {
    if (e.keyCode==37){
      control.down=false;
      gsap.to(rocket.mesh.rotation, {
        duration: 0.2,
      
        y: 1.5,
        z: 0,
        else:"power3.out"
      });
    }
    if (e.keyCode==38){
      control.right=false;
      gsap.to(rocket.mesh.rotation, {
        duration: 0.2,
      
        x: -1.5,
        else:"power3.out"
      });
    }
    if (e.keyCode==39){
      control.up=false;
      gsap.to(rocket.mesh.rotation, {
        duration: 0.2,
      
        y: 1.5,
        z: 0,
        else:"power3.out"
      }); 
    }
    if (e.keyCode==40){
      control.left=false;
      gsap.to(rocket.mesh.rotation, {
        duration: 0.2,
      
        x: -1.5,
        else:"power3.out"
      });
    }
  })


  
  const createSmoke = () => {
    let p = getParticle();
    !stopSmoke && dropParticle(p);
  };
  const particleArray = [] 
  class Particle {
    constructor() {
      var scale = 20 + Math.random() * 20;
      var nLines = 5 + Math.floor(Math.random() * 5);
      var nRows = 5 + Math.floor(Math.random() * 5);
      this.geometry = new THREE.SphereGeometry(scale, nLines, nRows);
      this.material = new THREE.MeshLambertMaterial({
        color: 0xe0a504,
        shading: THREE.FlatShading,
        transparent: true,
      });
      this.mesh = new THREE.Mesh(this.geometry, this.material);
    }
  }

  const getParticle = () => {
    let p;
    if (particleArray.length) {
      p = particleArray.pop();
    } else {
      p = new Particle();
    }
    return p;
  }

  const dropParticle = (p) => {
    scene.add(p.mesh );
    var s = Math.random(0.2) + 0.35;
    p.mesh.material.opacity = 1;
    if (startGame) {
      p.mesh.scale.set(s * 0.004, s * 0.004, s * 0.004);
      p.mesh.position.x = rocket.mesh.position.x;
      p.mesh.position.y = rocket.mesh.position.y - 0.1;
      p.mesh.position.z = rocket.mesh.position.z + 0.75;
    } else {
      p.mesh.scale.set(s * 0.015, s * 0.015, s * 0.015);
      p.mesh.position.x = 2.5;
      p.mesh.position.y = -2.2;
      p.mesh.position.z = 0;
    }
    gsap.to(p.mesh.scale, {
      duration: startGame ? 0.5 : 1,
      x: startGame ? s * 0.008 : s * 0.03,
      y: startGame ? s * 0.008 : s * 0.03,
      z: startGame ? s * 0.008 : s * 0.03,
      ease: "power3.inOut",
      onComplete: recycleParticle,
      onCompleteParams: [p],
    });
    gsap.to(
      p.mesh.position,
      startGame
        ? {
            duration: 0.5,
            z: 4,
            y: rocket.mesh.position.y - 0.5,
            ease: "none",
          }
        : {
            duration: 1,
            y: -5,
            ease: "none",
          }
    );
    gsap.to(p.mesh.material, {
      duration: startGame ? 0.5 : 1,
      opacity: 0,
      ease: "none",
    });
}
const recycleParticle = (p) => {
    p.mesh.rotation.x = Math.random() * Math.PI * 2;
    p.mesh.rotation.y = Math.random() * Math.PI * 2;
    p.mesh.rotation.z = Math.random() * Math.PI * 2;
    particleArray.push(p);
  };

  const updateRocketPosition = () => {
    if (control.up) {
      rocket.mesh.position.x += 0.2;
    }
    if (control.down) {
      rocket.mesh.position.x -= 0.2;
     
    }
    if (control.left) {
      rocket.mesh.position.y -= 0.2;
    }
    if (control.right) {
      rocket.mesh.position.y += 0.2;
    }
    if (rocket.mesh.position.y > window.innerHeight / 160) {
      rocket.mesh.position.y = window.innerHeight / 160;
    }
    if (rocket.mesh.position.y < -window.innerHeight / 160) {
      rocket.mesh.position.y = -window.innerHeight / 160;
    }
    if (rocket.mesh.position.x > window.innerWidth / 160) {
      rocket.mesh.position.x = window.innerWidth / 160;
    }
    if (rocket.mesh.position.x < -window.innerWidth / 160) {
      rocket.mesh.position.x = -window.innerWidth / 160;
    } 
  };


  const animate=()=>{
    createSmoke();
    if (!startGame) {
      rocket.mesh.rotation.y += 0.01;
    } 
    updateRocketPosition();
rocket.mesh.rotation.y+=0.01;
    requestAnimationFrame(animate);
    renderer.render(scene,camera)
  };
  animate();