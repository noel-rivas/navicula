import * as PIXI from 'pixi.js'
const TWEEN = require('@tweenjs/tween.js')
import { addPositioningToDisplayObject } from './lib/DisplayObjectPositioningMixin.js'
import BackgroundManager from './BackgroundManager.js'
import SceneManager from './SceneManager.js'

// EXECUTE MIXINS
addPositioningToDisplayObject()

function doMagic() {
  const app = new PIXI.Application({
    width: 640,
    height: 200,
    resizeTo: document.body
  })

  // Add the tween update to the app ticker
  app.ticker.add(() => {
    TWEEN.update()
  })

  document.body.appendChild(app.view)

  // const backgroundManager = new BackgroundManager()
  // app.stage.addChild(backgroundManager)
  // backgroundManager.initialize()

  const sceneManager = new SceneManager()
  sceneManager.initialize()
  sceneManager.start()

  // app.backgroundManager = backgroundManager
  app.sceneManager = sceneManager
  
  // var navicula = new PIXI.Sprite.from('img/navicula-bullata-black.jpg')
  // app.stage.addChild(navicula)
  // let navicula_tween = navicula.tweenMoveTo({
  //   x: 100,
  //   y: 100,
  //   easing: TWEEN.Easing.Quintic.InOut,
  //   start: false
  // })

  // navicula.on('tweenmovecomplete', () => {
  //   console.log('the thing moved, then stopped')
  // })

  // navicula_tween.delay(1000).start()
}

window.onload = function() {
  doMagic();
}
