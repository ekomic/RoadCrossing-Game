// create a new scene
let gameScene = new Phaser.Scene('Game');

// Load Assets
gameScene.preload = function() {
    //Load images
    this.load.image('background', 'assets/background.png');
    this.load.image('player', 'assets/player.png');
    this.load.image('enemy', 'assets/dragon.png');


};

// Called once after the preload ends
gameScene.create = function() {
    // Create bg sprite
    let bg = this.add.sprite(0, 0, 'background');

    // Change the origin to the top-left corner
    bg.setOrigin(0,0);
    //bg.setPosition(320, 180);

    //let gameW = this.sys.game.config.width;
    //let gameH = this.sys.game.config.height;

        //console.log(gameW, gameH);
   
    this.player =  this.add.sprite(70, 180, 'player');

    // we are reducing the width by 50%, and we are doubling the height
    this.player.setScale(0.5);
    
    // create an enemy
    this.enemy1 = this.add.sprite(250, 180, 'enemy');
    this.enemy1.setScale(3);

    //this.enemy1.angle = 45;
    //this.enemy1.setAngle(45);

    //enemy1.setOrigin(0, 0);
    this.enemy1.rotation = Math.PI/4;
    this.enemy1.setRotation(Math.PI/4);

    console.log(this.enemy1);

    //enemy1.scaleX = 2;
    //enemy1.scaleY = 2;

    // create a second enemy
    let enemy2 = this.add.sprite(450, 180, 'enemy');

    enemy2.displayWidth =300;

    //flip
    //enemy1.flipX = true;
    //enemy1.flipY = true;
    
};
 
// this is called up to 60 times per second
gameScene.update = function(){
  //this.enemy1.x += 1;
  this.enemy1.angle += 1;

  // check if we have reached scale of 2
  if(this.player.scale < 2) {
      
  // make the player grow
  this.player.scaleX += 0.01;
  this.player.scaleY += 0.01;


  }


};

// set the configuration of the game
let config = {
  type: Phaser.AUTO, // Phaser will use WebGL if available, if not it will use Canvas
  width: 640,
  height: 360,
  scene: gameScene
};

// create a new game, pass the configuration
let game = new Phaser.Game(config);
