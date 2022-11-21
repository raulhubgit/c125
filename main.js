lWristX=0;
rWristX=0;
difference=0;
function setup(){
    video = createCapture(VIDEO);
    video.size(550, 500)
    canvas = createCanvas(550, 500)
    canvas.position(550, 150)

    posenet = ml5.poseNet(video, modelLoaded);
    posenet.on('pose', gotPoses);
}
function draw(){
    background('#ffffff');
    textSize(difference);
    fill('#49e2e2');
    text('Raul',100,300);
}
function modelLoaded() {
    console.log("EM BORUTO: NARUTO THE MOVIE, O NARUTO GANHA UM ÓCULOS QUE SIMULA O BYAKUGAN DA HINATA");
}
function gotPoses(results) {
    if(results.length > 0){
        console.log(results)
    }
    lWristX = results[0].pose.leftWrist.x;
    rWristX = results[0].pose.rightWrist.x;
    difference = floor(lWristX - rWristX);   
    console.log(difference);
}
