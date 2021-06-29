var wall1,wall2,wall3,wall4,wall5,wall6,wall7,wall8,wall9,wall10,wall11,wall12;
var wall13,wall14,wall15,wall16,wall17,wall18,wall19,wall20,wall21,wall22,wall23,wall24,wall25,wall26,wall27;
var wall28,wall29,wall30,wall31,wall32,wall33,wall34,wall35,wall36,wall37,wall38,wall39;
var wallGroup;
var player;
var coin1;
var ghost1;
var bgImg,coinImg,playerImg,ghost1Img,ghost2Img,ghost3Img,ghost4Img,ghost5Img;
var score=0;
var death=0;
var gameState=play;
var play;
var end;
var playerImg2,playerImg3,playerImg4;

function preload(){
 bgImg = loadImage('background.png');
 coinImg = loadImage('Coin.png')
 playerImg = loadImage('Pac man.png')//right side
 playerImg2 =loadImage('Pac man(1).png')//up side
 playerImg3 =loadImage('Pac man(2).png')// left side
 playerImg4 =loadImage('Pac man(3).png')// down side
 ghost1Img = loadImage('ghost1.png')
 ghost2Img = loadImage('ghost2.png')
 ghost3Img = loadImage('ghost3.png')
 ghost4Img = loadImage('ghost5.png')
 ghost5Img = loadImage('ghost6.png')
}
function setup() {
  createCanvas(400,400)
 wallGroup = createGroup();
player = createSprite(225,375,25,25)
player.addImage(playerImg3);
player.scale = 0.1;
wall1 = createSprite(200,2,400,5);//top boundary wall
wall2 = createSprite(87,398,175,5);//bottom boundary wall
wall3 = createSprite(2,200,5,400);//left boundary wall
wall4 = createSprite(398,200,5,400);//right boundary wall
wall5 = createSprite(313,398,175,5);
wall6 = createSprite(50,50,5,100);
wall7 = createSprite(50,100,100,5);
wall8 = createSprite(50,175,5,50);
wall9 = createSprite(25,200,50,5);
wall10 = createSprite(25,300,50,5);
wall11 = createSprite(50,350,100,5);
wall12 = createSprite(100,25,5,50);
wall13= createSprite(125,50,50,5);
wall14 = createSprite(150,100,5,100);
wall15 = createSprite(200,100,100,5);
wall16 = createSprite(200,25,5,50);
wall17 = createSprite(225,50,50,5);
wall18 = createSprite(300,75,5,150);
wall19 = createSprite(250,150,100,5);
wall20 = createSprite(325,100,50,5);
wall21 = createSprite(350,75,5,50);
wall22 = createSprite(375,150,50,5);
wall23 = createSprite(350,175,5,50);
wall24 = createSprite(100,175,5,50);
wall25 = createSprite(200,200,200,5);
wall26 = createSprite(75,250,50,5);
wall27 = createSprite(100,300,5,100);
wall28 = createSprite(150,225,5,50);
wall29 = createSprite(200,250,100,5);
wall30 = createSprite(300,250,5,100);
wall31 = createSprite(200,275,5,50);
wall32 = createSprite(275,300,50,5);
wall33 = createSprite(325,250,50,5);
wall34 = createSprite(350,275,5,50);
wall35 = createSprite(250,350,5,100);
wall36 = createSprite(350,350,100,5);
wall37 = createSprite(150,350,5,100);
wall38 = createSprite(125,300,50,5);
wall39 = createSprite(225,350,50,5);
coin40 = createSprite(175,375,5,5);
coin41 = createSprite(175,325,5,5);
coin42 = createSprite(225,325,8,4);
coin43 = createSprite(225,275,12,4);
coin44 = createSprite(175,225,8,4);
coin45 = createSprite(225,225,8,4);
coin46 = createSprite(275,225,8,4);
coin47 = createSprite(175,275,8,4);
coin48 = createSprite(125,275,8,4);
coin49 = createSprite(125,225,8,4);
coin50 = createSprite(75,225,8,4);
coin51 = createSprite(25,225,8,4);
coin52 = createSprite(25,250,8,4);
coin53 = createSprite(25,275,8,4);
coin54 = createSprite(75,275,8,4);
coin55 = createSprite(75,325,8,4);
coin56 = createSprite(75,325,8,4);
coin57 = createSprite(25,325,8,4);
coin58 = createSprite(75,175,8,4);
coin59 = createSprite(75,125,8,4);
coin60 = createSprite(25,125,8,4)
coin61 = createSprite(25,150,8,4);
coin62 = createSprite(25,175,8,4);
coin63 = createSprite(125,125,8,4);
coin64 = createSprite(125,150,8,4);//
coin65 = createSprite(125,175,8,4);
coin66 = createSprite(125,100,8,4);
coin67 = createSprite(125,75,8,4);
coin68 = createSprite(75,75,8,4);
coin69 = createSprite(75,50,8,4);
coin70 = createSprite(150,175,8,4);
coin71 = createSprite(200,175,8,4);
coin72 = createSprite(225,175,8,4);
coin73 = createSprite(275,175,8,4);
coin74 = createSprite(175,150,8,4);
coin75 = createSprite(175,120,8,4);
coin76 = createSprite(200,125,8,4);
coin77 = createSprite(250,125,8,4);
coin78 = createSprite(275,125,8,4);
coin79 = createSprite(275,100,8,4);
coin80 = createSprite(275,75,8,4);
coin81 = createSprite(250,75,8,4);
coin82 = createSprite(200,75,8,4);
coin83 = createSprite(175,75,8,4);
coin84 = createSprite(175,50,8,4);
coin85 = createSprite(175,25,8,4);
coin86 = createSprite(150,25,8,4);
coin87 = createSprite(125,25,8,4);
coin88 = createSprite(275,50,8,4);
coin89 = createSprite(275,25,8,4);
coin90 = createSprite(225,25,12,4);
coin91 = createSprite(275,350,50,5);
coin92 = createSprite(350,25,5,50);
coin93 = createSprite(325,175,8,4);
coin94 = createSprite(325,150,8,4);
coin95 = createSprite(325,125,8,4);
coin96 = createSprite(375,125,8,4);
coin97 = createSprite(375,100,8,4);
coin98 = createSprite(375,75,8,4);
coin99 = createSprite(375,25,8,4);
coin100 = createSprite(325,200,8,4);
coin101 = createSprite(325,225,8,4);
coin102 = createSprite(375,225,8,4);
coin103 = createSprite(375,200,8,4);
coin104 = createSprite(375,175,8,4);
coin105 = createSprite(375,250,8,4);
coin106 = createSprite(375,275,8,4);
coin107 = createSprite(375,325,8,4);
coin108 = createSprite(325,275,8,4);
coin109 = createSprite(325,300,8,4);
coin110 = createSprite(325,325,8,4);
coin111 = createSprite(275,325,12,4);
coin112 = createSprite(175,350,8,4);
coin113 = createSprite(200,375,8,4);
coin114 = createSprite(200,325,8,4);
coin115 = createSprite(225,300,8,4);
coin116 = createSprite(175,300,8,4);
coin117 = createSprite(250,275,8,4);
coin118 = createSprite(275,275,8,4);
coin119 = createSprite(275,250,8,4);
coin120 = createSprite(250,225,8,4);
coin121 = createSprite(200,225,8,4);
coin122 = createSprite(150,275,8,4);
coin123 = createSprite(125,250,8,4);
coin124 = createSprite(100,225,8,4);
coin125 = createSprite(50,225,8,4);
coin126 = createSprite(50,275,8,4);
coin127 = createSprite(75,300,8,4);
coin128 = createSprite(50,325,8,4);
coin129 = createSprite(75,200,8,4);
coin130 = createSprite(75,150,8,4);
coin131 = createSprite(50,125,8,4);
coin132 = createSprite(100,125,8,4);
coin133 = createSprite(100,75,8,4);
coin134 = createSprite(75,25,8,4);
coin135 = createSprite(175,175,8,4);
coin136 = createSprite(250,175,8,4);
coin137 = createSprite(225,125,8,4);
coin138 = createSprite(225,75,8,4);
coin139 = createSprite(250,25,8,4);
coin140 = createSprite(300,175,8,4);
coin141 = createSprite(350,225,8,4);
coin142 = createSprite(350,125,8,4);
coin143 = createSprite(375,50,8,4);
coin144 = createSprite(325,25,8,4);
coin145 = createSprite(325,50,8,4);
coin146 = createSprite(325,75,8,4);
coin147 = createSprite(375,300,8,4);
coin148 = createSprite(350,325,8,4);
coin149 = createSprite(300,325,8,4);
coin150 = createSprite(275,375,8,4);
coin151 = createSprite(300,375,8,4);
coin152 = createSprite(325,375,8,4);
coin153 = createSprite(350,375,8,4);
coin154 = createSprite(375,375,8,4);


coin40.addImage(coinImg);
coin40.scale = 0.02

coin41.addImage(coinImg);
coin41.scale = 0.02

coin42.addImage(coinImg);
coin42.scale = 0.02

coin43.addImage(coinImg);
coin43.scale = 0.02

coin44.addImage(coinImg);
coin44.scale = 0.02

coin45.addImage(coinImg);
coin45.scale = 0.02

coin46.addImage(coinImg);
coin46.scale = 0.02

coin47.addImage(coinImg);
coin47.scale = 0.02

coin48.addImage(coinImg);
coin48.scale = 0.02

coin49.addImage(coinImg);
coin49.scale = 0.02

coin50.addImage(coinImg);
coin50.scale = 0.02

coin51.addImage(coinImg);
coin51.scale = 0.02

coin52.addImage(coinImg);
coin52.scale = 0.02

coin53.addImage(coinImg);
coin53.scale = 0.02

coin54.addImage(coinImg);
coin54.scale = 0.02

coin55.addImage(coinImg);
coin55.scale = 0.02

coin56.addImage(coinImg);
coin56.scale = 0.02

coin57.addImage(coinImg);
coin57.scale = 0.02

coin58.addImage(coinImg);
coin58.scale = 0.02

coin59.addImage(coinImg);
coin59.scale = 0.02

coin60.addImage(coinImg);
coin60.scale = 0.02

coin61.addImage(coinImg);
coin61.scale = 0.02

coin62.addImage(coinImg);
coin62.scale = 0.02

coin63.addImage(coinImg);
coin63.scale = 0.02

coin64.addImage(coinImg);
coin64.scale = 0.02

coin65.addImage(coinImg);
coin65.scale = 0.02

coin66.addImage(coinImg);
coin66.scale = 0.02

coin67.addImage(coinImg);
coin67.scale = 0.02

coin68.addImage(coinImg);
coin68.scale = 0.02

coin69.addImage(coinImg);
coin69.scale = 0.02

coin70.addImage(coinImg);
coin70.scale = 0.02

coin71.addImage(coinImg);
coin71.scale = 0.02

coin72.addImage(coinImg);
coin72.scale = 0.02

coin73.addImage(coinImg);
coin73.scale = 0.02

coin74.addImage(coinImg);
coin74.scale = 0.02

coin75.addImage(coinImg);
coin75.scale = 0.02

coin76.addImage(coinImg);
coin76.scale = 0.02

coin77.addImage(coinImg);
coin77.scale = 0.02

coin78.addImage(coinImg);
coin78.scale = 0.02

coin79.addImage(coinImg);
coin79.scale = 0.02

coin80.addImage(coinImg);
coin80.scale = 0.02

coin81.addImage(coinImg);
coin81.scale = 0.02

coin82.addImage(coinImg);
coin82.scale = 0.02

coin83.addImage(coinImg);
coin83.scale = 0.02

coin84.addImage(coinImg);
coin84.scale = 0.02

coin85.addImage(coinImg);
coin85.scale = 0.02

coin86.addImage(coinImg);
coin86.scale = 0.02

coin87.addImage(coinImg);
coin87.scale = 0.02

coin88.addImage(coinImg);
coin88.scale = 0.02

coin89.addImage(coinImg);
coin89.scale = 0.02

coin90.addImage(coinImg);
coin90.scale = 0.02

coin91.addImage(coinImg);
coin91.scale = 0.02

coin92.addImage(coinImg);
coin92.scale = 0.02

coin93.addImage(coinImg);
coin93.scale = 0.02

coin94.addImage(coinImg);
coin94.scale = 0.02

coin95.addImage(coinImg);
coin95.scale = 0.02

coin96.addImage(coinImg);
coin96.scale = 0.02

coin97.addImage(coinImg);
coin97.scale = 0.02

coin98.addImage(coinImg);
coin98.scale = 0.02

coin99.addImage(coinImg);
coin99.scale = 0.02

coin100.addImage(coinImg);
coin100.scale = 0.02

coin101.addImage(coinImg);
coin101.scale = 0.02

coin102.addImage(coinImg);
coin102.scale = 0.02

coin103.addImage(coinImg);
coin103.scale = 0.02

coin104.addImage(coinImg);
coin104.scale = 0.02

coin105.addImage(coinImg);
coin105.scale = 0.02

coin106.addImage(coinImg);
coin106.scale = 0.02

coin107.addImage(coinImg);
coin107.scale = 0.02

coin108.addImage(coinImg);
coin108.scale = 0.02

coin109.addImage(coinImg);
coin109.scale = 0.02

coin110.addImage(coinImg);
coin110.scale = 0.02

coin111.addImage(coinImg);
coin111.scale = 0.02

coin112.addImage(coinImg);
coin112.scale = 0.02

coin113.addImage(coinImg);
coin113.scale = 0.02

coin114.addImage(coinImg);
coin114.scale = 0.02

coin115.addImage(coinImg);
coin115.scale = 0.02

coin116.addImage(coinImg);
coin116.scale = 0.02

coin117.addImage(coinImg);
coin117.scale = 0.02

coin118.addImage(coinImg);
coin118.scale = 0.02

coin119.addImage(coinImg);
coin119.scale = 0.02

coin120.addImage(coinImg);
coin120.scale = 0.02

coin121.addImage(coinImg);
coin121.scale = 0.02

coin122.addImage(coinImg);
coin122.scale = 0.02

coin123.addImage(coinImg);
coin123.scale = 0.02

coin124.addImage(coinImg);
coin124.scale = 0.02

coin125.addImage(coinImg);
coin125.scale = 0.02

coin126.addImage(coinImg);
coin126.scale = 0.02

coin127.addImage(coinImg);
coin127.scale = 0.02

coin128.addImage(coinImg);
coin128.scale = 0.02

coin129.addImage(coinImg);
coin129.scale = 0.02

coin130.addImage(coinImg);
coin130.scale = 0.02

coin131.addImage(coinImg);
coin131.scale = 0.02

coin132.addImage(coinImg);
coin132.scale = 0.02

coin133.addImage(coinImg);
coin133.scale = 0.02

coin134.addImage(coinImg);
coin134.scale = 0.02

coin135.addImage(coinImg);
coin135.scale = 0.02

coin136.addImage(coinImg);
coin136.scale = 0.02

coin137.addImage(coinImg);
coin137.scale = 0.02

coin138.addImage(coinImg);
coin138.scale = 0.02

coin139.addImage(coinImg);
coin139.scale = 0.02

coin140.addImage(coinImg);
coin140.scale = 0.02

coin141.addImage(coinImg);
coin141.scale = 0.02

coin142.addImage(coinImg);
coin142.scale = 0.02

coin143.addImage(coinImg);
coin143.scale = 0.02

coin144.addImage(coinImg);
coin144.scale = 0.02

coin145.addImage(coinImg);
coin145.scale = 0.02

coin146.addImage(coinImg);
coin146.scale = 0.02

coin147.addImage(coinImg);
coin147.scale = 0.02

coin148.addImage(coinImg);
coin148.scale = 0.02

coin149.addImage(coinImg);
coin149.scale = 0.02

coin150.addImage(coinImg);
coin150.scale = 0.02

coin151.addImage(coinImg);
coin151.scale = 0.02

coin152.addImage(coinImg);
coin152.scale = 0.02

coin153.addImage(coinImg);
coin153.scale = 0.02

coin154.addImage(coinImg);
coin154.scale = 0.02
 
ghost1 =createSprite(22,277,30,30)
ghost1.addImage(ghost1Img)
ghost1.scale = 0.19
ghost2 = createSprite(122,27,30,30)
ghost2.addImage(ghost2Img)
ghost2.scale = 0.19
ghost3 =createSprite(325,80,30,30)
ghost3.addImage(ghost3Img)
ghost3.scale = 0.19
ghost4 = createSprite(325,272,30,30)     
ghost4.addImage(ghost4Img)                
ghost4.scale = 0.19                       
ghost5 = createSprite(172,225,30,30)      
ghost5.addImage(ghost5Img)
ghost5.scale = 0.15

wallGroup.add(wall1);
    wallGroup.add(wall2);
    wallGroup.add(wall3);
    wallGroup.add(wall4);
    wallGroup.add(wall5);  
    wallGroup.add(wall6);
    wallGroup.add(wall7);
    wallGroup.add(wall8);
    wallGroup.add(wall9);
    wallGroup.add(wall10);
    wallGroup.add(wall11);
    wallGroup.add(wall12);
    wallGroup.add(wall13);
    wallGroup.add(wall14);
    wallGroup.add(wall15);
    wallGroup.add(wall16);  
    wallGroup.add(wall17);
    wallGroup.add(wall18);
    wallGroup.add(wall19); 
    wallGroup.add(wall20);
    wallGroup.add(wall21);
    wallGroup.add(wall22);
    wallGroup.add(wall23);
    wallGroup.add(wall24);
    wallGroup.add(wall25);
    wallGroup.add(wall26);
    wallGroup.add(wall27);
    wallGroup.add(wall28);
    wallGroup.add(wall29);
    wallGroup.add(wall30);
    wallGroup.add(wall31);
    wallGroup.add(wall32);
    wallGroup.add(wall33);
    wallGroup.add(wall34);
    wallGroup.add(wall35);
    wallGroup.add(wall36);
    wallGroup.add(wall37);
    wallGroup.add(wall38);
    wallGroup.add(wall39);

    //player.rotation = 180
    //player.rotateToDirection = true;
}

