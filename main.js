var canvas=new fabric.Canvas('myCanvas');

playerX=10;
playerY=10;
block_width=30;
block_height=30;

var player_object="";
var block_object="";

function player_update(){
    fabric.Image.fromURL("https://i.postimg.cc/zDwfFdYY/player.png",function(Img){
        player_object=Img;
        player_object.scaleToWidth(150);
        player_object.scaleToHeight(150);
player_object.set({
    top:playerY,left:playerX
});
canvas.add(player_object);
    });
}
function new_Image(get_image){
    fabric.Image.fromURL(get_image,function(Img){
        block_object=Img;
        block_object.scaleToWidth(block_width);
        block_object.scaleToHeight(block_height);
        block_object.set({
    top:playerY,left:playerX
});
canvas.add(block_object);
    });
}