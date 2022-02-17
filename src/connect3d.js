import React from 'react';
import { 
    Color3, Color4, ArcRotateCamera, Scene, Vector3, Plane, DirectionalLight, ShadowGenerator, StandardMaterial, SceneLoader, MeshBuilder,
    Tools, ActionManager, ExecuteCodeAction
} from '@babylonjs/core';
import "@babylonjs/core/Materials/PBR/pbrBaseMaterial";
import SceneComponent from "./SceneComponent";

/**
 * @param {Scene} scene 
 */
 const onSceneReady = (scene) => {

    // scene.clearColor = new Color4(1,.5,.5,1);
    scene.clearColor = new Color4(0,0,0,0);

    const canvas = scene.getEngine().getRenderingCanvas();

    var k = 6000;
    var resizeOffset = 13.57;

    var camera = new ArcRotateCamera("arcCamera", -.4, Math.PI / 2, k / window.innerWidth + resizeOffset, new Vector3(-2.29,3.1,-2.5), scene);
    camera.upperBetaLimit = Math.PI/2 + .12;
    camera.target.z = -0.00358072917 * window.innerWidth + 3;

    scene.createDefaultLight()
    scene.lights[0].intensity = 1.5

    const helper = scene.createDefaultEnvironment({
      createSkybox: false,
      groundShadowLevel: 0.5,
      enableGroundMirror: true,
      skyboxTexture: undefined,
      groundTexture: './backgroundGround.png',
      groundColor: new Color3(1,1,1),
    });
    helper.ground.scaling = new Vector3(3, 3, 1);
    var ground = helper.ground;

    //set up ground for reflection texture
    ground.computeWorldMatrix(true);
    var glass_worldMatrix = ground.getWorldMatrix();
    //Obtain normals for plane and assign one of them as the normal
    var glass_vertexData = ground.getVerticesData("normal");
    var glassNormal = new Vector3(glass_vertexData[0], glass_vertexData[1], glass_vertexData[2]);
    //Use worldMatrix to transform normal into its current world value
    glassNormal = Vector3.TransformNormal(glassNormal, glass_worldMatrix)
    //Create reflector using the position and reflected normal of the flat surface
    var reflector = new Plane.FromPositionAndNormal(ground.position, glassNormal.scale(-1));

    const light = new DirectionalLight('spotlight', new Vector3(-3, -10, 7), scene);
    light.shadowMinZ = 1;
    light.shadowMaxZ = 20;
    light.intensity = 0.7;

    //create and blue shadows
    const shadowGenerator = new ShadowGenerator(512, light);
    shadowGenerator.usePoissonSampling = true;


    //declare bounding boxes (empties)
    var empty1, empty2, empty3, empty4, empty5;
    var boundingboxes = [empty1, empty2, empty3, empty4, empty5];
    var i = 0;

    //bounding box material
    var boundingMat = new StandardMaterial('boundingMat', scene);
    boundingMat.diffuseColor = new Color3(0,0,0);
    boundingMat.alpha = 0;

    //create set for meshes and links
    scene['linkMeshes'] = [];
    var links = {
        github: 'https://github.com/varun-un',
        gmail: 'mailto:varun.unnithan33@gmail.com',
        resume: './Varun Unnithan Resume.pdf',
        devpost: 'https://devpost.com/varun-unnithan33',
        linkedin: 'https://www.linkedin.com/in/varun-unnithan'
    }

    SceneLoader.ImportMesh("","", "./connect.babylon", scene, function(newMeshes){
        newMeshes.forEach(function (mesh) {         
            //register mesh, shadows and reflection
            shadowGenerator.getShadowMap().renderList.push(mesh);
            ground.material.reflectionTexture.renderList.push(mesh);
            scene.linkMeshes.push(mesh);

            //instantiate bounding box for the mesh
            boundingboxes[i] = MeshBuilder.CreateBox(mesh.name + 'bound', {
                width: 2 * mesh.getBoundingInfo().boundingBox.extendSize.x,
                height: 2 * mesh.getBoundingInfo().boundingBox.extendSize.y,
                depth: 2 * mesh.getBoundingInfo().boundingBox.extendSize.z,
                updatable: true
            }, scene);
            boundingboxes[i].parent = mesh;
            boundingboxes[i].material = boundingMat;

            //offset initial mesh rotation
            mesh.rotation.y += i*Tools.ToRadians(70);

            //set mesh rotation speed
            mesh['rotSpeed'] = Tools.ToRadians(16/60);

            var scaleFactor = 1.1;
            var reverseScaleFactor = 1/scaleFactor;

            if (window.innerWidth >= 768) {

                //register hover actions
                boundingboxes[i].actionManager = new ActionManager(scene);
                boundingboxes[i].actionManager.registerAction(
                    new ExecuteCodeAction(
                        ActionManager.OnPointerOverTrigger,
                        () => {
                            mesh.scaling = new Vector3(scaleFactor,scaleFactor,scaleFactor);
                            mesh.rotSpeed /= 2;
                        },
                    )
                )
                boundingboxes[i].actionManager.registerAction(
                    new ExecuteCodeAction(
                        ActionManager.OnPointerOutTrigger,
                        () => {
                            mesh.scaling = new Vector3(reverseScaleFactor,reverseScaleFactor,reverseScaleFactor);
                            mesh.rotSpeed *= 2;
                        },
                    )
                )
            }

            //go to link
            boundingboxes[i].actionManager.registerAction(
                new ExecuteCodeAction(
                    ActionManager.OnPickTrigger,
                    () => {
                        window.open(links[mesh.name]);
                    },
                )
            )

            i++;
        });
    });  

    // camera motion
    if (window.innerWidth >= 768) {
        document.addEventListener('mousemove', logKey);
    }
    else {
        camera.detachControl(canvas);
    }
    function logKey(e) {
        var xLoc = (e.clientX - (window.innerWidth / 2)) / (window.innerWidth / 2);
        var yLoc = (e.clientY - (window.innerHeight / 2)) / (window.innerHeight / 2);
        updateCam(xLoc, yLoc);
    }
    function updateCam(xLoc, yLoc){
        var newAlpha = -1 * xLoc * Tools.ToRadians(8) + (-.4);
        var newBeta = -1 * yLoc * Tools.ToRadians(3) + (Math.PI / 2);
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
 * @param {Scene} scene 
 */
const onRender = (scene) => {
    for (var i = 0; i < scene.linkMeshes.length; i++) {
        scene.linkMeshes[i].rotation.y += scene.linkMeshes[i].rotSpeed;
    }
}


function connect3d() {
    return (
        <div className='connect3D'>
            <SceneComponent className='connect3DCanvas' antialias onSceneReady={onSceneReady} onRender={onRender}  
            id="connect-canvas" />
        </div>
    )
}

export default connect3d
