var starImg,bgImg;
var star, starBody;
var fairyImg,fairy,fairyAnimation;
var sound;
//create variable for fairy sprite and fairyImg

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload(){

	starImg = loadImage("images/star.png");
	bgImg = loadImage("images/starryNight.jpg");
	fairyImg = loadImage("images/fairyImage1.png");
    sound = loadSound("sound/JoyMusic.mp3");
	fairyAnimation = loadAnimation("images/fairyImage1.png","images/fairyImage2.png");
	//load animation for fairy here
}

function setup() {
createCanvas(800, 750);

	//write code to play fairyVoice sound
    sound.play();
	//create fairy sprite and add animation for fairy
    fairy= createSprite(80,600,50,50);
	fairy.addImage("kl",fairyImg);
	fairy.scale=0.2;

	star = createSprite(650,30);
	star.addImage(starImg);
	star.scale = 0.2;


	engine = Engine.create();
	world = engine.world;

	starBody = Bodies.circle(650 , 30 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, starBody);
	
	Engine.run(engine);

}


function draw() {
background(bgImg);

		star.x = starBody.position.x ;
		star.y = starBody.position.y;
		console.log(fairy);


  keyPressed();
  //write code to stop star in the hand of fairy
	if(fairy.x>=540){
	   fairy.velocityX=0;
	   Matter.Body.setStatic(starBody,false); 
	}
	if(star.y>=560 && starBody.position.y>=560){
	   Matter.Body.setStatic(starBody,true);
	}
  drawSprites();

}

function keyPressed() {

	if(keyDown(LEFT_ARROW)){
	   fairy.velocityX=-3;
	   fairy.addAnimation("kl",fairyAnimation);
	   fairy.framDelay=10;
	   fairy.changeAnimation("kl");	
	}

	if(keyDown(RIGHT_ARROW)){
	   fairy.velocityX=3;                        
	   fairy.addAnimation("kl",fairyAnimation);
	   fairy.framDelay=10;
	   fairy.changeAnimation("kl");
	}
	//writw code to move fairy left and right
	
}
