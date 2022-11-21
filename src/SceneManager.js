import * as PIXI from 'pixi.js';
const TWEEN = require('@tweenjs/tween.js');
import { loadScreenAssetsLoader, storyAssetsLoader} from './AssetLoader.js';

import BackgroundScene from './scenes/BackgroundScene.js';

export default class SceneManager {
  constructor() {
    this.scenes = null //A simple object that holds all the scenes
    this.sceneContainer = null // An Container that is parent of all the scenes. Is used to apply filters.
    this.scenesList = { 
      BackgroundScene,
    }

    this.sceneContainer = new PIXI.Container();
    this.sceneContainer.name = 'scene_container';

    // TODO: split this into two promise handling routines: one for
    // the loader screen and a second one for the full game
    // (which is the whole purpose of having two loaders, to be
    // able to show something quickly to the visitor before all the 
    // assets load)
    Promise.all([loadScreenAssetsLoader, storyAssetsLoader]).then(([loadScreenAssets, storyAssets]) => {
      this.loadScreenAssets = loadScreenAssets;
      this.storyAssets = storyAssets;

      this.setup();
      this.start();
    });
  }

  setup() {
    // Create instances of all the scenes
    this.scenes = {}
    console.log('from setup');
    console.log(this.loadScreenAssets);

    for(const sceneName in this.scenesList) {
      this.scenes[sceneName] = new this.scenesList[sceneName]();
      this.scenes[sceneName].name = sceneName;
      this.scenes[sceneName].loadScreenAssets = this.loadScreenAssets;
      this.scenes[sceneName].storyAssets = this.storyAssets;
      this.scenes[sceneName].setup();
      this.sceneContainer.addChild(this.scenes[sceneName]);
    }
    
    // Wire scene events
    this.eventsMap = {
      'BackgroundScene': {
        'someEventName': this.someMethodName
      }
    }

    for(const sceneName in this.eventsMap) {
      let sceneEvents = this.eventsMap[sceneName];

      for(const eventName in sceneEvents) {
        this.scenes[sceneName].on(eventName, () => sceneEvents[eventName].call(this));
      }
    }
  }

  start() {
    console.log('start the action!');
  }
}