function draw() {
  background("black")
  if(gameState === play){
  player.setCollider("rectangle",0,0,playerImg.width,playerImg.height)
  player.debug = true;
  wallGroup.debug = true;
  coin40.debug = true;
  wallGroup.setColorEach("pink")
  /*for(var i = 1;i<28;i++){
    var z = "wall"+i
    wallGroup.add(z)
  }*/
 if(keyDown(RIGHT_ARROW)){
   player.x = player.x+20
   player.addImage(playerImg)
 }
 if(keyDown(LEFT_ARROW)){
  player.x = player.x-20
  player.addImage(playerImg3)
}
if(keyDown(UP_ARROW)){
  player.y = player.y-20
  player.addImage(playerImg2)
}
if(keyDown(DOWN_ARROW)){
  player.y = player.y+20
  player.addImage(playerImg4)
}
if(player.isTouching(ghost1)||player.isTouching(ghost2)||player.isTouching(ghost3)||player.isTouching(ghost4)||player.isTouching(ghost5)){
  player.addImage(playerImg3)
   player.x = 225
   player.y = 375
   ghost1.x = 22
   ghost1.y = 277
   ghost2.x = 122
   ghost2.y = 27
   ghost3.x = 325
   ghost3.y = 80
   ghost4.x = 325
   ghost4.y = 272
   ghost5.x = 172
   ghost5.y = 225
   death = death+1
   if(death === 4){
       
       gameState === end;
   }
}
fill("white")
textSize(15)
text("Score:"+score,25,375)
if(player.isTouching(coin40)){
  coin40.destroy();
  score = score + 1;
}
if(player.isTouching(coin41)){
 coin41.destroy();
 score = score + 1;
}
if(player.isTouching(coin42)){
 coin42.destroy();
 score = score + 1;
}
if(player.isTouching(coin43)){
 coin43.destroy();
 score = score + 1;
}
if(player.isTouching(coin44)){
 coin44.destroy();
 score = score + 1;
}
if(player.isTouching(coin45)){
 coin45.destroy();
 score = score + 1;
}
if(player.isTouching(coin46)){
 coin46.destroy();
 score = score + 1;
}
if(player.isTouching(coin47)){
 coin47.destroy();
 score = score + 1;
}
if(player.isTouching(coin48)){
 coin48.destroy();
 score = score + 1;
}
if(player.isTouching(coin49)){
 coin49.destroy();
 score = score + 1;
}
if(player.isTouching(coin50)){
 coin50.destroy();
 score = score + 1;
}
if(player.isTouching(coin51)){
 coin51.destroy();
 score = score + 1;
}
if(player.isTouching(coin52)){
 coin52.destroy();
 score = score + 1;
}
if(player.isTouching(coin53)){
 coin53.destroy();
 score = score + 1;
}
if(player.isTouching(coin54)){
 coin54.destroy();
 score = score + 1;
}
if(player.isTouching(coin55)){
 coin55.destroy();
 score = score + 1;
}
if(player.isTouching(coin56)){
 coin56.destroy();
 score = score + 1;
}
if(player.isTouching(coin57)){
 coin57.destroy();
 score = score + 1;
}
if(player.isTouching(coin57)){
 coin57.destroy();
 score = score + 1;
}
if(player.isTouching(coin58)){
 coin58.destroy();
 score = score + 1;
}
if(player.isTouching(coin59)){
 coin59.destroy();
 score = score + 1;
}
if(player.isTouching(coin60)){
 coin60.destroy();
 score = score + 1;
}
if(player.isTouching(coin61)){
 coin61.destroy();
 score = score + 1;
}
if(player.isTouching(coin62)){
 coin62.destroy();
 score = score + 1;
}
if(player.isTouching(coin63)){
 coin63.destroy();
 score = score + 1;
}
if(player.isTouching(coin64)){
 coin64.destroy();
 score = score + 1;
}
if(player.isTouching(coin64)){
 coin64.destroy();
 score = score + 1;
}
if(player.isTouching(coin65)){
 coin65.destroy();
 score = score + 1;
}
if(player.isTouching(coin66)){
 coin66.destroy();
 score = score + 1;
}
if(player.isTouching(coin67)){
 coin67.destroy();
 score = score + 1;
}
if(player.isTouching(coin68)){
 coin68.destroy();
 score = score + 1;
}
if(player.isTouching(coin69)){
 coin69.destroy();
 score = score + 1;
}
if(player.isTouching(coin70)){
 coin70.destroy();
 score = score + 1;
}
if(player.isTouching(coin71)){
 coin71.destroy();
 score = score + 1;
}
if(player.isTouching(coin72)){
 coin72.destroy();
 score = score + 1;
}
if(player.isTouching(coin73)){
 coin73.destroy();
 score = score + 1;
}
if(player.isTouching(coin74)){
 coin74.destroy();
 score = score + 1;
}
if(player.isTouching(coin75)){
 coin75.destroy();
 score = score + 1;
}
if(player.isTouching(coin76)){
 coin76.destroy();
 score = score + 1;
}
if(player.isTouching(coin77)){
 coin77.destroy();
 score = score + 1;
}
if(player.isTouching(coin78)){
 coin78.destroy();
 score = score + 1;
}
if(player.isTouching(coin79)){
 coin79.destroy();
 score = score + 1;
}
if(player.isTouching(coin80)){
 coin80.destroy();
 score = score + 1;
}
if(player.isTouching(coin81)){
 coin81.destroy();
 score = score + 1;
}
if(player.isTouching(coin82)){
 coin82.destroy();
 score = score + 1;
}
if(player.isTouching(coin83)){
 coin83.destroy();
 score = score + 1;
}
if(player.isTouching(coin84)){
 coin84.destroy();
 score = score + 1;
}
if(player.isTouching(coin85)){
 coin85.destroy();
 score = score + 1;
}
if(player.isTouching(coin86)){
 coin86.destroy();
 score = score + 1;
}
if(player.isTouching(coin87)){
 coin87.destroy();
 score = score + 1;
}
if(player.isTouching(coin88)){
 coin88.destroy();
 score = score + 1;
}
if(player.isTouching(coin89)){
 coin89.destroy();
 score = score + 1;
}
if(player.isTouching(coin90)){
 coin90.destroy();
 score = score + 1;
}
if(player.isTouching(coin91)){
 coin91.destroy();
 score = score + 1;
}
if(player.isTouching(coin92)){
 coin92.destroy();
 score = score + 1;
}
if(player.isTouching(coin93)){
 coin93.destroy();
 score = score + 1;
}
if(player.isTouching(coin94)){
 coin94.destroy();
 score = score + 1;
}
if(player.isTouching(coin95)){
 coin95.destroy();
 score = score + 1;
}
if(player.isTouching(coin96)){
 coin96.destroy();
 score = score + 1;
}
if(player.isTouching(coin97)){
 coin97.destroy();
 score = score + 1;
}
if(player.isTouching(coin98)){
 coin98.destroy();
 score = score + 1;
}
if(player.isTouching(coin99)){
 coin99.destroy();
 score = score + 1;
}
if(player.isTouching(coin100)){
 coin100.destroy();
 score = score + 1;
}
if(player.isTouching(coin101)){
 coin101.destroy();
 score = score + 1;
}
if(player.isTouching(coin102)){
 coin102.destroy();
 score = score + 1;
}
if(player.isTouching(coin103)){
 coin103.destroy();
 score = score + 1;
}
if(player.isTouching(coin104)){
 coin104.destroy();
 score = score + 1;
}
if(player.isTouching(coin105)){
 coin105.destroy();
 score = score + 1;
}
if(player.isTouching(coin106)){
 coin106.destroy();
 score = score + 1;
}
if(player.isTouching(coin107)){
 coin107.destroy();
 score = score + 1;
}
if(player.isTouching(coin108)){
 coin108.destroy();
 score = score + 1;
}
if(player.isTouching(coin109)){
 coin109.destroy();
 score = score + 1;
}
if(player.isTouching(coin110)){
 coin110.destroy();
 score = score + 1;
}
if(player.isTouching(coin111)){
 coin111.destroy();
 score = score + 1;
}
if(player.isTouching(coin112)){
 coin112.destroy();
 score = score + 1;
}
if(player.isTouching(coin113)){
 coin113.destroy();
 score = score + 1;
}
if(player.isTouching(coin114)){
 coin114.destroy();
 score = score + 1;
}
if(player.isTouching(coin115)){
 coin115.destroy();
 score = score + 1;
}
if(player.isTouching(coin116)){
 coin116.destroy();
 score = score + 1;
}
if(player.isTouching(coin117)){
 coin117.destroy();
 score = score + 1;
}
if(player.isTouching(coin118)){
 coin118.destroy();
 score = score + 1;
}
if(player.isTouching(coin119)){
 coin119.destroy();
 score = score + 1;
}
if(player.isTouching(coin120)){
 coin120.destroy();
 score = score + 1;
}
if(player.isTouching(coin121)){
 coin121.destroy();
 score = score + 1;
}
if(player.isTouching(coin122)){
 coin122.destroy();
 score = score + 1;
}
if(player.isTouching(coin123)){
 coin123.destroy();
 score = score + 1;
}
if(player.isTouching(coin124)){
 coin124.destroy();
 score = score + 1;
}
if(player.isTouching(coin125)){
 coin125.destroy();
 score = score + 1;
}
if(player.isTouching(coin126)){
 coin126.destroy();
 score = score + 1;
}
if(player.isTouching(coin127)){
 coin127.destroy();
 score = score + 1;
}
if(player.isTouching(coin128)){
 coin128.destroy();
 score = score + 1;
}
if(player.isTouching(coin129)){
 coin129.destroy();
 score = score + 1;
}
if(player.isTouching(coin130)){
 coin130.destroy();
 score = score + 1;
}
if(player.isTouching(coin131)){
 coin131.destroy();
 score = score + 1;
}
if(player.isTouching(coin132)){
 coin132.destroy();
 score = score + 1;
}
if(player.isTouching(coin133)){
 coin133.destroy();
 score = score + 1;
}
if(player.isTouching(coin134)){
 coin134.destroy();
 score = score + 1;
}
if(player.isTouching(coin135)){
 coin135.destroy();
 score = score + 1;
}
if(player.isTouching(coin136)){
 coin136.destroy();
 score = score + 1;
}
if(player.isTouching(coin137)){
 coin137.destroy();
 score = score + 1;
}
if(player.isTouching(coin138)){
 coin138.destroy();
 score = score + 1;
}
if(player.isTouching(coin139)){
 coin139.destroy();
 score = score + 1;
}
if(player.isTouching(coin140)){
 coin140.destroy();
 score = score + 1;
}
if(player.isTouching(coin141)){
 coin141.destroy();
 score = score + 1;
}
if(player.isTouching(coin142)){
 coin142.destroy();
 score = score + 1;
}
if(player.isTouching(coin143)){
 coin143.destroy();
 score = score + 1;
}
if(player.isTouching(coin144)){
 coin144.destroy();
 score = score + 1;
}
if(player.isTouching(coin145)){
 coin145.destroy();
 score = score + 1;
}
if(player.isTouching(coin146)){
 coin146.destroy();
 score = score + 1;
}
if(player.isTouching(coin147)){
 coin147.destroy();
 score = score + 1;
}
if(player.isTouching(coin148)){
 coin148.destroy();
 score = score + 1;
}
if(player.isTouching(coin149)){
 coin84.destroy();
 score = score + 1;
}
if(player.isTouching(coin150)){
 coin150.destroy();
 score = score + 1;
}
if(player.isTouching(coin151)){
 coin151.destroy();
 score = score + 1;
}
if(player.isTouching(coin152)){
 coin152.destroy();
 score = score + 1;
}
if(player.isTouching(coin153)){
 coin153.destroy();
 score = score + 1;
}
fill("white")
text(mouseX+" , "+mouseY,mouseX,mouseY)
  
player.collide(wallGroup);
  }
  if(gameState === end){
    //var screen = createSprite(200,200,400,400)
    //screen.shapeColor = "black";
    fill("white")
    text("GAME OVER",200,200)
  }
  drawSprites();
}
