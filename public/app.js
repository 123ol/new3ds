let scene;
let camera;
let renderer;
//    const clik =document.querySelector(".webgl");
//    const add =document.querySelector("#add");

function main()
{


    const canvas =document.querySelector(".c");


    scene = new THREE.Scene();

    camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 2;
    scene.add(camera);

    renderer = new THREE.WebGLRenderer({canvas: canvas});
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);

    renderer.autoClear = false;
    renderer.setClearColor(0x00000, 0.0);


    // create sungeometry


    // document
    // .querySelector(".main .close-btn")
    // .addEventListener("click", function () {
    //   document.querySelector(".main").classList.remove("active");
    // });



const vengeometry = new THREE.SphereGeometry(0.08,32,32);

const venmaterial = new THREE.MeshPhongMaterial({
    roughness : 1,
    metalness:0,
    map: THREE.ImageUtils.loadTexture('texture/venusmapthumb.jpg'),
    bumpMap: THREE.ImageUtils.loadTexture('texture/venusbumpthumb.jpg'),
    bumpScale: 0.3,
});

const venmesh = new THREE.Mesh(vengeometry,venmaterial);
venmesh.position.x = -0.8;

scene.add(venmesh);
const vdomEvents	= new THREEx.DomEvents(camera, renderer.domElement)

vdomEvents.addEventListener(venmesh, 'click', function(event){

  document.querySelector(".popup9").classList.add("active");


}, false)


document
  .querySelector(".popup9 .close-btn")
  .addEventListener("click", function () {
    document.querySelector(".popup9").classList.remove("active");
  });
    // create earthgeometry



    const earthgeometry = new THREE.SphereGeometry(0.06,32,32);

    const eatrhmaterial = new THREE.MeshPhongMaterial({
        roughness : 1,
        metalness:0,
        map: THREE.ImageUtils.loadTexture('texture/earthmap1k.jpg'),
        bumpMap: THREE.ImageUtils.loadTexture('texture/earthbump.jpg'),
        bumpScale: 0.3,
    });

    const earthmesh = new THREE.Mesh(earthgeometry,eatrhmaterial);
    earthmesh.position.x = -0.6;
    scene.add(earthmesh);


  //   var spritey = makeTextSprite( " Hello ", 
	// 	{ fontsize: 44, textColor: {r:255, g:255, b:255, a:1.0}} );
	// spritey.position.set(5,5,5);
	// scene.add( spritey );
  // earthmesh.scale.set(7,7,7);
  // earthmesh.position.x = 0;

  // function makeTextSprite( message, parameters )
  //   {
  //       if ( parameters === undefined ) parameters = {};
  //       var fontface = parameters.hasOwnProperty("fontface") ? parameters["fontface"] : "Courier New";
  //       var fontsize = parameters.hasOwnProperty("fontsize") ? parameters["fontsize"] : 18;
  //       var borderThickness = parameters.hasOwnProperty("borderThickness") ? parameters["borderThickness"] : 4;
  //       var borderColor = parameters.hasOwnProperty("borderColor") ?parameters["borderColor"] : { r:0, g:0, b:0, a:1.0 };
  //       var backgroundColor = parameters.hasOwnProperty("backgroundColor") ?parameters["backgroundColor"] : { r:0, g:0, b:255, a:1.0 };
  //       var textColor = parameters.hasOwnProperty("textColor") ?parameters["textColor"] : { r:0, g:0, b:0, a:1.0 };

  //       var canvas = document.createElement('canvas');
  //       var context = canvas.getContext('2d');
  //       context.font = "Bold " + fontsize + "px " + fontface;
  //       var metrics = context.measureText( message );
  //       var textWidth = metrics.width;

  //       context.fillStyle   = "rgba(" + backgroundColor.r + "," + backgroundColor.g + "," + backgroundColor.b + "," + backgroundColor.a + ")";
  //       context.strokeStyle = "rgba(" + borderColor.r + "," + borderColor.g + "," + borderColor.b + "," + borderColor.a + ")";
  //       context.fillStyle = "rgba("+textColor.r+", "+textColor.g+", "+textColor.b+", 1.0)";
  //       context.fillText( message, borderThickness, fontsize + borderThickness);

  //       var texture = new THREE.Texture(canvas) 
  //       texture.needsUpdate = true;
  //       var spriteMaterial = new THREE.SpriteMaterial( { map: texture, useScreenCoordinates: false } );
  //       var sprite = new THREE.Sprite( spriteMaterial );
  //       sprite.scale.set(0.5 * fontsize, 0.25 * fontsize, 0.75 * fontsize);
  //       return sprite;  
  //   }

    const marsgeometry = new THREE.SphereGeometry(0.05,32,32);

    const marsmaterial = new THREE.MeshPhongMaterial({
        roughness : 1,
        metalness:0,
        map: THREE.ImageUtils.loadTexture('texture/8k_mars.jpg'),
    });
    const marsmesh = new THREE.Mesh(marsgeometry,marsmaterial);
    marsmesh.position.x = -0.4;
    scene.add(marsmesh);

    const mdomEvents	= new THREEx.DomEvents(camera, renderer.domElement)

    mdomEvents.addEventListener(marsmesh, 'click', function(event){
    
      document.querySelector(".popup5").classList.add("active");
    
    
    }, false)
    
    
    document
      .querySelector(".popup5 .close-btn")
      .addEventListener("click", function () {
        document.querySelector(".popup5").classList.remove("active");
      });


    const jupgeometry = new THREE.SphereGeometry(0.19,32,32);

    const jupmaterial = new THREE.MeshPhongMaterial({
        roughness : 1,
        metalness:0,
        map: THREE.ImageUtils.loadTexture('texture/8k_jupiter.jpg'),
    });
    const jupmesh = new THREE.Mesh(jupgeometry,jupmaterial);
    jupmesh.position.x = -0.1;
