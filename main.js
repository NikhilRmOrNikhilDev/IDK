Webcam.set({
    height:200,
    image_format:"png",
    png_quality:100,
    borderRadius: 20
})
camera = document.getElementById("camera");

function startWebcam(){
    Webcam.attach(camera);
}
function tas(){
    Webcam.snap(function(data_url){
        document.getElementById("snapshot").innerHTML = '<img id="capturedimg" src="'+data_url+'" >';
    });
}
console.log("ml5 version:", ml5.version);

classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/ODfvU5Sj7/model.json", modelLoaded);

function modelLoaded(){
    console.log("Model is Loaded!")
}
function identifyobj(){
    img = document.getElementById("capturedimg");
    classifier.classify(img, gotResult);
}
function gotResult(error, result){
    if(error){
        console.error(error)
    }
    else{
        console.log(result)
        document.getElementById("object-result").innerHTML = result[0].label;
    }
}