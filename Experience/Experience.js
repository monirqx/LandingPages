import * as THREE from "three";

import Sizes from "./Utils/Sizes.js";
import Time from "./Utils/Time.js";
 
import Camera from "./Camera.js";
import Renderer from "./Renderer";
import Resources from "./Utils/Resources.js";
import assets from "./Utils/assets.js";


import World from "./World/World.js";

export default class Experience {
    static instance
    constructor(canvas) {
        if(Experience.instance){
            return Experience.instance;
        }
        Experience.instance = this;
        this.canvas = canvas;
        this.scene = new THREE.Scene();
        this.time = new Time();
        this.sizes = new Sizes();
        this.camera = new Camera();
        this.renderer = new Renderer();
        this.resources = new Resources(assets);
        this.world = new World();
        
        this.sizes.on("resize", () => {
          this.resize();
        });
        this.time.on("update", () => {
          this.update();
        });
    }
 
    resize() {
        this.camera.update();
        this.renderer.update();
    }

    update() {
        this.camera.update();
        this.renderer.update();
    }
}