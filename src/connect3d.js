import React from 'react';
import * as BABYLON from '@babylonjs/core';
import SceneComponent from "./SceneComponent";

/**
 * @param {BABYLON.Scene} scene 
 */
 const onSceneReady = (scene) => {

    // scene.clearColor = new BABYLON.Color4(1,.5,.5,1);
    scene.clearColor = new BABYLON.Color4(0,0,0,0);

    const canvas = scene.getEngine().getRenderingCanvas();

    var k = 6000;
    var resizeOffset = 13.57;

    var camera = new BABYLON.ArcRotateCamera("arcCamera", -.4, Math.PI / 2, k / window.innerWidth + resizeOffset, new BABYLON.Vector3(-2.29,3.1,-2.5), scene);
    camera.upperBetaLimit = Math.PI/2 + .12;
    camera.target.z = -0.00358072917 * window.innerWidth + 3;

    scene.createDefaultLight()
    scene.lights[0].intensity = 1.5

    const helper = scene.createDefaultEnvironment({
      createSkybox: false,
      groundShadowLevel: 0.5,
      enableGroundMirror: true,
      skyboxTexture: undefined,
      groundTexture: './static/backgroundGround.png',
      groundColor: new BABYLON.Color3(0.2,0.2,0.2),
    });
    helper.ground.scaling = new BABYLON.Vector3(3, 3, 1);
    var ground = helper.ground;

    //set up ground for reflection texture
    ground.computeWorldMatrix(true);
    var glass_worldMatrix = ground.getWorldMatrix();
    //Obtain normals for plane and assign one of them as the normal
    var glass_vertexData = ground.getVerticesData("normal");
    var glassNormal = new BABYLON.Vector3(glass_vertexData[0], glass_vertexData[1], glass_vertexData[2]);
    //Use worldMatrix to transform normal into its current world value
    glassNormal = BABYLON.Vector3.TransformNormal(glassNormal, glass_worldMatrix)
    //Create reflector using the position and reflected normal of the flat surface
    var reflector = new BABYLON.Plane.FromPositionAndNormal(ground.position, glassNormal.scale(-1));

    const light = new BABYLON.DirectionalLight('spotlight', new BABYLON.Vector3(-3, -10, 7), scene);
    light.shadowMinZ = 1;
    light.shadowMaxZ = 20;
    light.intensity = 0.7;

    //create and blue shadows
    const shadowGenerator = new BABYLON.ShadowGenerator(512, light);
    shadowGenerator.usePoissonSampling = true;


    //declare bounding boxes (empties)
    var empty1, empty2, empty3, empty4, empty5;
    var boundingboxes = [empty1, empty2, empty3, empty4, empty5];
    var i = 0;

    //bounding box material
    var boundingMat = new BABYLON.StandardMaterial('boundingMat', scene);
    boundingMat.diffuseColor = new BABYLON.Color3(0,0,0);
    boundingMat.alpha = 0;

    //create set for meshes and links
    scene['linkMeshes'] = [];
    var links = {
        github: 'https://github.com/varun-un',
        gmail: 'mailto:varun.unnithan33@gmail.com',
        resume: './static/Varun Unnithan Resume.pdf',
        devpost: 'https://devpost.com/varun-unnithan33',
        linkedin: 'https://www.linkedin.com/in/varun-unnithan'
    }

    BABYLON.SceneLoader.ImportMesh("","", "./static/connect.babylon", scene, function(newMeshes){
        newMeshes.forEach(function (mesh) {         
            //register mesh, shadows and reflection
            shadowGenerator.getShadowMap().renderList.push(mesh);
            ground.material.reflectionTexture.renderList.push(mesh);
            scene.linkMeshes.push(mesh);

            //instantiate bounding box for the mesh
            boundingboxes[i] = BABYLON.MeshBuilder.CreateBox(mesh.name + 'bound', {
                width: 2 * mesh.getBoundingInfo().boundingBox.extendSize.x,
                height: 2 * mesh.getBoundingInfo().boundingBox.extendSize.y,
                depth: 2 * mesh.getBoundingInfo().boundingBox.extendSize.z,
                updatable: true
            }, scene);
            boundingboxes[i].parent = mesh;
            boundingboxes[i].material = boundingMat;

            //offset initial mesh rotation
            mesh.rotation.y += i*BABYLON.Tools.ToRadians(70);

            //set mesh rotation speed
            mesh['rotSpeed'] = BABYLON.Tools.ToRadians(16/60);

            var scaleFactor = 1.1;
            var reverseScaleFactor = 1/scaleFactor;

            boundingboxes[i].actionManager = new BABYLON.ActionManager(scene);
            boundingboxes[i].actionManager.registerAction(
                new BABYLON.ExecuteCodeAction(
                    BABYLON.ActionManager.OnPointerOverTrigger,
                    () => {
                        mesh.scaling = new BABYLON.Vector3(scaleFactor,scaleFactor,scaleFactor);
                        mesh.rotSpeed /= 2;
                    },
                )
            )
            boundingboxes[i].actionManager.registerAction(
                new BABYLON.ExecuteCodeAction(
                    BABYLON.ActionManager.OnPointerOutTrigger,
                    () => {
                        mesh.scaling = new BABYLON.Vector3(reverseScaleFactor,reverseScaleFactor,reverseScaleFactor);
                        mesh.rotSpeed *= 2;
                    },
                )
            )

            //go to link
            boundingboxes[i].actionManager.registerAction(
                new BABYLON.ExecuteCodeAction(
                    BABYLON.ActionManager.OnPickTrigger,
                    () => {
                        window.open(links[mesh.name]);
                    },
                )
            )

            i++;
        });
    });  

    // camera motion
    document.addEventListener('mousemove', logKey);
    function logKey(e) {
        var xLoc = (e.clientX - (window.innerWidth / 2)) / (window.innerWidth / 2);
        var yLoc = (e.clientY - (window.innerHeight / 2)) / (window.innerHeight / 2);
        updateCam(xLoc, yLoc);
    }
    function updateCam(xLoc, yLoc){
        var newAlpha = -1 * xLoc * BABYLON.Tools.ToRadians(8) + (-.4);
        var newBeta = -1 * yLoc * BABYLON.Tools.ToRadians(3) + (Math.PI / 2);
        camera.alpha = newAlpha;
        camera.beta = newBeta;
    }   

    //window resize, zoom out
    const resize = () => {
        var radius =  k / window.innerWidth + resizeOffset;
        camera.radius = radius;
        camera.target.z = -0.00358072917 * window.innerWidth + 3;
    };
    if (window) {
        window.addEventListener("resize", resize);
    }
}

/**
 * @param {BABYLON.Scene} scene 
 */
const onRender = (scene) => {
    for (var i = 0; i < scene.linkMeshes.length; i++) {
        scene.linkMeshes[i].rotation.y += scene.linkMeshes[i].rotSpeed;
    }
}


function connect3d() {
    return (
        <div className='connect3D'>
            <SceneComponent className='connect3DCanvas' antialias onSceneReady={onSceneReady} onRender={onRender} id="connect-canvas" />
        </div>
    )
}

export default connect3d
