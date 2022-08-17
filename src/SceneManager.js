import * as PIXI from 'pixi.js'
const TWEEN = require('@tweenjs/tween.js')

import NaviculaScene from './scenes/NaviculaScene.js'
import AnemoneScene from './scenes/AnemoneScene.js'

export default class SceneManager {
  constructor() {
    this.scenes = null //A simple object that holds all the scenes
    this.scenesContainer = null // An Container that is parent of all the scenes. Is used to apply filters.
    this.scenesList = { 
      NaviculaScene,
      AnemoneScene
    }
  }

  initialize() {
    // Create instances of all the scenes
    this.sceneContainer = new PIXI.Container()
    this.sceneContainer.name = 'scene_container'
    window.app.stage.addChild(this.sceneContainer)

    this.scenes = {}

    for(const sceneName in this.scenesList) {
      this.scenes[sceneName] = new this.scenesList[sceneName]()
      this.scenes[sceneName].name = sceneName
      this.sceneContainer.addChild(this.scenes[sceneName])
    }
    
    // Wire scene events
    this.eventsMap = {
      'NaviculaScene': {
        'pointerdown': this.onNaviculaClick
      }
    }

    for(const sceneName in this.eventsMap) {
      let sceneEvents = this.eventsMap[sceneName]

      for(const eventName in sceneEvents) {
        this.scenes[sceneName].on(eventName, () => sceneEvents[eventName].call(this))
      }
    }
  }

  onNaviculaClick() {
    console.log('navicula was clicked')
    this.scenes['NaviculaScene'].tweenMoveTo({
      x: 100,
      y: 100,
      start: true,
      easing: TWEEN.Easing.Quadratic.InOut
    })
  }

  start() {
    console.log('start the action!')
  }
}
