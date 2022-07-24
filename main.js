function setup()
{
    video = create.capture(VIDEO);
    video.size(550, 500);

    posenet = ml5.posenet(video, modelLoaded);
    posenet.on('pose', gotPoses);

    canvas = createCanvas(550, 500);
    canvas.position(560, 150);
}

function modelLoaded()
{
    console.log('PoseNet is initilazied!');
}

function gotPoses(results)
{
    if(results.lenght > 0)
    {
        console.log(results);
    }
}

function draw()
{
    background('#969A97');
}