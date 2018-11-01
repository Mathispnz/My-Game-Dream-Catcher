var canvas = document.querySelector(".dream-catcher");
var ctx = canvas.getContext("2d");
var canvasWidth = 650;

//create a play game introduction first screen
// var introPlay = {
//   drawMe : function introPlay() {
//     ctx.font = "70px -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif";
//     ctx.fillStyle = "white";
//     ctx.fillText("Play Game", 300, 325);
//   }
// }

// first position of the circle (player)
var player = {
  x: 325,
  y: 325,
  r: 25,
  level: 1,
};

//class to draw the rectangles in a different place
class Rect {
  constructor (rectx, recty, widthrect, heightrect) {
    this.x = rectx;
    this.y = recty;
    this.width = widthrect;
    this.height = heightrect;
    this.isOut = false;
    this.isGameOver = false;
  }

  drawRect() {
  ctx.strokeStyle = "white";
  // ctx.borderRadiusStyle = "5px";
  ctx.strokeRect(this.x, this.y, this.width, this.height);
  };
};

// draw all the rectangles that the player has to reach
var allRectangles = [ 
  new Rect(Math.floor(Math.random()*600), Math.floor(Math.random()*600), 20, 20),
  new Rect(Math.floor(Math.random()*600), Math.floor(Math.random()*600), 20, 20),
  new Rect(Math.floor(Math.random()*600), Math.floor(Math.random()*600), 20, 20),
  new Rect(Math.floor(Math.random()*600), Math.floor(Math.random()*600), 20, 20),
  new Rect(Math.floor(Math.random()*600), Math.floor(Math.random()*600), 20, 20),
  new Rect(Math.floor(Math.random()*600), Math.floor(Math.random()*600), 20, 20),
  new Rect(Math.floor(Math.random()*600), Math.floor(Math.random()*600), 20, 20), ];

// draw the lines 
class Line {
  constructor (xstart, xstop, yvalue) {
    this.xsta = xstart;
    this.xsto = xstop;
    this.y = yvalue;
    this.isGameOver = false;
  }

  drawLine() {
    ctx.beginPath();
    ctx.lineWidth = 2; //considered as the height of the line
    ctx.moveTo(this.xsta, this.y);
    ctx.lineTo(this.xsto, this.y);
    ctx.stroke();
    //make the lines move
    this.xsta += 5;
    this.xsto += 5;
    //make the lines go back to where they started
    if (this.xsta === 1000 && this.xsto === 1000) {
      return this.xsta === xstart + this.xsto === xstop;
    }
  }
}

var allLines = [
  
];

var allLines2 = [

];

var allLines3 = [

];

//set an interval and push a line with a random xsto and y into the allLines array
//allLines 1
var intervalId;
function setInterval1() {
intervalId = setInterval(function () {

  allLines.push(new Line(-50, 0, Math.random()*canvasWidth));
  allLines.push(new Line(-20, 0, Math.random()*canvasWidth));
  allLines.push(new Line(-30, 30, Math.random()*canvasWidth));
  allLines.push(new Line(0, 30, Math.random()*canvasWidth));
  allLines.push(new Line(-70, -50, Math.random()*canvasWidth));

  allLines = allLines.filter(function(oneLine){
    return oneLine.xsta < canvasWidth;
  })

}, 1000)};

//allLines 2
function setInterval2() {

intervalId = setInterval(function () {
  allLines2.push(new Line(-50, 0, Math.random()*canvasWidth));
  allLines2.push(new Line(-50, 0, Math.random()*canvasWidth));
  allLines2.push(new Line(-50, 0, Math.random()*canvasWidth));
  allLines2.push(new Line(-20, 0, Math.random()*canvasWidth));
  allLines2.push(new Line(-30, 30, Math.random()*canvasWidth));
  allLines2.push(new Line(0, 30, Math.random()*canvasWidth));
  allLines2.push(new Line(-70, -50, Math.random()*canvasWidth));

  allLines2 = allLines2.filter(function(oneLine){
    return oneLine.xsta < canvasWidth;
  })

}, 800)};


//allLines3
function setInterval3() {
  intervalId = setInterval(function () {

  allLines3.push(new Line(-50, 0, Math.random()*canvasWidth));
  allLines3.push(new Line(-20, 0, Math.random()*canvasWidth));
  allLines3.push(new Line(-20, 0, Math.random()*canvasWidth));
  allLines3.push(new Line(-20, 0, Math.random()*canvasWidth));
  allLines3.push(new Line(-20, 0, Math.random()*canvasWidth));
  allLines3.push(new Line(-30, 30, Math.random()*canvasWidth));
  allLines3.push(new Line(0, 30, Math.random()*canvasWidth));
  allLines3.push(new Line(-70, -50, Math.random()*canvasWidth));

  allLines3 = allLines3.filter(function(oneLine){
    return oneLine.xsta < canvasWidth;
  })

}, 600)};

//background sliding

  var backgroundImg = new Image();
  backgroundImg.src = "./images/backgroundstar.jpg";

  var background = {
    x: 0,
    y: 0,
    width: 0,
    height: 0,
    drawMe() {
      ctx.drawImage(backgroundImg, this.x, 0, 1350, 650);
      this.x -= 1;
      if (this.x < -651) {
        this.x = 0;
      }
    }
      
  };
  
//function to draw the circle
function drawCircle () {
  ctx.beginPath();
  ctx.arc(player.x, player.y, player.r, 0, 2*Math.PI);
  ctx.lineWidth = 2;
  ctx.globalAlpha = 10;
  ctx.shadowColor = "white";
  ctx.shadowBlur = 15;
  ctx.strokeStyle = "#6b42f4";
  ctx.stroke();
  ctx.beginPath();
}

