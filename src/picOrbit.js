import React from "react";
import * as BABYLON from '@babylonjs/core';
import SceneComponent from "./SceneComponent";
import './home.css';

/**
 * 
 * @param {BABYLON.Scene} scene 
 */
const onSceneReady = (scene) => {

    scene.clearColor = new BABYLON.Color4(1,1,1,1);
    // scene.clearColor = new BABYLON.Color4(0,0,0,0);

    const canvas = scene.getEngine().getRenderingCanvas();

    const resize = () => {
        camera.radius = 5000 / window.innerWidth + 2.3;
    };
    if (window) {
        window.addEventListener("resize", resize);
    }
};

function picorbit(name) {
    return (
        <div>
            <SceneComponent className='pic-orbit' antialias onSceneReady={onSceneReady} id="picture-canvas" />
        </div>
    )
}

export default picorbit;