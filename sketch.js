var movingRect,fixRect;


function setup() {
  createCanvas(800,900);
 movingRect =  createSprite(400, 800, 50, 50);
 movingRect.shapeColor = "blue"
 movingRect.debug = true;

 fixRect = createSprite(400,100,50,50);
 fixRect.shapeColor="blue";
 fixRect.debug = true;

 //gameObject_1=  createSprite(100, 100, 50, 50);
 //gameObject_1.shapeColor = "pink"
 //gameObject_1.debug = true;

 //gameObject_2 = createSprite(200,100,50,50);
 //gameObject_2.shapeColor="pink";
 //gameObject_2.debug = true;

 //gameObject_3 = createSprite(300,100,50,50);
 //gameObject_3.shapeColor="pink";
 //gameObject_3.debug = true;

 //gameObject_4= createSprite(400,100,50,50);
// gameObject_4.shapeColor="pink";
 //gameObject_4.debug = true;

 movingRect.velocityY = -5;
 fixRect.velocityY = 5;

}

function draw() {
  background(23,78,55);  
  //movingRect.y = World.mouseY;
  //movingRect.x = World.mouseX;
  bounceOff(movingRect,fixRect);

 
  drawSprites();
}

function bounceOff(object1, object2){
  if(object1.x - object2.x < object1.width/2 + object2.width/2
    && object2.x - object1.x < object1.width/2 +object2.width/2){
      object1.velocityX = object1.velocityX * (-1);
      object2.velocityX = object2.velocityX * (-1);
    }
     if(object1.y - object2.y < object1.height/2 + object2.height/2
     && object2.y - object1.y <object1.height/2 + object2.height/2){
      object1.velocityY = object1.velocityY * (-1);
      object2.velocityY= object2.velocityY * (-1);

     }
     
       
    
}