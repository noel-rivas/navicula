import * as PIXI from 'pixi.js'

export default class NaviculaScene extends PIXI.Container {
  constructor() {
    super()
    console.log('A navicula was born.')

    this.graphics = new PIXI.Graphics()
    this.graphics.beginFill(0xDE3249)
    this.graphics.drawRect(50, 50, 100, 100)
    this.graphics.endFill()

    this.addChild(this.graphics)

    this.interactive = true
  }
}

