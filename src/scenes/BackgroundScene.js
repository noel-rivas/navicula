import * as PIXI from 'pixi.js';

export default class BackgroundScene extends PIXI.Container {
  constructor() {
    super();

    // Create the background image object
    // and write code to keep it centered and at max width regardless
    // of screen size and orientation
    
    // Get the screen size
    
  }

  setup() {
    this.rioDeLuzFull = PIXI.Sprite.from(this.storyAssets['background']);
    this.addChild(this.rioDeLuzFull);
    const rioAspectRatio = this.rioDeLuzFull.texture.width / this.rioDeLuzFull.texture.height;
    const appAspectRatio = window.GardenOfTheMind.stage.width / window.GardenOfTheMind.stage.height;

    console.log('This will fail, async operation:');
    console.log(this.rioDeLuzFull.texture.width);
    console.log(rioAspectRatio);
  }
  
  /**
   * React to screen size changes
   */
  resize() {
    // TODO: connect to the window.onresize event and handle resizing in all scenes
  }
}
