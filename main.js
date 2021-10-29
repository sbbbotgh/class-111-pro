Webcam.set({
    width:350,
    height:300,
    image_format:'png',
    image_quality:100
});

camera = document.getElementById("camera");
Webcam.attach("#camera");

function take_snapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML = '<img id="captured_image" src="' + data_uri + '"/>'; 
    });
}

console.log(ml5.version);
var classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/gJFYYlvUQ/model.json', modelLoaded);

function modelLoaded(){
    console.log("model loaded");
}