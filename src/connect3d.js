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

    var camera = new BABYLON.ArcRotateCamera("arcCamera", -.4, Math.PI / 2, 5, new BABYLON.Vector3(-2.29,2.99,-2.5), scene);
    camera.attachControl(canvas, true);
    camera.position = new BABYLON.Vector3(13.9, 3.5, -9.19);
    camera.radius = 17.48;

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

    //create array for imported meshes
    scene['linkMeshes'] = [];

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
            mesh.showBoundingBox = true;

            //offset initial mesh rotation
            mesh.rotation.y += i*BABYLON.Tools.ToRadians(70);

            //set mesh rotation speed
            mesh['rotSpeed'] = BABYLON.Tools.ToRadians(12/60);

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
              i++;
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
