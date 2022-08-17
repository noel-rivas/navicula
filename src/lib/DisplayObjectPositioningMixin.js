import * as PIXI from 'pixi.js';
const TWEEN = require('@tweenjs/tween.js')

export function addPositioningToDisplayObject() {
  PIXI.DisplayObject.prototype.moveTo = function(x, y) {
    this.x = x
    this.y = y
  }

  PIXI.DisplayObject.prototype.tweenMoveTo = function(options) {
    let defaults = {
      x: 0,
      y: 0,
      easing: TWEEN.Easing.linear,
    }
    
    let settings = Object.assign(defaults, options)

    const coords = {
      x: this.x,
      y: this.y
    }
    const displayObject = this
    let t = new TWEEN.Tween(coords)
                .to({x: settings.x, y: settings.y})
                .easing(settings.easing)
                .onUpdate(() => {
                  displayObject.x = coords.x,
                  displayObject.y = coords.y
                  console.log('this happened')
                })
                .onStart(() => {
                  displayObject.emit('tweenmovestart')
                })
                .onStop(() => {
                  displayObject.emit('tweenmovestop')
                })
                .onComplete(() => {
                  displayObject.emit('tweenmovecomplete')
                })

      if(options.start) {
        t.start()
      }

      return t
  }
}
