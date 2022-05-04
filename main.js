img = " ";
status = " ";
objects = [];

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
    objectDetector.detect(img, gotResults);
}

function gotResults(error, results)
{
    if(error)
    {
        console.log(error);
    }
    console.log(results);
    objects = results;
}

function draw()
{
    image(img, 0, 0, 640, 370);

    if(status !="")
    {
       for(i =0; i < objects.length; i++)
       {
           document.getElementById("status").innerHTML = "Status: Object Detected";

           fill("#35E822");
           percent = floor(objects[i].confidence * 100);
           text(objects[i].label + " " + percent + "%", objects[i].x + 15, objects[i].y + 15);
           noFill();
           stroke("#35E822");
           rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);

       }
    }
}