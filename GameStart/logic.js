
var canvas = document.getElementById('myCanvas');
var context = canvas.getContext('2d');

      // do cool things with the context

//Draw Boar
// x1: 356.25 y1: 181.25 x2:387.5 y2:212.5 x3: 450 y3: 212.5
// x1:712.5 y1:362.5, x2:775 y2:425 , x3:900,550 
//Outer Board
context.fillStyle = 'Black';
context.fillRect(400,50,500,500);

StyleBoard();
context.strokeRect(400,50,500,500);
context.strokeRect(525,175,250,250);
context.strokeRect(587.5,237.5,125,125);

//diagonal Lines 
context.beginPath();
      context.moveTo(587.5, 237.5);
      context.lineTo(400,50);
      context.stroke();

context.beginPath();
    context.moveTo(712.5,237,5);
    context.lineTo(900,50);
    context.stroke();

context.beginPath();
    context.moveTo(587.5,362.5);
    context.lineTo(400,550);
    context.stroke();

context.beginPath();
   context.moveTo(712.5,362.5);
   context.lineTo(900,550);
   context.stroke();

// Horizontal and Vertical Lines

context.beginPath();
  context.moveTo(650,237.5);
  context.lineTo(650,50);
  context.stroke();

context.beginPath();
  context.moveTo(650,362.5);
  context.lineTo(650,550);
  context.stroke();

context.beginPath();
  context.moveTo(587.5,300);
  context.lineTo( 400,300);
  context.stroke();

context.beginPath();
  context.moveTo(712.5,300);
  context.lineTo( 900,300);
  context.stroke();
//Mouse Events Get Position

DrawPiece(400,50);
DrawPiece(525,175);
DrawPiece(587.5,237.5);

DrawPiece(650,50);
DrawPiece(650,175);
DrawPiece(650,237.5);

DrawPiece(712.5,237.5);
DrawPiece(650,175);
DrawPiece(900,50);

DrawPiece(712.5,300);
DrawPiece(900,300);
DrawPiece(806.25,300);


//DrawPiece(
function DrawPiece(xCord,yCord)
{
  context.beginPath();
  context.arc(xCord,yCord,15,0,2*Math.PI);
  StylePiece();
  context.stroke();
} 

function StylePiece() 
{ 
    context.fillStyle = 'white';
      context.fill();
      context.lineWidth = 5;
      context.strokeStyle = '#003300';
} 

function StyleBoard()
{
    context.lineWidth = 5;
      context.fillStyle = '#8ED6FF';
      context.fill();
      context.strokeStyle = 'blue';

}
function getMousePos(canvas, evt) {
        var rect = canvas.getBoundingClientRect();
        return {
          x: evt.clientX - rect.left,
          y: evt.clientY - rect.top
        };
      } 

 canvas.addEventListener('mousedown', function(evt) {
        var mousePos = getMousePos(canvas, evt);
        var message = 'Mouse position: ' + mousePos.x + ',' + mousePos.y;
        console.log(message);
        DrawPiece(mousePos.x,mousePos.y);
      }, false);
