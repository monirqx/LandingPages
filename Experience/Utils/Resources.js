import { EventEmitter } from "events";
import Experience from "../Experience.js";



export default class Resources extends EventEmitter {
  constructor(assets) {
    super();
      this.experience = new Experience();
      this.renderer = this.experience.renderer;

      this.assets = assets
      console.log(this.assets);
  }
}
