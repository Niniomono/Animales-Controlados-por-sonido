function startClassification() {
    navigator.mediaDevices.getUserMedia({ audio: true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/4F1KVlHA4/model.json', modelReady);
}
function modelReady() {
   classifier.classify(gotResults);
}
function gotResults(error, results) {
    if (error) {
         console.error(error);
    }
    else {
         console.log(results);
         random_number_r = Math.floor(Math.random() * 255) + 1;
         random_number_g = Math.floor(Math.random() * 255) + 1;
         random_number_b = Math.floor(Math.random() * 255) + 1;
         document.getElementById("result_label").innerHTML = 'Escucho-'+ results[0].label;
         document.getElementById("result_confidence").innerHTML = 'Precisión - '+ (results[0].confidence*100).toFixed(2)+" %";
         document.getElementById("result_label").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_r+")";
         document.getElementById("result_confidence").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_r+")";
         img = document.getElementById('alien1');
         img1 = document.getElementById('alien2');
         img2 = document.getElementById('alien3');
         img3 = document.getElementById('alien4');
         if (results[0].label == "Gato"){
              imaeg.src = "gato.jpg";
         }
         else if (results[0].label == "Mugido") {
               imaeg.src = "pantera.jpg";
         }
         else if (results[0].label == "Rugido") {
              imaeg.src = "tigre.jpg";
        }
        else {
         imaeg.src = "chihuahua.jpg";
   }
    console.log('Got Results');    
}
}