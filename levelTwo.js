var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 200 }
        }
    },
    scene: {
        preload: preload,
        create: create
    }
};

var game = new Phaser.Game(config);
var i,j;
function preload ()
{
    this.load.image('floor', 'assets/snowfloor.jpg');

}

function create ()
{
    for(i = 125; i<=800;i+=125){
        for(j = 125; j<=600; j+=125 ){
            this.add.image(i,j, 'floor');
        }
    }

}