img = " ";
status = " ";

function preload()
{
    img = loadImage('dog_cat.jpg');
}

function setup()
{
    canvas = createCanvas(640, 370);
    canvas.position(320, 150);
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting Objects";
}

function modelLoaded()
{
    console.log("Model Loaded!");
    status = true;
    objectDetector.detect(img, gotResult);
}

function gotResults(error, results)
{
    if(error)
    {
        console.log(error);
    }
    console.log(results);
}

function draw()
{
    image(img, 0, 0, 640, 370);
    fill("#35E822");
    text("Dog", 45, 75);
    noFill();
    stroke("#35E822");
    rect(30, 60, 450, 300);   

    fill("#35E822");
    text("Cat", 320, 120);
    noFill();
    stroke("#35E822");
    rect(300, 90, 270, 275);
}