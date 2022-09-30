noseX=0;
noseY=0;
function preload(){
    mustache=loadImage('https://i.postimg.cc/7Lp0F2GX/mustach.png');
}

function setup(){
    canvas=createCanvas(300,300);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(300,300);
    video.hide();
    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose', gotPoses);

}

function modelLoaded(){
    console.log("posenet is initialized");
}





function gotPoses(results){
    if(results.length>0){
        console.log(results);
        noseX=results[0].pose.nose.x-12;
        noseY=results[0].pose.nose.y-12;

        console.log("noseX= "+noseX);
        console.log("noseY= "+noseY);
    }
}




function draw(){
    image(video,0,0,300,300);
    image(mustache,noseX,noseY,50,50);
}



function take_snapshot(){
    save('my filter image.png');
}