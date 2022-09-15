moustacheX=0;
moustacheY=0;


function preload(){
moustache=loadImage("https://i.postimg.cc/B64XLzNL/2-2-moustache-png-file-thumb.png");
}


function setup() {
    canvas= createCanvas(300,300);
    canvas.center();
    video=createCapture(VIDEO) ;
    video.size(300,300);
    video.hide()

    poseNet =ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded() {
    console.log('poseNet Is Initialized');
}


function draw() {
image (video, 0,0,300,300);
image(moustache, moustacheX, moustacheY, 50,40)
}


function take_snapshot(){
    save('myFilterImage.png');
}

function gotPoses(results)
{
    if(results.length>0)
    {
     console.log(results);
     moustacheX= results[0].pose.nose.x  -20;
     moustacheY= results[0].pose.nose.y  +5;
     console.log("nose x=" + results[0].pose.nose.x);
     console.log("nose y=" + results[0].pose.nose.y);
    }
}