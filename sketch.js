let myStars = [];
let myImageBackground;
let mySong;


function preload(){
  // images
    myImageBackground = loadImage("./assets/image/landscape.jpg");
    // sound
    mySong = loadSound("./assets/sound/Nuvole Bianche.mp3");
}

function setup() {
  createCanvas(windowWidth,windowHeight)
  // class
	for (let i = 0; i < 120; i++) {
		const aNewStars = new Star(random(width), random(height/2), random(0.2, 2.5), random(TAU), random(color));
    myStars.push(aNewStars);
	}
}

function draw() {
  // image background
  imageMode(CENTER);
  image(myImageBackground, windowWidth/2, windowHeight/2, myImageBackground.width*1.5, myImageBackground.height*1.5);

  // text1
  let myText1 = "Move your mouse to see more stars"
  fill("PaleGoldenrod");
  textSize(16);
  textAlign(CENTER);
  text(myText1, windowWidth/2, 100);
  textFont("Palyfair Display");
  textStyle(ITALIC);

  // text2
  let myText2 = "Click on screen to hear the sound and see the magic"
  fill("PaleGoldenrod");
  textSize(16);
  textAlign(CENTER);
  text(myText2, windowWidth/2, 950);
  textFont("Palyfair Display");
  textStyle(ITALIC);

  // class
	for (let i = 0; i < myStars.length; i++) {
		myStars[i].display();
    if(mySong.isPlaying() == true) {
        myStars[i].move();
    }
	}
}

function mouseMoved() {
  for (let i = 0; i < 5; i++) {
    let color = ["LightBlue", "PaleGoldenrod", "WhiteSmoke"];
    const aNewStars = new Star(random(windowWidth), random(windowHeight/2), random(0.1, 1.8), random(TAU), random(color));
    myStars.push(aNewStars);
  }
}


// Star class
class Star {
	constructor(temp_x, temp_y, temp_r, temp_v, temp_color) {
		this.x = temp_x;
		this.y = temp_y;
		this.r = temp_r;
		this.v = temp_v;
    this.color = temp_color;
    // this.color = random()
	}

	display() {
		this.v += 0.05;
		let scale = this.r + sin(this.v) * 1.5;
		noStroke();
    fill(this.color);
		ellipse(this.x, this.y, scale, scale, this.color);
	}

  move() {
    this.x += random(-7,7);
    this.y += random(-7,7);
  }
}


function mouseClicked() {
  if(mySong.isPlaying() == false) {
    mySong.play();
  } else {
    mySong.stop();
  }
}
