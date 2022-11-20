import * as PIXI from 'pixi.js'
const TWEEN = require('@tweenjs/tween.js')
import DisplayObjectPositioningMixin from './lib/DisplayObjectPositioningMixin.js'
import SceneManager from './SceneManager.js'

// Apply Mixins to enhance PIXI classes
Object.assign(PIXI.DisplayObject.prototype, DisplayObjectPositioningMixin);

function doMagic() {
  const app = new PIXI.Application({
    width: 640,
    height: 200,
    resizeTo: document.body
  })
  window.app = app

  // Add the tween update to the app ticker
  app.ticker.add(() => {
    TWEEN.update()
  })

  document.body.appendChild(app.view)

  const sceneManager = new SceneManager()

  app.sceneManager = sceneManager
  app.sceneManager.setup()
  app.sceneManager.start()
}

window.onload = function() {
  doMagic();
}
