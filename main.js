function start(){
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier = ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/S9Ess_PGE/model.json", modelloaded);
}
function modelloaded(){
    console.log("model is loaded");
    classifier.classify(gotResults);
}
function gotResults(error, result){

}

