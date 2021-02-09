var ball;

function setup(){

    //instantiated the database here
    database=firebase.database();
   

    createCanvas(500,500);
    ball = createSprite(250,250,10,10);
    ball.shapeColor = "red";


    //tell my program which all columns need to be refered to => .ref function
    var ballPosition=database.ref('ball/position');
    // what ever values are read we create listener to listen the values using .on function
    ballPosition.on("value",readPosition)
}
function readPosition(data)
{
   position=data.val();
   console.log(position);
   ball.x=position.x;
   ball.y=position.y;
}
function draw(){
    background("white");
    if(keyDown(LEFT_ARROW)){
        changePosition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        changePosition(1,0);
    }
    else if(keyDown(UP_ARROW)){
        changePosition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        changePosition(0,+1);
    }
    drawSprites();
}

function changePosition(x,y){
   database.ref('ball/position').set(
    {
       'x':position.x+x,
       'y':position.y+y,
    }
   )
}
