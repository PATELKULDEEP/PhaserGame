
class PlayGameScene extends Phaser.Scene {
    constructor() {
        super('Play')
        this.score = 0;
    }
    preload() {
        this.load.image('sky', 'assets/images/snowfloor.jpg');
        this.load.image('jet', 'assets/images/man21.png');
        this.load.image('bg_2', 'assets/images/bg_2.jpg');
        this.load.image('tree', 'assets/images/tree.png');
        this.load.image('bigmountain', 'assets/images/newmont.png');
        this.load.image('snowTrees', 'assets/images/snowTrees.png');
        this.load.image('horse', 'assets/images/horse.png');
        this.load.image('snowTree', 'assets/images/snowTree.png');
        this.load.image('box', 'assets/images/box.png');

        // this.load.image('bomb', 'assets/images/bomb.png');
        // this.load.image('ammo', 'assets/images/ammo.png');
        // this.load.image('coin', 'assets/images/coin.png')
        // this.load.audio('gun-shot', 'assets/audio/gunshot.wav')
        // this.load.audio('coinhit', 'assets/audio/coinhit.wav')
        this.load.audio('endgame', 'assets/audio/end.mp3')
        // this.load.spritesheet('explosion', 'assets/spritesheets/explosion.png', {
        //     frameWidth: 16,
        //     frameHeight: 16
        // })
    }

    create() {
        var i,j;
        // this.sky = this.add.image(400, 300, 'sky');    
        for(i = 125; i<=800;i+=125){
            for(j = 128; j<=600; j+=128 ){
            this.sky =  this.add.image(i,j, 'sky');

            }
        }

        // this.add.sprite(200, 200, 'tree');


        
        // this.tree = this.physics.add(750,45,'tree').setScale(.5);
    this.tree = this.physics.add.image(400, 500, 'tree').setScale(0.5)
    this.tree.body.immovable = true;

        this.add.image(700,30,'tree').setScale(.5);
        // this.add.image(720,50,'tree').setScale(.5);
        // this.add.image(700,45,'tree').setScale(.5);
        this.add.image(730,55,'tree').setScale(.5);
        // this.add.image(400,300,'tree').setScale(.5);
        // this.add.image(400,300,'tree').setScale(.5);
        // this.add.image(400,300,'tree').setScale(.5);
        // this.add.image(400,300,'tree').setScale(.5);

        this.mountain = this.physics.add.image(200,100,'bigmountain').setScale(.5);
        this.mountain.body.immovable = true;

        this.add.image(150,130,'bigmountain').setScale(.5);
        this.add.image(300,100,'bigmountain').setScale(.5);
        this.add.image(400,100,'bigmountain').setScale(.5);
        this.add.image(500,100,'bigmountain').setScale(.5);
        this.add.image(700,100,'bigmountain').setScale(.5);

        this.snowTrees =  this.physics.add.image(400,300,'snowTrees').setScale(.5);
        this.snowTrees.body.immovable = true;

        this.snowTree =  this.physics.add.image(400,300,'snowTree');
        this.snowTree.body.immovable = true;

        this.horse =  this.physics.add.image(500,600,'horse');
        this.horse.body.immovable = true;

        this.box =  this.physics.add.image(500,600,'box');
        // this.box.body.immovable = true;

        this.jet = this.physics.add.image(780, 600, 'jet').setScale(1.5).setOrigin(0.5, 0)
        this.jet.setCollideWorldBounds(true)

        //endgame
        this.endgame = this.sound.add('endgame');
        this.physics.add.overlap(this.jet, this.box, this.endGame, null, this);


        //collider
        this.physics.add.collider(this.jet,this.tree);
        this.physics.add.collider(this.jet,this.mountain);
        this.physics.add.collider(this.jet,this.snowTrees);
        this.physics.add.collider(this.jet,this.snowTree);
        this.physics.add.collider(this.jet,this.horse);

        this.cursors = this.input.keyboard.createCursorKeys();

        this.scoreText = this.add.text(15, 15, 'Score : 0', { fontSize: 32, fill: '#ff0000' })


    }
    endGame() {
        this.endgame.play()
        this.physics.pause();
        this.jet.setTint(0xff0000)
        this.gameOver = true;
    }
    
    update() {
        if (this.gameOver && !this.endgame.isPlaying) {
            this.scene.start('EndGame', { totalScore: this.score })
        }

        if (this.cursors.left.isDown) {
            this.jet.setVelocityX(-150);
        } else if (this.cursors.right.isDown) {
            this.jet.setVelocityX(150);
        } else {
            this.jet.setVelocityX(0);
        }

        if (this.cursors.up.isDown) {
            this.jet.setVelocityY(-150);
        } else if (this.cursors.down.isDown) {
            this.jet.setVelocityY(150);
        } else {
            this.jet.setVelocityY(0);
        }
  
    }

}