// $(".intro-game").click(function () {
//   $(".intro-game").hide();
//   drawingLoop();
// })

$(".level1").click(function () {
  player.level = 1;
  $(".intro-game").hide();
  drawingLoop();
  setInterval1();
})

$(".level2").click(function () {
  player.level = 2;
  $(".intro-game").hide();
  drawingLoop();
  setInterval2();
})

$(".level3").click(function () {
  player.level = 3;
  $(".intro-game").hide();
  drawingLoop();
  setInterval3();
})


//the loop which draws everything
function drawingLoop () {
  ctx.clearRect(0, 0, 650, 650);

  background.drawMe();

    //draw the circle which represents the player
    drawCircle();

    //draw the rectangles
    ctx.beginPath();
    allRectangles.forEach(function(oneRect) {
      oneRect.drawRect();
    });

    //draw the lines
    if (player.level === 1) {
    allLines.forEach(function(oneLine) {
      oneLine.drawLine();
    })}
    else if (player.level === 2) {
    allLines2.forEach(function(oneLine) {
      oneLine.drawLine();
    })}
    else if (player.level === 3) {
      allLines3.forEach(function(oneLine) {
        oneLine.drawLine();
      })};

    allRectangles.forEach(oneRect => {
      if (!Rect.isOut && RectCircleColliding(player, oneRect)){
          score += 5
       }
    })


    //delete one rect when the player reaches it 
    
    allRectangles = allRectangles.filter(function (oneRect) {
      return !RectCircleColliding(player, oneRect);
      
    });


    //you win when there is no rectangle left
    

    if (player.level === 1) {
      allLines.forEach(function(oneLine) {
        if (collisionLines(player, oneLine)){
          return oneLine;
        };
      })}
    else if (player.level === 2) {
      allLines2.forEach(function(oneLine) {
        if (collisionLines(player, oneLine)){
          return oneLine;
        };
      })}
    else if (player.level === 3) {
      allLines3.forEach(function(oneLine) {
        if (collisionLines(player, oneLine)){
          return oneLine;
        };
      })};

    //upload score
    $(".score").html(score);

    //game over score 0
    if (score < 1) {
      gameOver.drawMe();
      Line.isGameOver = true;
      restartButton();
    }

     
    if (allRectangles.length === 0){
      youWin.drawMe();
      Rect.isGameOver = true;
      restartButton();
    }

    function restartButton (){
      $(".restart").css('display', 'block');
    }


    // allLines = allLines.filter(function (oneLine) {
    //   return;
    // });
  
  requestAnimationFrame(function () {
    if (!Line.isGameOver && !Rect.isGameOver){
    drawingLoop();
  } else {
    return;
  }

  });
};

// call the everything-drawing loop
// drawingLoop();

//collision function between the squares and the circles (player)
function RectCircleColliding(circle,rect){

  var distX = Math.abs(circle.x - rect.x-rect.width/2);
  var distY = Math.abs(circle.y - rect.y-rect.height/2);

  if (distX > (rect.width/2 + circle.r)) { return false; }
  if (distY > (rect.height/2 + circle.r)) { return false; }

  if (distX <= (rect.width/2)) { return true; }
  if (distY <= (rect.height/2)) { return true; }

  var dx=distX-rect.width/2;
  var dy=distY-rect.height/2;
  return (dx*dx+dy*dy<=(circle.r*circle.r));

};




//collision function between the lines and the player

var score = 50; 
function collisionLines (circle, line) {
  var distX = Math.abs(circle.x - line.xsto);
  var distY = Math.abs(circle.y - line.y);

  if (distX < circle.r && distY < circle.r) {
    score -= 2;
    return true;
  }
  else {
    return false;
  }
  // var lineWidth = line.xsto - line.xsta;
  // var lineHeight = 2;
  // // var lineHeight = lineWidth;
  // var distX = Math.abs(circle.x - line.xsto-lineWidth/2);
  // var distY = Math.abs(circle.y - line.y-lineHeight/2);

  // if (distX > (lineWidth/2 + circle.r)) { return false; }
  // if (distY > (lineHeight/2 + circle.r)) { return false; }

  // if (distX <= (lineWidth/2)) { 
  //   return true; }
  //   score -= 1;
  // if (distY <= (lineHeight/2)) { 
  //   score -= 1;
  //   return true; }

  // var dx=distX-lineWidth/2;
  // var dy=distY-lineHeight/2;
  
  // console.log(score);
  // return (dx*dx+dy*dy<=(circle.r*circle.r));
  
}



document.onkeydown = function (event) {
  switch (event.keyCode) {

    case 37: 
      player.x -= 10; //left arrow
      break;
    case 38: //up arrow
      player.y -= 10;
      break;
    case 39: //right arrow
      player.x += 10;
      break;
    case 40: //down arrow
      player.y += 10;
      break;
  }
};



//gameover canvas establishing & styling
var gameOver = {
  drawMe : function gameOver() {
      ctx.rect(0,0,0,0);
      ctx.fillStyle = "deepblue";
      ctx.fill();
      ctx.font = "250 70px -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif";
      ctx.fillStyle = "deepblue";
      ctx.fillText("Game Over", 175, 325);   

  },
}

// message you win when there is no rectangles left
var youWin = {
  drawMe : function youWin() {
    ctx.rect(0,0,0,0);
    ctx.fillStyle = "deepblue";
    ctx.fill();
    ctx.font = "250 70px -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif";
    ctx.fillStyle = "deepblue";
    ctx.fillText("You won !!!", 175, 325);   

  }
}

