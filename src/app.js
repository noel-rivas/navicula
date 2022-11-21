import * as PIXI from 'pixi.js';
// TODO: understand the difference between require and import
const TWEEN = require('@tweenjs/tween.js');
import DisplayObjectPositioningMixin from './lib/DisplayObjectPositioningMixin.js';
import SceneManager from './SceneManager.js';

// Apply Mixins to enhance PIXI classes
Object.assign(PIXI.DisplayObject.prototype, DisplayObjectPositioningMixin);

function tellStories() {
  const app = new PIXI.Application({
    width: 640,
    height: 200,
    resizeTo: document.body
  })
  window.GardenOfTheMind = app
  document.body.appendChild(app.view)

  const sceneManager = new SceneManager()

  app.sceneManager = sceneManager;
  app.stage.addChild(sceneManager.sceneContainer);

  // Add the tween update to the app ticker
  app.ticker.add(() => {
    TWEEN.update()
  })

}

window.onload = function() {
  tellStories();
}
