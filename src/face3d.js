import React from 'react';
import {
    Scene, Color4, ArcRotateCamera, Vector3, HemisphericLight, SceneLoader, Tools
} from '@babylonjs/core';
import SceneComponent from "./SceneComponent";
import './home.css';


let torus;
/**
 * 
 * @param {Scene} scene 
 */
const onSceneReady = (scene) => {

    // scene.clearColor = new BABYLON.Color4(.5,.5,.5,1);
    scene.clearColor = new Color4(0,0,0,0);

    const canvas = scene.getEngine().getRenderingCanvas();

    var k = 5500;   //k for scale of radius refactor on window resize
    var resizeOffset = 1;     //offset of radius refactor on resize

    var camera = new ArcRotateCamera("arcCamera", Math.PI * 1.6, Math.PI / 2, k / window.innerWidth + resizeOffset, Vector3.Zero(), scene);
    camera.attachControl(canvas, true);
    camera.angularSensibilityX = 1500;
    camera.angularSensibilityY = 1500;
    camera.lowerBetaLimit = (0);        //around x axis and alpha is y
    camera.upperBetaLimit = (2 * Math.PI / 3);
    camera.upperRadiusLimit = k / window.innerWidth + resizeOffset;
    camera.lowerRadiusLimit = k / window.innerWidth + resizeOffset;
    camera.wheelDeltaPercentage = 0;
    camera.allowUpsideDown = true;
    camera.panningAxis = new Vector3(1,1,0);
    camera.panningInertia = .9;
    camera.panningSensibility = 0;
    
    var hemiLight = new HemisphericLight("downLight", new Vector3(0,1,0), scene);
    hemiLight.intensity = .5;
    var light = new HemisphericLight("light", new Vector3(0,0,-1), scene);
    light.parent = camera;

    light.intensity = .7;

    SceneLoader.ImportMesh("","", "./static/face.babylon", scene, function(newMeshes){
        newMeshes.forEach(function (mesh) {         //for each in the array of meshes imported
            hemiLight.includedOnlyMeshes.push(mesh);
            scene.meshes.push(mesh);
            mesh.position.y -= .1;
            mesh.position.z += .2;

            if (mesh.name == 'left eye') {
                mesh.rotation.y += Tools.ToRadians(-5);
            }
        });
    });    

    // torus = BABYLON.MeshBuilder.CreateTorus("ring", { diameter:3.5, thickness: .04, tessellation: 128, updatable: true });
    // torus.rotation.x = BABYLON.Tools.ToRadians(xRotSin(0, 7, 400));
    // torus.rotation.z = BABYLON.Tools.ToRadians(zRotCos(0, 6, 400));
    // torus.position.y = -.4;
    // var torusYAnim = new BABYLON.Animation("torusYAnim", "position.y", 60, BABYLON.Animation.ANIMATIONTYPE_FLOAT,
    //     BABYLON.Animation.ANIMATIONLOOPMODE_CYCLE);
    // var torusYKeys = [];
    // torusYKeys.push({
    //     frame: 0,
    //     value: -.4
    // });
    // torusYKeys.push({
    //     frame: 900,
    //     value: .3
    // });
    // torusYKeys.push({
    //     frame: 1800,
    //     value: -.4
    // });
    // torusYAnim.setKeys(torusYKeys);
    // scene.beginDirectAnimation(torus, [torusYAnim], 0, 1800, true);

    // var bronzeMat = new BABYLON.StandardMaterial("bronzeMat", scene);
    // bronzeMat.diffuseColor = new BABYLON.Color3(1.0, 0.766, 0.336);
    // bronzeMat.specularColor = new BABYLON.Color3(1.0, 0.9, 0.6);
    // bronzeMat.specularPower = 1;
    // torus.material = bronzeMat;

    //window resize, zoom out
    const resize = () => {
        camera.upperRadiusLimit = k / window.innerWidth + resizeOffset;
        camera.lowerRadiusLimit = k / window.innerWidth + resizeOffset;
        camera.radius = k / window.innerWidth + resizeOffset;
    };
    if (window) {
        window.addEventListener("resize", resize);
    }

    //fade in canvas
    scene.executeWhenReady(function() {
        var i = 1;
        var fadeInterval = setInterval(() => {
            document.getElementById('faceBabylonDiv').style.opacity = i * .05;
            i++;
            if (i > 20){
                clearInterval(fadeInterval);
            }
        }, 30);
    })

};

// var frame = 0;
// var speed = 1000/60;
// //equations for the rotation axis of the torus
// const xRotSin = (curFrame, amplitude, period) => (amplitude * Math.sin(((Math.PI * 2) / period) * curFrame));
// const zRotCos = (curFrame, amplitude, period) => (amplitude * Math.cos(((Math.PI * 2) / period) * curFrame));
/**
 * 
 * @param {Scene} scene 
 */
const onRender = (scene) => {
    // if (torus !== undefined) {
    //     frame += scene.getEngine().getDeltaTime() / speed;
    //     torus.rotation.x = BABYLON.Tools.ToRadians(xRotSin(frame, 7, 400));
    //     torus.rotation.z = BABYLON.Tools.ToRadians(zRotCos(frame, 6, 400));
    // }
};


function Face3d() {

    return (
        <div className='faceBabylon' id='faceBabylonDiv'>
            <SceneComponent className='faceBabylonCanvas' antialias onSceneReady={onSceneReady} onRender={onRender} id="face-canvas" />
        </div>
    )
}

export default Face3d;