scene.add(jupmesh);

const jdomEvents	= new THREEx.DomEvents(camera, renderer.domElement)

jdomEvents.addEventListener(jupmesh, 'click', function(event){

  document.querySelector(".popup4").classList.add("active");


}, false)


document
  .querySelector(".popup4 .close-btn")
  .addEventListener("click", function () {
    document.querySelector(".popup4").classList.remove("active");
  });

const satgeometry = new THREE.SphereGeometry(0.15,32,32);

const satmaterial = new THREE.MeshPhongMaterial({
    roughness : 1,
    metalness:0,
    map: THREE.ImageUtils.loadTexture('texture/8k_saturn.jpg'),
});
const satmesh = new THREE.Mesh(satgeometry,satmaterial);
satmesh.position.x = 0.3;
scene.add(satmesh);

const sdomEvents	= new THREEx.DomEvents(camera, renderer.domElement)

sdomEvents.addEventListener(satmesh, 'click', function(event){

  document.querySelector(".popup3").classList.add("active");


}, false)


document
  .querySelector(".popup3 .close-btn")
  .addEventListener("click", function () {
    document.querySelector(".popup3").classList.remove("active");
  });

const ringgeometry = new THREE.SphereGeometry(0.12,32,32);

const ringmaterial = new THREE.MeshPhongMaterial({
    roughness : 1,
    metalness:0,
    map: THREE.ImageUtils.loadTexture('texture/2k_uranus.jpg'),
});
const ringmesh = new THREE.Mesh(ringgeometry,ringmaterial);
ringmesh.position.x = 0.7;
scene.add(ringmesh);

const rdomEvents	= new THREEx.DomEvents(camera, renderer.domElement)

rdomEvents.addEventListener(ringmesh, 'click', function(event){

  document.querySelector(".popup2").classList.add("active");


}, false)


document
  .querySelector(".popup2 .close-btn")
  .addEventListener("click", function () {
    document.querySelector(".popup2").classList.remove("active");
  });


const nepgeometry = new THREE.SphereGeometry(0.08,32,32);

const nepmaterial = new THREE.MeshPhongMaterial({
    roughness : 1,
    metalness:0,
    map: THREE.ImageUtils.loadTexture('texture/2k_neptune.jpg'),
});
const nepmesh = new THREE.Mesh(nepgeometry,nepmaterial);
nepmesh.position.x = 1.1;

