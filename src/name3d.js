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

    scene.clearColor = new BABYLON.Color4(0,0,0,0);

    const canvas = scene.getEngine().getRenderingCanvas();

    var camera = new BABYLON.ArcRotateCamera("arcCamera", Math.PI / -2, Math.PI / 2, 5.5, BABYLON.Vector3.Zero(), scene);
    camera.allowUpsideDown = true;
    camera.panningAxis = new BABYLON.Vector3(1,1,0);
    camera.panningInertia = .9;
    camera.panningSensibility = 850;

    //camera motion
    document.addEventListener('mousemove', logKey);
    function logKey(e) {
        var xLoc = (e.clientX - (window.innerWidth / 2)) / (window.innerWidth / 2);
        var yLoc = (e.clientY - (window.innerHeight / 2)) / (window.innerHeight / 2);
        var newAlpha = 1 * xLoc * BABYLON.Tools.ToRadians(10) + (Math.PI / -2);
        var newBeta = 1 * yLoc * BABYLON.Tools.ToRadians(10) + (Math.PI / 2);
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
    silverMat.diffuseColor = new BABYLON.Color3(.8,.8,.8);
    silverMat.specularColor = new BABYLON.Color3(.8,.8,.8);

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


function Name3d(name) {
    return (
        <div>
            <SceneComponent className='nameBabylon' antialias onSceneReady={onSceneReady} onRender={onRender} id="my-canvas" />
        </div>
    )
}

export default Name3d;