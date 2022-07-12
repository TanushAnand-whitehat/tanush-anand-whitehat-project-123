function setup() {

    video = createCapture(VIDEO);
    video.size(450, 450);

    canvas = createCanvas(450, 450);
    canvas.position(800, 200);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded() {
    console.log("Model has Loaded");
}

function gotPoses(results) {
    if(results.length > 0) {
        console.log(results)
    }
}
function draw() {
    background("black")
}