scene.add(nepmesh);


const domEvents	= new THREEx.DomEvents(camera, renderer.domElement)

domEvents.addEventListener(nepmesh, 'click', function(event){

  document.querySelector(".popup1").classList.add("active");


}, false)


document
  .querySelector(".popup1 .close-btn")
  .addEventListener("click", function () {
    document.querySelector(".popup1").classList.remove("active");
  });

    // set ambientlight

    const ambientlight = new THREE.AmbientLight(0xffffff, 0.2);
    scene.add(ambientlight);

    // set point light

    const pointerlight =  new THREE.PointLight(0xffffff,0.9);

    // set light position

    pointerlight.position.set(5,3,5);
    scene.add(pointerlight);

    const sungeometry= new THREE.SphereGeometry(0.33,32,32);
const sunmaterial =new THREE.MeshPhongMaterial({
    roughness:1,
    map: THREE.ImageUtils.loadTexture('texture/sun.jpg'),
});
const sunmesh = new THREE.Mesh(sungeometry,sunmaterial);
sunmesh.position.x = -1.7;
scene.add(sunmesh);

const sundomEvents	= new THREEx.DomEvents(camera, renderer.domElement)

sundomEvents.addEventListener(sunmesh, 'click', function(event){

  document.querySelector(".car").classList.add("active");


}, false)


document
  .querySelector(".car .close-btn")
  .addEventListener("click", function () {
    document.querySelector(".car").classList.remove("active");
  });
//  create earthgeometry


const mergeometry= new THREE.SphereGeometry(0.1,32,32);
const mermaterial =new THREE.MeshPhongMaterial({
    roughness:1,
    map: THREE.ImageUtils.loadTexture('texture/mercurymapthumb.jpg'),
});
const mermesh = new THREE.Mesh(mergeometry,mermaterial);
mermesh.position.x = -1.1;
scene.add(mermesh);


const medomEvents	= new THREEx.DomEvents(camera, renderer.domElement)

medomEvents.addEventListener(mermesh, 'click', function(event){

  document.querySelector(".popupmed").classList.add("active");


}, false)


document
  .querySelector(".popupmed .close-btn")
  .addEventListener("click", function () {
    document.querySelector(".popupmed").classList.remove("active");
  });

    // cloud
    const clougeometry =  new THREE.SphereGeometry(0.07,32,32);

    const cloumaterial = new THREE.MeshPhongMaterial({
        map: THREE.ImageUtils.loadTexture('texture/earthCloud.png'),
        transparent: true
    });

    const cloumesh = new THREE.Mesh(clougeometry,cloumaterial);
    cloumesh.position.x = -0.6;
    scene.add(cloumesh);

    const edomEvents	= new THREEx.DomEvents(camera, renderer.domElement)

edomEvents.addEventListener(cloumesh, 'click', function(event){

  document.querySelector(".popup7").classList.add("active");


}, false)


document
  .querySelector(".popup7 .close-btn")
  .addEventListener("click", function () {
    document.querySelector(".popup7").classList.remove("active");
  });
    // star

    const stargeometry =  new THREE.SphereGeometry(80,64,64);

    const starmaterial = new THREE.MeshBasicMaterial({

        map: THREE.ImageUtils.loadTexture('texture/galaxy.png'),
        side: THREE.BackSide
    });

    const starmesh = new THREE.Mesh(stargeometry,starmaterial);

    scene.add(starmesh);

    const animate = () =>{
        requestAnimationFrame(animate);
        sunmesh.rotation.y += 0.001;
        earthmesh.rotation.y -= 0.011;
        marsmesh.rotation.y -= 0.011;
        venmesh.rotation.y -= 0.011;
        mermesh.rotation.y -= 0.011;
        jupmesh.rotation.y -= 0.013;
        satmesh.rotation.y -= 0.013;
        ringmesh.rotation.y -= 0.013;
        nepmesh.rotation.y -= 0.013;
        cloumesh.rotation.y += 0.0015;
        starmesh.rotation.y += 0.0005;

        render();
    }

    const render = () => {
        renderer.render(scene,camera);
    }

    animate();
}

window.onload = main;