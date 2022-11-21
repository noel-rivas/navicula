import { Assets } from 'pixi.js';

const manifest = {
  bundles: [
    {
      name: 'load-screen',
      assets: [
        {
          name: 'load-background',
          srcs: 'img/el_rio_de_luz-pixelated.png'
        },
      ]
    },
    {
      name: 'story',
      assets: [
        {
          name: 'background',
          srcs: 'img/el_rio_de_luz-retina.jpg'
        },
      ]
    },
  ]
};

Assets.init({ manifest });

let loadScreenAssetsLoader = Assets.loadBundle('load-screen');
let storyAssetsLoader = Assets.loadBundle('story');

export {loadScreenAssetsLoader, storyAssetsLoader};
