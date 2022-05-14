Webcam.set({
    width:300,
    height:300,
    image_format :'png',
    png_quality:90,
    constraints: {
        facingMode:"envionment"
    }
});

camera = document.getElementById("camera");
Webcam.attach('#camera');
function take_snapshot()
{
    Webcam.snap(function(data_uri) {
        document.getElementById("result").innerHTML= '<img id="captured_image" src="'+data_uri+'"/>';    

    });
}

classifier =ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/ItMjypWaq/', modelLoaded);

function modelLoaded(){
    console.log('Model Loaded!');
}

function check()
{
    img = document.getElementById('captured_image');
    classifier.classify(img, gotResult);
}