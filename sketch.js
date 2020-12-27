var ball;
var database,position;

function setup(){
    database = firebase.database();
    createCanvas(500,500);
    ball = createSprite(250,250,10,10);
    ball.shapeColor = "red";

    ballposition = database.ref('ball/position');
    ballposition.on("value",readPosition,showError)
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
    ballposition.set({
        x:position.x +x,
        y:position.y +y})
}


function readPosition(data){
    position = data.val();
    ball.x = position.x;
    ball.y = position.y;
}

function showError(){
    console.log("abcddyedgK");

}

//.ref = refer to a location of the database value;
//.on = it moniters the value of database;
//.set = used to set the values in the database;
//.update = used to update the values in the database;
//.val = to extract the values of the database;