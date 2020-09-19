var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 640,
    physics: {
        default: 'arcade',
    },
    scene: [StartGameScene, PlayGameScene, EndGameScene]
};
var game = new Phaser.Game(config);

// var game;
// window.onload = function(){
//   let gameConfig = {
//     type: Phaser.CANVAS,
//     width: 384,
//     height: 240,
//     pixelArt: true,
//     physics: {
//       default: "arcade",
//       arcade: {
//           gravity: {
//             y: 0
//           }
//       }
//     },
//     scene: [PlayGameScene]
//   }
//   game = new Phaser.Game(gameConfig);
// }
