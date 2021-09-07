canvas=document.getElementById('myCanvas');
ctx=canvas.getContext("2d");
rover_width=100;
rover_height=90;
roverx=10;
rovery=10;
bimg="mars.jpg";
rimg="rover.png";

function add(){

    bimgtag=new Image();
    bimgtag.onload=oploadbackground;
    bimgtag.src=bimg;

    rimgtag=new Image();
    rimgtag.onload=oploadrover;
    rimgtag.src=rimg;

}

function oploadbackground(){

     ctx.drawImage(bimgtag,0,0,canvas.width,canvas.height);

}

function oploadrover(){

    ctx.drawImage(rimgtag,roverx,rovery,rover_width,rover_height);

}

window.addEventListener("keydown",mykeydouw);

function mykeydouw(e){

  keycode=e.keyCode;

  console.log(keycode);

  if (keycode=='37'){
     Left();
  }

  if (keycode=='38'){
    up();
 }

 if (keycode=='39'){
    right();
 }

 if (keycode=='40'){
    down();
 }

}