import * as PIXI from 'pixi.js';
const TWEEN = require('@tweenjs/tween.js')

const DisplayObjectPositioningMixin = {
  moveTo(x, y) {
    this.x = x;
    this.y = y;
  },

  tweenMoveTo(options) {
    let defaults = {
      x: 0,
      y: 0,
      easing: TWEEN.Easing.Linear,
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

export default DisplayObjectPositioningMixin;
