import React from "react";
import * as BABYLON from '@babylonjs/core';
import SceneComponent from "./SceneComponent";
import './home.css';


let torus;
/**
 * 
 * @param {BABYLON.Scene} scene 
 */
const onSceneReady = (scene) => {

    // scene.clearColor = new BABYLON.Color4(1,1,1,1);
    scene.clearColor = new BABYLON.Color4(0,0,0,0);

    const canvas = scene.getEngine().getRenderingCanvas();

    var camera = new BABYLON.ArcRotateCamera("arcCamera", Math.PI / -2, Math.PI / 2, 5000 / window.innerWidth + 2.3, BABYLON.Vector3.Zero(), scene);
    camera.attachControl(canvas, true);
    camera.angularSensibilityX = 9000;
    camera.angularSensibilityY = 9000;
    camera.upperAlphaLimit = BABYLON.Tools.ToRadians(20) + (Math.PI / -2);
    camera.upperBetaLimit = BABYLON.Tools.ToRadians(20) + (Math.PI / 2);
    camera.lowerAlphaLimit = BABYLON.Tools.ToRadians(-20) + (Math.PI / -2);
    camera.lowerBetaLimit = BABYLON.Tools.ToRadians(-20) + (Math.PI / 2);
    camera.upperRadiusLimit = 5000 / window.innerWidth + 2.3;
    camera.lowerRadiusLimit = 5000 / window.innerWidth + 2.3;
    camera.allowUpsideDown = true;
    camera.panningAxis = new BABYLON.Vector3(1,1,0);
    camera.panningInertia = .9;
    camera.panningSensibility = 850;

    //camera motion
    document.addEventListener('mousemove', logKey);
    function logKey(e) {
        var xLoc = (e.clientX - (window.innerWidth / 2)) / (window.innerWidth / 2);
        var yLoc = (e.clientY - (window.innerHeight / 2)) / (window.innerHeight / 2);
        updateCam(xLoc, yLoc);
    }
    function updateCam(xLoc, yLoc){
        var newAlpha = -1 * xLoc * BABYLON.Tools.ToRadians(10) + (Math.PI / -2);
        var newBeta = -1 * yLoc * BABYLON.Tools.ToRadians(10) + (Math.PI / 2);
        camera.alpha = newAlpha;
        camera.beta = newBeta;
    }   

    
    var downLight = new BABYLON.HemisphericLight("downLight", new BABYLON.Vector3(0,1,0), scene);
    downLight.intensity = .2;
    var light = new BABYLON.PointLight("light", new BABYLON.Vector3(0,0,-10), scene);
    light.parent = camera;

    light.intensity = .5;

    //BABYLON.MeshBuilder.CreateGround("ground", { width: 6, height: 6 }, scene);

    var silverMat = new BABYLON.StandardMaterial("silverMat", scene);
    silverMat.diffuseColor = new BABYLON.Color3(.9,.9,.9);
    silverMat.specularColor = new BABYLON.Color3(.8,.8,.8);
    silverMat.alpha = 1;

    BABYLON.SceneLoader.ImportMesh("","", "./models/varun-name.babylon", scene, function(newMeshes){
        newMeshes.forEach(function (mesh) {         //for each in the array of meshes imported
            mesh.scale = new BABYLON.Vector3(.2,.2,.2);
            mesh.material = silverMat;
            mesh.position.x -= .7;
        });
    });    

    torus = BABYLON.MeshBuilder.CreateTorus("ring", { diameter:7, thickness: .04, tessellation: 128, updatable: true });

    var bronzeMat = new BABYLON.StandardMaterial("bronzeMat", scene);
    bronzeMat.diffuseColor = new BABYLON.Color3(1.0, 0.766, 0.336);
    bronzeMat.specularColor = BABYLON.Color3.White();
    bronzeMat.specularPower = 1;
    torus.material = bronzeMat;

    torus.scaling.z = .5;
    torus.position.z = .18;
    torus.position.x = -.4;
    torus.position.y = 0;

    var silverMatR = new BABYLON.Animation("silverMatAlpha", "diffuseColor.r", 60, BABYLON.Animation.ANIMATIONTYPE_FLOAT,
        BABYLON.Animation.ANIMATIONLOOPMODE_CYCLE);
    var silverMatG = new BABYLON.Animation("silverMatAlpha", "diffuseColor.g", 60, BABYLON.Animation.ANIMATIONTYPE_FLOAT,
        BABYLON.Animation.ANIMATIONLOOPMODE_CYCLE);
    var silverMatB = new BABYLON.Animation("silverMatAlpha", "diffuseColor.b", 60, BABYLON.Animation.ANIMATIONTYPE_FLOAT,
        BABYLON.Animation.ANIMATIONLOOPMODE_CYCLE);
    var alphaKeys = [];
    alphaKeys.push({
        frame: 0,
        value: 0
    });
    alphaKeys.push({
        frame: 90,
        value: .9
    });
    silverMatR.setKeys(alphaKeys);
    silverMatG.setKeys(alphaKeys);
    silverMatB.setKeys(alphaKeys);
    scene.beginDirectAnimation(silverMat, [silverMatR, silverMatB, silverMatG], 0, 90);
    BABYLON.Animation.CreateAndStartAnimation("lightFade", light, "intensity", 60, 120, 0, .5, false);
    BABYLON.Animation.CreateAndStartAnimation("downlightFade", downLight, "intensity", 60, 120, -.1, .2, false);

    const resize = () => {
        camera.radius = 5000 / window.innerWidth + 2.3;
    };
    if (window) {
        window.addEventListener("resize", resize);
    }
};

var frame = 0;
var speed = 1000/60;
//equations for the rotation axis of the torus
const xRotSin = (curFrame, amplitude, period) => (amplitude * Math.sin(((Math.PI * 2) / period) * curFrame));
const zRotCos = (curFrame, amplitude, period) => (amplitude * Math.cos(((Math.PI * 2) / period) * curFrame));
/**
 * 
 * @param {BABYLON.Scene} scene 
 */
const onRender = (scene) => {
    if (torus !== undefined) {
        frame += scene.getEngine().getDeltaTime() / speed;
        torus.rotation.x = BABYLON.Tools.ToRadians(xRotSin(frame, 7, 400));
        torus.rotation.z = BABYLON.Tools.ToRadians(zRotCos(frame, 6, 400));
    }
};


function Name3d() {
    return (
        <div>
            <SceneComponent className='nameBabylon' antialias onSceneReady={onSceneReady} onRender={onRender} id="name-canvas" />
        </div>
    )
}

export default Name3d;