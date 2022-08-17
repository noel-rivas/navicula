import * as PIXI from 'pixi.js'
const TWEEN = require('@tweenjs/tween.js')
import { addPositioningToDisplayObject } from './lib/DisplayObjectPositioningMixin.js'
import SceneManager from './SceneManager.js'

// EXECUTE MIXINS
addPositioningToDisplayObject()

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
  app.sceneManager.initialize()
  app.sceneManager.start()
}

window.onload = function() {
  doMagic();
}
