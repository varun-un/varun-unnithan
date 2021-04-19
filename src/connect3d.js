import React from 'react';
import * as BABYLON from '@babylonjs/core';
import SceneComponent from "./SceneComponent";

/**
 * @param {BABYLON.Scene} scene 
 */
 const onSceneReady = (scene) => {

    scene.clearColor = new BABYLON.Color4(.5,.5,.5,1);
    // scene.clearColor = new BABYLON.Color4(0,0,0,0);

    const canvas = scene.getEngine().getRenderingCanvas();

    var camera = new BABYLON.ArcRotateCamera("arcCamera", Math.PI/2, Math.PI / 2, 5, BABYLON.Vector3.Zero(), scene);

    var light = new BABYLON.HemisphericLight("light", new BABYLON.Vector3(0,0,-1), scene);
    light.parent = camera;
    light.intensity = .7;

    var sphere = BABYLON.MeshBuilder.CreateSphere('sphere', {diameter:1}, scene);
}

/**
 * @param {BABYLON.Scene} scene 
 */
const onRender = (scene) => {
    
}


function connect3d() {
    return (
        <div className='connect3D'>
            <SceneComponent className='connect3DCanvas' antialias onSceneReady={onSceneReady} onRender={onRender} id="connect-canvas" />
        </div>
    )
}

export default connect3d
