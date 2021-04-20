import React from 'react';
import * as BABYLON from '@babylonjs/core';
import SceneComponent from "./SceneComponent";

/**
 * @param {BABYLON.Scene} scene 
 */
 const onSceneReady = (scene) => {

    // scene.clearColor = new BABYLON.Color4(.5,.5,.5,1);
    scene.clearColor = new BABYLON.Color4(0,0,0,0);

    const canvas = scene.getEngine().getRenderingCanvas();

    var camera = new BABYLON.ArcRotateCamera("arcCamera", Math.PI/-2, Math.PI / 2, 5, BABYLON.Vector3.Zero(), scene);
    camera.attachControl(canvas, true);

    // var light = new BABYLON.HemisphericLight("light", new BABYLON.Vector3(0,0,-1), scene);
    // light.parent = camera;
    // light.intensity = .7;

    // var ground = new BABYLON.MeshBuilder.CreateGround('ground', {width: 4, height: 4, updatable: true}, scene);
    // var groundMat = new BABYLON.StandardMaterial('groundMat', scene);
    // groundMat.diffuseColor = new BABYLON.Color3(1,1,1);
    // ground.material = groundMat;

    scene.createDefaultLight()
    scene.lights[0].intensity = 1.5


    const helper = scene.createDefaultEnvironment({
      createSkybox: false,
      groundShadowLevel: 0.5,
      enableGroundMirror: true,
      skyboxTexture: undefined,
      groundTexture: './static/backgroundGround.png',
      groundColor: new BABYLON.Color3(.5,.5,.5),
    });
    helper.ground.scaling = new BABYLON.Vector3(2, 2, 1);
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

    // var mirrorMaterial = new BABYLON.StandardMaterial("MirrorMat", scene);
    // mirrorMaterial.reflectionTexture = new BABYLON.MirrorTexture("mirror", 512, scene, true);
    // mirrorMaterial.reflectionTexture.mirrorPlane = reflector;
    // mirrorMaterial.reflectionTexture.renderList = [];
    // mirrorMaterial.diffuseTexture = new BABYLON.Texture('./static/backgroundGround.png', scene);
    // mirrorMaterial.diffuseColor = new BABYLON.Color3(.5,.5,.5);
    // console.log(ground.material);
    // console.log(mirrorMaterial);
    // ground.material = mirrorMaterial;
    // ground.material.diffuseTexture.hasAlpha = true
    // ground.material.useAlphaFromDiffuseTexture = true
    // ground.material.alphaMode = BABYLON.Engine.ALPHA_MULTIPLY

    const light = new BABYLON.SpotLight('spotlight', new BABYLON.Vector3(-2.19, 6.68, -4.62), new BABYLON.Vector3(-0.06, -0.75, 0.66), 1.7, 1, scene);
    light.shadowMinZ = 1;
    light.shadowMaxZ = 20;
    light.intensity = 0.7;

    const shadowGenerator = new BABYLON.ShadowGenerator(512, light);
    shadowGenerator.usePoissonSampling = true;

    // var box = new BABYLON.MeshBuilder.CreateBox('box', { size: 10}, scene);

    BABYLON.SceneLoader.ImportMesh("","", "./static/connect.babylon", scene, function(newMeshes){
        newMeshes.forEach(function (mesh) {         //for each in the array of meshes imported
            // mesh.scaling = new BABYLON.Vector3(1,1,1);
            shadowGenerator.getShadowMap().renderList.push(mesh);
            ground.material.reflectionTexture.renderList.push(mesh);
        });
    });  

    function showWorldAxis(size) {
        var makeTextPlane = function(text, color, size) {
            var dynamicTexture = new BABYLON.DynamicTexture("DynamicTexture", 50, scene, true);
            dynamicTexture.hasAlpha = true;
            dynamicTexture.drawText(text, 5, 40, "bold 36px Arial", color , "transparent", true);
            var plane = BABYLON.Mesh.CreatePlane("TextPlane", size, scene, true);
            plane.material = new BABYLON.StandardMaterial("TextPlaneMaterial", scene);
            plane.material.backFaceCulling = false;
            plane.material.specularColor = new BABYLON.Color3(0, 0, 0);
            plane.material.diffuseTexture = dynamicTexture;
        return plane;
            };
        var axisX = BABYLON.Mesh.CreateLines("axisX", [ 
            BABYLON.Vector3.Zero(), new BABYLON.Vector3(size, 0, 0), new BABYLON.Vector3(size * 0.95, 0.05 * size, 0), 
            new BABYLON.Vector3(size, 0, 0), new BABYLON.Vector3(size * 0.95, -0.05 * size, 0)
            ], scene);
        axisX.color = new BABYLON.Color3(1, 0, 0);
        var xChar = makeTextPlane("X", "red", size / 10);
        xChar.position = new BABYLON.Vector3(0.9 * size, -0.05 * size, 0);
        var axisY = BABYLON.Mesh.CreateLines("axisY", [
            BABYLON.Vector3.Zero(), new BABYLON.Vector3(0, size, 0), new BABYLON.Vector3( -0.05 * size, size * 0.95, 0), 
            new BABYLON.Vector3(0, size, 0), new BABYLON.Vector3( 0.05 * size, size * 0.95, 0)
            ], scene);
        axisY.color = new BABYLON.Color3(0, 1, 0);
        var yChar = makeTextPlane("Y", "green", size / 10);
        yChar.position = new BABYLON.Vector3(0, 0.9 * size, -0.05 * size);
        var axisZ = BABYLON.Mesh.CreateLines("axisZ", [
            BABYLON.Vector3.Zero(), new BABYLON.Vector3(0, 0, size), new BABYLON.Vector3( 0 , -0.05 * size, size * 0.95),
            new BABYLON.Vector3(0, 0, size), new BABYLON.Vector3( 0, 0.05 * size, size * 0.95)
            ], scene);
        axisZ.color = new BABYLON.Color3(0, 0, 1);
        var zChar = makeTextPlane("Z", "blue", size / 10);
        zChar.position = new BABYLON.Vector3(0, 0.05 * size, 0.9 * size);
    };
    showWorldAxis(15);
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
